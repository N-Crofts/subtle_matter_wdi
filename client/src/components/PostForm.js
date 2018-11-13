import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'

const StyledPostContainer = styled.div `
  padding:50px;
  width:50%;
  margin:40px auto;
  box-shadow:0 5px 15px 0 rgba(46, 61, 73, 0.12);
  font-family:'Work Sans',sans-serif;
`
const StyledPostHeading = styled.h1 `
  text-align:center;
  font-weight:400;
  font-size:40px;
  color: rgba(153,153,153,0.9);
`
const StyledForm = styled.form `
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 2em;
  input {
    height:44px;
    padding-left:15px;
    padding-right:15px;
    border: 1px solid #dbe2e8;
    font-size:14px;
    border-radius:2px;
    color: black;
    opacity: 0.7;
    box-shadow: 0 2px 2px 0 rgba(46, 60, 73, 0.05);
    outline:none;
    width:80%;
  }
  textarea {
    width:80%;
    max-width:80%;
    padding-left:15px;
    padding-right:15px;
    padding-top:15px;
    border: 1px solid #dbe2e8;
    font-size:14px;
    border-radius:2px;
    color: black;
    opacity: 0.7;
    font-family: 'Work Sans,',sans-serif;
    box-shadow: 0 2px 2px 0 rgba(46, 60, 73, 0.05);
    outline:none;
  }
  button {
    background: rgba(0,128,255, 0.6);
    padding:15px 40px;
    text-align: center;
    color:#fff;
    font-family:'Work Sans',sans-serif;
    border-radius:4px;
    border:none;
    font-size: 15px;
  }
`

class PostForm extends Component {

    handleSubmit = (e) => {
        e.preventDefault()
        const title = this.getTitle.value
        const message = this.getMessage.value
        const data = {
            id: new Date(),
            title,
            message,
            editing: false
        }
        this.props.dispatch({
            type: 'ADD_POST',
            data
        })
        this.getTitle.value = ''
        this.getMessage.value = ''
    }

render() {
    return (
        <StyledPostContainer>
            <StyledPostHeading>d i s c u s s i o n</StyledPostHeading>
            <StyledForm onSubmit={this.handleSubmit}>
                <input 
                    required type="text" 
                    ref={(input) => this.getTitle = input}
                    placeholder="Your name" 
                />
                <br/>
                <br/>
                <textarea 
                    required rows="5" 
                    ref={(input) => this.getMessage = input}
                    cols="28" placeholder="Leave a message!" 
                />
                <br/>
                <br/>
                <button>submit</button>
              </StyledForm>
          </StyledPostContainer>
      );
  }
}

export default connect()(PostForm)
