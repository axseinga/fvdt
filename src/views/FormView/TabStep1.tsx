import { useContext } from "react";
import { Tab } from "../../components/Tab";
import { TabHeader } from "../../components/TabHeader";
import { TabBody } from "../../components/TabBody";
import { Input } from "../../components/Input";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Button } from "../../components/Button";
import { FormTabsContext } from "../../services/context/FormTabsContext";

type TabStep1Props = {
    validateFirstStep: () => void;
    tab1: boolean;
    name: string;
    setName: () => void;
    surname: string;
    setSurname: () => void;
    email: string;
    setEmail: () => void;
};

/*type ErrorType = {
    [key: string]: string;
}[];

type FormTabsContextState = {
    toggleTab: () => void;
    handleBlur: () => void;
    formErrors: ErrorType[];
    isTouched: boolean;
} | null;*/

export const TabStep1 = ({
    validateFirstStep,
    tab1,
    name,
    setName,
    surname,
    setSurname,
    email,
    setEmail,
}: TabStep1Props) => {
    const { toggleTab, handleBlur, formErrors, isTouched } = useContext(
        /*<FormTabsContextState>*/ FormTabsContext
    );
    return (
        <Tab>
            <TabHeader handleClick={() => toggleTab(true, false, false)}>
                Step 1: Your details
            </TabHeader>
            {tab1 && (
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
                        handleClick={validateFirstStep}
                        position={{ gridColumn: "3/4 ", gridRow: "3/4" }}
                    >
                        Next{" "}
                        <MdKeyboardArrowRight style={{ marginLeft: "5px" }} />
                    </Button>
                </TabBody>
            )}
        </Tab>
    );
};
