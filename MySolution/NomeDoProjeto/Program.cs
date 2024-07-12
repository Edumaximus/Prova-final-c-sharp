using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Hosting;
using NomeDoProjeto.Models;

var builder = WebApplication.CreateBuilder(args);
var app = builder.Build();

builder.Services.AddCors(options =>
    options.AddPolicy("AcessoTotal",
        policy => policy
            .AllowAnyOrigin()
            .AllowAnyHeader()
            .AllowAnyMethod())
);

app.MapPost("/api/cadastrar", async (Aluno aluno, [FromServices] AppDbContext ctx) =>
{
    ctx.Alunos.Add(aluno);
    await ctx.SaveChangesAsync();
    return Results.Created($"/api/cadastrar/{aluno.Id}", aluno);
});



app.UseCors("AcessoTotal");
app.Run();