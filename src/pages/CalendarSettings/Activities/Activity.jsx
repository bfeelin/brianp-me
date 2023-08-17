// activity.js
import React, { useState } from 'react';
import { Button, Flex, IconButton, Input } from '@chakra-ui/react';
import { FiTrash2, FiX } from 'react-icons/fi';
import useActivities from './useActivities';
import { FaTrashRestore } from 'react-icons/fa';

function Activity(props) {
  const { activity, isAddition } = props
  const { createActivity, updateActivity, markActivityDeleted, restoreActivity } = useActivities()
  const [newTitle, setNewTitle] = useState(activity?.title && activity.title)
  const [newDescription, setNewDescription] = useState(activity?.description && activity.description)

  const handleAddOrSave = () => {
    if(isAddition){
        createActivity({
            title: newTitle, 
            description: newDescription
        })
        setNewTitle('')
        setNewDescription('')
    }
    else{
        updateActivity(activity.id, {
                title: newTitle, 
                description: newDescription
            })
    }
  }

  return (
    <>
      <Flex key={activity.id}
            flexDir={'row'}
            w={isAddition ? '80vw': '79vw'}
            justify={'flex-start'}
            align='center'
            mb='1'
            >
                {!isAddition &&
                <>
                  {activity.deleted ?
                        <IconButton
                           size="sm"
                           variant='ghost'
                           icon={<FaTrashRestore/>}
                           colorScheme='green'
   
                           onClick={(e) => {
                           e.stopPropagation();
                           restoreActivity(activity.id);
                           }}
                       ></IconButton>
                        :
                        <IconButton
                        size="sm"
                        variant='ghost'
                        icon={<FiTrash2/>}
                        colorScheme='red'

                        onClick={(e) => {
                        e.stopPropagation();
                        markActivityDeleted(activity.id);
                        }}
                    ></IconButton>

                  }
                    </>
                    }
                  <Input 
                    value={newTitle}
                    onChange={(e) => setNewTitle(e.target.value)}
                    mr='1'
                    w='28%'
                    disabled={activity.deleted}
                    placeholder='Title'
                    >
                  </Input>
                  <Input 
                      value={newDescription}
                      onChange={(e) => setNewDescription(e.target.value)}
                      mr='1'
                      w='62%'
                      placeholder='Description'
                      disabled={activity.deleted}
                      >
                  </Input>
                  <Button
                    size="md"
                    ml='1'
                    colorScheme={isAddition ? 'blue' : 'green'}
                    disabled={(activity?.title == newTitle && activity?.description == newDescription) ||
                                newDescription == '' || newTitle == '' || activity.deleted
                    }
                    onClick={() => handleAddOrSave()}
                  >{isAddition ? 'Add' : 'Save'}</Button>
      </Flex>
      </>
  );
}

export default Activity;
