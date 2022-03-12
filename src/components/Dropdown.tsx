import { StyledDropdown } from "./styled/Dropdown.styled";
import { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { PositionTypes } from "./types/types";

type DropdownProps = {
    label: string;
    placeholder: string;
    options: string[];
    position: PositionTypes;
    handleChange: (o: string) => void;
    handleBlur: (field: string) => void;
    errorMessage?: string;
    isTouched: boolean;
};

export const Dropdown = ({
    label,
    placeholder,
    options,
    position,
    handleChange,
    errorMessage,
    isTouched,
}: DropdownProps) => {
    const [isVisible, setIsVisible] = useState(false);

    return (
        <StyledDropdown style={position}>
            <p>{label}</p>
            {errorMessage && isTouched === true && <span>{errorMessage}</span>}
            <div>
                <button
                    type="button"
                    onClick={() => {
                        setIsVisible(!isVisible);
                    }}
                >
                    {placeholder} <MdKeyboardArrowDown />
                </button>
                {isVisible === false ? (
                    ""
                ) : (
                    <div>
                        {options.map((o) => (
                            <a
                                key={o}
                                onClick={() => {
                                    setIsVisible(false);
                                    handleChange(o);
                                }}
                            >
                                {o}
                            </a>
                        ))}
                    </div>
                )}
            </div>
        </StyledDropdown>
    );
};
