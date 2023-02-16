import { useContinents } from "@/contexts/continentsContexts";
import { SlidesConteinerProps } from "@/interface/continentInterfaces";
import { Flex, Text, useBreakpointValue } from "@chakra-ui/react";
import { SwiperSlideComponentCountrie } from "./SwiperSlide";
import { CircularProgress, CircularProgressLabel } from '@chakra-ui/react'

export function Slide({ countrys }: SlidesConteinerProps) {
    const { continents } = useContinents();
    const isWideVersion = useBreakpointValue({ base: false, sm: false, md: false, lg: true, xl: true });
    return (
        <>
            <Flex
                flexDir={isWideVersion ? "row" : "column"}
                flexWrap="wrap"
                w="100%"
                gap="48px"
                h="100%"
                justify="space-between"
            >
                {countrys?.length ? countrys.map((countrys) => {
                    return (
                        <SwiperSlideComponentCountrie countrys={countrys} key={countrys.uid} />
                    )
                })
                    :
                    <Flex flexDir="column" w="100%">
                        <Text as="h1" m="0 auto" textAlign="center">Em breve você terá acesso as lindas cidades deste continente, Aguarde</Text>
                        <CircularProgress isIndeterminate color='primary.100' m="30px auto" />
                    </Flex>

                }
            </Flex>
        </>
    );
}
