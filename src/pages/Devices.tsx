import "./Devices.css";

const Devices = () => {
    return (
        <div className="devices-page">
            <h1>Danh sách thiết bị</h1>

            <table className="devices-table">
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
                        <td>Hoạt động</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Máy tính</td>
                        <td>Phòng B2</td>
                        <td>Hỏng</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default Devices;
