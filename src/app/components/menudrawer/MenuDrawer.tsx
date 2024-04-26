import { Drawer, IconButton, Paper } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

interface MenuDrawerProps {
  open: boolean;
  toggleMenuDrawer: () => void;
}

export default function MenuDrawer({
  open,
  toggleMenuDrawer,
}: MenuDrawerProps) {
  return (
    <Drawer anchor="right" open={open} onClick={toggleMenuDrawer}>
      <Paper
        sx={{
          width: 320,
          height: "100%",
          borderRadius: 0,
        }}
        className="flex flex-col"
      >
        <div className="flex justify-between items-center px-4">
          <img
            className="w-[140px]"
            // src="https://smilesbymariomontoya.com/wp-content/uploads/2022/05/cropped-icon-smile-by-mario-montoya.png"
            // alt="logo"
          />
          <IconButton onClick={toggleMenuDrawer}>
            <CloseIcon sx={{ color: "black" }} />
          </IconButton>
        </div>
        <div className="flex flex-col items-start px-4">
          <a
            className="my-2 text-lg hover:text-[#C89952] duration-500 ease-in-out hover:text-xl"
            href="/"
          >
            Home
          </a>
          <a
            className="my-2 text-lg hover:text-[#C89952] duration-500 ease-in-out hover:text-xl"
            href="/doctor"
          >
            {/* Dr */}
          </a>
          <a
            className="my-2 text-lg hover:text-[#C89952] duration-500 ease-in-out hover:text-xl"
            href="/services"
          >
            Services/Treatments
          </a>
          <a
            className="my-2 text-lg hover:text-[#C89952] duration-500 ease-in-out hover:text-xl"
            href="/success-stories"
          >
            {/* Success stories */}
          </a>
          <a
            className="my-2 text-lg hover:text-[#C89952] duration-500 ease-in-out hover:text-xl"
            href="/booking"
          >
            {/* Booking */}
          </a>
          <a
            className="my-2 text-lg hover:text-[#C89952] duration-500 ease-in-out hover:text-xl"
            href="https://www.instagram.com/worldsmilesco/"
          >
            Contact Us
          </a>
        </div>
      </Paper>
    </Drawer>
  );
}
