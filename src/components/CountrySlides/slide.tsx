import { useContinents } from "@/contexts/continentsContexts";
import { Flex, useBreakpointValue } from "@chakra-ui/react";
import { Autoplay, Keyboard, Navigation, Pagination, Mousewheel } from "swiper";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide, } from "swiper/react";
import { SwiperSlideComponentCountrie } from "./SwiperSlide";


export function Slide() {
    const { continents } = useContinents();
    const isWideVersion = useBreakpointValue({ base: false, sm: false, md: false, lg: true, xl: true });
    return (
        <>
            <Swiper
                pagination={{
                    clickable: true,
                }}
                autoHeight={true}
                mousewheel={true}
                loop={true}
                direction={isWideVersion ? "horizontal" : "vertical"}
                slidesPerView={isWideVersion ? 4 : 1}
                style={{
                    "--swiper-navigation-color": "#FFBA08",
                    "--swiper-pagination-color": "#FFBA08",
                } as object}
                modules={[Mousewheel, Pagination]}
            >
                <Flex flexWrap="wrap" bg="pink.400" w="100%" h="100%">
                    {continents.length && continents.map((continent) => {
                        return (
                            <SwiperSlide key={continent.uid}>
                                <SwiperSlideComponentCountrie continent={continent} />
                            </SwiperSlide>
                        )
                    })}
                </Flex>
            </Swiper>
        </>
    );
}
