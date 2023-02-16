import { CountrySlidesConteinerProps } from "@/interface/continentInterfaces";
import { Flex, Text } from "@chakra-ui/react";
import { Slide } from "./slide";

export function CountrySlidesConteiner({ countrys }: CountrySlidesConteinerProps) {
    return (
        <>
            <Text
                textAlign="center"
                mt={{ xl: "1", lg: "1", md: "20", base: "20" }}
                fontSize={["20", "36"]}
            >
                Cidades +100
            </Text>

            <Flex
                w="100%"
                flexWrap="wrap"
                my="20px"
                maxW={1480}
                mx="auto"
                h="auto"
                p={["0", "0", "50"]}
            >
                <Slide countrys={countrys} />
            </Flex>
        </>
    )
}


