import React from "react";
import Announcements from "../components/Announcements/Announcements";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import styled from "styled-components";
import { Add, Remove } from "@material-ui/icons";
import { mobile } from "../responsive";


const Container = styled.div``;

const Wrapper = styled.div`
padding: 20px;
${mobile({ padding: "10px"})};
`;
const Title = styled.h1`
font-style: 20px;
font-weight: 300;
text-align:center`;

const Top = styled.div`

display: flex;
align-content: center;
justify-content: space-between;
padding: 30px;
`;



const TopTexts = styled.div`
${mobile({ display:"none"})};
`
const TopText = styled.span`
text-decoration:underline;
margin:0px 10px;`

const TopButton = styled.button`
padding: 10px;
font-weight: 600;
cursor:pointer;
border:${(props)=>props.color==="filled" && "none"};
background-color:${(props)=>props.color==="filled" ? "black":"transparent"};
color:${(props)=>props.color==="filled"? "white":"black"};
`;


const Bottom = styled.div`
padding:0px 20px;
display: flex;
justify-content: space-between;
${mobile({ flexDirection: "column"})};
`;

const Info = styled.div`
flex:3`;

const Product = styled.div`
display:flex;
justify-content: space-between;
${mobile({ flexDirection: "column"})}`;

const ProductDetail = styled.div`
flex:2;
display:flex;
`;

const Image= styled.img`
width: 200px;`;

const Details = styled.div`
display:flex;
padding: 20px;
justify-content: space-around;
flex-direction:column;
`;

const ProductName = styled.div``;

const ProductColor = styled.div`
width: 20px;
height: 20px;
border-radius:50%;
background-color:${props=>props.color} `;

const ProductID = styled.div``;

const ProductSize = styled.div``;


const PriceDetail = styled.div`
flex:1;
display:flex;
justify-content: center;
flex-direction: column;
align-items: center;

`;
const ProductAmountContainer = styled.div`
display:flex;
align-items: center;
margin-bottom: 20px;
`;
const Amount= styled.div`
font-size: 24px;
margin:5px;
${mobile({margin:"5px 15px"})}`;

const ProductPrice = styled.div`
font-size: 30px;
font-weight: 200;
${mobile({marginBottom:"20px"})}`;

const Hr=styled.hr`
margin:20px 0px;
background-color:#eee;
border:none;
height:1px;`


const Summary = styled.div`
flex:1;
border-radius: 10px;
border:1px solid lightgrey;
padding: 20px;
height:60vh;`;

const SummaryTitle= styled.h1`
`;
const SummaryInfo = styled.div`
display:flex;
align-items:center;
justify-content:space-between;
margin:40px 0px;
font-weight:${props=>props.text==="bold" && "900" };
font-size:${props=>props.text==="bold" && "24px" };
`;
const SummaryText = styled.span``;
const SummaryPrice= styled.span``;

const Button = styled.button`
width: 100%;
padding: 10px;
background-color: black;
color:white;
font-weight: 600;
font-size: 20px;
cursor:pointer;
`;


const Cart = () => {
  return (
    <Container>
      <Navbar />
      <Announcements />
      <Wrapper>
      <Title>YOUR BAG</Title>
        <Top>
          
          <TopButton color="je">CONTINUE SHOPPING</TopButton>
          <TopTexts>
            <TopText>Shopping Bag(2)</TopText>
            <TopText>Your Wishlist(0)</TopText>
          </TopTexts>
          <TopButton color="filled" >CHECKOUT NOW</TopButton>
        </Top>



        <Bottom>
            <Info>
             <Product>
                <ProductDetail>

                <Image src="./images/image1.png"/>

                <Details>
                    <ProductName><b>Product:</b> JESSIE SHOES   </ProductName>
                    <ProductID> <b>ID:</b>943830843</ProductID>
                    <ProductColor color="black"/>
                    <ProductSize><b>Size:</b>12</ProductSize>
                </Details>

                </ProductDetail>

                <PriceDetail>
                    <ProductAmountContainer>
                      <Add/>
                        <Amount>3</Amount>
                      <Remove/>
                    
                    </ProductAmountContainer>
                    <ProductPrice>$40</ProductPrice>
                </PriceDetail>
             
             </Product>
            <Hr />
            <Product>
                <ProductDetail>

                <Image src="./images/image2.png"/>

                <Details>
                    <ProductName><b>Product:</b> BATA STOCK  </ProductName>
                    <ProductID> <b>ID:</b>943830843</ProductID>
                    <ProductColor color="grey"/>
                    <ProductSize><b>Size:</b>10</ProductSize>
                </Details>

                </ProductDetail>

                <PriceDetail>
                    <ProductAmountContainer>
                      <Add/>
                        <Amount>2</Amount>
                      <Remove/>
                    
                    </ProductAmountContainer>
                    <ProductPrice>$20</ProductPrice>
                </PriceDetail>
             
             </Product>
            </Info>


            <Summary>
              <SummaryTitle>Order Summary</SummaryTitle>
              <SummaryInfo>
                <SummaryText>Subtotal</SummaryText>
                <SummaryPrice>$80</SummaryPrice>
              </SummaryInfo>
              <SummaryInfo>
                <SummaryText>Estimated shipping</SummaryText>
                <SummaryPrice>$5.80</SummaryPrice>
              </SummaryInfo>
              <SummaryInfo>
                <SummaryText>Shipping Discount</SummaryText>
                <SummaryPrice>$-5.90</SummaryPrice>
              </SummaryInfo>
              <SummaryInfo text="bold">
                <SummaryText>Total</SummaryText>
                <SummaryPrice>$60 </SummaryPrice>
              </SummaryInfo>
            
            <Button>Check Out Now!</Button>
            </Summary>
        
        
        </Bottom>




      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Cart;
