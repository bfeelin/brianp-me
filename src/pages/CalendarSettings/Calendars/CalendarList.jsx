import Calendar from './Calendar';
import { ReactSortable } from "react-sortablejs";
import { Box } from '@chakra-ui/react';
import { useState } from 'react';

function CalendarList( { calendars, updateCalendar, deleteCalendar, selectedCalendar, setSelectedCalendar } ) {
  return (
    <>
    {calendars &&
        <Box maxHeight={'25vh'} overflowY={'auto'}>
            {calendars?.map((calendar) => (
                <Calendar 
                key={calendar.id}
                calendar={calendar} 
                selectedCalendar={selectedCalendar}
                setSelectedCalendar={setSelectedCalendar}
                handleUpdateCalendar = {updateCalendar}
                handleDeleteCalendar = {deleteCalendar}
                />
            ))}
        </Box>
    }
    </>
  );
}

export default CalendarList;

