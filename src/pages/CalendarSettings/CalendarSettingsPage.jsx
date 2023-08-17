import { Text } from "@chakra-ui/react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import ManageActivities from "./Activities/ManageActivities";
import ManageCalendars from "./Calendars/ManageCalendars";

export default function CalendarSettingsPage( { } ){

    return(
        <>
            <Tabs variant='enclosed' mt='6'>
                <TabList>
                    <Tab>Calendars</Tab>
                    <Tab>Activities</Tab>
                </TabList>
                <TabPanels>
                    <TabPanel>
                        <ManageCalendars />
                    </TabPanel>
                    <TabPanel>
                        <ManageActivities />
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </>
    )
}