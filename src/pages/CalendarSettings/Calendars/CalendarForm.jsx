import React, { useState } from 'react';
import { Button, Input, Flex, Center, Text } from '@chakra-ui/react';


function CalendarForm({ initVals, onSubmit, isSubmitting }) {
    const [title, setTitle] = useState(initVals && initVals.title)

  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit({title: title})
    setTitle('')
  }

  return (
        <Center mb='2'>
            <Flex w='20vw' align='center' justify={'center'}>
                <Input
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />
                <Button
                    type='submit'
                    isLoading={isSubmitting}
                    onClick={(e) => handleSubmit(e)}
                    disabled={isSubmitting || !title}
                    colorScheme='blue'
                    ml={2}
                    mr={2}
                >
                    {initVals ? 'Save' : 'Add'}
                </Button>
            </Flex>
        </Center>
  );
}

export default CalendarForm;
