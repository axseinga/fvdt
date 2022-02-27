import styled from "styled-components";

export const StyledInput = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;

    & label {
        font-size: 1.7rem;
        margin-bottom: 5px;
        margin-left: 5px;
        font-weight: 700;
    }

    & p {
        color: red;
        margin-left: 5px;
    }

    & input {
        font-size: 1.5rem;
        width: ${(props) => (props.width === "short" ? "50px" : "220px")};
        height: 40px;
        border-radius: 10px;
        border: none;
        box-shadow: inset 0px 0px 7px 4px rgba(158, 158, 158, 0.68);
        font-weight: bold;
        justify-self: center;
    }
`;
