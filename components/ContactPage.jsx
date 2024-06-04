"use client";
import { FiMail, FiPhone } from "react-icons/fi";
import { FaInstagram, FaLine } from "react-icons/fa";
import { AiFillFacebook } from "react-icons/ai";
import localFont from "next/font/local";
import { PageWrapper } from "@/ui/MainWrapper";
import { forwardRef, useEffect, useState } from "react";
import styled from "styled-components";
import Link from "next/link";
import { useForm } from "react-hook-form";
import useWeb3forms from "@web3forms/react";
const thaiFont = localFont({ src: "../font/thaiFont.ttf" });
const Wrapper = styled.div`
  position: relative;
  /* min-height: 90vh; */
  padding: 2rem 4rem;
  /* max-width: 80%; */
  width: 64%;
  background-color: var(--clr-bg-600);
  border-radius: 1rem;
`;
const ContactWrapper = styled.div`
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
    & h2 {
      font-size: 3.2rem;
      margin-bottom: 0.8rem;
      letter-spacing: 0.6px;
      text-align: start;
    }
  }
`;
const ContactForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 2rem;
`;
const InputWrapper = styled.div`
  display: grid;
  grid-template-columns: 0.4fr 1.6fr;
  justify-items: start;
  align-items: center;
  width: 100%;
`;
const Input = styled.input`
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
const Label = styled.label`
  font-size: 2.2rem;
`;
const SubmitBtn = styled.button`
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
const SocialWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  /* gap: 4rem; */
`;
const AltContactWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  /* justify-content: center; */
  gap: 2rem;
`;
const SocialItem = styled(Link)`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 1.8rem;
  transition: background-color 0.2s ease;
  padding: 2rem;
  border-radius: 1rem;
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
const FeedbackText = styled.div`
  padding: 0.2rem 1rem;
  border-radius: 1rem;
  font-size: 1.8rem;
  background-color: #198754;
  width: 16rem;
  color: var(--clr-text-500);
`;
const SelectBox = styled.select`
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
const MessageInput = styled.textarea`
  width: 100%;
  height: 12rem;
  resize: none;
  padding: 0.4rem 1rem;
  border-radius: 1rem;
  background-color: var(--clr-bg-500);
  color: var(--clr-text-500);
  transition: outline 0.2s ease;
  &:focus {
    outline: 2px solid var(--clr-primary-500);
  }
`;
const ContactPage = forwardRef(function ContactPage({}, ref) {
  const {
    register,
    reset,
    handleSubmit,
    formState: { isSubmitSuccessful, isSubmitting, isSubmitted },
  } = useForm();
  const [result, setResult] = useState(null);
  const [isSuccess, setIsSuccess] = useState(false);
  const accessKey = process.env.NEXT_PUBLIC_ACCESS_KEY;
  const { submit: onSubmit } = useWeb3forms({
    access_key: accessKey,
    settings: {
      from_name: "personalweb_contact",
      subject: "New Contact Message from your Website",
    },
    onSuccess: (msg, data) => {
      setIsSuccess(true);
      setResult(msg);
      reset();
    },
    onError: (msg, data) => {
      setIsSuccess(false);
      setResult(msg);
    },
  });
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsSuccess(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, [isSuccess]);
  return (
    <PageWrapper id="cta" ref={ref} className={thaiFont.className}>
      <Wrapper>
        <ContactWrapper>
          <ContactForm onSubmit={handleSubmit(onSubmit)}>
            <h2>แบบฟอร์มติดต่อ</h2>
            <InputWrapper>
              <Label>ชื่อ นามสกุล</Label>
              <Input
                type="text"
                placeholder="ชื่อ-นามสกุล"
                {...register("name", { required: true })}
              />
            </InputWrapper>
            <InputWrapper>
              <Label>อีเมล์</Label>
              <Input
                type="email"
                {...register("email", { required: true })}
                placeholder="อีเมล์"
                required
              />
            </InputWrapper>
            <InputWrapper>
              <Label>บริการ</Label>
              <SelectBox {...register("service")}>
                <option value="none">-</option>
                <option value="แปลงไฟล์ออกแบบเป็นเว็บไซต์">
                  แปลงไฟล์ออกแบบเป็นเว็บไซต์
                </option>
                <option value="พัฒนาเว็บไซต์หน้าเดียว">
                  พัฒนาเว็บไซต์หน้าเดียว
                </option>
              </SelectBox>
            </InputWrapper>
            <InputWrapper>
              <Label>ข้อความ</Label>
              <MessageInput
                {...register("message", { required: true })}
                placeholder="ข้อความ"
              ></MessageInput>
            </InputWrapper>
            {isSubmitSuccessful &&
              isSuccess &&
              !isSubmitting &&
              isSubmitted && <FeedbackText>สำเร็จ</FeedbackText>}
            <SubmitBtn type="submit" disabled={isSubmitting}>
              {isSubmitting ? "กำลังส่ง..." : "ส่งแบบฟอร์ม"}
            </SubmitBtn>
          </ContactForm>
          <AltContactWrapper>
            <h2>ช่องทางการติดต่อ</h2>
            <SocialWrapper>
              <SocialItem href={"#"}>
                <FiMail />
                <span>gan123zaa@gmail.com</span>
              </SocialItem>
              <SocialItem href={"#"}>
                <FiPhone />
                <span>086-388-3784</span>
              </SocialItem>
              <SocialItem href={"#"}>
                <AiFillFacebook />
                <span>FACEBOOK</span>
              </SocialItem>
              <SocialItem href={"#"}>
                <FaInstagram />
                <span>INSTAGRAM</span>
              </SocialItem>
              <SocialItem href={"#"}>
                <FaLine />
                <span>LINE</span>
              </SocialItem>
            </SocialWrapper>
          </AltContactWrapper>
        </ContactWrapper>
      </Wrapper>
    </PageWrapper>
  );
});
export default ContactPage;
