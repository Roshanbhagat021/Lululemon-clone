import { Poster } from "./Poster"
import { Shorts } from "./Shorts"
import { Box,Heading,Flex,Image} from "@chakra-ui/react"
import { useEffect, useState } from "react"
import { Slider } from "./Slider"
import { WorkoutPoster } from "./WorkoutPoster"
import { WomenSlider } from "./WomenSlider"
import { ColorPoster } from "./ColorPoster"

export const Mainpage = () => {
    const [short, setShort] = useState([]);
    const [women,setWomen] = useState([]);

    useEffect(() => {
        fetch("https://swanky-carpal-work.glitch.me/shorts")
        .then(res => res.json())
        .then(data => {
            setShort(data);
        })
        .catch((err) => console.log(err));
    }, []);

    useEffect(() => {
        fetch("https://swanky-carpal-work.glitch.me/women")
        .then(res => res.json())
        .then(data => {
            setWomen(data);
        })
        .catch((err) => console.log(err));
    }, []);

    return (
        <>
        <Poster />
        <Shorts />
        <Box>
            <Heading fontWeight="bold" color="black" textAlign="center" size="2xl">New gear for a lucky year.</Heading>
            <Slider images={short} />
        </Box>
        <WorkoutPoster />
        <Box>
            <WomenSlider images={women} />
        </Box>
        <ColorPoster />
        </>
    )
}
