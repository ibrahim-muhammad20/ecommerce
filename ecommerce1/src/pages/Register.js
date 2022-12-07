import React from 'react'
import styled from 'styled-components'
import { mobile } from '../responsive'

const Container=styled.div`
width:100vw;
height:100vh;
background: linear-gradient(rgba(255,255,255,0.5),rgba(255,255,255,0.2)),url("./images/image1.png");
display:flex;
align-items:center;
justify-content:center;
`

const Wrapper=styled.div`
width:40%;
padding:20px;
background-color:white;
${mobile({ width:"75%" })};`

const Title=styled.h1`
text-align:center;
font-size:30px;
font-weight:bold;`

const Form=styled.form`
display:flex;
flex-wrap:wrap;`

const Input=styled.input`
flex:1;
padding:10px;
min-width:40%;
margin:20px 10px 0px 0px;`

const Agreeament=styled.h2`
font-size:12px;
margin:20px 0px;
text-align:center;`

const ButtonContainer=styled.div`
display:flex;
justify-content:center;

align-items:center;`
const Button=styled.button`
border:none;
width:40%;
padding:15px 20px;
background-color:teal;
color:white;
cursor:pointer;
`




const Register = () => {
  return (
    <Container>
        <Wrapper>
            <Title>Create an Account</Title>
            <Form>
                <Input placeholder='Enter you name'/>
                <Input placeholder='Enter you last name'/>
                <Input placeholder='Enter you username'/>
                <Input placeholder='Enter you email'/>
                <Input placeholder='Enter you password'/>
                <Input placeholder='Confirm Password'/>
                <Agreeament>Kindly comfirm that you have provided authorized information.</Agreeament>
            </Form>
            <ButtonContainer>
            <Button>Register Now!</Button>
            </ButtonContainer>
            
        </Wrapper>
    </Container>
  )
}

export default Register
    