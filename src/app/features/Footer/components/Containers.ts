import styled from 'styled-components';
import { StyleConstants } from 'styles/StyleConstants';

export const GeneralContainer = styled.div`
  width: 100%;
  height: ${StyleConstants.FOOTER_HEIGHT};
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${StyleConstants.TERTIARY_COLOR_WHITE};
  font-size: 0.6rem;
  background-color: ${StyleConstants.SECUNDARY_COLOR_BLUE};
`;
