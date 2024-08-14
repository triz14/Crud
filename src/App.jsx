import './App.css'
import { useState, useEffect } from 'react';

export function App() {

  const [nome, setNome] = useState("")
  const [nomeModificado, setNomeModificado] = useState("")
  const [sobrenome, setSobrenome] = useState("")
  const [sobrenomeModificado, setSobrenomeModificado] = useState("")
  const [cep, setCep] = useState(0)
  const [cepModificado, setCepModificado] = useState(0)
  const [rua, setRua] = useState("")
  const [ruaModificado, setRuaModificado] = useState("")
  const [cidade, setCidade] = useState("")
  const [cidadeModificado, setCidadeModificado] = useState("")
  const [uf, setUf] = useState("")
  const [ufModificado, setUfModificado] = useState("")
  const [bairro, setBairro] = useState("")
  const [bairroModificado, setBairroModificado] = useState("")
  const [numero, setNumero] = useState(0)
  const [numeroModificado, setNumeroModificado] = useState(0)
  const [complemento, setComplemento] = useState("")
  const [complementoModificado, setComplementoModificado] = useState("")
  const [profissao, setProfissao] = useState("")
  const [profissaoModificado, setProfissaoModificado] = useState("")
  const [users, setUsers] = useState([])
  const [selectedUser, setSelectedUser] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  function handleCreate() {
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

  function handleAlter(index) {
    const id = users[index]
    setSelectedUser(index)
    setModalOpen(true)
    setNome(id.nome)
    }

  function handleUpdate(){
    const update = [...users]
    update[selectedUser] = {
      ...update[selectedUser],
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

    setUsers(update)
    setModalOpen(false)
    setSelectedUser(null)
  }

  function handleDelete(index) {
    const deleteUsers = [...users]
    deleteUsers.splice(index, 1)
    setUsers(deleteUsers)
  }

  return (
    <div className="body">
      <div className="container">
        <header>
          <h1>Cadastro Pessoa</h1>
          <button onClick={() => setModalOpen(true)} className="open_button">
            Cadastrar
          </button>
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
          {users.map((user,index) => {
            return (
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
                <button className="open_button itemGrid" onClick={() => handleAlter(index)}>
                  Editar
                </button>
                <button className="itemGrid" onClick={() => {handleDelete(index)}}>Excluir</button>
              </div>
            )
          })}
        </div>

        {modalOpen && (
          <div className="modal">
            <div className="DialogOverlay">
              <div className="DialogContent">
                <h2>Insira os dados</h2>
                <button className="IconButton" aria-label="Close" onClick={() => setModalOpen(false)}>
                  X
                </button>
                <div className="grid">
                  <label>Nome</label>
                  <input
                    type="text"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    required
                  />
                  <label>Sobrenome</label>
                  <input
                    type="text"
                    value={sobrenome}
                    onChange={(e) => setSobrenome(e.target.value)}
                    required
                  />
                  <label>Cep</label>
                  <input
                    type="text"
                    value={cep}
                    onChange={(e) => setCep(e.target.value)}
                    required
                  />
                  <label>Rua</label>
                  <input
                    type="text"
                    value={rua}
                    onChange={(e) => setRua(e.target.value)}
                    required
                  />
                  <label>Cidade</label>
                  <input
                    type="text"
                    value={cidade}
                    onChange={(e) => setCidade(e.target.value)}
                    required
                  />
                  <label>uf</label>
                  <input
                    type="text"
                    value={uf}
                    onChange={(e) => setUf(e.target.value)}
                    required
                  />
                  <label>Bairro</label>
                  <input
                    type="text"
                    value={bairro}
                    onChange={(e) => setBairro(e.target.value)}
                    required
                  />
                  <label>Numero</label>
                  <input
                    type="text"
                    value={numero}
                    onChange={(e) => setNumero(e.target.value)}
                    required
                  />
                  <label>Complemento</label>
                  <input
                    type="text"
                    value={complemento}
                    onChange={(e) => setComplemento(e.target.value)}
                    required
                  />
                  <label>Profissão</label>
                  <input
                    type="text"
                    value={profissao}
                    onChange={(e) => setProfissao(e.target.value)}
                    required
                  />
                </div>
                <div className="flex">
                  {selectedUser !== null ? (
                    <button className="Button green" onClick={handleUpdate}>
                      Alterar
                    </button>
                  ) : (
                    <button className="Button green" onClick={handleCreate}>
                      Fazer cadastro
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
