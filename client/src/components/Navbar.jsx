import '../App.css';

const Navbar = () => {
    return(
        <div className='navbar'>
            <span className='logo'>API App</span>
            <ul className='list'>
            <li className="listItem">
                <img src="/images/avatar.jpg" alt="" className="avatar" />
            </li>
            <li className="listItem">John Doe</li>
            <li className="listItem">Log Out</li>
            </ul>
        </div>
    )
}
export default Navbar