import { Flex, Image, Text, useBreakpointValue } from "@chakra-ui/react";
import Link from "next/link";

interface CountryProps {
    uid: string;
    slug: string
    title: string;
    subtitle: string;
    description: string;
    amount_of_countries: string;
    amount_of_languages: string;
    amount_of_cities: string;
    image_home: string;
    image_page: string;
}
interface SwiperSlideProps {
    continent: CountryProps
}
export function SwiperSlideComponentCountrie({ continent }: SwiperSlideProps) {
    const isWideVersion = useBreakpointValue({ base: false, sm: false, md: false, lg: true, xl: true });
    return (
        <Link href={`/continent/${continent.uid}`}>
            <Flex w="256px" h="279px" flexDir="column" borderRadius="5px" border="1px solid rgba(255, 186, 8, 0.5);"
                m={isWideVersion ? "auto" : "0 auto"}
            >
                <Flex
                    backgroundImage={continent.image_home}
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
                            {continent.title}
                        </Text>
                        <Text fontWeight="500" color="primary.300" fontSize={"16px"}>
                            {continent.subtitle}
                        </Text>
                    </Flex>
                    <Image h="30px" w="30px" borderRadius="50%" src={continent.image_page} alt={`Bandeira do ${continent.title}`} />
                </Flex>
            </Flex>
        </Link>
    )
}