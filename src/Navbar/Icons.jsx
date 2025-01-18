import { useState, useEffect } from "react";
import { Flex, Center, Image, Button, Text } from "@chakra-ui/react";
import login from '../image/login.png';
import heart from '../image/heart.png';
import cart from '../image/cart.png';
import { useNavigate } from "react-router-dom";

export const Icons = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);

    useEffect(() => {
        const username = localStorage.getItem('username');
        if (username) {
            setUser(username);
        }
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('username');
        localStorage.removeItem('email');
        localStorage.removeItem('password');
        setUser(null);
    };

    const handleLoginClick = () => {
        if (user) {
            handleLogout();
        } else {
            navigate('/login');
        }
    };

    return (
        <Flex mt='20px' pr='30px'>
            <Center>
                {user ? (
                    <>
                        <Text mr="10px">Hello, {user}</Text>
                        <Button bg="white" onClick={handleLogout} _hover={{ bg: "white" }}>Logout</Button>
                    </>
                ) : (
                    <Button bg="white" onClick={handleLoginClick} _hover={{ bg: "white" }}>
                        <Image src={login} alt="login" w='100%' h='25px' ml="20px" />
                    </Button>
                )}
            </Center>
            <Center>
                <Image src={heart} alt="heart" w='100%' h='25px' mr="10px" ml="10px" />
            </Center>
            <Center>
                <Button bg="white" onClick={() => navigate('/cart')} _hover={{ bg: "white" }}>
                    <Image src={cart} alt="cart" w='100%' h='25px' mr="10px" />
                </Button>
            </Center>
        </Flex>
    );
};