import { StyledInput } from "./styled/Input.styled";

export const Input = ({ field, label, type, value }) => {
    return (
        <StyledInput>
            <label htmlFor={field}>{label}</label>
            <input type={type} id={field} name={field} value={value} />
        </StyledInput>
    );
};
