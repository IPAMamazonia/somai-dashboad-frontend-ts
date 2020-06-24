import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import DeviceHubIcon from '@material-ui/icons/DeviceHub';
import PeopleIcon from '@material-ui/icons/People';
import { withStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';
import Colors from 'styles/colors'

const StyledListItem = withStyles({
  root: {
    backgroundColor: "#ffffff",
    "&$selected": {
      backgroundColor: Colors.grey,
      "&:hover": {
        backgroundColor: Colors.grey
      }
    },
    // "&:hover": {
    //   backgroundColor: Colors.grey
    // }
  },
  selected: {}
})(ListItem);

const LateralMenu: React.FC = () => {

  const history = useHistory();
  const { pathname } = history.location;

  return (
    <div>
      <StyledListItem
        button
        selected={pathname === "/dashboard/meus-alertas"}
        onClick={() => history.push('/dashboard/meus-alertas')}
      >
        <ListItemIcon>
          <LocationOnIcon />
        </ListItemIcon>
        <ListItemText primary="Meus alertas" />
      </StyledListItem>

      <StyledListItem
        button
        selected={pathname === "/dashboard/compartilhandos-comigo"}
        onClick={() => history.push('/dashboard/compartilhandos-comigo')}
      >
        <ListItemIcon>
          <DeviceHubIcon />
        </ListItemIcon>
        <ListItemText primary="Compartilhados comigo" />
      </StyledListItem>

      <Divider />

      <StyledListItem
        button
        selected={pathname === "/dashboard/lista-de-usuarios"}
        onClick={() => history.push('/dashboard/lista-de-usuarios')}
      >
        <ListItemIcon>
          <PeopleIcon />
        </ListItemIcon>
        <ListItemText primary="Lista de usuários" />
      </StyledListItem>
    </div>
  )
}

export default LateralMenu;