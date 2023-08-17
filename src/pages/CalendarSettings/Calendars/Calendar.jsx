// Calendar.js
import React, { useState } from 'react';
import { Text, Flex, IconButton, Icon, Center, Input, useColorModeValue } from '@chakra-ui/react';
import { FiCheck, FiEdit3, FiTrash2, FiX } from 'react-icons/fi';
import { BiGridVertical } from 'react-icons/bi';

function Calendar(props) {
  const { calendar, selectedCalendar, setSelectedCalendar, handleDeleteCalendar } = props

  const selectedIconColor = useColorModeValue('black', 'white')
  return (
      <Flex key={calendar.id}
            flexDir={'row'}
            width='20vw'
            borderWidth={'1px'}
            fontWeight={selectedCalendar?.id === calendar?.id ? 'bold' : 'normal'}
            justify={'space-between'}
            boxShadow={'sm'}
            p={2}
            cursor="pointer"
            onClick={() => setSelectedCalendar(calendar)}
            >
              <Flex>
            <Center>
              <Icon 
                cursor={'grabbing'}
                className='reorder-handle'
                as={BiGridVertical}
                color={selectedCalendar?.id === calendar?.id ? selectedIconColor : 'gray.400'}
                fontSize={'3xl'}
                key={calendar.id}
              />
            </Center>
            <Text fontSize='sm'>{calendar.title}</Text>
              
              </Flex>     
              <IconButton
                size="sm"
                variant='ghost'
                icon={<FiTrash2/>}
                colorScheme='red'
                onClick={(e) => {
                  e.stopPropagation();
                  handleDeleteCalendar(calendar);
                }}
              >
          </IconButton>
      </Flex>
      
    );
}

export default Calendar;
