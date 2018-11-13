import React, { Component } from 'react'
import {FormGroup, FormControl,InputGroup, Glyphicon} from 'react-bootstrap'
import SubtleNav from './Navbar'
import Book from './Book.js'

export default class BookSearch extends Component {
    constructor(props){
        super(props);
        this.state={
            query : '',
            items : []
        }
        this.search=this.search.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
    }

    handleKeyPress(event){
        if(event.key ==='Enter')
        this.search();
    }
 
    search(){
        let query = this.state.query;
        const BASE_URL = "https://www.googleapis.com/books/v1/volumes?q=" + query;
            fetch(BASE_URL, {method:"GET"})
            .then(response =>  response.json())
            .then(json => {
                let {items} = json;
                    this.setState({
                        items : items
                    })
          })
    }

    handleChange(event){
        this.setState({
            query: event.target.value
        })
    }

    render() {
        return (
            <div>
                <SubtleNav />
                <div className="Global">
                    <div className="BookSearchHeader">book search</div>
                    <FormGroup>
                        <InputGroup>
                            <FormControl 
                                type="text" 
                                placeholder="search by title, author, or keyword" 
                                onChange={this.handleChange}
                                onKeyPress={this.handleKeyPress}/>
                            <InputGroup.Addon onClick={this.search}>
                                <Glyphicon glyph="search"></Glyphicon>
                            </InputGroup.Addon>
                        </InputGroup>
                    </FormGroup> 
                    <Book items={this.state.items} />
                </div>
            </div>
        )
    }
}
