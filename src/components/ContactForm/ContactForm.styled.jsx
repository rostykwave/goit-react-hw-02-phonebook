import styled from 'styled-components';
import { Field, Form } from 'formik';

const Input = styled(Field)`
  border: 1px solid rgba(33, 33, 33, 0.2);
  :focus-visible {
    outline: 2px solid #2196f3;
  }
`;

const FormWrap = styled(Form)`
  display: flex;
  flex-direction: column;
  width: 300px;
  padding: 30px 15px;
  border: 1px solid black;
`;

const FormField = styled.label`
  position: relative;
  :not(:last-child) {
    margin-bottom: 28px;
  }
`;

const FormLabel = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  transform: translateY(calc(-100% + -4px));
`;

const ErrorText = styled.p`
  color: red;
`;

const SubmitBtn = styled.button`
  border: none;
  font: inherit;
  cursor: pointer;
  outline: none;

  margin-top: 20px;
  display: block;

  max-width: 100px;
  padding: 7px 4px;

  font-size: 13px;

  border-radius: 4px;

  :hover {
    background-color: #c8e4fc;
  }
`;

export { Input, ErrorText, FormWrap, FormField, FormLabel, SubmitBtn };
