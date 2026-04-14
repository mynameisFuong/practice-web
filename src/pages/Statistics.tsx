const Statistics = () => {
    return (
        <div className="statistics-page">
            <h1>Thống kê thiết bị</h1>
            <p>Thông tin thống kê về tình trạng thiết bị trong các phòng học.</p>
            
            <div className="stats-grid">
                <div className="stat-card">
                    <h2>120</h2>
                    <p>Tổng thiết bị</p>
                </div>

                <div className="stat-card">
                    <h2>95</h2>
                    <p>Đang hoạt động</p>
                </div>

                <div className="stat-card">
                    <h2>15</h2>
                    <p>Thiết bị hỏng</p>
                </div>

                <div className="stat-card">
                    <h2>10</h2>
                    <p>Đang bảo trì</p>
                </div>
            </div>
        </div>
    );
};

export default Statistics;