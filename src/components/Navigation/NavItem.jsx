import React from 'react'
import {
    Flex,
    Text,
    Icon,
    Menu,
    MenuButton,
    useColorModeValue,
    Center,
} from '@chakra-ui/react'
import { Link, useLocation } from 'react-router-dom'


export default function NavItem({ icon, name, to, isExternal }) {
    const bgColor = useColorModeValue('#e8e8e8', '#171923')
    const location = useLocation()

    const isActive = location.pathname === to
    return (
        <Link to={isExternal ?  {pathname: to} : to}
                border={isActive ? '3px solid' : ''}
                style={{width: '100%'}}
                target={isExternal && "_blank"}
            >
            <Flex
                flexDir="column"
                w="100%"
                pl={3}
                alignItems={"flex-start"}
                borderRight={isActive ? '5px solid lightblue' : ''}
                backgroundColor={isActive ? bgColor : ''}
            >
                <Menu placement="right">    
                    <MenuButton w="100%">
                            <Flex p='3'>
                                {icon ? <Center><Icon as={icon} /></Center> : null}
                                <Text ml={2} display={"flex"}>{name}</Text>
                            </Flex>                            
                    </MenuButton>
            
                </Menu>
            </Flex>
        </Link>

    )
}