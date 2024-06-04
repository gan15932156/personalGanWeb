"use client";

import styled from "styled-components";

const Wrapper = styled.div`
  position: relative;
  font-size: 2.8rem;
  padding: 3.2rem;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 4.8rem;
  /* align-items: flex-start; */
  /* justify-content: center; */
`;
const Paragraph = styled.p`
  letter-spacing: 0.6px;
  text-align: start;
  max-width: 70ch;
  margin-inline: auto;
`;
const AboutTextWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  /* justify-content: center; */
  gap: 2rem;
`;
const Image = styled.img`
  object-fit: cover;
  width: 32%;
  border-radius: 1rem;
  filter: drop-shadow(1rem 0.7rem 2rem var(--clr-primary-200));
`;
const ImageWrapper = styled.div`
  display: flex;
  /* align-items: flex-start; */
  justify-content: center;
  gap: 2rem;
  flex-wrap: wrap;
`;
export default function AboutCard({ activeTab }) {
  if (activeTab != "about") return null;
  return (
    <Wrapper>
      <ImageWrapper>
        <Image src="/file4.jpg" />
        <Image src="/file2.png" />
        <Image src="/file1.png" />
      </ImageWrapper>
      <AboutTextWrapper>
        <Paragraph>
          สวัสดีครับ ผมนายพิทักษ์พล ดำริห์ศิลป์ เป็นนักพัฒนาเว็บไซต์ฟรีแลนซ์
          ผมจบการศึกษาระดับปริญญาตรีจากมหาวิทยาลัยราชภัฏพระนครศรีอยุธยา
          ในสาขาวิทยาการคอมพิวเตอร์
        </Paragraph>
        <Paragraph>
          เป้าหมายของผมคือการพัฒนาเว็บไซต์ที่เน้นประสบการณ์ของผู้ใช้เป็นหลัก
          ทำให้ผู้ใช้สามารถเข้าถึงข้อมูลและบริการได้อย่างง่ายดายและรวดเร็ว
          อีกทั้งยังรองรับการเข้าถึงจากทุกอุปกรณ์
        </Paragraph>
        <Paragraph>
          ในฐานะฟรีแลนซ์ ผมมีความยืดหยุ่นในการทำงาน
          สามารถจัดการโปรเจกต์ที่หลากหลายได้ตามความต้องการของลูกค้า
          และมีความสามารถในการทำงานระยะไกลเพื่อประหยัดเวลาและค่าใช้จ่ายของลูกค้า
        </Paragraph>
        <Paragraph>
          ในเวลาว่าง ผมชอบเล่นกีต้าร์ ร้องเพลงและเลี้ยง สะสมแคคตัส
          ซึ่งช่วยให้ผมมีแรงบันดาลใจในการทำงานและการใช้ชีวิต
        </Paragraph>
      </AboutTextWrapper>
    </Wrapper>
  );
}
