import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: white;
  padding: 16px;
  border-radius: 12px;
  margin-top: 16px;
  
  .topBar {
    border-bottom: 1px solid gray;
    display: flex;
    padding-bottom: 12px;
    
    .topBarLabel {
      font-weight: 500;
      color: gray;
      margin-right: 8px;
    }
    
    .selected {
      font-weight: 700;
      color: black;
    }
  }
  
  .cardContent {
    
    .cardItem {
      display: flex;
      justify-content: space-between;
      padding: 12px 0;
      
      .bigBold {
        font-size: 20px;
        font-weight: 700;
      }
      
      .criteria {
        margin-left: auto;
      }
    }
    
  }
  
  .seeMore {
    border-top: 1px solid #cecece;
    color: #cecece;
    text-align: center;
    font-weight: 500;
    padding: 12px 0;
  }
`
