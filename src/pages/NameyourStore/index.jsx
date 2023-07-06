import React from "react";

import { Button, Img, Input, Text } from "components";
import SignUpScreenField from "components/SignUpScreenField";

const NameyourStorePage = () => {
  return (
    <>
      <div className="bg-black-900 flex flex-col font-sfprotext items-center justify-end mx-auto pt-[59px] md:px-10 sm:px-5 px-[59px] w-full">
        <Img
          className="h-[34px] md:h-auto object-cover"
          src="images/img_logo.png"
          alt="logo"
        />
        <div className="bg-gradient1  flex md:flex-col flex-row gap-[50px] indigo_300_66_indigo_300_66_01_border4 items-start justify-center max-w-[1658px] mt-[45px] mx-auto outline outline-[3px] px-10 md:px-5 py-[52px] rounded-[20px] w-full">
          <div className="flex md:flex-1 flex-col gap-[49px] h-[699px] md:h-auto items-start justify-center py-[15px] w-auto md:w-full">
            <div className="flex flex-col gap-[49px] h-[570px] md:h-auto items-start justify-center w-auto md:w-full">
              <Text
                className="text-base text-blue_gray-700 tracking-[0.32px] w-auto"
                size="txtSFProTextRegular16Bluegray700"
              >
                <span className="text-indigo-A200 font-sfprotext text-left font-semibold">
                  01
                </span>
                <span className="text-indigo-A200 font-sfprotext text-left font-normal">
                  {" "}
                </span>
                <span className="text-blue_gray-700 font-sfprotext text-left font-normal">
                  / 04
                </span>
              </Text>
              <div className="flex flex-col gap-2.5 items-start justify-start w-full">
                <div className="flex flex-col items-center justify-start w-[44%] md:w-full">
                  <div className="flex flex-col items-center justify-start w-full">
                    <Text
                      className="bg-clip-text bg-gradient  md:text-3xl sm:text-[28px] text-[32px] text-transparent"
                      size="txtSFProTextSemibold32"
                    >
                      Name your Store
                    </Text>
                  </div>
                </div>
                <Text
                  className="leading-[180.00%] max-w-[460px] md:max-w-full text-blue_gray-700 text-sm tracking-[0.28px]"
                  size="txtSFProTextRegular14Bluegray700"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lacus
                  nulla eget adipiscing faucibus platea. Eu ultrices ipsum
                </Text>
              </div>
              <div className="flex flex-col items-start justify-start w-full">
                <SignUpScreenField className="flex flex-col gap-2.5 items-start justify-start w-full" />
              </div>
            </div>
            <div className="flex flex-row sm:gap-[49px] items-start justify-between w-full">
              <Button className="flex h-[50px] items-center justify-center outline outline-[1px] outline-blue-100 p-[15px] rounded-[5px] w-[50px]">
                <Img
                  className="h-5"
                  src="images/img_arrowleft.svg"
                  alt="arrowleft"
                />
              </Button>
              <Button className="bg-gradient2  cursor-pointer font-medium indigo_300_00_indigo_300_border4 min-w-[139px] outline outline-[1px] py-3.5 rounded-[5px] text-center text-lg text-white-A700">
                Continue
              </Button>
            </div>
          </div>
          <div className="h-[699px] relative w-[52%] md:w-full">
            <Img
              className="h-[699px] m-auto object-cover w-full"
              src="images/img_rectangle23012.png"
              alt="rectangle23012"
            />
            <Text
              className="absolute bg-gray-900 justify-center left-[5%] px-[5px] text-[17.38px] text-blue-100 top-[6%] w-auto"
              size="txtSFProTextSemibold1738"
            >
              Store Name
            </Text>
          </div>
        </div>
        <Text
          className="mt-[53px] text-blue_gray-700 text-center text-sm tracking-[0.28px]"
          size="txtSFProTextRegular14Bluegray700"
        >
          <span className="text-blue_gray-700 font-sfprotext font-normal">
            © Copyright 2023{" "}
          </span>
          <span className="text-indigo-A200 font-sfprotext font-normal">
            Company Global
          </span>
        </Text>
        <div className="flex flex-col items-center justify-end max-w-[1602px] mt-[295px] mx-auto w-full">
          <div className="md:h-[697px] h-[778px] relative w-full">
            <div className="absolute bottom-[0] h-[602px] inset-x-[0] mx-auto w-full">
              <div className="absolute h-[602px] inset-[0] justify-center m-auto w-full">
                <Img
                  className="h-[602px] m-auto object-cover w-full"
                  src="images/img_maskgroup.png"
                  alt="maskgroup"
                />
                <Img
                  className="absolute h-[602px] inset-[0] justify-center m-auto object-cover w-full"
                  src="images/img_maskgroup_602x1602.png"
                  alt="maskgroup_One"
                />
              </div>
              <Img
                className="absolute h-[521px] inset-x-[0] mx-auto object-cover top-[0] w-[86%]"
                src="images/img_earthonly2.png"
                alt="earthonlyTwo"
              />
            </div>
            <Img
              className="absolute h-[107px] inset-x-[0] mx-auto object-cover top-[18%] w-[37%]"
              src="images/img_edgelighttop1.png"
              alt="edgelighttopOne"
            />
            <div className="absolute h-[697px] inset-x-[0] mx-auto top-[0] w-[94%] md:w-full">
              <Img
                className="h-[697px] m-auto object-cover w-full"
                src="images/img_connections.png"
                alt="connections"
              />
              <Img
                className="absolute h-[697px] inset-[0] justify-center m-auto object-cover w-full"
                src="images/img_connections.png"
                alt="connections_One"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NameyourStorePage;
