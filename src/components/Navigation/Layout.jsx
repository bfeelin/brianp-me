import React, { useEffect } from 'react'
import { Box, Container, Text } from '@chakra-ui/react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'

export function Layout({ children }) {

  return (
    <>

        <Navbar />
        <Box mb={16} display='flex' flexDir={'row'}>
          {/* <DrawerBar isOpen={isOpen} onOpen={onOpen} onClose={onClose} /> */}
          <Sidebar navSize='large'/>
          <Container ml={{base: 0, md: 5}} mt='5' maxW='full'>{children}</Container>
        </Box>

    </>
  )
}
