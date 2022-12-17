import { Heading } from '@chakra-ui/react';
import React from 'react'

const Payment_Pro = () => {
  
  
      return (
        <div className="app-container" >
          <div className="row" style={{display:'flex', padding:'50px', justifyContent:'center'}}>
            <div className="col"  >
              {/* <Item name="Instax Mini 90 Neo Classic" price="$144.99" img="http://ecx.images-amazon.com/images/I/61%2BABMMN5zL._SL1500_.jpg" /> */}
            </div>
            <div className="col no-gutters">
              <Checkout />
            </div>
          </div>
         </div>
      )
      }

  
  const Item = (props) => (
    <div className="item-container">
      <div className="item-image">
        <img src={props.img}/>
        <div className="item-details">
          <h3 className="item-name"> {props.name} </h3>
          <h2 className="item-price"> {props.price} </h2>
        </div>
      </div>
    </div>
  );
  
  const Checkout = (props) => (<div>
    <Heading mb={'10'}>Easy & Secure Payment with</Heading>
   <div className="checkout" style={{display:'flex', gap:"50px",margin:"auto"}}>
    <img Src="https://seeklogo.com/images/V/visa-logo-6F4057663D-seeklogo.com.png"  style={{margin:'10px'}}/>
      <div className="checkout-container" style={{ border:"solid black",padding:"10px",borderRadius:"10px"}}>
       <h1 className="heading-3">Credit card checkout</h1>
       {/* <Input /> */}
       <input style={{backgroundColor:'lightcyan'}} label="Cardholder's Name" type="text" name="name" />
       <Input label="Card Number" type="number" name="card_number"
        />
        <input  style={{backgroundColor:'lightcyan'}} label="Card Number" type="number" name="card_number"   />
        
        <div className="row">
          <div className="col">
            
            <input   label="Expiration Date" type="month" name="exp_date" />

          </div>
          <div className="col">

            <input style={{backgroundColor:'lightcyan'}} label="CVV" type="number" name="cvv" />
          </div>
        </div>
        {/* <Button border={'1px solid'} text="Payment"/> */}
        <button style={{border:'1px solid', width:"120px", borderRadius:"10px", margin:"10px",backgroundColor:'ButtonFace'}}>Payment</button>
      </div>
   </div>
   </div>
  );
  
  const Input = (props) => (
    <div className="input">
      <label>{props.label}</label>
      <div className="input-field">
        <input type={props.type} name={props.name} />
        <img src={props.imgSrc}/>
      </div>
    </div>
  );
  
  const Button = (props) => (
    <button className="checkout-btn" type="button">{props.text}</button>
  );
  
  
 


export default Payment_Pro