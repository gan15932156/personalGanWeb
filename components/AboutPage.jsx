"use client";
import { PageWrapper } from "@/ui/MainWrapper";
import localFont from "next/font/local";
import { forwardRef, useState } from "react";
import styled, { css } from "styled-components";
import EduCard from "./EduCard";
import SkillCard from "./SkillCard";
import AboutCard from "./AboutCard";
const thaiFont = localFont({ src: "../font/thaiFont.ttf" });
const Wrapper = styled.div`
  position: relative;
  width: 88%;
  min-height: 90vh;
  padding: 2rem 4rem;
  align-items: flex-start;
  display: flex;
  background-color: var(--clr-bg-600);
  border-radius: 1rem;
  /* & > * {
    border: 1px solid red;
  } */
`;
const Nav = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;

  & li {
    font-size: clamp(3.2rem, 5vw, 7.2rem);
    width: 100%;
    text-align: start;
    letter-spacing: 1.2px;
    padding: 0.2rem 1rem;
    border-top-left-radius: 1rem;
    border-bottom-left-radius: 1rem;
    cursor: pointer;

    &:hover {
      background-color: var(--clr-primary-500);
      color: var(--clr-bg-600);
    }
    &:first-of-type {
      ${(props) =>
        props.$activeTab == "edu" &&
        css`
          background-color: var(--clr-primary-500);
          color: var(--clr-bg-600);
        `}
    }
    &:nth-of-type(2) {
      ${(props) =>
        props.$activeTab == "skill" &&
        css`
          background-color: var(--clr-primary-500);
          color: var(--clr-bg-600);
        `}
    }
    &:last-of-type {
      ${(props) =>
        props.$activeTab == "about" &&
        css`
          background-color: var(--clr-primary-500);
          color: var(--clr-bg-600);
        `}
    }
  }
`;
const Screen = styled.div`
  align-self: stretch;
  width: 100%;
  background-color: var(--clr-primary-500);
  color: var(--clr-bg-600);
  ${(props) =>
    props.$activeTab == "edu"
      ? css`
          border-top-right-radius: 1rem;
          border-bottom-left-radius: 1rem;
          border-bottom-right-radius: 1rem;
        `
      : css`
          border-radius: 1rem;
        `}
`;
const AboutPage = forwardRef(function AboutPage({}, ref) {
  const [activeTab, setActiveTab] = useState("edu");
  function handleChangeNav(nav) {
    setActiveTab(nav);
  }
  return (
    <PageWrapper id="about" ref={ref} className={thaiFont.className}>
      <Wrapper>
        <Nav $activeTab={activeTab}>
          <li onClick={() => handleChangeNav("edu")}>EDUCATION</li>
          <li onClick={() => handleChangeNav("skill")}>SKILLS</li>
          <li onClick={() => handleChangeNav("about")}>ABOUT</li>
        </Nav>
        <Screen $activeTab={activeTab}>
          <EduCard activeTab={activeTab} />
          <SkillCard activeTab={activeTab} />
          <AboutCard activeTab={activeTab} />
        </Screen>
      </Wrapper>
    </PageWrapper>
  );
});
export default AboutPage;
