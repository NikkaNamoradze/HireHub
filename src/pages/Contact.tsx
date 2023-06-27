import React from 'react'
import ContactForm from '../components/contact/ContactForm'

function Contact() {


  
  return (

    <>
    <ContactForm onSubmit={function (name: string, email: string, message: string): void {
        throw new Error('Function not implemented.')
      } }/>

    </>
  )
}

export default Contact