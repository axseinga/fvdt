import styled from "styled-components";

export const StyledTabBody = styled.div`
    background-color: #dedede;
    padding: 1.5rem 1rem;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 2fr) 1fr;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    gap: 1rem;
`;
