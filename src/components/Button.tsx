import { ReactNode } from "react";
import { StyledButton } from "./styled/Button.styled";

type Position = {
    gridColumn: string;
    gridRow: string;
};

type ButtonProps = {
    type: string;
    children: ReactNode;
    handleClick: () => void;
    position?: Position;
};

export const Button = ({
    type,
    children,
    handleClick,
    position,
}: ButtonProps) => {
    return (
        <StyledButton
            type={type}
            onClick={handleClick}
            style={position ? position : ""}
        >
            {children ? <div>{children}</div> : null}
        </StyledButton>
    );
};
