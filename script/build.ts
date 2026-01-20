import { build as viteBuild } from "vite";
import { rm, readFile, writeFile, mkdir } from "fs/promises";
import path from "path";

async function buildAll() {
  await rm("dist", { recursive: true, force: true });

  console.log("building client...");
  await viteBuild();

  console.log("building SSR bundle...");
  await viteBuild({
    build: {
      ssr: "src/entry-server.tsx",
      outDir: "../dist/server",
      emptyOutDir: true,
      rollupOptions: {
        input: "src/entry-server.tsx"
      }
    }
  });

  console.log("prerendering...");
  const entryServerPath = path.resolve(process.cwd(), "dist/server/entry-server.js");
  const { render, routes } = await import(entryServerPath);
  const template = await readFile("dist/public/index.html", "utf-8");

  for (const url of routes) {
    const appHtml = render(url);
    const html = template.replace(``, appHtml);
    
    const relativePath = url === '/' ? 'index.html' : `${url.substring(1)}/index.html`;
    const filePath = path.join("dist/public", relativePath);
    const dir = path.dirname(filePath);
    
    await mkdir(dir, { recursive: true });
    await writeFile(filePath, html);
    console.log(`Pre-rendered: ${url}`);
  }
  
  console.log("Static build complete! Deploy the 'dist/public' folder.");
}

buildAll().catch((err) => {
  console.error(err);
  process.exit(1);
});