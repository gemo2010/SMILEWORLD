import {
  Button,
  Checkbox,
  FormControlLabel,
  MenuItem,
  styled,
  TextField,
} from "@mui/material";
import CarouselThree from "../../components/carouselthree/CarouselThree";

export default function Booking() {
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

  const currencies = [
    {
      value: "Choose an option",
      label: "Choose an option",
    },
    {
      value: "Phone call",
      label: "Phone call",
    },
    {
      value: "WhatsApp",
      label: "WhatsApp",
    },
    {
      value: "Text message",
      label: "Text message",
    },
  ];

  return (
    <div>
      <div className="px-8 xl:px-60">
        <div className="flex jusitfy-center items-center flex-col">
          <h1
            className="text-gradient pt-32 font-medium text-center text-4xl md:text-6xl pb-10"
            data-aos="fade-up"
          >
            Booking Request
          </h1>
          <p
            className="text-black font-medium text-center text-lg font-semibold pb-10"
            data-aos="fade-up"
          >
            We are going to make sure that you can’t stop smiling from now on.
            Book now!
          </p>
          <div className="w-full mb-10" data-aos="fade-zoom-in">
            <CustomTextField
              variant="outlined"
              placeholder="Full Name"
              fullWidth
            />
          </div>
          <div className="w-full mb-10" data-aos="fade-zoom-in">
            <CustomTextField variant="outlined" placeholder="Email" fullWidth />
          </div>
          <div className="w-full mb-10" data-aos="fade-zoom-in">
            <CustomTextField
              variant="outlined"
              placeholder="00 Number"
              fullWidth
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-10 pb-4" data-aos="fade-zoom-in">
          <div className="flex flex-col items-start">
            <p className="text-black font-semibold">
              Primary Concerns (select all that apply)
            </p>
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
                <p className="text-black font-semibold">Tooth Discoloration</p>
              }
            />
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
              label={<p className="text-black font-semibold">Missing teeth</p>}
            />
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
                  Large gaps between your teeth
                </p>
              }
            />
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
                  Dental Decay or Fracture
                </p>
              }
            />
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
                <p className="text-black font-semibold">Dental Crowding</p>
              }
            />
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
              label={<p className="text-black font-semibold">Excesive gum</p>}
            />
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
              label={<p className="text-black font-semibold">Bad Breath</p>}
            />
          </div>
          <div className="flex flex-col items-start">
            <div className="flex flex-col items-start">
              <p className="text-black font-semibold">
                Primary Concerns (select all that apply)
              </p>
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
                    Top Notch Composite Veneers
                  </p>
                }
              />
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
                  <p className="text-black font-semibold">Missing teeth</p>
                }
              />
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
                    Large gaps between your teeth
                  </p>
                }
              />
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
                    Dental Decay or Fracture
                  </p>
                }
              />
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
                  <p className="text-black font-semibold">Dental Crowding</p>
                }
              />
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
                label={<p className="text-black font-semibold">Excesive gum</p>}
              />
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
                label={<p className="text-black font-semibold">Bad Breath</p>}
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <p className="text-black font-semibold">
            How do you like to be contacted?
          </p>
          <div className="w-full mt-2">
            <CustomTextField select fullWidth defaultValue="Choose an option">
              {currencies.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </CustomTextField>
          </div>
          <div className="w-full mt-2 mb-4">
            <CustomTextField
              variant="outlined"
              placeholder="Questions or Comments"
              rows={4}
              multiline
              fullWidth
            />
          </div>
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
          <div className="w-1/5 pb-16">
            <Button
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
              SEND
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
