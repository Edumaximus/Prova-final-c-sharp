import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Aluno } from "../../Aluno";

function AlunoCadastrar() {
  const navigate = useNavigate();

  const [nome, setNome] = useState<string>("");
  const [altura, setAltura] = useState<number>();
  const [quilos, setQuilos] = useState<number>();
  var [imc, setImc] = useState<number>();

  const cadastrarAluno = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const novoAluno: Aluno = {
      id: 0, // Id será gerado pelo banco de dados
      nome,
      altura ,
      quilos,
      imc:
    };

    try {
      const response = await fetch("http://localhost:5281/api/cadastrar", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(novoAluno),
      });

      if (!response.ok) {
        throw new Error("Erro na requisição: " + response.statusText);
      }

      const data = await response.json();
      console.log("Aluno cadastrado com sucesso:", data);
    } catch (error) {
      console.error("Erro ao cadastrar aluno:", error);
    }
  };

  return (
    <div>
      <h1>Cadastrar Filme</h1>
      <form onSubmit={cadastrarAluno}>
        <label>Título:</label>
        <input
          type="text"
          placeholder="Digite o nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          required
        />
        <br />
        <label>Sinopse:</label>
        <input
          type="number"
          placeholder="Digite a altura (metros)"
          value={altura}
          onChange={(e) => setAltura(e.target.value)}
          required
        />
        <br />
        <label>Gênero:</label>
        <input
          type="number"
          placeholder="Digite o peso (quilos)"
          value={quilos}
          onChange={(e) => setQuilos(e.target.value)}
          required
        />
        <br />
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );

  imc = quilos/altura^2

}

export default AlunoCadastrar;