import "./Rooms.css"

const Rooms = () => {
    return (
        <div className="rooms-page">
            <h1>Danh sách phòng học</h1>

            <table className="rooms-table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Tên phòng</th>
                        <th>Thiết bị</th>
                        <th>Trạng thái</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Phòng A1</td>
                        <td>Máy chiếu, Bảng tương tác</td>
                        <td>Đang sử dụng</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Phòng B2</td>
                        <td>Máy tính, Máy chiếu</td>
                        <td>Trống</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default Rooms;
