import { Flex, Text, useBreakpointValue } from "@chakra-ui/react";

export function TextBanner() {
    const isWideVersion = useBreakpointValue({ base: false, sm: false, md: false, lg: true, xl: true });

    return (
        <Flex
            width={"100%"}
            height="100%"
            align={"center"}
            justify="center"
            w={isWideVersion ? "55%" : "100%"}
            p="50"
        >
            <Text
                as="h1"
                color="primary.50"
                fontSize={isWideVersion ? 36 : 20}
            >
                5 Continentes, <br />
                infinitas possibilidades.

                <Text
                    mt={5}
                    color="primary.300"
                    fontSize={isWideVersion ? 20 : 14}
                >
                    Chegou a hora de tirar do papel a viagem que você <br />
                    sempre sonhou.
                </Text>
            </Text>
        </Flex>
    )
}