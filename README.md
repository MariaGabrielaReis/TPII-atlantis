<h1 align="center">
  🏖🌊 Atlantis 🌊🏖 
</h1>

<p align="center">
  <a href="#projeto">Sobre o projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#requisitos">Como rodar</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#demo">Demonstração</a>
</p>

<span id="projeto">
  
# :bookmark_tabs: Sobre o projeto
Este é um sistema geral para gerenciamento de parques aquáticos, clubes e hotéis, onde o primeiro módulo criado atende a demandas acerca de clientes e 
seus dependentes (cadastrando-os e aplicando as devidas regras de negócio levantadas). 
> 💡 Atividade em TypeScript para prática de POO e Design Patterns criacionais (como Prototype)
  
Após a realização da primeira atividade, as classes do sistema se encontram relacionadas da seguinte maneira:
<div align="center">
  
![class_diagram](https://user-images.githubusercontent.com/69374340/174386575-60deb687-babd-4ede-bf8e-403b1f400542.png)
</div>

<span id="requisitos">

# :gear: Como rodar
Antes de começar, você vai precisar ter instalado o [Node.js](https://nodejs.org/en/) e o [Git](https://git-scm.com/). Após sua instalação, clone ou 
baixe este repositório e siga o passo a passo descrito abaixo por um terminal (recomendo o terminal integrado do Visual Studio Code):
```bash
# Acesse a pasta do projeto
$ cd TPII-atlantis
  
# Compile o código TypeScript para JavaScript
$ npx tsc

# Rode o projeto compilado
$ node js/test/index.js
```

<span id="demo">
  
# :desktop_computer: Demonstração
Para a primeira atividade  desafio era aplicar o padrão de projeto "Prototype" para clonagem do endereço e dos telefones de um cliente principal 
do parque para seus dependentes. Depois de aplicados, utilizando o comando `console.log()`, é possível ver as informações de ambos os clientes,
percebendo que seus endereços e telefones são iguais (seguindo a regra de negócio proposta de os dependentes terem o mesmo endereço e telefones 
que seus titulares)
<div align="center">
  
| Titular                                                          |  Dependente                                                      |
|:----------------------------------------------------------------:|:----------------------------------------------------------------:|
| ![titular](https://user-images.githubusercontent.com/69374340/174388925-e8948d0c-d9df-4fff-84b8-9cbe98bb5b83.png) | ![dependente](https://user-images.githubusercontent.com/69374340/174389021-037855bc-df32-488f-95ba-12deffe41b33.png) |
</div>
  
E, utilizando o comando `console.table()`, podemos obter os telefones cadastrados tanto no cliente principal como em seu dependente, observando 
assim sua equivalência
<div align="center">
  
![console_table](https://user-images.githubusercontent.com/69374340/174388230-96f8d598-e04d-4e9d-a298-c2360a370d92.png)
</div>

[![image](https://img.shields.io/badge/✨%20Maria%20Gabriela%20Reis,%202022-LinkedIn-009973?style=flat-square)](https://www.linkedin.com/in/mariagabrielareis/)
