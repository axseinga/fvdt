import { StyledInputDob } from "./styled/InputDob.styled";
import { Input } from "./Input";
import { currentDate } from "../utils/currentDate";

export const InputDob = ({ day, setDay, month, setMonth, year, setYear }) => {
    const currentYear = currentDate.slice(0, 4);
    return (
        <StyledInputDob>
            <p>Date of birth</p>
            <div>
                <Input
                    field="day"
                    type="number"
                    label=""
                    value={day}
                    handleChange={setDay}
                    min="1"
                    max="31"
                    width="short"
                />
                <Input
                    field="month"
                    type="number"
                    label=""
                    value={month}
                    handleChange={setMonth}
                    min="1"
                    max="12"
                    width="short"
                />
                <Input
                    field="year"
                    type="number"
                    label=""
                    value={year}
                    handleChange={setYear}
                    min="1920"
                    max={currentYear}
                    width="short"
                />
            </div>
        </StyledInputDob>
    );
};
