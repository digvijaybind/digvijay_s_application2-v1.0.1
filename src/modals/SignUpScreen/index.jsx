import React from "react";
import { default as ModalProvider } from "react-modal";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, List, Text } from "components";
import LoginScreenTwoFlags from "components/LoginScreenTwoFlags";
import SignUpScreenField from "components/SignUpScreenField";

const SignUpScreenModal = (props) => {
  const navigate = useNavigate();

  return (
    <ModalProvider
      appElement={document.getElementById("root")}
      className="m-auto !w-[30%]"
      overlayClassName="bg-gradient3  fixed flex h-full inset-y-[0] w-full"
      {...props}
    >
      <div className="max-h-[97vh] overflow-y-auto sm:w-full md:w-full">
        <div className="bg-gradient1  flex flex-col indigo_300_66_indigo_300_66_01_border3 items-start justify-start outline outline-[2px] md:px-5 px-[45px] py-[52px] rounded-[20px] w-auto sm:w-full">
          <div className="flex flex-col gap-[30px] items-start justify-start py-2 w-auto">
            <div className="flex flex-col gap-[13px] h-[110px] md:h-auto items-start justify-start w-auto sm:w-full">
              <Text
                className="text-3xl sm:text-[26px] md:text-[28px] text-blue-100 text-center w-auto"
                size="txtSFProTextBold30"
              >
                Signup in 10 mins
              </Text>
              <Text
                className="common-pointer text-base text-blue_gray-500 text-center w-auto"
                size="txtSFProTextRegular16"
                onClick={() => navigate("/loginscreenone")}
              >
                <span className="text-blue_gray-500 font-sfprotext font-normal">
                  Already have a account?{" "}
                </span>
                <span className="text-indigo-A200 font-sfprotext font-semibold">
                  Sign in
                </span>
              </Text>
            </div>
            <div className="flex flex-col gap-[30px] items-start justify-start w-auto sm:w-full">
              <div className="flex flex-col gap-[30px] items-start justify-start pb-5 w-auto sm:w-full">
                <List
                  className="sm:flex-col flex-row gap-[30px] grid sm:grid-cols-1 grid-cols-2 justify-start w-[480px] sm:w-full"
                  orientation="horizontal"
                >
                  <SignUpScreenField
                    className="flex flex-col gap-2.5 items-start justify-start w-full"
                    label="First Name"
                    userfirstname="Your First Name"
                  />
                  <SignUpScreenField
                    className="flex flex-col gap-2.5 items-start justify-start w-full"
                    label="Last Name"
                    userfirstname="Your Last Name"
                  />
                </List>
                <div className="flex flex-col items-start justify-start pb-2.5 w-[480px] sm:w-full">
                  <div className="flex flex-col gap-2.5 items-start justify-start w-full">
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
                        placeholder="Enter Mobile Number"
                        className="md:h-auto p-0 placeholder:text-blue_gray-500 sm:h-auto text-blue_gray-500 text-left text-sm w-full"
                        wrapClassName="border border-blue_gray-800 border-solid sm:flex-1 px-3 py-4 rounded shadow-bs w-[79%] sm:w-full"
                        type="number"
                      ></Input>
                    </div>
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
                    <Input
                      name="contents_One"
                      placeholder="Enter four digit OTP"
                      className="md:h-auto p-0 placeholder:text-blue_gray-500 sm:h-auto text-blue_gray-500 text-left text-sm w-full"
                      wrapClassName="border border-blue_gray-800 border-solid px-3 py-4 rounded shadow-bs w-full"
                    ></Input>
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
              </div>
              <div className="flex flex-col items-start justify-start w-auto sm:w-full">
                <Button className="bg-gradient2  cursor-pointer font-medium indigo_300_00_indigo_300_border3 outline outline-[1px] py-3.5 rounded-[5px] text-center text-lg text-white-A700 w-[480px]">
                  Create your Store
                </Button>
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
    </ModalProvider>
  );
};

export default SignUpScreenModal;
