import React from 'react'
import { MainContainer,InnerContainer,RowContainer,ColumnContainer, LeftContainer, RightContainer } from '../Styles/Page4/Form.styled'
import Form1 from './Form1'
import Form2 from './Form2 ';
import Form3 from './Form3'
import Form4 from './Form4'
import Form5 from './Form5'

const onSubmit = async (values, actions) => {
    console.log(values);
    console.log(actions);
  
    await new Promise((resolve) => setTimeout(resolve, 100));
    actions.resetForm();
  };
  
function ContactForm() {
    
  return (
    <>
    <MainContainer>
        <InnerContainer>
          <ColumnContainer>
            <Form1></Form1>
            <Form2></Form2>
          </ColumnContainer>
          <ColumnContainer>
            <Form3></Form3>
            <Form4></Form4>
          </ColumnContainer>
          <RowContainer>
            <Form5></Form5>
          </RowContainer>

        </InnerContainer>
    </MainContainer>
    </>
  )
}

export default ContactForm