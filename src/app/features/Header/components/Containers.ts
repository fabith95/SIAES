import styled from 'styled-components';
import { StyleConstants } from 'styles/StyleConstants';

export const GeneralContainer = styled.div`
  width: 100%;
  height: ${StyleConstants.HEADER_HEIGHT};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: ${StyleConstants.SECUNDARY_COLOR_BLUE};
`;

export const LogoContainer = styled.div`
  width: 10%;
  display: flex;
  flex-direction: row;
  margin-left: ${StyleConstants.MARGIN_SPACE_LEFT};

  .image__logo {
    width: 100%;
  }
`;

export const SectionRight = styled.div`
  width: 45%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-right: ${StyleConstants.MARGIN_SPACE_RIGHT};
`;

export const SectionRightUp = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  margin-right: 75%;
`;

export const SectionRightDown = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`;
