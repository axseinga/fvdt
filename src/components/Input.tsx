import { StyledInput } from "./styled/Input.styled";
import { ChangeEvent } from "react";

type Position = {
    gridColumn: string;
    gridRow: string;
};

type InputProps = {
    field: string;
    label: string;
    type: string;
    value: string;
    handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
    position?: Position;
    width?: string;
    handleBlur: (field: string) => void;
    isTouched?: boolean;
    errorMessage?: string;
    min?: string;
    max?: string;
};

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
}: InputProps) => {
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
