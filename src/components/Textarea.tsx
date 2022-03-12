import { ChangeEvent } from "react";
import { StyledTextarea } from "./styled/Textarea.styled";

type Position = {
    gridColumn: string;
    gridRow: string;
};

type TextareaProps = {
    field: string;
    label: string;
    position: Position;
    value: string;
    handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
    handleBlur: (field: string) => void;
    errorMessage: string;
    isTouched: boolean;
};

export const Textarea = ({
    field,
    label,
    position,
    value,
    handleChange,
    handleBlur,
    errorMessage,
    isTouched,
}: TextareaProps) => {
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
