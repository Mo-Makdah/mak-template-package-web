import { PropsWithChildren } from "react";

import resolveConfig from "tailwindcss/resolveConfig";
// import tailwindConfig from "sr";

const FLEX_DIRECTION = {
  row: "flex-row",
  "row-reverse": "flex-row-reverse",
  column: "flex-column",
  "column-reverse": "flex-column-reverse",
};

const FLEX_WRAP = {
  nowrap: "flex-nowrap",
  wrap: "flex-wrap",
};

type JustifyContent =
  | "flex-start"
  | "center"
  | "flex-end"
  | "space-between"
  | "space-around";
type AlignItems = "flex-start" | "center" | "flex-end" | "stretch" | "baseline";
type Cursor = "pointer" | "default";

type Props = {
  width?: string;
  height?: string;
  bgColor?: keyof Theme["colors"];
  color?: keyof Theme["colors"];
  padding?: string;
  margin?: string;
  borderRadius?: string;
  maxWidth?: string;
  maxHeight?: string;
  border?: string;
  cursor?: Cursor;
  fullFlex?: boolean;
  fullWidth?: boolean;
  fullHeight?: boolean;
  flexDirection?: keyof typeof FLEX_DIRECTION;
  flexWrap?: keyof typeof FLEX_WRAP;
  justify?: JustifyContent;
  align?: AlignItems;
  gap?: string;
};

export const FlexBox = ({
  fullFlex,
  fullWidth,
  fullHeight,
  flexDirection = "row",
  flexWrap = "nowrap",
  children,
}: PropsWithChildren<Props>) => {
  const fullFlexClass = fullFlex ? "flex-1" : undefined;
  const fullWidthClass = fullWidth ? "w-full" : undefined;
  const fullHeightClass = fullHeight ? "h-full" : undefined;
  const flexDirectionClass = FLEX_DIRECTION[flexDirection];
  const flexWrapClass = FLEX_WRAP[flexWrap];

  return (
    <div
      className={`flex ${fullFlexClass} ${fullWidthClass} ${fullHeightClass} ${flexDirectionClass} ${flexWrapClass} w-[5%]`}
    >
      {children}
    </div>
  );
};
