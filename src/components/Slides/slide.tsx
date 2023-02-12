import { useContinents } from "@/contexts/continentsContexts";
import { Autoplay, Keyboard, Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { SwiperSlideComponent } from "./SwiperSlide";


export function Slide() {
    const { continents } = useContinents();
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
                } as object}
                modules={[Navigation, Pagination, Keyboard, Autoplay]}
            >
                {continents.length && continents.map((continent) => {
                    return (
                        <SwiperSlide key={continent.uid}>
                            <SwiperSlideComponent continent={continent} />
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </>
    );
}
