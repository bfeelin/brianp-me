import React from 'react'
import {
    Flex,
    Divider,
    useColorModeValue,
} from '@chakra-ui/react'
import {
    FiHome, FiSettings,
} from 'react-icons/fi'
import NavItem from './NavItem'

export default function Sidebar() {
    return (
        <Flex
            h="91vh"
            display={{base: 'none', md: 'flex'}}
            boxShadow="0 12px 12px 0 rgba(0, 0, 0, 0.05)"
            w={"200px"}
            backgroundColor={useColorModeValue('white', 'midnight')}
            flexDir="column"
            justifyContent="flex-start"
            >
           <>
            <Flex
                flexDir="column"
                width={'100%'}
                alignItems={"flex-start"}
                as="nav"
            >
                {/* <NavItem icon={FiHome} name="Home" to="/"/>
                <Divider/> */}
                <NavItem icon={FiSettings} name="Calendar Settings" to="/calendar-settings"/>
                <Divider/>
            </Flex>
            </>
            
        </Flex>
    
    )
}
