const objetoo = {
    nome: "astrodev",
    profissao: "Dev das estrelas",
    username: "astrodev_labenu",
    senha: "melhorDeTodos"
}
let indice=0
const caixaAlta=(objeto)=>{
    return objeto={
        nome:objeto.nome.toUpperCase(),
        profissao:objeto.profissao.toUpperCase(),
        username:objeto.username.toUpperCase(),
        senha:objeto.senha.toUpperCase()
    }
}
  console.log(caixaAlta(objetoo))

  const textoCorrido=(objeto)=>{
    return `Olá meu nome é ${objeto.nome},minha profissão é ${objeto.profissao},meu username é ${objeto.username} e minha senha é ${objeto.senha}`
  }
    console.log(textoCorrido(objetoo))

    function imprimir(objeto,callback){
        console.log(callback(objeto))
    }
       imprimir(objetoo,caixaAlta)
       imprimir(objetoo,textoCorrido)