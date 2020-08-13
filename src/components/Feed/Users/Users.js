import React, {Component} from 'react';
import InstaService from '../../../services/instaService'
import User from '../Posts/Post/User/User'

class Users extends Component{

    InstaService = new InstaService();

    state = {
        users: []
    }

    componentDidMount(){
        this.updateUsers()
    }

    updateUsers = () =>{
        this.InstaService.getAllPosts()
        .then(this.onUsersLoaded)
    }

    onUsersLoaded = users => {
        this.setState({
            users
        })
        console.log('users: ', users)
    }

    renderUsers = arr => {
        return arr.map((user, i)=>{
            const {name, photo, altname:alt} = user;

            return (
                
                <User min='trues'
                    src={photo}
                    alt={alt}
                    name={name}
                />
                // <a href="#" className= "user min">
                //     <img src={photo} alt={alt}></img>
                //     <div>{name}</div>
                // </a>
            )
        })

    }
    
    render(){
        const {users} = this.state;
        let usersBar = this.renderUsers(users);

        return (
            <div className='right'>
                <User src="https://66.media.tumblr.com/27b28cbb9c8a820342ea194465220dac/tumblr_o00blkVLaU1uonfnzo1_1280.jpg"
                      alt="profile__photo"
                      name="John_Doe"
                />
                <div className="users__block">
                    {usersBar}
                </div>
                
            </div>   
        )
    }
}

export default Users