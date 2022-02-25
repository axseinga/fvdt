import styled from "styled-components";

export const StyledDropdown = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-self: flex-end;
    align-self: end;

    & p {
        font-size: 2rem;
        margin-bottom: 5px;
        margin-left: 5px;
        font-weight: 700;
    }

    & span {
        color: red;
        margin-left: 5px;
    }

    & button {
        display: flex;
        align-items: center;
        justify-content: space-around;
        background: linear-gradient(180deg, rgba(255,255,255,1) 29%, rgba(177,177,177,1) 100%);
        color: black;
        
        font-size: 1.5rem;
        min-width: 150px;
        color: #848484;
        height: 42px;
        border-radius: 10px;
        border: none;
        box-shadow: inset 0px 0px 7px 4px rgba(158, 158, 158, 0.68);
        font-weight: bold;

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
