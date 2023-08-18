import { useEffect, useState } from "react";
import { Grid, GridItem, Heading, ScaleFade, Text } from "@chakra-ui/react";
import DayConfig from "./DayConfig";

export default function CalendarConfig( { calendar, allActivities } ){
    const [days, setDays] = useState([])

    useEffect(() => {
        function makeActivites(activityList){
            let activities = []
            activityList.forEach((activity) => {
                let activityIndex = allActivities.findIndex(a => a.id === activity.id)
                if(activityIndex > -1){
                    activities.push(allActivities[activityIndex])
                }
            })
            return activities
        }
        function makeDays(){    
            let dayz = []
            calendar.Monday ? dayz.push({title: 'Monday', activities: makeActivites(calendar.Monday)}) : dayz.push({title: 'Monday'})
            calendar.Tuesday ? dayz.push({title: 'Tuesday', activities: makeActivites(calendar.Tuesday)}) : dayz.push({title: 'Tuesday'})
            calendar.Wednesday ? dayz.push({title: 'Wednesday', activities: makeActivites(calendar.Wednesday)}) : dayz.push({title: 'Wednesday'})
            calendar.Thursday ? dayz.push({title: 'Thursday', activities: makeActivites(calendar.Thursday)}) : dayz.push({title: 'Thursday'})
            calendar.Friday ? dayz.push({title: 'Friday', activities: makeActivites(calendar.Friday)}) : dayz.push({title: 'Friday'})
            calendar.Saturday ? dayz.push({title: 'Saturday', activities: makeActivites(calendar.Saturday)}) : dayz.push({title: 'Saturday'})
            calendar.Sunday ? dayz.push({title: 'Sunday', activities: makeActivites(calendar.Sunday)}) : dayz.push({title: 'Sunday'})
            return dayz
        }   
        setDays(makeDays())

    }, [calendar])

    return(
        <>
            <ScaleFade initialScale={0.9} in>
            <Grid 
                gridTemplateColumns={'repeat(7, 1fr)'}
                border={'1px solid grey'}
                borderRadius={'lg'}
                minH='40vh'
            >
                {days?.map((day) => (
                    <>
                    <GridItem 
                        key={`grid-item-${day.title}-${calendar.id}`}
                        border={'1px solid lightgrey'}
                        w='12vw' 
                        p='2'>
                        <Heading textAlign={'center'} mb='2' size='sm'>{day.title && day.title}</Heading>
                        <DayConfig 
                            day={day}
                            calendar={calendar}
                            allActivities={allActivities}
                        />
                    </GridItem>
                    </>
                ))}
                
            </Grid>
            </ScaleFade>
     </>
    )
}