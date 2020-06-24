import React from 'react';
import clsx from 'clsx';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import ChartAlerts from 'components/Charts/ChartAlerts';
import TotalAlerts from 'components/TotalAlerts';
import AlertList from 'components/AlertList';
import { Theme, withStyles, createStyles, WithStyles } from '@material-ui/core/styles';

const useStyles = (theme: Theme) => createStyles({
    paper: {
        padding: theme.spacing(2),
        display: 'flex',
        overflow: 'auto',
        flexDirection: 'column',
    },
    fixedHeight: {
        height: 300,
    },
});

interface IProps extends WithStyles<typeof useStyles> { }

const MyAlerts: React.FC<IProps> = (props) => {
    const { classes } = props;

    const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

    return (
        <>
            <Grid item xs={12} md={8} lg={9}>
                <Paper className={fixedHeightPaper}>
                    <ChartAlerts />
                </Paper>
            </Grid>

            <Grid item xs={12} md={4} lg={3}>
                <Paper className={fixedHeightPaper}>
                    <TotalAlerts />
                </Paper>
            </Grid>

            <Grid item xs={12}>
                <Paper className={classes.paper}>
                    <AlertList />
                </Paper>
            </Grid>
        </>
    );
}

export default withStyles(useStyles)(MyAlerts);