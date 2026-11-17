export type Message = { id: string; role: 'user' | 'assistant'; content: string; source?: string };
export type Conversation = { id: string; title: string; messages: Message[] };
export function getMockAnswer(question: string): Pick<Message, 'content' | 'source'> {
  const text = question.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
  if (/dor|sintoma|remedio|diagnostico|falta de ar|tratamento/.test(text)) return { content: 'Este protótipo oferece apenas educação em saúde e não avalia sintomas, indica medicamentos ou faz diagnósticos. Procure um profissional de saúde para orientação individual. Se houver risco imediato, procure um serviço de emergência.' };
  if (/vacin|imuniza/.test(text)) return { content: 'Para conferir suas vacinas, leve sua caderneta a uma Unidade Básica de Saúde. A equipe pode verificar os registros e orientar sobre o calendário adequado à sua faixa etária e situação de saúde.\n\nAs indicações e campanhas podem mudar. Consulte sempre as informações oficiais atualizadas.', source: 'https://www.gov.br/saude/pt-br/vacinacao' };
  if (/alimenta|comida|dieta|nutri/.test(text)) return { content: 'Um bom ponto de partida é valorizar alimentos in natura ou minimamente processados, como frutas, verduras, feijão e outros alimentos que fazem parte da sua cultura.\n\nPlanejar as refeições e reservar um momento tranquilo para comer também pode ajudar. Para necessidades específicas, procure orientação individual de um profissional.', source: 'https://bvsms.saude.gov.br/bvs/publicacoes/guia_alimentar_pop_bras.pdf' };
  if (/preven|doenca|habito|saudav|rotina|sono|atividade/.test(text)) return { content: 'O cuidado com a saúde pode começar por pequenas mudanças possíveis na sua rotina. Alimentação variada, movimento, higiene e acompanhamento da vacinação são temas importantes para conhecer.\n\nEscolha um cuidado para explorar primeiro. Na biblioteca, você encontra materiais oficiais para continuar aprendendo.', source: 'https://www.gov.br/saude/pt-br/assuntos/saude-de-a-a-z/' };
  return { content: 'Esta é uma demonstração com respostas pré-definidas, sem inteligência artificial conectada. Posso apresentar conteúdos introdutórios sobre prevenção, vacinação, alimentação e hábitos saudáveis.\n\nExperimente perguntar: “Como saber se minhas vacinas estão em dia?”.' };
}
export async function sendMessage(question: string): Promise<Pick<Message, 'content' | 'source'>> {
  await new Promise(resolve => setTimeout(resolve, 650));
  return getMockAnswer(question);
}
