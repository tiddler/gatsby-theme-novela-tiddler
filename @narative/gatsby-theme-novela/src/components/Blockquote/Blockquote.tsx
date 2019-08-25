import styled from "@emotion/styled";
import mediaqueries from "@styles/media";

function isDark(p) {
  return p.theme.colors.articleText === p.theme.colors.modes.dark.articleText;
}

const Blockquote = styled.blockquote<{ p: any }>`
  transition: ${p => p.theme.colorModeTransition};
  margin: 15px auto 50px;
  font-family: ${p => p.theme.fonts.serif};
  font-style: italic;
  border-left: 6px solid #009688;
  padding: 10px 5px 10px 18px;
  background: ${p => isDark(p) ? `#455A64`: `#ECEFF1`};
  width: 80%;
  max-width: 760px;
}

  ${mediaqueries.tablet`
    margin: 10px auto 35px;
  `};

  & > p {
    max-width: 780px !important;
    padding-right: 50px;
    padding-bottom: 0;
    width: 100%;
    margin: 0 auto;
    font-size: 1em;
    line-height: 1.32;
  }
`;

export default Blockquote;
