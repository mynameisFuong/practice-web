import { useEffect, useState } from "react";
import "./Rooms.css";
import { getAllRooms, createRoom, updateRoom, deleteRoom } from "../api/roomApi";
import type { Room } from "../api/roomApi";

const Rooms = () => {
  const [rooms, setRooms] = useState<Room[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Form thêm/sửa
  const [formData, setFormData] = useState({ name: "", capacity: 0, status: "", floor: "" });
  const [editingId, setEditingId] = useState<number | null>(null);

  // GET: Load danh sách phòng khi component mount
  useEffect(() => {
    fetchRooms();
  }, []);

  const fetchRooms = async () => {
    try {
      const data = await getAllRooms();
      setRooms(data);
    } catch (err) {
      setError("Không thể tải danh sách phòng học!");
    } finally {
      setLoading(false);
    }
  };

  // POST hoặc PUT
  const handleSubmit = async () => {
    if (!formData.name || !formData.status || !formData.floor || formData.capacity <= 0) {
      alert("Vui lòng điền đầy đủ thông tin!");
      return;
    }
    try {
      if (editingId !== null) {
        // PUT
        await updateRoom(editingId, formData);
        alert("Cập nhật thành công!");
      } else {
        // POST
        await createRoom(formData);
        alert("Thêm phòng thành công!");
      }
      setFormData({ name: "", capacity: 0, status: "", floor: "" });
      setEditingId(null);
      fetchRooms();
    } catch (err) {
      alert("Có lỗi xảy ra!");
    }
  };

  // Bấm nút Sửa: điền dữ liệu vào form
  const handleEdit = (room: Room) => {
    setEditingId(room.id);
    setFormData({
      name: room.name,
      capacity: room.capacity,
      status: room.status,
      floor: room.floor,
    });
  };

  // DELETE
  const handleDelete = async (id: number) => {
    if (!confirm("Bạn có chắc muốn xóa phòng này?")) return;
    try {
      await deleteRoom(id);
      fetchRooms();
    } catch (err) {
      alert("Xóa thất bại!");
    }
  };

  if (loading) return <p>Đang tải...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="rooms-page">
      <h1>Danh sách phòng học</h1>

      {/* Form thêm / sửa */}
      <div className="room-form">
        <h2>{editingId !== null ? "Cập nhật phòng" : "Thêm phòng mới"}</h2>
        <input placeholder="Tên phòng" value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
        <input placeholder="Sức chứa" type="number" value={formData.capacity}
          onChange={(e) => setFormData({ ...formData, capacity: parseInt(e.target.value) })} />
        <input placeholder="Trạng thái" value={formData.status}
          onChange={(e) => setFormData({ ...formData, status: e.target.value })} />
        <input placeholder="Tầng" value={formData.floor}
          onChange={(e) => setFormData({ ...formData, floor: e.target.value })} />
        <button onClick={handleSubmit}>
          {editingId !== null ? "Cập nhật" : "Thêm mới"}
        </button>
        {editingId !== null && (
          <button onClick={() => { setEditingId(null); setFormData({ name: "", capacity: 0, status: "", floor: "" }); }}>
            Hủy
          </button>
        )}
      </div>

      {/* Bảng danh sách */}
      <table className="rooms-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Tên phòng</th>
            <th>Sức chứa</th>
            <th>Trạng thái</th>
            <th>Tầng</th>
            <th>Hành động</th>
          </tr>
        </thead>
        <tbody>
          {rooms.map((room) => (
            <tr key={room.id}>
              <td>{room.id}</td>
              <td>{room.name}</td>
              <td>{room.capacity}</td>
              <td>{room.status}</td>
              <td>{room.floor}</td>
              <td>
                <button onClick={() => handleEdit(room)}>Sửa</button>
                <button onClick={() => handleDelete(room.id)}>Xóa</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Rooms;