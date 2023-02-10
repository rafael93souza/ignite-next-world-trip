import { Box, Flex, HStack, useBreakpointValue } from "@chakra-ui/react";
import { CardTravelType } from "./CardTravelType";


export function TravelsTypes() {
    const isWideVersion = useBreakpointValue({ base: false, sm: false, md: false, lg: true, xl: true });
    return (
        <Flex
            w="100%"
            maxW={1480}
            m="0 auto"
            height={isWideVersion ? "500" : "200"}
            align="center"
            justify="center"
            flexDir="column"
        >
            <HStack
                spacing={["6", "20", "30", "135px"]}
                flexWrap="wrap"
                align="center"
                justify="center"
                mt={isWideVersion ? "0" : "20"}
            >
                <CardTravelType title="vida noturna" icon="/icons/cocktail.svg" alt="Icone taça de drink" />
                <CardTravelType title="praia" icon="/icons/surf.svg" alt="Icone Prancha de surf e sol" />
                <CardTravelType title="moderno" icon="/icons/building.svg" alt="Icone de um edificio" />
                <CardTravelType title="clássico" icon="/icons/museum.svg" alt="Icone de um museu" />
                <CardTravelType title="e mais..." icon="/icons/earth.svg" alt="Icone planeta Terra" />
            </HStack>
            <Box
                minW="90px"
                minH="20"
                borderBottomWidth={2}
                borderColor="primary.300"
                mt={isWideVersion ? "5" : "1"}
            />
        </Flex>
    )
}