"use client";

import { media } from "@/providers/responsiveUtils";
import styled, { css } from "styled-components";

const Wrapper = styled.div`
  padding-inline: 1.2rem;
`;
const Timeline = styled.div`
  width: 100%;
  margin: 3.2rem auto;
  position: relative;
  padding: 0 0.8rem;
  &:before {
    content: "";
    width: 0.4rem;
    height: 100%;
    background-color: var(--clr-primary-300);
    left: 50%;
    top: 0;
    position: absolute;
  }
  &:after {
    content: "";
    clear: both;
    display: table;
    width: 100%;
  }
  ${media.lg`
    margin: 30px;
	padding: 0px;
	width: 90%;
	&:before {
		left: 0;
	}
   `}
`;
const TimelineItem = styled.div`
  margin-bottom: 2.2rem;
  position: relative;
  &:after,
  &:before {
    content: "";
    display: block;
    width: 100%;
    clear: both;
  }
`;
const TimelineIcon = styled.div`
  background-color: var(--clr-primary-300);
  width: 4.8rem;
  height: 4.8rem;
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  margin-left: 0.2rem;
  overflow: hidden;
  border-radius: 50%;
  ${media.lg`
    left: 0;
   `}
`;
const TimelineContent = styled.div`
  width: 45%;
  background-color: var(--clr-primary-300);
  padding: 1.2rem;
  box-shadow: 0 0.2rem 1rem rgba(0, 0, 0, 0.1);
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2rem;
  height: 100%;
  &:before {
    content: "";
    position: absolute;
    left: 45%;
    top: 2rem;
    width: 0;
    height: 0;
    border-top: 0.8rem solid transparent;
    border-bottom: 0.8rem solid transparent;
    border-left: 0.8rem solid var(--clr-primary-300);
  }
  && {
    ${(props) =>
      props.$right &&
      css`
        float: right;
        &:before {
          content: "";
          right: 45%;
          left: inherit;
          border-left: 0;
          border-right: 0.64rem solid var(--clr-primary-300);
        }
      `}
  }
  ${media.lg`
    width: 90%;
    float: right;
    &:before{
        left: 10%;
        margin-left: -6px;
        border-left: 0;
        border-right: 0.64rem solid var(--clr-primary-300);
    }
    && {
    ${(props) =>
      props.$right &&
      css`
        &:before {
          left: 10%;
          margin-left: -6px;
          border-left: 0;
          border-right: 0.64rem solid var(--clr-primary-300);
        }
      `}
  }
   `}
`;
const GraduatText = styled.p`
  font-size: 3.2rem;
  font-weight: 700;
  border-radius: 1rem;
  background-color: var(--clr-primary-500);
  line-height: 1;
  padding: 0.2rem 2rem;
`;
const EduLevelText = styled.p`
  font-size: 2rem;
  font-weight: 700;
  letter-spacing: 1px;
`;
const TimelineContentHeadingWrapper = styled.div`
  background-color: var(--clr-accent-200);
  border-radius: 1rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0.2rem 1rem;
  align-items: flex-start;
`;
const InstText = styled.p`
  font-size: 1.8rem;
`;
export default function EduCard({ activeTab }) {
  if (activeTab != "edu") return null;
  return (
    <Wrapper>
      <Timeline>
        <TimelineItem>
          <TimelineIcon></TimelineIcon>
          <TimelineContent>
            <GraduatText>2017-2022</GraduatText>
            <TimelineContentHeadingWrapper>
              <EduLevelText>โรงเรียนอยุธยาวิทยาลัย</EduLevelText>
              <InstText>ระดับชั้นมัธยมศึกษาตอนต้น</InstText>
            </TimelineContentHeadingWrapper>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineIcon></TimelineIcon>
          <TimelineContent $right={true}>
            <GraduatText>2017-2022</GraduatText>
            <TimelineContentHeadingWrapper>
              <EduLevelText>มหาวิทยาลัยราชภัฏพระนครศรีอยุธยา</EduLevelText>
              <InstText>ระดับชั้นมัธยมศึกษาตอนต้น</InstText>
            </TimelineContentHeadingWrapper>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </Wrapper>
  );
}
