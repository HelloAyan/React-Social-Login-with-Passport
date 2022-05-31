
import Card from '../components/Card';
import { post } from '../data';

const Home = () => {
  return (
    <div className='home'>
        {post.map(post=> (
        < Card key={post.id} post={post} />

    ))}
    </div>
  )
}

export default Home