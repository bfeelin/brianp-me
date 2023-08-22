import React from 'react'
import {
    Flex,
    Divider,
    useColorModeValue,
    Link,
    Button,
} from '@chakra-ui/react'
import {
    FiHome, FiSettings,
} from 'react-icons/fi'
import NavItem from './NavItem'
import { FaGithub } from 'react-icons/fa'

function handleNavigateExternal(url){
    window.open(url, '_blank').focus()
}

export default function Sidebar() {
    return (
        <Flex
            h="91vh"
            display={{base: 'none', md: 'flex'}}
            boxShadow="0 12px 12px 0 rgba(0, 0, 0, 0.05)"
            w={"200px"}
            backgroundColor={useColorModeValue('white', 'midnight')}
            flexDir="column"
            justifyContent="space-between"
            >
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
            <Button 
                onClick={() => handleNavigateExternal('https://github.com/bfeelin/brianp-me')} 
                size='lg'
                color='black'
                colorScheme='blackAlpha'
                variant={'ghost'}
                leftIcon={<FaGithub />}>
                    GitHub
            </Button>
        </Flex>
    
    )
}
