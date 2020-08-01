import React, { Component } from 'react';
import User from './User/User'

class Post extends Component {
    render() {
        return(
            <div className="post">
                <User src="https://66.media.tumblr.com/27b28cbb9c8a820342ea194465220dac/tumblr_o00blkVLaU1uonfnzo1_1280.jpg"
                      alt="profile__photo"
                      name="Randoman Intrnatov"
                      min="true"
                />
                <img src={this.props.src} alt={this.props.alt}/>
                <div className="post__name">
                    some Account
                </div>
                <div className="post__descr">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Consectetur corporis ducimus amet 
                    nam vero id, voluptas dicta labore 
                    tenetur, enim sapiente saepe, maiores aliquid qui nostrum beatae. 
                    Quo, mollitia asperiores!
                </div>
            </div>
        )
    }
}

export default Post