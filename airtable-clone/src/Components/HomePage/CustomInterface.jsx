import React from "react";
import { Box, Image, GridItem, Grid } from "@chakra-ui/react";

export const CustomInterface = () => {
  return (
    <Box marginBottom="130px">
      <Grid
        width={"80%"}
        margin={"auto"}
        gridTemplateColumns={{
          lg: "repeat(2,1fr)",
          md: "repeat(1,1fr)",
          sm: "repeat(1,1fr)",
        }}
        gap={"50px"}
      >
        <GridItem>
          <Image
            boxShadow={"rgba(43, 64, 70, 0.14) 0px 12px 32px"}
            margin={"auto"}
            //   width={{ lg: "200px", md: "200px", sm: "200px" }}
            width={"100%"}
            borderRadius={"10px"}
            src="https://images.ctfassets.net/wl95ljfippl8/3nngLvRshd7vQf1sybaEIo/8ab0cd2f67ace6a6a39bab86336e6a37/Homepage_Anim_03_TurnInformation_FINAL.gif?w=1920"
          />
        </GridItem>
        <GridItem textAlign="left" width="85%">
          <p style={{ textAlign: "left", fontSize: "25px" }}>Beta</p>
          <h1 style={{ fontSize: "40px", fontWeight: "bold" }}>
            Interface with work in a new way
          </h1>
          <p style={{ textAlign: "left", fontSize: "19px" }}>
            Create custom interfaces that give each and every teammate the
            relevant information they need, and a simple way to take action.
          </p>
        </GridItem>
      </Grid>
    </Box>
  );
};
