import useActivities from "./useActivities";
import ActivityList from "./ActivityList";
import Activity from "./Activity";

export default function ManageActivities(){
    const { activities } = useActivities()

    return(
        <>
            <Activity isAddition activity={{title: '', description: ''}} />
            {activities && 
                <ActivityList activities={activities} />
            }
        </>
    )
}