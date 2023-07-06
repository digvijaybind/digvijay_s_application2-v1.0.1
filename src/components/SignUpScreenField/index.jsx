import React from "react";

import { Text } from "components";

const SignUpScreenField = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col items-start justify-between w-full">
          <div className="flex flex-col items-center justify-start w-[166px]">
            {!!props?.label ? (
              <Text
                className="text-base text-blue-100 w-auto"
                size="txtSFProTextRegular16Blue100"
              >
                {props?.label}
              </Text>
            ) : null}
          </div>
        </div>
        {!!props?.userfirstname ? (
          <Text
            className="border border-blue_gray-800 border-solid h-[50px] pl-[13px] sm:pr-5 pr-[35px] py-4 rounded text-blue_gray-500 text-shadow-ts text-sm w-full"
            size="txtSFProTextRegular14Bluegray500"
          >
            {props?.userfirstname}
          </Text>
        ) : null}
      </div>
    </>
  );
};

SignUpScreenField.defaultProps = {};

export default SignUpScreenField;
