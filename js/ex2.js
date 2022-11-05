function validar(){
    let cpf = cadastro.cpf.value
    let senha = cadastro.senha.value
    let confirm = cadastro.confirm.value
    if (isNaN(cpf)){
        alert("Informe apenas números para o campo CPF")
        cadastro.cpf.focus()
        return false
    }
    if (cpf.length != 11){
        alert ("CPF Invalido")
        cadastro.cpf.focus()
        return false
    }

    if (senha !== confirm){
        alert("Senhas não conferem")
        cadastro.confirm.focus
        return false
    }
    const regex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^\w\s]).{6/10}$/ 
    //(?=.*?[A-Z]) = Mínimo uma letra maiúscula
    //(?=.*?[a-z]) = Mínimo uma letra minúscula
    //(?=.*?[0-9]) = Mínimo um número
    //(?=.*?[^\w\s]) = Mínimo um caractere especial
    //{6/10} = Entre 6 e 10 caracteres

    if (!regex.exec(senha)){
        alert ("Senha: \n 1 letra maiúscula \n 1 letra minúscula \n 1 número \n 1 caractere especial \n Entre 6 e 10 caracteres*")
        cadastro.senha.focus()
        return false
    }
}