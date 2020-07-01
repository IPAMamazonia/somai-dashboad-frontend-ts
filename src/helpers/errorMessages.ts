const minLength = (min: any) => (`Deve ter ${min} caracteres ou mais`);
const maxLength = (max: any) => (`Deve ter ${max} caracteres no máximo`);

const errorMessages = {
    required: 'Campo obrigatório',
    emailInvalid: 'Email inválido',
    minLength: (val: number) => minLength(val),
    maxLength: (val: number) => maxLength(val)
}

export default errorMessages