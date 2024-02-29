import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { randomColor } from "./tailwind.colors"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const getColorByIndex = (index: number) => {
  const colorIndex = index % randomColor.length
  return randomColor[colorIndex]
}