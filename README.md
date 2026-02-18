vite é uma ferramente de construção de projetos frontend que serve pra fornecer uma experiencia de desenvolvimento mais rápida e leve.

npm é um gerenciador de pacotes usado pra instalar, gerencia e atualizar dependencias de projeto
npx é o executor.

react é uma biblioteca do js, usa single page application. não precisa usar o next pra usar react, pode usar o vite por exemplo 
next é um framework que usa react 
vue é um framework


 npm create vite@latest


 props - propriedade 
 

 funções que vão ser utilizadas no on são criadas com handle...

 arrow function: onClick = {handleClick}

 let é uma variável 
 const é constante não pode ser alterada posteriormente 

 - sempre que usa hook ele vem com o valor e com uma função, tem que usar sempre um array 
 const [numero, setNumero] = useState(0);
 setNumero seria uma função 


 const[numero, setNumero] = useState(0 pode ser usado uma arrow funtion aq dentro);

 function handleClick (){
    setNumero(prevState => prevState + 1);
 }