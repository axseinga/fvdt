import styled from "styled-components";

export const StyledDropdown = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;

    & p {
        font-size: 2rem;
        margin-bottom: 5px;
        margin-left: 5px;
    }

    & button {
        display: flex;
        align-items: center;
        justify-content: space-between;
        background-color: #fff;
        color: black;
        
        font-size: 1.5rem;
        min-width: 150px;
        color: #ADADAD;
        height: 42px;
        border-radius: 10px;
        border: none;
        box-shadow: inset 0px 0px 9px 7px rgba(66,66,66,0.63);
        font-weight: bold;
        justify-self: center;

        cursor: pointer;
        &:hover {
            background-color: lightgray;
        }
    }
    & > div div {
        position: absolute;
        background-color: #FFFFFF;
        border-radius: 5px;
        border: 1px solid lightgray;
        min-width: 160px;
        box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
        z-index: 1;

        & a {
            color: black;
      padding: 12px 16px;
      text-decoration: none;
      display: block;
      font-size: 1.5rem;
      cursor: pointer;
      &:hover {
        background-color: gray;
      }
    }
        }
    }
`;
