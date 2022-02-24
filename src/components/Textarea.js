import { StyledTextarea } from "./styled/Textarea.styled";

export const Textarea = ({ field, label, position, value, handleChange }) => {
    return (
        <StyledTextarea style={position}>
            <label htmlFor={field}>{label}</label>
            <textarea
                id={field}
                name={field}
                value={value}
                onChange={handleChange}
            />
        </StyledTextarea>
    );
};
