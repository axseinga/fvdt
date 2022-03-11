import { Tab } from "../../components/Tab";
import { TabHeader } from "../../components/TabHeader";
import { TabBody } from "../../components/TabBody";
import { Textarea } from "../../components/Textarea";
import { Button } from "../../components/Button";

export const TabStep3 = () => {
    return (
        <Tab>
            <TabHeader handleClick={() => toggleTab(false, false, true)}>
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
            ) : (
                ""
            )}
        </Tab>
    );
};
