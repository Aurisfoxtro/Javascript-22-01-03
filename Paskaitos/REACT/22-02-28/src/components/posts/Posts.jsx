import Post from "../post/Post"
import PostsData from "../../data/PostsData"

const Posts = ()=>{
    return(
        <section class="pt-4">
            <div class="container px-lg-5">
                {/* <!-- Page Features--> */}
                <div class="row gx-lg-5">
                        {PostsData.map((post)=>
                        <Post
                            key = {post.id}
                            title = {post.title}
                            content = {post.content}
                        />
                        )}
                    {/* <Post
                    data = {{title:"1 Nelabai geras postas", content:"Nelabai labai labai geras postas" }}
                    // title="Labai geras postas"
                    // content="Labai labai labai geras postas"
                    />
                    <Post
                    data = {{title:"2 Nelabai geras postas", content:"Nelabai labai labai geras postas" }}
                    // title="Nelabai geras postas"
                    // content="Nelabai labai labai geras postas"
                    />
                    <Post
                    data = {{title:"3 Nelabai geras postas", content:"Nelabai labai labai geras postas" }}
                    // title="Geras postas"
                    // content="Labai geras postas"
                    />
                    <Post
                    data = {{title:"4 Nelabai geras postas", content:"Nelabai labai labai geras postas" }}
                    // title="Postas"
                    // content="postas postas"
                    />
                    <Post
                    data = {{title:"5 Nelabai geras postas", content:"Nelabai labai labai geras postas" }}
                    // title="Labai geras"
                    // content="labai postas geras"
                    />
                    <Post
                    data = {{title:"6 Nelabai geras postas", content:"Nelabai labai labai geras postas" }}
                    // title="postas"
                    // content="mano postas"
                    /> */}
                </div>
            </div>
        </section>
    )
}

export default Posts