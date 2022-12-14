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
import { AllDataTogether } from "../Components/AllDataTogether";
import { BeginStartet } from "../Components/BeginStartet";

export const AnyoneCan = () => {
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
          <Accordion>
            <AccordionItem width="300px">
              <h2>
                <AccordionButton>
                  <Box as="span" flex="1" textAlign="left">
                    See value fast
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel textAlign="left" pb={4}>
                Anyone can build a simple solution quickly, for any need.
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem width="300px">
              <h2>
                <AccordionButton>
                  <Box as="span" flex="1" textAlign="left">
                    Gain perspectine
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel textAlign="left" pb={4}>
                Let your team see work in new ways—or create a View just for
                yourself.
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </GridItem>

        <GridItem>
          <AspectRatio maxW="560px" ratio={1}>
            <iframe
              height={"200px"}
              title="naruto"
              borderRadius={"10px"}
              src="https://videos.ctfassets.net/wl95ljfippl8/1k1MBBAnR5jvolTJdLaSH0/d9a59113483c078c96f7425a7c2e084e/Homepage_Anim_Templates_05_FINAL.mp4"
              allowFullScreen
            />
          </AspectRatio>
        </GridItem>
      </Grid>
    </Box>
  );
};
