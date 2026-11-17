import { test } from 'node:test';
import assert from 'node:assert/strict';
import { getMockAnswer } from './service.ts';
test('vacinação com acentos seleciona conteúdo e fonte oficial', () => {
  const result = getMockAnswer('Quero entender a vacinação');
  assert.match(result.content, /caderneta/);
  assert.equal(result.source, 'https://www.gov.br/saude/pt-br/vacinacao');
});
test('pedido clínico tem prioridade mesmo quando menciona vacinas', () => {
  const result = getMockAnswer('Qual remédio usar para dor depois da vacina?');
  assert.match(result.content, /não avalia sintomas/);
  assert.equal(result.source, undefined);
});
test('alimentação tem conteúdo próprio', () => {
  assert.match(getMockAnswer('Como melhorar minha alimentação?').content, /in natura/);
});
test('hábitos e prevenção são reconhecidos', () => {
  for (const question of ['Como prevenir doenças?', 'Hábitos saudáveis', 'Melhorar minha rotina']) {
    assert.match(getMockAnswer(question).content, /pequenas mudanças/);
  }
});
test('perguntas desconhecidas explicam limite da simulação', () => {
  assert.match(getMockAnswer('Qual a capital do Brasil?').content, /respostas pré-definidas/);
});
