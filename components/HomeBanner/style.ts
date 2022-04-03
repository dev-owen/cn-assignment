import styled from "styled-components";

export const Wrapper = styled.div`
  
  :hover {
    cursor: pointer;
  }
  
  .badgeContainer {
    height: 48px;
    vertical-align: center;
    padding: 12px;
    border-radius: 12px;
    font-size: 14px;
    text-align: center;
    display: flex;
    justify-content: space-between;
    margin-top: 16px;
    
    span.text {
      margin-top: 4px;
    }
  
    span.badge {
      padding: 5px 7px;
      border-radius: 6px;
      font-size: 12px;
      color: white;
    }
    
    img {
      width: 16px;
      height: 16px;
      margin-top: 4px;
    }
  }
  
  .imageContainer {
    display: flex;
    width: 100%;
    margin-top: 16px;
    border-radius: 16px;
    justify-content: space-between;
    padding: 0 20px;
    
    .textArea {
      display: flex;
      flex-direction: column;
      justify-content: space-evenly; 
      padding: 20px 0;
      
      .titleText {
        font-size: 14px;
        font-weight: 600;
      }
      
      .descriptionText {
        font-size: 13px;
      }
    }
    
    img {
      width: 88px;
    }
  }
`
