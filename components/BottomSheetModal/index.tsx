import React from 'react';
import * as $ from './style';

interface IFormModal {
  isOpenBottomSheet: boolean;
  toggle: (flag: boolean) => void;
  children: any;
}

const BottomSheetModal = ({
                            isOpenBottomSheet,
                            toggle,
                            children,
                          }: IFormModal) => {
  if (isOpenBottomSheet) {
    return (
      <$.Wrapper onClick={() => toggle(false)}>
        <$.ModalWrapper>
          <$.ContentContainer
            onClick={(e) => e.stopPropagation()}
          >
            <$.ModalHeaderContainer>
              <$.CloseIconContainer
                src="/icons/ic_system_dismiss.svg"
                alt="아이콘"
                onClick={() => toggle(false)}
              />
            </$.ModalHeaderContainer>
            {children}
          </$.ContentContainer>
        </$.ModalWrapper>
      </$.Wrapper>
    );
  } else return null;
};

export default BottomSheetModal;
