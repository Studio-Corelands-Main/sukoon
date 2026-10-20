"use client";

import { useSyncExternalStore } from "react";

// Shared header visibility so elements outside <Headers /> (e.g. the home hero
// logo) can hide and show together with the header.
let hidden = false;
const listeners = new Set<() => void>();

const subscribe = (listener: () => void) => {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
};

export const setHeaderHidden = (value: boolean) => {
  if (hidden === value) return;
  hidden = value;
  listeners.forEach((listener) => listener());
};

export const useHeaderHidden = () =>
  useSyncExternalStore(
    subscribe,
    () => hidden,
    () => false,
  );
