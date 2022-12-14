import React from "react";
import {
  Box,
  Image,
  Button,
  GridItem,
  Grid,
  Container,
  Text,
  Heading,
} from "@chakra-ui/react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";

import { AspectRatio } from "@chakra-ui/react";
import { ConnectEv } from "../Components/ConnectEv";
import { AllBrands } from "../Components/AllBrands";
import { CreateSolution } from "../Components/CreateSolution";
import { UnitEver } from "../Components/UnitEver";

export const AllDataTogether = () => {
  return (
    <Box marginBottom="150px">
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
            Bring all your data together
          </h1>
          <p>
            All your information. Always up to date. At your fingertips. Keep
            everything in sync across your organization.
          </p>
        </GridItem>
        <GridItem>
          <Image
            boxShadow={"rgba(43, 64, 70, 0.14) 0px 12px 32px"}
            margin={"auto"}
            //   width={{ lg: "200px", md: "200px", sm: "200px" }}
            width={"100%"}
            borderRadius={"10px"}
            src="https://images.ctfassets.net/wl95ljfippl8/2fOLirjicpezmKn0oNEL7P/47f38444712bc839123c360348a096a8/2560x1440-Sync-Update.png?w=1920"
          />
        </GridItem>
      </Grid>
    </Box>
  );
};
