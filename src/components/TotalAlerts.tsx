import React, { Fragment } from 'react';
import Typography from '@material-ui/core/Typography';
import Title from 'components/Title';
import { Theme, withStyles, createStyles, WithStyles } from '@material-ui/core/styles';
import Colors from 'styles/colors'

const useStyles = (theme: Theme) => createStyles({
    total: {
        color: Colors.dark,
        paddingTop: theme.spacing(6),
    }
})

interface IProps extends WithStyles<typeof useStyles> { }

const TotalAlerts: React.FC<IProps> = (props) => {
    const { classes } = props;
    return (
        <Fragment>
            <Title>Total de alertas</Title>
            <Typography component="h1" variant="h1" align="center" className={classes.total}>
                150
            </Typography>
        </Fragment>
    );
}

export default withStyles(useStyles)(TotalAlerts);