import { border, Box, Container, Heading, List, ListIcon, ListItem, Text } from '@chakra-ui/react';
import React from 'react'
import { BsStars } from 'react-icons/bs';
import { FaCheckCircle } from 'react-icons/fa';
import { FaUserAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
const PaymentPro = () => {
      return (
        <Container maxWidth={'5xl'}>
          <div className="row" style={{display:'flex', padding:'50px', justifyContent:'center'}}>
            <div className="col"  >
              
            </div>
            <Box display={{'2xl':"flex", xl:"flex" }} justifyContent={'center'}width={'100%'}>
              <Checkout />
              <Container maxWidth={'sm'}  >
              <Box bg={'#d0f0fd'} borderRadius={'15'} m={'auto'} mt={'15px'} >
                <Text>Great choice! With Pro, you'll get</Text>
                <List spacing={3} textAlign="start" pt={5} px={12}>
             <Text >Pro includes :</Text>
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
                <img src="https://static.airtable.com/images/pricing/pro-checkout-banner-background-lower-highlight.png" alt='photo' />
                </Box>
                </Container>
            </Box>
          </div>
          </Container>
      )
      }

  const Checkout = (props) => (<div>
    <Box justifyContent={'left'}    >
    <Box  justifyContent={'left'}  display={'flex'} alignItems={'center'}>
    <Box height={'50px'} >
      <Heading fontSize={'25px'}><BsStars  color={'orange'}/></Heading>
    </Box>
    <Box>
    <Heading color={'gray'}  mb={'10'}>Checkout</Heading>
    </Box>
    </Box>
    <Box textAlign={'left'} width={'350px'} >
    <Text fontSize={{'2xl':"17px", xl:"16px",lg:"14px",sm:"12px", base:"11px"}} fontWeight={'500'}>You’ve selected the Pro plan for My First Workspace, billed Annually at $240 per user per year.</Text>
    </Box>
    <Box display={'flex'} alignItems={'center'}  mt={'5'} justifyContent={'space-between'}>
      <Box display={'flex'} >
      <Text>1 User</Text>
      </Box>
      <Box><FaUserAlt  color='orange'/></Box>
      <Box> 
      <Text>$288 per year</Text>
      </Box>
    </Box>
    <Box display={'flex'} alignItems={'center'}  mt={'5'} justifyContent={'space-between'}>
    <Box display={'flex'} >
      <Text>Annual plan</Text>
      </Box>
      <Box> 
      <Text color={'green'}>-$48</Text>
      </Box>
    </Box>
    <Box display={'flex'} alignItems={'center'}  mt={'5'} justifyContent={'space-between'}>
    <Box display={'flex'} >
      <Text>Sub total</Text>
      </Box>
      <Box> 
      <Text color={'green'}>$240</Text>
      </Box>
    </Box>
       <Box justifyContent={'left'} textAlign={'left'}>
       <Input  label="Enter your card details" type="number" name="card_number"/>
       <Box>
       
       <input  placeholder='CVC'  style={{border:"solid gray",marginTop:'5px', borderRadius:"5px", width:"30%" }} />
       </Box>
       <Box>
       <label>Card holder name</label>
       <input  placeholder='Card holder name'  style={{border:"solid gray",textAlign:'left',marginTop:'5px', borderRadius:"5px", width:"90%" }} />
       </Box>
        </Box>
        <Link to='/'>
        <button onClick={()=>alert("Register successfully")} style={{border:'1px solid', width:"120px", borderRadius:"10px", margin:"10px",backgroundColor:'ButtonFace'}}>Payment</button>
        </Link>
       
      
 
   </Box>
   </div>
  );
  
  const Input = (props) => (
    <div style={{ textAlign:'left',marginTop:'5px'}}>
      <label>{props.label}</label>
      <div className="input-field">
        <input  type={props.type} name={props.name} placeholder="Card number MM/YY/CVC" style={{border:"solid gray",marginTop:'5px', borderRadius:"5px", width:"90%" }} />
        
      </div>
    </div>
  );
  
export default PaymentPro