import styled from "styled-components";

export const StyledInputDob = styled.div`
    display: flex;
    flex-direction: column;
    grid-area: 2 / 1 / 3 / 2;
    align-self: start;

    & p {
        font-size: 2rem;
        margin-bottom: 5px;
        margin-left: 5px;
    }

    & div {
        display: flex;

        & div {
            margin-right: 10px;
        }
    }
`;
