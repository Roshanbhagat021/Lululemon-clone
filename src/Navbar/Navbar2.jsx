import { Routes,Route, Link } from "react-router-dom"
import { Box,Center,Image,Flex, Icon, Text}from '@chakra-ui/react';
import logo from '../image/logo1.svg';
import { WomenDropDown } from './WomenDropDown';
import { MenDropDown } from './MenDropDown';
import { AccessoriesDD } from './AccessoriesDD';
import { ShoesDD } from './ShoesDD';
import { MotherdayDD } from './MotherdayDD';
import { Searchbar } from './Searchbar';
import { Icons } from './Icons';

export const Navbar2 = () => {
    return(
        <>
        <Box  h='70px' >
            <Flex alignItems="center">
                <Link to="/">
                <Center>  
                    <Image src={logo} alt="logo" w='70%' h='40px'  />
                </Center>
                </Link>
                <Box width='50%'>
                    <Flex gap="20px">
                    <Text fontWeight="bold" color="black"><WomenDropDown /></Text>
                            <Text fontWeight="bold" color="black"><MenDropDown /></Text>
                            <Text fontWeight="bold" color="black"><AccessoriesDD /></Text>
                            <Text fontWeight="bold" color="black"><ShoesDD /></Text>
                            <Text fontWeight="bold" color="black"><MotherdayDD /></Text>
                    </Flex>
                </Box>
                <Box>
                     <Searchbar />
                </Box>
                <Box >
                    <Icons />
                </Box>
            </Flex>
        </Box>
        
        </>
    )
}