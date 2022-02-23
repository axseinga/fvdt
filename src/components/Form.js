import { StyledForm } from "./styled/Form.styled";
import { Tab } from "./Tab";
import { TabHeader } from "./TabHeader";
import { TabBody } from "./TabBody";
import { Input } from "./Input";
import { useState } from "react";

export const Form = () => {
    const [tab1, setTab1] = useState(true);
    const [tab2, setTab2] = useState(false);
    const [tab3, setTab3] = useState(false);
    return (
        <StyledForm>
            <Tab>
                <TabHeader handleClick={() => setTab1(!tab1)}>
                    Step 1: Your details
                </TabHeader>
                {tab1 ? <TabBody>lalalalala</TabBody> : ""}
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
