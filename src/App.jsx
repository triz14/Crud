import * as Dialog from "@radix-ui/react-dialog"
import './App.css'
import '@radix-ui/themes/styles.css';

export function App() {
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

          <div className="divTable">
            <table>
              <thead>
                <tr>
                  <th>Nome</th>
                  <th>Sobrenome</th>
                  <th>Cep</th>
                  <th>Rua</th>
                  <th>Cidade</th>
                  <th>UF</th>
                  <th>Bairro</th>
                  <th>Número</th>
                  <th>Complemento</th>
                  <th>Profissão</th>
                  <th>Editar</th>
                  <th>Excluir</th>
                  <th className="acao">Editar</th>
                  <th className="acao">Excluir</th>
                </tr>
              </thead>
              <tbody>
              </tbody>
            </table>
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
                <input id="m-nome" type="text" required />
        
                <label>Sobrenome</label>
                <input id="m-funcao" type="text" required />
        
                <label>Cep</label>
                <input id="m-salario" type="text" required />

                <label>Rua</label>
                <input id="m-salario" type="text" required />

                <label>Cidade</label>
                <input id="m-salario" type="text" required />

                <label>UF</label>
                <input id="m-salario" type="text" required />

                <label>Bairro</label>
                <input id="m-salario" type="text" required />
                
                <label>Número</label>
                <input id="m-salario" type="text" required />

                <label>Complemento</label>
                <input id="m-salario" type="text" />

                <label>Profissão</label>
                <input id="m-salario" type="text" required />
              </div>
                
              <div className="flex">
                <button className="Button green" id="btnSalvar">Save changes</button>
              </div>
              
            </Dialog.Content>
          </Dialog.Overlay>        
        </div>
      </div>
    </Dialog.Root>
  )
}
