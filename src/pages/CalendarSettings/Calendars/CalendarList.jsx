import Calendar from './Calendar';
import { ReactSortable } from "react-sortablejs";
import { Box } from '@chakra-ui/react';
import { useState } from 'react';

function CalendarList( { calendars, setCalendars, updateCalendar, deleteCalendar, selectedCalendar, setSelectedCalendar, handleReorderCalendars } ) {
  return (
    <>
    {calendars &&
    <>
        {/* <ReactSortable
          list={calendars}
          setList={setCalendars}
          group="calendars"
          

        >       */}
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
      {/* </ReactSortable> 
       <Button size='sm' mt='1' onClick={handleReorderCalendars} colorScheme='green'>Save Order</Button>*/}
    </>
    }
    </>
  );
}

export default CalendarList;

