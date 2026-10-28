import { useSyncExternalStore } from "react";

let docked = false;
const listeners = new Set<() => void>();

export function setHeroLogoDocked(value: boolean) {
  if (value === docked) return;
  docked = value;
  listeners.forEach((l) => l());
}

export function useHeroLogoDocked() {
  return useSyncExternalStore(
    (cb) => {
      listeners.add(cb);
      return () => listeners.delete(cb);
    },
    () => docked,
    () => false,
  );
}

// Attribute the hero uses to find the header's logo position
export const LOGO_SLOT_ATTR = "data-header-logo-slot";
