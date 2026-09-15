import type { InfoPageContent } from '../infoPages';

export const esInfo: InfoPageContent = {
  about: {
    badge: 'Perfil de Plataforma y Gobernanza',
    heading: 'Sobre SciCalcX',
    subheading: 'Uniendo la computación matemática y la compilación interactiva de software.',
    missionBadge: 'Nuestra Misión',
    missionP1: 'SciCalcX fue fundada para resolver una frustración persistente de los estudiantes de ingeniería e informática: la fricción de alternar entre calculadoras aisladas, herramientas estadísticas y entornos de programación desconectados.',
    missionP2: 'Nuestra plataforma integra evaluación numérica de alta precisión, álgebra lineal, cálculo y operaciones a nivel de bits junto a un tutor de código y compilador interactivo. Diseñada para ofrecer respuestas ágiles y accesibles directamente en tu navegador web.',
    teamBadge: 'Equipo de Desarrollo y Edición',
    teamTitle: 'Equipo de Ingeniería y Edición',
    standardsBadge: 'Precisión y Estándares',
    standardsTitle: 'Estándares de Precisión y Rigor Editorial',
    standardsIntro: 'La exactitud es primordial en el cómputo académico y científico. Nos regimos por rigurosos estándares de validación:',
    standards: [
      { label: 'Normalización de Precisión', text: 'Los artefactos comunes de coma flotante IEEE-754 se reducen mediante algoritmos de normalización decimal para ofrecer representaciones legibles de hasta 12 decimales.' },
      { label: 'Verificación Estandarizada', text: 'Las transformaciones matriciales y la cuadratura numérica de Simpson se contrastan continuamente con soluciones simbólicas de referencia y casos de prueba algebraicos.' },
      { label: 'Modelo de Ejecución Diferenciado', text: 'SciCalcX mantiene un estricto límite arquitectónico entre tipos de cómputo: todas las calculadoras matemáticas (Científica, Matrices, Cálculo, Gráficas, Estadística, Programador) se evalúan al 100% de forma local en tu navegador sin peticiones de red. El Tutor de Código ejecuta el código fuente enviándolo mediante HTTPS cifrado directamente a servicios de sandbox en contenedores aislados (primario: Judge0 CE en ce.judge0.com, respaldo: API de Wandbox en wandbox.org) sin almacenamiento permanente en el servidor.' },
    ],
    architectureBadge: 'Arquitectura Web',
    architectureTitle: 'Arquitectura Web de Alto Rendimiento',
    architectureDesc: 'SciCalcX está construida con los estándares web más modernos para garantizar velocidad sin dependencias pesadas y máxima accesibilidad móvil.',
  },
  contact: {
    badge: 'Comunicaciones',
    heading: 'Contáctanos',
    subheading: 'Comunícate con nuestro equipo para consultas, comentarios o reportes de errores.',
    directTitle: 'Conexión Directa',
    emailLabel: 'Correo de Soporte',
    repoLabel: 'Código Abierto',
    responseLabel: 'Tiempo de Respuesta',
    responseTime: 'Entre 24 y 48 horas hábiles',
    formTitle: 'Enviar Consulta',
    nameLabel: 'Tu Nombre',
    emailInputLabel: 'Correo Electrónico',
    subjectLabel: 'Asunto de Consulta',
    messageLabel: 'Tu Mensaje',
    submitBtn: 'Enviar Consulta al Equipo',
    successNotice: '¡Cliente de correo inicializado! Si tu aplicación de correo no abrió automáticamente, escribe a support@scicalcx.com.',
  },
  terms: {
    badge: 'Acuerdos Legales',
    heading: 'Términos y Condiciones',
    subheading: 'Última actualización: 14 de septiembre de 2026. Revisa las normas y políticas de uso de los servicios de SciCalcX.',
    sections: [
      { 
        title: '1. Aceptación de los Términos', 
        paragraphs: [
          'Al acceder o utilizar SciCalcX (https://scicalcx.com/), reconoces haber leído, comprendido y aceptado quedar legalmente vinculado por estos Términos y Condiciones. Si no estás de acuerdo con la totalidad de estos términos, debes cesar el uso del servicio de inmediato.',
          'Estos términos rigen el acceso a nuestras calculadoras científicas, solucionadores de álgebra lineal, herramientas de cálculo numérico, analizadores estadísticos, utilidades de programador y entornos de ejecución de código.'
        ]
      },
      { 
        title: '2. Uso Permitido Educativo y Profesional', 
        paragraphs: [
          'SciCalcX se proporciona como referencia para fines educativos, académicos, profesionales y de cálculo personal. Se autoriza el uso de los resultados calculados, gráficas y fragmentos de código en tareas académicas, informes de laboratorio y evaluaciones profesionales.',
          'Aceptas no utilizar scrapers automatizados, scripts de denegación de servicio ni mecanismos de rastreo abusivos que impongan una carga desproporcionada en nuestra infraestructura o en nuestros socios externos de ejecución.'
        ]
      },
      { 
        title: '3. Ejecución de Código y Uso Aceptable del Sandbox', 
        paragraphs: [
          'El Tutor de Código y Compilador se conecta con servicios externos de ejecución en contenedores (Judge0 CE y API de Wandbox). Al enviar código fuente, te comprometes a no enviar, ejecutar ni transmitir:',
          '• Software malicioso, virus, gusanos, rootkits o cargas de explotación.',
          '• Algoritmos de minería de criptomonedas o cargas de trabajo automatizadas no autorizadas.',
          '• Escáneres de red no autorizados, escáneres de puertos, scripts de denegación de servicio o bots de spam.',
          '• Intentos de evasión del sandbox, lectura de archivos del sistema anfitrión o alteración de los entornos de ejecución.',
          'Las infracciones provocarán la cancelación inmediata del acceso y la posible notificación a proveedores de seguridad de red.'
        ]
      },
      { 
        title: '4. Precisión Matemática y Descargo de Responsabilidad "Tal Cual"', 
        paragraphs: [
          'SciCalcX implementa algoritmos matemáticos rigurosos (incluyendo cuadratura compuesta de Simpson, derivadas numéricas por diferencias centrales y expansiones de Laplace) junto con normalización de precisión. No obstante, todos los servicios computacionales se ofrecen estrictamente "TAL CUAL" y "SEGÚN DISPONIBILIDAD", sin garantías de ningún tipo.',
          'La aritmética de punto flotante en procesadores digitales conlleva límites inherentes de aproximación. SciCalcX no debe utilizarse como único motor de cálculo en ingeniería crítica, aviación comercial, diagnósticos médicos, diseño de seguridad estructural o decisiones de inversión financiera donde las discrepancias numéricas puedan causar daños físicos, ambientales o económicos.'
        ]
      },
      { 
        title: '5. Derechos de Propiedad Intelectual', 
        paragraphs: [
          'La marca SciCalcX, el diseño visual, los componentes de interfaz personalizados, los algoritmos, la documentación y los tutoriales son propiedad intelectual de SciCalcX y sus colaboradores. Los componentes de código abierto están debidamente atribuidos y licenciados bajo sus respectivos términos.',
          'Los usuarios conservan la propiedad total de los derechos de autor sobre el código fuente y las expresiones matemáticas que introduzcan en la plataforma.'
        ]
      },
      { 
        title: '6. Servicios de Terceros y Enlaces Externos', 
        paragraphs: [
          'SciCalcX depende de proveedores externos de confianza para determinadas funciones, incluyendo Cloudflare para la distribución de contenidos, Judge0 CE y Wandbox para la ejecución remota de código, y Google para análisis y publicidad. SciCalcX no controla la infraestructura de terceros y no se responsabiliza por interrupciones intermitentes de dichos servicios ni por el contenido de sitios web externos.'
        ]
      },
      { 
        title: '7. Limitación de Responsabilidad', 
        paragraphs: [
          'En la medida máxima permitida por la legislación aplicable, SciCalcX, sus desarrolladores, autores y colaboradores no serán responsables por daños directos, indirectos, incidentales, consecuentes, especiales o punitivos derivados del uso o de la imposibilidad de uso de la plataforma, incluyendo pérdida de datos, errores de cálculo, penalizaciones académicas o interrupción de actividades.'
        ]
      },
      { 
        title: '8. Modificaciones y Contacto', 
        paragraphs: [
          'Nos reservamos el derecho de modificar estos términos en cualquier momento. Los cambios significativos se señalarán mediante la fecha actualizada al inicio del documento.',
          'Las consultas sobre estos términos deben dirigirse a nuestro equipo en support@scicalcx.com.'
        ]
      },
    ],
  },
  privacy: {
    badge: 'Legal y Cumplimiento',
    heading: 'Política de Privacidad',
    subheading: 'Última actualización: 14 de septiembre de 2026. Conoce cómo gestiona SciCalcX la privacidad computacional, las cookies y la transparencia de datos.',
    sections: [
      { 
        title: '1. Introducción y Alcance', 
        paragraphs: [
          'En SciCalcX (https://scicalcx.com/), creemos en un software transparente y con prioridad en la privacidad. Esta Política de Privacidad explica qué información se recopila, qué datos no se recopilan, cómo funciona el almacenamiento del navegador y cómo operan los servicios de terceros en nuestra plataforma.',
          'SciCalcX no requiere registro de usuarios, inicios de sesión ni contraseñas. Puedes acceder libremente a todas las calculadoras, artículos de referencia y herramientas sin necesidad de crear una cuenta.'
        ]
      },
      { 
        title: '2. Privacidad Matemática en el Lado del Cliente', 
        paragraphs: [
          'Las herramientas matemáticas principales de SciCalcX—incluyendo la Calculadora Científica, la Calculadora de Matrices, la Calculadora de Cálculo, el Graficador, la Calculadora Estadística y el Registro de Programador—operan 100% en el lado del cliente dentro de tu navegador web.',
          'Al ingresar fórmulas como "sin(45)", definir matrices 3x3 o calcular la desviación estándar de un conjunto de datos, la evaluación matemática la ejecuta localmente el motor JavaScript de tu navegador. Tus expresiones matemáticas, variables y valores numéricos nunca se envían a nuestros servidores, nunca se guardan en bases de datos remotas y jamás son inspeccionados por terceros.'
        ]
      },
      { 
        title: '3. Tutor de Código y Ejecución Remota en Sandbox', 
        paragraphs: [
          'A diferencia de las calculadoras matemáticas, el Tutor de Código y Compilador permite compilar y ejecutar programas escritos en lenguajes como C, C++ y Python. Los navegadores web no pueden ejecutar nativamente cadenas de compilación GCC o binarios C++ directamente en el hardware del cliente sin compiladores remotos.',
          'Al hacer clic en "Ejecutar Código" en el entorno de trabajo, tu código fuente, la entrada estándar (stdin) y el identificador de lenguaje se transmiten mediante HTTPS cifrado a servicios externos de ejecución en contenedores (Judge0 CE en ce.judge0.com y contingencia en la API de Wandbox en wandbox.org).',
          'Estos proveedores ejecutan tu programa en un contenedor sandbox aislado y temporal, recopilan la salida estándar (stdout) y los mensajes de error del compilador (stderr), y los devuelven a tu navegador. Tu código se procesa estrictamente durante la duración efímera de la solicitud y no se almacena permanentemente, ni se comercializa, ni se usa para entrenar modelos de IA.'
        ]
      },
      { 
        title: '4. Información que No Recopilamos', 
        paragraphs: [
          '• No recopilamos nombres, números de teléfono ni direcciones físicas.',
          '• No solicitamos ni almacenamos datos de tarjetas de pago, cuentas bancarias ni credenciales financieras.',
          '• No vendemos, alquilamos ni comercializamos datos de usuarios con intermediarios de datos.'
        ]
      },
      { 
        title: '5. Almacenamiento Local del Navegador (localStorage)', 
        paragraphs: [
          'SciCalcX utiliza el almacenamiento localStorage nativo de tu navegador únicamente para mejorar tu experiencia en tu dispositivo:',
          '• Preferencia de Tema (theme): Guarda tu elección de modo "claro" u "oscuro" para mantener la interfaz uniforme en cada visita.',
          '• Historial de Cálculos (scicalcx_history): Almacena los resultados de cálculo recientes (hasta un máximo de 50 entradas) en una pila local. Puedes borrar este historial en cualquier momento con el botón "[ Borrar Todo ]" del panel lateral.',
          '• Reconocimiento del Aviso de Cookies (scicalcx_cookie_consent): Recuerda si has cerrado o aceptado nuestro banner de cookies y privacidad.',
          '• Registro de Memoria de la Calculadora (scicalcx_memory): Conserva el valor numérico activo almacenado en la memoria de la calculadora científica (M+ / M- / MR).',
          '• Borradores y Progreso del Tutor de Código (scicalcx_code_draft_*, scicalcx_sandbox_draft_*, scicalcx_completed_subs): Guarda localmente tu código en edición y el estado de avance en los ejercicios para evitar pérdidas al recargar.',
          '• Datos de Exportación de Tareas (scicalcx_student_name, scicalcx_student_roll): Almacena de forma opcional el nombre y la matrícula del estudiante en tu dispositivo para precargar el generador de reportes. Estos datos se procesan estrictamente en la memoria del navegador para renderizar una imagen PNG descargable y nunca se transmiten a servidores ni APIs externas.',
          'Todas las claves de localStorage permanecen únicamente en tu dispositivo local y pueden eliminarse en cualquier momento desde los ajustes de almacenamiento de tu navegador o desde los controles de la aplicación.'
        ]
      },
      { 
        title: '6. Cookies, Analítica y Google AdSense', 
        paragraphs: [
          'SciCalcX utiliza tecnologías web estándar para preservar la estabilidad del sitio y respaldar los costes de infraestructura:',
          '• Cloudflare: Utiliza cookies técnicas de seguridad y enrutamiento perimetral para mitigar ataques de denegación de servicio (DDoS) y garantizar una entrega rápida.',
          '• Google Analytics 4 (ID de medición: G-XSYVYWTGTS): Recopila métricas estadísticas de tráfico agregadas y no identificables personalmente (como páginas vistas, categorías de dispositivo y sitios de referencia) que nos permiten evaluar el uso de las calculadoras y optimizar el rendimiento.',
          '• Google AdSense: Los proveedores externos, incluido Google, utilizan cookies para mostrar anuncios basados en las visitas anteriores del usuario a este o a otros sitios web. El uso de cookies publicitarias por parte de Google permite a sus asociados servir anuncios adaptados a la navegación.',
          'Los usuarios pueden inhabilitar la publicidad personalizada a través de la Configuración de Anuncios de Google (https://adssettings.google.com/) o mediante el portal de la Network Advertising Initiative (http://www.aboutads.info/choices/).'
        ]
      },
      { 
        title: '7. Consultas de Contacto y Correo Directo', 
        paragraphs: [
          'Si envías una consulta a través de nuestra página de Contacto o nos escribes a support@scicalcx.com, tu dirección de correo, nombre y el contenido del mensaje se utilizan únicamente para atender tu consulta, depurar problemas reportados y brindar soporte técnico. No incorporamos estos datos a boletines comerciales ni comercializamos listas de correo.'
        ]
      },
      { 
        title: '8. Retención de Datos y Estándares de Seguridad', 
        paragraphs: [
          'Dado que no gestionamos bases de datos de usuarios ni cuentas de inicio de sesión, no existe un repositorio centralizado de identidades personales susceptible de ser vulnerado. Toda comunicación entre tu navegador y SciCalcX utiliza cifrado moderno TLS/HTTPS. Los registros técnicos de acceso mantenidos en el perímetro de alojamiento se conservan únicamente por períodos diagnósticos y de auditoría de seguridad.'
        ]
      },
      { 
        title: '9. Privacidad Infantil en Línea (COPPA)', 
        paragraphs: [
          'SciCalcX es una plataforma educativa diseñada para estudiantes, educadores y profesionales. No recopilamos conscientemente información personal identificable de menores de 13 años. Si consideras que un menor nos ha facilitado datos personales por correo, contáctanos en support@scicalcx.com para proceder a su inmediata eliminación.'
        ]
      },
      { 
        title: '10. Derechos Internacionales del Usuario (RGPD y CCPA/CPRA)', 
        paragraphs: [
          'En función de tu ubicación geográfica, puedes ostentar derechos reconocidos por ley respecto a tus datos personales, incluidos los derechos de acceso, rectificación o supresión. Al no almacenar SciCalcX perfiles de usuario ni fórmulas en servidores, la gran mayoría de la información puede suprimirse directamente en tu propio equipo vaciando la caché y el almacenamiento local de tu navegador.',
          'Para cualquier duda o solicitud en materia de privacidad, puedes dirigirte a nuestro equipo en support@scicalcx.com.'
        ]
      },
    ],
  },
  editorial: {
    badge: 'Estándares Académicos y Editoriales',
    heading: 'Integridad Editorial y Rigor Matemático',
    subheading: 'Nuestro compromiso con la exactitud numérica, verificación de fórmulas, transparencia algorítmica y corrección de errores.',
    sections: [
      {
        title: 'Compromiso con el Rigor Académico',
        paragraphs: [
          'En SciCalcX, la precisión matemática y técnica constituye la base de nuestro trabajo. Nuestras calculadoras y artículos formativos están redactados y revisados para servir a estudiantes de secundaria, universitarios de ingeniería, científicos de datos y programadores que precisan herramientas de cálculo fiables.',
          'No publicamos afirmaciones matemáticas sin respaldo, contenidos saturados de palabras clave artificiales ni explicaciones duplicadas. Cada tutorial está elaborado para explicar los fundamentos algebraicos, de cálculo o de programación con claridad paso a paso.'
        ]
      },
      {
        title: 'Verificación Matemática y Bancos de Pruebas',
        paragraphs: [
          'Antes del despliegue de cualquier función en las calculadoras, sus algoritmos numéricos se someten a bancos de pruebas frente a suites de referencia:',
          '• Determinantes e Inversas Matriciales: Contrastados con matrices de prueba estándar y solucionadores simbólicos para dimensiones 2x2 y 3x3, incluyendo casos singulares y mal condicionados.',
          '• Cálculo Numérico: Nuestra implementación de la regla 1/3 compuesta de Simpson (con N=1000 subintervalos) y los cocientes de diferencias centrales (h=1e-6) se verifican frente a integrales analíticas conocidas polinomiales, trigonométricas y exponenciales.',
          '• Estadística Descriptiva: La media, mediana, moda, varianza muestral (con corrección de Bessel n-1) y varianza poblacional se validan frente a conjuntos de datos de referencia estandarizados.'
        ]
      },
      {
        title: 'Divulgación Algorítmica Transparente',
        paragraphs: [
          'Creemos que los estudiantes deben conocer cómo se calculan sus respuestas. Lejos de tratar las calculadoras como cajas negras, cada herramienta de SciCalcX detalla el método numérico empleado, ya sea el algoritmo Shunting-Yard, la normalización decimal IEEE-754 o la cuadratura numérica.',
          'Asimismo, exponemos abiertamente las limitaciones inherentes al cómputo numérico, tales como los límites de precisión binaria en coma flotante, los errores de truncamiento por tamaño de paso y las asíntotas del dominio.'
        ]
      },
      {
        title: 'Política sobre Herramientas y Contenidos Asistidos por IA',
        paragraphs: [
          'Cualquier modelo computacional o herramienta de asistencia al desarrollo empleada internamente pasa por la supervisión directa del equipo de ingenieros de SciCalcX. Ningún fragmento de código ni artículo se publica sin verificación humana de su exactitud matemática, claridad gramatical y utilidad práctica.',
          'No recurrimos a granjas de contenidos generados automáticamente en masa. Cada guía disponible en SciCalcX ha sido elaborada para aportar un valor pedagógico auténtico.'
        ]
      },
      {
        title: 'Atribución de Fuentes y Originalidad',
        paragraphs: [
          'Todos los artículos, ejemplos de código y diagramas son elaborados originariamente por nuestro equipo o citan libros de texto académicos y especificaciones abiertas de referencia. Respetamos la propiedad intelectual y mantenemos estándares éticos de citación.'
        ]
      },
      {
        title: 'Reporte de Errores y Correcciones Continuas',
        paragraphs: [
          'La ciencia y las matemáticas progresan mediante la contrastación. Si detectas cualquier discrepancia, ambigüedad o defecto numérico en nuestras herramientas o artículos, agradecemos tu reporte. Analizamos cada comunicación con prontitud y publicamos las correcciones con total transparencia.',
          'Puedes comunicar errores escribiendo a support@scicalcx.com o abriendo una incidencia pública en nuestro repositorio de GitHub en github.com/RishabhDev817/scicalcx.'
        ]
      }
    ]
  }
};
