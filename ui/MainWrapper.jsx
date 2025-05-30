"use client";

import { media } from "@/providers/responsiveUtils";
import styled from "styled-components";

export const MainWrapper = styled.main`
  /* height: 100vh; */
  display: flex;
  flex-direction: column;

  position: relative;
  width: 100%;
  overflow-x: hidden;
  /* overflow-y: scroll; */
  scroll-behavior: smooth;
  /* scroll-snap-type: y mandatory; */
  /* -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  } */
`;
export const PageWrapper = styled.section`
  display: grid;
  place-items: center;
  width: 100%;
  /* min-height: 100vh; */
  text-align: center;
  position: relative;
  background: rgba(29, 30, 44, 0.24);
  backdrop-filter: blur(9.9px);
  -webkit-backdrop-filter: blur(9.9px);
  /* scroll-snap-align: start; */
`;
export const MySpiritFloating = styled.p`
  text-align: center;
  user-select: none;
  position: absolute;
  color: var(--clr-bg-400);
  font-size: 10rem;
  letter-spacing: 2px;
  z-index: -1;
  top: 0;
  width: 100%;
  opacity: 0;
  white-space: nowrap;
`;
export const SectionWrapper = styled.div`
  /* min-height: 100vh; */
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 100%;
  margin-block: 8rem;

  ${media.sm`
    margin-block: 6rem;
    `}
`;
export const SectionHeading = styled.h2`
  color: var(--clr-primary-500);
  font-size: 5.4rem;
  font-weight: 700;
  letter-spacing: 1rem;
  padding: 0.2rem 4rem;
  border-radius: 1rem;
  background-color: var(--clr-bg-600);
  ${media.md1`
    font-size: 3.8rem;
  `}
`;
