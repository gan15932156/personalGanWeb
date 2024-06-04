"use client";
import { PageWrapper } from "@/ui/MainWrapper";
import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io5";
import { SiJavascript } from "react-icons/si";
import { forwardRef } from "react";
import styled from "styled-components";
import localFont from "next/font/local";
import ServiceCard from "./ServiceCard";
const Wrapper = styled.div`
  display: grid;
  position: relative;
  width: 100%;
  place-items: center;
  padding-inline: 4rem;
  padding-top: 8rem;
  padding-bottom: 10rem;
  & > * {
    height: 100%;
  }
`;
const data = [
  {
    id: 1,
    nameTh: "รับแปลงไฟล์ออกแบบเป็นเว็บไซด์",
    nameEng: "Convert design to code",
    desc: "รับงาน ราคาเริ่มต้นหน้าแรก 1,500 ทั้งนี้ราคาและระยะเวลาดำเนินงานขึ้นอยู่กับความยากของงาน",
    serviceStep: [
      "รับไฟล์ออกแบบและ เนื้อหาที่จำเป็นต่อระบบงาน",
      "ตกลงราคาและระยะเวลาดำเนินงานกับผู้ว่าจ้าง",
      "ตกลงสัญญา",
      "ดำเนินงาน",
      "ส่งต้นแบบให้ผู้ว่าจ้างพิจารณา",
      "ส่งงาน คือไฟล์ HTML, CSS, Javascript",
    ],
    descTopic: [
      "แปลงไฟล์ออกแบบ (Figma, Xd, PSD, Canva, Ai) เป็นเว็บไซด์ (HTML, CSS, javascript)",
      "พัฒนาเว็บไซด์ให้รองรับการแสดงผลทุกอุปกรณ์ (Responsive)",
      "ราคาเริ่มต้นหน้าแรก 1,500 บาท",
      "ราคาและระยะเวลาดำเนินงานขึ้นอยู่กับความยากของงาน",
    ],
    serviceDetail: { price: 1500, workPeriod: "1-3 วัน" },
    techBadge: [
      { name: "HTML", icon: <FaHtml5 /> },
      { name: "CSS", icon: <IoLogoCss3 /> },
      { name: "Javascript", icon: <SiJavascript /> },
    ],
  },
];
const thaiFont = localFont({ src: "../font/thaiFont.ttf" });
const ServiceCardWrapper = styled.div`
  width: 100%;
  display: grid;
  row-gap: 8rem;
  align-items: center;
  justify-items: center;
  grid-template-columns: repeat(auto-fit, minmax(min(80rem, 100%), 1fr));
  grid-auto-rows: 1fr;
  gap: 2rem;
`;
const ServicePage = forwardRef(function MySkillPage({}, ref) {
  return (
    <PageWrapper ref={ref} id="service" className={thaiFont.className}>
      <Wrapper>
        <ServiceCardWrapper>
          {data.map((e) => (
            <ServiceCard data={e} key={e.id} />
          ))}
        </ServiceCardWrapper>
      </Wrapper>
    </PageWrapper>
  );
});
export default ServicePage;
