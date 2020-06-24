import React, { useState } from 'react';
import Typography from '@material-ui/core/Typography';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import IconButton from '@material-ui/core/IconButton';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { useHistory } from 'react-router-dom';

const MenuUser: React.FC = (props) => {
    const history = useHistory();

    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event: any) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleOut = () => {
        history.push('/');
        handleClose();
    }

    return (
        <>
            <Typography component="span" color="inherit">
                Pedrolino
            </Typography>
            <IconButton color="inherit" onClick={handleClick}>
                <AccountCircleIcon />
            </IconButton>
            <Menu
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
                style={{ top: 35 }}
            >
                <MenuItem onClick={handleClose}>Perfil</MenuItem>
                <MenuItem onClick={handleOut}>Sair</MenuItem>
            </Menu>
        </>
    );
}

export default MenuUser;