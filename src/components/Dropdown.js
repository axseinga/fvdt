import { StyledDropdown } from "./styled/Dropdown.styled";
import { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";

export const Dropdown = ({
    label,
    placeholder,
    options,
    position,
    handleChange,
    errorMessage,
    isTouched,
}) => {
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
