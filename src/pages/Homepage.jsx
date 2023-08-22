import { Text } from "@chakra-ui/react";
import { useEffect } from "react";
import { useHistory } from "react-router-dom"

export default function Homepage( { } ){
    const history = useHistory()

    useEffect(() => {
        history.push('/calendar-settings')
    }, [])
    return(
        <Text></Text>
    )
}