import { ReactNode } from "react";
import {
  Box,
  Stack,
  HStack,
  Heading,
  Text,
  VStack,
  useColorModeValue,
  List,
  ListItem,
  ListIcon,
  Button,
  Grid,
  GridItem,
  Image,
} from "@chakra-ui/react";
import { FaCheckCircle } from "react-icons/fa";
import { BsStars } from "react-icons/bs";
import { BsCheckLg } from 'react-icons/bs'
import QuestionNew from "./QuestionNew";
import { Link } from "react-router-dom";


function Pricing({ children }) {
  return (
    <Box>
      <Box
        mb={4}
        shadow="base"
        borderWidth="1px"
        alignSelf={{ base: "center", lg: "flex-start" }}
        borderColor={useColorModeValue("gray.200", "gray.500")}
        borderRadius={"xl"}
      >
        {children}
        
      </Box>
    </Box>
  );
}

export default function ThreeTierPricing() {
  return (
    <Box py={12} >
      <Box
        justifyContent={"center"}
        h={"12"}
        display={"flex"}
        color={"white"}
        alignItems={"center"}
        backgroundColor={"#2c40e6"}
      >
        <Box>
          <BsStars  color="orange"/>
        </Box>
        <Box>
          <Text fontSize={"xl"} ml={"2"}>
            Sign up today and try the Pro plan for free
          </Text>
        </Box>
      </Box>
      <VStack spacing={2} textAlign={"center"}>
        <Text fontSize="4xl" fontWeight={"bold"}>
          Choose the perfect plan<br></br> for your team’s needs
        </Text>
      </VStack>
      <Stack
        display={{  sm: '400px',
        md: '600px',
        lg: '700px',
        xl: 'flex',
        }} 
        direction={{ base: "column", md: "row" }}
        textAlign="center"
        justify="center"
        spacing={{ base: 4, lg: 10 }}
        py={10}
        padding={'10'}
      >
        
        <Pricing>
          
          <Box backgroundColor={"white"} padding={'10'} borderRadius={'10px 10px'}>
            <Box py={2} px={2}  textAlign={'left'}>
              <Text fontWeight="500" fontSize="2xl">
                Free
              </Text>
              <Text  fontSize={'18px'} fontWeight={'600'}>For individuals or very small <br></br> teams just getting started <br></br> with Airtable</Text>
            </Box>
              <Box pt={'10'} pb={'10'} px={'3'} textAlign={'left'}>
                <Text fontSize={'6xl'} fontWeight={'600'}>Free</Text>
              </Box>
            <VStack bg={"white"}  borderBottomRadius={"xl"}>
              <Box w="80%" pt={4}>
              <Link to='/signup'>
                <Button w="full" border={' solid black'} borderRadius={'20'} backgroundColor={"white"} >
                  Sign up
                </Button>
                </Link>
              </Box>
            
              <List spacing={3} textAlign="start" pt={5} px={12}>
             <Text >Free includes :</Text>
                <ListItem>
                  <ListIcon as={FaCheckCircle}  />
                  Unlimited bases
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle}  />
                  Up to 5 creators or editors
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle}  />
                  Unlimited commenter & read-only users
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle}  />
                  Interface Designer
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle}  />
                  1 extension per base
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle}  />
                  1 sync integration
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle}  />
                  1,200 records per base
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle}  />
                  2GB of attachments per base
                </ListItem>
                
              </List>
            </VStack>
          </Box>
        </Pricing>

        <Pricing>
          <Box padding={'10'} backgroundColor={"#ffeab6"}  borderRadius={'10px 10px'}>
            <Box py={3} px={3} textAlign={'left'}>
              <Text fontWeight="500" fontSize="2xl">
                Plus
              </Text>
              <Text  fontSize={'18px'} fontWeight={'600'}>For teams looking to create<br></br> connected apps to manage<br></br> their own workflows</Text>
              
               
            </Box>
            <Box display={'flex'} pt={'10'} pb={'10'} px={'3'} textAlign={'left'} alignItems={'center'}>
                <Text fontSize="5xl" fontWeight="900">
                  $10
                </Text>
                <Text ml={'2'} fontSize="xl">per seat/month<br></br>billed annualy</Text>
              </Box>
            <VStack bg={"#ffeab6"}  borderBottomRadius={"xl"}>
              <Box w="80%" pt={4}>
              <Link to='/signup'>
                <Button w="full" border={' solid black'} borderRadius={'20'} backgroundColor={'white'}   >
                  Try for Free
                </Button>
                </Link>
              </Box>
              <List spacing={3} textAlign="start" px={12} pt={'5'}>
                <Text >Plus includes :</Text>
                <ListItem>
                  <ListIcon as={FaCheckCircle}  />
                  Everything in Free, plus:  
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle}  />
                  3 extensions per base
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle}  />
                  3 sync integration
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle}  />
                  5,000 records per base
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle}  />
                  5GB of attachments per base
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle}  />
                  Custom branded forms
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle}  />
                  6-month revision & snapshot history
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle}  />
                  Automatic table syncing
                </ListItem>
                
              </List>
            </VStack>
          </Box>
        </Pricing>
        <Pricing>
          <Text
            textTransform="uppercase"
            bg={"#2d7ff9"}
            px={3}
            py={1}
            color={useColorModeValue("gray.900", "gray.300")}
            fontSize="sm"
            fontWeight="600"
            borderRadius={"10px 10px 0 0 "}
          >
            Most Popular
          </Text>
          <Box padding={'10'} backgroundColor={"#d0f0fd"}  > 
            <Box py={3} px={3} textAlign={'left'}>
              <Text fontWeight="500" fontSize="2xl">
                Pro
              </Text>
              <Text  fontSize={'18px'} fontWeight={'600'}>For teams and departments<br></br> who need to build <br></br>connected apps to power<br></br> their most important<br></br> processes</Text>
              <HStack justifyContent="center">
                <Text fontSize="3xl" fontWeight="600">
                  $
                </Text>
                <Text fontSize="5xl" fontWeight="900">
                  20
                </Text>
                <Text fontSize="2xl">per seat/month</Text>
              </HStack>
            </Box>

            <VStack bg={"#d0f0fd"}  borderBottomRadius={"xl"}>
              <Box w="80%" pt={4}>
              <Link to='/pricingmodal'>
                <Button w="full" borderRadius={'20'} backgroundColor={"#2d7ff9"} >
                  Try for Free
                </Button>
              </Link>
              </Box>
              <List spacing={3} textAlign="start" px={12}>
                <ListItem>
                  <ListIcon as={FaCheckCircle}  />
                  Everything in Plus, plus:  
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle}  />
                  10 extensions per base
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle}  />7 sync
                  integrations including Jira Cloud
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle}  />7 sync
                  50,000 records per base
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle}  />7 sync
                  20GB of attachments per base
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle}  />7 sync
                  Gantt & Timeline Views
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle}  />7 sync
                  Granular interface permissions
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle}  />7 sync
                  1-year revision & snapshot history
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle}  />7 sync
                  Personal & locked views
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle}  />7 sync
                  Field & table editing permissions
                </ListItem>
              </List>
            </VStack>
          </Box>
        </Pricing>
        <Pricing>
         
          <Box padding={'10'} backgroundColor={"#333333"} borderRadius={10} color={'white'}   >
            <Box py={3} px={3} textAlign={'left'}>
              <Text fontWeight="500" fontSize="2xl">
                Enterprise
              </Text>
             
              <HStack justifyContent="center" textAlign={'left'}>
                <Text fontSize="ms" pt={1} fontWeight="500" >
                For departments and organizations<br></br> who need a 
                secure, scalable, and customizable<br></br> connected 
                apps platform to stay aligned and move<br></br> work forward
                </Text>
              </HStack>
            </Box>

            <VStack backgroundColor={"#333333"} color={'white'}  borderBottomRadius={"xl"}>
              <Box w="80%" pt={4}>
              <Link to='/signup'>
                <Button w="full" border={' solid black'} borderRadius={'20'} backgroundColor={"white"} color={'black'} >
                  Contact Sales
                </Button>
              </Link>
              </Box>
              <List spacing={3} textAlign="start" pt={'4'} px={12}>
                <ListItem>
                  Everything in Pro, plus:  
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle}  />
                  Unlimited workspaces per organization
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle}  />
                  Unlimited extensions
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle}  />
                  Salesforce & Jira on-prem sync integrations
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle}  />
                  250,000 records per base
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle}  />
                  1,000GB of attachments per base
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle}  />
                  Advanced interface controls
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle}  />
                  3-year revision & snapshot history
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle}  />
                  SAML-based single sign-on
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle}  />
                  Enterprise-wide admin panel
                </ListItem>
              </List>
            </VStack>
          </Box>
        </Pricing>
      </Stack>
      {/* .................................... */}

      <Box>
        <Text color={'lightgray'} fontWeight={'500'} fontSize={'xl'}>Trusted by 300,000+ forward-thinking companies worldwide</Text>
        <Grid templateColumns='repeat(5, 1fr)' gap={10} width={'80%'} margin={'auto'}>
        <GridItem >
          <Image height={'50%'} width={'80%'} src='https://www.nicepng.com/png/full/439-4392080_logo-mccann-netflix-white-logo-png.png' alt="netflix" />
        </GridItem >
        <GridItem >
          <Image height={'50%'} width={'80%'} src='https://www.hendersonkite.com/wp-content/uploads/2013/11/expedia-02.jpg' alt="expedia" />
        </GridItem >
        <GridItem >
          <Image height={'50%'} width={'80%'} src='https://images.squarespace-cdn.com/content/v1/5890b78186e6c0dcab4b46bb/1506968262443-63M9X6VFZ0YQ78JDWLLY/BuzzFeed-Logo-Grey.png' alt="buzzfeed" />
        </GridItem >
        <GridItem >
          <Image height={'50%'} width={'80%'} src='https://png.pngitem.com/pimgs/s/20-204041_medium-logo-graphic-design-hd-png-download.png' alt="medium" />
        </GridItem >
        <GridItem >
          <Image height={'40%'} width={'80%'} src='https://images.squarespace-cdn.com/content/v1/58ee9f8a46c3c4d22308599e/1519759306317-S730YZ67UMDFW9A5C9PF/TIME.png' alt="Time" />
        </GridItem >
        </Grid>

        
        <Box margin={'auto'}   w='100%' display={{base:"none",sm:'none',lg:"flex",xl:'flex'}} gap={'5'} justifyContent={'center'}  >
          
          <Box borderRadius={'10'} w={'36%'} justifyContent={'left'}>
            <Box textAlign={'left'}><Text pt={'10'} fontSize={'2xl'} fontWeight={'bold'}>Compare our plans</Text>
            <Box textAlign={'left'} mt={'20'}>
              <Text fontSize={'xl'} >Fundamentals</Text>
              <Text fontSize={'xl'} mt={'1'}>Bases</Text>
              <Text fontSize={'xl'} mt={'1'}>Maximum Number of users</Text>
              <Text fontSize={'xl'} mt={'1'}>Record per base</Text>
              <Text fontSize={'xl'} mt={'1'}>Record per table</Text>
              <Text fontSize={'xl'} mt={'1'}>Attachment space per base</Text>
              <Text fontSize={'xl'} mt={'1'}>Revision and snapshot history</Text>
              <Text fontSize={'xl'} mt={'1'}>Rich field types including attachments, checkboxes,<br></br> dropdowns, and more</Text>
              <Text fontSize={'xl'} mt={'1'}>Web, desktop, iOS, and Android apps</Text>
              <Text fontSize={'xl'} mt={'1'}>Realtime collaboration and commenting</Text>
              <Text  fontSize={'xl'}fontWeight={'bold'} >Views</Text>
              <Text fontSize={'xl'} mt={'1'}>Grid, calendar, form, kanban, and gallery views</Text>
              <Text fontSize={'xl'} mt={'1'}>Gantt view</Text>
              <Text fontSize={'xl'} mt={'1'}>Timeline view</Text>
              <Text fontSize={'xl'} mt={'1'}>Personal and locked views</Text>
            </Box>
            </Box>
            </Box>
  
          <Box padding={'15px'} borderRadius={'10'}  w={'11%'}>
          <Box><Text margin={'3'} fontWeight={'700'} fontSize={'xl'} >Free</Text>
          <Link to='/signup'>
          <Button  
          borderRadius={40} 
          border={'1px solid black'}  
          width={{  sm: 'none',
            md: 'none',
            lg: '70px',
            xl: '80px',
            '2xl': '90px',}} fontSize={{  sm: 'none',
            md: 'none',
            lg: '14px',
            xl: '14px',
            '2xl': '14px',}} >Sign up</Button>
                    </Link>
          </Box>
          <Box justifyContent={'center'} alignItems={'center'} mt={'8'}>
              <Text fontSize={'xl'} mt={'2'}>unlimited</Text>
              <Text fontSize={'xl'} mt={'3'}>5</Text>
              <Text fontSize={'xl'} mt={'3'}>1,200</Text>
              <Text fontSize={'xl'} mt={'3'}>1,200</Text>
              <Text fontSize={'xl'} mt={'3'}>2GB</Text>
              <Text fontSize={'xl'} mt={'3'}>2-week</Text>
              <Box justifyContent={'center'}>
              <Box marginLeft={{'2xl':"60px", xl:"55px",lg:"30px" }} textAlign={'center'}><Text  fontSize={'xl'} mt={'3'}><BsCheckLg /></Text></Box>
              <Box marginLeft={{'2xl':"60px", xl:"55px",lg:"30px" }} textAlign={'center'}><Text  fontSize={'xl'} mt={'3'}><BsCheckLg /></Text></Box>
              <Box marginLeft={{'2xl':"60px", xl:"55px",lg:"30px" }} textAlign={'center'}><Text  fontSize={'xl'} mt={'3'}><BsCheckLg /></Text></Box>
              <Box marginLeft={{'2xl':"60px", xl:"55px",lg:"30px" }} textAlign={'center'}><Text  fontSize={'xl'} mt={'3'}><BsCheckLg /></Text></Box>
            </Box>
            </Box>
            <Box  justifyContent={'center'} alignItems={'center'} mt={'12'}>
              
              <Box marginLeft={{'2xl':"60px", xl:"55px",lg:"30px" }} textAlign={'center'}><Text  fontSize={'xl'} mt={'3'}><BsCheckLg /></Text></Box>
              <Box marginLeft={{'2xl':"60px", xl:"55px",lg:"30px" }} textAlign={'center'}><Text  fontSize={'xl'} mt={'3'}><BsCheckLg /></Text></Box>
              <Box marginLeft={{'2xl':"60px", xl:"55px",lg:"30px" }} textAlign={'center'}><Text  fontSize={'xl'} mt={'3'}><BsCheckLg /></Text></Box>
              <Box marginLeft={{'2xl':"60px", xl:"55px",lg:"30px" }} textAlign={'center'}><Text  fontSize={'xl'} mt={'3'}><BsCheckLg /></Text></Box>
            </Box>
            </Box>


          <Box bg={"#ffeab6"} borderRadius={'10'}  padding={'15px'}  w={'11%'}><Box><Text margin={'3'} fontWeight={'700'} fontSize={'xl'} >Plus</Text>
          <Link to='/signup'> 
          <Button borderRadius={40} border={'1px solid black'}           width={{  sm: 'none',
  md: 'none',
  lg: '85px',
  xl: '90px',
  '2xl': '90px',}} fontSize={{  sm: 'none',
  md: 'none',
  lg: '14px',
  xl: '14px',
  '2xl': '14px',}}>Try for free</Button>
  </Link>
          </Box>
          <Box  justifyContent={'center'} alignItems={'center'} mt={'8'}>
              <Text fontSize={'xl'} mt={'2'}>unlimited</Text>
              <Text fontSize={'xl'} mt={'3'}>unlimited</Text>
              <Text fontSize={'xl'} mt={'3'}>5,000</Text>
              <Text fontSize={'xl'} mt={'3'}>5,000</Text>
              <Text fontSize={'xl'} mt={'3'}>5GB</Text>
              <Text fontSize={'xl'} mt={'3'}>6-months</Text>
              <Box justifyContent={'center'}>
              <Box marginLeft={{'2xl':"60px", xl:"55px",lg:"30px" }} textAlign={'center'}><Text  fontSize={'xl'} mt={'3'}><BsCheckLg /></Text></Box>
              <Box marginLeft={{'2xl':"60px", xl:"55px",lg:"30px" }} textAlign={'center'}><Text  fontSize={'xl'} mt={'3'}><BsCheckLg /></Text></Box>
              <Box marginLeft={{'2xl':"60px", xl:"55px",lg:"30px" }} textAlign={'center'}><Text  fontSize={'xl'} mt={'3'}><BsCheckLg /></Text></Box>
              <Box marginLeft={{'2xl':"60px", xl:"55px",lg:"30px" }} textAlign={'center'}><Text  fontSize={'xl'} mt={'3'}><BsCheckLg /></Text></Box>
            </Box>
            <Box justifyContent={'center'} alignItems={'center'} mt={'12'}>
              
              <Box marginLeft={{'2xl':"60px", xl:"55px",lg:"30px" }} textAlign={'center'}><Text  fontSize={'xl'} mt={'3'}><BsCheckLg /></Text></Box>
              <Box marginLeft={{'2xl':"60px", xl:"55px",lg:"30px" }} textAlign={'center'}><Text  fontSize={'xl'} mt={'3'}><BsCheckLg /></Text></Box>
              <Box marginLeft={{'2xl':"60px", xl:"55px",lg:"30px" }} textAlign={'center'}><Text  fontSize={'xl'} mt={'3'}><BsCheckLg /></Text></Box>
              <Box marginLeft={{'2xl':"60px", xl:"55px",lg:"30px" }} textAlign={'center'}><Text  fontSize={'xl'} mt={'3'}><BsCheckLg /></Text></Box>
            </Box>
            </Box>
          </Box>
          <Box padding={'15px'} borderRadius={'10'} bg={'#d0f0fd'} w={'11%'}><Box><Text margin={'3'} fontWeight={'700'} fontSize={'xl'} >Pro</Text>
          <Link to='/pricingmodal'>
          <Button bg={'#2d7ff9'} borderRadius={40} 
          width={{  sm: 'none',
          md: 'none',
          lg: '80px',
          xl: '90px',
          '2xl': '90px',}} fontSize={{  sm: 'none',
          md: 'none',
          lg: '14px',
          xl: '14px',
          '2xl': '14px',}} >Try for free</Button>
          </Link>
          </Box>
          <Box justifyContent={'center'} alignItems={'center'} mt={'8'}>
              <Text fontSize={'xl'} mt={'2'}>unlimited</Text>
              <Text fontSize={'xl'} mt={'3'}>unlimited</Text>
              <Text fontSize={'xl'} mt={'3'}>50,000</Text>
              <Text fontSize={'xl'} mt={'3'}>50,000</Text>
              <Text fontSize={'xl'} mt={'3'}>20GB</Text>
              <Text fontSize={'xl'} mt={'3'}>2-years</Text>
              <Box justifyContent={'center'}>
              <Box marginLeft={{'2xl':"60px", xl:"55px",lg:"30px" }} textAlign={'center'}><Text  fontSize={'xl'} mt={'3'}>< BsCheckLg /></Text></Box>
              <Box marginLeft={{'2xl':"60px", xl:"55px",lg:"30px" }} textAlign={'center'}><Text  fontSize={'xl'} mt={'3'}><BsCheckLg /></Text></Box>
              <Box marginLeft={{'2xl':"60px", xl:"55px",lg:"30px" }} textAlign={'center'}><Text  fontSize={'xl'} mt={'3'}><BsCheckLg /></Text></Box>
              <Box marginLeft={{'2xl':"60px", xl:"55px",lg:"30px" }} textAlign={'center'}><Text  fontSize={'xl'} mt={'3'}><BsCheckLg /></Text></Box>
            </Box>
            <Box justifyContent={'center'} alignItems={'center'} mt={'12'}>
              
              <Box marginLeft={{'2xl':"60px", xl:"55px",lg:"30px" }} textAlign={'center'}><Text  fontSize={'xl'} mt={'3'}><BsCheckLg /></Text></Box>
              <Box marginLeft={{'2xl':"60px", xl:"55px",lg:"30px" }} textAlign={'center'}><Text  fontSize={'xl'} mt={'3'}><BsCheckLg /></Text></Box>
              <Box marginLeft={{'2xl':"60px", xl:"55px",lg:"30px" }} textAlign={'center'}><Text  fontSize={'xl'} mt={'3'}><BsCheckLg /></Text></Box>
              <Box marginLeft={{'2xl':"60px", xl:"55px",lg:"30px" }} textAlign={'center'}><Text  fontSize={'xl'} mt={'3'}><BsCheckLg /></Text></Box>
            </Box>
            </Box></Box>

          <Box padding={'15px'} borderRadius={'10'} bg={'#333333'} color={'white'} w={'11%'}><Box>
            <Text margin={'3'} fontWeight={'700'} fontSize={{
            sm: 'none',
  md: 'none',
  lg: '11px',
  xl: '18px',
  '2xl': '20px',}} >Enterprize</Text>
  <Link to='/signup'>
  <Button borderRadius={40} border={'1px solid black'} color='black'          width={{  sm: 'none',
  md: 'none',
  lg: '90px',
  xl: '90px',
  '2xl': '100px',}}
  fontSize={{  sm: 'none',
  md: 'none',
  lg: '14px',
  xl: '13px',
  '2xl': '14px',}} >Contact sales</Button>
  </Link>
  </Box>
          <Box justifyContent={'center'} alignItems={'center'} mt={'8'}>
              <Text fontSize={'xl'} mt={'2'}>unlimited</Text>
              <Text fontSize={'xl'} mt={'3'}>unlimited</Text>
              <Text fontSize={'xl'} mt={'3'}>2,50,000</Text>
              <Text fontSize={'xl'} mt={'3'}>100,000</Text>
              <Text fontSize={'xl'} mt={'3'}>1000GB</Text>
              <Text fontSize={'xl'} mt={'3'}>3-years</Text>
              <Box justifyContent={'center'}>
              <Box marginLeft={{'2xl':"60px", xl:"55px",lg:"30px" }} textAlign={'center'}><Text  fontSize={'xl'} mt={'3'}><BsCheckLg /></Text></Box>
              <Box marginLeft={{'2xl':"60px", xl:"55px",lg:"30px" }} textAlign={'center'}><Text  fontSize={'xl'} mt={'3'}><BsCheckLg /></Text></Box>
              <Box marginLeft={{'2xl':"60px", xl:"55px",lg:"30px" }} textAlign={'center'}><Text  fontSize={'xl'} mt={'3'}><BsCheckLg /></Text></Box>
              <Box marginLeft={{'2xl':"60px", xl:"55px",lg:"30px" }} textAlign={'center'}><Text  fontSize={'xl'} mt={'3'}><BsCheckLg /></Text></Box>
            </Box>
            <Box justifyContent={'center'} alignItems={'center'} mt={'12'}>
              
              <Box marginLeft={{'2xl':"60px", xl:"55px",lg:"30px" }} textAlign={'center'}><Text  fontSize={'xl'} mt={'3'}><BsCheckLg /></Text></Box>
              <Box marginLeft={{'2xl':"60px", xl:"55px",lg:"30px" }} textAlign={'center'}><Text  fontSize={'xl'} mt={'3'}><BsCheckLg /></Text></Box>
              <Box marginLeft={{'2xl':"60px", xl:"55px",lg:"30px" }} textAlign={'center'}><Text  fontSize={'xl'} mt={'3'}><BsCheckLg /></Text></Box>
              <Box marginLeft={{'2xl':"60px", xl:"55px",lg:"30px" }} textAlign={'center'}><Text  fontSize={'xl'} mt={'3'}><BsCheckLg /></Text></Box>
            </Box>
            </Box></Box>
        </Box>
            <Box margin={'auto'} mt={'5'} w={'80%'}>
              <Text>* Service levels determined based on spend; customer base trainings and base build services available to qualified customers as set forth on an applicable order form. Services expire if they are not utilized within the contract term.</Text>
            </Box>
            <Box mt={'10'}>
              <Heading fontSize={{'2xl':'40px', xl:"40px", lg:'35px',xl:"35px",sm:"35px", base:'26px'}}>Have additional questions?</Heading>
              <Box display={'flex'} justifyContent={'center'} mt={'5'} gap={'16'}>
                <Box><Text color={'gray'}>BILLING / PRICING</Text><Text color={'blue'} >Billing FAQ</Text></Box>
                <Box><Text color={'gray'}>SPECIAL PLANS FOR</Text><Text color={'blue'}>Nonprofits or Education</Text></Box>
                <Box><Text color={'gray'}>ENTERPRISE PLANS</Text><Text color={'blue'}>Contact sales</Text></Box>
              </Box>
            </Box>
            <Box mt={'10'}>
              <Heading>Frequently asked questions</Heading>
              <Box mt={'10'}>
                <QuestionNew />
              </Box>
            </Box>
      </Box>
    </Box>
  );
}
