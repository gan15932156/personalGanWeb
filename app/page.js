"use client";
import AboutPage from "@/components/AboutPage";
import ContactPage from "@/components/ContactPage";
import FloatingNav from "@/components/FloatingNav";
import HomaPage from "@/components/HomaPage";
import ServicePage from "@/components/ServicePage";
import { MainWrapper, SectionWrapper } from "@/ui/MainWrapper";
import React, { useRef, useState } from "react";
import { InView } from "react-intersection-observer";

export default function Home() {
  const [visibleSection, setVisibleSection] = useState("home");
  const setInView = (inView, entry) => {
    if (inView) {
      setVisibleSection(entry.target.getAttribute("id"));
    }
  };
  const wrapperRef = useRef(null);
  return (
    <MainWrapper ref={wrapperRef}>
      <FloatingNav isActive={visibleSection} />
      <InView as="div" onChange={setInView} threshold={0.5}>
        {({ ref }) => {
          return (
            <SectionWrapper className="section-wrapper">
              <HomaPage ref={ref} />
            </SectionWrapper>
          );
        }}
      </InView>
      <InView as="div" onChange={setInView} threshold={0.5}>
        {({ ref }) => {
          return (
            <SectionWrapper className="section-wrapper">
              <ServicePage ref={ref} />
            </SectionWrapper>
          );
        }}
      </InView>
      <InView as="div" onChange={setInView} threshold={0.5}>
        {({ ref }) => {
          return (
            <SectionWrapper className="section-wrapper">
              <AboutPage ref={ref} />
            </SectionWrapper>
          );
        }}
      </InView>
      <InView as="div" onChange={setInView} threshold={0.5}>
        {({ ref }) => {
          return (
            <SectionWrapper className="section-wrapper">
              <ContactPage ref={ref} />
            </SectionWrapper>
          );
        }}
      </InView>
    </MainWrapper>
  );
}
