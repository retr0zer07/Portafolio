(function () {
  var storageKey = 'portfolio-language';

  function fileName() {
    var parts = window.location.pathname.split('/');
    return parts[parts.length - 1] || '';
  }

  function normalize(str) {
    return String(str || '').replace(/\s+/g, ' ').trim();
  }

  function keyOf(str) {
    return normalize(str)
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/[^a-z0-9\s]/g, '')
      .replace(/\s+/g, ' ')
      .trim();
  }

  var page = fileName();

  var dict = {
    'plataforma-b2b-logistica.html': {
      title: { es: 'LogiCore | Plataforma B2B Logistica', en: 'LogiCore | B2B Logistics Platform' },
      description: {
        es: 'Plataforma B2B logistica para optimizar transporte, trazabilidad y operacion en tiempo real.',
        en: 'B2B logistics platform to optimize transport, traceability, and real-time operations.'
      },
      exact: {
        'plataforma b2b logistica': 'B2B Logistics Platform',
        'logistica inteligente para cadenas de suministro exigentes': 'Smart logistics for demanding supply chains',
        'operaciones en tiempo real': 'Real-time operations',
        'trazabilidad total': 'Full traceability',
        'control operativo': 'Operational control',
        'beneficios clave': 'Key benefits',
        'modulos principales': 'Core modules',
        'agenda una demostracion personalizada': 'Book a personalized demo',
        'cuentanos tu operacion y diseniamos un roadmap de implementacion en fases.': 'Tell us about your operation and we will design a phased implementation roadmap.',
        'disenamos un roadmap de implementacion segun tu volumen red y objetivos.': 'We design an implementation roadmap based on your volume, network, and goals.',
        'objetivo 95': 'Goal: 95%',
        'empresa': 'Company',
        'nombre completo': 'Full name',
        'email corporativo': 'Business email',
        'volumen mensual de envios': 'Monthly shipment volume',
        'mensaje': 'Message',
        'selecciona una opcion': 'Select an option',
        'sincronizacion de inventarios y ordenes en tiempo real.': 'Real-time inventory and order synchronization.',
        'optimizacion de ultima milla y cross-docking.': 'Last-mile optimization and cross-docking.',
        'control de nivel de servicio y cumplimiento otif.': 'Service-level control and OTIF compliance.',
        'diagnostico rapido de tu operacion actual.': 'Rapid diagnosis of your current operation.',
        'propuesta de arquitectura e integraciones.': 'Architecture and integrations proposal.',
        'estimacion de impacto y retorno (roi).': 'Estimated operational impact and ROI.',
        'seguridad empresarial para operaciones logisticas complejas': 'Enterprise security for complex logistics operations',
        'iniciar sesion': 'Sign in',
        'agendar demostracion': 'Book demo',
        'solicitar demo': 'Request demo',
        'comenzar': 'Get started',
        'hablar con ventas': 'Talk to sales',
        'mas elegido': 'Most popular',
        'planes de implementacion': 'Implementation plans',
        'escala desde operaciones regionales hasta redes logisticas complejas.': 'Scale from regional operations to complex logistics networks.',
        'solicita una demo personalizada': 'Request a personalized demo',
        '¿que incluye la sesion?': 'What is included in the session?',
        'enviar solicitud': 'Send request',
        'aviso de confidencialidad': 'Confidentiality notice',
        'entendido': 'Understood',
        'todo el contenido de esta pagina es ficticio y se presenta solo con fines demostrativos. por acuerdos de confidencialidad (nda), no se publican marcas, datos ni activos reales de clientes. esta es una plantilla similar al tipo de solucion implementada.': 'All content on this page is fictional and shown for demonstration purposes only. Due to confidentiality agreements (NDA), real brands, data, and client assets are not published. This page represents a similar template to the type of solution delivered.'
        ,'implementacion rapida integraciones apiedi soporte empresarial 247': 'Fast implementation • API/EDI integrations • 24/7 enterprise support'
        ,'plataforma b2b para logistica integral': 'B2B platform for integrated logistics'
        ,'controla transporte almacen y trazabilidad desde una sola plataforma': 'Control transport, warehousing, and traceability from a single platform.'
        ,'centraliza tu operacion logistica reduce costos y mejora cumplimiento sla con visibilidad en tiempo real disenada para 3pl distribucion manufactura y retail': 'Centralize your logistics operation, reduce costs, and improve SLA compliance with real-time visibility. Designed for 3PL, distribution, manufacturing, and retail.'
        ,'explorar modulos': 'Explore modules'
        ,'trazabilidad de envios': 'Shipment traceability'
        ,'ruta critica cdmx monterrey': 'Critical route: CDMX -> Monterrey'
        ,'18 unidades en transito 2 checkpoints pendientes': '18 units in transit • 2 pending checkpoints'
        ,'urbanfoods distribucion': 'UrbanFoods Distribution'
        ,'modulos clave para una operacion logistica moderna': 'Key modules for a modern logistics operation'
        ,'gestion de transporte': 'Transportation management'
        ,'planificacion de rutas asignacion de flota y control de costos por viaje con kpis en vivo': 'Route planning, fleet allocation, and trip cost control with live KPIs.'
        ,'gestion de almacen': 'Warehouse management'
        ,'picking packing inventario ciclico y trazabilidad por loteserie para maxima precision': 'Picking, packing, cycle inventory, and lot/serial traceability for maximum precision.'
        ,'seguimiento endtoend eta dinamico y alertas tempranas ante desvios o riesgos': 'End-to-end tracking, dynamic ETA, and early alerts for deviations or risks.'
        ,'automatizacion inteligente': 'Intelligent automation'
        ,'prediccion de demanda reglas automaticas y recomendaciones para decisiones mas rapidas': 'Demand forecasting, automated rules, and recommendations for faster decisions.'
        ,'adaptamos la plataforma a los retos reales de tu red logistica': 'We adapt the platform to the real challenges of your logistics network.'
        ,'3pl operadores logisticos': '3PL / logistics operators'
        ,'orquestacion multicliente': 'Multi-client orchestration'
        ,'gestion por cuenta con sla y reglas diferenciadas': 'Account-level management with differentiated SLAs and rules.'
        ,'facturacion por servicio volumen o ruta': 'Billing by service, volume, or route.'
        ,'retail manufactura distribucion': 'Retail / manufacturing / distribution'
        ,'+15 paises operando con logicore': '+15 countries operating with LogiCore'
        ,'quiero una evaluacion': 'I want an assessment'
        ,'todos los derechos reservados': 'All rights reserved.'
      }
    },
    'ecommerce-decoracion-premium.html': {
      title: { es: 'Aurea Maison | Decoracion Premium', en: 'Aurea Maison | Premium Decor' },
      description: {
        es: 'Ecommerce premium de decoracion: muebles, iluminacion, textiles y piezas de autor para elevar tus espacios.',
        en: 'Premium decor ecommerce: furniture, lighting, textiles, and signature pieces to elevate your spaces.'
      },
      exact: {
        'aurea maison | decoracion premium': 'Aurea Maison | Premium Decor',
        'tienda': 'Store',
        'colecciones': 'Collections',
        'servicios': 'Services',
        'contacto': 'Contact',
        'nueva curaduria otonio · 2026': 'New Fall Curation · 2026',
        'convierte cada ambiente en una experiencia sensorial': 'Turn every space into a sensory experience',
        'piezas de autor, materiales nobles y diseno atemporal para proyectos residenciales y hospitality de alto nivel.': 'Signature pieces, premium materials, and timeless design for high-end residential and hospitality projects.',
        'comprar ahora': 'Shop now',
        'solicitar asesoria': 'Request consultation',
        'colecciones exclusivas': 'Exclusive collections',
        'explora categorias premium para renovar tus espacios.': 'Explore premium categories to elevate your spaces.',
        'productos destacados': 'Featured products',
        'piezas seleccionadas para tu espacio.': 'Curated pieces for your space.',
        'inspiracion': 'Inspiration',
        'diseno curado': 'Curated design',
        'tu carrito': 'Your cart',
        'total': 'Total',
        'finalizar compra': 'Checkout',
        'unete al circulo privado aurea': 'Join the Aurea Private Circle',
        'acceso anticipado a lanzamientos, ediciones limitadas y beneficios exclusivos para miembros.': 'Early access to launches, limited editions, and exclusive member benefits.',
        'suscribirme': 'Subscribe',
        'soporte': 'Support',
        'envios y devoluciones': 'Shipping & returns',
        'metodos de pago': 'Payment methods',
        'preguntas frecuentes': 'FAQ',
        'proyectos b2b': 'B2B projects',
        'interior styling': 'Interior styling',
        'gift concierge': 'Gift concierge',
        'garantias': 'Warranties',
        'entrega white-glove': 'White-glove delivery',
        'instalacion en destino': 'On-site installation',
        'garantia premium': 'Premium warranty',
        'pagos seguros': 'Secure payments',
        'envio premium gratuito en compras superiores a $299 • atencion concierge 24/7': 'Free premium shipping on orders over $299 • 24/7 concierge support',
        'suscripcion confirmada. revisa tu correo para activar beneficios.': 'Subscription confirmed. Check your email to unlock member benefits.',
        'mobiliario': 'Furniture',
        'iluminacion': 'Lighting',
        'textiles': 'Textiles',
        'accesorios': 'Accessories',
        'ver todo ->': 'View all ->',
        'catalogo completo ->': 'Full catalog ->',
        'novedad': 'New',
        'agregar': 'Add',
        'tu carrito esta vacio.': 'Your cart is empty.',
        'aviso de confidencialidad': 'Confidentiality notice',
        'entendido': 'Understood',
        'todo el contenido de esta pagina es ficticio y se presenta solo con fines demostrativos. por acuerdos de confidencialidad (nda), no se publican marcas, datos ni activos reales de clientes. esta es una plantilla similar al tipo de solucion implementada.': 'All content on this page is fictional and shown for demonstration purposes only. Due to confidentiality agreements (NDA), real brands, data, and client assets are not published. This page represents a similar template to the type of solution delivered.'
        ,'decoracion premium': 'Premium decor'
        ,'nueva curaduria otono 2026': 'New Fall Curation · 2026'
        ,'ver colecciones': 'View collections'
        ,'seleccion por interioristas': 'Curated by interior designers'
        ,'anadir': 'Add'
        ,'edicion': 'Edition'
        ,'asesoria de estilo para proyectos residenciales y contract': 'Style consulting for residential and contract projects'
        ,'trabajamos contigo desde moodboard hasta seleccion final de piezas para lograr ambientes armonicos sofisticados y funcionales': 'We work with you from moodboard to final piece selection to create harmonious, sophisticated, and functional spaces.'
        ,'diseno interior premium para espacios con identidad': 'Premium interior design for spaces with identity.'
        ,'decoracion mural': 'Wall decor'
        ,'novedades': 'New arrivals'
      }
    },
    'sitio-institucional-legal.html': {
      title: { es: 'Valentia Abogados | Firma Legal', en: 'Valentia Lawyers | Legal Firm' },
      description: {
        es: 'Sitio institucional para firma legal: derecho corporativo, litigio, laboral, fiscal y compliance.',
        en: 'Institutional website for a legal firm: corporate law, litigation, labor, tax, and compliance.'
      },
      exact: {
        'valentia abogados | firma legal': 'Valentia Lawyers | Legal Firm',
        'resolvemos problemas legales complejos con vision de negocio': 'We solve complex legal matters with a business-first perspective',
        'representacion legal solida, etica profesional y estrategias personalizadas para prevenir riesgos y resolver controversias de alta complejidad.': 'Solid legal representation, professional ethics, and tailored strategies to prevent risks and resolve high-complexity disputes.',
        'representacion en disputas civiles y mercantiles con enfoque en resultados y proteccion reputacional.': 'Representation in civil and commercial disputes focused on outcomes and reputational protection.',
        'agendar primera reunion': 'Schedule first meeting',
        'hablar con un especialista': 'Talk to a specialist',
        'areas de practica': 'Practice areas',
        'socios y equipo directivo': 'Partners and leadership team',
        'compromiso institucional': 'Institutional commitment',
        'atencion confidencial • cobertura nacional • consultas presenciales y virtuales': 'Confidential support • Nationwide coverage • In-person and virtual consultations',
        'correo electronico': 'Email',
        'empresa / institucion': 'Company / Institution',
        'nombre completo': 'Full name',
        'telefono': 'Phone',
        'area de interes': 'Area of interest',
        'selecciona un area': 'Select an area',
        'resumen del asunto': 'Case summary',
        'cuentanos tu situacion y uno de nuestros especialistas te contactara para una evaluacion inicial.': 'Tell us about your situation and one of our specialists will contact you for an initial assessment.',
        'derecho corporativo & m&a': 'Corporate Law & M&A',
        'fiscal & patrimonial': 'Tax & Wealth',
        'laboral empresarial': 'Labor Law for Business',
        'litigio civil & mercantil': 'Civil & Commercial Litigation',
        'compliance & riesgo penal': 'Compliance & Criminal Risk',
        'inmobiliario & urbanistico': 'Real Estate & Urban Planning',
        'enviar solicitud': 'Send request',
        'gracias. hemos recibido tu solicitud y te contactaremos en breve.': 'Thank you. We received your request and will contact you shortly.',
        'portal clientes': 'Client Portal',
        'solicitar consulta': 'Request consultation',
        'areas de practica': 'Practice areas',
        'equipo': 'Team',
        'la firma': 'The firm',
        'contacto': 'Contact',
        'ver areas de practica': 'View practice areas',
        'primera consulta institucional': 'Initial institutional consultation',
        'enviar solicitud': 'Send request',
        'aviso de confidencialidad': 'Confidentiality notice',
        'entendido': 'Understood',
        'todo el contenido de esta pagina es ficticio y se presenta solo con fines demostrativos. por acuerdos de confidencialidad (nda), no se publican marcas, datos ni activos reales de clientes. esta es una plantilla similar al tipo de solucion implementada.': 'All content on this page is fictional and shown for demonstration purposes only. Due to confidentiality agreements (NDA), real brands, data, and client assets are not published. This page represents a similar template to the type of solution delivered.'
        ,'excelencia juridica con enfoque estrategico': 'Legal excellence with a strategic focus'
        ,'asesoria legal integral para empresas directivos y patrimonio': 'Comprehensive legal advisory for companies, executives, and wealth.'
        ,'en valentia abogados combinamos rigor tecnico experiencia litigiosa y vision de negocio para proteger los intereses de nuestros clientes en entornos regulatorios complejos': 'At Valentia Lawyers, we combine technical rigor, litigation experience, and business vision to protect our clients interests in complex regulatory environments.'
        ,'+20 anos de trayectoria': '+20 years of track record'
        ,'equipo multidisciplinario': 'Multidisciplinary team'
        ,'respuesta en 24h habiles': 'Response within 24 business hours'
        ,'tasa de retencion de clientes': 'Client retention rate'
        ,'tiempo medio de diagnostico inicial': 'Average initial diagnosis time'
        ,'asesoramos de forma preventiva y contenciosa en los ambitos criticos de tu operacion': 'We provide preventive and contentious advisory in the critical areas of your operation.'
        ,'constitucion societaria gobierno corporativo fusiones adquisiciones due diligence y pactos entre accionistas': 'Corporate setup, corporate governance, mergers, acquisitions, due diligence, and shareholder agreements.'
        ,'planeacion fiscal estrategica defensa ante autoridad y estructuras patrimoniales para continuidad empresarial': 'Strategic tax planning, defense before authorities, and wealth structures for business continuity.'
        ,'contratacion relaciones colectivas auditorias laborales cumplimiento normativo y litigio individualcolectivo': 'Hiring, labor relations, labor audits, regulatory compliance, and individual/collective litigation.'
        ,'representacion en controversias contractuales recuperacion de cartera medidas cautelares y arbitraje': 'Representation in contractual disputes, debt recovery, injunctive measures, and arbitration.'
        ,'programas de cumplimiento matrices de riesgo investigaciones internas y protocolos anticorrupcion': 'Compliance programs, risk matrices, internal investigations, and anti-corruption protocols.'
        ,'operaciones de compraventa arrendamientos complejos regularizacion y estructuracion de proyectos': 'Purchase-sale operations, complex leases, regularization, and project structuring.'
        ,'profesionales con experiencia en firmas lideres y asuntos de alta exposicion': 'Professionals with experience in leading firms and high-exposure matters.'
        ,'especialista en estructuracion societaria y transacciones complejas para grupos empresariales regionales': 'Specialist in corporate structuring and complex transactions for regional business groups.'
        ,'socia litigio estrategico': 'Partner · Strategic Litigation'
        ,'diseno de estrategias preventivas gestion de riesgo regulatorio y defensa tecnica ante contingencias': 'Design of preventive strategies, regulatory risk management, and technical defense for contingencies.'
        ,'nuestro enfoque combina analisis juridico profundo estrategia procesal y acompanamiento cercano para proteger tus decisiones corporativas en cada etapa': 'Our approach combines deep legal analysis, procedural strategy, and close support to protect your corporate decisions at every stage.'
        ,'atencion a empresas family offices y alta direccion': 'Support for companies, family offices, and top management.'
        ,'confidencialidad y reserva profesional garantizadas': 'Confidentiality and professional discretion guaranteed.'
        ,'etica profesional confidencialidad excelencia juridica': 'Professional ethics • Confidentiality • Legal excellence'
      },
      attrs: [
        { selector: '#telefono', attr: 'placeholder', es: '+52 ...', en: '+1 ...' },
        { selector: '#mensaje', attr: 'placeholder', es: 'Comparte una breve descripcion de tu caso', en: 'Share a brief description of your case' }
      ]
    },
    'landing-lanzamiento-saas.html': {
      title: { es: 'NovaFlow | Lanzamiento SaaS', en: 'NovaFlow | SaaS Launch' },
      description: {
        es: 'Landing de lanzamiento SaaS con alta carga visual para beta privada y waitlist.',
        en: 'SaaS launch landing page with strong visual direction for private beta and waitlist.'
      },
      exact: {
        'novaflow | lanzamiento saas': 'NovaFlow | SaaS Launch',
        'prueba privada': 'Private beta',
        'plataforma operativa para equipos de alto rendimiento': 'Operational platform for high-performance teams',
        'controla procesos, visibilidad y decisiones en tiempo real con una experiencia unificada.': 'Control processes, visibility, and decisions in real time with a unified experience.',
        'sign in': 'Sign in',
        'lista de espera': 'Waitlist',
        'unirme a la beta': 'Join the beta',
        'ver demo': 'Watch demo',
        'cuando se libera la version publica?': 'When is the public release?',
        'la beta tiene costo?': 'Is the beta paid?',
        'no la beta seleccionada es gratuita y conserva beneficios de lanzamiento al pasar a plan pago.': 'No. The selected beta is free and keeps launch benefits when moving to a paid plan.',
        'necesito tarjeta para registrarme?': 'Do I need a credit card to sign up?',
        'que integraciones incluye?': 'Which integrations are included?',
        'preguntas frecuentes': 'Frequently asked questions',
        'email de trabajo': 'Work email',
        'selecciona': 'Select',
        'enviar acceso': 'Send access',
        'built for high-performance teams': 'Built for high-performance teams',
        'prueba privada': 'Private beta',
        'lista de espera': 'Waitlist',
        'ver demo': 'Watch demo',
        'unirme a la beta': 'Join beta',
        'enviar acceso': 'Send access',
        'aviso de confidencialidad': 'Confidentiality notice',
        'entendido': 'Understood',
        'todo el contenido de esta pagina es ficticio y se presenta solo con fines demostrativos. por acuerdos de confidencialidad (nda), no se publican marcas, datos ni activos reales de clientes. esta es una plantilla similar al tipo de solucion implementada.': 'All content on this page is fictional and shown for demonstration purposes only. Due to confidentiality agreements (NDA), real brands, data, and client assets are not published. This page represents a similar template to the type of solution delivered.'
        ,'menos friccion mas ejecucion': 'Less friction. More execution.'
        ,'novaflow centraliza procesos automatizaciones y metricas operativas en una sola plataforma visual ideal para equipos que crecen rapido y necesitan visibilidad total sin complejidad tecnica': 'NovaFlow centralizes processes, automations, and operational metrics in one visual platform. Ideal for teams growing fast that need full visibility without technical complexity.'
        ,'riesgo de atraso detectado en 2 flujos criticos': 'Delay risk detected in 2 critical flows.'
        ,'recomendacion ai': 'AI recommendation'
        ,'automatiza aprobaciones y reduce 27 del tiempo operativo': 'Automate approvals and reduce operational time by 27%.'
        ,'integra crm soporte mensajeria y billing con conectores listos para usar': 'Integrate CRM, support, messaging, and billing with ready-to-use connectors.'
        ,'disena flujos visuales con triggers reglas y acciones sin escribir codigo': 'Design visual flows with triggers, rules, and actions without writing code.'
        ,'copilot operativo': 'Operational copilot'
        ,'detecta desvios y propone acciones concretas para cada equipo': 'Detect deviations and suggest concrete actions for each team.'
        ,'automatizacion nocode': 'No-code automation'
        ,'panel ejecutivo con kpis throughput y cumplimiento por area': 'Executive dashboard with KPIs, throughput, and compliance by area.'
        ,'sso permisos por rol auditoria completa y cifrado extremo a extremo': 'SSO, role-based permissions, full audit trail, and end-to-end encryption.'
        ,'colaboracion': 'Collaboration'
        ,'unete al lanzamiento privado': 'Join the private launch'
        ,'dias': 'Days'
        ,'nombre': 'Name'
        ,'tamano del equipo': 'Team size'
        ,'despues de finalizar la fase beta los usuarios en waitlist acceden primero por tandas': 'After the beta phase ends, users on the waitlist get access first in waves.'
        ,'incluye crm soporte mensajeria y webhooks durante beta anadimos nuevas integraciones cada sprint': 'Includes CRM, support, messaging, and webhooks. During beta, we add new integrations each sprint.'
      },
      attrs: [
        { selector: '#name', attr: 'placeholder', es: 'Tu nombre', en: 'Your name' },
        { selector: '#workEmail', attr: 'placeholder', es: 'nombre@empresa.com', en: 'name@company.com' }
      ]
    },
    'portal-servicios-medicos.html': {
      title: { es: 'MediCore+ | Portal de Servicios Medicos', en: 'MediCore+ | Medical Services Portal' },
      description: {
        es: 'Portal de servicios medicos con triaje digital, agenda de especialistas, resultados y teleconsulta.',
        en: 'Medical services portal with digital triage, specialist scheduling, results, and teleconsultation.'
      },
      exact: {
        'portal de salud integral': 'Integrated Health Portal',
        'portal de servicios medicos': 'Medical Services Portal',
        'paciente': 'Patient',
        'dashboard': 'Dashboard',
        'agenda medica': 'Medical Schedule',
        'especialistas': 'Specialists',
        'servicios': 'Services',
        'resultados': 'Results',
        'telemedicina': 'Telemedicine',
        'mi perfil': 'My profile',
        'cobertura / seguro': 'Coverage / Insurance',
        'recordatorios': 'Reminders',
        'configuracion': 'Settings',
        'navegacion clinica': 'Clinical navigation',
        'estado del sistema:': 'System status:',
        'operativo': 'Operational',
        'busqueda rapida': 'Quick search',
        'agendar cita': 'Book appointment',
        'atencion medica hibrida y centrada en el paciente': 'Hybrid care focused on the patient',
        'gestiona citas, especialistas, resultados y teleconsultas desde un solo lugar.': 'Manage appointments, specialists, results, and teleconsultations from one place.',
        'indicadores de atencion': 'Care indicators',
        'pacientes activos': 'Active patients',
        'satisfaccion general': 'Overall satisfaction',
        'teleconsultas mes': 'Monthly teleconsultations',
        'espera promedio': 'Average wait time',
        'agenda de hoy': 'Today schedule',
        'resultados recientes': 'Recent results',
        'disponible': 'Available',
        'en proceso': 'In progress',
        'consulta virtual inmediata con especialistas certificados': 'Immediate virtual consultation with certified specialists',
        'activa una teleconsulta en minutos, comparte tus estudios desde el portal y recibe indicaciones medicas con seguimiento digital.': 'Start a teleconsultation in minutes, share your tests from the portal, and receive medical guidance with digital follow-up.',
        'servicios medicos': 'Medical Services',
        'especialistas disponibles': 'Available specialists',
        'tiempos de espera promedio:': 'Average waiting times:',
        'resultados digitales y trazabilidad en tiempo real.': 'Digital results and real-time traceability.',
        'proxima ventana: 30 min': 'Next slot: 30 min',
        'prevencion, diagnostico y seguimiento': 'Prevention, diagnosis, and follow-up',
        'evaluacion integral anual con laboratorio e imagen.': 'Annual full check-up with lab tests and imaging.',
        'laboratorio clinico': 'Clinical laboratory',
        'imagen diagnostica': 'Diagnostic imaging',
        'ultrasonido, rx y estudios especializados.': 'Ultrasound, X-ray, and specialized studies.',
        'medicina general': 'General medicine',
        'turnos priorizados por triaje': 'Triage-prioritized appointments',
        'notificaciones': 'Notifications',
        'estable': 'Stable',
        'excelente': 'Excellent',
        'iniciar teleconsulta': 'Start teleconsultation',
        'aviso de confidencialidad': 'Confidentiality notice',
        'entendido': 'Understood',
        'todo el contenido de esta pagina es ficticio y se presenta solo con fines demostrativos. por acuerdos de confidencialidad (nda), no se publican marcas, datos ni activos reales de clientes. esta es una plantilla similar al tipo de solucion implementada.': 'All content on this page is fictional and shown for demonstration purposes only. Due to confidentiality agreements (NDA), real brands, data, and client assets are not published. This page represents a similar template to the type of solution delivered.'
        ,'acceso a red de especialistas diagnostico preventivo y seguimiento digital continuo': 'Access to a specialist network, preventive diagnostics, and continuous digital follow-up.'
        ,'cardiologia': 'Cardiology'
        ,'pediatria': 'Pediatrics'
        ,'dermatologia': 'Dermatology'
        ,'cardiologia 12 anos exp': 'Cardiology • 12 years exp.'
        ,'pediatria 9 anos exp': 'Pediatrics • 9 years exp.'
        ,'dermatologia 11 anos exp': 'Dermatology • 11 years exp.'
        ,'centro de estudios del paciente': 'Patient studies center'
        ,'biometria hematica': 'Complete blood count'
        ,'perfil lipidico': 'Lipid profile'
        ,'en validacion medica': 'Pending medical validation'
      },
      attrs: [
        { selector: '#searchInput', attr: 'placeholder', es: 'Buscar especialista o servicio...', en: 'Search specialist or service...' }
      ]
    }
  };

  if (!dict[page]) return;

  function createSwitcher() {
    var style = document.createElement('style');
    style.textContent = ''
      + '.mh-lang-switch{position:fixed;top:1rem;right:1rem;z-index:140;display:inline-flex;gap:.35rem;padding:.3rem .36rem;border:1px solid color-mix(in srgb,var(--line,#777) 70%,transparent);border-radius:999px;background:color-mix(in srgb,var(--paper,#fff) 86%,white);box-shadow:0 8px 18px rgba(0,0,0,.16)}'
      + '.mh-lang-btn{min-width:2.55rem;padding:.42rem .6rem;border:1px solid transparent;border-radius:999px;background:transparent;color:var(--text,#222);font:600 .8rem/1 Inter,Segoe UI,Arial,sans-serif;letter-spacing:.04em;cursor:pointer;transition:transform 150ms ease,background 150ms ease,border-color 150ms ease,opacity 150ms ease;opacity:.92}'
      + '.mh-lang-btn[aria-pressed="true"]{background:color-mix(in srgb,var(--paper,#fff) 45%,var(--line,#555) 12%);border-color:color-mix(in srgb,var(--line,#555) 70%,transparent);transform:translateY(-1px);opacity:1}'
      + '.mh-lang-btn:hover,.mh-lang-btn:focus-visible{opacity:1;transform:translateY(-1px)}'
      + '@media (max-width:40rem){.mh-lang-switch{top:.6rem;right:.6rem}.mh-lang-btn{min-width:2.35rem;padding:.36rem .5rem;font-size:.75rem}}';

    document.head.appendChild(style);

    var node = document.createElement('div');
    node.className = 'mh-lang-switch';
    node.innerHTML = ''
      + '<button class="mh-lang-btn" type="button" data-lang="es" aria-pressed="false" aria-label="Cambiar a espanol">ES</button>'
      + '<button class="mh-lang-btn" type="button" data-lang="en" aria-pressed="false" aria-label="Switch to English">EN</button>';

    document.body.appendChild(node);
    return node;
  }

  var switcher = createSwitcher();
  var buttons = switcher.querySelectorAll('.mh-lang-btn');

  function collectTextNodes() {
    var nodes = [];
    var walker = document.createTreeWalker(
      document.body,
      NodeFilter.SHOW_TEXT,
      {
        acceptNode: function (node) {
          if (!node || !node.parentElement) return NodeFilter.FILTER_REJECT;
          if (node.parentElement.closest('.mh-lang-switch')) return NodeFilter.FILTER_REJECT;
          if (/^(SCRIPT|STYLE|NOSCRIPT)$/i.test(node.parentElement.tagName)) return NodeFilter.FILTER_REJECT;
          if (normalize(node.nodeValue) === '') return NodeFilter.FILTER_REJECT;
          return NodeFilter.FILTER_ACCEPT;
        }
      }
    );

    var current;
    while ((current = walker.nextNode())) {
      nodes.push({ node: current, es: current.nodeValue });
    }

    return nodes;
  }

  var translatableNodes = collectTextNodes();

  function resetToSpanish() {
    translatableNodes.forEach(function (entry) {
      entry.node.nodeValue = entry.es;
    });
  }

  function applyExactTranslations(map) {
    translatableNodes.forEach(function (entry) {
      var k = keyOf(entry.es);
      if (map[k]) {
        entry.node.nodeValue = map[k];
      } else {
        if (/todos\s+los\s+derechos\s+reservados\.?/i.test(entry.node.nodeValue)) {
          entry.node.nodeValue = entry.node.nodeValue.replace(/todos\s+los\s+derechos\s+reservados\.?/i, 'All rights reserved.');
        }
        if (/\bDra\.\s/i.test(entry.node.nodeValue)) {
          entry.node.nodeValue = entry.node.nodeValue.replace(/\bDra\.\s/gi, 'Dr. ');
        }
      }
    });
  }

  function applyAttributeTranslations(lang, attrs) {
    (attrs || []).forEach(function (rule) {
      var value = lang === 'en' ? rule.en : rule.es;
      if (!value) return;
      document.querySelectorAll(rule.selector).forEach(function (el) {
        el.setAttribute(rule.attr, value);
      });
    });
  }

  function applyLanguage(lang) {
    if (lang !== 'es' && lang !== 'en') return;

    document.documentElement.setAttribute('lang', lang);

    buttons.forEach(function (btn) {
      btn.setAttribute('aria-pressed', String(btn.getAttribute('data-lang') === lang));
    });

    var data = dict[page];
    document.title = lang === 'en' ? data.title.en : data.title.es;

    var desc = document.querySelector('meta[name="description"]');
    if (desc) {
      desc.setAttribute('content', lang === 'en' ? data.description.en : data.description.es);
    }

    resetToSpanish();

    if (lang === 'en') {
      var normalizedMap = {};
      Object.keys(data.exact || {}).forEach(function (k) {
        normalizedMap[keyOf(k)] = data.exact[k];
      });
      applyExactTranslations(normalizedMap);
    }

    applyAttributeTranslations(lang, data.attrs);

    try {
      window.localStorage.setItem(storageKey, lang);
    } catch (error) {
      // Ignore storage failures.
    }
  }

  var initialLang = 'es';
  try {
    var saved = window.localStorage.getItem(storageKey);
    if (saved === 'es' || saved === 'en') {
      initialLang = saved;
    }
  } catch (error) {
    initialLang = 'es';
  }

  buttons.forEach(function (btn) {
    btn.addEventListener('click', function () {
      applyLanguage(btn.getAttribute('data-lang'));
    });
  });

  applyLanguage(initialLang);
})();
