# Extrator de Notas de Corretagem

Este é o repositório do projeto "extrator-notas-corretagem", uma aplicação desenvolvida por Bruno Vieira para extrair informações de notas de corretagem em formato PDF. O projeto utiliza Node.js e TypeScript.

## Instalação

Antes de usar a aplicação, certifique-se de ter o Node.js e o TypeScript instalados em sua máquina. Você pode instalá-los executando:

```bash
npm install -g typescript
npm install -g ts-node
```

Após a instalação do TypeScript, clone este repositório e siga os passos abaixo:

1. Instale as dependências do projeto executando:

```bash
npm install
```

2. Certifique-se de configurar suas variáveis de ambiente. O arquivo `.env` é usado para armazenar informações sensíveis, como a porta em que o servidor será executado. Você pode criar um arquivo `.env` na raiz do projeto com as seguintes configurações:

```dotenv
PORT=3000
```

3. Inicie o servidor de desenvolvimento com o seguinte comando:

```bash
npm run dev
```

O servidor estará disponível em `http://localhost:3000` (ou na porta especificada no arquivo `.env`).

## Uso

Este projeto fornece dois endpoints principais:

1. **Endpoint de Extração de Notas de Corretagem (PDF Parse)**:

   - **URL**: `/pdf/pdf-parse`
   - **Método HTTP**: POST
   - **Corpo da Requisição**: JSON contendo o caminho para o arquivo PDF a ser processado.
   - **Exemplo de Requisição**:

   ```json
   {
     "path": "/caminho/para/arquivo.pdf"
   }
   ```

   - **Exemplo de Resposta**:

   ```json
   {
     "raw": ["Conteúdo bruto do PDF"]
   }
   ```

   Este endpoint permite a extração do conteúdo bruto de um arquivo PDF, que pode conter informações de notas de corretagem.

## Dependências Principais

- `express`: Framework para criação de aplicativos web em Node.js.
- `pdf-parse`: Uma biblioteca para extrair texto e metadados de arquivos PDF.
- `dotenv`: Para configurar variáveis de ambiente.
- `nodemon`: Ferramenta de desenvolvimento que monitora alterações nos arquivos e reinicia automaticamente o servidor.
- `typescript`: Linguagem de programação que adiciona tipagem estática ao JavaScript.

## Contribuição

Se você deseja contribuir para este projeto, sinta-se à vontade para criar pull requests e abrir issues. Todas as contribuições são bem-vindas!

## Autor

- **Bruno Vieira** - [GitHub](https://github.com/seu-usuario)

## Licença

Este projeto é licenciado sob a Licença MIT - consulte o arquivo [LICENSE](LICENSE) para obter detalhes.

---

Obrigado por usar o Extrator de Notas de Corretagem! Se você tiver alguma dúvida ou precisar de ajuda, sinta-se à vontade para entrar em contato com o autor através do email vieira.es@gmail.com.