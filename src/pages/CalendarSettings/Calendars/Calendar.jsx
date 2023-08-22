// Calendar.js
import React, { useState } from 'react';
import { Text, Flex, IconButton, Icon, Center, Input, useColorModeValue } from '@chakra-ui/react';
import { FiCheck, FiCheckCircle, FiCircle, FiEdit3, FiTrash2, FiX } from 'react-icons/fi';
import { BiGridVertical } from 'react-icons/bi';

function Calendar(props) {
  const { calendar, selectedCalendar, setSelectedCalendar, handleUpdateCalendar, handleDeleteCalendar } = props
  const [editing, setEditing] = useState(false)
  const [newTitle, setNewTitle] = useState(calendar?.title && calendar.title)

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
                //cursor={'grabbing'}
                //className='reorder-handle'
                //as={BiGridVertical}
                pt='1'
                mr='1'
                as={selectedCalendar?.id === calendar?.id ? FiCheckCircle: FiCircle}
                color={selectedCalendar?.id === calendar?.id ? selectedIconColor : 'gray.400'}
                fontSize={'xl'}
                key={calendar.id}
              />
            </Center>
              {editing ? 
              <Flex flexDir={'row'} align='center'>
                  <Input 
                    value={newTitle}
                    onChange={(e) => setNewTitle(e.target.value)}
                    autoFocus
                    w='160px'
                    h='30px'
                    >
                  </Input>
                  <IconButton
                    size="md"
                    variant='ghost'
                    icon={<FiCheck/>}
                    colorScheme='green'
                    disabled={calendar.title == newTitle}
                    onClick={() => {
                        handleUpdateCalendar(calendar.id, {
                            title: newTitle
                        })
                        setEditing(false)}}
                  ></IconButton>
                   <IconButton
                    size="md"
                    variant='ghost'
                    icon={<FiX/>}
                    colorScheme='red'
                    onClick={() => setEditing(false)}
                  ></IconButton>
                </Flex>
                :
                <Flex flexDir={'row'} align='center'>
                  <Text fontSize='sm'>{calendar.title}</Text>
                  <IconButton
                    size="md"
                    variant='ghost'
                    icon={<FiEdit3/>}
                    colorScheme='green'
                    onClick={() => setEditing(true)}
                  ></IconButton>
                </Flex>
              }    
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
