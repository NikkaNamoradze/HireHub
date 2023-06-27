import React, { useState, FormEvent } from 'react';
import styled from 'styled-components';

interface ContactFormProps {
  onSubmit: (name: string, email: string, message: string) => void;
}

const ContactForm: React.FC<ContactFormProps> = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onSubmit(name, email, message);
    // Reset form fields
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <FormContainer>
      <FormTitle>Contact Us</FormTitle>
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <Input
          type="email"
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <TextArea
          placeholder="Your Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />
        <SubmitButton type="submit">Send Message</SubmitButton>
      </Form>
    </FormContainer>
  );
};

export default ContactForm;

const FormContainer = styled.div`
  max-width: 400px;
  margin: 30px auto;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const FormTitle = styled.h2`
  margin-bottom: 20px;
  font-size: 24px;
  font-weight: bold;
  color: #333;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  margin-bottom: 16px;
  font-size: 16px;

  padding: 14px;
  border-radius: 18px;
  border: 1px solid #ccc;
  background-color: #e4e4e4;
`;

const TextArea = styled.textarea`
  margin-bottom: 16px;
  font-size: 16px;
  resize: vertical;
  max-height: 200px;
  padding: 14px;
  border-radius: 18px;
  border: 1px solid #ccc;
  background-color: #e4e4e4;
`;

const SubmitButton = styled.button`
  padding: 12px;
  background-color: #333;
  color: #fff;
  font-size: 16px;
  font-weight: bold;
  border: none;
  border-radius: 120px;
  cursor: pointer;
  text-align: center;

  &:hover {
    background-color: #555;
  }
`;

