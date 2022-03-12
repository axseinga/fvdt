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
    const [tab1, setTab1] = useState<boolean>(true);
    const [tab2, setTab2] = useState<boolean>(false);
    const [tab3, setTab3] = useState<boolean>(false);

    const [name, setName, resetName] = useInputState("");
    const [surname, setSurname, resetSurname] = useInputState("");
    const [email, setEmail, resetEmail] = useInputState("");
    const [phone, setPhone, resetPhone] = useInputState("");
    const [gender, setGender] = useState<string>("Select Gender");
    const [day, setDay, resetDay] = useInputState("");
    const [month, setMonth, resetMonth] = useInputState("");
    const [year, setYear, resetYear] = useInputState("");
    const [comment, setComment, resetComment] = useInputState("");
    const [dob, setDob] = useState<string>("");

    type FormErrorsState = {
        name?: string;
        surname?: string;
        email?: string;
        phone?: string;
        gender?: string;
        dob?: string;
        comment?: string;
    };

    const [formErrors, setFormErrors] = useState<FormErrorsState>({});

    type isTouchedState = {
        name: boolean;
        surname: boolean;
        email: boolean;
        phone: boolean;
        gender: boolean;
        day: boolean;
        month: boolean;
        year: boolean;
        comment: boolean;
    };

    const [isTouched, setIsTouched] = useState<isTouchedState>({
        name: false,
        surname: false,
        email: false,
        phone: false,
        gender: false,
        day: false,
        month: false,
        year: false,
        comment: false,
    });

    useEffect(() => {
        const date: string = `${year}-${month}-${day}`;
        setDob(date);
    }, [day, month, year]);

    const toggleTab = (first: boolean, second: boolean, third: boolean) => {
        setTab1(first);
        setTab2(second);
        setTab3(third);
    };

    type FormValuesTypes = {
        name: string;
        surname: string;
        email: string;
        phone: string;
        gender: string;
        dob: string;
        comment: string;
    };

    type ErrorType = {
        [key: string]: string;
    };

    type ErrorMessagesType = {
        name?: string;
        surname?: string;
        email?: string;
        phone?: string;
        gender?: string;
        dob?: string;
        comment?: string;
    } | void;

    const validateForm = async (
        formValues: FormValuesTypes
    ): Promise<ErrorMessagesType> => {
        const schema = newUserSchema();

        try {
            schema.validateSync(formValues, {
                abortEarly: false,
            });
        } catch (err: any) {
            let errors: ErrorType[] = [];
            err.inner.forEach((error: ErrorType) => {
                errors.push({ [error.path]: error.message });
            });
            const errorMessages: ErrorMessagesType = Object.assign(
                {},
                ...errors
            );
            return errorMessages;
        }
    };

    const handleBlur = (field: string): void => {
        setIsTouched((values) => ({ ...values, [field]: true }));
    };

    useEffect(() => {
        const formValues: FormValuesTypes = {
            name: name,
            surname: surname,
            email: email,
            phone: phone,
            gender: gender,
            dob: dob,
            comment: comment,
        };

        const getErrorMessages = async (): Promise<void> => {
            const errorMessages = await validateForm(formValues);

            if (errorMessages) {
                setFormErrors(errorMessages);
            } else {
                setFormErrors({});
            }
        };

        getErrorMessages();
    }, [name, surname, email, phone, gender, dob, comment]);

    const clearFormValues = (): void => {
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
            phone: false,
            gender: false,
            day: false,
            month: false,
            year: false,
            comment: false,
        });
    };

    const validateFirstStep = (): void => {
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

    const validateSecondStep = (): void => {
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

    type NewUserType = {
        name: string;
        surname: string;
        email: string;
        phone: string;
        gender: string;
        dob: string;
        comment: string;
    };

    const handleSubmit = (e: Event): void => {
        e.preventDefault();
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
            const newUser: NewUserType = {
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
