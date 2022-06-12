
import { Link } from 'react-router-dom';
import '../App.css';

const Navbar = () => {
    const user = true;
    return(
        <div className='navbar'>
            <span className='logo'> <a href="/" className='link'> API App</a> </span>{
                user ? (
            <ul className='list'>
            <li className="listItem">
                <img src="/images/avatar.jpg" alt="" className="avatar" />
            </li>
            <li className="listItem">John Doe</li>
            <li className="listItem">Log Out</li>
            </ul>
            ) : ( <a href="/login" className='link'>Login</a> )
        }
        </div>
    )
}
export default Navbar