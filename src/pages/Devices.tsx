import { useEffect, useState } from "react";
import "./Devices.css";
import { getAllDevices, createDevice, updateDevice, deleteDevice } from "../api/deviceApi";
import type { Device } from "../api/deviceApi";

const Devices = () => {
  const [devices, setDevices] = useState<Device[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Form thêm/sửa
  const [formData, setFormData] = useState({ name: "", type: "", status: "", location: "" });
  const [editingId, setEditingId] = useState<number | null>(null);

  // GET: Load danh sách thiết bị khi component mount
  useEffect(() => {
    fetchDevices();
  }, []);

  const fetchDevices = async () => {
    try {
      const data = await getAllDevices();
      setDevices(data);
    } catch (err) {
      setError("Không thể tải danh sách thiết bị!");
    } finally {
      setLoading(false);
    }
  };

  // POST hoặc PUT: Thêm hoặc cập nhật thiết bị
  const handleSubmit = async () => {
    if (!formData.name || !formData.type || !formData.status || !formData.location) {
      alert("Vui lòng điền đầy đủ thông tin!");
      return;
    }
    try {
      if (editingId !== null) {
        // PUT
        await updateDevice(editingId, formData);
        alert("Cập nhật thành công!");
      } else {
        // POST
        await createDevice(formData);
        alert("Thêm thiết bị thành công!");
      }
      setFormData({ name: "", type: "", status: "", location: "" });
      setEditingId(null);
      fetchDevices();
    } catch (err) {
      alert("Có lỗi xảy ra!");
    }
  };

  // Bấm nút Sửa: điền dữ liệu vào form
  const handleEdit = (device: Device) => {
    setEditingId(device.id);
    setFormData({
      name: device.name,
      type: device.type,
      status: device.status,
      location: device.location,
    });
  };

  // DELETE: Xóa thiết bị
  const handleDelete = async (id: number) => {
    if (!confirm("Bạn có chắc muốn xóa thiết bị này?")) return;
    try {
      await deleteDevice(id);
      fetchDevices();
    } catch (err) {
      alert("Xóa thất bại!");
    }
  };

  if (loading) return <p>Đang tải...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="devices-page">
      <h1>Danh sách thiết bị</h1>

      {/* Form thêm / sửa */}
      <div className="device-form">
        <h2>{editingId !== null ? "Cập nhật thiết bị" : "Thêm thiết bị mới"}</h2>
        <input placeholder="Tên thiết bị" value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
        <input placeholder="Loại" value={formData.type}
          onChange={(e) => setFormData({ ...formData, type: e.target.value })} />
        <input placeholder="Trạng thái" value={formData.status}
          onChange={(e) => setFormData({ ...formData, status: e.target.value })} />
        <input placeholder="Vị trí" value={formData.location}
          onChange={(e) => setFormData({ ...formData, location: e.target.value })} />
        <button onClick={handleSubmit}>
          {editingId !== null ? "Cập nhật" : "Thêm mới"}
        </button>
        {editingId !== null && (
          <button onClick={() => { setEditingId(null); setFormData({ name: "", type: "", status: "", location: "" }); }}>
            Hủy
          </button>
        )}
      </div>

      {/* Bảng danh sách */}
      <table className="devices-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Tên thiết bị</th>
            <th>Loại</th>
            <th>Trạng thái</th>
            <th>Vị trí</th>
            <th>Hành động</th>
          </tr>
        </thead>
        <tbody>
          {devices.map((device) => (
            <tr key={device.id}>
              <td>{device.id}</td>
              <td>{device.name}</td>
              <td>{device.type}</td>
              <td>{device.status}</td>
              <td>{device.location}</td>
              <td>
                <button onClick={() => handleEdit(device)}>Sửa</button>
                <button onClick={() => handleDelete(device.id)}>Xóa</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Devices;