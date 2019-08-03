import React, { Component } from 'react'
import { Header, Footer } from '../../components/layout'
import Search from '../../components/search'
import OrganizationsList from '../../components/organizationslist'
import Map from '../../components/map'

export class Home extends Component {
    render() {
        return (
            <div>
                <Header />
                <Search />
                <OrganizationsList />
                <Map />
                <Footer />
            </div>
        )
    }
}

export default Home
