import { Text } from "@chakra-ui/react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import ManageActivities from "./Activities/ManageActivities";

export default function CalendarSettingsPage( { } ){

    return(
        <>
            <Tabs variant='enclosed' mt='6'>
                <TabList>
                    <Tab>Activities</Tab>
                </TabList>
                <TabPanels>
                    <TabPanel>
                        <ManageActivities />
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </>
    )
}