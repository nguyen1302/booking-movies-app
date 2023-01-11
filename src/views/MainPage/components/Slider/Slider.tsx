import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

export default function SliderComponent() {
    return (
        <>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img
                        className="object-fill w-full"
                        src="https://rare-gallery.com/uploads/posts/1106641-men-face-portrait-black-background-looking-at-viewer-actor-movies-movie-poster-John-Wick-Keanu-Reeves-tie-beards-head-darkness-screenshot-computer-wallpaper-special-eff.jpg"
                        alt="image slide 1"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        className="object-fill w-full"
                        src="https://rare-gallery.com/uploads/posts/1151056-Thor-movie-poster-superhero-Marvel-Comics-Iron-Man-Hulk-Scarlet-Witch-Captain-America-The-Avengers-Scarlett-Johansson-Black-Widow-Elizabeth-Olsen-Samuel-L-Jackson-Aveng.png"
                        alt="image slide 2"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        className="object-fill w-full"
                        src="https://rare-gallery.com/uploads/posts/4553133-kylo-ren-han-solo-captain-phasma-stormtrooper-chewbacca-c-3po-r2-d2-poe-dameron-bb-8-rey-star-wars-the-force-awakens-star-wars-lightsaber-movie-poster.jpg"
                        alt="image slide 3"
                    />
                </SwiperSlide>
            </Swiper>
        </>
    );
}