import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

let triggerErrorPopup: (msg: string) => void;

export const registerErrorHandler = (callback: (msg: string) => void) => {
  triggerErrorPopup = callback;
};

export const showErrorPopup = (message: string) => {
  if (triggerErrorPopup) triggerErrorPopup(message);
};

