import { PropsWithChildren } from "react";
import { TailwindColors } from "~/types/common-props.type";

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

const CURSOR = {"pointer": "cursor-pointer" , "default": "cursor-default"};

type Props = {
  justify?: keyof typeof JUSTIFY;
  align?: keyof typeof ALIGN;
  flexDirection?: keyof typeof FLEX_DIRECTION;
  flexWrap?: keyof typeof FLEX_WRAP;
  gap?: string;
  fullFlex?: boolean;
  fullWidth?: boolean;
  fullHeight?: boolean;
  width?: string;
  height?: string;
  maxWidth?: string;
  maxHeight?: string;
  bgColor?: TailwindColors;
  color?: TailwindColors;
  padding?: string;
  margin?: string;
  borderRadius?: string;
  border?: string;
  cursor?: keyof typeof CURSOR;
};

export const FlexBox = ({
  justify = "start",
  align = "top",
  flexDirection = "row",
  flexWrap = "nowrap",
  gap,
  fullFlex,
  fullWidth,
  fullHeight,
  width,
  height,maxWidth,maxHeight,
  bgColor,
  color,padding,margin,border,borderRadius,cursor = "default",
  children,
}: PropsWithChildren<Props>) => {
  // Flex
  const justifyClass = JUSTIFY[justify];
  const alignClass = ALIGN[align];
  const flexDirectionClass = FLEX_DIRECTION[flexDirection];
  const flexWrapClass = FLEX_WRAP[flexWrap];
  const gapClass = ;

  // Sizes
  const fullWidthClass = fullWidth ? "w-full" : "";
  const fullHeightClass = fullHeight ? "h-full" : "";
  const fullFlexClass = fullFlex ? "flex-1" : "";
  const widthClass = ;
  const heightClass = ;
  const maxWidthClass = ;
  const maxHeightClass = ;

  // Colors
  const bgColorClass = bgColor ? `bg-${bgColor}` : "";
  const colorClass = color ? `text-${color}` : "";

  // Box
  const paddingClass = ;
  const margingClass = ;
  const borderClass = ;
  const borderRadiusClass = ;

  // Misc.
  const cursorClass = CURSOR[cursor] ;

  return (
    <div
      className={`flex ${justifyClass} ${alignClass} ${flexDirectionClass} ${flexWrapClass} ${fullFlexClass} ${fullWidthClass} ${fullHeightClass} ${bgColorClass} ${colorClass} ${cursorClass} `}
    >
      {children}
    </div>
  );
};
