import React from 'react';
import Typography from '@material-ui/core/Typography';
import Colors from 'styles/colors';

interface IPropsTitle {
    children: string
}

const Title: React.FC<IPropsTitle> = props => {
  return (
    <Typography component="h2" variant="h6" style={{color: Colors.secundary}} gutterBottom>
      {props.children}
    </Typography>
  );
}

export default Title;