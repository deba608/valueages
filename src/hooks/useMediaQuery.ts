"use client";

import { useMemo, useSyncExternalStore } from "react";

/**
 * Returns true when the viewport matches the given CSS media query string.
 * Uses useSyncExternalStore for tear-free reads and correct SSR hydration.
 *
 * @example
 * const isDesktop = useMediaQuery("(min-width: 1024px)");
 */
export function useMediaQuery(query: string): boolean {
  const subscribe = useMemo(
    () => (callback: () => void) => {
      const mql = window.matchMedia(query);
      mql.addEventListener("change", callback);
      return () => mql.removeEventListener("change", callback);
    },
    [query],
  );

  const getSnapshot = useMemo(
    () => () => window.matchMedia(query).matches,
    [query],
  );

  const getServerSnapshot = () => false;

  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}
