import React from "react";
import styled from "styled-components";
import {
  FaReact,
  FaPython,
  FaAngular,
  FaHtml5,
  FaCss3,
  FaNodeJs,
} from "react-icons/fa";
import {
  SiJavascript,
  SiRedux,
  SiNetlify,
  SiPytorch,
  SiGraphql,
  SiDjango,
} from "react-icons/si";

const StyledAboutMe = styled.div`
  font-family: "Potta One", cursive;
`;

const Div = styled.div`
  background: #f26c4f !important;
`;

const Content = styled.div``;

function AboutMe(props) {
  return (
    <div className="py-16">
      <div className="flex flex-col items-center mt-6 text-2xl ">
        <StyledAboutMe className="flex flex-col">
          About Me
          <Div className="w-10 h-1 mt-5 rounded-xl"></Div>
        </StyledAboutMe>

        <Content className="mt-6 px-5 md:px-60 text-center text-md">
          Hey There! (👋), I am from Lagos, Nigeria where I work as a Full stack
          Javascript Developer at Ha-Shem Limited. I have 3 + years of
          experience in Full Stack Web Development with a focus on utilizing
          frontend technologies in order to provide an awesome end-user UI
          experience. In my spare time I love to read about Machine Learning, as
          well as Play Basketball or the guitar. I am also a crazy sports fan,
          Support the Golden State Warriors in Basketball and Liverpool in
          Football(YNWA 🤘). My Bio won't be complete without expressing my
          taste in music, I listen to Rock, Heavy Metal, Jazz and Afro-pop, But
          more of a metal head; the oldies like Black Sabbath, Guns n' Roses,
          Nirvana and any good rock song you might suggest. I love having a good
          time and also love learning, so that's all about me. Cheers!
        </Content>

        <StyledAboutMe className="flex flex-col flex-wrap mt-20">
          Technologies/ Frameworks
          <Div className="w-10 h-1 mt-5 rounded-xl"></Div>
        </StyledAboutMe>
        <Content>
          <div className="grid grid-cols-3 gap-20 md:gap-x-32 md:gap-y-14 mt-16">
            <div>
              <FaHtml5 className="text-white h-16 w-16" />
            </div>
            <div>
              <FaCss3 className="text-white h-16 w-16" />
            </div>
            <div>
              <SiJavascript className="text-white h-16 w-16" />
            </div>
            <div>
              <FaPython className="text-white h-16 w-16" />
            </div>
            <div>
              <FaNodeJs className="text-white h-16 w-16" />
            </div>
            <div>
              <SiGraphql className="text-white h-16 w-16" />
            </div>
            <div>
              <SiDjango className="text-white h-16 w-16" />
            </div>
            <div>
              <SiPytorch className="text-white h-16 w-16" />
            </div>
            <div>
              <FaReact className="text-white h-16 w-16" />
            </div>
            <div>
              <FaAngular className="text-white h-16 w-16" />
            </div>
            <div>
              <SiRedux className="text-white h-16 w-16" />
            </div>
            <div>
              <SiNetlify className="text-white h-16 w-16" />
            </div>
          </div>
        </Content>
      </div>
    </div>
  );
}

export default AboutMe;
