import styled, { css, keyframes } from "styled-components";
import { darken } from "polished";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  strong {
    font-size: 30px;
    letter-spacing: 2px;
  }
`;

export const BarOption = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Item = styled.button`
  margin: 4px 15px;
  border: none;
  background: transparent;
  border-bottom: 1px solid #ccc;
`;

export const Add = styled.form`
  display: flex;
  justify-content: center;
  margin: 15px;
  width: 400px;
  flex-direction: column;
  #description {
    resize: "none";
  }

  label {
    color: #333;
    margin: 10px 0px 0px 0px;
    font-size: 17px;
    font-weight: bold;
    span {
      font-size: 10px;
      color: red;
      font-style: italic;
    }
  }

  textarea {
    margin: 5px 0 0;
    border-radius: 4px;
    transition: ease 0.2s;
    padding: 5px 10px;
    border: 1px solid #ccc;
    :focus {
      transition: ease-in-out 0.3s;
      border: 1px solid rgba(98, 0, 238, 0.8);
    }
  }

  input {
    margin: 5px 0 0;
    height: 40px;
    border-radius: 4px;
    font-size: 16px;
    transition: ease 0.2s;
    border: 1px solid #ccc;
    padding: 5px 10px;
    :focus {
      transition: ease-in-out 0.3s;
      border: 1px solid rgba(98, 0, 238, 0.8);
    }
  }
`;
const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;
export const SubmitButton = styled.button.attrs(props => ({
  type: "submit",
  disabled: props.loading
}))`
  margin: 5px 0 0;
  height: 44px;
  background: rgba(98, 0, 238, 0.8);
  font-weight: bold;
  color: #fff;
  border: 0;
  border-radius: 4px;
  font-size: 16px;
  transition: background 0.2s;
  :hover {
    background: ${darken(0.1, "rgba(98, 0, 238, 0.8)")};
  }
  ${props =>
    props.loading &&
    css`
      svg {
        animation: ${rotate} 2s linear infinite;
      }
    `}
`;

export const Thumbnail = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 150px;
  cursor: pointer;
  input {
    display: none;
  }
  background: url(${prop => prop.preview});
  background-size: cover;
  border: 2px dashed ${props => (props.preview ? "none" : "#ccc")};
`;
