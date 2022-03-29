# projetinho_de_loteria_simulador
simulador de loteria que o usuario escolhe 6 números 
e o programa sorteia outros 6 números e após isao
verifica a quantidade de acertos

## Tecnologias Utilizadas
- **HTML:** _Estrutura do SITE_
- **CSS:** _Estilo do SITE_
- **jS:** _Funções do SITE_
- ~~BootStrap~~: _Não foi utilizado_

###Melhorias Possíveis
1. [x] subir no github pages
2. [ ] Trocar o alert por mensagens mais amigaveis
3. [ ] Realizar testes para descobrir bugs🕷


### Disponível em:
[GithubPages](https://wendelzin10.github.io/projetinho_de_loteria_simulador/)

### Prints da Tela do WebApp

| Tela Inicial | Primeira Rodada | 
|--------------|-----------------|
| ![Tela inicial do site](/img/Tela1.png)   | ![Tela preenchida do site](/img/Tela2.png)   |


### Código Principal
```js: 
function vereficaAcertos() {
   let cont = 0
   numDig.forEach(function (valor, index) {
      if (numSort.includes(valor)) {
         cont = cont + 1
      }
   })
   document.getElementById("total").innerText = cont
}
```