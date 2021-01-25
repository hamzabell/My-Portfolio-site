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
          experience. I am familiar with the MEAN stack, MERN stack and more
          recently I have been utilizing the JAMstack in my projects. For
          Machine Learning, I know how to use the scikit-learn library as well
          as Numpy and Pandas, currently trying build my own neural network from
          scratch using just numpy, but I am not scared of deep learning
          libraries, I am fan of the pytorch library; hopefully I pick of
          tensorflow soon enough. In my spare time I love to read about Machine
          Learning, as well as Play Basketball or the guitar. I am also a crazy
          sports fan, Support the Golden State Warriors in Basketball and
          Liverpool in Football(YNWA 🤘). My Bio won't be complete without
          expressing my taste in music, I listen to Rock, Heavy Metal, Jazz and
          Afro-pop, But more of a metal head; the oldies like Black Sabbath,
          Guns n' Roses, Nirvana and any good rock song you might suggest. I
          love having a good time and also love learning, so that's all about
          me. Cheers!
        </Content>

        <StyledAboutMe className="flex flex-col flex-wrap mt-20">
          Technologies/ Frameworks
          <Div className="w-10 h-1 mt-5 rounded-xl"></Div>
        </StyledAboutMe>
        <Content>
          <div className="grid grid-cols-3 gap-4 md:gap-x-32 md:gap-y-14 mt-16">
            <div className="flex flex-col">
              <FaHtml5 className="text-white h-16 w-16" />
              <h1>HTML</h1>
            </div>
            <div className="flex flex-col">
              <FaCss3 className="text-white h-16 w-16" />
              <h1>CSS</h1>
            </div>
            <div className="flex flex-col">
              <SiJavascript className="text-white h-16 w-16" />
              <h1>Javascript</h1>
            </div>
            <div className="flex flex-col">
              <FaPython className="text-white h-16 w-16" />
              <h1>Python</h1>
            </div>
            <div className="flex flex-col">
              <FaNodeJs className="text-white h-16 w-16" />
              <h1>NodeJS</h1>
            </div>
            <div className="flex flex-col">
              <SiGraphql className="text-white h-16 w-16" />
              <h1>GraphQL</h1>
            </div>
            <div className="flex flex-col">
              <SiDjango className="text-white h-16 w-16" />
              <h1>Django</h1>
            </div>
            <div className="flex flex-col">
              <SiPytorch className="text-white h-16 w-16" />
              <h1>PyTorch</h1>
            </div>
            <div className="flex flex-col">
              <FaReact className="text-white h-16 w-16" />
              <h1>Reactjs</h1>
            </div>
            <div className="flex flex-col">
              <FaAngular className="text-white h-16 w-16" />
              <h1>Angular</h1>
            </div>
            <div className="flex flex-col">
              <SiRedux className="text-white h-16 w-16" />
              <h1>Redux</h1>
            </div>
            <div className="flex flex-col">
              <SiNetlify className="text-white h-16 w-16" />
              <h1>Netlify</h1>
            </div>
          </div>
        </Content>
      </div>
    </div>
  );
}

export default AboutMe;
