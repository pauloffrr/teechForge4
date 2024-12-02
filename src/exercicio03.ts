// Exercício 3:
// Crie uma classe Produto com os atributos nome (string), preço (number) e quantidade (number). 
// Adicione um método para calcular o valor total em estoque (preço * quantidade).

class Produto {
    nome: string;
    preco: number;
    quantidade: number;
  
    constructor(nome: string, preco: number, quantidade: number) {
      this.nome = nome;
      this.preco = preco;
      this.quantidade = quantidade;
    }
  
    calcularValorTotalEmEstoque(): number {
      return this.preco * this.quantidade;
    }
  }
  
  const produto = new Produto("Notebook", 3500, 10);
  console.log(`Valor total em estoque: R$ ${produto.calcularValorTotalEmEstoque().toFixed(2)}`);
  