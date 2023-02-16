import { Flex, Image, Text, useBreakpointValue } from "@chakra-ui/react";
import Link from "next/link";

interface CountryProps {
    uid: string | null;
    slug: string | null;
    name: string;
    capital: string;
    description: string;
    continent: string;
    flag: string;
    image: string;
}
interface SwiperSlideProps {
    countrys: CountryProps
}
export function SwiperSlideComponentCountrie({ countrys }: SwiperSlideProps) {
    const isWideVersion = useBreakpointValue({ base: false, sm: false, md: false, lg: true, xl: true });
    return (
        <Link href={`/continent/${countrys.uid}`}>
            <Flex
                w="256px"
                h="279px"
                flexDir="column"
                borderRadius="5px"
                border="1px solid rgba(255, 186, 8, 0.5);"
                m={isWideVersion ? "auto" : "0 auto"}
            >
                <Flex
                    backgroundImage={countrys.image}
                    backgroundSize="cover"
                    backgroundPosition="center"
                    backgroundRepeat="no-repeat"
                    h="173px"
                    minW="256px"

                />
                <Flex
                    h="100%"
                    minW="100%"
                    flexDir="row"
                    align="center"
                    justify="center"
                >
                    <Flex flexDir="column" w="50%">

                        <Text as="h1"
                            fontWeight="600"
                            color="primary.200"
                            fontSize={"20px"}
                        >
                            {countrys.capital}
                        </Text>
                        <Text fontWeight="500" color="primary.300" fontSize={"16px"}>
                            {countrys.name}
                        </Text>
                    </Flex>
                    <Flex
                        h="30px"
                        w="30px"
                        borderRadius="50%"
                        backgroundImage={countrys.flag}
                        backgroundSize="cover"
                        backgroundPosition="center"
                    />
                </Flex>
            </Flex>
        </Link>
    )
}