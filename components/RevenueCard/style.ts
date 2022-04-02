import styled from "styled-components";

export const Wrapper = styled.div<{hasHeaderCriteria: boolean}>`
  background-color: white;
  padding: 16px;
  border-radius: 12px;
  margin-top: 16px;
  
  
  .topBar {
    border-bottom: 1px solid #e5e5e5;
    display: flex;
    padding-bottom: 12px;
    justify-content: ${props => props.hasHeaderCriteria ? 'space-between' : 'block'};
    
    .topBarLabel {
      font-weight: 500;
      color: gray;
      margin-right: 12px;
      
      img {
        margin-left: 2px;
        
        &.isNew {
          position: relative;
          top: 2px;
        }
        
        &.bigRedDot {
          margin-bottom: 8px;
        }
      }
    }
    
    .selected {
      font-weight: 700;
      color: black;
    }
  }
  
  .headerCriteria {
    font-size: 13px;
    color: #9f9f9f;
    margin-left: auto;
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
        
        img {
          position: relative;
          top: 4px;
          margin-right: 2px;
        }
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
