//meu hobbies:
const hobbies = [`Jogar VideoGame`, `Programar`, `Assistir Filmes`];

//troca de valores no array:

hobbies[2] = "Ler livros de Mistério";

//para ver a quantidade de hobbies:

console.log(hobbies.length);

//adicionando um novo valor no array de hobbies com o push:

hobbies.push("Brincar com os meus gatos");

console.log(hobbies);

//usando o pop para retirar o último item da lista de arrays:

hobbies.pop();

console.log(hobbies);

//para excluir um valor específico do seu array:

let posicao = hobbies.indexOf("Programar");

hobbies.splice(posicao, 1);

console.log(hobbies);

//criando um array de hobbies de amigos para junção:

const hobbiesAmigo = ["Cozinhar", "Cantar", "Tocar Piano"];

//concatenando os arrays:

todosOsHobbies = hobbies.concat(hobbiesAmigo);

console.log(todosOsHobbies);

//organizações de arrays por categorias:

const musicais = ["Cantar", "Tocar Piano", "Dançar"];
const passaTempo = ["Jogar VideoGame", "Ler Livros de Mistério", "Desenhar"];
const educativo = ["Programar", "Assistir VideoAulas", "Fazer Exercícios de Programação"];

const categoriasHobbies = [musicais, passaTempo, educativo];

//Para ver somente uma categoria por posição:

console.log(categoriasHobbies[1]);

//acessando itens específicos das categorias de hobbie:

console.log(categoriasHobbies[2][0]);

console.log(categoriasHobbies[2][2]);