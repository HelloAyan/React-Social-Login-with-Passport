
const Card = ({post}) => {
  return (
    <div className="card">
        <span className="title"> {post.title} </span>
        <img src= {post.img}  a lt="" className="img" />
        <p className="des"> {post.desc} </p>
        <button className="cardButton"> Read More</button>


    </div>
  )
}

export default Card