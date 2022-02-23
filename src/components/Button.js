import { StyledButton } from "./styled/Button.styled";

export const Button = ({ type, children, handleClick, position }) => {
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
