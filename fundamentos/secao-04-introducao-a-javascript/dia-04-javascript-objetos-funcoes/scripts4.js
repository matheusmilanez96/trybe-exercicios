let leitor = {
    nome: 'Julia',
    sobrenome: 'Pessoa',
    idade: 21,
    livrosFavoritos: [
      {
        titulo: 'O Pior Dia de Todos',
        autor: 'Daniela Kopsch',
        editora: 'Tordesilhas',
      },
    ],
  };

let livroJulia = leitor.livrosFavoritos[0]
console.log("O livro favorito de " + leitor.nome + " " + leitor.sobrenome + " se chama '" + livroJulia.titulo + "'");

let harryPotter = {
    titulo: 'Harry Potter e o Prisioneiro de Azkaban',
    autor: 'JK Rowling',
    editora: 'Rocco',
  }
leitor.livrosFavoritos.push(harryPotter)
console.log("Julia tem " + leitor.livrosFavoritos.length + " livros favoritos");