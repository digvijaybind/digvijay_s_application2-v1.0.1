import React from "react";

const sizeClasses = {
  txtSFProTextBold40: "font-bold font-sfprotext",
  txtSFProTextRegular18: "font-normal font-sfprotext",
  txtSFProTextRegular16Bluegray700: "font-normal font-sfprotext",
  txtSFProTextBold30: "font-bold font-sfprotext",
  txtSFProTextRegular16: "font-normal font-sfprotext",
  txtSFProTextRegular16Blue100: "font-normal font-sfprotext",
  txtSFProTextRegular14: "font-normal font-sfprotext",
  txtSFProTextRegular12: "font-normal font-sfprotext",
  txtSFProTextLight14: "font-light font-sfprotext",
  txtSFProTextSemibold1738: "font-semibold font-sfprotext",
  txtSFProTextRegular1529: "font-normal font-sfprotext",
  txtInterRegular12: "font-inter font-normal",
  txtSFProTextSemibold32: "font-semibold font-sfprotext",
  txtSFProTextRegular14Bluegray700: "font-normal font-sfprotext",
  txtSFProTextRegular14Bluegray500: "font-normal font-sfprotext",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
