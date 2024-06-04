"use client";

import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 80rem;
  height: 100%;
  background-color: var(--clr-bg-600);
  border-radius: 1rem;
  padding: 6.4rem 2rem 4rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 2rem;
`;
export const Heading = styled.h1`
  font-size: 3.2rem;
  color: var(--clr-text-500);
  letter-spacing: 2px;
  text-align: start;
`;
export const StepService = styled.ol`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 0.8rem;
  margin-left: 2rem;
  font-size: 1.8rem;
  letter-spacing: 0.8px;
  & li {
    text-align: start;
    &::marker {
      color: var(--clr-primary-500);
    }
  }
`;
export const DescWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 0.8rem;
  margin-left: 2rem;
  font-size: 1.8rem;
  letter-spacing: 0.8px;
  & li {
    text-align: start;
    &::marker {
      color: var(--clr-primary-500);
    }
  }
`;
export const ServiceCta = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;
export const CtaButton = styled.button`
  border: none;
  outline: nnoe;
  font-size: 2.4rem;
  font-weight: 700;
  background-color: var(--clr-primary-500);
  color: var(--clr-bg-500);
  border-radius: 0.4rem;
  text-transform: uppercase;
  padding: 0.4rem 3.2rem;
  transition: background-color 0.32s ease;
  &:hover {
    background-color: var(--clr-primary-700);
  }
`;
export const ServiceStepWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 2rem;
`;
export const SubHeading = styled.p`
  letter-spacing: 2px;
  font-size: 2rem;
  font-weight: 700;
`;
export const ServiceCount = styled.span`
  display: block;
  position: absolute;
  top: -2rem;
  left: 2rem;
  font-size: 6.4rem;
  color: var(--clr-text-800);
  user-select: none;
`;
export const ServeiceBadge = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  position: absolute;
  top: 1rem;
  right: 1rem;
`;
export const PriceBadge = styled.p`
  background-color: var(--clr-primary-300);
  color: var(--clr-bg-500);
  padding-inline: 1rem;
  border-radius: 0.8rem;
  font-weight: 700;
  user-select: none;
  position: relative;
  overflow: hidden;
  isolation: isolate;
  &::after {
    content: "";
    inset: 0;
    background-color: var(--clr-primary-500);
    position: absolute;
    scale: 2;

    transform: translateX(50%);
    z-index: -1;
  }
`;
export const PeriodBadge = styled.p`
  background-color: var(--clr-accent-300);
  color: var(--clr-bg-500);
  padding-inline: 1rem;
  border-radius: 0.8rem;
  font-weight: 700;
  user-select: none;
  position: relative;
  overflow: hidden;
  isolation: isolate;
  &::after {
    content: "";
    inset: 0;
    background-color: var(--clr-accent-500);
    position: absolute;
    scale: 2;
    transform: translateX(50%);
    z-index: -1;
  }
`;
export const ServiceDetailWrapper = styled.div`
  margin-block: 3.2rem;
  align-self: stretch;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(32rem, 100%), 1fr));
  gap: 4rem;
  align-items: start;
  justify-content: center;
`;
