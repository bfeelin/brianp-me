// TopicList.js
import React, { useState } from 'react';
import Activity from './Activity'
import { Box, Text } from '@chakra-ui/react';

function ActivityList( { activities } ) {
  return (
    <>
        <Box mt='3' mb='3'>
            <Text m='3' as='em'>Manage Activities</Text>
            {activities?.map((activity) => (
                <Activity 
                    key={activity.id}
                    activity={activity} 
                    
                />

            ))}
        </Box>
    </>
  );
}

export default ActivityList;

