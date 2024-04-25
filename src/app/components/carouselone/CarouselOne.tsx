import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../../styles/styles.css";
import { Pagination, Navigation, Autoplay } from "swiper/modules";

const storiesData = [
  {
    id: 1,
    media:
      "https://smilesbymariomontoya.com/wp-content/uploads/2022/09/dr-mario-montoya-kendo-kaponi.webp",
    title: "KENDO KAPONI",
  },
  {
    id: 2,
    media:
      "https://smilesbymariomontoya.com/wp-content/uploads/2022/09/dr-mario-montoya-rick-ross.webp",
    title: "RICK ROSS",
  },
  {
    id: 3,
    media:
      "https://smilesbymariomontoya.com/wp-content/uploads/2023/11/dr-mario-montoya-french-montana.webp",
    title: "FRENCH MONTANA",
  },
  {
    id: 4,
    media:
      "https://smilesbymariomontoya.com/wp-content/uploads/2022/09/dr-mario-montoya-6ixine.webp",
    title: "6IXNINE",
  },
  {
    id: 5,
    media:
      "https://smilesbymariomontoya.com/wp-content/uploads/2022/09/dr-mario-montoya-moneybagg-yo.webp",
    title: "MONEYBAGG YO",
  },
  {
    id: 6,
    media:
      "https://smilesbymariomontoya.com/wp-content/uploads/2022/09/dr-mario-montoya-rapper.webp",
    title: "RICH THE KID",
  },
];

export default function CarouselOne() {
  return (
    <>
      <Swiper
        slidesPerView={4}
        spaceBetween={10}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: true,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        breakpoints={{
          1024: {
            slidesPerView: 4,
          },
          768: {
            slidesPerView: 3,
          },
          640: {
            slidesPerView: 2,
          },
          320: {
            slidesPerView: 1,
          },
        }}
        modules={[Pagination, Navigation, Autoplay]}
        className="mySwiper"
      >
        {storiesData.map((category) => (
          <SwiperSlide
            key={category.id}
            className="my-10 rounded-xl"
            data-hash={`slide${category.id}`}
          >
            <div className="w-full h-[250px] relative group">
              <img
                src={category.media}
                alt={category.title}
                className="h-[400px] hover-opacity rounded-xl"
              />
              <div className="overlay absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <p className="text text-white">{category.title}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
