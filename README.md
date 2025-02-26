# Validador de Bandeira de Cartão de Crédito

Este projeto é um validador de números de cartões de crédito que identifica a bandeira (Visa, MasterCard, American Express, Discover, Diners Club, JCB, entre outros) com base no número do cartão. O projeto foi desenvolvido utilizando JavaScript e Node.js.

## Funcionalidades

- Validação de números de cartões de crédito utilizando o algoritmo de Luhn.
- Identificação da bandeira do cartão de crédito com base em padrões de regex.

## Estrutura do Projeto

- `index.js`: Contém a lógica principal para validação e identificação da bandeira do cartão de crédito.
- `README.md`: Este arquivo, que fornece uma visão geral do projeto.

## Uso

Para executar o projeto, siga os passos abaixo:

1. Certifique-se de ter o Node.js instalado em sua máquina.
2. Navegue até o diretório do projeto no terminal.
3. Execute o comando `node index.js` para rodar o script de validação.

Exemplo de uso no código:

```javascript
const cardInfo = validateCreditCard('4111111111111111');
console.log(cardInfo); // { isValid: true, bandeira: 'visa' }
```

> Você também pode gerar um número aleatório em [4devs](https://www.4devs.com.br/gerador_de_numero_cartao_credito)