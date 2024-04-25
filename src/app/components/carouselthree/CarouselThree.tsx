import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../../styles/styles.css";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import { Rating } from "@mui/material";

const storiesData = [
  {
    id: 1,
    media:
      "https://lh3.googleusercontent.com/a-/ALV-UjWdVgFUg9FgqB1tSbVrzswLIjmlhn5E-BVmw4IOmwuUpQ=s120-c-rp-mo-br100",
    title: "Ernest Patillo",
    date: "20 March 2024",
    testimony:
      "I had a great experience. The teamwork, the drivers, & the reservations were handled in the same manner as an all inclusive trip. Thanks for my billion dollar smile!",
  },
  {
    id: 2,
    media:
      "https://lh3.googleusercontent.com/a/ACg8ocLS8N6i2We20j2Efv2VFClMTjj14VtPn06Ry5-O83jy=s120-c-rp-mo-br100",
    title: "jaklicenn washington",
    date: "15 March 2024",
    testimony:
      "Overall great experience. It was well worth it. The workers was very friendly and explained everything in great details. I recommend there service to anyone that’s in need of a beautiful smile or to simply enhance it.",
  },
  {
    id: 3,
    media:
      "https://lh3.googleusercontent.com/a/ACg8ocLCYIivhFcU2ZGztkUCUoOAe3ENJD52WHCdaUWFjyBp=s120-c-rp-mo-br100",
    title: "Antwan",
    date: "14 March 2024",
    testimony:
      "The experience was amazing. Now I have a billion dollar 😃 The staff was great. They made me feel welcome.",
  },
  {
    id: 4,
    media:
      "https://lh3.googleusercontent.com/a-/ALV-UjWDj_mYxkqk1GfKi8b5ts0hJGCApxCqPvgzyJwLm2oNHAg=s120-c-rp-mo-br100",
    title: "TeRay Tracy",
    date: "13 March 2024",
    testimony:
      "My experience at the Mario was everybody was professional.Everybody did a good job.Everybody helped each other.Maybe you feel safe in another country",
  },
  {
    id: 5,
    media:
      "https://lh3.googleusercontent.com/a/ACg8ocIoSDJy3wd6TxoIDhWt-hrW9xAUeLwYhI21xGINuPh-=s120-c-rp-mo-br100",
    title: "Miranda M",
    date: "6 March 2024",
    testimony:
      "The best dental experience. Staff is so kind caring and attentive! I felt very cared for during the entire experience. & my results are amazing!! I love my new BILLION DOLLAR SMILE",
  },
  {
    id: 6,
    media:
      "https://lh3.googleusercontent.com/a/ACg8ocLmFQpbzA_tO9AIGWkViPNHNRS17-6Zx22c9LgmeaXN=s120-c-rp-mo-br100",
    title: "Thomas Keenan",
    date: "6 March 2024",
    testimony:
      "i have an amazing experience they really make sure ur smile is perfect n iur overall mouth gums, and bite are perfect before you leave such a life changing experience 🫶🏻🏌️‍♂️😈✈️🥷🏻🤞🏻",
  },
  {
    id: 7,
    media:
      "https://lh3.googleusercontent.com/a/ACg8ocIqbU_lMe56-vlnVr7RAO7u-LLDeBHtctBSTVgiIaa6=s120-c-rp-mo-br100",
    title: "Jodie Campbell",
    date: "6 March 2024",
    testimony:
      "This experience has been amazing overall. From the amazing and friendly drivers, the amazing hotel accommodations, the attentive and friendly staff. I love my team of doctors and staff that worked with me to achieve my dream smile. They were very helpful and even tho I only speak English, they still were able to explain everything thoroughly and guide me thru my procedure. Everyone was super friendly, the clinic is super clean, with high end technology to create the smile of my dreams. I am extremely grateful and beyond happy for my new smile. Thank you to all the wonderful staff. I highly recommend you book with them.",
  },
  {
    id: 8,
    media:
      "https://lh3.googleusercontent.com/a-/ALV-UjUKzTGamJBIrOjTnBqJD_FgmHUfUpLWP_7MBYVEoc7uPJo=s120-c-rp-mo-br100",
    title: "Jessica Jones",
    date: "1 March 2024",
    testimony:
      "We had the pleasure of coming here and had an amazing experience with the entire Smiles by Mario Montoya staff. Everyone was so gracious, accommodating, professional and welcoming from the very first communication to our exit of the facility. State of the art technology, efficiency and overall spectacular quality. We will recommend many others!!!! THANK YOU SO MUCH! 🩶🩶🩶",
  },
  {
    id: 9,
    media:
      "https://lh3.googleusercontent.com/a/ACg8ocJFvj6Zy_pxxedPTtE6lqTHVGC8oQMAiUH_AtTZYC5k=s120-c-rp-mo-br100",
    title: "Rayven",
    date: "1 March 2024",
    testimony:
      "I love my smile it was a easy process I felt so safe under the care of billion dollar smiles my whole life is going to change",
  },
  {
    id: 9,
    media:
      "https://lh3.googleusercontent.com/a-/ALV-UjWVQk59bRzRD5Q3R6fV9CZg5eHyQq3TOiIS4ELOydmuljg=s120-c-rp-mo-br100",
    title: "Keela Lambert",
    date: "29 February 2024",
    testimony:
      "I we like to thank Dr Mario and his staff for the amazing experience . You guys are the Best",
  },
];

export default function CarouselThree() {
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={10}
        navigation={true}
        breakpoints={{
          1024: {
            slidesPerView: 3,
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
            className="swiper-slide-two my-10 rounded-xl flex justify-center items-center flex-col"
            data-hash={`slide${category.id}`}
          >
            <div className="flex justify-center items-center flex-col duration-500 hover:-translate-y-2">
              <div className="w-[70px] h-full">
                <img
                  className="w-[10px] h-[10px]"
                  src={category.media}
                  alt="3"
                />
              </div>
              <p className="text-base pt-4 text-white text-center font-bold w-full">
                {category.title}
              </p>
              <p className="text-xs text-[#7E7E7E] text-center w-full">
                {category.date}
              </p>
              <Rating className="mt-4" defaultValue={5} />
              <p className="testimony-container text-white text-xs xl:text-base mt-4 h-20 w-11/12">
                {category.testimony}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
