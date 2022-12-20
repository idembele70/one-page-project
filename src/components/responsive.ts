import { CSSObject, css } from "styled-components";

export const lgDown = (props: CSSObject) => css`
  @media only screen and (max-width: 1500px) {
    ${props}
  }
`;
export const lgUp = (props: CSSObject) => css`
  @media only screen and (min-width: 1501px) {
    ${props}
  }
`;
export const mdDown = (props: CSSObject) => css`
  @media only screen and (max-width: 992px) {
    ${props}
  }
`;
export const mdUp = (props: CSSObject) => css`
  @media only screen and (min-width: 993px) {
    ${props}
  }
`;
export const smDown = (props: CSSObject) => css`
  @media only screen and (max-width: 600px) {
    ${props}
  }
`;
export const smUp = (props: CSSObject) => css`
  @media only screen and (min-width: 601px) {
    ${props}
  }
`;
