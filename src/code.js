function getApi(url) {
  let request = new XMLHttpRequest();
  request.open("GET", url, false);
  request.send();
  return request.responseText;
}

function CriarLinha(element) {
  linha = document.createElement("tr");
  tdNome = document.createElement("td");
  tdDescricao = document.createElement("td");
  tdLogin = document.createElement("td");
  img = document.createElement("img");
  img.setAttribute("src", element.owner.avatar_url);
  img.setAttribute("alt", element.owner.login);
  tdAvatar = document.createElement("td");
  tdAvatar.setAttribute("class", "image");
  tdNome.setAttribute("class", "nome");
  tdDescricao.setAttribute("class", "descricao");

  tdNome.innerHTML = element.full_name;
  tdDescricao.innerHTML = element.description;
  tdLogin.innerHTML = element.owner.login;
  tdAvatar.appendChild(img);

  linha.appendChild(tdAvatar);
  linha.appendChild(tdNome);
  linha.appendChild(tdDescricao);
  linha.appendChild(tdLogin);
  return linha;
}

function main() {
  const tabela = document.getElementById("tabela");
  const dados = getApi("https://api.github.com/search/repositories?q=dnit");
  const dadosTratados = JSON.parse(dados).items;

  dadosTratados.forEach((element) => {
    const linha = CriarLinha(element);
    tabela.appendChild(linha);
  });
  console.log(dadosTratados);

  /** for (let i = 0; i < dadosTratados.items.length; i++) {
    dado = dadosTratados.items[i];
    const linha = CriarLinha(dado);
    tabela.appendChild(linha);
  }
  
  for (let a = 0; a < dadosTratados.items.length; a++) {
    for (let i = 0; i < dadosTratados.items.length; i++) {
      dadosArray[0] = dadosTratados.items[i].full_name;
      dadosArray[1] = dadosTratados.items[i].description;
      dadosArray[2] = dadosTratados.items[i].owner.login;
      dadosArray[3] = dadosTratados.items[i].owner.avatar_url;
    }
    arraydado[a] = dadosArray;
  }*/
}
main();
