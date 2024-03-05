import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { randomColor } from "./tailwind.colors"
import { cache } from "react"
import axiosInstance from "./axios-instance"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const getColorByIndex = (index: number) => {
  const colorIndex = index % randomColor.length
  return randomColor[colorIndex]
}
