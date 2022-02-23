import { StyledForm } from "./styled/Form.styled";
import { Tab } from "./Tab";
import { TabHeader } from "./TabHeader";
import { TabBody } from "./TabBody";
import { Input } from "./Input";
import { Button } from "./Button";
import { useState } from "react";
import { useInputState } from "../hooks/useInputState";

export const Form = () => {
    const [tab1, setTab1] = useState(true);
    const [tab2, setTab2] = useState(false);
    const [tab3, setTab3] = useState(false);

    const [name, setName] = useInputState("");
    const [surname, setSurname] = useInputState("");
    const [email, setEmail] = useInputState("");
    return (
        <StyledForm>
            <Tab>
                <TabHeader handleClick={() => setTab1(!tab1)}>
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
                        />
                        <Input
                            field="surname"
                            type="text"
                            label="Surname"
                            value={surname}
                            handleChange={setSurname}
                            position={{ gridColumn: "2/3 ", gridRow: "1/2" }}
                        />
                        <Input
                            field="email"
                            type="email"
                            label="Email Address"
                            value={email}
                            handleChange={setEmail}
                            position={{ gridColumn: "1/2 ", gridRow: "2/3" }}
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
                <TabHeader handleClick={() => setTab2(!tab2)}>
                    Step 1: Your details
                </TabHeader>
                {tab2 ? <TabBody></TabBody> : ""}
            </Tab>
            <Tab>
                <TabHeader handleClick={() => setTab3(!tab3)}>
                    Step 1: Your details
                </TabHeader>
                {tab3 ? <TabBody></TabBody> : ""}
            </Tab>
        </StyledForm>
    );
};
