import styled from "styled-components";

export const StyledInputDob = styled.div`
    display: flex;
    flex-direction: column;
    grid-area: 2 / 1 / 3 / 2;
    align-self: start;

    & span {
        font-size: 2rem;
        margin-bottom: 5px;
        margin-left: 5px;
        font-weight: 700;
    }

    & p {
        color: red;
        margin-left: 5px;
    }

    & div {
        display: flex;

        & div {
            margin-right: 10px;
        }
    }
`;
