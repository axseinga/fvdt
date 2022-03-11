import { ReactNode } from "react";
import { StyledTabHeader } from "./styled/TabHeader.styled";

export const TabHeader = ({
    handleClick,
    children,
}: {
    handleClick: () => void;
    children: ReactNode;
}) => {
    return <StyledTabHeader onClick={handleClick}>{children}</StyledTabHeader>;
};
