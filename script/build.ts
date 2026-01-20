import { build as esbuild } from "esbuild";
import { build as viteBuild } from "vite";
import { rm, readFile, writeFile, mkdir } from "fs/promises";
import path from "path";

// server deps to bundle to reduce openat(2) syscalls
// which helps cold start times
const allowlist = [
  "@google/generative-ai",
  "axios",
  "connect-pg-simple",
  "cors",
  "date-fns",
  "drizzle-orm",
  "drizzle-zod",
  "express",
  "express-rate-limit",
  "express-session",
  "jsonwebtoken",
  "memorystore",
  "multer",
  "nanoid",
  "nodemailer",
  "openai",
  "passport",
  "passport-local",
  "pg",
  "stripe",
  "uuid",
  "ws",
  "xlsx",
  "zod",
  "zod-validation-error",
];

async function buildAll() {
  await rm("dist", { recursive: true, force: true });

  console.log("building client...");
  await viteBuild();

  console.log("building SSR bundle...");
  await viteBuild({
    build: {
      ssr: "src/entry-server.tsx",
      outDir: "../dist/server", // Relative to root (client)
      emptyOutDir: true,
      rollupOptions: {
        input: "src/entry-server.tsx"
      }
    }
  });

  console.log("prerendering...");
  // Use absolute path for import to avoid resolution issues
  const entryServerPath = path.resolve(process.cwd(), "dist/server/entry-server.js");
  const { render, routes } = await import(entryServerPath);
  const template = await readFile("dist/public/index.html", "utf-8");

  for (const url of routes) {
    const appHtml = render(url);
    const html = template.replace(`<!--app-html-->`, appHtml);
    
    const relativePath = url === '/' ? 'index.html' : `${url.substring(1)}/index.html`;
    const filePath = path.join("dist/public", relativePath);
    const dir = path.dirname(filePath);
    
    await mkdir(dir, { recursive: true });
    await writeFile(filePath, html);
    console.log(`Pre-rendered: ${url}`);
  }

  console.log("building server...");
  const pkg = JSON.parse(await readFile("package.json", "utf-8"));
  const allDeps = [
    ...Object.keys(pkg.dependencies || {}),
    ...Object.keys(pkg.devDependencies || {}),
  ];
  const externals = allDeps.filter((dep) => !allowlist.includes(dep));

  await esbuild({
    entryPoints: ["server/index.ts"],
    platform: "node",
    bundle: true,
    format: "cjs",
    outfile: "dist/index.cjs",
    define: {
      "process.env.NODE_ENV": '"production"',
    },
    minify: true,
    external: externals,
    logLevel: "info",
  });
}

buildAll().catch((err) => {
  console.error(err);
  process.exit(1);
});
