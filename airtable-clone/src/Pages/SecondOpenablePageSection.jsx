import React from "react";
import {
  Box,
  Grid,
  Flex,
  Heading,
  Button,
  GridItem,
  Text,
  Image,
} from "@chakra-ui/react";
import { RxDotFilled } from "react-icons/rx";
import { ImFacebook2 } from "react-icons/im";
import { BsTwitter } from "react-icons/bs";
import { SiLinkedin } from "react-icons/si";
import banner from "../Images/banner3.jpg";
import logo from "../Images/PRlogo.jpeg";
const SecondOpenablePageSection = () => {
  return (
    <Box>
      <Box
        bg="#f2f4f7"
        border="1px"
        style={{ border: "1px solid gray" }}
        h="10"
      >
        <Flex mt="2" ml="5" gap="2">
          <Heading as="h6" size="xs">
            Home{" "}
          </Heading>
          <Heading as="h6" size="xs">
            {" "}
            {">"}{" "}
          </Heading>
          <Heading as="h6" size="xs">
            Resource
          </Heading>
          <Heading as="h6" size="xs">
            {" "}
            {">"}{" "}
          </Heading>
          <Heading as="h6" size="xs">
            Customer Experience Strategy
          </Heading>
        </Flex>
      </Box>
      <Grid
        templateColumns={[
          "repeat(1, 1fr)",
          "repeat(1, 1fr)",
          "repeat(1, 1fr)",
          "repeat(2, 1fr)",
        ]}
      >
        <GridItem
          bg="#181d26"
          p={10}
          h="m"
          width={["full", "full", "full", "base"]}
        >
          <Box width={["full", "full", "full", "lg"]} ml="10">
            <Heading as="h2" size="xl" color="white">
            What is User Experience (UX)?
            </Heading>
          </Box>
          <Box ml="10" mt="200">
            <Flex align="center">
              <Image
                boxSize="50px"
                borderRadius={50}
                objectFit="cover"
                src={logo}
              />
              <Heading as="h6" ml="5" size="xs" color="white">
                {" "}
                WebTaskIt PRODUCT TEAM
              </Heading>
              <Heading as="h6" size="xs" color="white" mt="1">
                {" "}
                <RxDotFilled />{" "}
              </Heading>
              <Heading as="h6" size="xs" color="white">
                3 MIN READ
              </Heading>
            </Flex>
          </Box>
        </GridItem>
        <GridItem>
          <Image src={banner} width="100%" h="100%" alt="DanAbramov" />
        </GridItem>
      </Grid>
      <Box pb="5" ml={[10, 10, 20, 300]}></Box>
      <Box mt={7} ml={[10, 10, 20, 300]}>
        <hr width="100%" color="black" style={{ border: "0.5px solid gray" }} />
      </Box>
      <Box mt={7} ml={[10, 10, 20, 300]} w={[400, 600, 700, 800]}>
        <Heading p={5} as="h2" size="xl">
        What is user experience (UX)?
        </Heading>

        <Text p={5} fontSize="xl">
          A customer experience strategy is an organized approach for delivering
          the best possible customer experience with your business across all
          touchpoints in their customer journey. It involves turning every
          customer interaction into a positive and meaningful experience so that
          it's easier to find new customers and convert existing customers into
          loyal fans.
        </Text>
        <Text p={5} fontSize="xl">
          A successful customer experience strategy, at a high level, starts
          with knowing your customers, understanding marketplace data and
          conditions, and deciding how your company's mission and vision fit
          into all of that. This process ideally includes gathering input and
          involving people from all departments in your organization, not just
          team members who are in customer-facing roles. By aligning all of your
          customer insights from across your company, you maximize your ability
          to build a better customer experience and create more long-term
          customer relationships.
        </Text>
      </Box>
      <Box mt={7} ml={[10, 10, 20, 300]} w={[400, 600, 700, 800]}>
        <Heading p={5} as="h2" size="xl">
        What UX isn’t
        </Heading>

        <Text p={5} fontSize="xl">
          A customer experience strategy is an organized approach for delivering
          the best possible customer experience with your business across all
          touchpoints in their customer journey. It involves turning every
          customer interaction into a positive and meaningful experience so that
          it's easier to find new customers and convert existing customers into
          loyal fans.
        </Text>
        <Text p={5} fontSize="xl">
          A successful customer experience strategy, at a high level, starts
          with knowing your customers, understanding marketplace data and
          conditions, and deciding how your company's mission and vision fit
          into all of that. This process ideally includes gathering input and
          involving people from all departments in your organization, not just
          team members who are in customer-facing roles. By aligning all of your
          customer insights from across your company, you maximize your ability
          to build a better customer experience and create more long-term
          customer relationships.
        </Text>
      </Box>
      <Box mt={7} ml={[10, 10, 20, 300]} w={[400, 600, 700, 800]}>
        <Heading p={5} as="h2" size="xl">
        What is UX design? 
        </Heading>

        <Text p={5} fontSize="xl">
          A customer experience strategy is an organized approach for delivering
          the best possible customer experience with your business across all
          touchpoints in their customer journey. It involves turning every
          customer interaction into a positive and meaningful experience so that
          it's easier to find new customers and convert existing customers into
          loyal fans.
        </Text>
        <Text p={5} fontSize="xl">
          A successful customer experience strategy, at a high level, starts
          with knowing your customers, understanding marketplace data and
          conditions, and deciding how your company's mission and vision fit
          into all of that. This process ideally includes gathering input and
          involving people from all departments in your organization, not just
          team members who are in customer-facing roles. By aligning all of your
          customer insights from across your company, you maximize your ability
          to build a better customer experience and create more long-term
          customer relationships.
        </Text>
      </Box>
      <Box mt={7} ml={[10, 10, 20, 300]} w={[400, 600, 700, 800]}>
        <Heading p={5} as="h2" size="xl">
        Why does UX design matter?
        </Heading>

        <Text p={5} fontSize="xl">
          A customer experience strategy is an organized approach for delivering
          the best possible customer experience with your business across all
          touchpoints in their customer journey. It involves turning every
          customer interaction into a positive and meaningful experience so that
          it's easier to find new customers and convert existing customers into
          loyal fans.
        </Text>
        <Text p={5} fontSize="xl">
          A successful customer experience strategy, at a high level, starts
          with knowing your customers, understanding marketplace data and
          conditions, and deciding how your company's mission and vision fit
          into all of that. This process ideally includes gathering input and
          involving people from all departments in your organization, not just
          team members who are in customer-facing roles. By aligning all of your
          customer insights from across your company, you maximize your ability
          to build a better customer experience and create more long-term
          customer relationships.
        </Text>
      </Box>
      <Box mt={7} ml={[10, 10, 20, 300]} w={[400, 600, 700, 800]}>
        <Grid
          p={[5, 10, 5, 10]}
          bg="#EBF8FF"
          borderRadius={20}
          templateColumns={[
            "repeat(1, 1fr)",
            "repeat(1, 1fr)",
            "repeat(1, 1fr)",
            "repeat(1, 1fr)",
          ]}
          gap={10}
        >
          <GridItem h="auto" width={["full", "full", "full", "base"]}>
            <Box>
              <Heading as="h6" size="xl" color="blue.500">
                Start building with WebTaskIt today
              </Heading>
            </Box>
          </GridItem>

          <GridItem align={["left"]}>
            <Grid
              templateColumns={[
                "repeat(1, 1fr)",
                "repeat(1, 1fr)",
                "repeat(1, 1fr)",
                "repeat(2, 1fr)",
              ]}
            >
              <GridItem>
                {" "}
                <Button colorScheme="blue">Sign up for free</Button>
              </GridItem>
              <GridItem mt="2">
                {" "}
                <Text color="blue.500">No credit card needed</Text>
              </GridItem>
            </Grid>
          </GridItem>
        </Grid>
      </Box>
      <Box mt={7} ml={[10, 10, 20, 300]} w={[400, 600, 700, 800]}>
        <Box mt={7}>
          <hr
            width="100%"
            color="black"
            style={{ border: "0.5px solid gray" }}
          />
        </Box>
      </Box>
      <Box mt={7} ml={[10, 10, 20, 300]} w={[400, 600, 700, 800]}>
        <Heading as="h4" size="md" color="gray.500">
          ABOUT THE AUTHOR
        </Heading>
        <Flex>
          <Heading mt={5} as="h6" size="xs">
            WebTaskIt's Product Team
          </Heading>
          <Text mt={4}>
            {" "}
            committed to building world-class products, and empowering
            world-class product builders on our platform.
          </Text>
        </Flex>

        <Heading mt={7} as="h4" size="md" color="gray.500">
          FILED UNDER
        </Heading>
        <Heading mt={2} as="h6" size="xs">
          Product
        </Heading>
        <Heading mt={7} as="h4" size="md" color="gray.500">
          SHARE
        </Heading>
        <Flex mt={3} gap={5}>
          <ImFacebook2 />
          <BsTwitter />
          <SiLinkedin />
        </Flex>
      </Box>
      <Grid
        mt={50}
        p={[5, 10, 5, 10]}
        bg="#EBF8FF"
        templateColumns={[
          "repeat(1, 1fr)",
          "repeat(2, 1fr)",
          "repeat(2, 1fr)",
          "repeat(2, 1fr)",
        ]}
      >
        <GridItem h="auto" width={["full", "full", "full", "base"]}>
          <Box>
            <Heading as="h6" size="xl" color="black.500">
              Join us and change how you work.
            </Heading>
          </Box>
        </GridItem>

        <GridItem align={["right"]}>
          <Button colorScheme="blue">Sign up for free</Button>
        </GridItem>
      </Grid>
    </Box>
  );
};

export default SecondOpenablePageSection;
