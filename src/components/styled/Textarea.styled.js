import styled from "styled-components";

export const StyledTextarea = styled.div`
    display: flex;
    flex-direction: column;

    & div {
        display: flex;
        align-items: center;
    }

    & p {
        color: red;
        margin-left: 10px;
    }

    & label {
        font-size: 2rem;
        margin-bottom: 5px;
        margin-left: 5px;
    }
    & textarea {
        font-size: 2rem;
        min-width: 200px;
        width: 450px;
        height: 150px;
        border-radius: 10px;
        border: none;
        box-shadow: inset 0px 0px 7px 4px rgba(158, 158, 158, 0.68);
        font-weight: bold;
        justify-self: center;
    }
`;
