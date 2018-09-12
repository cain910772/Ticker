import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavItem } from "react-bootstrap"



export default class MyNavbar extends Component {
    render() {
        return (
            <Navbar default collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
                        <Link to="/">Arbitrage</Link>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav pullRight>
                        <NavItem eventKey={0} componentClass={Link} href="/" to="/">
                            Home
                                </NavItem>
                        <NavItem eventKey ={1} componentClass = {Link} href="/Login" to ="/Login">
                                Login
                                </NavItem> 

                        <NavItem eventKey={2} componentClass={Link} href="/Markets" to="/Markets">
                            Markets
                                  </NavItem>
                        <NavItem eventKey={3} componentClass={Link} href="/MyCoins" to="/MyCoins">
                            My Coins
                                </NavItem>
                        <NavItem eventKey={4} componentClass={Link} href="/MyExchanges" to="/MyExchanges">
                            My Exchanges
                                </NavItem>
                        <NavItem eventKey ={5} componentClass = {Link} href ="/Crypto" to ="/Crypto"> 
                                Info
                                </NavItem>
                    </Nav>
                </Navbar.Collapse>

            </Navbar>

        )
    }
}