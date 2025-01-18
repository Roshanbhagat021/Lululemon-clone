import { Box, Heading, Flex, Button, Center } from "@chakra-ui/react";
import lastbg from "../image/lastbg.png";

export const ColorPoster = () => {
  return (
    <>
      <Flex
        bg="black"
        h="400px"
        w="100%"
        verticalAlign="center"
        justifyContent="center"
        backgroundImage={`url(${lastbg})`}
        backgroundSize="cover"
        backgroundPosition="center"
      >
        <Center>
          <Box
            bg="white"
            h="240px"
            w="100%"
            textAlign="center"
            verticalAlign="center"
            p="40px"
          >
            <Heading size="lg">
              Score a new favourite fit for your goals.
            </Heading>
            <Button
              _hover={{ bg: "black", color: "white" }}
              mt="20px"
              border="1px solid black"
              letterSpacing="0.8px"
              p="30px 20px"
              fontWeight="700"
              mr="10px"
              color="black"
              background={"white"}
            >
              SHOP WE MADE TOO MUCH
            </Button>
          </Box>
        </Center>
      </Flex>
    </>
  );
};
