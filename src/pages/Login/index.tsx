import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

import { Paper } from './styles';

interface IProps {
    history: string[]
}

const Login: React.FC<IProps> = (props) => {
    const { history } = props;

    // const onSignIn = () => {
    //     history.push('/dashboard/meus-alertas')
    // }

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Paper>
                <Avatar className="avatar">
                    <LockOpenIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Login
                </Typography>
                <form noValidate>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email"
                        name="email"
                        autoComplete="email"
                        autoFocus
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Senha"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                    />
                    <FormControlLabel
                        control={<Checkbox value="remember" color="primary" />}
                        label="Lembrar-me"
                    />
                    <Button
                        type="button"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className="submit"
                    >
                        Logar
                    </Button>
                    <Grid container>
                        <Grid item xs>
                            <Link to="#">
                                Esqueceu a senha?
                            </Link>
                        </Grid>
                        <Grid item>
                            <Link to="/register">
                                {"Não possui uma conta? Inscrever-se"}
                            </Link>
                        </Grid>
                    </Grid>
                </form>
            </Paper>
        </Container>
    );
}

export default Login;