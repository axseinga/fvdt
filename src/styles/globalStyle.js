import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

export const GlobalStyle = createGlobalStyle`
${normalize};
html {
    font-size: 62.5%;
};

body {
    background-color: #D2E2FE;
}
`;

/*
colors:
#D2E2FE
#FDC200
#DEDEDE
#7061CA
*/
