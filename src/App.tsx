import { useEffect, useState } from 'react';
import './App.css';

type ProdutoType = {
  id: number;
  nome: string;
  descricao: string;
  preco: string;
  imagem: string;
};

type UsuarioType = {
  id: number;
  nome: string;
  email: string;
  create_at: string;
  update_at: string;
};

function App() {
  const [produtos, setProdutos] = useState<ProdutoType[]>([]);
  const [usuarios, setUsuarios] = useState<UsuarioType[]>([]);

  useEffect(() => {
    console.log("Carregando produtos...");
    fetch("https://one022b-marketplace-7b6j.onrender.com/produtos")
      .then(resposta => resposta.json())
      .then(dados => setProdutos(dados))
      .catch(error => console.error("Erro ao buscar produtos:", error));
  }, []);

  useEffect(() => {
    console.log("Carregando usuários...");
    fetch("https://one022b-marketplace-7b6j.onrender.com/usuarios")
      .then(resposta => resposta.json())
      .then(dados => setUsuarios(dados))
      .catch(error => console.error("Erro ao buscar usuários:", error));
  }, []);

  return (
    <>
      <div className='container-produtos'>
        {produtos.map(prod => (
          <div key={prod.id} className='produto-item'>
            <h1>{prod.nome}</h1>
            <img src='{prod.imagem}'/>
            <p>{prod.descricao}</p>
            <p>{prod.preco}</p>

          </div>
        ))}
      </div>
      <div className='container-usuarios'>
        {usuarios.map(usua => (
          <div key={usua.id} className='usuario-item'>
            <h1>{usua.nome}</h1>
            <p>{usua.email}</p>
            <p>{usua.create_at}</p>
            <p>{usua.update_at}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
