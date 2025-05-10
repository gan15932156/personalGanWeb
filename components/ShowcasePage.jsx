"use client";
import { media } from "@/providers/responsiveUtils";
import { PageWrapper, SectionHeading } from "@/ui/MainWrapper";
import localFont from "next/font/local";
import { RiNextjsFill } from "react-icons/ri";
import { forwardRef } from "react";
import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io5";
import { SiJavascript } from "react-icons/si";
import styled from "styled-components";
import ShowcaseCard from "./ShowcaseCard";
const thaiFont = localFont({ src: "../font/thaiFont.ttf" });
const data = [
  {
    id: 1,
    techStackIcon: [<RiNextjsFill title="NextJS" />],
    imagesPath: "/showcaseImage/s0.png",
    name: "my-template-builder",
    link: "https://my-template-builder.vercel.app/",
  },
  {
    id: 2,
    techStackIcon: [
      <FaHtml5 title="HTML5" />,
      <IoLogoCss3 title="CSS" />,
      <SiJavascript title="Javascript" />,
    ],
    imagesPath: "/showcaseImage/s1.png",
    name: "",
    link: "",
  },
  {
    id: 3,
    techStackIcon: [
      <FaHtml5 title="HTML5" />,
      <IoLogoCss3 title="CSS" />,
      <SiJavascript title="Javascript" />,
    ],
    imagesPath: "/showcaseImage/s2.png",
    name: "",
    link: "",
  },
  {
    id: 4,
    techStackIcon: [
      <FaHtml5 title="HTML5" />,
      <IoLogoCss3 title="CSS" />,
      <SiJavascript title="Javascript" />,
    ],
    imagesPath: "/showcaseImage/s3.png",
    name: "",
    link: "",
  },
  {
    id: 5,
    techStackIcon: [
      <FaHtml5 title="HTML5" />,
      <IoLogoCss3 title="CSS" />,
      <SiJavascript title="Javascript" />,
    ],
    imagesPath: "/showcaseImage/s4.png",
    name: null,
    link: "",
  },
];

const Wrapper = styled.div`
  display: grid;
  position: relative;
  width: 100%;
  place-items: center;
  padding-inline: 4rem;
  padding-top: 5.2rem;
  padding-bottom: 10rem;
  & > * {
    height: 100%;
  }
  ${media.sm`
    padding-inline: 2rem;
  `}
`;
const ServiceCardWrapper = styled.div`
  width: 98%;
  display: grid;
  row-gap: 8rem;
  align-items: start;
  justify-items: center;
  grid-template-columns: repeat(auto-fit, minmax(min(60rem, 100%), 1fr));
  grid-auto-rows: 1fr;
  gap: 4rem;
  ${media.sm`
    gap:2rem;
  `}
`;
const ShowcasePage = forwardRef(function ShowcasePage({}, ref) {
  return (
    <PageWrapper id="showcase" ref={ref} className={thaiFont.className}>
      <SectionHeading>ตัวอย่างบริการ</SectionHeading>
      <Wrapper>
        <ServiceCardWrapper>
          {data.map((e) => (
            <ShowcaseCard data={e} key={e.id} />
          ))}
        </ServiceCardWrapper>
      </Wrapper>
    </PageWrapper>
  );
});
export default ShowcasePage;
