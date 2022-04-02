import styled from "styled-components";

export const Wrapper = styled.div`
  .badgeContainer {
    border: 1px solid gray;
    height: 48px;
    vertical-align: center;
    padding: 12px;
    border-radius: 8px;
    font-size: 14px;
    text-align: center;
    display: flex;
    justify-content: space-between;
    margin-top: 16px;
    
    span.text {
      margin-top: 2px;
    }
  
    span.badge {
      padding: 4px;
      border-radius: 4px;
      font-size: 12px;
    }
  }
  
  .imageContainer {
    display: flex;
    width: 100%;
    margin-top: 16px;
    border-radius: 16px;
    justify-content: space-between;
    padding: 0 12px;
    
    .textArea {
      display: flex;
      flex-direction: column;
      justify-content: space-evenly; 
      padding: 12px 0;
    }
    
    img {
      width: 88px;
    }
  }
`
