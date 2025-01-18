import React from "react";
import PropTypes from "prop-types";

const shapes = {
  square: "rounded-[0px]",
  circle: "rounded-[50%]",
  round: "rounded-lg",
};
const variants = {
  fill: {
    black_900_33: "bg-black-900_33 text-black-900_02",
    white_A700: "bg-white-a700 shadow-md",
    red_A700: "bg-red-a700",
    green_900: "bg-green-900 text-white-a700",
    deep_orange_500: "bg-deep_orange-500 text-white-a700",
  },
  outline: {
    gray_500: "border-gray-500 border border-solid text-gray-800",
  },
};
const sizes = {
  xs: "h-[28px] px-4 text-[13px]",
  xl: "h-[40px] px-3",
  lg: "h-[36px] px-[34px] text-[14px]",
  sm: "h-[32px] px-[18px] text-[15px]",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant = "fill",
  size = "sm",
  color = "deep_orange_500",
  ...restProps
}) => {
  return (
    <button
      className={`${className} flex flex-row items-center justify-center text-center cursor-pointer whitespace-nowrap ${shape && shapes[shape]} ${size && sizes[size]} ${variant && variants[variant]?.[color]}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  leftIcon: PropTypes.node,
  rightIcon: PropTypes.node,
  shape: PropTypes.oneOf(["square", "circle", "round"]),
  size: PropTypes.oneOf(["xs", "xl", "lg", "sm"]),
  variant: PropTypes.oneOf(["fill", "outline"]),
  color: PropTypes.oneOf(["black_900_33", "white_A700", "red_A700", "green_900", "deep_orange_500", "gray_500"]),
};

export { Button };
