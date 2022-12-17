import { CSSObject, css } from "styled-components";

export const MdDesktopDown = (props: CSSObject) => css`
  @media only screen and (max-width: 1500px) {
    ${props}
  }
`;
export const MdDesktopUp = (props: CSSObject) => css`
  @media only screen and (min-width: 1500px) {
    ${props}
  }
`;
