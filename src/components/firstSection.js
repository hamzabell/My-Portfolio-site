import React from "react";
import styled from "styled-components";
import { MyPhoto } from "../assets/";
import {
  FaTwitter,
  FaLinkedin,
  FaFacebookSquare,
  FaGithub,
  FaInstagram,
} from "react-icons/fa";

const StyledDiv = styled.div``;

const StyledImg = styled.img`
  border-radius: 999px;
  height: 500px;
`;

const H1 = styled.h1`
  color: #f26c4f !important;
`;
const Div = styled.div`
  background: #f26c4f !important;
`;

const IMGContainer = styled.div`
  object-fit: contain;
  z-index: 200;
`;

const StyledContact = styled.p`
  color: #f26c4f;
`;
const ZDIV = styled.div`
  z-index: 5;
`;

const Heading = styled.h1`
  font-family: "Potta One", cursive;
  z-index: 10;
`;

function FirstSection(props) {
  const LinkToSocialMedia = (link) => {
    window.open(link, "_blank");
  };
  return (
    <StyledDiv className="flex flex-wrap py-5  justify-center  md:pl-44  h-full">
      <div className="mt-20 md:mt-36 mr-10 pl-10 md:pl-0">
        <ZDIV className="relative">
          <Heading className=" hidden md:block absolute top-14 -left-72  text-6xl font-bold tracking-wide">
            AKAN <br />
            BASSEY
            <div className="mt-6 flex space-x-2">
              {/* <FaTwitter
                className="text-white h-8 w-8"
                onClick={() =>
                  LinkToSocialMedia("https://twitter.com/AiBassey")
                }
              /> */}
              <FaLinkedin
                className="text-white h-8 w-8 cursor-pointer"
                onClick={() =>
                  LinkToSocialMedia(
                    "https://www.linkedin.com/in/akan-bassey-708941171/"
                  )
                }
              />
              <FaInstagram
                className="text-white h-8 w-8 cursor-pointer"
                onClick={() =>
                  LinkToSocialMedia("https://www.instagram.com/bassey.ai/")
                }
              />
              <FaFacebookSquare
                className="text-white h-8 w-8 cursor-pointer"
                onClick={() =>
                  LinkToSocialMedia("https://www.facebook.com/akan.bassey.75/")
                }
              />
              {/* <FaMediumM className="text-white h-8 w-8" /> */}
              <FaGithub
                className="text-white h-8 w-8 cursor-pointer"
                onClick={() =>
                  LinkToSocialMedia("https://github.com/hamzabell")
                }
              />
            </div>
          </Heading>
          <IMGContainer className="relative">
            <StyledImg src={MyPhoto} className="" />
          </IMGContainer>
        </ZDIV>
      </div>

      <div className="mt-20 md:mt-48 flex flex-col pl-5 md:pl-0 pr-5 md:pr-0">
        <div className="flex">
          <H1 className="font-semibold  md:ml-0">Full-stack Developer</H1>
          <Div className="w-10 h-1 mt-3 ml-3 rounded-xl"></Div>
        </div>
        <div className="text-2xl md:text-3xl font-bold md:w-96 mt-4">
          Based in Lagos, Nigeria. I am a Full-Stack Developer and Self-Taught
          Machine Learning Engineer.
        </div>
        <div className="font-normal mt-3  md:w-96 text-lg">
          My Name is Atanang Akan Bassey, I love technology and I am an avid
          reader. I love to play basketball and guitar, and I also love code.
        </div>

        <div className="flex flex-col mt-5 space-y-1">
          <StyledContact>
            Phone: +(234) 9077891532, +(234) 7058794085
          </StyledContact>
          <StyledContact>Email: akanbassey8@gmail.com</StyledContact>
        </div>
        <div className=" md:hidden mt-6 flex space-x-3">
          {/* <FaTwitter
            onClick={() => LinkToSocialMedia("https://twitter.com/AiBassey")}
            className="text-white h-8 w-8"
          /> */}
          <FaLinkedin
            onClick={() =>
              LinkToSocialMedia(
                "https://www.linkedin.com/in/akan-bassey-708941171/"
              )
            }
            className="text-white h-8 w-8 cursor-pointer"
          />
          <FaInstagram
            onClick={() =>
              LinkToSocialMedia("https://www.instagram.com/bassey.ai/")
            }
            className="text-white h-8 w-8 cursor-pointer"
          />
          <FaFacebookSquare
            onClick={() =>
              LinkToSocialMedia("https://www.facebook.com/akan.bassey.75/")
            }
            className="text-white h-8 w-8 cursor-pointer"
          />
          {/* <FaMediumM className="text-white h-8 w-8" /> */}
          <FaGithub
            onClick={() => LinkToSocialMedia("https://github.com/hamzabell")}
            className="text-white h-8 w-8 cursor-pointer"
          />
        </div>
      </div>
    </StyledDiv>
  );
}

export default FirstSection;
