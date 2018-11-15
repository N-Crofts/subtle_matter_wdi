import React, { Component } from 'react'
import { Nav, Navbar, NavDropdown, MenuItem } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const StyledLink = styled(Link)`
    display: flex;
    justify-content: flex-end;
    letter-spacing: 0.25em;
    padding-right: 5px;
    color: rgb(71, 71, 71);
    :hover {
        text-decoration: underline;
    }
`

export default class SubtleNav extends Component {
    render() {
        return (
            <Navbar inverse collapseOnSelect fixedTop>
                <Navbar.Header >
                    <Navbar.Brand>
                        <a href="https://nicholascrofts.com" target="_blank" rel="noopener noreferrer">nicholascrofts.com</a>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>               
                <Navbar.Collapse>
                    <Nav pullRight>
                        <NavDropdown eventKey={1} title="options" id="basic-nav-dropdown">
                            <StyledLink to="/subtlematter">
                                home
                            </StyledLink>
                            <StyledLink to="/guestbook">
                                discussion
                            </StyledLink>
                            <StyledLink to="/books">
                                books
                            </StyledLink>
                        </NavDropdown> 
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}
