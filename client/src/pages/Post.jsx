import {useLocation} from "react-router";
import { post } from "../data";
const Post = () => {
    const location = useLocation();
    const path = location.pathname.split("/")[2];

    const posts = post.find((p) => p.id.toString() === path);
    console.log(location);

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