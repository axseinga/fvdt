import styled from "styled-components";

export const StyledButton = styled.button`
    cursor: pointer;
    color: #ffffff;
    font-size: 1.6rem;
    border-radius: 10px;
    border: none;
    height: 3rem;
    width: 60%;
    background-color: #7061ca;
    background: linear-gradient(
        180deg,
        rgba(66, 76, 179, 1) 0%,
        rgba(115, 98, 206, 1) 100%
    );
    justify-self: right;
    align-self: end;

    & div {
        display: flex;
        align-items: center;
        justify-content: center;
    }
`;
