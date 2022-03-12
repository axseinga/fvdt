import { useContext } from "react";
import { ChangeEvent } from "react";
import { Tab } from "../../components/Tab";
import { TabHeader } from "../../components/TabHeader";
import { TabBody } from "../../components/TabBody";
import { Textarea } from "../../components/Textarea";
import { Button } from "../../components/Button";
import { FormTabsContext } from "../../services/context/FormTabsContext";

type TabStep3Props = {
    tab3: boolean;
    comment: string;
    setComment: (e: ChangeEvent<HTMLInputElement>) => void;
};

export const TabStep3 = ({ tab3, comment, setComment }: TabStep3Props) => {
    const { toggleTab, handleBlur, formErrors, isTouched } =
        useContext(FormTabsContext);
    return (
        <Tab>
            <TabHeader handleClick={() => toggleTab(false, false, true)}>
                Step 3: Final comments
            </TabHeader>
            {tab3 && (
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
                        type="submit"
                        position={{ gridColumn: "3/4 ", gridRow: "3/4" }}
                    >
                        Submit
                    </Button>
                </TabBody>
            )}
        </Tab>
    );
};
