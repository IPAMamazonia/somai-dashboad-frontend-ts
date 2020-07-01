import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import errorMessages from 'helpers/errorMessages';
import { Paper } from 'pages/Register/styles';

interface IValues {
	firstName: string,
	lastName: string,
	organization?: string,
	email: string,
	password: string,
}

type InputEvent = React.ChangeEvent<HTMLInputElement>;

const Register: React.FC = () => {

	const initialValues: IValues = {
		firstName: 'afadsfa',
		lastName: 'afasfasd',
		organization: 'afdafa',
		email: 'afadsf@aga.com',
		password: '1111111',
	}

	const [formData, setFormData] = useState<IValues>(initialValues)
	const [minLengthPassword] = useState(6)

	// validação tamanho da senha - mínimo 6 caracteres
	ValidatorForm.addValidationRule('minLengthPassword', (value) => {
		if (formData.password.length<minLengthPassword) {
				return false;
		}
		return true;
});

	const handleChange = (event: InputEvent): void => {
		const { name, value } = event.target;
		setFormData({...formData, [name]: value } as Pick<IValues, keyof IValues>)
	}

	const handleSubmit = () => {
		console.log(formData)
	}

	return (
		<Container component="main" maxWidth="sm">
			<CssBaseline />
			<Paper>
				<Avatar className="avatar">
					<LockOpenIcon />
				</Avatar>
				<Typography component="h1" variant="h5">
					Cadastrar-se
        </Typography>

				<ValidatorForm
					noValidate
					onSubmit={handleSubmit}
					onError={errors => console.log(errors)}
				>
					<Grid container spacing={2}>
						<Grid item xs={12} sm={6}>
							<TextValidator
								label="Primeiro nome"
								onChange={handleChange}
								variant="outlined"
								required
								fullWidth
								name="firstName"
								value={formData.firstName}
								autoFocus
								autoComplete="fname"
								validators={['required']}
								errorMessages={[errorMessages.required]}
							/>
						</Grid>
						<Grid item xs={12} sm={6}>
							<TextValidator
								label="Último nome"
								onChange={handleChange}
								variant="outlined"
								required
								fullWidth
								name="lastName"
								value={formData.lastName}
								autoFocus
								autoComplete="lname"
								validators={['required']}
								errorMessages={[errorMessages.required]}
							/>
						</Grid>
						<Grid item xs={12}>
							<TextValidator
								label="Organização / Terra Indígena / Comunidade"
								onChange={handleChange}
								variant="outlined"
								required
								fullWidth
								name="organization"
								value={formData.organization}
								autoFocus
								autoComplete="organization"
							/>
						</Grid>
						<Grid item xs={12}>
							<TextValidator
								label="Email"
								onChange={handleChange}
								variant="outlined"
								required
								fullWidth
								name="email"
								value={formData.email}
								autoFocus
								autoComplete="email"
								validators={['required', 'isEmail']}
								errorMessages={[errorMessages.required, errorMessages.emailInvalid]}
							/>
						</Grid>
						<Grid item xs={12}>
							<TextValidator
								label="Senha"
								onChange={handleChange}
								variant="outlined"
								required
								fullWidth
								name="password"
								type="password"
								value={formData.password}
								autoFocus
								autoComplete="current-password"
								validators={['required', 'minLengthPassword']}
								errorMessages={[errorMessages.required, errorMessages.minLength(minLengthPassword)]}
							/>
						</Grid>
						<Button
							type="submit"
							fullWidth
							variant="contained"
							color="primary"
							className="submit"
						>
							Cadastrar
          </Button>
						<Grid container justify="flex-end">
							<Grid item>
								<Link to="/">
									Já tem uma conta? Fazer loign
                </Link>
							</Grid>
						</Grid>
					</Grid>
				</ValidatorForm>
			</Paper>
		</Container >
	);
}

export default Register;