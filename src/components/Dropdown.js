import { StyledDropdown } from "./styled/Dropdown.styled";
import { useState } from "react";

export const Dropdown = ({
    label,
    placeholder,
    options,
    position,
    handleChange,
}) => {
    const [isVisible, setIsVisible] = useState(false);

    return (
        <StyledDropdown style={position}>
            <p>{label}</p>
            <div>
                <button
                    type="button"
                    onClick={() => {
                        setIsVisible(!isVisible);
                    }}
                >
                    {placeholder}
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
