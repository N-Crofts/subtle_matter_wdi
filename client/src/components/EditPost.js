import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'

const StyledEditPost = styled.div `
  background:#fff;
  opacity: 0.7;
  width:60%;
  margin:0 auto;
  padding:30px;
  margin-bottom:20px;
  box-shadow: 10px 10px 12px 0 rgba(46, 60, 73, 0.05);
`
const StyledEditForm = styled.form `
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  input {
    height: 44px;
    padding-left: 15px;
    padding-right: 15px;
    border: 1px solid #dbe2e8;
    font-size: 14px;
    border-radius: 2px;
    color: black;
    box-shadow: 0 2px 2px 0 rgba(46, 60, 73, 0.05);
    outline: none;
    width: 80%;
  }
  textarea {
    width: 80%;
    max-width: 80%;
    padding-left: 15px;
    padding-right: 15px;
    padding-top: 15px;
    border: 1px solid #dbe2e8;
    font-size: 14px;
    border-radius:2 px;
    color: black;
    font-family: 'Work Sans,',sans-serif;
    box-shadow: 0 2px 2px 0 rgba(46, 60, 73, 0.05);
    outline: none;
  }
  button {
    background: rgba(0,128,255, 0.8);
    padding: 15px 40px;
    text-align: center;
    color: #fff;
    font-family: 'Work Sans',sans-serif;
    border-radius: 4px;
    border: none;
    font-size: 20px;
  }
`

class EditPost extends Component {

    handleEdit = (e) => {
        e.preventDefault()
        const newTitle = this.getTitle.value
        const newMessage = this.getMessage.value
        const data = {
            newTitle,
            newMessage
        }
        this.props.dispatch({ type: 'UPDATE', id: this.props.post.id, data: data })
    }

    render() {
        return (
            <StyledEditPost key={this.props.post.id}>
                <StyledEditForm onSubmit={this.handleEdit}>
                    <input 
                        required type="text" 
                        ref={(input) => this.getTitle = input}
                        defaultValue={this.props.post.title} 
                        placeholder="Enter Post Title" 
                    />
                    <br />
                    <br />
                    <textarea 
                        required rows="5" 
                        ref={(input) => this.getMessage = input}
                        defaultValue={this.props.post.message} 
                        cols="28" 
                        placeholder="Enter Post" 
                    />
                    <br />
                    <br />
                    <button>update</button>
                </StyledEditForm>
            </StyledEditPost>
        );
    }
}

export default connect()(EditPost)
