// SCRIPT CADASTRO
function cadastroCliente() {
  let dadoNome = document.getElementById("campoNome");
  let dadoEmail = document.getElementById("campoEmail");
  let dadoTelefone = document.getElementById("campoTelefone");
  let dadoRua = document.getElementById("campoRua");
  let dadoCidade = document.getElementById("campoCidade");

  let dados = JSON.parse(localStorage.getItem("dadosCadastro"));

  if (dados == null) {
    localStorage.setItem("dadosCadastro", "[]");
    dados = [];
  }

  let auxRegistro = {
    nome: dadoNome.value,
    email: dadoEmail.value,
    telefone: dadoTelefone.value,
    rua: dadoRua.value,
    cudade: dadoCidade.value
  }

  dados.push(auxRegistro);

  localStorage.setItem("dadosCadastro", JSON.stringify(dados));
  alert("Cadastro realizado com sucesso. Obrigado!");

  dadoNome.value = "";
  dadoEmail.value = "";
  dadoTelefone.value = "";
  dadoRua.value = "";
  dadoCidade.value = "";
}

// SCRIPT CADASTRO
function cadastroProduto() {

  let dadoNomeProduto = document.getElementById("campoNamePorduct");
  let dadoDescricao = document.getElementById("campoDescritionProduct");
  let dadoID = document.getElementById("campoIdProduct");
  let dadoPreco = document.getElementById("campoPriceProduct");


  let dados = JSON.parse(localStorage.getItem("dadosCadastroProduto"));

  if (dados == null) {
    localStorage.setItem("dadosCadastroProduto", "[]");
    dados = [];
  }

  let auxRegistro = {
    nomeProduto: dadoNomeProduto.value,
    descricao: dadoDescricao.value,
    ID: dadoID.value,
    preco: dadoPreco.value
  }

  dados.push(auxRegistro);

  localStorage.setItem("dadosCadastroProduto", JSON.stringify(dados));
  alert("Cadastro realizado com sucesso. Obrigado!");

  dadoNomeProduto.value = "";
  dadoDescricao.value = "";
  dadoID.value = "";
  dadoPreco.value = "";
}

function iniciaModal(modalID) {
  const modal = document.getElementById(modalID);
  if (modal) {

    modal.classList.add('mostrar');
    modal.addEventListener('click', (e) => {
      if (e.target.id == modalID || e.target.id == 'fecharModal' || e.target.id == 'campoButtonCancel') {
        modal.classList.remove('mostrar');
      }
    })
  }
}

const usuario = document.querySelector('.buttonUsuario');
usuario.addEventListener('click', () => iniciaModal('modalCadastro'));

const produto = document.querySelector('.buttonProduto');
produto.addEventListener('click', () => iniciaModal('modalCadastroProduto'));