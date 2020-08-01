export default class instaService {
    constructor(){
        this._apiBase = 'http://localhost:3000';
    }

    getResource = async (url) =>{
        const res = await fetch(`${this._apiBase}${url}`);

        if(!res.ok){
            throw new Error(`Could not fetch ${url}; received ${res.status}`)
        }

        return await res.json(); // there are a few methods, like .text(), .blob() 
    }

    getAllPosts = async () => {
        const res = await this.getResource('/posts/');
        return res;
    }

    getAllPhotos = async () =>{
        const res = await this.getAllPosts('/')
        return res.map(this._transformPost)
    }

    _transformPost = post => {
        return {
            src: post.src,
            alt: post.alt
        }
    }
}