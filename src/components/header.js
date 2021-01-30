import React from "react";
import styled from "styled-components";

const StyledHeader = styled.header`
  background: "#fff";
  position: fixed;
  z-index: 500;
  width: 100%;
`;

const StyledName = styled.p`
  font-family: "Potta One", cursive;
  color: "#fff";
`;

const StyledButton = styled.button`
  background: #f26c4f;
  color: #ffff;
  letter-spacing: 0px;
  font-family: "Roboto", sans-serif;
  font-weight: 700;
  font-size: 14px;
  line-height: 50px;
  padding: 0 28px;
  outline: none !important;
  text-align: center;
  cursor: pointer;
  text-transform: uppercase;
  border-radius: 99px;
  background-size: 200% auto;

  &:hover {
    transition: all 0.3s ease-in-out;
  }
`;
function Header(props) {
  const linkToCV = (link) => {
    window.open(link, "_blank");
  };
  return (
    <StyledHeader className="flex justify-between  py-5 px-3  md:px-20">
      <div className=" text-xl font-medium">
        <StyledName className="mt-3 text-white">i.am.Akan.</StyledName>
      </div>
      <StyledButton
        onClick={() =>
          linkToCV(
            "https://drive.google.com/file/d/1bzkaHRd9ryTNxtrQxdqwVMgzJbq2W8K0/view?usp=sharing"
          )
        }
      >
        View My Resume
      </StyledButton>
    </StyledHeader>
  );
}

export default Header;
