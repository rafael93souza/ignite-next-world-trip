import { Box, Flex, Text, useBreakpointValue } from "@chakra-ui/react";
import { CardContentBox } from "./CardContentBox";

interface ContentContinentProps {
    description: string;
    countries: string;
    languages: string;
    cities: string;
}
export function ContentContinent({ description, countries, languages, cities }: ContentContinentProps) {
    const isWideVersion = useBreakpointValue({ base: false, sm: false, md: false, lg: true, xl: true });
    return (
        <Flex p={isWideVersion ? "80px 140px" : "24px 20px"}
            flexDir={isWideVersion ? "row" : "column"}
        >
            <Box
                w={isWideVersion ? "50%" : "100%"}
                mr={isWideVersion ? "70" : "0"}
                mb={isWideVersion ? "0" : "10"}>
                <Text textAlign="justify">{description}</Text>
            </Box>
            <Flex
                flexDir="row"
                w={isWideVersion ? "50%" : "100%"}
                gap="42px"
                align="center"
                justifyContent={isWideVersion ? "center" : "space-between"}
            >
                <CardContentBox title={countries} subtitle="países" />
                <CardContentBox title={languages} subtitle="línguas" />
                <CardContentBox title={cities} subtitle="cidades+" isButton={true} />
            </Flex>
        </Flex>
    )
}