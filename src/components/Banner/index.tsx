import { Box, useBreakpointValue } from "@chakra-ui/react";
import { Airplane } from "./Airplane";
import { TextBanner } from "./TextBanner";


export function Banner() {
    const isShowAirplane = useBreakpointValue({ base: false, sm: false, md: false, lg: true, xl: true });
    return (
        <Box
            as="section"
            pos="relative"
            w="100%"
            maxW={1480}
            h={isShowAirplane ? "350" : "200"}
            m="0 auto"
            bgImage={"./images/background.png"}
            bgSize="cover"
            bgPos="center"
            bgRepeat="no-repeat"
        >
            <TextBanner />
            {isShowAirplane && <Airplane />}
        </Box>
    )
}