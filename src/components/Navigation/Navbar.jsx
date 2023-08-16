import {
  Box,
  Flex,
  IconButton,
} from '@chakra-ui/react';
import { FiBell, FiLogIn, FiLogOut, FiMenu } from 'react-icons/fi';


export default function Navbar( { onOpen }) {

  return (
    <>

      <Box 
        pt={1}
        px={3}
        boxShadow="0 6px 6px 0 rgba(0, 0, 0, 0.05)"
        position='relative'
        h={'48px'}
        >
      <Flex alignItems={'center'} justifyContent={'space-between'}>
       {/* <IconButton
            background="none"
            _hover={{ background: 'none' }}
            size='lg'
            display={{base: 'none', md: 'flex'}}
            variant='ghost'
            icon={<FiMenu />}
        />  */}
        <Flex alignItems={'center'} >
    
        </Flex>
      </Flex>
    </Box>

  </>
  )
}
