import React, { Component } from 'react'
import styled from 'styled-components'
import PostForm from './PostForm'
import AllPost from './AllPost'
import SubtleNav from './Navbar.js'


const StyledGuestBook = styled.div `
  margin: 0;
  padding: 0;
  font-family: 'Work Sans',sans-serif;
`
export default class GuestBook extends Component {
    render() {
        return (
            <div>
                <SubtleNav />
                <StyledGuestBook>
                    <PostForm />
                    <AllPost />
                </StyledGuestBook>
            </div>
        )
    }
}
