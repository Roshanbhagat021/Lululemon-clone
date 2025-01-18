import { Box, Heading, Flex, Image,Button,Center } from "@chakra-ui/react";
import { useState } from "react";
import shoesPoster from "../Mainpage/ShortSlider/shoes.png";


export const WomenSlider = ({ images }) => {
    const [sliderIndex, setSliderIndex] = useState(0);
    const totalImages = images.length;

    const handleClick = (index) => {
        setSliderIndex(index);
    };

    return (
        <>
            <Box>
            <Box p="30px">
                <Flex position="relative" overflow="hidden">
                    <Box width="100%" >
                        <Flex flexWrap="wrap" gap="30px">
                            {[...images, ...images].map((ele, index) => (
                                <Box key={index} w="23%"  display={index >= sliderIndex && index < sliderIndex + 4 ? "block" : "none"}>
                                    <Image src={ele.image} alt={ele.title}  w="100%" />
                                    <Box mt="10px">
                                        <Flex>
                                            <Heading size="sm" w="88%" lineHeight="23px" fontWeight="600">{ele.title}</Heading>
                                            <Heading size="sm" fontWeight="600">{ele.price}</Heading>
                                        </Flex>
                                    </Box>
                                </Box>
                            ))}
                        </Flex>
                    </Box>
                    <Box position="absolute" bottom="5px" left="50%" transform="translateX(-50%)" display="flex">
                        {images.map((_, index) => (
                            <Box
                                key={index}
                                w="8px"
                                h="8px"
                                bg={index === sliderIndex % totalImages ? "grey" : "#e7e8e9"}
                                borderRadius="50%"
                                mx="5px"
                                onClick={() => handleClick(index)}
                                cursor="pointer"
                            />
                        ))}
                    </Box>
                    <Box position="absolute" top="50%" transform="translateY(-50%)" right="20px"></Box>
                </Flex>
            </Box>
        </Box>
        <Box>
            <Center>
                <Button  p="25px 15px"
                        border="1px solid black"
                        bg="white"
                        _hover={{ bg: "black", color: "white" }}>
                        SHOP WHAT'S NEW
                </Button>
            </Center>
        </Box>
        <Box  p="30px">
            <Image src={shoesPoster} alt="mom" />
            <Heading size="lg" mt="20px">New shoe for the “new you.”</Heading>
            <Heading size="sm" mt="10px" fontWeight="500" lineHeight="25px">Ever-evolving. Ever-improving. Add more power to runs and workouts with the updated Chargefeel 3.</Heading>
            <Button  _hover={{ bg: "black", color: "white" }} mt="20px" border="1px solid black" letterSpacing="0.8px" p="25px 20px" fontWeight="700" mr="10px" color="black">SHOP SHOES</Button>
        </Box>
        </>
    );
};