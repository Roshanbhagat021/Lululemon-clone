import { Box,Flex,UnorderedList,ListItem,Heading,Image} from "@chakra-ui/react";
import privacy from './image/privacy.svg';
import twitter from "./image/twitter.png";
import pinterest from "./image/pinterest.png";
import youtube from "./image/youtube.png";
import facebook from "./image/facebook.png";
import instagram from "./image/instagram.png";

export const Footer = () => {
    return(
        <>
        <Box mt="50px">
            <Flex>
                <Box w="25%" p="10px"> 
                <UnorderedList listStyleType="none" >
                    <Heading size="xs" mt="25px" letterSpacing=".8px" fontWeight="700">MY ACCOUNT</Heading>
                    <ListItem cursor="pointer" mt="25px" color="#53565a" fontSize="15px" fontWeight="400">Membership Program</ListItem>
                    <ListItem cursor="pointer" mt="12px" color="#53565a" fontSize="15px" fontWeight="400">Sign In</ListItem>
                    <ListItem cursor="pointer" mt="12px" color="#53565a" fontSize="15px" fontWeight="400">Register</ListItem>
                    <ListItem cursor="pointer" mt="12px" color="#53565a" fontSize="15px" fontWeight="400">Order Status</ListItem>
                    <ListItem cursor="pointer" mt="12px" color="#53565a" fontSize="15px" fontWeight="400">Returns</ListItem>
                </UnorderedList>
                </Box>
                <Box w="25%" p="10px">
                <UnorderedList listStyleType="none">
                    <Heading size="xs" mt="25px" letterSpacing=".8px" fontWeight="700">HELP</Heading>
                    <ListItem cursor="pointer" mt="25px" color="#53565a" fontSize="15px" fontWeight="400">FAQ</ListItem>
                    <ListItem cursor="pointer" mt="12px" color="#53565a" fontSize="15px" fontWeight="400">Acessibility Statement</ListItem>
                    <ListItem cursor="pointer" mt="12px" color="#53565a" fontSize="15px" fontWeight="400">Services</ListItem>
                    <ListItem cursor="pointer" mt="12px" color="#53565a" fontSize="15px" fontWeight="400">Ordering</ListItem>
                    <ListItem cursor="pointer" mt="12px" color="#53565a" fontSize="15px" fontWeight="400">Shipping Policy</ListItem>
                    <ListItem cursor="pointer" mt="12px" color="#53565a" fontSize="15px" fontWeight="400">Returns</ListItem>
                    <ListItem cursor="pointer" mt="12px" color="#53565a" fontSize="15px" fontWeight="400">Redeem Gift cards</ListItem>
                    <ListItem cursor="pointer" mt="12px" color="#53565a" fontSize="15px" fontWeight="400">Sizing</ListItem>
                    <ListItem cursor="pointer" mt="12px" color="#53565a" fontSize="15px" fontWeight="400">Our Products </ListItem>
                </UnorderedList>
                </Box>
                <Box w="25%" p="10px">
                <UnorderedList listStyleType="none">
                    <Heading size="xs" mt="25px" letterSpacing=".8px" fontWeight="700">ABOUT US</Heading>
                    <ListItem cursor="pointer" mt="25px" color="#53565a" fontSize="15px" fontWeight="400">Our Business</ListItem>
                    <ListItem cursor="pointer" mt="12px" color="#53565a" fontSize="15px" fontWeight="400">Media</ListItem>
                    <ListItem cursor="pointer" mt="12px" color="#53565a" fontSize="15px" fontWeight="400">Investors</ListItem>
                    <ListItem cursor="pointer" mt="12px" color="#53565a" fontSize="15px" fontWeight="400">Strategic Sales</ListItem>
                    <ListItem cursor="pointer" mt="12px" color="#53565a" fontSize="15px" fontWeight="400">Affiliates and Creators</ListItem>
                    <ListItem cursor="pointer" mt="12px" color="#53565a" fontSize="15px" fontWeight="400">Sweat Collective</ListItem>
                    <ListItem cursor="pointer" mt="12px" color="#53565a" fontSize="15px" fontWeight="400">FURTHER</ListItem>
                </UnorderedList>
                </Box>
                <Box w="25%" p="10px">
                <UnorderedList listStyleType="none">
                    <Heading size="xs" mt="25px" letterSpacing=".8px" fontWeight="700">CONTACT US</Heading>
                    <ListItem cursor="pointer" mt="25px" color="#53565a" fontSize="15px" fontWeight="400">Live Chat</ListItem>
                    <ListItem cursor="pointer" mt="12px" color="#53565a" fontSize="15px" fontWeight="400">Email Sign Up</ListItem>
                    <ListItem cursor="pointer" mt="12px" color="#53565a" fontSize="15px" fontWeight="400">Contact Us</ListItem>
                </UnorderedList>
                </Box>
            </Flex>
        </Box>
        <Box>
            <Flex>
            <Box w="25%" p="10px">
                <UnorderedList listStyleType="none">
                    <ListItem cursor="pointer" mt="15px" color="#53565a" letterSpacing=".8px" fontWeight="600" fontSize="13px">CAREER</ListItem>
                    <ListItem cursor="pointer" mt="15px" color="#53565a" letterSpacing=".8px" fontWeight="600" fontSize="13px">COMMUNITY</ListItem>
                    <ListItem cursor="pointer" mt="15px" color="#53565a" letterSpacing=".8px" fontWeight="600" fontSize="13px">LIKE NEW</ListItem>
                    <ListItem cursor="pointer" mt="15px" color="#53565a" letterSpacing=".8px" fontWeight="600" fontSize="13px">SUSTAINABILITY</ListItem>
                    <ListItem cursor="pointer" mt="15px" color="#53565a" letterSpacing=".8px" fontWeight="600" fontSize="13px">SOCIAL IMPACT</ListItem>
                    <ListItem cursor="pointer" mt="15px" color="#53565a" letterSpacing=".8px" fontWeight="600" fontSize="13px">DIVERSITY AND INCLUSION</ListItem>
                    <ListItem cursor="pointer" mt="15px" color="#53565a" letterSpacing=".8px" fontWeight="600" fontSize="13px">LULULEMON APPS</ListItem>
                    <ListItem cursor="pointer" mt="15px" color="#53565a" letterSpacing=".8px" fontWeight="600" fontSize="13px">SITEMAP</ListItem>
                </UnorderedList>
            </Box>
            <Box w="25%" p="10px">
                <UnorderedList listStyleType="none">
                    <ListItem cursor="pointer" mt="15px" color="#53565a" letterSpacing=".8px" fontWeight="600" fontSize="13px">GIFT CARDS</ListItem>
                    <ListItem cursor="pointer" mt="15px" color="#53565a" letterSpacing=".8px" fontWeight="600" fontSize="13px">STORE LOCATOR</ListItem>
                    <ListItem cursor="pointer" mt="15px" color="#53565a" fontWeight="400" fontSize="15px">Privacy Policy</ListItem>
                    <ListItem cursor="pointer" mt="15px" color="#53565a" fontWeight="400" fontSize="15px" display="flex" alignItems="center">
                        Your Privacy Choices
                        <Image src={privacy} alt="privacy" w="10%" ml="10px" />
                    </ListItem>
                    <ListItem cursor="pointer" mt="15px" color="#53565a"  fontWeight="400" fontSize="15px">California Privacy Rights</ListItem>
                    <ListItem cursor="pointer" mt="15px" color="#53565a"  fontWeight="400" fontSize="15px">California Transparency Act</ListItem>
                </UnorderedList>
            </Box>
            <Box p="10px">
                <Flex>
                    <Image cursor="pointer" src={twitter} alt="twitter" w="30px" mr="50px"/>
                    <Image cursor="pointer" src={pinterest} alt="twitter" w="30px" mr="50px"/>
                    <Image cursor="pointer" src={youtube} alt="twitter" w="30px" mr="50px"/>
                    <Image cursor="pointer" src={facebook} alt="twitter" w="30px" mr="50px"/>
                    <Image cursor="pointer" src={instagram} alt="twitter" w="30px" mr="50px"/>
                </Flex>
            </Box>
            </Flex>
        </Box>
        </>
    )
}