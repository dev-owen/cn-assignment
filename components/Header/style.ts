import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding: 16px;
  border-bottom: 1px solid #F5F5F5;
  
  div.workplace {
    display: flex;
    width: 140px;
    align-items: center;
    
    :hover {
      cursor: pointer;
    }
    
    p {
      font-weight: 600;
    }
  }
  
  button.setting {
    display: flex;
    padding: 6px;
    background-color: white;
    border-radius: 4px;
    border: 1px solid #C6C6C6;
    
    img {
      margin-right: 4px;
    }
  }
`
