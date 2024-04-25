import { useState } from "react";
import { AppBar, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import MenuDrawer from "../menudrawer/MenuDrawer";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import { TiktokIcon } from "../../assets/svg/TiktokIcon";
import logosmile from "../../assets/img/logo-smile.png";

export default function SmallHeader() {
  const [openMenuDrawer, setOpenMenuDrawer] = useState(false);

  const handleOpenMenuDrawer = (): void => {
    setOpenMenuDrawer(!openMenuDrawer);
  };

  return (
    <AppBar
      className="px-4 md:px-12 py-2"
      position="fixed"
      sx={{
        backgroundColor: "#000",
        boxShadow: "0px 2px 20px rgba(218, 165, 32, 0.5)",
      }}
      elevation={0}
    >
      <div className="flex justify-between items-center">
        <a href="/">
          <img
            className="w-[100px]"
            src={logosmile}
            alt="logo"
          />
        </a>
        <div>
          <MenuDrawer
            open={openMenuDrawer}
            toggleMenuDrawer={handleOpenMenuDrawer}
          />
          <IconButton onClick={handleOpenMenuDrawer}>
            <MenuIcon sx={{ color: "white" }} />
          </IconButton>
        </div>
        <div className="flex flex-row items-center">
            <InstagramIcon className="mx-2" />
            <FacebookIcon className="mx-2" />
            <YouTubeIcon className="mx-2" />
            <div className="mx-2">
              <TiktokIcon />
            </div>
          </div>
      </div>
    </AppBar>
  );
}
