import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  padding: 12px 16px;
  flex-wrap: wrap;
  
  div.shortcut {
    display: flex;
    flex-direction: column;
    width: calc(25% - 24px);
    padding: 4px;
    margin: 12px;
    
    label {
      text-align: center;
      margin-top: 8px;
      font-size: 13px;
    }
  }
`;
