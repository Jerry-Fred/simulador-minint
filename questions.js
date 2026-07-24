/**
 * Banco de perguntas — alinhado às categorias reais da Prova Escrita
 * do Concurso Público de Ingresso Externo do MININT (candidaturas.minint.ao):
 *   1. História de Angola
 *   2. Organização Política e Administrativa da República de Angola
 *   3. Noções gerais de Administração Pública
 *   4. Organização e funcionamento do Ministério do Interior
 *   5. Patriotismo
 *
 * Estrutura de cada pergunta:
 *   category:    uma das 5 categorias acima
 *   question:    enunciado
 *   options:     4 alternativas (string)
 *   answerIndex: índice (0-3) da opção correta
 *   explanation: texto mostrado após responder, certo ou errado
 */
const QUESTION_BANK = [
  {
    category: "História de Angola",
    question: "Em que ano Angola proclamou a sua independência?",
    options: ["1974", "1975", "1976", "1980"],
    answerIndex: 1,
    explanation: "Angola proclamou a independência a 11 de novembro de 1975, pondo fim ao período colonial português."
  },
  {
    category: "História de Angola",
    question: "Quem foi o primeiro Presidente da República Popular de Angola?",
    options: ["José Eduardo dos Santos", "Agostinho Neto", "Lúcio Lara", "Holden Roberto"],
    answerIndex: 1,
    explanation: "António Agostinho Neto foi o primeiro Presidente de Angola, entre 1975 e 1979."
  },
  {
    category: "Organização Política e Administrativa da República de Angola",
    question: "Angola é dividida administrativamente em:",
    options: ["Distritos", "Províncias", "Regiões autónomas", "Cantões"],
    answerIndex: 1,
    explanation: "O território angolano está organizado em províncias, cada uma dirigida por um Governador Provincial."
  },
  {
    category: "Organização Política e Administrativa da República de Angola",
    question: "Segundo a Constituição, Angola é um Estado:",
    options: ["Federativo", "Democrático de Direito", "Confederado", "Teocrático"],
    answerIndex: 1,
    explanation: "O artigo 1.º da Constituição define Angola como um Estado Democrático de Direito, soberano e independente."
  },
  {
    category: "Noções gerais de Administração Pública",
    question: "Na Administração Pública, o princípio que exige tratamento igual a todos os cidadãos, sem privilégios ou discriminação, chama-se:",
    options: ["Princípio da legalidade", "Princípio da igualdade", "Princípio da hierarquia", "Princípio da oportunidade"],
    answerIndex: 1,
    explanation: "O princípio da igualdade obriga a Administração Pública a tratar todos os cidadãos de forma equitativa perante a lei e os serviços públicos."
  },
  {
    category: "Noções gerais de Administração Pública",
    question: "Um funcionário público deve pautar a sua atuação, acima de tudo, pelo princípio da:",
    options: ["Conveniência pessoal", "Legalidade", "Improvisação", "Confidencialidade absoluta com o cidadão"],
    answerIndex: 1,
    explanation: "O princípio da legalidade exige que todo o ato da Administração Pública tenha fundamento na lei em vigor."
  },
  {
    category: "Organização e funcionamento do Ministério do Interior",
    question: "Qual destes órgãos NÃO depende do Ministério do Interior?",
    options: ["Polícia Nacional de Angola", "Serviço de Migração e Estrangeiros", "Serviço de Investigação Criminal", "Ministério das Relações Exteriores"],
    answerIndex: 3,
    explanation: "O Ministério das Relações Exteriores é uma pasta ministerial independente; a Polícia Nacional, o SME e o SIC estão sob tutela do Ministério do Interior."
  },
  {
    category: "Organização e funcionamento do Ministério do Interior",
    question: "A missão principal do Ministério do Interior é:",
    options: [
      "Gerir as relações comerciais externas",
      "Propor, coordenar e executar a política de ordem interna e segurança pública",
      "Administrar o sistema judicial",
      "Definir a política monetária"
    ],
    answerIndex: 1,
    explanation: "O MININT tem por missão propor, formular, coordenar, executar e avaliar a política do Executivo em matéria de ordem interna e segurança pública."
  },
  {
    category: "Patriotismo",
    question: "O patriotismo, no contexto do serviço público e das forças de segurança, traduz-se principalmente em:",
    options: [
      "Colocar interesses pessoais acima dos do país",
      "Servir com lealdade os interesses e valores da Nação",
      "Evitar qualquer relação com as instituições do Estado",
      "Criticar publicamente as instituições sem fundamento"
    ],
    answerIndex: 1,
    explanation: "O patriotismo esperado de um agente do Estado assenta na lealdade, no respeito pelas instituições e no compromisso com o interesse coletivo da Nação."
  },
  {
    category: "Patriotismo",
    question: "Quais são as cores da bandeira nacional de Angola?",
    options: [
      "Verde, amarelo e vermelho",
      "Vermelho e preto, com emblema amarelo",
      "Azul e branco",
      "Verde e branco"
    ],
    answerIndex: 1,
    explanation: "A bandeira de Angola é composta por duas faixas horizontais — vermelho e preto — com um emblema amarelo ao centro, símbolo da luta e das conquistas do povo angolano."
  }
];
