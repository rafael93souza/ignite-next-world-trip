import { Flex, Text } from "@chakra-ui/react";
import { Autoplay, Keyboard, Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";

export function Slide() {
    return (
        <>
            <Swiper
                navigation={{ hideOnClick: true, }}
                pagination={{
                    clickable: true,
                }}
                keyboard={true}
                loop={true}
                autoplay={{
                    delay: 2500,
                    pauseOnMouseEnter: true
                }}
                style={{
                    "--swiper-navigation-color": "#FFBA08",
                    "--swiper-pagination-color": "#FFBA08",
                    "--swiper-pagination-": "#FFBA08",
                    "--swiper-pagination": "#ffff"
                } as object}
                modules={[Navigation, Pagination, Keyboard, Autoplay]}
            >
                <SwiperSlide>
                    <Flex
                        backgroundImage="https://c.wallhere.com/photos/b6/2d/nikon_d5100_budapest_parlamento_hungr_a_danubio_rio_europa-1090289.jpg!d"
                        backgroundSize="cover"
                        backgroundPosition="center"
                        backgroundRepeat="no-repeat"
                        h="500"
                        minW="100%"
                        flexDir="column"
                        align="center"
                        justify="center"
                    >
                        <Text as="h1" color="pink.500">Europa</Text>
                        <Text color="pink.500">O continente mais antigo.</Text>
                    </Flex>
                </SwiperSlide>
                <SwiperSlide>
                    <Flex
                        backgroundImage="https://c.wallhere.com/photos/0b/47/travel_light_night_canon_river_soft_long_hungary-955273.jpg!d"
                        backgroundSize="cover"
                        backgroundPosition="center"
                        h="500"
                        minW="100%"
                    >

                    </Flex>
                </SwiperSlide>
                <SwiperSlide>
                    <Flex
                        backgroundImage="https://c.wallhere.com/photos/15/8f/city_blue_two_sky_people_cloud_white_mountain-927319.jpg!d"
                        backgroundSize="cover"
                        backgroundPosition="center"
                        h="500"
                        minW="100%"
                    >

                    </Flex>
                </SwiperSlide>
                <SwiperSlide>
                    <Flex
                        backgroundImage="https://c.wallhere.com/photos/6b/98/people_mountain_snow_man_tree_tower_pine_forest-848914.jpg!d"
                        backgroundSize="cover"
                        backgroundPosition="center"
                        h="500"
                        minW="100%"
                    >

                    </Flex>
                </SwiperSlide>
                <SwiperSlide>
                    <Flex
                        backgroundImage="https://c.wallhere.com/photos/b6/2d/nikon_d5100_budapest_parlamento_hungr_a_danubio_rio_europa-1090289.jpg!d"
                        backgroundSize="cover"
                        backgroundPosition="center"
                        h="500"
                        minW="100%"
                    >
                    </Flex>
                </SwiperSlide>
            </Swiper>
        </>
    );
}
