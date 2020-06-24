import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import CloudDownloadIcon from '@material-ui/icons/CloudDownload';
import ShareIcon from '@material-ui/icons/Share';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import Title from 'components/Title';

import { Container } from 'components/AlertList/styles';

interface IParams{
    id: number,
    date: string,
    name: string,
    shipTo: string,
}

// Generate Order Data
function createData(values: IParams) {
    const { id, date, name, shipTo } = values;
    return { id, date, name, shipTo };
  }
  
  const rows = [
    createData({id: 0, date: '16 Mar, 2019', name: 'Fogo', shipTo: 'Lorem ipsum luctus rhoncus, quisque.'}),
    createData({id: 1, date: '16 Mar, 2019', name: 'Desmatamento', shipTo: 'Lorem ipsum felis sodales, placerat.'}),
    createData({id: 2, date: '26 Mar, 2019', name: 'Fogo', shipTo: 'Lorem ipsum lectus fames, pellentesque.',}),
    createData({id: 3, date: '16 Mar, 2019', name: 'Pesca ilegal', shipTo: 'Lorem ipsum egestas sollicitudin, massa.',}),
    createData({id: 4, date: '15 Mar, 2019', name: 'Garimpo ilegal', shipTo: 'Lorem ipsum phasellus fermentum, nec.',}),
  ];

const ListAlerts: React.FC = () => {
  return (
    <Container>
      <Title>Lista de Alertas</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Data</TableCell>
            <TableCell>Nome</TableCell>
            <TableCell>Descrição</TableCell>
            <TableCell align="center">Ação</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.shipTo}</TableCell>
              <TableCell align="center">
                <span className="icon" title="Download"><CloudDownloadIcon /></span>
                <span className="icon" title="Compartilhar"><ShareIcon /></span>
                <span className="icon" title="Deletar"><DeleteForeverIcon /></span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Container>
  );
}

export default ListAlerts;