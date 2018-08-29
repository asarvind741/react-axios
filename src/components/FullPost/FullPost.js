import React, { Component } from 'react';
import axios from'axios';

import './FullPost.css';

class FullPost extends Component {

    state = {
        loadedPost: null
    }
    componentDidUpdate(){
        if(this.props.id){
            axios.get('/posts/' + this.props.id)
            .then(post => {
                this.setState({
                    loadedPost: post.data
                })
            })
        }
        
    }
    deletePost = () => {
        axios.delete('/posts/' + this.props.id)
        .then(data => {
            console.log(data)
        })
    }
    render () {
        let post = <p>Please select a Post!</p>;
        const loadedPost = this.setState.loadedPost

        if(this.props.id){
            post = <p>Loading...</p>;
        }
        if(this.state.loadedPost){
            post = (
                <div className="FullPost">
                    <h1>{this.state.loadedPost.title}</h1>
                    <p>{this.state.loadedPost.body}</p>
                    <div className="Edit">
                        <button className="Delete" onClick = {this.deletePost}>Delete</button>
                    </div>
                </div>
    
            );
        }
       
        return post;
    }
}

export default FullPost;