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
                        backgroundImage="https://images.unsplash.com/photo-1499241142330-28701ea87ff4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80"
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
                                Europa
                            </Text>
                            <Text fontWeight="700" color="primary.300" fontSize={["14px", "24px"]}>O continente mais antigo.</Text>
                        </Flex>
                    </Flex>
                </SwiperSlide>
                <SwiperSlide>
                    <Flex
                        backgroundImage="https://images.unsplash.com/photo-1464817739973-0128fe77aaa1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                        backgroundSize="cover"
                        backgroundPosition="center"
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
                                Ásia
                            </Text>
                            <Text fontWeight="700" color="primary.300" fontSize={["14px", "24px"]}>o maior dos continentes.</Text>
                        </Flex>
                    </Flex>
                </SwiperSlide>
                <SwiperSlide>
                    <Flex
                        backgroundImage="https://c.wallhere.com/photos/15/8f/city_blue_two_sky_people_cloud_white_mountain-927319.jpg!d"
                        backgroundSize="cover"
                        backgroundPosition="center"
                        h={["250", "350", "450", "500"]}
                        minW="100%"
                    >

                    </Flex>
                </SwiperSlide>
                <SwiperSlide>
                    <Flex
                        backgroundImage="https://c.wallhere.com/photos/6b/98/people_mountain_snow_man_tree_tower_pine_forest-848914.jpg!d"
                        backgroundSize="cover"
                        backgroundPosition="center"
                        h={["250", "350", "450", "500"]}
                        minW="100%"
                    >

                    </Flex>
                </SwiperSlide>
                <SwiperSlide>
                    <Flex
                        backgroundImage="https://c.wallhere.com/photos/b6/2d/nikon_d5100_budapest_parlamento_hungr_a_danubio_rio_europa-1090289.jpg!d"
                        backgroundSize="cover"
                        backgroundPosition="center"
                        h={["250", "350", "450", "500"]}
                        minW="100%"
                    >
                    </Flex>
                </SwiperSlide>
            </Swiper>
        </>
    );
}
