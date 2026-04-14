import "./Reports.css";

const Reports = () => {
    return (
        <div className="reports-page">
            <h1>Báo cáo hỏng hóc</h1>

            <table className="reports-table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Tên thiết bị</th>
                        <th>Phòng</th>
                        <th>Trạng thái</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Máy chiếu</td>
                        <td>Phòng A1</td>
                        <td>Đã sửa</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Máy tính</td>
                        <td>Phòng B2</td>
                        <td>Chưa sửa</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default Reports;
