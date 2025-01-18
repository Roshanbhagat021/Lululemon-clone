import { Box, Heading, Flex, Image, Button, Center } from "@chakra-ui/react";
import { useState } from "react";

export const Slider = ({ images }) => {
  const [sliderIndex, setSliderIndex] = useState(0);
  const totalImages = images.length;

  const handleClick = (index) => {
    setSliderIndex(index);
  };

  const handlePrev = () => {
    setSliderIndex((prevIndex) => (prevIndex - 1 + totalImages) % totalImages);
  };

  const handleNext = () => {
    setSliderIndex((prevIndex) => (prevIndex + 1) % totalImages);
  };

  return (
    <>
      <Box position="relative">
        <Box p="30px">
          <Flex position="relative" overflow="hidden">
            <Box width="100%" >
              <Flex flexWrap="wrap" gap="30px">
                {[...images, ...images].map((ele, index) => (
                  <Box
                    key={index}
                    w="23%"
                    display={
                      index >= sliderIndex && index < sliderIndex + 4
                        ? "block"
                        : "none"
                    }
                  >
                    <Image src={ele.image} alt={ele.title}  w="100%" />
                    <Box mt="10px">
                      <Flex>
                        <Heading
                          size="sm"
                          w="88%"
                          lineHeight="23px"
                          fontWeight="600"
                        >
                          {ele.title}
                        </Heading>
                        <Heading size="sm" fontWeight="600">
                          {`$${ele.price}`}
                        </Heading>
                      </Flex>
                    </Box>
                  </Box>
                ))}
              </Flex>
            </Box>
            <Box
              position="absolute"
              bottom="1px"
              left="50%"
              transform="translateX(-50%)"
              display="flex"
            >
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
            <Box
              position="absolute"
              top="50%"
              transform="translateY(-50%)"
              right="20px"
            ></Box>
          </Flex>
        </Box>
        <Button
          position="absolute"
          left="40px"
          top="50%"
          transform="translateY(-120%)"
          onClick={handlePrev}
        >
          <svg height="16" width="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" focusable="false" role="img" data-lll-pl="icon" aria-hidden="true"><path d="M11 15 4.54 8.53a.74.74 0 0 1 0-1.06L11 1l.35.35a1 1 0 0 1 0 1.41L6.13 8l5.26 5.24a1 1 0 0 1 0 1.41L11 15Z" fill="currentColor" fill-rule="evenodd"></path></svg>
        </Button>
        <Button
          position="absolute"
          right="70px"
          top="50%"
          transform="translateY(-120%)"
          onClick={handleNext}
        >
          <svg height="16" width="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" focusable="false" role="img" data-lll-pl="icon" aria-hidden="true"><path d="m5 15 6.5-6.47a.74.74 0 0 0 0-1.06L5 1l-.35.35a1 1 0 0 0 0 1.41L9.87 8l-5.26 5.24a1 1 0 0 0 0 1.41L5 15Z" fill="currentColor" fill-rule="evenodd"></path></svg>
        </Button>
      </Box>
      <Box>
        <Center>
          <Button
            p="25px 15px"
            border="1px solid black"
            bg="white"
            _hover={{ bg: "black", color: "white" }}
          >
            SHOP WHAT'S NEW
          </Button>
        </Center>
      </Box>
    </>
  );
};
