import styled from '@emotion/styled';

export const FilterInput = styled.input`
  border: 1px solid #cfcfd0;
  border-radius: 4px;
  &:hover,
  :focus {
    border-color: #7fadf7;
    outline: 1px solid #7fadf7;
  }
`;

export const FilterLabel = styled.label`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 200px;
`;
