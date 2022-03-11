import { ReactNode } from "react";
import { StyledTab } from "./styled/Tab.styled";

export const Tab = ({ children }: { children: ReactNode }) => {
    return <StyledTab>{children}</StyledTab>;
};
