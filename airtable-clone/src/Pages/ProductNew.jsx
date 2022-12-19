import {
    Box,
    Button,
    Flex,
    Grid,
    GridItem,
    Heading,
    Image,
    Stack,
    Text,
    useBreakpointValue,
  } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

  import Question from '../Components/QuestionNew';


  
  export function Product() {
    return (
        <Box>
      <Stack bg={'#ebf7fc'} minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
        <Flex p={8} flex={1} align={'center'} justify={'center'}>
          <Stack spacing={6} w={'full'} maxW={'lg'} textAlign={'left'}>
            <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
              <Text
                as={'span'}
                position={'relative'}
                _after={{
                  content: "''",
                  width: 'full',
                  height: useBreakpointValue({ base: '20%', md: '30%' }),
                  position: 'absolute',
                  bottom: 1,
                  left: 0,
                  bg: 'blue.400',
                  zIndex: -1,
                }}>
                Your platform for building connected apps
              </Text>
              <br />{' '}
              <Text fontSize={{"2xl":'18px',xl:"18px", lg:"16px" }} color={'#0076a8'} mt={'4'}>
              Discover the single platform where teams can use shared data to build their own apps, connecting work and teams across the organization.
              </Text>{' '}
            </Heading>
            <Stack direction={{ base: 'column', }} spacing={6}>
            <Link to='/signup'>
              <Button
                rounded={'full'}
                bg={'blue.400'}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }}>
                Sign up for free
              </Button>
              </Link>
              <Button rounded={'full'}>or contact sales</Button>
            </Stack>
          </Stack>
        </Flex>
        <Flex flex={2}>
          <Image 
            alt={'Login Image'}
            // objectFit={'cover'}
            src={
              'https://images.ctfassets.net/wl95ljfippl8/7BVPICB7N2Ks0WvnXoCGRn/4a853110569f558185722c55cfdc1829/Tier1_WebHero_3024x2342.png?w=3840'
            }
          />
        </Flex>
      </Stack>
      
      {/* ................... */}
      
      
      
    {/* ...... */}
     <Box>
        <Box display={{xl:'flex', '2xl':"flex", lg:'flex', sm:"block"}} mt={'10'} mb={'10'} alignItems={'center'} justifyContent={'space-around'}>
            <Box>
                <Text fontSize={'2xl'} color={'gray'}>Features</Text>
                <Heading>Unite your data and workflows</Heading>
            </Box>
            <Box>
            <Text fontSize={'2xl'} color={'gray'}>End silos with a unique platform that connects every part of your work.</Text>
            </Box>
        </Box>
        <Box>
        <Stack mt={'10'} bg={'white'} minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
        <Flex p={8} flex={1} align={'center'} justify={'center'}>
          <QuestionNew />
        </Flex>
        <Flex flex={1.5}>
          <Image borderRadius={'10'}
            alt={'Login Image'}
            src={
              'https://images.ctfassets.net/wl95ljfippl8/3JY4VpJOL1krrUiZqBUzc6/cd26e579de25713b344925b83d6ac35f/Tier1-Product-Launch-Accordion-01.png'
            }
          />
        </Flex>
      </Stack>
    {/* ...... */}
    <Box bg={'#f0f6ff'} mt={5}>
        <Box  display={'flex'}>
            <Box marginLeft={'15%'} mt={'10'}  mb={'5%'} textAlign={'left'}>
                <Text fontSize={'30'} color={'gray'}>Integrations</Text>
                <Heading fontSize={{xl:'50', '2xl':"50", lg:'40', sm:'30', base:'25'}}>Keep using your favorite <br></br>
                    tools</Heading>
            </Box>
            <Box  marginLeft={'15%'} mt={'10'}  mb={'5%'} textAlign={'left'}>
                <Text fontSize={{xl:'24', '2xl':"24", lg:"22", sm:"20", base:"18"}}>Whatever your role, you can easily bring<br></br> information from your most-used tools into your <br></br>Airtable workflows.</Text>
                <Box><Text fontSize={'18'} mt={'10'} color={'blue'} fontWeight={'bold'}>See all integrations</Text></Box>
            </Box>
        </Box>
        <Box  margin={'auto'} ml={'90px'}  justifyContent={'center'} p={'0 20px 25px 20px '}>
            <Grid  templateColumns={{xl:'repeat(7, 1fr)', '2xl':"repeat(7, 1fr)",lg:"repeat(7, 1fr)", sm:'repeat(2, 1fr)', base:'repeat(2, 1fr)'}} gap={1}>
            <GridItem>
                <Image src="https://images.ctfassets.net/wl95ljfippl8/2sSePsuXICh6ITMll9TDlZ/1c770b67aff47eb708ccfe7013a129fd/Salesforce.svg?w=3840" alt="photo"/>
            </GridItem>
            <GridItem>
            <Image src="https://images.ctfassets.net/wl95ljfippl8/7jYSS3fFrJOOX87kbH9Gut/ca37d033cd1933c707683456f65009a4/App-Slack.svg?w=3840" alt="photo"/>
            </GridItem>
            <GridItem>
            <Image src="https://images.ctfassets.net/wl95ljfippl8/3uTy0VwtXaGepuE0PqjU2i/54e68c86f2a4f6663816ec50f8bc3284/Box.svg?w=3840" alt="photo"/>
            </GridItem>
            <GridItem>
            <Image src="https://images.ctfassets.net/wl95ljfippl8/7dUTIeGwJcGg6YdmAMfDOH/f0a182b0e8f6d73dbf6921107dd080dc/Jira_Cloud.svg?w=3840" alt="photo"/>
            </GridItem>
            <GridItem>
            <Image src="https://images.ctfassets.net/wl95ljfippl8/5olGPM2GJAVEeXUrKUGk7i/c6841aada098f606fde852f94ab10924/Google_Drive.svg?w=3840" alt="photo"/>
            </GridItem>
            <GridItem>
            <Image src="https://images.ctfassets.net/wl95ljfippl8/glcJTPvFG4jLkBiPwZfEb/1d0b826b74a00defcefa7e164f5e8000/Hootsuite.svg?w=3840" alt="photo"/>
            </GridItem>
            <GridItem>
            <Image src="https://images.ctfassets.net/wl95ljfippl8/2XePJ45tfScIXmfgTbSbgE/d6d8bdba99b8175b2a1fb17b024ec1fa/Gmail.svg?w=3840" alt="photo"/>
            </GridItem>
            </Grid>
        </Box>
     </Box>
    {/* ...... */}
    <Box margin={'auto'} width={'80%'} mt={'5'} textAlign={"center"}>
        <Heading  color={'gray'}>
            FAQ
        </Heading>
        <Box>
            <Box mb={'10'} mt={'10'}>
                <Heading>
            You have questions? We have answers.
                </Heading>
            </Box>
            <QuestionNew />
        </Box>
      </Box>
    {/* ...... */}
      <Stack mt={'10'} bg={'#ebf7fc'} minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
        <Flex p={8} flex={1} align={'center'} justify={'center'}>
          <Stack spacing={6} w={'full'} maxW={'lg'} textAlign={'left'}>
            <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
              <Text
                as={'span'}
                position={'relative'}
                _after={{
                  content: "''",
                  width: 'full',
                  height: useBreakpointValue({ base: '20%', md: '30%' }),
                  position: 'absolute',
                  bottom: 1,
                  left: 0,
                  bg: 'blue.400',
                  zIndex: -1,
                }}>
                Start building in Airtable today
              </Text>
              <br />{' '}
            </Heading>
            <Stack direction={{ base: 'column',md:'row' }} textAlign={'center'} spacing={6}>
             
              <Link to='/signup'>
                <Button
                rounded={'full'}
                bg={'#1b61c9'}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }}>
                Sign up for free
              </Button>
              </Link>

              <Text>No creditcard needed</Text>
            </Stack>
          </Stack>
        </Flex>
        <Flex flex={1.5}>
          <Image 
          borderRadius={'10'}
            alt={'Login Image'}
            src={
              'https://images.ctfassets.net/wl95ljfippl8/1EKs251MySzNhfjEzRBgpP/95bcb5810ac8dc516dbdea31076b2361/Tier1-Product-Launch_4_3_Pre_footer.png?w=3840'
            }
          />
        </Flex>
      </Stack>
        </Box>
     </Box>
     
      </Box>
    );
  }