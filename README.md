# backend-nave

<h1 align="center">
  <img src='github/logo-white.png' alt='logo-white Nave' width=500 /> 

</h1>

# Indice

- 📝️ [Sobre](#%EF%B8%8F-sobre)
- 👨‍💻️ [Tecnogias utilizadas](#%EF%B8%8F-tecnogias-utilizadas)
- 📋️ [Patterns](#%EF%B8%8F-patterns)
- 📋️ [IDE e Facilidades](#%EF%B8%8F-ide-e-facilidades)
- 📦️ [Como baixar o projeto](#%EF%B8%8F-como-baixar-o-projeto)
- 📋️ [Rotas insomnia](#%EF%B8%8F-rotas-insomnia)
- 🤔️ [Como contribuir](#%EF%B8%8F-como-contribuir)
- 📝️ [CodesandBox Respostas](https://codesandbox.io/u/Jeison)

---

## 📝️ Sobre

O projeto foi desenvolvido para o processo seletivo de estágio da Nave.rs.
O sistema consiste em um banco de dados dos navers, possuindo informações como: nomes, datas de nascimento, cargo, tempo de empresa e projeto que participou. As datas de nascimento no banco de dados será estruturado por você, lembrando que é obrigatório as entidades de navers e projetos estarem relacionadas entre si. Deve ser possível saber em quais projetos um naver está e vice-versa.
---

## 👨‍💻️ Tecnogias utilizadas

O projeto foi desenvolvido utilizando as seguintes tecnologias:

- [TypeScript](https://www.npmjs.com/package/typescript)
- [SqLite3](https://www.npmjs.com/package/sqlite3)
- [Express](https://www.npmjs.com/package/express)
- [jest](https://www.npmjs.com/package/jest)
- [typeorm](https://www.npmjs.com/package/typeorm)
- [cors](https://www.npmjs.com/package/cors)

---
## 📋️ Patterns

O projeto foi desenvolvido utilizando os seguintes padrões:

- [RESTful]
- [MVC]
- [Reposiroty]

---

## 📋️ IDE e Facilidades

- [Visual Studio Code](https://code.visualstudio.com/)

- [Insomnia](https://insomnia.rest/)


## 📦️ Como baixar o projeto e testa-lo

```bash
  # Clonar o repositório
  ❯ git clone https://github.com/MiDrAjX/backend-nave.git

  # Entrar no diretório
  ❯ cd backend-nave

  # Instalando as dependências
  ❯ yarn
  # ou pode usar o `npm`
  ❯ npm install

  # Rodando as migrations
  ❯ yarn typeorm migration:run

  # Rodando testes automatizados com jest
  ❯ yarn test
```

## 📋️ Rotas Insomnia

<h1 align="center">
  <img src='github/PostNavers.png'/> 
  <img src='github/GetNavers.png'/> 
  <img src='github/GetIdNavers.png'/> 
  <img src='github/PutNavers.png'/> 
  <img src='github/DeleteNavers.png'/> 
</h1>

## 🤔️ Como contribuir

1. Faça o `fork` deste repositório
2. Crie uma branch com sua feature:
   - `$ git checkout -b minha_feature`
3. Confirme sua branch:
   - `$ git commit -m "feature: Meu novo recurso"`
4. Envie sua branch:
   - `$ git push origin minha_feature`

---

<h4 align="center">
  Feito com 💜 por Jeison 👋️ <a href="https://www.linkedin.com/in/jeison-marques/" target="_blank">Entre em contato!</a>
</h4>

---