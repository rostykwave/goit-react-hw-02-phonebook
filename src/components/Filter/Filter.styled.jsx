import styled from 'styled-components';

export const FilterField = styled.label`
  position: relative;
  margin-top: 30px;
`;

export const FilterLabel = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  transform: translateY(calc(-100% + -4px));
`;

export const FilterInput = styled.input`
  border: 1px solid rgba(33, 33, 33, 0.2);
  :focus-visible {
    outline: 2px solid #2196f3;
  }
`;
