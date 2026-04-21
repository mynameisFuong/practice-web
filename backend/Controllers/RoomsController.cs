using Microsoft.AspNetCore.Mvc;
using backend.Models;

namespace backend.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class RoomsController : ControllerBase
    {
        private static List<Room> _rooms = new List<Room>
        {
            new Room { Id = 1, Name = "Phòng 101", Capacity = 30, Status = "Trống", Floor = "Tầng 1" },
            new Room { Id = 2, Name = "Phòng 202", Capacity = 40, Status = "Đang dùng", Floor = "Tầng 2" },
            new Room { Id = 3, Name = "Phòng 303", Capacity = 25, Status = "Bảo trì", Floor = "Tầng 3" }
        };

        // GET: api/rooms
        [HttpGet]
        public ActionResult<List<Room>> GetAll()
        {
            return Ok(_rooms);
        }

        // GET: api/rooms/1
        [HttpGet("{id}")]
        public ActionResult<Room> GetById(int id)
        {
            var room = _rooms.FirstOrDefault(r => r.Id == id);
            if (room == null)
                return NotFound(new { message = $"Không tìm thấy phòng có Id = {id}" });

            return Ok(room);
        }

        // POST: api/rooms
        [HttpPost]
        public ActionResult<Room> Create([FromBody] Room room)
        {
            room.Id = _rooms.Count > 0 ? _rooms.Max(r => r.Id) + 1 : 1;
            _rooms.Add(room);
            return CreatedAtAction(nameof(GetById), new { id = room.Id }, room);
        }

        // PUT: api/rooms/1
        [HttpPut("{id}")]
        public ActionResult<Room> Update(int id, [FromBody] Room updatedRoom)
        {
            var room = _rooms.FirstOrDefault(r => r.Id == id);
            if (room == null)
                return NotFound(new { message = $"Không tìm thấy phòng có Id = {id}" });

            room.Name = updatedRoom.Name;
            room.Capacity = updatedRoom.Capacity;
            room.Status = updatedRoom.Status;
            room.Floor = updatedRoom.Floor;

            return Ok(room);
        }

        // DELETE: api/rooms/1
        [HttpDelete("{id}")]
        public ActionResult Delete(int id)
        {
            var room = _rooms.FirstOrDefault(r => r.Id == id);
            if (room == null)
                return NotFound(new { message = $"Không tìm thấy phòng có Id = {id}" });

            _rooms.Remove(room);
            return Ok(new { message = $"Đã xóa phòng Id = {id}" });
        }
    }
}