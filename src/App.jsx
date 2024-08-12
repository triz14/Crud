import * as Dialog from "@radix-ui/react-dialog"
import './App.css'
import '@radix-ui/themes/styles.css';
import { useState, useEffect } from 'react';

export function App() {
  const [nome, setNome] = useState("")
  const [sobrenome, setSobrenome] = useState("")
  const [cep, setCep] = useState(0)
  const [rua, setRua] = useState("")
  const [cidade, setCidade] = useState("")
  const [uf, setUf] = useState("")
  const [bairro, setBairro] = useState("")
  const [numero, setNumero] = useState(0)
  const [complemento, setComplemento] = useState("")
  const [profissao, setProfissao] = useState("")
  const [users, setUsers] = useState([])

  function handleCreate(){
    const data = {
      nome,
      sobrenome,
      cep,
      rua,
      cidade,
      uf,
      bairro,
      numero,
      complemento,
      profissao
    }

    setUsers([...users, data])
  }

  useEffect(() => {
    console.log(users);
  }, [users]);

// function handleAlter(idUser){
//   const newData = {
//     nomeModificado: users[idUser].nome,
//     sobrenomeModificado,
//     cepModificado,
//     ruaModificado,
//     cidadeModificado,
//     ufModificado,
//     bairroModificado,
//     numeroModificado,
//     comnplementoModificado,
//     profissaoModificado
//   }

//   users[idUser].nome = newData.nomeModificado

// }



// function handleDelete(idUser){
//   users.splice(idUser, 1)
// }

  return (
    <Dialog.Root>
      <div className="body">
        <div className="container">
          <header>
            <h1>Cadastro Pessoa</h1>
            <Dialog.Trigger className="open_button">
              <p>Cadastrar</p>
            </Dialog.Trigger>
          </header>
          <div className="line"></div>

          <div>
            <div className="gridInfos">
              <span className="itemGrid">Nome</span>
              <span className="itemGrid">Sobrenome</span>
              <span className="itemGrid">Cep</span>
              <span className="itemGrid">Rua</span>
              <span className="itemGrid">Cidade</span>
              <span className="itemGrid">UF</span>
              <span className="itemGrid">Bairro</span>
              <span className="itemGrid">Número</span>
              <span className="itemGrid">Complemento</span>
              <span className="itemGrid">Profissão</span>
              <span className="itemGrid">Editar</span>
              <span className="itemGrid">Excluir</span>
            </div>
              {users.map(user => {
                return(
                  <div className="gridInfos">
                    <span className="itemGrid">{user.nome}</span>
                    <span className="itemGrid">{user.sobrenome}</span>
                    <span className="itemGrid">{user.cep}</span>
                    <span className="itemGrid">{user.rua}</span>
                    <span className="itemGrid">{user.cidade}</span>
                    <span className="itemGrid">{user.uf}</span>
                    <span className="itemGrid">{user.bairro}</span>
                    <span className="itemGrid">{user.numero}</span>
                    <span className="itemGrid">{user.complemento}</span>
                    <span className="itemGrid">{user.profissao}</span>
                    <Dialog.Trigger className="open_button itemGrid">
                    Editar
                    </Dialog.Trigger>
                      <button className="itemGrid">Excluir</button>
                  </div>
                )
              })}
          </div>

          <Dialog.Overlay className="DialogOverlay">
            <Dialog.Content className="DialogContent" >
              <h2 >Insira os dados</h2>
              <Dialog.Close asChild>
                <button className="IconButton" aria-label="Close">
                  X
                </button>
              </Dialog.Close>

              <div className="grid">
                <label>Nome</label>
                <input id="m-nome" type="text" onChange={(e) => setNome(e.target.value)} required />
        
                <label>Sobrenome</label>
                <input id="m-funcao" type="text" onChange={(e) => setSobrenome(e.target.value)} required />
        
                <label>Cep</label>
                <input id="m-salario" type="text" onChange={(e) => setCep(e.target.value)} required />

                <label>Rua</label>
                <input id="m-salario" type="text" onChange={(e) => setRua(e.target.value)}required />

                <label>Cidade</label>
                <input id="m-salario" type="text" onChange={(e) => setCidade(e.target.value)} required />

                <label>UF</label>
                <input id="m-salario" type="text" onChange={(e) => setUf(e.target.value)}required />

                <label>Bairro</label>
                <input id="m-salario" type="text" onChange={(e) => setBairro(e.target.value)} required />
                
                <label>Número</label>
                <input id="m-salario" type="text" onChange={(e) => setNumero(e.target.value)} required />

                <label>Complemento</label>
                <input id="m-salario" type="text" onChange={(e) => setComplemento(e.target.value)} />

                <label>Profissão</label>
                <input id="m-salario" type="text" onChange={(e) => setProfissao(e.target.value)}required />
              </div>
                
              <div className="flex">
                <button className="Button green" id="btnSalvar" onClick={handleCreate}>Fazer cadastro</button>

                <button className="Button green" id="btnSalvar" onClick={handleAlter}>Alterar</button>
              </div>
              
            </Dialog.Content>
          </Dialog.Overlay>        
        </div>
      </div>
    </Dialog.Root>

    
  )
}