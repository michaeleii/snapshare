var builder = WebApplication.CreateBuilder(args);
var app = builder.Build();

app.MapGet("/cs", () => new { Message = "Hello World from Csharp!" });

app.Run();
