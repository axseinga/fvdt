import { useContext } from "react";
import { Tab } from "../../components/Tab";
import { TabHeader } from "../../components/TabHeader";
import { TabBody } from "../../components/TabBody";
import { Input } from "../../components/Input";
import { Dropdown } from "../../components/Dropdown";
import { InputDob } from "../../components/InputDob";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Button } from "../../components/Button";
import { genderFieldData } from "../../utils/genderFieldData";
import { FormTabsContext } from "../../services/context/FormTabsContext";

export const TabStep2 = ({
    validateSecondStep,
    tab2,
    phone,
    setPhone,
    gender,
    setGender,
    day,
    setDay,
    month,
    setMonth,
    year,
    setYear,
}) => {
    const { toggleTab, handleBlur, formErrors, isTouched } =
        useContext(FormTabsContext);
    return (
        <Tab>
            <TabHeader handleClick={() => toggleTab(false, true, false)}>
                Step 2: More comments
            </TabHeader>
            {tab2 ? (
                <TabBody>
                    <Input
                        field="phone"
                        type="number"
                        label="Telephone number"
                        value={phone}
                        handleChange={setPhone}
                        position={{ gridColumn: "1/2 ", gridRow: "1/2" }}
                        handleBlur={handleBlur}
                        errorMessage={formErrors["phone"]}
                        isTouched={isTouched.phone}
                    />
                    <Dropdown
                        label="Gender"
                        placeholder={gender}
                        options={genderFieldData}
                        position={{ gridColumn: "2/3 ", gridRow: "1/2" }}
                        handleChange={setGender}
                        field="gender"
                        handleBlur={handleBlur}
                        errorMessage={formErrors["gender"]}
                        isTouched={isTouched.gender}
                    />
                    <InputDob
                        day={day}
                        setDay={setDay}
                        month={month}
                        setMonth={setMonth}
                        year={year}
                        setYear={setYear}
                        handleBlur={handleBlur}
                        errorMessage={formErrors["dob"]}
                        isDayTouched={isTouched.day}
                        isMonthTouched={isTouched.month}
                        isYearTouched={isTouched.year}
                    />
                    <Button
                        type="button"
                        handleClick={() => validateSecondStep()}
                        position={{ gridColumn: "3/4 ", gridRow: "3/4" }}
                    >
                        Next{" "}
                        <MdKeyboardArrowRight style={{ marginLeft: "5px" }} />
                    </Button>
                </TabBody>
            ) : (
                ""
            )}
        </Tab>
    );
};
