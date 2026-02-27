### Criação de projeto 
npm create vite@latest (com vite)
npx create-next-app@latest (com next)

### Explicação de termos 
VITE é uma ferramente de construção de projetos frontend que serve pra fornecer uma experiencia de desenvolvimento mais rápida e leve.

NPM é um gerenciador de pacotes usado pra instalar, gerenciar e atualizar dependencias de projeto.
NPX é o executor.

REACT é uma biblioteca do js, usa single page application. Não precisa usar o next pra usar react, pode usar o vite por exemplo .

NEXT é um framework que usa react. Tem o server side rendering, ele renderiza tudo no lado do servidor antes de ir pro cliente.
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

- Abraça todos os componentes que vão usar aquele mesmo contexto com o provider e eles vão ter o mesmo valor 
<TaskContext.Provider value={{ outraCoisa: 321 }}>
   <Home />
</TaskContext.Provider>


### React e Next 
- dentro de app sempre cria as pastas com o nome da page que você quer. ex: app/about/page.tsx -> /about 

- layout é o esqueleto do site, algo que repete em todas as pages e o layout raiz precisa tem html e o body, pode ser criado outros layouts dentro das pastas mas ele vem como filho do layout da raiz.

- server component, componente por padrão é server component, pode ser assincrono, vc não consegue usar metodos do navegador num server component (ex onclick). executados exclusivamente no servidor e não enviam js adicional pro navegador. busca de dados, conteúdo estático, consultas complexas.são carregados mais rápidos pq são menores e carregam antes de serem enviados pro cliente.

- client componente, coloca o 'useCliente', não pode ser assincrono.raramente converte a page inteira em client component, transforma so um componente menor. utiliza os hooks e interatividade.