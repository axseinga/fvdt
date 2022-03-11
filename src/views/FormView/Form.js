import { useState, useEffect } from "react";
import { useInputState } from "../../hooks/useInputState";
import { StyledForm } from "./styled/Form.styled";
import { Tab } from "../../components/Tab";
import { TabHeader } from "../../components/TabHeader";
import { TabBody } from "../../components/TabBody";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { Textarea } from "../../components/Textarea";
import { Dropdown } from "../../components/Dropdown";
import { InputDob } from "../../components/InputDob";
import { MdKeyboardArrowRight } from "react-icons/md";
import { genderFieldData } from "../../utils/genderFieldData";
import { newUserSchema } from "../../utils/validation/formValidation";
import { createUser } from "../../services/api/userService";

export const Form = () => {
    const [tab1, setTab1] = useState(true);
    const [tab2, setTab2] = useState(false);
    const [tab3, setTab3] = useState(false);

    const [name, setName, resetName] = useInputState("");
    const [surname, setSurname, resetSurname] = useInputState("");
    const [email, setEmail, resetEmail] = useInputState("");
    const [phone, setPhone, resetPhone] = useInputState("");
    const [gender, setGender] = useState("Select Gender");
    const [day, setDay, resetDay] = useInputState("");
    const [month, setMonth, resetMonth] = useInputState("");
    const [year, setYear, resetYear] = useInputState("");
    const [comment, setComment, resetComment] = useInputState("");
    const [dob, setDob] = useState("");

    const [formErrors, setFormErrors] = useState({});
    const [isTouched, setIsTouched] = useState({
        name: false,
        surname: false,
        email: false,
        gender: false,
        day: false,
        month: false,
        year: false,
        comment: false,
    });

    useEffect(() => {
        const date = `${year}-${month}-${day}`;
        setDob(date);
    }, [day, month, year]);

    const toggleTab = (first, second, third) => {
        setTab1(first);
        setTab2(second);
        setTab3(third);
    };

    const validateForm = async (formValues) => {
        const schema = newUserSchema();

        try {
            schema.validateSync(formValues, {
                abortEarly: false,
            });
        } catch (err) {
            let errors = [];
            err.inner.forEach((error) => {
                errors.push({ [error.path]: error.message });
            });
            const errorMessages = Object.assign({}, ...errors);
            return errorMessages;
        }
    };

    const handleBlur = (field) => {
        setIsTouched((values) => ({ ...values, [field]: true }));
    };

    useEffect(() => {
        const formValues = {
            name: name,
            surname: surname,
            email: email,
            phone: phone,
            gender: gender,
            dob: dob,
            comment: comment,
        };

        const getErrorMessages = async () => {
            const errorMessages = await validateForm(formValues);

            if (errorMessages) {
                setFormErrors(errorMessages);
            } else {
                setFormErrors({});
            }
        };

        getErrorMessages();
    }, [name, surname, email, phone, gender, dob, comment]);

    const clearFormValues = () => {
        resetName();
        resetSurname();
        resetEmail();
        resetPhone();
        resetDay();
        resetMonth();
        resetYear();
        setGender("Select Gender");
        setDob("");
        resetComment();
        setIsTouched({
            name: false,
            surname: false,
            email: false,
            gender: false,
            day: false,
            month: false,
            year: false,
            comment: false,
        });
    };

    const validateFirstStep = async () => {
        setIsTouched((values) => ({
            ...values,
            name: true,
            surname: true,
            email: true,
        }));

        if (Object.keys(formErrors).length === 4) {
            toggleTab(false, true, false);
        } else return;
    };

    const validateSecondStep = async () => {
        setIsTouched((values) => ({
            ...values,
            name: true,
            surname: true,
            email: true,
            phone: true,
            gender: true,
            day: true,
            month: true,
            year: true,
        }));

        if (Object.keys(formErrors).length === 1) {
            toggleTab(false, false, true);
        } else return;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Submitting the form");
        setIsTouched({
            name: true,
            surname: true,
            email: true,
            phone: true,
            gender: true,
            day: true,
            month: true,
            year: true,
            comment: true,
        });
        if (Object.keys(formErrors).length === 0) {
            const newUser = {
                name: name,
                surname: surname,
                email: email,
                phone: phone,
                gender: gender,
                dob: dob,
                comment: comment,
            };
            createUser(newUser);
            clearFormValues();
        }
        return;
    };

    return (
        <StyledForm onSubmit={handleSubmit}>
            <Tab>
                <TabHeader handleClick={() => toggleTab(true, false, false)}>
                    Step 1: Your details
                </TabHeader>
                {tab1 ? (
                    <TabBody>
                        <Input
                            field="name"
                            type="text"
                            label="First Name"
                            value={name}
                            handleChange={setName}
                            position={{ gridColumn: "1/2 ", gridRow: "1/2" }}
                            handleBlur={handleBlur}
                            errorMessage={formErrors["name"]}
                            isTouched={isTouched.name}
                        />
                        <Input
                            field="surname"
                            type="text"
                            label="Surname"
                            value={surname}
                            handleChange={setSurname}
                            position={{ gridColumn: "2/3 ", gridRow: "1/2" }}
                            handleBlur={handleBlur}
                            errorMessage={formErrors["surname"]}
                            isTouched={isTouched.surname}
                        />
                        <Input
                            field="email"
                            type="email"
                            label="Email Address"
                            value={email}
                            handleChange={setEmail}
                            position={{ gridColumn: "1/2 ", gridRow: "2/3" }}
                            handleBlur={handleBlur}
                            errorMessage={formErrors["email"]}
                            isTouched={isTouched.email}
                        />
                        <Button
                            type="button"
                            handleClick={() => {
                                validateFirstStep();
                            }}
                            position={{ gridColumn: "3/4 ", gridRow: "3/4" }}
                        >
                            Next{" "}
                            <MdKeyboardArrowRight
                                style={{ marginLeft: "5px" }}
                            />
                        </Button>
                    </TabBody>
                ) : (
                    ""
                )}
            </Tab>
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
                            <MdKeyboardArrowRight
                                style={{ marginLeft: "5px" }}
                            />
                        </Button>
                    </TabBody>
                ) : (
                    ""
                )}
            </Tab>
            <Tab>
                <TabHeader handleClick={() => toggleTab(false, false, true)}>
                    Step 3: Final comments
                </TabHeader>
                {tab3 ? (
                    <TabBody>
                        <Textarea
                            field="comment"
                            label="Comments"
                            value={comment}
                            handleChange={setComment}
                            position={{ gridColumn: "1/3 ", gridRow: "1/4" }}
                            handleBlur={handleBlur}
                            errorMessage={formErrors["comment"]}
                            isTouched={isTouched.comment}
                        />
                        <Button
                            type="submit"
                            position={{ gridColumn: "3/4 ", gridRow: "3/4" }}
                        >
                            Submit
                        </Button>
                    </TabBody>
                ) : (
                    ""
                )}
            </Tab>
        </StyledForm>
    );
};
