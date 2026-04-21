import axiosInstance from "./axiosInstance";

// Định nghĩa kiểu dữ liệu Room
export interface Room {
  id: number;
  name: string;
  capacity: number;
  status: string;
  floor: string;
}

// GET: Lấy tất cả phòng
export const getAllRooms = async (): Promise<Room[]> => {
  const response = await axiosInstance.get("/rooms");
  return response.data;
};

// GET: Lấy phòng theo id
export const getRoomById = async (id: number): Promise<Room> => {
  const response = await axiosInstance.get(`/rooms/${id}`);
  return response.data;
};

// POST: Tạo phòng mới
export const createRoom = async (room: Omit<Room, "id">): Promise<Room> => {
  const response = await axiosInstance.post("/rooms", room);
  return response.data;
};

// PUT: Cập nhật phòng
export const updateRoom = async (id: number, room: Omit<Room, "id">): Promise<Room> => {
  const response = await axiosInstance.put(`/rooms/${id}`, room);
  return response.data;
};

// DELETE: Xóa phòng
export const deleteRoom = async (id: number): Promise<void> => {
  await axiosInstance.delete(`/rooms/${id}`);
};