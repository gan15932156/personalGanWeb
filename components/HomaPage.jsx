"use client";
import { FiFacebook, FiChevronDown } from "react-icons/fi";
import { FaGithub, FaLinkedin, FaRegFilePdf } from "react-icons/fa";
import { CgPiano } from "react-icons/cg";
import { IoLogoInstagram } from "react-icons/io5";
import { PageWrapper } from "@/ui/MainWrapper";
import localFont from "next/font/local";
import Link from "next/link";
import { forwardRef, useContext, useRef } from "react";
import styled, { css, keyframes } from "styled-components";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { media } from "@/providers/responsiveUtils";
import { StateContext } from "@/context/StateContext";
const rotate = keyframes`
  0% {border-radius: 17% 83% 26% 74% / 50% 19% 81% 50%;
  }
  25%{
    border-radius:12% 88% 19% 81% / 30% 7% 93% 70% ;

  }
  50% {
    border-radius:100% 0% 73% 27% / 50% 47% 53% 50% ;
  }
  80%{
border-radius:54% 46% 88% 12% / 50% 71% 29% 50% ;
  }
  100%{
    border-radius: 17% 83% 26% 74% / 50% 19% 81% 50%;
  }
`;

const Wrapper = styled.div`
  display: grid;
  position: relative;
  width: 100%;
  row-gap: 8rem;
  align-items: center;
  padding-inline: 4rem;
  padding-top: 8rem;
  padding-bottom: 14rem;
  grid-template-columns: repeat(auto-fit, minmax(min(60rem, 100%), 1fr));
  grid-auto-rows: 1fr;
  ${media.sm`
    padding-inline: 2rem;
  `}
  & > * {
    height: 100%;
  }
`;
const ProfileImageWrapper = styled.div`
  position: relative;
  background-color: var(--clr-bg-600);
  border-radius: 17% 83% 26% 74% / 50% 19% 81% 50%;
  z-index: 2;
  animation: ${rotate} 6s infinite linear;
  & img {
    object-fit: cover;
    width: clamp(70%, 2vw, 90%);
    border-radius: 50%;
    /* From https://css.glass */
    background: rgba(23, 24, 35, 0.07);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    /* backdrop-filter: blur(3.7px); */
    /* -webkit-backdrop-filter: blur(3.7px); */
    border: 1px solid rgba(23, 24, 35, 0.08);
  }
`;
const FloatingText = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: -4rem;
  top: 4rem;
  left: 0;
  width: 100%;
  & span {
    color: var(--clr-bg-500);
    text-transform: uppercase;
    display: inline-block;
    font-size: clamp(10rem, 10vw, 20rem);
    z-index: -1;
    font-family: "Times New Roman";
    line-height: clamp(3rem, 10vw, 6rem);
    height: clamp(12rem, 10vw, 24rem);
    &:first-of-type {
      transform: translateX(-30%);
    }
    &:nth-of-type(2) {
      transform: translateX(60%);
    }
    &:last-of-type {
      transform: translateX(-100%);
    }
  }
`;
const NameText = styled.h2`
  font-size: 4.8rem;
  letter-spacing: 2.2px;
  position: relative;
  z-index: 2;
  &::after {
    color: var(--clr-bg-400);
    opacity: 0.3;
    z-index: -1;
    position: absolute;
    top: 16rem;
    line-height: 1;
    left: 64%;
    font-size: 7rem;
    letter-spacing: 2.2px;
    scale: 2;
    text-transform: capitalize;
    width: 100%;
    content: "Hi i'am Frontend developer";
  }
  ${media.lg`
    &::after {
      top: 11rem;
      line-height: 1.6;font-size: 5.2rem;
    }
  `}
  ${media.sm`
    font-size: 4rem;
    text-align:center;
    &::after {
      /* position:relative; */
      top:3.2rem;
      left:0;
      scale:1;
    }
  `}
`;
const CareerText = styled.h1`
  font-size: 7rem;
  font-weight: 700;
  letter-spacing: 2.4px;
  line-height: 2.4;
  color: var(--clr-primary-500);
  z-index: 2;
  ${media.sm`
    font-size: 5.2rem;
    text-align:center;
    line-height: unset;
  `}
`;
const LeftWrapper = styled.div`
  position: relative;
  text-align: start;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 2rem;
  ${media.sm`
    align-items: center;
  `}
`;
const CtaWrapper = styled.div`
  margin-top: 10%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 4.8rem;
  width: 100%;
  ${media.sm`
  width: auto;
  justify-content: center;
  `}
  ${media.md2`
    flex-direction:column;
  `}
`;
const CtaButton = styled(Link)`
  border: none;
  background-color: var(--clr-accent-500);
  padding: 0.8rem 3.2rem;
  font-size: 2.4rem;
  font-weight: 700;
  letter-spacing: 2px;
  border-radius: 0.8rem;
  color: var(--clr-bg-500);
  transition: background-color 0.32s ease;
  &:hover {
    background-color: var(--clr-accent-700);
    box-shadow: var(--clr-accent-700) 0px 50px 100px -20px,
      var(--clr-accent-700) 0px 30px 60px -30px;
  }
`;
const SocialWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 2.4rem;
  & svg {
    width: 4rem;
    height: 4rem;
    fill: var(--clr-bg-300);
    stroke: var(--clr-bg-300);
  }
`;
const SocialLink = styled(Link)`
  border: 2px solid var(--clr-bg-300);
  border-radius: 0.8rem;
  display: grid;
  place-items: center;
  padding: 0.4rem;
  &:active {
    background-color: var(--clr-accent-500);
    color: var(--clr-bg-500);
  }
  &:hover {
    color: var(--clr-accent-500);
    border: 2px solid var(--clr-accent-500);
    & svg {
      fill: var(--clr-accent-500);
      stroke: var(--clr-accent-500);
    }
  }
`;
const ServiceButton = styled.button`
  border: 2px solid var(--clr-bg-300);
  border-radius: 0.8rem;
  display: grid;
  place-items: center;
  padding: 1.2rem 0.4rem;
  background: transparent;
  color: var(--clr-bg-300);
  font-weight: bold;
  transition: all 0.32s ease;
  &:hover {
    color: var(--clr-accent-500);
    border: 2px solid var(--clr-accent-500);
  }
  &:active {
    background-color: var(--clr-accent-500);
    color: var(--clr-bg-500);
  }
  ${(props) =>
    props.$isActive &&
    css`
      color: var(--clr-accent-500);
      border: 2px solid var(--clr-accent-500);
      & svg {
        fill: var(--clr-accent-500);
        stroke: var(--clr-accent-500);
      }
    `}
`;
const ResumeButton = styled(Link)`
  border: 2px solid var(--clr-bg-300);
  border-radius: 0.8rem;
  display: grid;
  place-items: center;
  padding: 1.2rem 0.4rem;
  background: transparent;
  color: var(--clr-bg-300);
  font-weight: bold;
  transition: all 0.32s ease;
  &:hover {
    color: var(--clr-accent-500);
    border: 2px solid var(--clr-accent-500);
  }
  &:active {
    background-color: var(--clr-accent-500);
    color: var(--clr-bg-500);
  }
`;
const ScrollingBtn = styled.button`
  height: fit-content;
  border: 0.2rem solid var(--clr-primary-500);
  padding: 1rem;
  border-radius: 0.8rem;
  background: transparent;
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* gap: 0.8rem; */
  & svg {
    width: 3.2rem;
    height: 3.2rem;
    opacity: 0.2;
    stroke-width: 3.6px;
    &:first-of-type {
      /* opacity: 0.4; */
      stroke: var(--clr-primary-500);
    }
    &:nth-of-type(2) {
      /* opacity: 0.7; */
      stroke: var(--clr-primary-500);
    }
    &:last-of-type {
      stroke: var(--clr-primary-500);
    }
  }
`;
const FloatingPiano = styled.div`
  position: absolute;
  top: -5rem;
  right: 36%;
  & svg {
    fill: var(--clr-bg-400);
    opacity: 0.3;
    width: 20rem;
    height: 20rem;
    z-index: -1;
    transform: rotate(45deg);
  }
  ${media.sm` 
    right:0;
    & svg {
      width: 10rem;
      height: 10rem;
     
    }
  `}
`;

gsap.registerPlugin(useGSAP);
const thaiFont = localFont({ src: "../font/thaiFont.ttf" });

const HomaPage = forwardRef(function HomaPage({}, ref) {
  const container = useRef();
  const { toggleService, handleToggleService } = useContext(StateContext);
  const handleServiceClick = () => {
    if (toggleService) {
      handleToggleService(false);
    } else {
      handleToggleService(true);
      const element = document.getElementById("service");
      element?.scrollIntoView({
        behavior: "smooth",
      });
    }
  };
  useGSAP(
    () => {
      let svgIcon = gsap.utils.toArray(".scrolling_btn svg");
      let animation = gsap.timeline({ repeat: -1 });
      animation
        .from(svgIcon, {
          duration: 0.5,
          opacity: 0.2,
          stagger: 0.1,
        })
        .to(svgIcon, { duration: 0.5, opacity: 1, stagger: 0.1 })
        .to(svgIcon, { duration: 0.5, opacity: 0.2, stagger: 0.1 }, 1);
    },
    { scope: container }
  );
  return (
    <PageWrapper id="home" ref={ref} className={thaiFont.className}>
      <Wrapper ref={container}>
        <ScrollingBtn className="scrolling_btn">
          <FiChevronDown />
          <FiChevronDown />
          <FiChevronDown />
        </ScrollingBtn>
        <LeftWrapper>
          <FloatingPiano>
            <CgPiano />
          </FloatingPiano>
          <NameText>สวัสดีครับ ผมออแกน</NameText>
          <CareerText>ผมเป็นนักพัฒนาเว็บ Frontend developer</CareerText>
          <CtaWrapper>
            <CtaButton href="#cta" title="Contract form">
              Hire me!
            </CtaButton>
            <SocialWrapper>
              <SocialLink
                href="https://www.facebook.com/powerganoflove/"
                target="_blank"
                title="Facebook link"
              >
                <FiFacebook />
              </SocialLink>
              <SocialLink
                href="https://www.instagram.com/pritakpol/"
                target="_blank"
                title="Instagram link"
              >
                <IoLogoInstagram />
              </SocialLink>
              <SocialLink
                href="https://github.com/gan15932156"
                target="_blank"
                title="Github link"
              >
                <FaGithub />
              </SocialLink>
              <SocialLink
                href="https://www.linkedin.com/in/pritakpol-damrisil-917a96153/"
                target="_blank"
                title="Linkedin link"
              >
                <FaLinkedin />
              </SocialLink>
              <ServiceButton
                $isActive={toggleService}
                onClick={handleServiceClick}
                title="Services section"
              >
                ดูบริการ
              </ServiceButton>
              <ResumeButton
                title="Resume link"
                href="https://drive.google.com/file/d/1gG93O5K1PNmGtOPFKSGkCxBA5Yvag0Qd/view?usp=sharing"
                target="_blank"
              >
                Resume
              </ResumeButton>
            </SocialWrapper>
          </CtaWrapper>
        </LeftWrapper>
        <ProfileImageWrapper style={{ position: "relative" }}>
          <FloatingText>
            <span>never</span>
            <span>give</span>
            <span>up</span>
          </FloatingText>
          <img src={"/profile.png"} alt="profile image" />
        </ProfileImageWrapper>
      </Wrapper>
    </PageWrapper>
  );
});
export default HomaPage;
