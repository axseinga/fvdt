import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

export const GlobalStyle = createGlobalStyle`
${normalize};
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap');

html {
    font-size: 62.5%;
    font-family: 'Roboto', sans-serif;
};

body {
    background-color: #D2E2FE;
}
`;
