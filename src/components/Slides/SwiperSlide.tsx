import { Flex, Text } from "@chakra-ui/react";
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
export function SwiperSlideComponent({ continent }: SwiperSlideProps) {
    return (
        <Link href={`/continent/${continent.uid}`}>
            <Flex
                backgroundImage={continent.image_home}
                backgroundSize="cover"
                backgroundPosition="center"
                backgroundRepeat="no-repeat"
                h={["250", "350", "450", "500"]}
                minW="100%"

            >
                <Flex
                    h="100%"
                    minW="100%"
                    flexDir="column"
                    align="center"
                    justify="center"
                    bg="rgba(0, 0, 1, 0.5)"
                >
                    <Text as="h1"
                        fontWeight="700"
                        color="primary.50"
                        fontSize={["24px", "48px"]}
                    >
                        {continent.title}
                    </Text>
                    <Text fontWeight="700" color="primary.300" fontSize={["14px", "24px"]}>
                        {continent.subtitle}
                    </Text>
                </Flex>
            </Flex>
        </Link>
    )
}