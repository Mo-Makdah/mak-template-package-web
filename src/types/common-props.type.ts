import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "tailwind.config";

const tailwind = resolveConfig(tailwindConfig);

export type TailwindColors = keyof typeof tailwind.theme.colors;
export type TailwindWidth = keyof typeof tailwind.theme.width;
