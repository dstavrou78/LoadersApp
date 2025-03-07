using FileLoader;
using LoadersApp.Server.Interfaces;
using LoadersApp.Server.Services;
using SqlServerLoader;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddKeyedScoped<ILoaderService, FileLoaderService>("FileLoader");
builder.Services.AddKeyedScoped<ILoaderService, DataLoaderService>("DataLoader");
builder.Services.AddTransient<IConversionService, ConversionService>();

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

app.UseDefaultFiles();
app.UseStaticFiles();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.MapFallbackToFile("/index.html");

app.Run();
