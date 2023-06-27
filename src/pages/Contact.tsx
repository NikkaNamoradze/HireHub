import ContactForm from '../components/contact/ContactForm'

function Contact() {


  
  return (

    <>
    <ContactForm onSubmit={function (): void {
        throw new Error('Function not implemented.')
      } }/>

    </>
  )
}

export default Contact