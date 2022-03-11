import { useState, useEffect } from "react";
import { useInputState } from "../../hooks/useInputState";
import { FormTabsContext } from "../../services/context/FormTabsContext";
import { newUserSchema } from "../../utils/validation/formValidation";
import { createUser } from "../../services/api/userService";
import { StyledForm } from "./styled/Form.styled";
import { TabStep1 } from "./TabStep1";
import { TabStep2 } from "./TabStep2";
import { TabStep3 } from "./TabStep3";

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
            <FormTabsContext.Provider
                value={{
                    toggleTab,
                    handleBlur,
                    formErrors,
                    isTouched,
                }}
            >
                <TabStep1
                    validateFirstStep={validateFirstStep}
                    tab1={tab1}
                    name={name}
                    setName={setName}
                    surname={surname}
                    setSurname={setSurname}
                    email={email}
                    setEmail={setEmail}
                />
                <TabStep2
                    validateSecondStep={validateSecondStep}
                    tab2={tab2}
                    phone={phone}
                    setPhone={setPhone}
                    gender={gender}
                    setGender={setGender}
                    day={day}
                    setDay={setDay}
                    month={month}
                    setMonth={setMonth}
                    year={year}
                    setYear={setYear}
                />
                <TabStep3
                    tab3={tab3}
                    comment={comment}
                    setComment={setComment}
                />
            </FormTabsContext.Provider>
        </StyledForm>
    );
};
