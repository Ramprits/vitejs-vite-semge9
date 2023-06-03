import { Stack } from "@mui/material";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <Stack
      flexDirection={"row"}
      display={"flex"}
      justifyContent={"space-around"}
      sx={{
        gap: {
          sm: "122px",
          xs: "40px",
        },
        mt: {
          sm: "32px",
          xs: "20px",
        },
        justifyContent: "none",
      }}
      px={"20px"}
    >
      <Link to='/'>
        <img
          src='https://res.cloudinary.com/rps-technologies/image/upload/v1685775974/gym-application/Logo.png'
          alt=''
          style={{ height: "48px", width: "48px", margin: "0 20px" }}
        />
      </Link>
      <Stack
        flexDirection={"row"}
        gap={"40px"}
        fontSize={"24px"}
        alignItems={"flex-end"}
      >
        <Link
          to={"/"}
          style={{
            textDecoration: "none",
            color: "#3A1212",
            borderBottom: "3px solid #FF2625",
          }}
        >
          Home
        </Link>
        <a
          href='#exercises'
          style={{
            textDecoration: "none",
            color: "#3A1212",
          }}
        >
          Exercise
        </a>
      </Stack>
    </Stack>
  );
};
