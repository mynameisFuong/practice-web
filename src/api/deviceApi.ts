import axiosInstance from "./axiosInstance";

// Định nghĩa kiểu dữ liệu Device
export interface Device {
  id: number;
  name: string;
  type: string;
  status: string;
  location: string;
}

// GET: Lấy tất cả thiết bị
export const getAllDevices = async (): Promise<Device[]> => {
  const response = await axiosInstance.get("/devices");
  return response.data;
};

// GET: Lấy thiết bị theo id
export const getDeviceById = async (id: number): Promise<Device> => {
  const response = await axiosInstance.get(`/devices/${id}`);
  return response.data;
};

// POST: Tạo thiết bị mới
export const createDevice = async (device: Omit<Device, "id">): Promise<Device> => {
  const response = await axiosInstance.post("/devices", device);
  return response.data;
};

// PUT: Cập nhật thiết bị
export const updateDevice = async (id: number, device: Omit<Device, "id">): Promise<Device> => {
  const response = await axiosInstance.put(`/devices/${id}`, device);
  return response.data;
};

// DELETE: Xóa thiết bị
export const deleteDevice = async (id: number): Promise<void> => {
  await axiosInstance.delete(`/devices/${id}`);
};