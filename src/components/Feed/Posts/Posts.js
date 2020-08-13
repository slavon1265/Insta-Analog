import React, {Component} from 'react';
import InstaService from '../../../services/instaService'
import User from './Post/User/User';
import ErrorMessage from './Error'

class Posts extends Component{
    InstaService = new InstaService();
    state = {
        posts: [],
        error: false,

    }

    componentDidMount(){
        this.updatePosts()
    }

    updatePosts() {
        this.InstaService.getAllPosts()
        .then(this.onPostsLoaded)
        .catch(this.onError);
    }

    onPostsLoaded = posts => {
        this.setState({
            posts,
            error: false
        })
    }

    onError = (err) => {
        this.setState({
            error: true
        })
    }

    renderItems(arr){
        return arr.map(item => {
            const {name, altname, photo, src, alt, descr, id} = item;

            return(
                <div key={id} className="post">
                <User src={photo}
                      alt={altname}
                      name={name}
                      min="true"
                />
                <img src={src} alt={alt}/>
                <div className="post__name">
                    {name}
                </div>
                <div className="post__descr">
                    {descr}
                </div>
            </div>
            )
        })
    }



    render(){

        const {error, posts} = this.state;
        if(error) {
            return <ErrorMessage/>
        }

        const items = this.renderItems(posts)
        return(
            
            <div className="left">
                {items}
            </div>
        )
    }
}

export default Posts

{/* <div className="left">
<Post src="https://fullpicture.ru/wp-content/uploads/2016/12/year-in-instagram-201613.jpg" alt="inst"/>
<Post src="https://s.zefirka.net/images/2017-05-29/krasivye-gorodskie-pejzazhi-iz-instagram-vincent-cogliandro/krasivye-gorodskie-pejzazhi-iz-instagram-vincent-cogliandro-13.jpg" alt="inst"/>
</div> */}