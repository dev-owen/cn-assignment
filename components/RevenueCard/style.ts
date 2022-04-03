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
      color: #9f9f9f;
      margin-right: 16px;
      
      img {
        margin-left: 4px;
        
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
      font-weight: 600;
      color: #1C1C1C;
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
      padding: 16px 0;
      
      img.icon {
        margin-right: 8px;
      }
      
      span {
        font-size: 14px;
      }
      
      .bigBold {
        font-size: 20px;
        font-weight: 700;
      }
      
      .criteria {
        margin-left: auto;
        font-weight: 600;
        
        img {
          position: relative;
          top: 4px;
          margin-right: 2px;
        }
      }
      
      .textContainer {
        .title {
          font-size: 14px;
          color: #1C1C1C;
          margin-bottom: 4px;
        }
        .description {
          font-size: 13px;
          color: #9F9F9F;
          font-weight: 300;
        }
      }
      
      .valueContainer {
        margin-top: 4px;
        
        img.arrowDown {
          top: 4px;
          position: relative;
        }
      }
    }
    
  }
  
  .seeMore {
    border-top: 1px solid #F5F5F5;
    color: #9F9F9F;
    text-align: center;
    font-weight: 600;
    padding: 12px 0;
    font-size: 14px;
  }
`
