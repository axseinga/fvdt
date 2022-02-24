import { StyledInput } from "./styled/Input.styled";

export const Input = ({
    field,
    label,
    type,
    value,
    handleChange,
    position,
    width,
    handleBlur,
    isTouched,
    errorMessage,
}) => {
    return (
        <StyledInput style={position} width={width}>
            <label htmlFor={field}>{label}</label>
            {errorMessage && isTouched === true && <p>{errorMessage}</p>}
            <input
                type={type}
                id={field}
                name={field}
                value={value}
                onChange={handleChange}
                onBlur={() => handleBlur(field)}
            />
        </StyledInput>
    );
};
