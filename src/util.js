//Funcao para calcular méida
function media(lista) {
    const soma = lista.reduce((acc, num) => acc + num, 0);
    return soma / lista.length;
}


//Funcao para verificar se um email é valido ou nao
function ehEmailValido(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}


//Funcao para verificar se um CPF é valido ou nao
function ehCPFValido(cpf) {
    cpf = cpf.replace(/[^\d]/g, '');

    if (cpf.length !== 11) {
        return false;
    }

    if (/^(\d)\1+$/.test(cpf)) {
        return false;
    }

    let soma = 0;
        for (let i = 0; i < 9; i++) {
            soma += parseInt(cpf.charAt(i)) * (10 - i);
        }

    let resto = soma % 11;
    let digitoVerificador1 = resto < 2 ? 0 : 11 - resto;

    if (parseInt(cpf.charAt(9)) !== digitoVerificador1) {
        return false;
    }

    soma = 0;
    
    for (let i = 0; i < 10; i++) {
        soma += parseInt(cpf.charAt(i)) * (11 - i);
    }

    resto = soma % 11;
    let digitoVerificador2 = resto < 2 ? 0 : 11 - resto;

    if (parseInt(cpf.charAt(10)) !== digitoVerificador2) {
        return false;
    }

    return true;
}


//Funcao para verificar se um CNPJ é valido
function ehCNPJValido(cnpj) {
    cnpj = cnpj.replace(/[^\d]/g, '');

    if (cnpj.length !== 14) {
        return false;
    }

    if (/^(\d)\1+$/.test(cnpj)) {
        return false;
    }

    let soma = 0;
    let peso = 2;
    for (let i = 11; i >= 0; i--) {
        soma += parseInt(cnpj.charAt(i)) * peso;
        peso = peso === 9 ? 2 : peso + 1;
    }
    
    let resto = soma % 11;
    let digitoVerificador1 = resto < 2 ? 0 : 11 - resto;

    if (parseInt(cnpj.charAt(12)) !== digitoVerificador1) {
        return false;
    }

    soma = 0;
    peso = 2;
    
    for (let i = 12; i >= 0; i--) {
        soma += parseInt(cnpj.charAt(i)) * peso;
        peso = peso === 9 ? 2 : peso + 1;
    }
    
    resto = soma % 11;
    let digitoVerificador2 = resto < 2 ? 0 : 11 - resto;

    if (parseInt(cnpj.charAt(13)) !== digitoVerificador2) {
        return false;
    }

    return true;
}


//Funcao para validar um telefone está formatado no padrao (XX) 9XXXX-XXXX
function verificarFormatoTelefone(telefone) {
    const regex = /^\(\d{2}\) 9\d{4}-\d{4}$/;
    return regex.test(telefone);
}


module.exports = {
    media,
    ehEmailValido,
    ehCPFValido,
    ehCNPJValido,
    verificarFormatoTelefone
}