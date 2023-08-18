// activity.js
import React, { useState } from 'react';
import { Text, Flex, IconButton, Checkbox, Icon, Center, Input, useColorModeValue } from '@chakra-ui/react';
import { FiX } from 'react-icons/fi';
import { BiGridVertical } from 'react-icons/bi';

function ActivityCard({ activity, calendar, day, width, maxWidth, i, truncateText, handleDeleteActivity }) {
  const bgColor = useColorModeValue('blue.400','blue.600')
  const textColor = useColorModeValue('white', 'gray.200')

  return (
       <Flex 
            key={`flex-wrapper-${calendar?.id}-${day?.title}-${activity?.id}-${i}`}
            flexDir={'row'}
            width={width && width}
            maxWidth={maxWidth && maxWidth}
            justify={'space-between'}
            p={2}
            mb='1'
            color={textColor}
            cursor="pointer"
            boxShadow='md'
            borderRadius={'6px'}
            backgroundColor={bgColor}
            marign='auto'

            >
            <Flex>
              <Center>
                <Icon 
                  cursor={'grabbing'}
                  className='reorder-handle'
                  as={BiGridVertical}
                  fontSize={'3xl'}
                />
                <Text 
                  fontWeight={'bold'} 
                  fontSize={'sm'} 
                  whiteSpace={truncateText && 'nowrap'} 
                  textOverflow={truncateText && 'ellipsis'} 
                  overflow={truncateText && 'hidden'}>
                {activity?.title && activity.title}  
                </Text>
              </Center>
              </Flex>    
              <Center>
                {handleDeleteActivity && activity.id &&
                  <IconButton 
                    size='sm' 
                    variant='ghost'
                    colorScheme={'white'} 
                    key={`activity-delete-button-${calendar.id}-${day.name}-${activity.id}-${i}`} 
                    onClick={() => handleDeleteActivity(activity.id)} 
                    icon={<FiX />} 
                  />
                }
              </Center>
      </Flex>
    );
}

export default ActivityCard;
