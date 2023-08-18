import { useEffect, useState } from "react";
import { useCalendars } from "./useCalendars";
import { ReactSortable } from "react-sortablejs";
import ActivityCard from "./ActivityCard";

export default function DayConfig( { day, calendar, allActivities } ){
    const { updateCalendar } = useCalendars(calendar.id)
    const [theseActivities, setTheseActivities] = useState(day.activities ? day.activities : [])

    useEffect( () => {
        const handleUpdateCalendar = async () => {
            await updateCalendar(calendar.id, {
                [`${day.title}`]: theseActivities
            })
        }

        handleUpdateCalendar()

    }, [theseActivities])

    const handleDeleteActivity = (thisID) => {
        let activityIndex = theseActivities.findIndex(activity => activity.id === thisID)
        if(activityIndex > -1){
            let newActivities = [...theseActivities]
            newActivities.splice(activityIndex, 1)
            setTheseActivities(newActivities)
        }
    }

    return(
        <>

            <ReactSortable   
                key={`react-sortable-${calendar.id}-${day.title}`}     
                clone={item => ({ id: item.id, title: item.title, description: item.description, color: item.color })}
                list={theseActivities} 
                setList={setTheseActivities}
                group={{ name: "activities", pull: "clone" }}
                animation="200"
                easing="ease-out"
                >
                {theseActivities?.map((activity, i) => (
                    <>
                        <ActivityCard 
                            handleDeleteActivity={handleDeleteActivity} 
                            key={`activity-card-${calendar.id}-${day.title}-${activity.id}-${i}`} 
                            activity={activity} 
                            i={i} 
                            maxWidth='100%' 
                            allActivities={allActivities}
                            calendar={calendar}
                            day={day}
                            />
                   </>
                ))}
            </ReactSortable>

     </>
    )
}