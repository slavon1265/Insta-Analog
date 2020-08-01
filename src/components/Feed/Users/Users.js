import React, {Component} from 'react';
import User from '../Posts/Post/User/User'

let Users = () => {
    return (
        <div className="right">
            <User src="https://66.media.tumblr.com/27b28cbb9c8a820342ea194465220dac/tumblr_o00blkVLaU1uonfnzo1_1280.jpg"
                      alt="profile__photo"
                      name="Randoman Intrnatov"
                />

            <div className="users__block">
                <User src="https://66.media.tumblr.com/27b28cbb9c8a820342ea194465220dac/tumblr_o00blkVLaU1uonfnzo1_1280.jpg"
                      alt="profile__photo"
                      name="Randoman Intrnatov"
                      min="true"
                />
                <User src="https://66.media.tumblr.com/27b28cbb9c8a820342ea194465220dac/tumblr_o00blkVLaU1uonfnzo1_1280.jpg"
                      alt="profile__photo"
                      name="Randoman Intrnatov"
                      min="true"
                />
                <User src="https://66.media.tumblr.com/27b28cbb9c8a820342ea194465220dac/tumblr_o00blkVLaU1uonfnzo1_1280.jpg"
                      alt="profile__photo"
                      name="Randoman Intrnatov"
                      min="true"
                />
                <User src="https://66.media.tumblr.com/27b28cbb9c8a820342ea194465220dac/tumblr_o00blkVLaU1uonfnzo1_1280.jpg"
                      alt="profile__photo"
                      name="Randoman Intrnatov"
                      min="true"
                />
            </div>

        </div>
    )
}

export default Users