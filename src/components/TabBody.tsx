import { ReactNode } from "react";
import { StyledTabBody } from "./styled/TabBody.styled";

export const TabBody = ({ children }: { children: ReactNode }) => {
    return <StyledTabBody>{children}</StyledTabBody>;
};
