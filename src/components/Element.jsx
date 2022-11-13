import React from "react";
import styled from "styled-components";

const El = styled.div`
  font-size: 18px;
  font-weight: 500;
  height: 110px;
  background-color: white;
  margin: 10px 0 10px 123px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 93%;
  :hover {
    background-color: #f4f4f5;
    cursor: pointer;
  }
`;

const TitleH2 = styled.h2`
  font-size: 18px;
  font-weight: 500;
  flex-basis: 10%;
  padding: 0 0 0 80px;
  color: #2f2e43;
`;

const ElParagraph = styled.p`
  margin-left: 160px;
  color: #2f2e43;
`;

const Element = ({ item }) => {
  return (
    <El key={item.id}>
      <TitleH2>{item.name}</TitleH2>
      <ElParagraph>{item.description}</ElParagraph>
    </El>
  );
};

export default Element;
