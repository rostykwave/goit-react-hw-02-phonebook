import styled from 'styled-components';
import { Field } from 'formik';

const Input = styled(Field)`
  border: 1px solid rgba(33, 33, 33, 0.2);
  :focus-visible {
    outline: 2px solid #2196f3;
  }
`;

export { Input };
