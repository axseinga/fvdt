import * as yup from "yup";
import { currentDate } from "../currentDate";

export const newUserSchema = (arr) => {
    const schema = yup.object().shape({
        name: yup
            .string("Name is required")
            .min(2, "Name has to have at least 3 letters")
            .required("Name is required"),
        surname: yup
            .string("Surname is required")
            .min(2, "Surname has to have at least 3 letters")
            .required("Surname is required"),
        email: yup
            .string("Email is required")
            .email("Email has to be valid email")
            .required("Email is required"),
        phone: yup
            .string("Phone is required")
            .matches(
                /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/,
                "Phone numbers has to be valid"
            )
            .required("Phone is required"),
        gender: yup
            .string()
            .oneOf(arr, "Please choose a gender")
            .required("Please choose a gender"),
        dob: yup
            .date("Please choose a valid date")
            .typeError("Please enter a valid date")
            .required("Please choose a date")
            .nullable()
            .max(currentDate, "Date cannot be in the future"),
        comment: yup
            .string("Comment is required")
            .min(10, "Comment has to have at least 10 letters")
            .required("Comment is required"),
    });
    return schema;
};
