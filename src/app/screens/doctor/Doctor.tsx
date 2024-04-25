import { useState } from "react";
import { CheckIcon } from "../../assets/svg/CheckIcon";
import CarouselThree from "../../components/carouselthree/CarouselThree";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

interface ModuleData {
  moduleName: string;
  count?: number;
  colorCount: string;
}

const moduleData: ModuleData[] = [
  {
    moduleName: "Bachelor of Dentistry Autonomous University of Manizales.",
    count: 1999,
    colorCount: "#fcc881",
  },
  {
    moduleName: "Self-Employee in Adults Dentistry",
    count: 2001,
    colorCount: "#fcc881",
  },
  {
    moduleName: " Postgraduate in Oral Rehabilitation Military University.",
    count: 2005,
    colorCount: "#fcc881",
  },
  {
    moduleName: "Co-Founded Matizz Dental Clinic",
    count: 2008,
    colorCount: "#fcc881",
  },
  {
    moduleName: "Founded his own Dental Clinic- Smiles by Mario Montoya",
    count: 2019,
    colorCount: "#fcc881",
  },
];

function Doctor() {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const onVisibilityChange = (visible: boolean) => {
    if (visible) {
      setIsVisible(true);
    }
  };

  return (
    <div>
      <div className="pt-28 px-40 flex flex-col md:flex-row items-start gap-20 pb-8 w-full">
        <div
          className="flex w-full md:w-2/5"
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          <img
            className="duration-500 hover:-translate-y-2"
            src="https://smilesbymariomontoya.com/wp-content/uploads/2022/09/dr-mario-montoya-2.webp"
            alt="alt"
          />
        </div>
        <div
          className="flex flex-col items-start w-full md:w-3/5"
          data-aos="fade-left"
          data-aos-duration="1000"
        >
          <h1 className="text-[#8E6F40] text-5xl font-medium">
            The Artist’s Dentist.
          </h1>
          <p className="pt-16 text-black font-medium">
            Behind the Billion Dollar Smile, there is a professional dentist, a
            well-known leader in cosmetic dentistry. Dr. Mario Montoya has
            state-of -the-art equipment and the experience of several decades in
            the field. As a specialist in Oral Rehabilitation, he has been in
            charge of restoring brightness and style to the smiles of his
            patients, giving them a new color, shape and size in a perfect and
            harmonious way.
          </p>
          <p className="pt-8 text-black font-medium">
            Dr. Montoya feels that his purpose in life is to transform lives
            through a new smile which is why he’s put together the best
            specialists, technological equipment and high-quality materials, in
            order to offer innovative dental solutions in a short time.
          </p>
        </div>
      </div>
      <div className="bg-black py-12 px-40 flex justify-center items-center flex-col">
        <p
          className="text-white font-medium text-center text-base"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          “I believe in the power of a smile. It opens new doors, new
          opportunities to chase dreams and goals. One of the greatest gifts in
          live is to be able to embrace yourself, feeling confident to conquer
          the world, and I’m sure that the very first step for it is to have a
          Billion Dollar Smile”
        </p>
        <h1
          className="pt-10 text-white text-6xl font-medium"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          Career Path
        </h1>
        <div className="grid grid-cols-5 items-start gap-8 pb-8">
          {moduleData.map((value: ModuleData, index: number) => (
            <div
              className="flex flex-col items-center"
              data-aos="fade-up"
              key={index}
            >
              <div className="text-center mt-8">
                <h2 className="counter">
                  <VisibilitySensor
                    onChange={(visible: boolean) => onVisibilityChange(visible)}
                    delayedCall
                  >
                    <CountUp
                      className="text-6xl sm:text-7xl font-bold tracking-tight leading-none"
                      end={isVisible ? value.count || 0 : 0}
                      style={{ color: value.colorCount }}
                      start={0}
                      duration={2.75}
                      separator=""
                      decimals={0}
                    />
                  </VisibilitySensor>
                </h2>
                <h2 className="text-white text-center pt-4 font-medium">
                  {value.moduleName}
                </h2>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div
        className="py-12 px-40 flex flex-col text-left"
        data-aos="fade-right"
        data-aos-duration="1000"
      >
        <div className="flex flex-row items-center py-2">
          <div className="m-4">
            <CheckIcon width={40} />
          </div>
          <h1 className="text-left font-bold">
            On a grand scale, Dr. Mario Montoya has been known for creating the
            most beautiful smiles in the music and entertainment industry. He
            began his journey with Puerto Rican urban artists, which has made
            him a reference in the field of cosmetic dentistry in Latin America.
          </h1>
        </div>
        <div className="flex flex-row items-center py-2">
          <div className="m-4">
            <CheckIcon width={40} />
          </div>
          <h1 className="text-left font-bold">
            After that, he went on to work with other American artists, among
            them Rick Ross, French Montana, Money Baggyo, Blac Youngsta, Rich
            The Kid, Safaee, Tekashi 6ix9ine, and many more.
          </h1>
        </div>
        <div className="flex flex-row items-center py-2">
          <div className="m-4">
            <CheckIcon width={40} />
          </div>
          <h1 className="text-left font-bold">
            At, Smiles by Mario Montoya, hundreds of lives are being changed and
            smiles are finding their new forever home.
          </h1>
        </div>
      </div>
      <div className="bg-black py-12 px-8 xl:px-40">
        <div data-aos="fade-up" className="w-full flex justify-center">
          <CarouselThree />
        </div>
        <div className="flex justify-around flex-col sm:flex-row items-center gap-10 pt-12">
          <div className="flex flex-col items-center">
            <p className="text-center text-white font-semibold">
              Monday to Friday 7:00 a.m. to 5:00 p.m. COT
            </p>
            <p className="text-center text-white font-semibold">
              Contact us +1 7865994064
            </p>
            <p className="text-center text-white font-semibold">
              info@smilesbymariomontoya.com
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
            © Copyright – Smiles by Dr. Mario Montoya 2024
          </p>
        </div>
      </div>
    </div>
  );
}

export default Doctor;
