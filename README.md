### Criação de projeto 
npm create vite@latest (com vite)
npx create-next-app@latest (com next)

### Explicação de termos 
VITE é uma ferramente de construção de projetos frontend que serve pra fornecer uma experiencia de desenvolvimento mais rápida e leve.

NPM é um gerenciador de pacotes usado pra instalar, gerenciar e atualizar dependencias de projeto.
NPX é o executor.

REACT é uma biblioteca do js, usa single page application. Não precisa usar o next pra usar react, pode usar o vite por exemplo .

NEXT é um framework que usa react.
VUE é outra opção de framework (não usa react).

PROPS - propriedades

LET é uma variável 
CONST é constante não pode ser alterada posteriormente 

### Exemplos e explicações
Funções que vão ser utilizadas no on são criadas com handle...
 function handleClick (){
    setNumero(prevState => prevState + 1);
 }

 - Sempre que usa um hook ele vem com o valor e com uma função, tem que usar sempre um array. 

 const[numero, setNumero] = useState(0) (pode ser usado uma arrow funtion aq dentro. ex: {});
 setNumero seria uma função e numero um valor.

-  Sempre precisa saber onde vamos inserir o estado por que sempre vamos mover o estado pro componente pai dele depois unifica esses componentes dentro de um contexto.

- Sempre que for alterar um objeto ou um array mutável, precisa copiar o prevState (...prevState) e depois que altera no novo objeto ou array.