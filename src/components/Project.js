import React from "react";
import styled from "styled-components";

const StyledProjects = styled.div`
  font-family: "Potta One", cursive;
`;

const Div = styled.div`
  background: #f26c4f !important;
`;

function Project(props) {
  return (
    <div className="flex flex-col items-center my-10 text-2xl">
      <StyledProjects className="flex flex-col">
        Projects
        <Div className="w-10 h-1 mt-5 rounded-xl"></Div>
      </StyledProjects>
      <div></div>
    </div>
  );
}

export default Project;
