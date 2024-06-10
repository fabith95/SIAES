import { ConfigProvider, Divider } from 'antd';
import {
  ContainerGeneral,
  ContainerModalBottom,
  ContainerRamas,
} from './components/Containers';
import ModalForms from './features/ModalFormsBottom';
import ModalFormsBottom from './features/ModalFormsBottom';
import TableGeneral from './features/TableGeneral';

export function RamasPage() {
  return (
    <ContainerGeneral>
      <ContainerRamas>
        <div
          style={{
            color: '#0F2533',
            fontWeight: 'bold',
            fontSize: '30px',
            marginTop: '-90px',
            marginBottom: '30px',
          }}
        >
          RAMAS
        </div>
        <ContainerModalBottom>
          <ModalFormsBottom />
        </ContainerModalBottom>
        <Divider style={{ border: 'solid 1px #cccccc', marginTop: '1%' }} />
        <TableGeneral />
      </ContainerRamas>
    </ContainerGeneral>
  );
}
