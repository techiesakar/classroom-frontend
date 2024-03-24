import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { randomColor } from "./tailwind.colors";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getColorByIndex = (index: number) => {
  const colorIndex = index % randomColor.length;
  return randomColor[colorIndex];
};

export function convertToAMPM(utcTime: string) {
  const date = new Date(utcTime);
  const hour = date.getUTCHours();
  const minute = date.getUTCMinutes();

  // Convert hour to 12-hour format
  let hour12 = hour % 12;
  hour12 = hour12 || 12; // 0 should be converted to 12

  // Determine whether it's AM or PM
  const period = hour < 12 ? "AM" : "PM";

  // Format the time
  const formattedTime = `${hour12}:${
    minute < 10 ? "0" : ""
  }${minute} ${period}`;
  return formattedTime;
}
