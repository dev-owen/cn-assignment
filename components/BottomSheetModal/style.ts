import styled from 'styled-components';

export const Wrapper = styled.div`
  background: rgba(0, 0, 0, 0.25);
  position: fixed;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: end;
  z-index: 2;
`;

export const ModalWrapper = styled.div`
  background: #ffffff;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  width: 360px;
  height: auto;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-end;
  @media only screen and (max-width: 320px) {
    width: 98%;
    position: relative;
  }
  display: flex;
`;

export const ContentContainer = styled.div`
  width: 100%;
  padding: 20px;
`;

export const ModalHeaderContainer = styled.div`
  width: 100%;
  display: flex;
  color: #111723;
  justify-content: end;
`;

export const CloseIconContainer = styled.img`
  :hover {
    cursor: pointer;
  }
`;
