"use client";

import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  & p {
    display: flex;
    flex-direction: column;
    align-items: center;
    color: var(--clr-text-800);
    justify-content: center;
    /* gap: 2rem; */
    & svg {
      width: 2.8rem;
      height: 2.8rem;
      fill: var(--clr-accent-500);
    }
  }
`;
export default function TechCards({ icons }) {
  return (
    <Wrapper>
      {icons.map((e, index) => (
        <p key={index}>
          {e.icon}
          {e.name}
        </p>
      ))}
    </Wrapper>
  );
}
