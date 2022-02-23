import styled from "styled-components";

export const StyledInput = styled.div`
    display: flex;
    flex-direction: column;

    & label {
        font-size: 2rem;
        margin-bottom: 5px;
    }
    & input {
        font-size: 1.5rem;
        min-width: 150px;
        height: 40px;
        border-radius: 10px;
        border: none;
        box-shadow: inset 0px 0px 7px 4px rgba(158, 158, 158, 0.68);
        font-weight: bold;
        justify-self: center;
    }
`;
