import React, { Component } from 'react'
import { Nav, Navbar, NavDropdown, MenuItem } from 'react-bootstrap'
// import { Link } from 'react-router-dom'

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
                            <MenuItem eventKey={1.1} href="/subtlematter">Home</MenuItem>
                            <MenuItem eventKey={1.2} href="/guestbook">Discussion</MenuItem>
                            <MenuItem eventKey={1.2} href="/books">Book Search</MenuItem>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>

            </Navbar>
        )
    }
}
/* // ....
<NavDropdown eventKey={1} title="options" id="basic-nav-dropdown">
<Link to="/subtlematter">
    home
    {/* <MenuItem eventKey={1.1} >Home</MenuItem> 
</Link>
<Link to="/guestbook">
    discussion board
    {/* <MenuItem eventKey={1.2} >Discussion</MenuItem>
</Link>
<Link to="/books">
    books
    <MenuItem eventKey={1.2} >Book Search</MenuItem>
</Link>
</NavDropdown>
// ... */