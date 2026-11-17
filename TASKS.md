# Plano de implementação do MVP

## 1. Fundação
- [x] React, TypeScript e Vite.
- [x] Componentes funcionais, estado local e estrutura por funcionalidade.
- [x] Identidade visual azul e branca e layout responsivo.

## 2. Assistente educativo
- [x] Tela inicial com temas e sugestões.
- [x] Envio de perguntas, estado de processamento e respostas simuladas.
- [x] Histórico local e retomada de conversas.
- [x] Limites educativos explícitos e links de fontes oficiais.

## 3. Conteúdo e privacidade
- [x] Biblioteca com busca e links externos.
- [x] Página sobre o projeto e exclusão do histórico local.
- [x] Identificação de demonstração sem IA conectada.

## 4. Verificação e documentação
- [x] Testes da seleção de conteúdo simulado.
- [x] Build de produção com verificação TypeScript.
- [x] Documentação de execução, arquitetura e integração futura.
- [ ] Revisão visual manual em navegador desktop e mobile.

Validação: cinco testes aprovados e build concluído. A auditoria npm reportou quatro alertas altos na cadeia de desenvolvimento Vite → tinyglobby/fdir → picomatch. O registro consultado oferece picomatch 4.0.7, ainda afetado pelo GHSA-fc5q-39xc-vjpf. Acompanhar a correção antes da publicação.

## Próxima etapa: backend (fora deste MVP)
- Definir contrato de perguntas, respostas e fontes.
- Implementar consulta à base de conhecimento selecionada e validação editorial.
- Definir políticas de privacidade, retenção e segurança antes de dados reais.
