import { StyledInput } from "./styled/Input.styled";

export const Input = ({
    field,
    label,
    type,
    value,
    handleChange,
    position,
    width,
}) => {
    return (
        <StyledInput style={position} width={width}>
            <label htmlFor={field}>{label}</label>
            <input
                type={type}
                id={field}
                name={field}
                value={value}
                onChange={handleChange}
            />
        </StyledInput>
    );
};
