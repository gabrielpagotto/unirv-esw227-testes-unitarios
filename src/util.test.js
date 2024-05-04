const {
    media,
    ehEmailValido,
    ehCPFValido,
    ehCNPJValido,
    verificarFormatoTelefone
} = require('./util');

test('Calcula a média de uma lista de números', () => {
    expect(media([1, 2, 3, 4, 5])).toBe(3);
    expect(media([10, 20, 30])).toBe(20);
    expect(media([0, 0, 0, 0, 0])).toBe(0);
});

test('Valida se um email é válido', () => {
    expect(ehEmailValido('email@example.com')).toBe(true);
    expect(ehEmailValido('invalido@')).toBe(false);
    expect(ehEmailValido('outroemail.com')).toBe(false);
    expect(ehEmailValido('email@com')).toBe(false);
});

test('Valida se um CPF é válido', () => {
    expect(ehCPFValido('529.982.247-25')).toBe(true);
    expect(ehCPFValido('529.982.247-26')).toBe(false);
    expect(ehCPFValido('000.000.000-00')).toBe(false);
});

test('Valida se um CNPJ é válido', () => {
    expect(ehCNPJValido('04.252.011/0001-10')).toBe(true);
    expect(ehCNPJValido('04.252.011/0001-11')).toBe(false);
    expect(ehCNPJValido('00.000.000/0000-00')).toBe(false);
});

test('Verifica se um telefone está formatado corretamente', () => {
    expect(verificarFormatoTelefone('(11) 91234-5678')).toBe(true);
    expect(verificarFormatoTelefone('(21) 98765-4321')).toBe(true);
    expect(verificarFormatoTelefone('(31) 1234-5678')).toBe(false);
    expect(verificarFormatoTelefone('11) 91234-5678')).toBe(false);
    expect(verificarFormatoTelefone('(11) 912345678')).toBe(false);
});