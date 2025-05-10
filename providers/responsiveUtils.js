"use client";
import { css } from "styled-components";
const device = {
  lg: "80em",
  md1: "59.25em",
  md2: "48em",
  sm: "39em",
  xs: "23.75em",
};
export const media = {
  lg: (...args) => css`
    @media only screen and (max-width: ${device.lg}) {
      ${css(...args)}
    }
  `,
  md1: (...args) => css`
    @media only screen and (max-width: ${device.md1}) {
      ${css(...args)}
    }
  `,
  md2: (...args) => css`
    @media only screen and (max-width: ${device.md2}) {
      ${css(...args)}
    }
  `,
  sm: (...args) => css`
    @media only screen and (max-width: ${device.sm}) {
      ${css(...args)}
    }
  `,
  xs: (...args) => css`
    @media only screen and (max-width: ${device.xs}) {
      ${css(...args)}
    }
  `,
};
