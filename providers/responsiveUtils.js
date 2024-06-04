"use client";
import { css } from "styled-components";
const device = {
  lg: "80em",
};
export const media = {
  lg: (...args) => css`
    @media only screen and (max-width: ${device.lg}) {
      ${css(...args)}
    }
  `,
};
