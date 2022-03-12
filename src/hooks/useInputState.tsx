import { useState, ChangeEvent } from "react";

type ChangeEventUnion =
    | ChangeEvent<HTMLInputElement>
    | ChangeEvent<HTMLTextAreaElement>;

export const useInputState = (
    initialValue: string
): [string, (e: ChangeEventUnion) => void, () => void] => {
    const [value, setValue] = useState(initialValue);
    const handleChange = (e: ChangeEventUnion) => {
        setValue(e.target.value);
    };

    const reset = () => {
        setValue(initialValue);
    };

    return [value, handleChange, reset];
};
