import { ConfigProvider, Divider } from 'antd';
import {
  ContainerGeneral,
  ContainerModalBottom,
  ContainerUsuarios,
} from './components/Containers';
import TableUsuarios from './features/TableUsuarios';
import ModalForms from './features/ModalFormsBottom';
import ModalFormsBottom from './features/ModalFormsBottom';

export function UsuariosPage() {
  return (
    <ContainerGeneral>
      <ContainerUsuarios>
        <div
          style={{
            color: '#918b91',
            fontWeight: 'bold',
            fontSize: '30px',
            marginTop: '-90px',
            marginBottom: '30px',
          }}
        >
          USUARIOS
        </div>
        <ContainerModalBottom>
          <ModalFormsBottom />
        </ContainerModalBottom>
        <Divider style={{ border: 'solid 1px #cccccc', marginTop: '1%' }} />
        <TableUsuarios />
      </ContainerUsuarios>
    </ContainerGeneral>
  );
}
