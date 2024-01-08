import { Component } from 'react'

export default class ImageComponent extends Component {
    render() {
        return (
            <>
            <h3>{this.props.title}</h3>
            {this.props.list.map(ele => <img src={ele.src} alt={ele.alt}></img>)}
            </>
        )
    }
}