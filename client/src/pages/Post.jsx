
import { post } from "../data";
const Post = () => {
    const posts = post[2]

  return (  
    <div className='post'>
        <img src= {posts.img} alt="" className="postImg" />
        <h1 className="postTitle"> {posts.title} </h1>
        <p className="postDesc"> {posts.desc} </p>
        <p className="postLongDesc"> {posts.longDesc} </p>

    </div>
  );
};

export default Post;