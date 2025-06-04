"use client";
import { media } from "@/providers/responsiveUtils";
import Link from "next/link";
import styled from "styled-components";
export const Wrapper = styled.div`
  position: relative;
  padding: 2rem 4rem;
  margin-top: 4rem;
  width: 64%;
  background-color: var(--clr-bg-600);
  border-radius: 1rem;
  ${media.md1`
    width: 88%;
  `}
  ${media.sm`
    padding: 2rem;
    width: 94%;
  `}
`;
export const ContactWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(32rem, 100%), 1fr));
  column-gap: 8%;
  row-gap: 4rem;
  & > * {
    width: 100%;
    background-color: var(--clr-accent-500);
    border: 2px solid var(--clr-accent-500);
    color: var(--clr-bg-500);
    border-radius: 1rem;
    padding: 1rem 2rem;
    ${media.xs`
        padding: 1rem;
    `}
    & h2 {
      font-size: 3.2rem;
      margin-bottom: 0.8rem;
      letter-spacing: 0.6px;
      text-align: start;
    }
  }
`;
export const ContactForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 2rem;
`;
export const InputWrapper = styled.div`
  display: grid;
  grid-template-columns: 0.4fr 1.6fr;
  justify-items: start;
  align-items: center;
  width: 100%;
`;
export const Input = styled.input`
  width: 100%;
  border: none;
  outline: none;
  padding: 0.4rem 1rem;
  border-radius: 1rem;
  background-color: var(--clr-bg-500);
  color: var(--clr-text-500);
  transition: outline 0.2s ease;
  &:focus {
    outline: 2px solid var(--clr-primary-500);
  }
`;
export const Label = styled.label`
  font-size: 2.2rem;
`;
export const SubmitBtn = styled.button`
  margin-top: 4rem;
  border: none;
  background-color: var(--clr-primary-500);
  padding: 0.8rem 3.2rem;
  font-size: 2.2rem;
  font-weight: 700;
  letter-spacing: 2px;
  border-radius: 0.8rem;
  color: var(--clr-bg-500);
  transition: background-color 0.32s ease;
  &:hover {
    background-color: var(--clr-primary-700);
    box-shadow: var(--clr-primary-700) 0px 50px 100px -20px,
      var(--clr-primary-700) 0px 30px 60px -30px;
  }
`;
export const SocialWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;
export const AltContactWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2rem;
`;
export const SocialItem = styled(Link)`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 1.8rem;
  transition: background-color 0.2s ease;
  padding: 2rem;
  border-radius: 1rem;
  ${media.xs`
        padding: 1rem;
    `}
  &:hover {
    background-color: var(--clr-accent-300);
    & svg {
      fill: var(--clr-accent-500);
    }
    & span {
      color: var(--clr-accent-500);
    }
  }
  & svg {
    transition: fill 0.2s ease;
    width: 4rem;
    height: 4rem;
  }
  & span {
    transition: color 0.2s ease;
    font-size: 2.2rem;
  }
`;
export const FeedbackText = styled.div`
  padding: 0.2rem 1rem;
  border-radius: 1rem;
  font-size: 1.8rem;
  background-color: #198754;
  width: 16rem;
  color: var(--clr-text-500);
`;
export const SelectBox = styled.select`
  appearance: none;
  outline: none;
  cursor: pointer;
  padding: 0.4rem 1rem;
  border-radius: 1rem;
  background-color: var(--clr-bg-500);
  color: var(--clr-text-500);
  width: 100%;
  text-align: start;
  transition: outline 0.2s ease;
  &:focus {
    outline: 2px solid var(--clr-primary-500);
  }
`;
export const MessageInput = styled.textarea`
  width: 100%;
  height: 12rem;
  resize: none;
  padding: 0.4rem 1rem;
  border-radius: 1rem;
  outline: none;
  background-color: var(--clr-bg-500);
  color: var(--clr-text-500);
  transition: outline 0.2s ease;
  &:focus {
    outline: 2px solid var(--clr-primary-500);
  }
`;
