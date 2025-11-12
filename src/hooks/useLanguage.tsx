import { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'pt' | 'es' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  pt: {
    problem: 'Problema',
    solution: 'Solução',
    results: 'Resultados',
    differentials: 'Nossos Diferenciais',
    tagline: 'Ecossistema inteligente que integra e simplifica o fluxo radiológico, reduzindo custos, prazos e complexidade no atendimento médico.',
    problemTitle: 'O Problema',
    problemDesc: { text: 'Os fluxos de trabalho em radiologia ainda são marcados por ', highlight: 'ineficiências', text2: ': exames ', highlight2: 'duplicados', text3: ', sistemas ', highlight3: 'fragmentados', text4: ' e ', highlight4: 'atrasos', text5: ' nos laudos. Segundo o Royal College of Radiologists, quase 1 milhão de exames no Reino Unido aguardaram mais de um mês por laudo em 2024, e estima-se que bilhões sejam perdidos anualmente com retrabalho e processos manuais. Essas falhas aumentam ', highlight5: 'custos', text6: ', atrasam diagnósticos e sobrecarregam os profissionais.' },
    solutionTitle: 'Nossa Solução',
    solutionDesc: { text: 'Nosso sistema ', highlight: 'integra', text2: ' o armazenamento em ', highlight2: 'nuvem', text3: ' de imagens médicas com a ', highlight3: 'emissão digital', text4: ' de laudos, ', highlight4: 'eliminando barreiras', text5: ' entre captura, análise e entrega dos resultados. Com acesso ', highlight5: 'seguro e centralizado', text6: ', reduzimos atrasos, evitamos exames duplicados e liberamos tempo do radiologista para o que realmente importa: o diagnóstico e o cuidado ao paciente.' },
    resultsTitle: 'Resultados',
    resultsDesc: { text: 'Laudos que antes levavam ', highlight: 'dias', text2: ' para serem entregues agora podem estar disponíveis em poucas ', highlight2: 'horas', text3: ' — ou até ', highlight3: 'minutos', text4: ' —, ', highlight4: 'acessíveis diretamente', text5: ' pelo paciente em nosso portal online. Nosso sistema ', highlight5: 'acelera o diagnóstico', text6: ', melhora a tomada de decisão médica e garante ', highlight6: 'acesso imediato', text7: ' aos resultados.' },
    differentialsTitle: 'Nossos Diferenciais',
    differentialsDesc: { text: 'Nosso sistema combina armazenamento em ', highlight: 'nuvem', text2: ', ', highlight2: 'laudos digitais', text3: ' e ', highlight3: 'interoperabilidade total', text4: ' com PACS e RIS* em uma única plataforma. Oferecemos ', highlight4: 'implantação rápida', text5: ', modelo comercial acessível e ', highlight5: 'suporte humanizado', text6: ', garantindo ', highlight6: 'segurança, produtividade e escalabilidade', text7: ' para clínicas, centros de imagem e hospitais de qualquer porte.' },
    teamDesc: { text: 'Nossa ', highlight: 'equipe competente e especializada', text2: ' é formada por profissionais experientes em tecnologia da saúde, radiologia e desenvolvimento de software. Trabalhamos com ', highlight2: 'dedicação e excelência', text3: ' para produzir as ', highlight3: 'melhores soluções', text4: ' e oferecer um suporte técnico de alta qualidade, garantindo que sua operação funcione de forma eficiente e segura.' },
    feature1: 'Integração Total',
    feature1Desc: 'Conectamos todos os stakeholders em uma única plataforma',
    feature2: 'Redução de Custos',
    feature2Desc: 'Otimização de recursos e processos automatizados',
    feature3: 'Agilidade',
    feature3Desc: 'Fluxo de trabalho simplificado e eficiente',
    feature4: 'Inteligência',
    feature4Desc: 'IA para análise e suporte à decisão médica',
    points: [
        'Exames duplicados devido à falta de integração entre sistemas',
        'Processos manuais aumentam risco de erros',
        'Sistemas fragmentados dificultam o acompanhamento',
        'Comunicação deficiente entre prestadores de serviços',
      ],
    keywords_points: ['duplicados', 'integração', 'manuais', 'erros', 'fragmentados', 'deficiente'],
    stats : [
        { "label": "Desperdício anual", "value": "£1 bilhão", "description": "em exames duplicados no Reino Unido" },
        { "label": "Custos operacionais", "value": "+40%", "description": "devido a processos manuais" },
        { "label": "Tempo perdido", "value": "30%", "description": "em tarefas administrativas" }
      ],

    stats_result:[
      { label: "Increase in Exams Received", value: "18%", description: "Compared to the year 2024" },
      { label: "States", value: "7", description: "25% of Brazilian states covered" },
      { label: "Imaging Centers", value: "96", description: "Including clinics, hospitals, and imaging centers" },
      { label: "Patients", value: "1M", description: "Patients served by the system" },
      { label: "Radiologists", value: "262", description: "Active radiologists in the system" },
      { label: "Reports Delivered", value: "100K/month", description: "Reports can be produced in under 1 minute" }
    ],
    patient_issues : [
      "Longos tempos de espera para diagnósticos",
      "Necessidade de repetir exames",
      "Falta de transparência no processo",
      "Experiência fragmentada e confusa"
    ],
    patient_keywords: [
      "Longos", "espera", "repetir", "Falta", "transparência", "fragmentada"
    ],
    solution_title: "Plataforma Integrada",
    solution_features: [
      "Sistema único para todos os stakeholders",
      "Integração completa com sistemas existentes",
      "Interface intuitiva e responsiva",
      "Acesso em tempo real a dados e laudos"
    ],
    solution_keywords: ["único", "Integração completa", "intuitiva", "tempo real"],
    workflow_steps: [
      { "step": "1", "title": "Exame", "description": "Paciente faz o exame de imagem que é enviado para nuvem" },
      { "step": "2", "title": "Documentação", "description": "O documentador insere as incidências e encaminha para laudo" },
      { "step": "3", "title": "Laudo", "description": "A distância, o radiologista analisa e emite laudo" },
      { "step": "4", "title": "Entrega", "description": "Resultado disponível para médico e paciente" }
    ],
    workflow_keywords: ["solicita","radiologista","automaticamente","nuvem","exame de imagem","analisa","disponível","laudo"],
    report_title : 'HigIA Report/Apollo PACS',
    report_points : [
      'Usabilidade e layout intuitivo',
      'Ferramentas que aceleram a emissão de laudos',
      'Fluxo de trabalho sob medida',
      'Segurança e auditoria total',
      'Relatórios que impulsionam decisões'
    ],
    report_keywords : [
      '',
    ],
    care_title : 'HigIA Care',
      care_points : [
        'Agendamento rápido e interativo',
    'Prontuário completo e customizável',
    'Painel de atendimento configurável',
    'Atendimento ágil com cadastro completo',
    'Controle e auditoria de dados do paciente'
      ],
    care_keywords : [
      '',
    ],
    company_issues : [
      'Sistema escalável para qualquer porte de clínica ou hospital',
      'Integração com RIS, PACS e prontuário eletrônico',
      'Consultoria de implantação especializada',
      'Implantação rápida e sem burocracia',
      'Suporte humanizado'
    ],
    company_keywords: [
      "humanizado", "qualquer porte", "RIS", "PACS", "Consultoria", "Implantação rápida"
    ],
    stats_results: [
    { label: "Aumento em Exames Recebidos", value: "18%", description: "Em comparação com o ano de 2024" },
    { label: "Estados", value: "7", description: "25% dos estados do Brasil abrangidos" },
    { label: "Centros de Imagem", value: "96", description: "Incluindo clínicas, hospitais e centros de imagem" },
    { label: "Pacientes", value: "1M", description: "Pacientes atendidos pelo sistema" },
    { label: "Radiologistas", value: "262", description: "Radiologistas ativos no sistema" },
    { label: "Laudos Entregues", value: "100K/mês", description: "Laudos podem ser produzidos em menos de 1 minuto" }
  ],
  },
  es: {
    problem: 'Problema',
    solution: 'Solución',
    results: 'Resultados',
    differentials: 'Nuestros Diferenciales',
    tagline: 'Ecosistema inteligente que integra y simplifica el flujo radiológico, reduciendo costos, plazos y complejidad en la atención médica.',
    problemTitle: 'El Problema',
    problemDesc: { text: 'Los flujos de trabajo en radiología aún están marcados por ', highlight: 'ineficiencias', text2: ': exámenes ', highlight2: 'duplicados', text3: ', sistemas ', highlight3: 'fragmentados', text4: ' y ', highlight4: 'retrasos', text5: ' en los informes. Según el Royal College of Radiologists, casi 1 millón de exámenes en el Reino Unido esperaron más de un mes por informe en 2024, y se estima que miles de millones se pierden anualmente con retrabajo y procesos manuales. Estas fallas aumentan ', highlight5: 'costos', text6: ', retrasan diagnósticos y sobrecargan a los profesionales.' },
    solutionTitle: 'Nuestra Solución',
    solutionDesc: { text: 'Nuestro sistema ', highlight: 'integra', text2: ' el almacenamiento en la ', highlight2: 'nube', text3: ' de imágenes médicas con la ', highlight3: 'emisión digital', text4: ' de informes, ', highlight4: 'eliminando barreras', text5: ' entre captura, análisis y entrega de resultados. Con acceso ', highlight5: 'seguro y centralizado', text6: ', reducimos retrasos, evitamos exámenes duplicados y liberamos tiempo del radiólogo para lo que realmente importa: el diagnóstico y el cuidado del paciente.' },
    resultsTitle: 'Resultados',
    resultsDesc: { text: 'Informes que antes tardaban ', highlight: 'días', text2: ' en entregarse ahora pueden estar disponibles en pocas ', highlight2: 'horas', text3: ' — o incluso ', highlight3: 'minutos', text4: ' —, ', highlight4: 'accesibles directamente', text5: ' por el paciente en nuestro portal en línea. Nuestro sistema ', highlight5: 'acelera el diagnóstico', text6: ', mejora la toma de decisiones médicas y garantiza ', highlight6: 'acceso inmediato', text7: ' a los resultados.' },
    differentialsTitle: 'Nuestros Diferenciales',
    differentialsDesc: { text: 'Nuestro sistema combina almacenamiento en la ', highlight: 'nube', text2: ', ', highlight2: 'informes digitales', text3: ' e ', highlight3: 'interoperabilidad total', text4: ' con PACS y RIS* en una única plataforma. Ofrecemos ', highlight4: 'implantación rápida', text5: ', modelo comercial accesible y ', highlight5: 'soporte humanizado', text6: ', garantizando ', highlight6: 'seguridad, productividad y escalabilidad', text7: ' para clínicas, centros de imagen y hospitales de cualquier tamaño.' },
    teamDesc: { text: 'Nuestro ', highlight: 'equipo competente y especializado', text2: ' está formado por profesionales experimentados en tecnología de la salud, radiología y desarrollo de software. Trabajamos con ', highlight2: 'dedicación y excelencia', text3: ' para producir las ', highlight3: 'mejores soluciones', text4: ' y ofrecer soporte técnico de alta calidad, garantizando que su operación funcione de manera eficiente y segura.' },
    feature1: 'Integración Total',
    feature1Desc: 'Conectamos todos los stakeholders en una única plataforma',
    feature2: 'Reducción de Costos',
    feature2Desc: 'Optimización de recursos y procesos automatizados',
    feature3: 'Agilidad',
    feature3Desc: 'Flujo de trabajo simplificado y eficiente',
    feature4: 'Inteligencia',
    feature4Desc: 'IA para análisis y apoyo a la decisión médica',
    points: [
        'Exámenes duplicados debido a la falta de integración entre sistemas',
        'Los procesos manuales aumentan el riesgo de errores',
        'Los sistemas fragmentados dificultan el seguimiento',
        'Comunicación deficiente entre los proveedores de servicios',
      ],
    keywords_points: ['duplicados', 'integración', 'manuales', 'errores', 'fragmentados', 'comunicación deficiente'],
    stats : [
      { "label": "Desperdicio anual", "value": "£1 mil millones", "description": "en exámenes duplicados en el Reino Unido" },
      { "label": "Costes operativos", "value": "+40%", "description": "debido a procesos manuales" },
      { "label": "Tiempo perdido", "value": "30%", "description": "en tareas administrativas" }
    ],
    patient_issues : [
      "Largos tiempos de espera para los diagnósticos",
      "Necesidad de repetir exámenes",
      "Falta de transparencia en el proceso",
      "Experiencia fragmentada y confusa"
    ],
    patient_keywords: [
      "Largos", "espera", "repetir", "Falta", "transparencia", "fragmentada"
    ],
    solution_title: "Plataforma Integrada",
    solution_features: [
      "Sistema único para todos los stakeholders",
      "Integración completa con sistemas existentes",
      "Interfaz intuitiva y responsive",
      "Acceso en tiempo real a datos e informes"
    ],
    solution_keywords: ["único", "Integración completa", "intuitiva", "tiempo real"],
    
    workflow_steps: [
      { "step": "1", "title": "Examen", "description": "El paciente realiza el examen de imagen que se envía a la nube" },
      { "step": "2", "title": "Documentación", "description": "El documentador inserta las incidencias y las envía para informe" },
      { "step": "3", "title": "Informe", "description": "A distancia, el radiólogo analiza y emite el informe" },
      { "step": "4", "title": "Entrega", "description": "Resultado disponible para médico y paciente" }
    ],
    workflow_keywords: ["solicita","radiólogo","automáticamente","nube","examen de imagen","analiza","disponible","informe"],
    report_title : 'HigIA Report/Apollo PACS',
    report_points : [
      'Facilidad de uso y diseño intuitivo',
    'Herramientas que aceleran la emisión de informes',
    'Flujo de trabajo personalizable',
    'Seguridad y auditoría total',
    'Informes que impulsan la toma de decisiones'
    ],
    report_keywords : [
      '',
    ],
    company_issues : [
      'Sistema escalable para cualquier tamaño de clínica u hospital',
      'Integración con RIS, PACS y registros médicos electrónicos',
      'Consultoría especializada en implementación',
      'Implementación rápida y sin burocracia',
      'Soporte humanizado'
    ],
    company_keywords: [
      "humanizado", "cualquier tamaño", "RIS", "PACS", "Consultoría", "Implementación rápida"
    ],
    care_title : 'HigIA Care',
      care_points : [
    'Programación rápida e interactiva',
    'Historial médico completo y personalizable',
    'Panel de atención configurable',
    'Atención ágil con registro completo',
    'Control y auditoría de datos del paciente'
  ],
    care_keywords : [
      '',
    ],
    stats_results: [
      { label: "Incremento en Exámenes Recibidos", value: "18%", description: "En comparación con el año 2024" },
      { label: "Estados", value: "7", description: "25% de los estados brasileños cubiertos" },
      { label: "Centros de Imagen", value: "96", description: "Incluyendo clínicas, hospitales y centros de imagen" },
      { label: "Pacientes", value: "1M", description: "Pacientes atendidos por el sistema" },
      { label: "Radiólogos", value: "262", description: "Radiólogos activos en el sistema" },
      { label: "Informes Entregados", value: "100K/mes", description: "Informes pueden producirse en menos de 1 minuto" }
    ]
  },

  
  en: {
    problem: 'Problem',
    solution: 'Solution',
    results: 'Results',
    differentials: 'Our Differentials',
    tagline: 'Intelligent ecosystem that integrates and simplifies the radiological workflow, reducing costs, timeframes and complexity in medical care.',
    problemTitle: 'The Problem',
    problemDesc: { text: 'Radiology workflows are still marked by ', highlight: 'inefficiencies', text2: ': ', highlight2: 'duplicate', text3: ' exams, ', highlight3: 'fragmented', text4: ' systems, and report ', highlight4: 'delays', text5: '. According to the Royal College of Radiologists, nearly 1 million exams in the UK waited more than a month for reports in 2024, and billions are estimated to be lost annually to rework and manual processes. These failures increase ', highlight5: 'costs', text6: ', delay diagnoses, and overburden professionals.' },
    solutionTitle: 'Our Solution',
    solutionDesc: { text: 'Our system ', highlight: 'integrates', text2: ' ', highlight2: 'cloud', text3: ' storage of medical images with ', highlight3: 'digital report', text4: ' issuance, ', highlight4: 'eliminating barriers', text5: ' between capture, analysis, and delivery of results. With ', highlight5: 'secure and centralized', text6: ' access, we reduce delays, avoid duplicate exams, and free up radiologist time for what truly matters: diagnosis and patient care.' },
    resultsTitle: 'Results',
    resultsDesc: { text: 'Reports that previously took ', highlight: 'days', text2: ' to deliver can now be available in just a few ', highlight2: 'hours', text3: ' — or even ', highlight3: 'minutes', text4: ' —, ', highlight4: 'accessible directly', text5: ' by patients on our online portal. Our system ', highlight5: 'accelerates diagnosis', text6: ', improves medical decision-making, and guarantees ', highlight6: 'immediate access', text7: ' to results.' },
    differentialsTitle: 'Our Differentials',
    differentialsDesc: { text: 'Our system combines ', highlight: 'cloud', text2: ' storage, ', highlight2: 'digital reports', text3: ', and ', highlight3: 'total interoperability', text4: ' with PACS and RIS* in a single platform. We offer ', highlight4: 'rapid deployment', text5: ', accessible business model, and ', highlight5: 'humanized support', text6: ', ensuring ', highlight6: 'security, productivity, and scalability', text7: ' for clinics, imaging centers, and hospitals of any size.' },
    teamDesc: { text: 'Our ', highlight: 'competent and specialized team', text2: ' is made up of experienced professionals in healthcare technology, radiology, and software development. We work with ', highlight2: 'dedication and excellence', text3: ' to produce the ', highlight3: 'best solutions', text4: ' and offer high-quality technical support, ensuring that your operation runs efficiently and securely.' },
    feature1: 'Total Integration',
    feature1Desc: 'We connect all stakeholders in a single platform',
    feature2: 'Cost Reduction',
    feature2Desc: 'Resource optimization and automated processes',
    feature3: 'Agility',
    feature3Desc: 'Simplified and efficient workflow',
    feature4: 'Intelligence',
    feature4Desc: 'AI for analysis and medical decision support',
    points: [
        'Duplicate exams due to lack of integration between systems',
        'Manual processes increase the risk of errors',
        'Fragmented systems make monitoring difficult',
        'Poor communication between service providers',
      ],
    keywords_points: ['duplicate', 'integration', 'manual', 'errors', 'fragmented', 'poor communication'],
    stats : [
      { "label": "Annual waste", "value": "£1 billion", "description": "in duplicate exams in the United Kingdom" },
      { "label": "Operational costs", "value": "+40%", "description": "due to manual processes" },
      { "label": "Time wasted", "value": "30%", "description": "on administrative tasks" }
    ],
    patient_issues : [
      "Long waiting times for diagnoses",
      "Need to repeat exams",
      "Lack of transparency in the process",
      "Fragmented and confusing experience"
    ],
    patient_keywords: [
      "Long", "waiting", "repeat", "Lack", "transparency", "fragmented"
    ],
    solution_title: "Integrated Platform",
    solution_features: [
      "Single system for all stakeholders",
      "Full integration with existing systems",
      "Intuitive and responsive interface",
      "Real-time access to data and reports"
    ],
    solution_keywords: ["single", "Full integration", "intuitive", "real-time"],
    workflow_steps: [
      { "step": "1", "title": "Exam", "description": "Patient undergoes the imaging exam which is sent to the cloud" },
      { "step": "2", "title": "Documentation", "description": "The documenter adds incidences and forwards it for reporting" },
      { "step": "3", "title": "Report", "description": "Remotely, the radiologist analyzes and issues the report" },
      { "step": "4", "title": "Delivery", "description": "Result available for doctor and patient" }
    ],
    workflow_keywords: ["requests","radiologist","automatically","cloud","imaging exam","analyzes","available","reporting"],
    report_title : 'HigIA Report/Apollo PACS',
    report_points : [
      'Ease of use and intuitive design',
      'Tools that speed up report generation',
      'Customizable workflow',
      'Complete security and auditing',
      'Reports that drive decision-making'
    ],
    report_keywords : [
      '',
    ],
    care_title : 'HigIA Care',
    care_points : [
      'Fast and interactive scheduling',
    'Complete and customizable medical record',
    'Configurable service dashboard',
    'Efficient patient care with full registration',
    'Patient data control and auditing'
    ],
    care_keywords : [
      '',
    ],
    company_issues : [
      'Scalable system for clinics and hospitals of any size',
      'Integration with RIS, PACS, and electronic medical records',
      'Specialized implementation consulting',
      'Fast and hassle-free deployment',
      'Humanized support'
    ],
    company_keywords: [
      "Humanized", "any size", "RIS", "PACS", "consulting", "Fast", "hassle-free"
    ],
    stats_results:[
      { label: "Increase in Exams Received", value: "18%", description: "Compared to the year 2024" },
      { label: "States", value: "7", description: "25% of Brazilian states covered" },
      { label: "Imaging Centers", value: "96", description: "Including clinics, hospitals, and imaging centers" },
      { label: "Patients", value: "1M", description: "Patients served by the system" },
      { label: "Radiologists", value: "262", description: "Active radiologists in the system" },
      { label: "Reports Delivered", value: "100K/month", description: "Reports can be produced in under 1 minute" }
    ],
  },
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['en']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
}
