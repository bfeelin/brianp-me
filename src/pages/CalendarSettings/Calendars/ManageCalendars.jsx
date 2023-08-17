// ManageCalendars.js
import React, { useEffect, useState } from 'react';
import { Flex, Text, Switch, Icon, Divider, Heading, GridItem, WrapItem } from '@chakra-ui/react';
import { onSnapshot, collection } from 'firebase/firestore';
import { db } from '../../../utils/init-firebase';
import ActivityCard from './ActivityCard';
import { ReactSortable } from "react-sortablejs";
import styled from "styled-components";
import { useCalendars } from './useCalendars';
import CalendarForm from './CalendarForm';

function ManageCalendars() {
  const { calendars, createCalendar, isLoading } = useCalendars();


  const [selectedCalendar, setSelectedCalendar] = useState()
  const [allActivities, setAllActivities] = useState([])

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, 'activities'), (snapshot) => {
      const updatedActivities = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setAllActivities(updatedActivities.filter(activity => activity.deleted == false));
    });

    return () => unsubscribe();
  }, []);

  const handleCreateCalendar = async (values) => {
    await createCalendar(values);
  };

  return (
    <>
    <Flex flexDir='row' mb='2'>
      <Flex mr='5' flexDir='column' width='20vw' align="start">
      <Heading size='sm' textTransform={'uppercase'}>Add A Calendar</Heading>
        <CalendarForm onSubmit={handleCreateCalendar} isSubmitting={isLoading} />

        <Text>Calendar List Goes Here</Text>
      </Flex>
      <Flex flexDir={'column'}>
        <Heading size='sm' textTransform={'uppercase'}>Activity Bank</Heading>
        <StyledReactSortable
              list={allActivities}
              setList={setAllActivities}
              animation={200}
              sort={false}
              
              clone={item => ({ ...item })}
              group={{ name: "activities", pull: "clone", put: false }}
          >
              {allActivities?.map((activity, i) => {
                    return(
                      <WrapItem mr='1' width='225px' key={`wrap-item-activity-bank-${activity.id}-${i}`}>
                        <ActivityCard width='225px' key={`activity-bank-${activity.id}-${i}`} activity={activity} allActivities={allActivities} truncateText/>
                      </WrapItem>
                    )
                })}

          </StyledReactSortable>
        </Flex>
    </Flex>
    <Divider mt='2' mb='2' />
    <Flex flexDir='row'>
      <Flex mr='2' flexDir='column' width='55vw' align="start">
        {selectedCalendar &&
        <>
         
          <Flex  mb='2'>       
            <Heading size='sm' textTransform={'uppercase'}>{selectedCalendar?.name}</Heading>
          </Flex>
          <Text>Calendar Config Goes Here</Text>

        </>}
        </Flex>
    </Flex>
    </>
  );
}

export default ManageCalendars;

const StyledReactSortable = styled(ReactSortable)`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;