import React from "react";
import {
  Box,
  Image,
  GridItem,
  Grid,
} from "@chakra-ui/react";


export const UnitEver = () => {
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
        <GridItem textAlign="left" width="85%">
          <h1 style={{ fontSize: "40px", fontWeight: "bold" }}>
            Unite every stream of work
          </h1>
          <p>
            Create a single source of truth that’s tailored precisely to how
            your teams work. Include everything you need, nothing you don’t.
          </p>
        </GridItem>
        <GridItem>
          <Image
            boxShadow={"rgba(43, 64, 70, 0.14) 0px 12px 32px"}
            margin={"auto"}
            //   width={{ lg: "200px", md: "200px", sm: "200px" }}
            width={"100%"}
            borderRadius={"10px"}
            src="https://images.ctfassets.net/wl95ljfippl8/4Y4FuH47t9OIljWwvQzeXI/f75edc365f36dde7e59123a162e4daf3/Homepage_Anim_02_Unite_FINAL.gif?w=1920"
          />
        </GridItem>
      </Grid>
    </Box>
  );
};
