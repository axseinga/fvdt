import { StyledTabHeader } from "./styled/TabHeader.styled";

export const TabHeader = ({ handleClick, children }) => {
    return <StyledTabHeader onClick={handleClick}>{children}</StyledTabHeader>;
};
