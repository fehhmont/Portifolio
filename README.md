
# Portifolio

Um simples Portifolio pra carreira dev, mostando as principais habilidades e os projetos no git hub.



## Instalação

faça o download dos arquivos, abra com o vscode e abra o terminal.

Quando tiver com o terminal do vscode aberto dentro da pasta do projeto rode os seguintes comando abaixo.
```bash
  npm install
  
  npm run dev
```
    
## Documentação da API

#### Retorna todos os itens

Para puxar os projeto do seu github abra o arquivo 

```http
  src/components/GitHubProjects.tsx
```

Edite a url do github, trocando o nome de fehhmont pelo seu nome de user do github

 
```http
  const response = await axios.get('https://api.github.com/users/fehhmont/repos');
```




## Autores

- [@fehhmont](https://www.github.com/fehhmont)

