# medic-ai-frontend
Frontend de um assistente inteligente em orientação para a  saúde.

#### Objetivo
Desenvolver um assistente que responda a perguntas educativas sobre saúde, prevenção de doenças, vacinação e hábitos saudáveis, usando uma base de conhecimento previamente selecionada.

## MVP frontend

Interface em azul e branco, construída com React, TypeScript e Vite. O planejamento e o acompanhamento das tarefas estão em [TASKS.md](TASKS.md).

### Executar

Requisito: Node.js 22.18+ ou 24+ e npm.

```bash
npm install
npm run dev
```

Abra o endereço informado pelo Vite no terminal. Para gerar e conferir a versão de produção:

```bash
npm test
npm run build
npm run preview
```

### Funcionalidades

- Assistente com perguntas livres, sugestões por tema e respostas simuladas.
- Histórico de conversas neste navegador, retomada e exclusão na página Sobre.
- Biblioteca pesquisável com links do Ministério da Saúde.
- Layout responsivo, navegação por teclado, rótulos acessíveis e suporte a movimento reduzido.

### Estrutura

```text
src/
  components/       # Elementos compartilhados
  data/             # Temas e materiais selecionados
  features/chat/    # Tipos, serviço mock, estado e testes do assistente
  App.tsx           # Composição de telas e navegação local
  main.tsx          # Entrada da aplicação
  styles.css        # Identidade visual e responsividade
```

A estrutura usa componentes funcionais, hooks e estado local, seguindo a abordagem de composição da [documentação oficial do React](https://react.dev/learn/thinking-in-react). Não há necessidade de roteador ou gerenciador global de estado para as três telas deste MVP. Os ícones usam Lucide. A fonte Poppins é carregada do Google Fonts, com fallback local sans-serif.

### Dados e integração futura

Não existe backend ou IA conectada. `src/features/chat/service.ts` expõe `sendMessage`, uma função assíncrona com latência simulada e respostas selecionadas por palavras-chave. Para integrar uma API, substitua sua implementação preservando o contrato de conteúdo e fonte e adicione o tratamento de falhas de rede na interface.

O histórico usa `localStorage` com a chave `medic-ai:conversations:v1`. Os dados permanecem neste navegador; não existe autenticação, sincronização ou criptografia própria. Evite dados pessoais ou sensíveis. Se o armazenamento estiver indisponível, a aplicação mantém as conversas apenas em memória e exibe um aviso.

Os testes verificam seleção temática, normalização de acentos, prioridade de limites clínicos e resposta fora do escopo. A seleção por palavras-chave é apenas demonstrativa: não é uma barreira de segurança clínica adequada para produção.

Verificação desta entrega: cinco testes aprovados e build de produção concluído. Revisão visual manual pendente. A auditoria npm identificou quatro alertas altos nas dependências de desenvolvimento do Vite relacionados ao [picomatch](https://github.com/advisories/GHSA-fc5q-39xc-vjpf); a versão mais recente disponível no registro consultado (4.0.7) ainda está afetada. Acompanhar a atualização antes de publicar.

### Conteúdo educativo

Os exemplos são introdutórios e não substituem avaliação profissional. A base completa do produto ainda deverá ser selecionada e revisada. Referências desta demonstração:

- [Saúde de A a Z](https://www.gov.br/saude/pt-br/assuntos/saude-de-a-a-z/)
- [Vacinação](https://www.gov.br/saude/pt-br/vacinacao)
- [Guia alimentar para a população brasileira](https://bvsms.saude.gov.br/bvs/publicacoes/guia_alimentar_pop_bras.pdf)
