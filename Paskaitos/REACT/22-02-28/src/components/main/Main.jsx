import React, {useState} from 'react'
import Search from '../search/Search';
import Search2 from '../search2/Search2';
import PostsData from '../../data/PostsData';
import Posts from '../posts/Posts';

const Main = ()=>{
    const [searchTerm, setSearchTerm] = useState('');
    const handleInputChange = (e)=>{
        // console.log(e)
        setSearchTerm(e.target.value)
    }
    // console.log(searchTerm)
    const filteredPosts = PostsData.filter((post)=>{
        return post.title.includes(searchTerm)
    })
    const filteredPosts2 = PostsData.filter((post)=>{
        return post.category.includes(searchTerm)
    })
    return(
        <div className="main">
            <Search onSearch={handleInputChange} val={searchTerm}/>
            <Posts posts={filteredPosts}/>
            <Search2 onSearch={handleInputChange} val={searchTerm}/>
            <Posts posts = {filteredPosts2}/>
        </div>
    )
}

export default Main