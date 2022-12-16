import React from "react";

import { Box, Image, GridItem, Grid } from "@chakra-ui/react";

export const ConnectEv = () => {
  return (
    <Box marginBottom="80px">
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
        <GridItem textAlign="left" width="83%">
          <h1 style={{ fontSize: "45px", fontWeight: "bold" }}>
            Connect everything. Achieve anything.
          </h1>
          <p style={{ marginBottom: "40px" }}>
            Accelerate work and unlock potential with powerful apps that connect
            your data, workflows and teams.
          </p>
          <input
            style={{
              width: "250px",
              height: "40px",
              borderRadius: "10px",
              border: "1px solid gray",
            }}
            placeholder="Work Email Address"
          />
          <br />
          <p>No credit card required.</p>
        </GridItem>
        <GridItem>
          <Image
            boxShadow={"rgba(43, 64, 70, 0.14) 0px 12px 32px"}
            margin={"auto"}
            //   width={{ lg: "200px", md: "200px", sm: "200px" }}
            width={"100%"}
            borderRadius={"10px"}
            src="https://images.ctfassets.net/wl95ljfippl8/46aMTnfLaa6Xzj3ZKpI7rN/97d7402653329347a14be38391d86479/4-3_Hero-Trydot-C.jpg?w=1920"
          />
        </GridItem>
      </Grid>
    </Box>
  );
};
