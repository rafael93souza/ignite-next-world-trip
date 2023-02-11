import { Flex, Text } from "@chakra-ui/react";
import { Slide } from "./slide";

export function SlidesConteiner() {
    return (
        <>
            <Text
                textAlign="center"
                mt={{ xl: "1", lg: "1", md: "20", base: "20" }}
                fontSize={["20", "36"]}
            >
                Vamos nessa? <br />
                Então escolha seu continente
            </Text>

            <Flex w="100%" maxW={1480} m="0 auto" h="700px" p="100" >
                <Slide />
            </Flex>
        </>
    )
}


