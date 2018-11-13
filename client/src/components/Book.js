import React , {Component} from 'react'

export default class Book extends Component{
    render() {
        return (
            <div>
                {this.props.items.map((item , i) => {
                    let {title, imageLinks , infoLink} = item.volumeInfo
                    return (
                        <a 
                            href ={infoLink}
                            target = "_blank" rel="noopener noreferrer"
                            key={i} className = "book">
                            <img 
                                className = "bookImage"
                                src ={imageLinks !== undefined? imageLinks.thumbnail : ''} 
                                alt = "book"
                            />
                            <div className = "titleText">{title }</div>
                        </a>                        
                    )
                })}
            </div>           
        )
    }
}