import Titulo from "../../components/Titulo";

export default function usandoTitulo() {
  return (
    <div>
      {/* <h1>Usando Título</h1> */}
      <Titulo
        principal="Página de Cadastro"
        descricao="Incluir, alterar e excluir"
      />
      <Titulo
        principal="Página de Login"
        descricao="Informe seu email e senha"
        pequeno
      />
    </div>
  );
}
