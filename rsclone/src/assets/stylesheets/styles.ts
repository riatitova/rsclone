import styled from 'styled-components';

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  // justify-content: space-between;
  // height: 100vh;
`;

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: #fff;
  //width: 100vw;
`;

export const FooterContainer = styled(HeaderContainer)`
  position: fixed;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 10;
`;

export const AppContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  // width: 100vw;
  min-height: 100%;
  padding: 1rem;
  // background-color: #FBFAFA;
  overflow-x: auto;
  overflow-y: auto;

  &::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px #e5e5e5;
    border-radius: 0.3rem;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #fff;
    outline: 1px solid #e4e4e4;
    border-radius: 0.3rem;
  }
  &::-webkit-scrollbar-thumb:hover {
    background-color: #e4e4e4;
    outline: 1px solid #e5e5e5;
  }
  &::-webkit-scrollbar {
    height: 0.6rem;
  }
`;

interface DragPreviewContainerProps {
  isHidden?: boolean;
  isPreview?: boolean;
}

export const DragPreviewContainer = styled.div<DragPreviewContainerProps>`
  transform: ${props => (props.isPreview ? 'rotate(1deg)' : undefined)};
  opacity: ${props => (props.isHidden ? 0 : 1)};
`;

export const ColumnContainer = styled(DragPreviewContainer)`
  background-color: #ebecf0;
  width: 18.5rem;
  min-height: 40px;
  margin-right: 20px;
  border-radius: 3px;
  padding: 8px 8px;
  flex-grow: 0;
  flex-shrink: 0;
`;

export const ColumnTitle = styled.div`
  padding: 6px 16px 12px;
  font-weight: bold;
`;

export const CardContainer = styled(DragPreviewContainer)`
  background-color: #fff;
  cursor: pointer;
  margin-bottom: 0.5rem;
  padding: 0.5rem 1rem;
  max-width: 300px;
  border-radius: 3px;
  box-shadow: #091e4240 0px 1px 0px 0px;
`;

interface AddItemButtonProps {
  dark?: boolean;
}

export const AddItemButton = styled.button<AddItemButtonProps>`
  background-color: #ffffff3d;
  border-radius: 3px;
  border: none;
  color: ${props => (props.dark ? '#000' : '#fff')};
  cursor: pointer;
  max-width: 300px;
  padding: 10px 12px;
  text-align: left;
  transition: background 85ms ease-in;
  width: 100%;
  &:hover {
    background-color: #ffffff52;
  }
`;

export const NewItemFormContainer = styled.div`
  max-width: 300px;
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: flex-start;
`;

export const NewItemInput = styled.input`
  border-radius: 3px;
  border: none;
  box-shadow: #091e4240 0px 1px 0px 0px;
  margin-bottom: 0.5rem;
  padding: 0.5rem 1rem;
  width: 100%;
`;

export const NewItemButton = styled.button`
  background-color: #5aac44;
  border-radius: 3px;
  border: none;
  box-shadow: none;
  color: #fff;
  padding: 6px 12px;
  text-align: center;
`;

export const CustomDragLayerContainer = styled.div`
  height: 100%;
  left: 0;
  pointer-events: none;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 100;
`;
