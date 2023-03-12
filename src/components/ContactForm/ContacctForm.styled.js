import styled from '@emotion/styled';

import {
  Form as FormikForm,
  Field as FormikField,
  ErrorMessage as FormikError,
} from 'formik';

export const Form = styled(FormikForm)`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const Field = styled(FormikField)`
  width: 200px;
  border-radius: 5px;
  border: 1px solid #cfcfd0;
  border-radius: 4px;
  &:hover,
  :focus {
    border-color: #7fadf7;
    outline: 1px solid #7fadf7;
  }
`;

export const ErrorMessage = styled(FormikError)`
  color: red;
`;

export const FormLable = styled.label`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const ButtonSubmit = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  width: 200px;
  border: 1px solid #cfcfd0;
  border-radius: 5px;
  padding: 2px 6px;
  &:hover,
  :focus {
    background-color: #7fadf7;
    color: #f4f6f9;
  }
`;
