import { Button } from "@mui/material";
import CarouselOne from "../../components/carouselone/CarouselOne";
import CarouselTwo from "../../components/carouseltwo/CarouselTwo";
import CarouselThree from "../../components/carouselthree/CarouselThree";

function Home() {
  return (
    <div>
    
      <div className="bgimg-home pt-40 bg-black">
        <div className="flex justify-center flex-col items-center">
          <h1 className="text-white text-2xl text-center font-bold">
          DESIGNING YOUR IDEAL SMILE
            <br />
            REFLECTING YOUR ESSENCE. 
          </h1>
          <h3 className="text-white text-base sm:text-xl pt-8">
            Leaders in Cosmetic Dentistry Treatments
          </h3>
          <h3 className="text-white text-center text-lg pt-4 font-medium mx-8 sm:mx-2">
            ¡We are going to make sure that you can’t stop smiling from now on!
          </h3>
          <Button
            href="https://wa.link/bmxzhg" target="_blank;"
            className="bg-gradient-to-r from-[#8E6F40] via-[#fbc068] to-[#8E6F40] hover:scale-110 shadow-lg"
            sx={{
              color: "black",
              fontWeight: "700",
              marginTop: 4,
              padding: "8px 20px",
              transition: "transform 0.3s ease-in-out",
              ":hover": {
                transition: "transform 0.3s ease-in-out",
                scale: 110,
              },
            }}
          >
            BOOK NOW
          </Button>
        </div>
      </div>
      <div className="bg-white">
        {/* <div className="py-10 px-8 xl:px-40 flex flex-col md:flex-row items-center xl:items-start gap-10 xl:gap-28 pb-8">
          <div
            className="flex w-full md:w-[300px]"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            <img
              className="rounded-[40px] duration-500 hover:-translate-y-2"
              src="https://smilesbymariomontoya.com/wp-content/uploads/2022/09/dr-mario-montoya-1366x2048.webp"
              alt="alt"
            />
          </div>
          <div
            className="flex flex-col items-center sm:items-start w-full md:w-3/5"
            data-aos="fade-left"
            data-aos-duration="1000"
          >
            <h1 className="text-gradient text-center xl:text-left text-4xl md:text-5xl xl:text-7xl font-medium">
              Dr. Mario Montoya
            </h1>
            <h1 className="pt-4 sm:pt-8 text-black text-xl font-bold">
              The Artist's Dentist.
            </h1>
            <p className="pt-4 text-black font-medium text-justify">
              Behind the Billion Dollar Smile, there is a professional dentist,
              a well-known leader in cosmetic dentistry. Dr. Mario Montoya has
              state-of -the-art equipment and the experience of several decades
              in the field. As a specialist in Oral Rehabilitation, he has been
              in charge of restoring brightness and style to the smiles of his
              patients, giving them a new color, shape and size in a perfect and
              harmonious way.
            </p>
            <p className="pt-6 text-black font-medium text-justify">
              Dr. Montoya feels that his purpose in life is to transform lives
              through a new smile which is why he’s put together the best
              specialists, technological equipment and high-quality materials,
              in order to offer innovative dental solutions in a short time.
            </p>
            <Button
              href="/doctor"
              className="bg-gradient-to-r from-[#8E6F40] via-[#fbc068] to-[#8E6F40] hover:scale-110 shadow-lg"
              sx={{
                color: "black",
                fontWeight: "700",
                marginTop: 4,
                padding: "8px 20px",
                transition: "transform 0.3s ease-in-out",
                ":hover": {
                  transition: "transform 0.3s ease-in-out",
                  scale: 110,
                },
              }}
            >
              MORE ABOUT DR. MARIO
            </Button>
          </div>
        </div> */}
      </div>
      <div className="bg-black py-12 px-8 xl:px-40">
        <div className="flex flex-col justify-center items-center">
          <h1
            className="text-white font-medium text-center text-4xl md:text-6xl"
            data-aos="fade-up"
          >
            Dental Solutions to Transform you Life
          </h1>
          <p
            className="text-white font-medium text-center text-base pt-8 font-semibold"
            data-aos="fade-up"
          >
            As leaders in the Cosmetic Dentistry Market and Oral Rehabilitation,
            we offer our clients quality dental treatments, a team of the best
            knowledgable specialists, technological equipment, and high-quality
            materials to provide innovative dental solutions quickly.
          </p>
          <div data-aos="fade-up" className="w-full flex justify-center">
            <CarouselTwo />
          </div>
          <div data-aos="fade-up w-full">
            <Button
              href="https://www.instagram.com/worldsmilesco/"
              className="bg-gradient-to-r from-[#8E6F40] via-[#fbc068] to-[#8E6F40] hover:scale-110 shadow-lg"
              sx={{
                color: "black",

                fontWeight: "700",
                marginTop: 2,
                textAlign: "center",
                fontSize: 14,
                transition: "transform 0.3s ease-in-out",
                ":hover": {
                  transition: "transform 0.3s ease-in-out",
                  scale: 110,
                },
              }}
            >
              CHECK OUT MORE ABOUT OUR SERVICES
            </Button>
          </div>
        </div>
      </div>
      <div className="bg-white py-12 px-8 xl:px-40">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-gradient font-medium text-center text-4xl md:text-6xl">
            Success Stories
          </h1>
          <p
            className="text-black font-medium text-center text-base pt-8 font-semibold"
            data-aos="fade-up"
          >
Discover the wonderful results of our dental treatments, with which we are transforming lives every day. Our commitment to excellence and our extensive experience make us your best allies in achieving that smile you've always wanted. At our clinic, every smile is a testimony to status, quality, trust, and professionalism. We are dedicated to offering not only cutting-edge treatments but also a personalized experience that guarantees outstanding results. Trust us to take the next step towards a radiant and healthy smile.
          </p>
          <p
            className="text-black font-medium text-center text-base pt-6 font-semibold"
            data-aos="fade-up"
          >
            Our team of specialists and health care providers is committed to
            providing our clients and patients with high-quality treatments in a
            safe, friendly and professional manner. Click here! Thanks to our
            innovative dental treatments, here are some of our success stories.
          </p>
          <div data-aos="fade-up" className="w-full flex justify-center">
            {/* <CarouselOne /> */}
          </div>
          <div data-aos="fade-up">
            <Button
              href="https://www.instagram.com/worldsmilesco/" target="_blank"
              className="bg-gradient-to-r from-[#8E6F40] via-[#fbc068] to-[#8E6F40] hover:scale-110 shadow-lg"
              sx={{
                color: "black",
                fontWeight: "700",
                marginTop: 4,

                textAlign: "center",
                fontSize: 14,
                transition: "transform 0.3s ease-in-out",
                ":hover": {
                  transition: "transform 0.3s ease-in-out",
                  scale: 110,
                },
              }}
            >
              CHECK OUT MORE OF OUR SUCCESS STORIES
            </Button>
          </div>
        </div>
      </div>
      <div className="bg-black py-12 px-8 xl:px-40">
        <div className="w-full flex justify-center">
          <CarouselThree />
        </div>
        <div className="flex justify-around flex-col sm:flex-row items-center gap-10 pt-12">
          <div className="flex flex-col items-center">
            <p className="text-center text-white font-semibold">
              Orlando, Florida.
            </p>
            <p className="text-center text-white font-semibold">
              Contact us +1 7257122656
            </p>
            <p className="text-center text-white font-semibold">
              info@worldsmiles.com
            </p>
          </div>
          <div className="flex flex-col items-center">
            <p className="text-center text-white font-semibold">
              Warranty Policy
            </p>
            <p className="text-center text-white font-semibold">
              Terms & Conditions
            </p>
            <p className="text-center text-white font-semibold">
              Privacy Policy
            </p>
            <p className="text-center text-white font-semibold">F.A.Q</p>
          </div>
        </div>
        <div className="flex justify-center items-center flex-col">
          <div className="bg-white my-6 h-[1px] w-60" />
          <p className="text-center text-white font-semibold">
            © Copyright – World Smile Design 2024
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
