import React from 'react'
import { connect } from 'react-redux';
import { Header, Footer } from '../../components/layout'
import Search from '../../components/search'
import OrganizationsList from '../../components/organizationslist'
import Map from '../../components/map'
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
            <Header pageTitle= "home"/>
            <Grid align="center" className={classes.searchGrid} item xs={12}>
                <Search />
            </Grid>
            
            <div className={classes.heroContent}>
                <Grid container spacing={2}>
                    <Grid align="center" item xs={12} md={5} sm={5}>
                        <OrganizationsList />
                    </Grid>
                    <Grid align="center" item xs={12} md={7} sm={7}>
                        <Map />
                    </Grid>
                </Grid>
            </div>
            
            <Footer />
        </div>
    )
}
