import { StyledDropdown } from "./styled/Dropdown.styled";
import { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";

type Position = {
    gridColumn: string;
    gridRow: string;
};

type DropdownProps = {
    label: string;
    placeholder: string;
    options: string[];
    position: Position;
    handleChange: (o: string) => void;
    handleBlur: () => void;
    errorMessage: string;
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
