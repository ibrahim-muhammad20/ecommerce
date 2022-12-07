import React from 'react'
import styled from 'styled-components'
import { mobile } from '../responsive'

const Container=styled.div`
width:100vw;
height:100vh;
background: linear-gradient(rgba(255,255,255,0.5),rgba(255,255,255,0.2)),url("./images/shop1.jpg");
background-size:cover;
display:flex;
align-items:center;
justify-content:center;
`

const Wrapper=styled.div`
width:25%;
padding:20px;
background-color:white;
${mobile({width:"75%"})};`

const Title=styled.h1`
text-align:center;
font-size:30px;
font-weight:bold;`

const Form=styled.form`
display:flex;
flex-direction: column;
flex-wrap:wrap;`

const Input=styled.input`
flex:1;
padding:10px;
min-width:40%;
margin: 10px 0px;`


const ButtonContainer=styled.div`
display:flex;
justify-content:center;

align-items:center;`

const Button=styled.button`
border:none;
width:40%;
margin-top: 3px;
padding:15px 20px;
background-color:teal;
color:white;
cursor:pointer;
`
const Link=styled.a`
display: flex;
align-content: center;
justify-content: center;
font-style: 12px;
margin:10px 0px;
cursor:pointer;
text-decoration:underline;

&:hover{
    color:red;
}`


const Login = () => {
  return (
    <Container>
    <Wrapper>
        <Title>Sign In</Title>
        <Form>
           
            <Input placeholder='Enter you username'/>
           
            <Input placeholder='Enter you password'/>
          
        <ButtonContainer>
        <Button>Log In</Button>
        </ButtonContainer>

        <Link>Did you Forget your Password?</Link>
        <Link>Create a New Account!</Link>
        </Form>
        
        
    </Wrapper>
</Container>
  )
}

export default Login
