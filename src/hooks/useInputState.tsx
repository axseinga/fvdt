import { useState } from "react";

export const useInputState = (initialValue: string) => {
    const [value, setValue] = useState(initialValue);
    const handleChange = (e) => {
        setValue(e.target.value);
    };

    const reset = () => {
        setValue(initialValue);
    };

    return [value, handleChange, reset];
};
