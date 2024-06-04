"use client";

import { memo, useRef } from "react";
import TechCards from "./TechCards";
import {
  CtaButton,
  DescWrapper,
  Heading,
  PeriodBadge,
  PriceBadge,
  ServeiceBadge,
  ServiceCount,
  ServiceCta,
  ServiceDetailWrapper,
  ServiceStepWrapper,
  StepService,
  SubHeading,
  Wrapper,
} from "@/ui/ServiceCardUi";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
gsap.registerPlugin(useGSAP);
const ServiceCard = memo(function ServiceCard({ data }) {
  const containerRef = useRef(null);
  const overlayRef = useRef(null);
  useGSAP(
    (context, contextSafe) => {
      const container = containerRef.current;
      const overlay = overlayRef.current;

      const handleMouseMove = contextSafe((e) => {
        const rect = container.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        gsap.to(overlay, {
          x: x,
          y: y,
          duration: 0.2,
          ease: "power2.out",
        });
      });

      const handleMouseEnter = contextSafe(() => {
        gsap.to(overlay, { opacity: 1, duration: 0.2 });
      });

      const handleMouseLeave = contextSafe(() => {
        gsap.to(overlay, { opacity: 0, duration: 0.2 });
      });
      container.addEventListener("mousemove", handleMouseMove);
      container.addEventListener("mouseenter", handleMouseEnter);
      container.addEventListener("mouseleave", handleMouseLeave);
      return () => {
        container.removeEventListener("mousemove", handleMouseMove);
        container.removeEventListener("mouseenter", handleMouseEnter);
        container.removeEventListener("mouseleave", handleMouseLeave);
      };
    },
    { scope: containerRef }
  );
  return (
    <Wrapper ref={containerRef}>
      <div
        ref={overlayRef}
        style={{
          width: "50px",
          height: "50px",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          borderRadius: "50%",
          position: "absolute",
          top: 0,
          left: 0,
          opacity: 0,
          pointerEvents: "none",
          zIndex: "999",
        }}
      >
        dsd
      </div>
      <ServiceCount>{data.id}</ServiceCount>
      <Heading>{data.nameTh}</Heading>
      <ServiceDetailWrapper>
        <ServiceStepWrapper>
          <SubHeading>รายละเอียดงาน</SubHeading>
          <DescWrapper>
            {data.descTopic.map((e) => (
              <li key={e}>{e}</li>
            ))}
          </DescWrapper>
        </ServiceStepWrapper>
        <ServiceStepWrapper>
          <SubHeading>ขั้นตอนการดำเนินงาน</SubHeading>
          <StepService>
            {data.serviceStep.map((e) => (
              <li key={e}>{e}</li>
            ))}
          </StepService>
        </ServiceStepWrapper>
      </ServiceDetailWrapper>
      <ServiceCta>
        <CtaButton>Hire me!</CtaButton>
        <TechCards icons={data.techBadge} />
      </ServiceCta>
      <ServeiceBadge>
        <PriceBadge>
          ราคาเริ่มต้น{" "}
          <span>
            {new Intl.NumberFormat().format(data.serviceDetail.price)}
          </span>{" "}
          บาท
        </PriceBadge>
        <PeriodBadge>
          ระยะเวลาดำเนินงาน {data.serviceDetail.workPeriod}
        </PeriodBadge>
      </ServeiceBadge>
    </Wrapper>
  );
});
export default ServiceCard;
