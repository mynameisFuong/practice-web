import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
    return (
        <main className="homepage">
      <header className="hero-section">
        <div className="hero-copy">
          <span className="eyebrow">Dự án trường đại học</span>
          <h1>Quản Lý Thiết Bị</h1>
          <p>
            Hệ thống quản lý thiết bị phòng học giúp theo dõi, cấp phát,
            bảo trì và báo cáo hỏng hóc nhanh chóng cho giảng viên và kỹ thuật.
          </p>
          <div className="hero-actions">
            <a href="#features" className="button primary">Xem chức năng</a>
            <a href="#quick-links" className="button secondary">Bắt đầu</a>
          </div>
        </div>
        <div className="hero-panel">
          <div className="panel-card">
            <h2>Thông tin nhanh</h2>
            <ul>
              <li>Quản lý thiết bị</li>
              <li>Quản lý phòng học</li>
              <li>Phân công và bảo trì</li>
              <li>Thống kê & báo cáo</li>
            </ul>
          </div>
        </div>
      </header>

      <section id="features" className="features-section">
        <h2>Chức năng chính</h2>
        <p className="features-description">
          Giao diện trang chủ tập trung vào các tác vụ quản lý thiết bị, phòng học
          và tình trạng hoạt động.
        </p>
        <div className="feature-grid">
          <article className="feature-card">
            <h3>Quản lý thiết bị</h3>
            <p>Quản lý danh sách thiết bị, trạng thái, vị trí và yêu cầu sửa chữa.</p>
          </article>
          <article className="feature-card">
            <h3>Quản lý phòng học</h3>
            <p>Theo dõi phòng học, cấu hình thiết bị và tình trạng sử dụng.</p>
          </article>
          <article className="feature-card">
            <h3>Báo cáo hỏng hóc</h3>
            <p>Ghi nhận hỏng hóc và chuyển tiếp đến bộ phận kỹ thuật kịp thời.</p>
          </article>
          <article className="feature-card">
            <h3>Thống kê</h3>
            <p>Xem báo cáo hoạt động, thiết bị chờ sửa và năng suất phòng học.</p>
          </article>
        </div>
      </section>

      <section id="quick-links" className="quick-links-section">
        <h2>Truy cập nhanh</h2>
        <div className="quick-links">
          <Link to="/devices" className="quick-card">Danh sách thiết bị</Link>
          <Link to="/rooms" className="quick-card">Danh sách phòng học</Link>
          <Link to="/reports" className="quick-card">Báo cáo hỏng hóc</Link>
          <Link to="/statistics" className="quick-card">Biểu đồ thống kê</Link>
        </div>
      </section>

      <footer className="page-footer">
        <p>Quản Lý Thiết Bị — Hỗ trợ quản lý thiết bị phòng học cho trường đại học.</p>
      </footer>
    </main>
    )
}

export default Home;