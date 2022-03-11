import { StyledTextarea } from "./styled/Textarea.styled";

export const Textarea = ({
    field,
    label,
    position,
    value,
    handleChange,
    handleBlur,
    errorMessage,
    isTouched,
}) => {
    return (
        <StyledTextarea style={position}>
            <div>
                <label htmlFor={field}>{label}</label>
                {errorMessage && isTouched === true && <p>{errorMessage}</p>}
            </div>
            <textarea
                id={field}
                name={field}
                value={value}
                onBlur={() => handleBlur(field)}
                onChange={handleChange}
            />
        </StyledTextarea>
    );
};
