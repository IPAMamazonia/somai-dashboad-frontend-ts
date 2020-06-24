import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Switch from '@material-ui/core/Switch';
import { withStyles } from '@material-ui/core/styles';
import Title from 'components/Title';
import Colors from 'styles/colors';

import { Container } from 'pages/Dashboard/UserList/styles';

const PurpleSwitch = withStyles({
  switchBase: {
    color: Colors.grey,
    '&$checked': {
      color: Colors.successdark,
    },
    '&$checked + $track': {
      backgroundColor: Colors.successdark,
    },
  },
  checked: {},
  track: {},
})(Switch);

interface IParams {
  id: number,
  date: string,
  name: string,
  email: string,
}

// Generate Order Data
function createData(values: IParams) {
  const { id, date, name, email } = values;
  return { id, date, name, email };
}

const rows = [
  createData({ id: 0, date: '16 Mar, 2019', name: 'Fogo', email: 'email1@.gmail.com' }),
  createData({ id: 1, date: '16 Mar, 2019', name: 'Desmatamento', email: 'email2@.gmail.com' }),
  createData({ id: 2, date: '26 Mar, 2019', name: 'Fogo', email: 'email3@.gmail.com', }),
  createData({ id: 3, date: '16 Mar, 2019', name: 'Pesca ilegal', email: 'email4@.gmail.com', }),
  createData({ id: 4, date: '15 Mar, 2019', name: 'Garimpo ilegal', email: 'email5@.gmail.com', }),
];

//interface IProps extends WithStyles<typeof useStyles> { }

const UserList: React.FC = () => {


  const handleChange = () => {

  }


  return (
    <Container>
      <Title>Lista de Usuários</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Data</TableCell>
            <TableCell>Nome</TableCell>
            <TableCell>Email</TableCell>
            <TableCell align="center">Aprovar?</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.email}</TableCell>
              <TableCell align="center">
                <span className="icon"><PurpleSwitch onChange={handleChange} /></span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Container>
  );
}

export default UserList;