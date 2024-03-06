import { HTMLAttributes, PropsWithChildren } from "react";
import { TailwindColor, TailwindSize } from "~/types/tailwind-props.type";
import { TAILWIND_SIZE_KEYS } from "~/utils/constants/tailwind-values.utils";

const JUSTIFY = {
  start: "justify-start",
  center: "justify-center",
  end: "justify-end",
  between: "justify-between",
  around: "justify-around",
};

const ALIGN = {
  top: "align-top",
  middle: "align-middle",
  bottom: "align-bottom",
};

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

const CURSOR = { pointer: "cursor-pointer", default: "cursor-default" };

type Props = {
  justify?: keyof typeof JUSTIFY;
  align?: keyof typeof ALIGN;
  flexDirection?: keyof typeof FLEX_DIRECTION;
  flexWrap?: keyof typeof FLEX_WRAP;
  fullFlex?: boolean;
  fullWidth?: boolean;
  fullHeight?: boolean;
  width?: TailwindSize | string;
  height?: TailwindSize | string;
  bgColor?: TailwindColor;
  color?: TailwindColor;
  cursor?: keyof typeof CURSOR;
} & HTMLAttributes<HTMLDivElement>;

export const FlexBox = ({
  justify = "start",
  align = "top",
  flexDirection = "row",
  flexWrap = "nowrap",
  fullFlex,
  fullWidth,
  fullHeight,
  width = "auto",
  height = "auto",
  bgColor,
  color,
  cursor = "default",
  className,
  children,
}: PropsWithChildren<Props>) => {
  // Flex
  const justifyClass = JUSTIFY[justify];
  const alignClass = ALIGN[align];
  const flexDirectionClass = FLEX_DIRECTION[flexDirection];
  const flexWrapClass = FLEX_WRAP[flexWrap];

  // Sizes
  const fullWidthClass = fullWidth ? "w-full" : "";
  const fullHeightClass = fullHeight ? "h-full" : "";
  const fullFlexClass = fullFlex ? "flex-1" : "";
  const widthClass = TAILWIND_SIZE_KEYS.includes(width as TailwindSize)
    ? `w-${width}`
    : `w-[${width}]`;
  const heightClass = TAILWIND_SIZE_KEYS.includes(height as TailwindSize)
    ? `h-${height}`
    : `h-[${height}]`;

  // Colors
  const bgColorClass = bgColor ? `bg-${bgColor}` : "";
  const colorClass = color ? `text-${color}` : "";

  // Misc.
  const cursorClass = CURSOR[cursor];

  return (
    <div
      className={`flex ${justifyClass} ${alignClass} ${flexDirectionClass} ${flexWrapClass} ${fullFlexClass} ${widthClass} ${heightClass} ${fullWidthClass} ${fullHeightClass} ${bgColorClass} ${colorClass} ${cursorClass} ${className}`}
    >
      {children}
    </div>
  );
};
