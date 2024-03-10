import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "../../tailwind.config";
import { TAILWIND_SIZE_KEYS } from "../utils/constants/tailwind-values.utils";
import { NestedObjectKeys } from "./common.type";

const tailwind = resolveConfig(tailwindConfig);

export type TailwindColor = NestedObjectKeys<typeof tailwind.theme.colors>;
export type TailwindSize = (typeof TAILWIND_SIZE_KEYS)[number];
