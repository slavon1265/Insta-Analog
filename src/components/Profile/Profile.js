import React from 'react';
import User from '../Feed/Posts/Post/User/User';
import Palette from './Palette/Palette'


let Profile = () => {
    return (
        <div className="container profile">
            <User src="https://66.media.tumblr.com/27b28cbb9c8a820342ea194465220dac/tumblr_o00blkVLaU1uonfnzo1_1280.jpg"
                      alt="profile__photo"
                      name="Randoman Intrnatov"
            />
            <Palette />
        </div>
    )
}

export default Profile