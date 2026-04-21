using Microsoft.AspNetCore.Mvc;
using backend.Models;

namespace backend.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class DevicesController : ControllerBase
    {
        // Dữ liệu giả lưu trong bộ nhớ
        private static List<Device> _devices = new List<Device>
        {
            new Device { Id = 1, Name = "Máy chiếu A1", Type = "Máy chiếu", Status = "Hoạt động", Location = "Tầng 1" },
            new Device { Id = 2, Name = "Điều hòa B2", Type = "Điều hòa", Status = "Hoạt động", Location = "Tầng 2" },
            new Device { Id = 3, Name = "Máy tính C3", Type = "Máy tính", Status = "Hỏng", Location = "Tầng 3" }
        };

        // GET: api/devices
        [HttpGet]
        public ActionResult<List<Device>> GetAll()
        {
            return Ok(_devices);
        }

        // GET: api/devices/1
        [HttpGet("{id}")]
        public ActionResult<Device> GetById(int id)
        {
            var device = _devices.FirstOrDefault(d => d.Id == id);
            if (device == null)
                return NotFound(new { message = $"Không tìm thấy thiết bị có Id = {id}" });

            return Ok(device);
        }

        // POST: api/devices
        [HttpPost]
        public ActionResult<Device> Create([FromBody] Device device)
        {
            device.Id = _devices.Count > 0 ? _devices.Max(d => d.Id) + 1 : 1;
            _devices.Add(device);
            return CreatedAtAction(nameof(GetById), new { id = device.Id }, device);
        }

        // PUT: api/devices/1
        [HttpPut("{id}")]
        public ActionResult<Device> Update(int id, [FromBody] Device updatedDevice)
        {
            var device = _devices.FirstOrDefault(d => d.Id == id);
            if (device == null)
                return NotFound(new { message = $"Không tìm thấy thiết bị có Id = {id}" });

            device.Name = updatedDevice.Name;
            device.Type = updatedDevice.Type;
            device.Status = updatedDevice.Status;
            device.Location = updatedDevice.Location;

            return Ok(device);
        }

        // DELETE: api/devices/1
        [HttpDelete("{id}")]
        public ActionResult Delete(int id)
        {
            var device = _devices.FirstOrDefault(d => d.Id == id);
            if (device == null)
                return NotFound(new { message = $"Không tìm thấy thiết bị có Id = {id}" });

            _devices.Remove(device);
            return Ok(new { message = $"Đã xóa thiết bị Id = {id}" });
        }
    }
}