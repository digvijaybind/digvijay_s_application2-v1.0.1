import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, Text } from "components";
import LoginScreenTwoFlags from "components/LoginScreenTwoFlags";

const LoginScreenTwoPage = () => {
  const navigate = useNavigate();

  const navigateToContacts = () => {
    // 👇️ navigate to /contacts
    navigate("/nameyourstore");
  };
  return (
    <>
      <div className="bg-black-900 flex font-sfprotext h-[1200px] justify-end mx-auto md:pr-10 sm:pr-5 pr-[117px] pt-[117px] relative w-full">
        <div className="flex flex-col h-full items-center justify-end mt-auto w-[93%]">
          <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-full">
            <div className="md:h-[1083px] h-[1343px] pb-[260px] relative w-[61%] md:w-full">
              <Img
                className="h-[1083px] mx-auto object-cover w-full"
                src="images/img_image423.png"
                alt="image423"
              />
              <div className="absolute flex flex-col items-start justify-start left-[14%] top-[6%] w-[51%]">
                <Img
                  className="h-[43px] md:h-auto object-cover rounded-[21px] w-40 sm:w-full"
                  src="images/img_frame34647.png"
                  alt="frame34647"
                />
                <Text
                  className="bg-clip-text bg-gradient  leading-[180.00%] mt-[35px] text-[15.29px] text-transparent tracking-[0.76px] w-[99%] sm:w-full"
                  size="txtSFProTextRegular1529"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lacus
                  nulla eget adipiscing faucibus platea. Eu ultrices ipsum
                </Text>
                <Img
                  className="h-[265px] sm:h-auto md:ml-[0] ml-[132px] mt-[54px] object-cover w-[76%] md:w-full"
                  src="images/img_image424.png"
                  alt="image424"
                />
              </div>
            </div>
            <div className="bg-gradient1  flex sm:flex-1 flex-col indigo_300_66_indigo_300_66_01_border items-start justify-center md:mt-0 mt-[38px] outline outline-[2px] md:px-10 sm:px-5 px-[45px] py-[52px] rounded-[20px] w-auto sm:w-full">
              <div className="flex flex-col gap-[30px] items-start justify-center py-2 w-auto">
                <div className="flex flex-col gap-[13px] h-[110px] md:h-auto items-start justify-start w-auto sm:w-full">
                  <Text
                    className="sm:text-4xl md:text-[38px] text-[40px] text-blue-100 text-center w-auto"
                    size="txtSFProTextBold40"
                  >
                    Get Started !
                  </Text>
                  <Text
                    className="common-pointer text-base text-blue_gray-500 text-center w-auto"
                    size="txtSFProTextRegular16"
                    onClick={() => navigate("/signupscreen")}
                  >
                    <span className="text-blue_gray-500 font-sfprotext font-normal">
                      New to Company?{" "}
                    </span>
                    <span className="text-indigo-A200 font-sfprotext font-semibold">
                      Sign up
                    </span>
                  </Text>
                </div>
                <div className="flex flex-col gap-[30px] items-center justify-start w-auto sm:w-full">
                  <div className="flex flex-col gap-2.5 items-start justify-start pb-2.5 w-full">
                    <div className="flex flex-col items-start justify-between w-full">
                      <div className="flex flex-col items-center justify-start w-[166px]">
                        <Text
                          className="text-base text-blue-100 w-auto"
                          size="txtSFProTextRegular16Blue100"
                        >
                          Enter Mobile Number
                        </Text>
                      </div>
                    </div>
                    <div className="flex sm:flex-col flex-row gap-2.5 items-start justify-start w-full">
                      <div className="border border-blue_gray-800 border-solid flex flex-row gap-[5px] h-[50px] md:h-auto items-center justify-start p-[13px] rounded shadow-bs w-auto">
                        <LoginScreenTwoFlags className="bg-white-A700 h-[15px] relative rounded-[7px] w-[15px]" />
                        <div className="flex flex-row gap-1.5 items-center justify-start w-auto">
                          <Text
                            className="text-blue-100 text-sm w-auto"
                            size="txtSFProTextRegular14"
                          >
                            +91{" "}
                          </Text>
                          <Img
                            className="h-[18px] w-[18px]"
                            src="images/img_arrowdown.svg"
                            alt="arrowdown"
                          />
                        </div>
                      </div>
                      <Input
                        name="contents"
                        placeholder="98765 43210"
                        className="md:h-auto p-0 placeholder:text-blue-100 sm:h-auto sm:pr-5 text-blue-100 text-left text-sm w-full"
                        wrapClassName="border border-blue_gray-800 border-solid sm:flex-1 pl-[13px] pr-[35px] py-4 rounded shadow-bs w-[79%] sm:w-full"
                      ></Input>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2.5 items-start justify-start w-full">
                    <div className="flex flex-col font-sfprotext items-start justify-between w-full">
                      <Text
                        className="text-base text-blue-100 w-auto"
                        size="txtSFProTextRegular16Blue100"
                      >
                        Enter OTP
                      </Text>
                    </div>
                    <div className="flex flex-col font-sfprotext items-start justify-start w-full">
                      <div className="border border-blue_gray-800 border-solid flex flex-col h-[50px] md:h-auto items-center justify-start p-[13px] rounded shadow-bs w-full">
                        <Text
                          className="text-blue_gray-500 text-sm w-auto"
                          size="txtSFProTextRegular14Bluegray500"
                        >
                          Enter four digit OTP
                        </Text>
                      </div>
                    </div>
                    <Text
                      className="text-blue_gray-500_01 text-xs tracking-[0.24px] w-auto"
                      size="txtInterRegular12"
                    >
                      <span className="text-blue_gray-500_01 font-inter text-left font-normal">
                        Haven’t received code?
                      </span>
                      <span className="text-indigo-A200 font-inter text-left font-semibold">
                        {" "}
                        Resend{" "}
                      </span>
                      <span className="text-indigo-A200 font-inter text-left font-normal">
                        in 0:59 sec
                      </span>
                    </Text>
                  </div>
                  <div className="flex flex-col items-start justify-start w-auto sm:w-full">
                    <Button
                      className="bg-gradient2  cursor-pointer font-medium indigo_300_00_indigo_300_border outline outline-[1px] py-3.5 rounded-[5px] text-center text-lg text-white-A700 w-[480px]"
                      onClick={navigateToContacts}
                    >
                      Login
                    </Button>
                  </div>
                </div>
                <div className="flex flex-col gap-[30px] items-start justify-start w-auto sm:w-full">
                  <div className="flex flex-col items-center justify-start">
                    <Text
                      className="text-center text-indigo-200 text-xs tracking-[0.24px]"
                      size="txtSFProTextRegular12"
                    >
                      Or sign in with
                    </Text>
                  </div>
                  <div className="flex sm:flex-col flex-row gap-5 items-start justify-start w-[480px] sm:w-full">
                    <div className="flex flex-row gap-[5px] h-full items-center justify-center outline outline-[1px] outline-indigo-200 sm:px-5 px-[30px] py-[15px] rounded-[5px] w-full">
                      <Img
                        className="h-6 w-6"
                        src="images/img_google.svg"
                        alt="google"
                      />
                      <Text
                        className="text-blue-100 text-center text-lg w-auto"
                        size="txtSFProTextRegular18"
                      >
                        {" "}
                        Google
                      </Text>
                    </div>
                    <div className="flex flex-row gap-[5px] h-full items-center justify-center outline outline-[1px] outline-indigo-200 sm:px-5 px-[30px] py-[15px] rounded-[5px] w-full">
                      <Img
                        className="h-5 md:h-auto object-cover w-5"
                        src="images/img_image422.png"
                        alt="image422"
                      />
                      <Text
                        className="text-blue-100 text-center text-lg w-auto"
                        size="txtSFProTextRegular18"
                      >
                        {" "}
                        Facebook
                      </Text>
                    </div>
                  </div>
                </div>
                <Text
                  className="leading-[150.00%] text-center text-indigo-200_90 text-sm tracking-[0.28px]"
                  size="txtSFProTextLight14"
                >
                  <>
                    By creating an account means you agree to the Terms
                    <br />& Conditions and our Privacy Policy
                  </>
                </Text>
              </div>
            </div>
          </div>
        </div>
        <Img
          className="absolute bottom-[28%] h-[447px] inset-x-[0] mx-auto object-cover w-[28%]"
          src="images/img_image425.png"
          alt="image425"
        />
      </div>
    </>
  );
};

export default LoginScreenTwoPage;
