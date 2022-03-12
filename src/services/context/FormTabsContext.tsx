import { createContext, ReactNode } from "react";

type FormErrorsState = {
    name?: string;
    surname?: string;
    email?: string;
    phone?: string;
    gender?: string;
    dob?: string;
    comment?: string;
};

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

type FormTabsContextState =
    | {
          toggleTab?: (first: boolean, second: boolean, third: boolean) => void;
          handleBlur?: (field: string) => void;
          formErrors: FormErrorsState;
          isTouched: isTouchedState;
      }
    | [];

export const FormTabsContext = createContext<FormTabsContextState>([]);
