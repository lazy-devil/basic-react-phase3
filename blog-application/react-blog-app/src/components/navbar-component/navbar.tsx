import { Link } from "react-router-dom";
import './navbar.css'

export default function NavBar() {
    return (
        <nav>
            <Link to={'/'} className="logo">
                <h3>Blog Application</h3>
            </Link>
            <Link to={'/'}>หน้าแรก</Link>
            <Link to={'/blogs'}>บทความทั้งหมด</Link>
            <Link to={'/about'}>เกี่ยวกับ</Link>
        </nav>
    );
}