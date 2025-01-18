import { Box, Image, Link, Heading, Button, Flex } from "@chakra-ui/react";
import poster from "../image/poster.webp";

const StyledLink = ({ children, ...props }) => (
  <Link
    pt='20px'
    position="relative"
    _hover={{
      _after: {
        width: "90%",
        transition: "width 0.3s ease-in-out",
      },
    }}
    _after={{
      content: '""',
      position: "absolute",
      width: "0",
      height: "2px",
      bottom: "0",
      left: "0",
      backgroundColor: "red",
      transition: "width 0.3s ease-in-out",
    }}
    {...props}
  >
    {children}
  </Link>
);

export const Poster = () => {
  return (
    <Box position="relative">
      <Box
        position="absolute"
        top="20%"
        left="9%"
        transform="translateX(-50%)"
        zIndex="1"
        bg="white"
        p="40px"
      >
        <Heading> lululemon</Heading>
        <Flex flexDirection="column">
          <StyledLink>Mother's Day Gifts</StyledLink>
          <StyledLink pt='10px'>Women's What's New</StyledLink>
          <StyledLink pt='10px'>All Women's  </StyledLink>
          <StyledLink pt='10px'>All Men's</StyledLink>
          <StyledLink pt='10px'>All Accessories</StyledLink>
        </Flex>
      </Box>
      <Image src={poster} alt="login" w="92%" h="650" ml="auto" pr="30px" />
      <Button
        position="absolute"
        bottom="20px"
        right="60px"
        zIndex="2"
        p="25px 15px"
        border="1px solid black"
        _hover={{ bg: "black", color: "white" }}
      >
        SHOP WHAT'S NEW
      </Button>
    </Box>
  );
};
