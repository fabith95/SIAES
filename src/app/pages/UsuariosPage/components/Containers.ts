import styled from 'styled-components';
import { StyleConstants } from 'styles/StyleConstants';

export const ContainerGeneral = styled.div`
  width: 100%;
  height: ${StyleConstants.PAGES_HEIGHT};
  display: flex;
  justify-content: center;
`;
export const ContainerUsuarios = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const ContainerModalBottom = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
`;