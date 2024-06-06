"use client";
import { RiGalleryView2 } from "react-icons/ri";
import { FiHome, FiUser } from "react-icons/fi";
import { RiContactsBook3Line } from "react-icons/ri";
import { MdOutlineWorkOutline } from "react-icons/md";
import Link from "next/link";
import styled, { css } from "styled-components";
import { media } from "@/providers/responsiveUtils";
const Wrapper = styled.div`
  position: fixed;
  right: 1rem;
  top: 50%;
  transform: translateY(-50%);
  /* From https://css.glass */
  background: rgba(74, 75, 86, 0.41);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(6.3px);
  -webkit-backdrop-filter: blur(6.3px);
  border: 1px solid rgba(74, 75, 86, 0.15);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2.4rem;
  width: fit-content;
  padding: 2rem 1.6rem;
  z-index: 999;
  ${media.sm`
    right:unset;
    transform: translateX(-50%);
    top: 1rem;
    left:50%;
    flex-direction: row;
    justify-content: space-between;
    width:80%;
    padding: 1.2rem 1.6rem;
  `}
`;
const NavLink = styled(Link)`
  position: relative;
  display: grid;
  place-items: center;
  width: 3.2rem;
  height: 3.2rem;
  border-radius: 100vw;
  background: var(--clr-bg-400);
  transition: all 0.3s ease-in;
  ${(props) =>
    props.$isActive &&
    css`
      transform: scale(1.3);
      background: var(--clr-accent-500);
    `}
  &:hover::before {
    opacity: 1;
    display: flex;
    background: var(--clr-accent-500);
  }
  &::before {
    width: 14rem;
    text-align: center;
    font-style: italic;
    letter-spacing: 2px;
    position: absolute;
    transform: translate(-50%, -50%);
    top: 50%;
    left: -8rem;
    background: var(--clr-bg-400);
    border-radius: 0.4rem;
    font-size: 1.4rem;
    opacity: 0;
    display: none;
    align-items: center;
    justify-content: center;
    padding: 0.2rem 1rem;
    content: attr(data-link);
    transition: opacity 0.2s ease;
    ${media.sm`
      top: unset;
      left: 50%;
      bottom:-100%;
    `}
  }
`;
export default function FloatingNav({ isActive }) {
  return (
    <Wrapper>
      <NavLink
        $isActive={isActive == "home"}
        className="active"
        href={"#home"}
        data-link="Home"
      >
        <FiHome />
      </NavLink>
      <NavLink
        $isActive={isActive == "service"}
        className="active"
        href={"#service"}
        data-link="Service"
      >
        <MdOutlineWorkOutline />
      </NavLink>
      <NavLink
        $isActive={isActive == "showcase"}
        className="active"
        href={"#showcase"}
        data-link="Showcase"
      >
        <RiGalleryView2 />
      </NavLink>
      <NavLink
        $isActive={isActive == "about"}
        className="active"
        href={"#about"}
        data-link="About me"
      >
        <FiUser />
      </NavLink>
      <NavLink
        $isActive={isActive == "cta"}
        className="active"
        href={"#cta"}
        data-link="Contact"
      >
        <RiContactsBook3Line />
      </NavLink>
    </Wrapper>
  );
}
