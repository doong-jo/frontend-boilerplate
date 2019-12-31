import { createGlobalStyle } from 'styled-components';
import { theme } from 'styled-tools';

const GlobalStyles = createGlobalStyle`
  @import url(//spoqa.github.io/spoqa-han-sans/css/SpoqaHanSans-kr.css);
  @import url('https://fonts.googleapis.com/css?family=Gothic+A1|Noto+Sans+KR&display=swap');
  @font-face {
    font-family: 'S-CoreDream-8Heavy';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_six@1.2/S-CoreDream-8Heavy.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }
  * {
    margin: 0;
    font-family: 'Spoqa Han Sans', 'Noto Sans KR', 'Gothic A1', sans-serif;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  html {
    font-size: 10px;
  }
  body {
    height: 100%;
    padding: 0rem 5rem;
  }
  a, button {
    text-decoration: none;
    cursor: pointer;
  }

  h1 {
    ${theme('fontStyle.h1')}
  }

  h2 {
    ${theme('fontStyle.h2')}
  }

  h3 {
    ${theme('fontStyle.h3')}
  }

  h4 {
    ${theme('fontStyle.h4')}
  }

  h5 {
    ${theme('fontStyle.h5')}
  }

  h6 {
    ${theme('fontStyle.h6')}
  }

  p {
    ${theme('fontStyle.body1')}
  }
`;

export default GlobalStyles;
