import React from "react";

const sizes = {
  headingxs: "text-[12px] font-semibold",
  headings: "text-[14px] font-semibold",
  headingmd: "text-[15px] font-semibold",
  headinglg: "text-[16px] font-semibold sm:text-[13px]",
  headingxl: "text-[18px] font-semibold sm:text-[15px]",
  heading2xl: "text-[20px] font-semibold sm:text-[17px]",
  heading3xl: "text-[30px] font-bold lg:text-[30px] md:text-[28px] sm:text-[25px]",
  heading4xl: "text-[40px] font-semibold lg:text-[40px] md:text-[38px] sm:text-[34px]",
  heading5xl: "text-[60px] font-bold lg:text-[60px] md:text-[52px] sm:text-[51px]",
};

const Heading = ({ children, className = "", size = "headingxl", as, ...restProps }) => {
  const Component = as || "h6";

  return (
    <Component className={`font-poppins ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Heading };
