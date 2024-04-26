import { AppBar } from "@mui/material";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import { TiktokIcon } from "../../assets/svg/TiktokIcon";
import logosmile from "../../assets/img/logo-smile.png";

function Header() {
  return (
    <AppBar
      className="px-10 md:px-12 py-5"
      position="fixed"
      sx={{
        backgroundColor: "#000",
        boxShadow: "0px 2px 20px rgba(218, 165, 32, 0.5)",
      }}
    >
      <div className="flex justify-between items-center">
      <a href="/">
          <img
            className="w-[100px]"
            src={logosmile}
            alt="logo"
          />
        </a>
        <div className="flex flex-row gap-12">
          <div>
            <a className="mx-4 text-sm xl:text-[18px] font-semibold hover:text-[#fbc068] duration-500 ease-in-out hover:text-[18.5px]" href="/">
              Home
            </a>
            {/* <a className="mx-4 text-sm xl:text-[18px] font-semibold hover:text-[#fbc068] duration-500 ease-in-out hover:text-[18.5px]" href="/doctor">
              Dr
            </a> */}
            <a className="mx-4 text-sm xl:text-[18px] font-semibold hover:text-[#fbc068] duration-500 ease-in-out hover:text-[18.5px]" href="/services">
              {/* Services/Treatments */}
            </a>
            {/* <a className="mx-4 text-sm xl:text-[18px] font-semibold hover:text-[#fbc068] duration-500 ease-in-out hover:text-[18.5px]" href="/success-stories">
              Success stories
            </a> */}
            {/* <a className="mx-4 text-sm xl:text-[18px] font-semibold hover:text-[#fbc068] duration-500 ease-in-out hover:text-[18.5px]" href="/booking">
              Booking
            </a> */}
            {/* <a className="mx-4 text-sm xl:text-[18px] font-semibold hover:text-[#fbc068] duration-500 ease-in-out hover:text-[18.5px]" href="/contact">
              Contact Us
            </a> */}
          </div>
          <div className="flex flex-row items-center">
            <a href="https://www.instagram.com/worldsmilesco/" target="_blank"><InstagramIcon className="mx-2" /></a>
            {/* <FacebookIcon className="mx-2" /> */}
            {/* <YouTubeIcon className="mx-2" /> */}
            <div className="mx-2">
              {/* <TiktokIcon /> */}
            </div>
          </div>
        </div>
      </div>
    </AppBar>
  );
}

export default Header;
