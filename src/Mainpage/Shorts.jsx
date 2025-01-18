import { Box,Heading,Flex, Center,Image,Button} from "@chakra-ui/react"
import redDress from "../image/theRedDress.png"
import menredDress from "../image/menwithredDress.png"

export const Shorts = () => {
    return(
        <>
        <Box mt="20px" mb="20px">
            <Flex alignItems="center">
                <Box w='50%' ml="100px" >
                    <Heading textAlign="center" fontWeight="bold" color="black">Special-edition gear for Lunar New Year.</Heading>
                </Box>
                <Box  w='50%' pr='30px'>
                    <Heading fontWeight="bold" color="black" size="sm" textAlign="end" >In a capsule inspired by Year of the Snake, your new beginning starts now.</Heading>
                </Box>
            </Flex>
        </Box>
        <Box p="30px" mt="20px">
            <Flex gap="30px">
                <Box  w="50%" >
                    <Box >
                        <Image src={redDress} alt="wshorts" w="100%"/>
                    </Box>
                    <Heading size="lg" mt="20px">Paint the year Red.</Heading>
                    <Heading size="sm" mt="10px" fontWeight="500">Vivid shades of the feature-packed Define Jacket bring spring energy to every moment.</Heading>
                    <Button mt="20px" border="1px solid black" bg="white" letterSpacing="0.8px" p="25px 20px" fontWeight="700" _hover={{ bg: "black", color: "white" }}>SHOW WOMEN'S</Button>
                </Box>
                <Box  w="50%">
                    <Box >
                        <Image src={menredDress} alt="mshorts"   w="100%"/>
                    </Box>
                    <Heading size="lg" mt="20px">Wish choice.</Heading>
                    <Heading size="sm" mt="10px" fontWeight="500">These luxuriously soft and relaxed-fit staples are just good intuition. </Heading>
                    <Button mt="20px" border="1px solid black" bg="white" letterSpacing="0.8px" p="25px 20px" fontWeight="700" _hover={{ bg: "black", color: "white" }}>SHOW MEN'S</Button>
                </Box>
            </Flex>
        </Box>
        </>
    )
}