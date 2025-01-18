import React from "react";

const sizes = {
  textxs: "text-[10px] font-normal not-italic",
  texts: "text-[12px] font-normal not-italic",
  textmd: "text-[13px] font-normal not-italic",
  textlg: "text-[14px] font-normal not-italic",
  textxl: "text-[15px] font-normal not-italic",
  text2xl: "text-[18px] font-normal not-italic sm:text-[15px]",
  text3xl: "text-[40px] font-normal not-italic lg:text-[40px] md:text-[38px] sm:text-[34px]",
};

const Text = ({ children, className = "", as, size = "textxl", ...restProps }) => {
  const Component = as || "p";

  return (
    <Component className={`text-black-900_02 font-poppins ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Text };
