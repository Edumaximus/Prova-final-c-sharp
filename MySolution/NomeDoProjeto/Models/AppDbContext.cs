using Microsoft.EntityFrameworkCore;

namespace NomeDoProjeto.Models;

public class AppDbContext : DbContext
{
    public DbSet<Aluno> Alunos { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
        optionsBuilder.UseSqlite("Data Source=Banco.db");
    }
}