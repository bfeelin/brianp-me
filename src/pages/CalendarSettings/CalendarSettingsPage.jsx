import { Text } from "@chakra-ui/react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import ManageActivities from "./Activities/ManageActivities";

export default function CalendarSettings( { } ){

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