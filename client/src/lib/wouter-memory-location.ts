import mitt from 'mitt';
import { useSyncExternalStore } from 'react';

/**
 * In-memory location that supports navigation
 * Copied and modified from wouter/memory-location to support SSR with getServerSnapshot
 */

export const memoryLocation = ({
  path = "/",
  static: staticLocation,
  record,
}: { path?: string; static?: boolean; record?: boolean } = {}) => {
  let currentPath = path;
  const history = [currentPath];
  const emitter = mitt();

  const navigateImplementation = (path: string, { replace = false }: { replace?: boolean } = {}) => {
    if (record) {
      if (replace) {
        history.splice(history.length - 1, 1, path);
      } else {
        history.push(path);
      }
    }

    currentPath = path;
    emitter.emit("navigate", path);
  };

  const navigate = !staticLocation ? navigateImplementation : () => null;

  const subscribe = (cb: () => void) => {
    emitter.on("navigate", cb);
    return () => emitter.off("navigate", cb);
  };

  const useMemoryLocation = () => [
    useSyncExternalStore(subscribe, () => currentPath, () => currentPath),
    navigate,
  ];

  function reset() {
    // clean history array with mutation to preserve link
    history.splice(0, history.length);

    navigateImplementation(path);
  }

  return {
    hook: useMemoryLocation,
    navigate,
    history: record ? history : undefined,
    reset: record ? reset : undefined,
  };
};
