import { Form, ErrorMessage } from 'formik';
import styled from 'styled-components';

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 10px 15px;
  width: 800px;
  border-radius: 4px;
  border: 1px solid black;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const StyledError = styled(ErrorMessage)`
  color: red;
  font-size: 14px;
`;
