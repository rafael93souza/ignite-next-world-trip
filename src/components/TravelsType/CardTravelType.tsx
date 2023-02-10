import { Box, Flex, Image, Text, useBreakpointValue } from "@chakra-ui/react";
interface CardTravelType {
    title: string;
    icon: string;
    alt: string;
}
export function CardTravelType({ icon, title, alt }: CardTravelType) {
    const isWideVersion = useBreakpointValue({ base: false, sm: false, md: false, lg: true, xl: true });
    return (
        <Box
            maxW={isWideVersion ? "158" : "auto"}
            maxH="145"
            flexDir="column"
            alignItems="center"
            justifyContent="center"
        >
            {isWideVersion ? <>
                <Image src={icon} alt={alt} m="10px auto" />
                <Text textAlign="center">{title}</Text>
            </>
                : <Flex
                    textAlign="center"
                    alignItems="center"
                    justifyContent="center" >
                    <Text
                        as="span"
                        color="primary.100"
                        mr="8px"
                        fontSize={30}
                        textAlign="center"
                    >
                        •
                    </Text>
                    <Text>
                        {title}
                    </Text>
                </Flex>
            }
        </Box >
    )
}