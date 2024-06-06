"use client";
import { PageWrapper, SectionHeading } from "@/ui/MainWrapper";
import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io5";
import { SiJavascript } from "react-icons/si";
import { forwardRef } from "react";
import styled from "styled-components";
import localFont from "next/font/local";
import ServiceCard from "./ServiceCard";
import { media } from "@/providers/responsiveUtils";
const Wrapper = styled.div`
  display: grid;
  position: relative;
  width: 100%;
  place-items: center;
  padding-inline: 4rem;
  padding-top: 4rem;
  padding-bottom: 10rem;
  & > * {
    height: 100%;
  }
  ${media.sm`
    padding-inline: 2rem;
  `}
`;
const data = [
  {
    id: 1,
    nameTh: "รับแปลงไฟล์ออกแบบเป็นเว็บไซต์",
    nameEng: "Convert design to code",
    serviceStep: [
      "รับไฟล์ออกแบบและ เนื้อหาที่จำเป็นต่อระบบงาน",
      "ตกลงรายละเอียดงานกับผู้ว่าจ้าง",
      "ส่งใบเสนอราคา",
      "ดำเนินงาน",
      "ส่งต้นแบบให้ผู้ว่าจ้างพิจารณา",
      "ส่งงาน คือไฟล์ HTML, CSS, Javascript",
    ],
    descTopic: [
      "แปลงไฟล์ออกแบบ (Figma, Xd, PSD, Canva, Ai) เป็นเว็บไซต์ (HTML, CSS, javascript)",
      "พัฒนาเว็บไซต์ให้รองรับการแสดงผลทุกอุปกรณ์ (Responsive)",
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
  {
    id: 2,
    nameTh: "รับพัฒนาเว็บไซต์หน้าเดียว Landing page, static website",
    nameEng: "Develop landing page, static website",
    serviceStep: [
      "รับความต้องการของงานจากผู้ว่าจ้าง",
      "รับเนื้อหา(ข้อความ รูป โลโก้ ฟอนต์ ที่ถูกลิขสิทธิ์)",
      "รับไฟล์ออกแบบ(ถ้ามี) ตัวอย่างงาน(ถ้ามี)",
      "ตกลงรายละเอียดงานกับผู้ว่าจ้าง",
      "ส่งใบเสนอราคา",
      "ดำเนินงาน",
      "ส่งต้นแบบให้ผู้ว่าจ้างพิจารณา",
      "ส่งงาน คือไฟล์ HTML, CSS, Javascript",
    ],
    descTopic: [
      "เป็นเว็บไซต์หน้าเดียว เหมาะกับการประชาสัมพันธ์ โฆษณาต่างๆ เป็นต้น",
      "พัฒนาเว็บไซต์โดยใช้ HTML, CSS, Javascript",
      "พัฒนาและออกแบบให้แสดงผลได้ทุกหน้าจอ (Responsive)",
      "มีระบบส่งอีเมล์ ติดต่อกลับ",
      "ไม่มีระบบดึงข้อมูลจากแหล่งอื่นมาแสดง (ไม่ติดต่อ API)",
      "ไม่มีระบบติดต่อกับฝั่ง Backend",
      "ราคาเริ่มต้นหน้าแรก 3,000 บาท",
      "ราคาและระยะเวลาดำเนินงานขึ้นอยู่กับความยากของงาน",
    ],
    serviceDetail: { price: 3000, workPeriod: "3-7 วัน" },
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
      <SectionHeading>บริการ</SectionHeading>
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
