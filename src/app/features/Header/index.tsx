import {
  GeneralContainer,
  LogoContainer,
  SectionRight,
  SectionRightDown,
  SectionRightUp,
} from './components/Containers';
import logo from '../../../assets/logo.png';
import OptionsPage from './features/OptionsPage';
import { UserOutlined } from '@ant-design/icons';

export function Header() {
  return (
    <GeneralContainer>
      <LogoContainer>
        <img className="image__logo" src={logo} alt="" />
      </LogoContainer>
      <SectionRight>
        <SectionRightUp>
          <div
            style={{
              fontSize: '22px',
              color: '#ffffff',
              fontWeight: 'bold',
            }}
          >
            Sistema Integral De Avance & Educación Scouts
          </div>
        </SectionRightUp>
        <SectionRightDown>
          <OptionsPage />
          <UserOutlined
            style={{
              color: 'white',
              fontSize: '35px',
              width: '55px',
            }}
          />
        </SectionRightDown>
      </SectionRight>
    </GeneralContainer>
  );
}
