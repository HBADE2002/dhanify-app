// src/app/fonts.js
import localFont from "next/font/local";

export const gyrotrope = localFont({
  src: [
    {
      path: "../public/fonts/Gyrotrope-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/Gyrotrope-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/Gyrotrope-Semibold.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/fonts/Gyrotrope-Bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/fonts/Gyrotrope-ExtraBold.otf",
      weight: "800",
      style: "normal",
    },
    {
      path: "../public/fonts/Gyrotrope-Black.otf",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-gyrotrope",
});
