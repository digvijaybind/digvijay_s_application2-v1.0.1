import React from "react";

import { Img } from "components";

const LoginScreenTwoFlags = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="absolute bg-blue-900 flex flex-col h-max inset-[0] items-center justify-center m-auto p-0.5 rounded-sm w-[5px]">
          <div className="bg-blue-900 h-px rounded-[50%] w-px"></div>
        </div>
        <div className="absolute bg-green-600 bottom-[0] h-[5px] inset-x-[0] mx-auto w-full"></div>
        <div className="bg-deep_orange-A200 h-[5px] mx-auto w-full"></div>
        <div className="absolute flex flex-col h-full inset-[0] items-center justify-center m-auto rounded-[7px] w-[15px]">
          <Img
            className="h-[15px] md:h-auto rounded-[50%] w-[15px]"
            src="images/img_rectangle23025.png"
            alt="rectangle23025"
          />
        </div>
      </div>
    </>
  );
};

LoginScreenTwoFlags.defaultProps = {};

export default LoginScreenTwoFlags;
