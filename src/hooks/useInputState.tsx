import { useState, ChangeEvent } from "react";

export const useInputState = (
    initialValue: string
): [string, (e: ChangeEvent<HTMLInputElement>) => void, () => void] => {
    const [value, setValue] = useState(initialValue);
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    };

    const reset = () => {
        setValue(initialValue);
    };

    return [value, handleChange, reset];
};
