import { StyledForm } from "./styled/Form.styled";
import { Tab } from "./Tab";
import { TabHeader } from "./TabHeader";
import { TabBody } from "./TabBody";
import { Input } from "./Input";
import { Button } from "./Button";
import { Textarea } from "./Textarea";
import { Dropdown } from "./Dropdown";
import { useState } from "react";
import { useInputState } from "../hooks/useInputState";

export const Form = () => {
    const [tab1, setTab1] = useState(true);
    const [tab2, setTab2] = useState(false);
    const [tab3, setTab3] = useState(false);

    const [name, setName] = useInputState("");
    const [surname, setSurname] = useInputState("");
    const [email, setEmail] = useInputState("");
    const [phone, setPhone] = useInputState("");
    const [gender, setGender] = useState("");
    const [comment, setComment] = useInputState("");

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
                        />
                        <Dropdown
                            label="Gender"
                            placeholder="Select Gender"
                            options={["Gender 1", "Gender 2", "Gender 3"]}
                            position={{ gridColumn: "2/3 ", gridRow: "1/2" }}
                            handleChange={setGender}
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
