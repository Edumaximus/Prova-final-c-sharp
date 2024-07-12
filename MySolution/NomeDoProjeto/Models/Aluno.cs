namespace NomeDoProjeto.Models;
public class Aluno
{
	public int Id { get; set; }
	public string Nome { get; set; }
	public decimal Altura { get; set; }

    public decimal Quilos {get;set;}

    public decimal Imc {get;set;}
}