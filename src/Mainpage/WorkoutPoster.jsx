import { Box,Heading,Flex, Center,Image,Button} from "@chakra-ui/react";
import menWorkout from "../Mainpage/ShortSlider/menWorkout.png";
import womenWorkout from "../Mainpage/ShortSlider/womenWorkout.png";
import mom from "../Mainpage/ShortSlider/mom.webp";

export const WorkoutPoster = () => {
    return(
        <>
        <Box p="30px" mt="20px" fontWeight="bold" color="black">
            <Flex gap="30px">
                <Box  w="50%"  >
                    <Box>
                        <Image src={womenWorkout} alt="skirt1"  w="100%"/>
                    </Box>
                    <Heading size="lg" mt="20px">A limitless new year? It’s on.</Heading>
                    <Heading size="sm" mt="10px" fontWeight="500" lineHeight="25px">With unstoppable Wunder Train, there’ll be no end to your 2025 goals.</Heading>
                    <Button mt="20px" border="1px solid black" bg="white" letterSpacing="0.8px" p="25px 20px" fontWeight="700" _hover={{ bg: "black", color: "white" }}>SHOP WOMEN'S WORKOUT</Button>
                </Box>
                <Box  w="50%">
                    <Box >
                        <Image src={menWorkout} alt="skirt2"  w="100%"/>
                    </Box>
                    <Heading size="lg" mt="20px">Imagine your greatest potential.</Heading>
                    <Heading size="sm" mt="10px" fontWeight="500" lineHeight="25px">Now, imagine Pace Breaker, stretching it.</Heading>
                    <Button mt="20px" border="1px solid black" bg="white" letterSpacing="0.8px" p="25px 20px" fontWeight="700" _hover={{ bg: "black", color: "white" }}>SHOP MEN'S WORKOUT</Button>
                </Box>
            </Flex>
        </Box>
        {/* <Box  p="30px">
            <Image src={mom} alt="mom" />
            <Heading size="lg" mt="20px">Mom knows best.</Heading>
            <Heading size="sm" mt="10px" fontWeight="500" lineHeight="25px">Buy mom-recommended gifts online, pick them up in-store in two hours. And exhale.</Heading>
            <Button mt="20px" border="1px solid black" bg="black" letterSpacing="0.8px" p="25px 20px" fontWeight="700" mr="10px" color="white">SHOP MOTHER'S DAY GIFTS</Button>
            <Button mt="20px" border="1px solid black" bg="white" letterSpacing="0.8px" p="25px 20px" fontWeight="700" _hover={{ bg: "black", color: "white" }}>SEND AN ECARD GIFTS</Button>   
        </Box> */}
        </>
    )
}