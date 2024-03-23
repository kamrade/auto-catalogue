import { writable } from "svelte/store";
import { type IToast } from "$lib";

const generateId = () => Math.floor(Math.random() * 10000);

export const toasts = writable<IToast[]>([]);

export const addToast = (toast: IToast) => {
  if (toast.text !== "") {
    const id = generateId();

    const defaults: Partial<IToast> = {
      id,
      type: "info",
      dismissible: true,
      timeout: 5000
    };

    let newToast = { ...defaults, ...toast };

    toasts.update((all) => [newToast, ...all]);

    if (newToast.timeout) {
      setTimeout(() => dismissToast(id), newToast.timeout);
    }
  }
};

export const dismissToast = (id: number) => {
  toasts.update((all) => all.filter((t) => t.id !== id));
};
