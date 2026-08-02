(function () {
  const body = document.body;
  body.classList.add('has-js');
  const links = document.querySelectorAll('.index-link');
  const themeButton = document.querySelector('.theme-button');
  const revealItems = document.querySelectorAll('.reveal');
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function pageName() {
    const path = window.location.pathname.split('/').pop();
    return path || 'index.html';
  }

  function injectLanguageSwitcher() {
    if (!document.querySelector('main')) return null;
    if (pageName() !== 'index.html') return null;
    const wrapper = document.createElement('div');
    wrapper.className = 'language-switch';
    wrapper.setAttribute('aria-label', 'Selector de idioma');

    wrapper.innerHTML = ''
      + '<button class="language-button" type="button" data-lang="es" aria-pressed="false" aria-label="Cambiar a espanol">'
      + '  <img src="assets/img/espanol.png" alt="" aria-hidden="true" />'
      + '</button>'
      + '<button class="language-button" type="button" data-lang="en" aria-pressed="false" aria-label="Switch to English">'
      + '  <img src="assets/img/eeuu.png" alt="" aria-hidden="true" />'
      + '</button>';

    body.appendChild(wrapper);
    return wrapper;
  }

  const languageSwitcher = injectLanguageSwitcher();
  const languageButtons = languageSwitcher ? languageSwitcher.querySelectorAll('.language-button') : [];

  const i18n = {
    common: [
      { selector: '.skip-link', es: 'Saltar al contenido', en: 'Skip to content' },
      { selector: '.language-switch', attr: 'aria-label', es: 'Selector de idioma', en: 'Language selector' },
      { selector: '.language-button[data-lang="es"]', attr: 'aria-label', es: 'Cambiar a espanol', en: 'Switch to Spanish' },
      { selector: '.language-button[data-lang="en"]', attr: 'aria-label', es: 'Switch to English', en: 'Switch to English' },
      { selector: '.footer-links li:first-child a', es: 'GitHub', en: 'GitHub' },
      { selector: '.footer-links li:last-child a', es: 'Email', en: 'Email' },
      { selector: '.site-footer .footer-links', attr: 'aria-label', es: 'Redes y correo', en: 'Social links and email' },
      { selector: '.footer-links li:first-child a', attr: 'aria-label', es: 'Perfil en GitHub', en: 'GitHub profile' },
      { selector: '.footer-links li:last-child a', attr: 'aria-label', es: 'Correo electronico', en: 'Email address' },
      { selector: '.floating-back', es: 'Atras', en: 'Back' },
      { selector: '.floating-back', attr: 'aria-label', es: 'Volver al inicio', en: 'Back to home' }
    ],
    'index.html': [
      { selector: '.subtitle', es: 'Yo hago tu web, clara, rapida y memorable.', en: 'I build your website to be clear, fast, and memorable.' },
      { selector: 'a[href="sobre-mi.html"] .index-label', es: 'Sobre mi', en: 'About me' },
      { selector: 'a[href="proyectos.html"] .index-label', es: 'Proyectos', en: 'Projects' },
      { selector: 'a[href="experiencia.html"] .index-label', es: 'Experiencia', en: 'Experience' },
      { selector: 'a[href="stack.html"] .index-label', es: 'Stack', en: 'Stack' },
      { selector: 'a[href="blog.html"] .index-label', es: 'Blog', en: 'Blog' },
      { selector: 'a[href="contacto.html"] .index-label', es: 'Contacto', en: 'Contact' },
      { selector: '.theme-switch', attr: 'aria-label', es: 'Selector de tema', en: 'Theme selector' },
      { selector: '.theme-button', attr: 'aria-label', es: 'Cambiar entre modo claro y oscuro', en: 'Switch between light and dark mode' },
      { selector: '.index-nav', attr: 'aria-label', es: 'Indice principal del portafolio', en: 'Main portfolio index' }
    ],
    'sobre-mi.html': [
      { selector: '.page-title', es: 'Sobre mi', en: 'About me' },
      { selector: '.about-intro-text', es: 'Soy Marcos Hernandez, desarrollador web completo. Ayudo a marcas, profesionales y negocios a lanzar sitios desde cero que se ven premium, comunican con claridad y funcionan de verdad: rapidos, ordenados y listos para generar oportunidades.', en: "Specializing in full-stack web development, I'm Marcos Hernandez. I help brands, professionals, and businesses launch websites from the ground up that look premium, communicate clearly, and truly perform fast, well-structured, and built to generate opportunities." },
      { selector: '.page-block[aria-label="Principios de trabajo"] .page-subtitle', es: 'Como trabajo', en: 'How I work' },
      { selector: '.page-block[aria-label="Servicios"] .page-subtitle', es: 'Servicios clave', en: 'Key services' },
      { selector: '.fact-list li:nth-child(1)', es: 'Primero entiendo tu objetivo: vender, posicionarte o conseguir contactos.', en: 'First I understand your goal: sales, positioning, or lead generation.' },
      { selector: '.fact-list li:nth-child(2)', es: 'Defino una propuesta visual con estilo, jerarquia y mensaje claro.', en: 'I define a visual proposal with style, hierarchy, and a clear message.' },
      { selector: '.fact-list li:nth-child(3)', es: 'Desarrollo todo el sitio con codigo limpio, rapido y mantenible.', en: 'I build the full site with clean, fast, and maintainable code.' },
      { selector: '.fact-list li:nth-child(4)', es: 'Entrego una web lista para crecer, no solo una portada bonita.', en: 'I deliver a website ready to scale, not just a pretty landing.' },
      { selector: '.tag-list li:nth-child(1)', es: 'Diseño y desarrollo de sitios web completos desde cero.', en: 'Full website design and development from scratch.' },
      { selector: '.tag-list li:nth-child(2)', es: 'Landing pages premium para presentar servicios y captar clientes.', en: 'Premium landing pages to present services and attract clients.' },
      { selector: '.tag-list li:nth-child(3)', es: 'Rediseño de webs existentes para mejorar imagen, orden y resultados.', en: 'Redesign of existing websites to improve brand image, structure, and results.' },
      { selector: '.tag-list li:nth-child(4)', es: 'Optimizacion de rendimiento y estructura para una mejor experiencia.', en: 'Performance and structure optimization for a better user experience.' }
    ],
    'proyectos.html': [
      { selector: '.page-title', es: 'Proyectos', en: 'Projects' },
      { selector: '.projects-intro-text', es: 'Estos casos estan anonimizados por acuerdos de confidencialidad con agencias. No publico marcas ni activos privados, pero si el valor real de mi trabajo: problema, solucion, ejecucion tecnica e impacto.', en: "Every case shown here has been anonymized under confidentiality agreements with agencies. I don't publish client brands or private assets only the real value of my work: the problem, the solution, the technical execution, and the impact." },
      { selector: '.page-block[aria-label="Casos destacados"]', attr: 'aria-label', es: 'Casos destacados', en: 'Featured case studies' },
      { selector: '.project-preview-link[href="proyectos/plataforma-b2b-logistica.html"]', attr: 'aria-label', es: 'Abrir proyecto Plataforma B2B Logistica', en: 'Open B2B Logistics Platform project' },
      { selector: '.project-preview-link[href="proyectos/ecommerce-decoracion-premium.html"]', attr: 'aria-label', es: 'Abrir proyecto Ecommerce de Decoracion Premium', en: 'Open Premium Decor Ecommerce project' },
      { selector: '.project-preview-link[href="proyectos/sitio-institucional-legal.html"]', attr: 'aria-label', es: 'Abrir proyecto Sitio Institucional para Firma Legal', en: 'Open Institutional Website for Legal Firm project' },
      { selector: '.project-preview-link[href="proyectos/landing-lanzamiento-saas.html"]', attr: 'aria-label', es: 'Abrir proyecto Landing de Lanzamiento SaaS', en: 'Open SaaS Launch Landing project' },
      { selector: '.project-preview-link[href="proyectos/portal-servicios-medicos.html"]', attr: 'aria-label', es: 'Abrir proyecto Portal de Servicios Medicos', en: 'Open Medical Services Portal project' },
      { selector: '.card:nth-child(1) .project-preview-placeholder', es: 'Preview pendiente: agrega la captura en assets/img/previews/plataforma-b2b-logistica.png', en: 'Preview pending: add screenshot at assets/img/previews/plataforma-b2b-logistica.png' },
      { selector: '.card:nth-child(2) .project-preview-placeholder', es: 'Preview pendiente: agrega la captura en assets/img/previews/ecommerce-decoracion-premium.png', en: 'Preview pending: add screenshot at assets/img/previews/ecommerce-decoracion-premium.png' },
      { selector: '.card:nth-child(3) .project-preview-placeholder', es: 'Preview pendiente: agrega la captura en assets/img/previews/sitio-institucional-legal.png', en: 'Preview pending: add screenshot at assets/img/previews/sitio-institucional-legal.png' },
      { selector: '.card:nth-child(4) .project-preview-placeholder', es: 'Preview pendiente: agrega la captura en assets/img/previews/landing-lanzamiento-saas.png', en: 'Preview pending: add screenshot at assets/img/previews/landing-lanzamiento-saas.png' },
      { selector: '.card:nth-child(5) .project-preview-placeholder', es: 'Preview pendiente: agrega la captura en assets/img/previews/portal-servicios-medicos.png', en: 'Preview pending: add screenshot at assets/img/previews/portal-servicios-medicos.png' },
      { selector: '.card:nth-child(1) h3', es: 'Plataforma B2B Logistica (via agencia)', en: 'B2B Logistics Platform (agency work)' },
      { selector: '.card:nth-child(1) p', html: true, es: '<strong>Objetivo:</strong> aumentar solicitudes de cotizacion desde desktop y mobile.<br /><strong>Mi rol:</strong> desarrollo web completo de la capa publica y seccion de captacion.<br /><strong>Implementacion:</strong> arquitectura de contenido, interfaz modular y optimizacion de formularios.<br /><strong>Resultado:</strong> mayor claridad en propuesta comercial y mejora sostenida en leads calificados.', en: '<strong>Goal:</strong> increase quote requests from desktop and mobile users.<br /><strong>My role:</strong> full web development of the public layer and lead-capture section.<br /><strong>Implementation:</strong> content architecture, modular interface, and form optimization.<br /><strong>Result:</strong> clearer commercial messaging and sustained improvement in qualified leads.' },
      { selector: '.card:nth-child(2) h3', es: 'Ecommerce de Decoracion Premium (via agencia)', en: 'Premium Decor Ecommerce (agency work)' },
      { selector: '.card:nth-child(2) p', html: true, es: '<strong>Objetivo:</strong> reducir abandono en fichas de producto y checkout mobile.<br /><strong>Mi rol:</strong> implementacion de front-end y mejora integral de experiencia de compra.<br /><strong>Implementacion:</strong> jerarquia visual de producto, optimizacion de carga y flujo de compra simplificado.<br /><strong>Resultado:</strong> navegacion mas fluida y mejora en conversion de usuarios moviles.', en: '<strong>Goal:</strong> reduce drop-off on product pages and mobile checkout.<br /><strong>My role:</strong> front-end implementation and full purchase-experience improvement.<br /><strong>Implementation:</strong> product visual hierarchy, load-time optimization, and simplified buying flow.<br /><strong>Result:</strong> smoother navigation and better conversion from mobile users.' },
      { selector: '.card:nth-child(3) h3', es: 'Sitio Institucional para Firma Legal (via agencia)', en: 'Institutional Website for Legal Firm (agency work)' },
      { selector: '.card:nth-child(3) p', html: true, es: '<strong>Objetivo:</strong> elevar percepcion de marca y ordenar servicios complejos.<br /><strong>Mi rol:</strong> desarrollo completo del sitio y sistema de secciones editoriales.<br /><strong>Implementacion:</strong> estructura por perfiles de cliente, componentes reutilizables y base SEO tecnica.<br /><strong>Resultado:</strong> mejor comprension de servicios y aumento de contactos desde organico.', en: '<strong>Goal:</strong> elevate brand perception and structure complex services.<br /><strong>My role:</strong> full website development and editorial section system.<br /><strong>Implementation:</strong> client-profile structure, reusable components, and technical SEO foundation.<br /><strong>Result:</strong> clearer service understanding and increased contacts from organic traffic.' },
      { selector: '.card:nth-child(4) h3', es: 'Landing de Lanzamiento SaaS (via agencia)', en: 'SaaS Launch Landing (agency work)' },
      { selector: '.card:nth-child(4) p', html: true, es: '<strong>Objetivo:</strong> comunicar propuesta tecnica compleja en una narrativa simple.<br /><strong>Mi rol:</strong> desarrollo de landing completa y microinteracciones de apoyo comercial.<br /><strong>Implementacion:</strong> bloques por beneficio, scroll guiado y CTAs estrategicos por etapa.<br /><strong>Resultado:</strong> incremento en demos agendadas y menor friccion en primer contacto.', en: '<strong>Goal:</strong> communicate a complex technical offer through a simple narrative.<br /><strong>My role:</strong> full landing development and commercial-support microinteractions.<br /><strong>Implementation:</strong> benefit-driven blocks, guided scroll, and stage-based strategic CTAs.<br /><strong>Result:</strong> increase in booked demos and lower friction at first contact.' },
      { selector: '.card:nth-child(5) h3', es: 'Portal de Servicios Medicos (via agencia)', en: 'Medical Services Portal (agency work)' },
      { selector: '.card:nth-child(5) p', html: true, es: '<strong>Objetivo:</strong> facilitar la busqueda de servicios y mejorar confianza del usuario final.<br /><strong>Mi rol:</strong> desarrollo web integral y optimizacion de experiencia en mobile first.<br /><strong>Implementacion:</strong> navegacion por intencion, mejora de legibilidad y performance prioritaria.<br /><strong>Resultado:</strong> mayor tiempo de permanencia y crecimiento en solicitudes de atencion.', en: '<strong>Goal:</strong> make service discovery easier and increase end-user trust.<br /><strong>My role:</strong> end-to-end web development and mobile-first experience optimization.<br /><strong>Implementation:</strong> intent-based navigation, improved readability, and performance-first delivery.<br /><strong>Result:</strong> longer time on site and growth in service-request submissions.' },
      { selector: '.page-block[aria-label="Nota de confidencialidad"] .page-copy', es: 'Nota importante: todo el contenido de estas plantillas es ficticio y se muestra solo con fines demostrativos. Por acuerdos de confidencialidad (NDA), no publico marcas, datos reales ni activos privados de clientes; cada caso representa una plantilla similar al tipo de solucion implementada.', en: 'Important note: all content in these templates is fictional and shown for demonstration purposes only. Due to confidentiality agreements (NDA), I do not publish real brands, data, or private client assets; each case represents a similar template to the type of solution delivered.' }
    ],
    'experiencia.html': [
      { selector: 'title', es: 'Experiencia | Marcos Hernandez', en: 'Experience | Marcos Hernandez' },
      { selector: 'meta[name="description"]', attr: 'content', es: 'Experiencia profesional de Marcos Hernandez en desarrollo web completo.', en: 'Professional experience of Marcos Hernandez in full-stack web development.' },
      { selector: 'meta[property="og:title"]', attr: 'content', es: 'Experiencia | Marcos Hernandez', en: 'Experience | Marcos Hernandez' },
      { selector: 'meta[property="og:description"]', attr: 'content', es: 'Experiencia profesional de Marcos Hernandez en desarrollo web completo.', en: 'Professional experience of Marcos Hernandez in full-stack web development.' },
      { selector: 'meta[name="twitter:title"]', attr: 'content', es: 'Experiencia | Marcos Hernandez', en: 'Experience | Marcos Hernandez' },
      { selector: 'meta[name="twitter:description"]', attr: 'content', es: 'Experiencia profesional de Marcos Hernandez en desarrollo web completo.', en: 'Professional experience of Marcos Hernandez in full-stack web development.' },
      { selector: '.page-title', es: 'Experiencia', en: 'Experience' },
      { selector: '.page-block[aria-label="Resumen de experiencia"]', attr: 'aria-label', es: 'Resumen de experiencia', en: 'Experience summary' },
      { selector: '.experience-intro-text', es: 'Llevo 8 años en desarrollo web desde que me gradue. Mi camino ha sido principalmente freelance y en colaboracion con agencias de marketing, construyendo sitios completos para marcas, negocios y campañas comerciales.', en: "Leveraging 8 years of experience in web development since graduating, I've built my career primarily as a freelancer, collaborating with marketing agencies to create complete websites for brands, businesses, and commercial campaigns." },
      { selector: '.initial-inline[role="img"]', attr: 'aria-label', es: 'Inicial ilustrada letra L', en: 'Illustrated initial letter L' },
      { selector: '.initial-image', attr: 'alt', es: 'Letra L ilustrada', en: 'Illustrated letter L' },
      { selector: '.page-block[aria-label="Trayectoria profesional"]', attr: 'aria-label', es: 'Trayectoria profesional', en: 'Professional trajectory' },
      { selector: '.timeline-item:nth-child(1) h3', es: 'Desarrollador Web Freelance', en: 'Freelance Web Developer' },
      { selector: '.timeline-item:nth-child(1) .page-copy', es: 'Desarrollo sitios web completos desde cero para clientes de distintos sectores. Me encargo de la parte visual, estructura de contenido, implementacion tecnica y optimizacion final para publicacion.', en: 'I build complete websites from scratch for clients across different industries. I handle the visual layer, content structure, technical implementation, and final optimization before launch.' },
      { selector: '.timeline-item:nth-child(2) h3', es: 'Colaborador Web para Agencias de Marketing', en: 'Web Collaborator for Marketing Agencies' },
      { selector: '.timeline-item:nth-child(2) .page-copy', es: 'Trabajo junto a equipos de estrategia, pauta y branding para aterrizar propuestas comerciales en paginas que venden mejor. Gran parte de estos proyectos estan protegidos por acuerdos de confidencialidad.', en: 'I collaborate with strategy, paid media, and branding teams to translate commercial concepts into pages that convert better. A significant part of these projects is protected by confidentiality agreements.' },
      { selector: '.timeline-item:nth-child(3) h3', es: 'Base de Experiencia y Especializacion', en: 'Experience Base and Specialization' }
      ,{ selector: '.timeline-item:nth-child(3) .page-copy', es: 'En estos años he perfeccionado un enfoque que mezcla diseño premium, rendimiento tecnico y claridad de negocio, para entregar webs hermosas, completas y funcionales.', en: 'Over these years, I have refined an approach that combines premium design, technical performance, and business clarity to deliver beautiful, complete, and functional websites.' }
    ],
    'stack.html': [
      { selector: 'title', es: 'Stack | Marcos Hernandez', en: 'Stack | Marcos Hernandez' },
      { selector: 'meta[name="description"]', attr: 'content', es: 'Stack tecnologico de Marcos Hernandez para desarrollo web completo, rendimiento y conversion.', en: 'Marcos Hernandez tech stack for full website development, performance, and conversion.' },
      { selector: 'meta[property="og:title"]', attr: 'content', es: 'Stack | Marcos Hernandez', en: 'Stack | Marcos Hernandez' },
      { selector: 'meta[property="og:description"]', attr: 'content', es: 'Stack tecnologico de Marcos Hernandez para desarrollo web completo, rendimiento y conversion.', en: 'Marcos Hernandez tech stack for full website development, performance, and conversion.' },
      { selector: 'meta[name="twitter:title"]', attr: 'content', es: 'Stack | Marcos Hernandez', en: 'Stack | Marcos Hernandez' },
      { selector: 'meta[name="twitter:description"]', attr: 'content', es: 'Stack tecnologico de Marcos Hernandez para desarrollo web completo, rendimiento y conversion.', en: 'Marcos Hernandez tech stack for full website development, performance, and conversion.' },
      { selector: '.page-title', es: 'Stack', en: 'Stack' },
      { selector: '.page-block[aria-label="Resumen de stack tecnologico"]', attr: 'aria-label', es: 'Resumen de stack tecnologico', en: 'Tech stack summary' },
      { selector: '.stack-intro-text', es: 'Trabajo con un stack intencionalmente ligero y potente para crear webs completas que cargan rápido, se ven profesionales y son fáciles de mantener.', en: 'Through an intentionally lightweight yet powerful tech stack, I build complete websites that load fast, look professional, and are easy to maintain.' },
      { selector: '.initial-inline[role="img"]', attr: 'aria-label', es: 'Inicial ilustrada letra T', en: 'Illustrated initial letter T' },
      { selector: '.initial-image', attr: 'alt', es: 'Letra T ilustrada', en: 'Illustrated letter T' },
      { selector: '.page-block[aria-label="Tecnologias principales"]', attr: 'aria-label', es: 'Tecnologias principales', en: 'Core technologies' },
      { selector: '.page-block[aria-label="Tecnologias principales"] .page-subtitle', es: 'Mi stack base', en: 'My core stack' },
      { selector: '.page-block[aria-label="Tecnologias principales"] .tag-list li:nth-child(1)', es: 'HTML5 semántico para estructura clara y SEO sólido.', en: 'Semantic HTML5 for clear structure and strong SEO.' },
      { selector: '.page-block[aria-label="Tecnologias principales"] .tag-list li:nth-child(2)', es: 'CSS3 moderno para diseño premium, responsive y consistente.', en: 'Modern CSS3 for premium, responsive, and consistent design.' },
      { selector: '.page-block[aria-label="Tecnologias principales"] .tag-list li:nth-child(3)', es: 'JavaScript vanilla para interacciones fluidas sin sobrecargar el sitio.', en: 'Vanilla JavaScript for smooth interactions without overloading the site.' },
      { selector: '.page-block[aria-label="Criterios tecnicos"]', attr: 'aria-label', es: 'Criterios tecnicos', en: 'Technical criteria' },
      { selector: '.page-block[aria-label="Criterios tecnicos"] .page-subtitle', es: 'Criterio tecnico en cada proyecto', en: 'Technical criteria in every project' },
      { selector: '.page-block[aria-label="Criterios tecnicos"] .tag-list li:nth-child(1)', es: 'Accesibilidad real para que cualquier usuario pueda navegar sin fricción.', en: 'Real accessibility so every user can navigate without friction.' },
      { selector: '.page-block[aria-label="Criterios tecnicos"] .tag-list li:nth-child(2)', es: 'Optimización de velocidad (Core Web Vitals) desde el inicio.', en: 'Speed optimization (Core Web Vitals) from the start.' },
      { selector: '.page-block[aria-label="Criterios tecnicos"] .tag-list li:nth-child(3)', es: 'Código limpio y ordenado para facilitar cambios y crecimiento futuro.', en: 'Clean, structured code to enable easier updates and future growth.' },
      { selector: '.page-block[aria-label="Resultado para el cliente"]', attr: 'aria-label', es: 'Resultado para el cliente', en: 'Outcome for the client' },
      { selector: '.page-block[aria-label="Resultado para el cliente"] .page-subtitle', es: 'Lo que recibes al final', en: 'What you get in the end' }
      ,{ selector: '.page-block[aria-label="Resultado para el cliente"] .tag-list li:nth-child(1)', es: 'Una web completa, funcional y lista para publicar.', en: 'A complete, functional website ready to launch.' }
      ,{ selector: '.page-block[aria-label="Resultado para el cliente"] .tag-list li:nth-child(2)', es: 'Diseño cuidado con enfoque comercial y de marca.', en: 'A refined design with a commercial and brand-focused approach.' }
      ,{ selector: '.page-block[aria-label="Resultado para el cliente"] .tag-list li:nth-child(3)', es: 'Base técnica sólida para escalar páginas, secciones o campañas.', en: 'A solid technical foundation to scale pages, sections, or campaigns.' }
    ],
    'blog.html': [
      { selector: 'title', es: 'Blog | Marcos Hernandez', en: 'Blog | Marcos Hernandez' },
      { selector: 'meta[name="description"]', attr: 'content', es: 'Blog profesional de Marcos Hernandez con notas tecnicas aplicables, criterio de negocio y estandares editoriales claros.', en: 'Professional blog by Marcos Hernandez with practical technical notes, business criteria, and clear editorial standards.' },
      { selector: 'meta[property="og:title"]', attr: 'content', es: 'Blog | Marcos Hernandez', en: 'Blog | Marcos Hernandez' },
      { selector: 'meta[property="og:description"]', attr: 'content', es: 'Blog profesional de Marcos Hernandez con notas tecnicas aplicables, criterio de negocio y estandares editoriales claros.', en: 'Professional blog by Marcos Hernandez with practical technical notes, business criteria, and clear editorial standards.' },
      { selector: 'meta[name="twitter:title"]', attr: 'content', es: 'Blog | Marcos Hernandez', en: 'Blog | Marcos Hernandez' },
      { selector: 'meta[name="twitter:description"]', attr: 'content', es: 'Blog profesional de Marcos Hernandez con notas tecnicas aplicables, criterio de negocio y estandares editoriales claros.', en: 'Professional blog by Marcos Hernandez with practical technical notes, business criteria, and clear editorial standards.' },
      { selector: '.page-title', es: 'Blog', en: 'Blog' },
      { selector: '.blog-intro-text', es: 'Este blog existe para compartir decisiones reales de desarrollo web: lo que funciona, lo que no y por que. Cada articulo esta pensado para ayudarte a tomar mejores decisiones de producto, diseno y ejecucion tecnica.', en: "Every article on this blog is designed to share real-world web development decisions: what works, what doesn't, and why. Each post is written to help you make better product, design, and technical implementation decisions." },
      { selector: '.page-stack .page-block:nth-child(2) .page-subtitle', es: 'Compromiso editorial', en: 'Editorial commitment' },
      { selector: '.page-stack .page-block:nth-child(2) .tag-list li:nth-child(1)', es: 'Solo publico contenido aplicado en proyectos reales, no teoria vacia.', en: 'I only publish content applied in real projects, not empty theory.' },
      { selector: '.page-stack .page-block:nth-child(2) .tag-list li:nth-child(2)', es: 'Cada nota incluye criterio, contexto y accion concreta para implementar.', en: 'Each post includes criteria, context, and concrete actions you can implement.' },
      { selector: '.page-stack .page-block:nth-child(2) .tag-list li:nth-child(3)', es: 'No publico tendencias por moda: priorizo utilidad y resultados medibles.', en: 'I do not publish trends for hype: I prioritize utility and measurable results.' },
      { selector: '.page-stack .page-block:nth-child(2) .tag-list li:nth-child(4)', es: 'Cuando un tema tiene limites o matices, los explico con transparencia.', en: 'When a topic has limits or nuances, I explain them transparently.' },
      { selector: '.page-stack .page-block:nth-child(3) .page-subtitle', es: 'Articulos', en: 'Articles' },
      { selector: '.page-stack .page-block:nth-child(3) .post-list li:nth-child(1)', es: 'De web bonita a web rentable: 9 ajustes de estructura que aumentan conversion.', en: 'From a pretty website to a profitable website: 9 structural adjustments that increase conversion.' },
      { selector: '.page-stack .page-block:nth-child(3) .post-list li:nth-child(2)', es: 'Brief, diseno y codigo: metodo en 5 pasos para lanzar sitios completos sin caos.', en: 'Brief, design, and code: a 5-step method to launch complete websites without chaos.' },
      { selector: '.page-stack .page-block:nth-child(3) .post-list li:nth-child(3)', es: 'Velocidad que vende: checklist practico para optimizar performance sin romper estilo.', en: 'Speed that sells: a practical checklist to optimize performance without breaking style.' },
      { selector: '.page-stack .page-block:nth-child(3) .post-list li:nth-child(4)', es: 'Arquitectura CSS profesional sin frameworks: orden, escalabilidad y mantenimiento.', en: 'Professional CSS architecture without frameworks: structure, scalability, and maintenance.' },
      { selector: '.page-stack .page-block:nth-child(3) .post-list li:nth-child(5)', es: 'Microinteracciones con criterio: cuando suman valor y cuando solo agregan ruido.', en: 'Purposeful microinteractions: when they add value and when they only add noise.' },
      { selector: '.page-stack .page-block:nth-child(4) .page-copy', es: 'Nota de transparencia: cuando los casos vienen de colaboraciones con agencias, anonimizo marcas y activos por NDA. Aun asi, mantengo el aprendizaje tecnico y estrategico para que el contenido siga siendo util y verificable.', en: 'Transparency note: when case studies come from agency collaborations, I anonymize brands and assets under NDA. Even so, I preserve the technical and strategic learning so the content remains useful and verifiable.' },
      { selector: '.initial-inline[role="img"]', attr: 'aria-label', es: 'Inicial ilustrada letra E', en: 'Illustrated initial letter E' },
      { selector: '.initial-image', attr: 'alt', es: 'Letra E ilustrada', en: 'Illustrated letter E' },
      { selector: '.page-stack .page-block:nth-child(1)', attr: 'aria-label', es: 'Resumen del blog', en: 'Blog overview' },
      { selector: '.page-stack .page-block:nth-child(2)', attr: 'aria-label', es: 'Politica editorial', en: 'Editorial policy' },
      { selector: '.page-stack .page-block:nth-child(3)', attr: 'aria-label', es: 'Articulos destacados', en: 'Featured articles' },
      { selector: '.page-stack .page-block:nth-child(4)', attr: 'aria-label', es: 'Transparencia de casos', en: 'Case transparency' }
    ],
    'contacto.html': [
      { selector: 'title', es: 'Contacto | Marcos Hernandez', en: 'Contact | Marcos Hernandez' },
      { selector: 'meta[name="description"]', attr: 'content', es: 'Contacto de Marcos Hernandez para proyectos web completos.', en: 'Contact Marcos Hernandez for complete web projects.' },
      { selector: 'meta[property="og:title"]', attr: 'content', es: 'Contacto | Marcos Hernandez', en: 'Contact | Marcos Hernandez' },
      { selector: 'meta[property="og:description"]', attr: 'content', es: 'Contacto de Marcos Hernandez para proyectos web completos.', en: 'Contact Marcos Hernandez for complete web projects.' },
      { selector: 'meta[name="twitter:title"]', attr: 'content', es: 'Contacto | Marcos Hernandez', en: 'Contact | Marcos Hernandez' },
      { selector: 'meta[name="twitter:description"]', attr: 'content', es: 'Contacto de Marcos Hernandez para proyectos web completos.', en: 'Contact Marcos Hernandez for complete web projects.' },
      { selector: '.page-title', es: 'Contacto', en: 'Contact' },
      { selector: '.contact-intro-text', es: 'Si quieres una web completa, elegante y lista para vender mejor, escribeme. Te respondo en menos de 24 horas habiles con una ruta clara para empezar.', en: "Start with a complete, elegant website designed to help you sell better. Reach out, and I'll reply within 24 business hours with a clear roadmap to get started." },
      { selector: '.page-stack .page-block:nth-child(2) .page-subtitle', es: 'Canales directos', en: 'Direct channels' },
      { selector: '.contact-list li:nth-child(1)', html: true, es: 'Email principal: <a class="inline-link" href="mailto:retr0zer0.zer0@gmail.com">retr0zer0.zer0@gmail.com</a>', en: 'Primary email: <a class="inline-link" href="mailto:retr0zer0.zer0@gmail.com">retr0zer0.zer0@gmail.com</a>' },
      { selector: '.contact-list li:nth-child(2)', html: true, es: 'GitHub: <a class="inline-link" href="https://github.com/retr0zer07" target="_blank" rel="noopener noreferrer">repositorios y base tecnica</a>', en: 'GitHub: <a class="inline-link" href="https://github.com/retr0zer07" target="_blank" rel="noopener noreferrer">repositories and technical foundation</a>' },
      { selector: '.page-stack .page-block:nth-child(3) .page-subtitle', es: 'Para cotizar mas rapido', en: 'For a faster quote' },
      { selector: '.page-stack .page-block:nth-child(3) .tag-list li:nth-child(1)', es: 'Objetivo principal de tu web (ventas, marca, captacion o reservas).', en: 'Main goal of your website (sales, brand positioning, lead generation, or bookings).' },
      { selector: '.page-stack .page-block:nth-child(3) .tag-list li:nth-child(2)', es: 'Fecha estimada de lanzamiento.', en: 'Estimated launch date.' },
      { selector: '.page-stack .page-block:nth-child(3) .tag-list li:nth-child(3)', es: 'Si ya tienes textos, branding o referencias visuales.', en: 'Whether you already have copy, branding, or visual references.' },
      { selector: '.page-stack .page-block:nth-child(3) .tag-list li:nth-child(4)', es: 'Presupuesto aproximado para definir el alcance correcto.', en: 'Approximate budget to define the right scope.' },
      { selector: '.page-stack .page-block:nth-child(4) .page-subtitle', es: 'Como seria el proceso', en: 'How the process works' },
      { selector: '.page-stack .page-block:nth-child(4) .tag-list li:nth-child(1)', es: '1) Primer mensaje y contexto del proyecto.', en: '1) First message and project context.' },
      { selector: '.page-stack .page-block:nth-child(4) .tag-list li:nth-child(2)', es: '2) Llamada corta para definir alcance y tiempos.', en: '2) Short call to define scope and timeline.' },
      { selector: '.page-stack .page-block:nth-child(4) .tag-list li:nth-child(3)', es: '3) Propuesta de trabajo clara con fases y entregables.', en: '3) Clear work proposal with phases and deliverables.' },
      { selector: '.initial-inline[role="img"]', attr: 'aria-label', es: 'Inicial ilustrada letra S', en: 'Illustrated initial letter S' },
      { selector: '.initial-image', attr: 'alt', es: 'Letra S ilustrada', en: 'Illustrated letter S' },
      { selector: '.page-stack .page-block:nth-child(1)', attr: 'aria-label', es: 'Informacion de contacto', en: 'Contact information' },
      { selector: '.page-stack .page-block:nth-child(2)', attr: 'aria-label', es: 'Canales de contacto', en: 'Contact channels' },
      { selector: '.page-stack .page-block:nth-child(3)', attr: 'aria-label', es: 'Informacion para cotizar', en: 'Information for quoting' },
      { selector: '.page-stack .page-block:nth-child(4)', attr: 'aria-label', es: 'Proceso de contacto', en: 'Contact process' }
    ]
  };

  function updateDynamicDates(lang) {
    const currentDateNodes = document.querySelectorAll('.current-date');
    if (currentDateNodes.length) {
      const locale = lang === 'en' ? 'en-US' : 'es-ES';
      const today = new Intl.DateTimeFormat(locale, {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
      }).format(new Date());

      currentDateNodes.forEach(function (node) {
        node.textContent = today;
      });
    }

    const currentYearNodes = document.querySelectorAll('.current-year');
    if (currentYearNodes.length) {
      const thisYear = String(new Date().getFullYear());
      currentYearNodes.forEach(function (node) {
        node.textContent = thisYear;
      });
    }
  }

  function applyLanguage(lang) {
    if (lang !== 'es' && lang !== 'en') return;

    document.documentElement.setAttribute('lang', lang);
    body.setAttribute('data-language', lang);

    if (languageButtons.length) {
      languageButtons.forEach(function (button) {
        button.setAttribute('aria-pressed', String(button.getAttribute('data-lang') === lang));
      });
    }

    const rules = [];
    const pageRules = i18n[pageName()] || [];
    i18n.common.forEach(function (rule) {
      rules.push(rule);
    });
    pageRules.forEach(function (rule) {
      rules.push(rule);
    });

    rules.forEach(function (rule) {
      const value = rule[lang] || rule.es;
      if (!value) return;

      document.querySelectorAll(rule.selector).forEach(function (node) {
        if (rule.attr) {
          node.setAttribute(rule.attr, value);
        } else if (rule.html) {
          node.innerHTML = value;
        } else {
          node.textContent = value;
        }
      });
    });

    updateDynamicDates(lang);

    try {
      window.localStorage.setItem('portfolio-language', lang);
    } catch (error) {
      // Ignore storage failures so the page remains usable.
    }
  }

  function applyTheme(theme) {
    if (!theme) return;
    body.setAttribute('data-theme', theme);
    if (themeButton) {
      themeButton.setAttribute('aria-pressed', String(theme === 'dark'));
    }
  }

  let storedTheme = null;
  try {
    storedTheme = window.localStorage.getItem('portfolio-theme');
  } catch (error) {
    storedTheme = null;
  }

  if (storedTheme === 'light' || storedTheme === 'dark') {
    applyTheme(storedTheme);
  } else {
    applyTheme('light');
  }

  if (themeButton) {
    themeButton.addEventListener('click', function () {
      const nextTheme = body.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      applyTheme(nextTheme);
      try {
        window.localStorage.setItem('portfolio-theme', nextTheme);
      } catch (error) {
        // Ignore storage failures so the page remains usable.
      }
    });
  }

  links.forEach(function (link) {
    link.addEventListener('mouseenter', function () {
      link.classList.add('is-active');
    });

    link.addEventListener('mouseleave', function () {
      link.classList.remove('is-active');
    });

    link.addEventListener('focus', function () {
      link.classList.add('is-active');
    });

    link.addEventListener('blur', function () {
      link.classList.remove('is-active');
    });
  });

  function clearNavigationState() {
    body.classList.remove('is-leaving', 'is-leaving-back', 'is-transitioning', 'is-transitioning-back', 'is-entering-back');
  }

  function revealVisibleItemsNow() {
    revealItems.forEach(function (item) {
      const rect = item.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        item.classList.add('in-view');
      }
    });
  }

  function isHistoryTraversal(event) {
    if (event && event.persisted) return true;

    const navEntries = performance.getEntriesByType('navigation');
    if (navEntries && navEntries.length > 0) {
      return navEntries[0].type === 'back_forward';
    }

    return false;
  }

  function runBackEntryAnimation(event) {
    if (reduceMotion) return;
    if (!isHistoryTraversal(event)) return;

    body.classList.add('is-entering-back');
    window.setTimeout(function () {
      body.classList.remove('is-entering-back');
    }, 380);
  }

  clearNavigationState();

  window.addEventListener('pageshow', function (event) {
    clearNavigationState();
    runBackEntryAnimation(event);
    revealVisibleItemsNow();
  });

  function canAnimateNavigation(link) {
    const href = link.getAttribute('href');
    if (!href || href.startsWith('#')) return false;
    if (link.hasAttribute('download')) return false;
    if (link.target && link.target !== '_self') return false;
    if (/^(mailto:|tel:|javascript:)/i.test(href)) return false;

    const url = new URL(href, window.location.href);
    if (url.origin !== window.location.origin) return false;
    if (url.pathname === window.location.pathname && url.hash) return false;
    return true;
  }

  document.addEventListener('click', function (event) {
    if (reduceMotion) return;

    const link = event.target.closest('a[href]');
    if (!link || !canAnimateNavigation(link)) return;

    event.preventDefault();
    if (body.classList.contains('is-leaving') || body.classList.contains('is-leaving-back')) return;

    const isBackNav = link.classList.contains('floating-back');
    body.classList.remove('is-leaving', 'is-leaving-back', 'is-transitioning', 'is-transitioning-back');
    body.classList.add(isBackNav ? 'is-leaving-back' : 'is-leaving');
    body.classList.add(isBackNav ? 'is-transitioning-back' : 'is-transitioning');

    window.setTimeout(function () {
      window.location.href = link.href;
    }, 300);
  });

  let storedLanguage = 'es';
  try {
    const langValue = window.localStorage.getItem('portfolio-language');
    if (langValue === 'es' || langValue === 'en') {
      storedLanguage = langValue;
    }
  } catch (error) {
    storedLanguage = 'es';
  }

  if (languageButtons.length) {
    languageButtons.forEach(function (button) {
      button.addEventListener('click', function () {
        const nextLang = button.getAttribute('data-lang');
        applyLanguage(nextLang);
      });
    });
  }

  applyLanguage(storedLanguage);

  const previewImages = document.querySelectorAll('.project-preview-image');
  previewImages.forEach(function (image) {
    image.addEventListener('error', function () {
      if (!image.dataset.fallbackTried && image.src.indexOf('/assets/img/previews/') !== -1) {
        image.dataset.fallbackTried = 'true';
        image.src = image.src.replace('/assets/img/previews/', '/assets/img/');
        return;
      }

      const wrapper = image.closest('.project-preview');
      if (!wrapper) return;
      wrapper.classList.add('is-empty');
    });
  });

  if (reduceMotion) {
    revealItems.forEach(function (item) {
      item.classList.add('in-view');
    });
    return;
  }

  revealVisibleItemsNow();

  const observer = new IntersectionObserver(
    function (entries, obs) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('in-view');
        obs.unobserve(entry.target);
      });
    },
    {
      threshold: 0.2,
      rootMargin: '0px 0px -8% 0px'
    }
  );

  revealItems.forEach(function (item) {
    observer.observe(item);
  });
})();
