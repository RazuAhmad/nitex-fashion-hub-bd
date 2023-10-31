import React from "react";
import CustomServicesCart from "../CustomServicesCart/CustomServicesCart";
import { Container, Stack, Typography } from "@mui/material";
import service1 from "../../assets/service1.jpg";
import service2 from "../../assets/service2.jpg";
import service3 from "../../assets/service3.jpg";

const OurServices = () => {
  const allServicesDetails = [
    {
      id: 1,
      serviceImg: service1,
      serviceCategory: "Couture Collections",
    },
    {
      id: 2,
      serviceImg: service2,
      serviceCategory: "Fashion Consultation",
    },
    {
      id: 3,
      serviceImg: service3,
      serviceCategory: "Bespoke Tailoring",
    },
    {
      id: 4,
      serviceImg: service2,
      serviceCategory: "Couture Collections",
    },
    {
      id: 5,
      serviceImg: service3,
      serviceCategory: "Bespoke Tailoring",
    },
    {
      id: 6,
      serviceImg: service2,
      serviceCategory: "Fashion Consultation",
    },
  ];

  return (
    <Container
      sx={{
        maxWidth: "1280px",
        margin: "auto",
        paddingTop: { sm: "1rem", md: "2rem" },
      }}
    >
      <Typography
        variant="h2"
        sx={{ textAlign: "center", marginBottom: "1rem" }}
      >
        Our Services
      </Typography>
      <Stack
        flexDirection={{ md: "row", sm: "column" }}
        flexWrap="wrap"
        justifyContent="space-between"
        gap={{ xs: "2rem", md: "1rem" }}
      >
        {allServicesDetails.map((item) => (
          <CustomServicesCart
            key={item.id}
            serviceCategory={item.serviceCategory}
            serviceImg={item.serviceImg}
          />
        ))}
      </Stack>
    </Container>
  );
};

export default OurServices;
