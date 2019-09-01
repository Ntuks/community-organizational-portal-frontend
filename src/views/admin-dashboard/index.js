import React from 'react'
import { Header, Footer } from '../../components/layout'
import OrganizationStatusFilters from '../../components/adminfilters'
import OrganizationsList from '../../components/adminOrgList'
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';



const useStyles = makeStyles(theme => ({
    searchGrid: {
        justifyContent: 'center'
    },
    heroContent: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(4, 2, 6),
        marginBottom: theme.spacing(4)
    },
}));

export default () => {

    const classes = useStyles();

    return (
        <div>
            <Header pageTitle= "admin"/>
            <Grid align="center" className={classes.searchGrid} item xs={12}>
                <OrganizationStatusFilters />
            </Grid>
            
            <div className={classes.heroContent}>
                <Grid container spacing={2}>
                    <Grid align="center" item xs={12} md={12} sm={12}>
                        <OrganizationsList />
                    </Grid>
                </Grid>
            </div>
            <Footer />
        </div>
    )
}
