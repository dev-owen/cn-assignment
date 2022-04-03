import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  padding: 12px 16px;
  flex-wrap: wrap;
  justify-content: space-around;
  
  .shortcut {
    display: flex;
    flex-direction: column;
    padding: 4px;
    margin: 16px;
    
    label {
      text-align: center;
      margin-top: 8px;
      font-size: 13px;
    }
  }
`;
