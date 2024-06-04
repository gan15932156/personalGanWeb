"use client";
import { FaHtml5, FaReact, FaGitAlt } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa6";
import { SiMongodb } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { RiNextjsFill } from "react-icons/ri";
import styled from "styled-components";
const skills = [
  {
    id: 1,
    name: "HTML",
    icon: <FaHtml5 />,
  },
  {
    id: 2,
    name: "CSS",
    icon: <FaCss3Alt />,
  },
  {
    id: 3,
    name: "Javascript",
    icon: <IoLogoJavascript />,
  },
  {
    id: 4,
    name: "React",
    icon: <FaReact />,
  },
  {
    id: 5,
    name: "NextJS",
    icon: <RiNextjsFill />,
  },
  {
    id: 6,
    name: "MongoDB",
    icon: <SiMongodb />,
  },
  {
    id: 7,
    name: "Git",
    icon: <FaGitAlt />,
  },
];
const Wrapper = styled.div`
  padding: 3.2rem 1.2rem;
  height: 100%;
  display: grid;
  place-items: center;
`;
const SkillWrapper = styled.div`
  width: 80%;
  /* height: 100%; */
  margin: auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(18rem, 100%), 1fr));
  grid-template-rows: 1fr;
  align-items: center;
  justify-content: center;
  grid-auto-rows: 1fr;
  gap: 3.6rem;
  & > * {
    background-color: red;
  }
`;
const SkillItemWrapper = styled.div`
  display: flex;
  padding: 1.6rem;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* gap: 0.8rem; */
  background-color: var(--clr-primary-300);
  border-radius: 1rem;
  & svg {
    width: 7.2rem;
    height: 7.2rem;
    fill: var(--clr-bg-600);
  }
  & span {
    font-size: 3.2rem;
    color: var(--clr-bg-600);
  }
`;
export default function SkillCard({ activeTab }) {
  if (activeTab != "skill") return null;
  return (
    <Wrapper>
      <SkillWrapper>
        {skills.map((item) => (
          <SkillItemWrapper key={item.id}>
            {item.icon}
            <span>{item.name}</span>
          </SkillItemWrapper>
        ))}
      </SkillWrapper>
    </Wrapper>
  );
}
