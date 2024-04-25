/* eslint-disable jsx-a11y/iframe-has-title */
import {
  Button,
  Checkbox,
  FormControlLabel,
  styled,
  TextField,
} from "@mui/material";
import FmdGoodOutlinedIcon from "@mui/icons-material/FmdGoodOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import MailOutlinedIcon from "@mui/icons-material/MailOutlined";
import CarouselThree from "../../components/carouselthree/CarouselThree";

function Contact() {
  const CustomTextField = styled(TextField)({
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "#fbc068",
      },
      "&:hover fieldset": {
        borderColor: "#E0AC5E",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#E0AC5E",
      },
    },
  });

  return (
    <div>
      <div className="px-8 xl:px-52 pb-24">
        <div className="flex jusitfy-center items-center flex-col">
          <h1
            className="text-gradient pt-32 font-medium text-center text-4xl md:text-6xl pb-10"
            data-aos="fade-up"
          >
            Contact Us
          </h1>
          <p
            className="text-black text-center text-lg font-semibold pb-10"
            data-aos="fade-up"
          >
            You’re very close to get a beautiful and natural-looking smile.
            Let’s talk about it!
          </p>
        </div>
        <div className="flex flex-row items-center gap-10">
          <div className="w-2/5" data-aos="fade-right">
            <div className="container flex flex-row items-center mb-6">
              <FmdGoodOutlinedIcon className="icon" fontSize="large" />
              <p className="text-contact text-black text-left text-base font-semibold ml-4">
                Cali, Colombia. South America Cra. 100 5 – 169, Unicentro Mall
                Oasis Tower, Office 724-A.
              </p>
            </div>
            <div className="container flex flex-row items-center mb-6">
              <AccessTimeOutlinedIcon className="icon" fontSize="large" />
              <p className="text-contact text-black text-left text-base font-semibold ml-4">
                Monday to Friday 7:00 a.m. to 5:00 p.m. COT
              </p>
            </div>
            <div className="container flex flex-row items-center mb-6">
              <PhoneIphoneIcon className="icon" fontSize="large" />
              <div>
                <p className="text-contact text-left text-base font-semibold ml-4">
                  Phone +1 7865994064
                </p>
                <p className="text-contact text-left text-base font-semibold ml-4">
                  info@smilesbymariomontoya.com
                </p>
              </div>
            </div>
          </div>
          <div className="w-3/5 flex flex-col" data-aos="fade-left">
            <div className="grid grid-cols-2 gap-2">
              <div className="w-full" data-aos="fade-zoom-in">
                <CustomTextField
                  variant="outlined"
                  placeholder="Full Name"
                  fullWidth
                />
              </div>
              <div className="w-full" data-aos="fade-zoom-in">
                <CustomTextField
                  variant="outlined"
                  placeholder="+00 Number"
                  fullWidth
                />
              </div>
              <div className="w-full" data-aos="fade-zoom-in">
                <CustomTextField
                  variant="outlined"
                  placeholder="Email"
                  fullWidth
                />
              </div>
              <div className="w-full" data-aos="fade-zoom-in">
                <CustomTextField
                  variant="outlined"
                  placeholder="City / Country"
                  fullWidth
                />
              </div>
            </div>
            <div className="w-full mt-2">
              <div data-aos="fade-zoom-in">
                <CustomTextField
                  variant="outlined"
                  placeholder="Email"
                  fullWidth
                />
              </div>
            </div>
            <div className="w-full mt-2">
              <div data-aos="fade-zoom-in">
                <CustomTextField
                  variant="outlined"
                  placeholder="Message"
                  fullWidth
                  multiline
                  rows={4}
                />
              </div>
            </div>
            <div className="pt-4">
              <FormControlLabel
                control={
                  <Checkbox
                    sx={{
                      color: "#b48a4c",
                      "&.Mui-checked": {
                        color: "#b48a4c",
                      },
                    }}
                  />
                }
                label={
                  <p className="text-black font-semibold">
                    You agree with the{" "}
                    <span className="text-[#fbc068]">privacy policy</span>
                  </p>
                }
              />
            </div>
            <Button
              className="bg-gradient-to-r from-[#8E6F40] via-[#fbc068] to-[#8E6F40] hover:scale-110 shadow-lg"
              sx={{
                color: "black",
                fontWeight: "700",
                marginTop: 3,
                padding: "8px 20px",
                transition: "transform 0.3s ease-in-out",
                ":hover": {
                  transition: "transform 0.3s ease-in-out",
                  scale: 110,
                },
              }}
            >
              SEND
            </Button>
          </div>
        </div>
      </div>
      <div className="bg-black py-12 px-8 xl:px-5 flex justify-center items-center flex-col">
        <p className="text-white font-semibold">
          Let’s stay connected, follow us on social media and become part of
          this story.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-32 my-8">
          <div className="flex flex-col items-center">
            <a
              href="/"
              className="mx-2 text-[#fbc068] transition duration-1500 hover:scale-110"
            >
              <InstagramIcon
                sx={{
                  fontSize: 120,
                }}
              />
            </a>
            <p className="text-white font-semibold text-xl pt-4">INSTAGRAM</p>
          </div>
          <div className="flex flex-col items-center">
            <a
              href="/"
              className="mx-2 text-[#fbc068] transition duration-1500 hover:scale-110"
            >
              <FacebookIcon
                className="mx-2 text-[#fbc068]"
                sx={{ fontSize: 120 }}
              />
            </a>
            <p className="text-white font-semibold text-xl pt-4">FACEBOOK</p>
          </div>
          <div className="flex flex-col items-center">
            <a
              href="/"
              className="mx-2 text-[#fbc068] transition duration-1500 hover:scale-110"
            >
              <WhatsAppIcon
                className="mx-2 text-[#fbc068]"
                sx={{ fontSize: 120 }}
              />
            </a>
            <p className="text-white font-semibold text-xl pt-4">WHASTAPP</p>
          </div>
          <div className="flex flex-col items-center">
            <a
              href="/"
              className="mx-2 text-[#fbc068] transition duration-1500 hover:scale-110"
            >
              <MailOutlinedIcon
                className="mx-2 text-[#fbc068]"
                sx={{ fontSize: 120 }}
              />
            </a>
            <p className="text-white font-semibold text-xl pt-4">MAIL</p>
          </div>
        </div>
      </div>
      <div className="w-full">
        <iframe
          src="https://www.google.com/maps/d/u/0/embed?mid=1CPGNP-h5gZoERuUiyrkOZVNUBZXyzLM&ehbc=2E312F"
          width="100%"
          height="480"
        ></iframe>
      </div>
      <div className="bg-black py-12 px-8 xl:px-40">
        <div className="w-full flex justify-center">
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

export default Contact;
