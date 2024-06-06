"use client";
import { FiMail, FiPhone } from "react-icons/fi";
import { FaInstagram, FaLine } from "react-icons/fa";
import { AiFillFacebook } from "react-icons/ai";
import localFont from "next/font/local";
import { PageWrapper, SectionHeading } from "@/ui/MainWrapper";
import { forwardRef, useEffect, useState } from "react";
import styled from "styled-components";
import Link from "next/link";
import { useForm } from "react-hook-form";
import useWeb3forms from "@web3forms/react";
import {
  AltContactWrapper,
  ContactForm,
  ContactWrapper,
  Input,
  InputWrapper,
  Label,
  MessageInput,
  SelectBox,
  SocialItem,
  SocialWrapper,
  SubmitBtn,
  Wrapper,
} from "@/ui/ContactPageUi";
const thaiFont = localFont({ src: "../font/thaiFont.ttf" });

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
      <SectionHeading>ติดต่อ</SectionHeading>
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
