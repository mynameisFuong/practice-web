import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
    return (
        <nav className="navbar">
            {/* <h2>Quản lý thiết bị</h2> */}
            <div className="nav-links">
                <Link to="/">Trang chủ</Link>
                <Link to="/about">Giới thiệu</Link>
                <Link to="/statistics">Thống kê</Link>
                <Link to="/reports">Báo cáo</Link>
                <Link to="/devices">Thiết bị</Link>
                <Link to="/rooms">Phòng học</Link>
            </div>
        </nav>
    );
};

export default Navbar;