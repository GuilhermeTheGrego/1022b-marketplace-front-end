import { useEffect, useState } from 'react'
import './App.css'

type ProdutoType = {
  id:number,
  nome:string,
  descricao:string,
  preco:string,
  imagem:string
}
type UsuarioType = {
 id:number,
 nome:string,
 email:string,
 create_at:string,
 update_at:string
}


function App() {
  const [produtos, setProdutos] = useState<ProdutoType[]>([])
  const[usuarios,setUsuarios]=useState<UsuarioType[]>([])
  //useEffect(Oque fazer, quando fazer)
  useEffect(()=>{
    console.log("Gui the Grego")
    fetch("https://one022b-marketplace-7b6j.onrender.com/produtos")
    .then(resposta=>resposta.json())
    .then(dados=>setProdutos(dados))
  
  },[])
  useEffect(()=>{
    console.log("Gui the Grego")
    fetch("https://one022b-marketplace-7b6j.onrender.com/produtos")
    .then(resposta=>resposta.json())
    .then(dados=>setUsuarios(dados))
  },[])

  return (
    <>
      <div className='container-produtos'>
      {produtos.map(prod=>{
        return(
          <div key={prod.id}  className='produto-item'>
            <h1>{prod.nome}</h1>
            <p>{prod.imagem}</p>
            <img src={prod.imagem} alt="Imagem do celular"/>
            <p>{prod.descricao}</p>
          </div>
        )
      })}
      <div className='container-produtos'>
      {usuarios.map(usua=>{
        return(
          <div key={usua.id}  className='produto-item'>
            <h1>{usua.nome}</h1>
            <p>{usua.email}</p>
            <h1>{usua.create_at}</h1>
            <p>{usua.update_at}</p>
          </div>
        )
      })}
      </div>
      
  </>
 

export default Aapp
