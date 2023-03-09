import styled from 'styled-components';
import { Form, Field } from 'formik';
import { AiOutlineSearch } from 'react-icons/ai';

export const Forma = styled(Form)`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 400px;
  margin-left: 20px;
  margin-top: 10px;
  background-color: #fff;
  border-radius: 3px;
  overflow: hidden;
  border: 1px solid;
`;

export const Input = styled(Field)`
  display: inline-block;
  width: 100%;
  font: inherit;
  font-size: 20px;
  border: none;
  outline: none;

  padding-left: 8px;
  padding-right: 8px;

  ::placeholder {
    font: inherit;
    font-size: 18px;
  }
`;

export const SearchButton = styled.button`
  display: inline-block;
  width: 48px;
  height: 32px;
  border: 0;
  opacity: 0.6;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  outline: none;

  :hover {
    opacity: 1;
  }
`;

export const SearchLabel = styled(AiOutlineSearch)`
  width: 100%;
  height: 100%;
`;
