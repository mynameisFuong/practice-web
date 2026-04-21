var builder = WebApplication.CreateBuilder(args);

// Thêm Controllers
builder.Services.AddControllers();

// Cấu hình CORS cho phép React frontend gọi API
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowReactApp", policy =>
    {
        policy.WithOrigins("http://localhost:5173")
              .AllowAnyHeader()
              .AllowAnyMethod();
    });
});

var app = builder.Build();

app.UseCors("AllowReactApp");
app.MapControllers();
app.Run();