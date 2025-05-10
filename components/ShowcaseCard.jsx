"use client";

import { media } from "@/providers/responsiveUtils";
import { FaExternalLinkAlt } from "react-icons/fa";
import Link from "next/link";
import React from "react";
import styled, { css } from "styled-components";

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  /* max-width: 40rem; */
  height: 100%;
  background-color: var(--clr-bg-600);
  border-radius: 1rem;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 2rem;
  ${media.xs`
    padding: 0.8rem;
  `}
`;
const Image1 = styled.img`
  object-fit: contain;
  width: 100%;
  height: 100%;
`;
const ImageWrapper = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
`;
const TechStackWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3.2rem;
  align-self: flex-end;
  & svg {
    width: 4rem;
    height: 4rem;
    fill: var(--clr-primary-500);
  }
  ${media.sm`
    & svg{
      width: 2rem;
      height: 2rem;
    }
  `}
`;
const HeaderWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Name = styled.p`
  font-size: 2rem;
  font-weight: bold;
`;
const NameWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-center;
  gap: 2rem;
`;
const ExternalLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: cener;
  padding: 0.4rem;
  border-radius: 0.4rem;
  border: 2px solid transparent;
  transition: all 0.32 ease;
  & svg {
    width: 2rem;
    height: 2rem;
    fill: var(--clr-accent-500);
  }
  &:hover {
    border: 2px solid var(--clr-accent-500);
  }
`;
export default function ShowcaseCard({ data }) {
  return (
    <Wrapper>
      <HeaderWrapper>
        <NameWrapper>
          <Name>{data.name}</Name>
          {data.link != "" && (
            <ExternalLink href={data.link} target="_blank">
              <FaExternalLinkAlt />
            </ExternalLink>
          )}
        </NameWrapper>
        <TechStackWrapper>
          {data.techStackIcon.map((e, index) => (
            <React.Fragment key={index}>{e}</React.Fragment>
          ))}
        </TechStackWrapper>
      </HeaderWrapper>
      <ImageWrapper>
        <Image1 src={data.imagesPath} />
      </ImageWrapper>
    </Wrapper>
  );
}
