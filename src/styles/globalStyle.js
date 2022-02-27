import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

export const GlobalStyle = createGlobalStyle`
${normalize};

html {
    font-size: 62.5%;
    font-family: 'Roboto', sans-serif;
};

body {
    background-color: #D2E2FE;
}
`;
