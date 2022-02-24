import { StyledForm } from "./styled/Form.styled";
import { Tab } from "./Tab";
import { TabHeader } from "./TabHeader";
import { TabBody } from "./TabBody";
import { Input } from "./Input";
import { Button } from "./Button";
import { Textarea } from "./Textarea";
import { Dropdown } from "./Dropdown";
import { InputDob } from "./InputDob";
import { useState, useEffect } from "react";
import { useInputState } from "../hooks/useInputState";
import { newUserSchema } from "../utils/validation/formValidation";

export const Form = () => {
    const [tab1, setTab1] = useState(true);
    const [tab2, setTab2] = useState(false);
    const [tab3, setTab3] = useState(false);

    const [name, setName] = useInputState("");
    const [surname, setSurname] = useInputState("");
    const [email, setEmail] = useInputState("");
    const [phone, setPhone] = useInputState("");
    const [gender, setGender] = useState("Select Gender");
    const [day, setDay] = useInputState("");
    const [month, setMonth] = useInputState("");
    const [year, setYear] = useInputState("");
    const [comment, setComment] = useInputState("");
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

    const genderList = ["Gender 1", "Gender 2", "Gender 3"];

    useEffect(() => {
        const date = `${year}-${month}-${day}`;
        setDob(date);
    }, [day, month, year]);

    const validateForm = async () => {
        const formValues = {
            name: name,
            surname: surname,
            email: email,
            phone: phone,
            gender: gender,
            dob: dob,
            comment: comment,
        };

        const schema = newUserSchema(genderList);

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

    useEffect(async () => {
        const errorMessages = await validateForm();

        if (errorMessages) {
            setFormErrors(errorMessages);
        } else {
            setFormErrors({});
        }
    }, [name, surname, email, phone, gender, dob, comment]);

    return (
        <StyledForm>
            <Tab>
                <TabHeader
                    handleClick={() => {
                        setTab1(!tab1);
                        setTab2(false);
                        setTab3(false);
                    }}
                >
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
                            handleClick={() => console.log("click")}
                            position={{ gridColumn: "3/4 ", gridRow: "3/4" }}
                        >
                            Next
                        </Button>
                    </TabBody>
                ) : (
                    ""
                )}
            </Tab>
            <Tab>
                <TabHeader
                    handleClick={() => {
                        setTab1(false);
                        setTab2(!tab2);
                        setTab3(false);
                    }}
                >
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
                            options={genderList}
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
                            handleClick={() => console.log("click")}
                            position={{ gridColumn: "3/4 ", gridRow: "3/4" }}
                        >
                            Next
                        </Button>
                    </TabBody>
                ) : (
                    ""
                )}
            </Tab>
            <Tab>
                <TabHeader
                    handleClick={() => {
                        setTab1(false);
                        setTab2(false);
                        setTab3(!tab3);
                    }}
                >
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
                            type="button"
                            handleClick={() => console.log("click")}
                            position={{ gridColumn: "3/4 ", gridRow: "3/4" }}
                        >
                            Next
                        </Button>
                    </TabBody>
                ) : (
                    ""
                )}
            </Tab>
        </StyledForm>
    );
};
