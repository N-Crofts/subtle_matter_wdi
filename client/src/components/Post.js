import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'

const StyledPost = styled.div `
  background: #fff;
  width: 60%;
  margin: 0 auto;
  padding: 30px;
  margin-bottom: 20px;
  opacity: 0.7;
  box-shadow: 10px 10px 12px 0 rgba(46, 60, 73, 0.05);
`
const StyledPostTitle = styled.div `
  text-align: center;
  font-weight: 400;
  font-size: 40px;
  color: #636363;
  word-wrap: break-word;
`
const StyledPostMessage = styled.p `
  font-size: 25px;
  font-weight: 200;
  line-height: 2.5rem;
  text-align: center;
  word-wrap: break-word;
`
const StyledControlButtons = styled.div `
  display: flex;
`
const StyledEditButton = styled.button `
  background: #02b3e4;
  opacity: 0.8;
  border: none;
  text-align: center;
  font-size: 15px;
  padding: 5px 15px;
  border-radius: 5px;
  margin-right: auto;
  outline: none;
  color: #fff;
`
const StyledDeleteButton = styled.button `
  background: #ff7777;
  opacity: 0.8;
  border: none;
  text-align: center;
  font-size: 15px;
  padding: 5px 15px;
  border-radius: 5px;
  outline: none;
  color: #fff;
`

class Post extends Component {
    render() {
        return (
            <StyledPost>
                <StyledPostTitle>{this.props.post.title}</StyledPostTitle>
                <StyledPostMessage>{this.props.post.message}</StyledPostMessage>
                <StyledControlButtons>
                    <StyledEditButton
                        onClick={() => this.props.dispatch({ type: 'EDIT_POST', id: this.props.post.id })}>Edit
                    </StyledEditButton>
                    <StyledDeleteButton
                        onClick={() => this.props.dispatch({ type: 'DELETE_POST', id: this.props.post.id })}>Delete
                    </StyledDeleteButton>
                </StyledControlButtons>
            </StyledPost>
        );
    }
}

export default connect()(Post)
