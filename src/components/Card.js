import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import styled from "styled-components";
import { FaReact, FaAngular, FaHtml5, FaCss3 } from "react-icons/fa";
import { SiJavascript, SiRedux, SiNetlify } from "react-icons/si";
import styles from "./card.module.css";

const StyledTitle = styled.div`
  font-family: "Potta One", cursive;
  background: inherit;
  color: inherit;
`;

const StyledDiv = styled.div`
  color: #ffffff;
  &:hover {
    color: #f26c4f;
    background: #ffffff;
  }
`;

const InheritDiv = styled.div`
  background: inherit;
  color: inherit;
`;

const StyledReact = styled(SiRedux)`
  color: blue;
`;

function Card({ title, frameworks, projectLink }) {
  const isFrameWorkInProject = (framework) => {
    return frameworks.includes(framework);
  };

  const linkToProject = () => {
    window.open(projectLink, "_blank");
  };

  return (
    <div
      className="my-5 border border-gray-100 mx-5 md:mx-32 "
      onClick={linkToProject}
    >
      <StyledDiv className="grid grid-cols-3 md:grid-cols-5 p-5  gap-20 md:p-10 w-full hover:shadow-5xl hover:bg-white">
        <StyledTitle className="flex flex-wrap text-xl font-bold col-span-2">
          {title}
        </StyledTitle>

        <InheritDiv className="space-x-2 hidden md:flex md:col-span-2">
          {isFrameWorkInProject("html") && (
            <FaHtml5 className={`${styles.icon}  h-6 w-6`} />
          )}
          {isFrameWorkInProject("css") && (
            <FaCss3 className={`${styles.icon}  h-6 w-6`} />
          )}
          {isFrameWorkInProject("javascript") && (
            <SiJavascript className={`${styles.icon}  h-6 w-6`} />
          )}
          {isFrameWorkInProject("react") && (
            <FaReact className={`${styles.icon}  h-6 w-6`} />
          )}
          {isFrameWorkInProject("angular") && (
            <FaAngular className={`${styles.icon}  h-6 w-6`} />
          )}
          {isFrameWorkInProject("redux") && (
            <StyledReact className={`${styles.icon}  h-6 w-6`} />
          )}
          {isFrameWorkInProject("netlify") && (
            <SiNetlify className={`${styles.icon}  h-6 w-6`} />
          )}
        </InheritDiv>
        <InheritDiv className="md:col-span-1" onClick={linkToProject}>
          <FaLongArrowAltRight className={`${styles.icon} h-6 w-6 mt-2`} />
        </InheritDiv>
      </StyledDiv>
    </div>
  );
}

export default Card;
