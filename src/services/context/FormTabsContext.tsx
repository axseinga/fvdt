import { createContext } from "react";
import { FormErrorsState, IsTouchedState } from "../../components/types/types";

type FormTabsContextState = {
    toggleTab: (first: boolean, second: boolean, third: boolean) => void | null;
    handleBlur: (field: string) => void | null;
    formErrors: FormErrorsState;
    isTouched: IsTouchedState;
};

export const FormTabsContext = createContext({} as FormTabsContextState);
