import { ChangeEvent } from "react";
import { StyledTextarea } from "./styled/Textarea.styled";
import { PositionTypes } from "./types/types";

type ChangeEventUnion =
    | ChangeEvent<HTMLInputElement>
    | ChangeEvent<HTMLTextAreaElement>;

type TextareaProps = {
    field: string;
    label: string;
    position: PositionTypes;
    value: string;
    handleChange: (e: ChangeEventUnion) => void;
    handleBlur: (field: string) => void;
    errorMessage?: string;
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
