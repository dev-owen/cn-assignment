import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding: 16px 12px;
  border-bottom: 1px solid #c0c0c0;
  
  div.workplace {
    display: flex;
    width: 140px;
    align-items: center;
    
    p {
      font-weight: bold;
    }
  }
  
  button.setting {
    display: flex;
    padding: 6px;
    background-color: white;
    border-radius: 4px;
    border: 1px solid #C6C6C6;
  }
`
