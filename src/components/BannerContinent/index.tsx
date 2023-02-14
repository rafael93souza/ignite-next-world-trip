import { Box, Flex, Text, useBreakpointValue } from "@chakra-ui/react";

interface BannerContinentProps {
    image: string;
    title: string
}
export function BannerContinent({ image, title }: BannerContinentProps) {
    const isWideVersion = useBreakpointValue({ base: false, sm: false, md: false, lg: true, xl: true });
    return (
        <Box
            pos="relative"
            w="100%"
            maxW={1480}
            h={isWideVersion ? "500" : "150"}
            m="0 auto"
            bgImage={image}
            bgSize="cover"
            bgPos="center"
            bgRepeat="no-repeat"
        >
            <Flex
                h="100%"
                minW="100"
                bg="rgba(0, 0, 1, 0.5)"
            >
                <Text as="h1"
                    fontWeight="700"
                    color="primary.50"
                    fontSize={isWideVersion ? "48px" : "28px"}
                    m={isWideVersion ? "370px 140px" : "auto"}
                >{title}
                </Text>
            </Flex>
        </Box>
    )

}