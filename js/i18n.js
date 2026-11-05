(function () {
  "use strict";

  var languageKey = "site-language";
  var copy = {
    "Skip to content": ["Passer au contenu", "تجاوز إلى المحتوى"],
    "Main": ["Navigation principale", "التنقل الرئيسي"],
    "Home": ["Accueil", "الرئيسية"],
    "About": ["À propos", "نبذة عني"],
    "Projects": ["Projets", "المشاريع"],
    "Contact": ["Contact", "اتصل بي"],
    "Menu": ["Menu", "القائمة"],
    "Switch to light theme": ["Passer au thème clair", "التبديل إلى الوضع الفاتح"],
    "Switch to dark theme": ["Passer au thème sombre", "التبديل إلى الوضع الداكن"],
    "Full-Stack Web Developer & UI/UX Designer": ["Développeur Full-Stack et designer UI/UX", "مطوّر ويب متكامل ومصمّم UI/UX"],
    "Selected project previews": ["Aperçu des projets sélectionnés", "معاينة المشاريع المختارة"],
    "I design interfaces, then": ["Je conçois des interfaces, puis", "أصمّم الواجهات، ثم"],
    "build them to ship.": ["je les développe jusqu'à leur mise en ligne.", "أطوّرها حتى تصبح جاهزة للإطلاق."],
    "I bridge user-centric design with robust engineering using React, Next.js, Angular, TypeScript and Python (Django), with a focus on accessibility (WCAG 2.1) and design systems.": ["J'allie conception centrée sur l'utilisateur et développement fiable avec React, Next.js, Angular, TypeScript et Python (Django), en privilégiant l'accessibilité (WCAG 2.1) et les design systems.", "أجمع بين التصميم المتمحور حول المستخدم والتطوير المتين باستخدام React وNext.js وAngular وTypeScript وPython (Django)، مع التركيز على سهولة الوصول (WCAG 2.1) وأنظمة التصميم."],
    "See selected work": ["Voir mes projets", "استكشف أعمالي"],
    "Get in touch": ["Me contacter", "تواصل معي"],
    "Based in Nabeul, Tunisia · Arabic, English, French": ["Basé à Nabeul, en Tunisie · Arabe, anglais, français", "أقيم في نابل، تونس · العربية والإنجليزية والفرنسية"],
    "Highlights": ["En bref", "أبرز النتائج"],
    "Profile": ["Profil", "الملف الشخصي"],
    "faster page load": ["de chargement plus rapide", "تحميل أسرع للصفحات"],
    "Capgemini · Graduation project": ["Capgemini · Projet de fin d'études", "Capgemini · مشروع التخرّج"],
    "fewer booking drop-offs": ["d'abandons en moins lors de la réservation", "حالات أقل للتخلّي عن الحجز"],
    "Smile Expert · Healthcare platform": ["Smile Expert · Plateforme de santé", "Smile Expert · منصّة صحية"],
    "faster developer handoff": ["de transfert plus rapide aux développeurs", "تسليم أسرع للمطوّرين"],
    "HobCom Agency · Figma prototypes": ["HobCom Agency · Prototypes Figma", "HobCom Agency · نماذج Figma"],
    "Selected work": ["Projets sélectionnés", "أعمال مختارة"],
    "HobCom Agency Web Application": ["Application web de HobCom Agency", "تطبيق الويب لوكالة HobCom"],
    "Next.js · UI/UX": ["Next.js · UI/UX", "Next.js · UI/UX"],
    "A Next.js (TypeScript) web application with a PHP backend mail service, containerized and deployed with Docker Compose.": ["Application web Next.js (TypeScript) avec un service d'e-mail PHP côté serveur, conteneurisée et déployée avec Docker Compose.", "تطبيق ويب باستخدام Next.js وTypeScript مع خدمة بريد خلفية بـPHP، جرى تشغيلها ونشرها باستخدام Docker Compose."],
    "View live project →": ["Voir le projet en ligne →", "شاهد المشروع مباشرة ←"],
    "Smile Expert Healthcare Platform": ["Plateforme de santé Smile Expert", "منصّة الرعاية الصحية Smile Expert"],
    "Healthcare · UI/UX": ["Santé · UI/UX", "الرعاية الصحية · UI/UX"],
    "Angular · Django": ["Angular · Django", "Angular · Django"],
    "Portrait of Hedi Temani": ["Portrait de Hedi Temani", "صورة الهادي الطمني"],
    "Multi-language appointment booking flows and accessible interface components, designed in Figma.": ["Parcours de réservation multilingues et composants d'interface accessibles, conçus sur Figma.", "صمّمت على Figma مسارات حجز متعددة اللغات ومكوّنات واجهة سهلة الوصول."],
    "All projects": ["Tous les projets", "كل المشاريع"],
    "Design and engineering, under one roof.": ["Le design et le développement, réunis.", "التصميم والتطوير، معًا في مكان واحد."],
    "I am a Full-Stack Web Developer and UI/UX Designer based in Nabeul, Tunisia. I hold a BTS in Web Development from IMSET Nabeul, and I work across the whole product: from Figma prototypes to Dockerized deployments.": ["Je suis développeur web Full-Stack et designer UI/UX à Nabeul, en Tunisie. Titulaire d'un BTS en développement web de l'IMSET Nabeul, j'interviens sur tout le produit, des prototypes Figma aux déploiements Docker.", "أنا مطوّر ويب متكامل ومصمّم UI/UX من نابل، تونس. متحصّل على شهادة BTS في تطوير الويب من IMSET نابل، وأعمل على المنتج من نماذج Figma حتى النشر باستخدام Docker."],
    "More about me": ["En savoir plus", "المزيد عني"],
    "Have a project in mind?": ["Un projet en tête ?", "هل لديك مشروع؟"],
    "Let's talk.": ["Parlons-en.", "لنتحدث."],
    "Send a message": ["Envoyer un message", "أرسل رسالة"],
    "Project showcase": ["Présentation des projets", "معرض المشاريع"],
    "Web applications, booking flows and component libraries, from first wireframe to deployment.": ["Applications web, parcours de réservation et bibliothèques de composants, de la première maquette au déploiement.", "تطبيقات ويب ومسارات حجز ومكتبات مكوّنات، من أول مخطط إلى النشر."],
    "Role": ["Rôle", "الدور"],
    "Full-Stack & UI/UX Developer": ["Développeur Full-Stack et UI/UX", "مطوّر Full-Stack وUI/UX"],
    "Client": ["Client", "العميل"],
    "Stack": ["Technologies", "التقنيات"],
    "A company website built with Next.js and TypeScript, connected to a PHP mail service and deployed as a Docker Compose stack.": ["Site d'entreprise développé avec Next.js et TypeScript, relié à un service d'e-mail PHP et déployé avec Docker Compose.", "موقع شركة مطوّر باستخدام Next.js وTypeScript، متصل بخدمة بريد PHP ومنشور باستخدام Docker Compose."],
    "Contribution": ["Contribution", "مساهمتي"],
    "Designed the interface and built the Next.js frontend, integrated the PHP mail service, and containerized the application for deployment.": ["Conception de l'interface, développement du frontend Next.js, intégration du service d'e-mail PHP et conteneurisation de l'application pour son déploiement.", "صمّمت الواجهة وطوّرت frontend بـNext.js، وربطت خدمة البريد PHP وجهّزت التطبيق للنشر باستخدام الحاويات."],
    "faster developer handoff through Figma prototypes": ["de transfert plus rapide aux développeurs grâce aux prototypes Figma", "تسليم أسرع للمطوّرين بفضل نماذج Figma"],
    "Explore the code": ["Explorer le code", "استكشف الشيفرة"],
    "Browse the Next.js frontend repository.": ["Consultez le dépôt du frontend Next.js.", "تصفّح مستودع الواجهة الأمامية بـNext.js."],
    "Frontend repository": ["Dépôt frontend", "مستودع الواجهة الأمامية"],
    "A healthcare booking experience focused on helping patients move through appointment scheduling across multiple languages.": ["Expérience de réservation médicale qui accompagne les patients dans la prise de rendez-vous en plusieurs langues.", "تجربة حجز صحي تساعد المرضى على إتمام حجز المواعيد بلغات متعددة."],
    "Lead UI/UX Designer": ["Designer UI/UX principal", "مصمّم UI/UX رئيسي"],
    "Tools": ["Outils", "الأدوات"],
    "Focus": ["Priorités", "التركيز"],
    "Booking flows, accessibility, multi-language UI": ["Parcours de réservation, accessibilité, interface multilingue", "مسارات الحجز، سهولة الوصول، واجهة متعددة اللغات"],
    "Designed the multilingual appointment-booking flows and accessible interface components in Figma. The linked repository contains the frontend only.": ["Conception sur Figma des parcours de réservation multilingues et des composants accessibles. Le dépôt lié contient uniquement le frontend.", "صمّمت على Figma مسارات حجز متعددة اللغات ومكوّنات سهلة الوصول. المستودع المرتبط يحتوي على الواجهة الأمامية فقط."],
    "fewer booking drop-offs": ["d'abandons en moins lors de la réservation", "حالات أقل للتخلّي عن الحجز"],
    "Explore the frontend repository. It contains the client-side application only.": ["Consultez le dépôt frontend, qui contient uniquement l'application côté client.", "تصفّح مستودع الواجهة الأمامية، فهو يحتوي على تطبيق جهة العميل فقط."],
    "Full-Stack Application, Graduation Project": ["Application Full-Stack — Projet de fin d'études", "تطبيق Full-Stack — مشروع التخرّج"],
    "A full-stack graduation project developed at Capgemini, combining an Angular frontend with a Django REST Framework backend.": ["Projet de fin d'études Full-Stack réalisé chez Capgemini, associant un frontend Angular à un backend Django REST Framework.", "مشروع تخرّج متكامل أُنجز في Capgemini، يجمع بين واجهة أمامية بـAngular وواجهة خلفية بـDjango REST Framework."],
    "Full Stack Web Developer": ["Développeur web Full-Stack", "مطوّر ويب متكامل"],
    "Hedi Temani": ["Hedi Temani", "الهادي الطمني"],
    "Hedi Temani · Nabeul, Tunisia": ["Hedi Temani · Nabeul, Tunisie", "الهادي الطمني · نابل، تونس"],
    "2025 – 2026 · Lead UI/UX Designer": ["2025 – 2026 · Designer UI/UX principal", "2025 – 2026 · مصمّم UI/UX رئيسي"],
    "03/2026 – 04/2026 · Full-Stack & UI/UX": ["03/2026 – 04/2026 · Full-Stack et UI/UX", "03/2026 – 04/2026 · Full-Stack وUI/UX"],
    "UX design": ["Design UX", "تصميم تجربة المستخدم"],
    "Accessibility": ["Accessibilité", "سهولة الوصول"],
    "Multi-language": ["Multilingue", "متعدد اللغات"],
    "Browse the frontend repository. It contains the client-side application only.": ["Consultez le dépôt frontend, qui contient uniquement l'application côté client.", "تصفّح مستودع الواجهة الأمامية، فهو يحتوي على تطبيق جهة العميل فقط."],
    "Capgemini, El Ghazela, Tunis": ["Capgemini, El Ghazela, Tunis", "Capgemini، الغزالة، تونس"],
    "10/2025 – Present": ["10/2025 – Aujourd'hui", "10/2025 – حتى الآن"],
    "01/2025 – Present": ["01/2025 – Aujourd'hui", "01/2025 – حتى الآن"],
    "Company": ["Entreprise", "الشركة"],
    "Built and deployed the full-stack application, developed REST API functionality, and designed a responsive Figma component library to WCAG 2.1 guidelines.": ["Développement et déploiement de l'application Full-Stack, réalisation de l'API REST et conception sur Figma d'une bibliothèque de composants responsive conforme aux recommandations WCAG 2.1.", "طوّرت التطبيق المتكامل ونشرته، وأنجزت وظائف REST API وصمّمت على Figma مكتبة مكوّنات متجاوبة وفق إرشادات WCAG 2.1."],
    "lower client-server data transfer latency": ["de latence en moins lors des échanges client-serveur", "انخفاض في زمن نقل البيانات بين العميل والخادم"],
    "Reported project results": ["Résultats du projet", "نتائج المشروع"],
    "The project is split into two repositories: browse the Angular frontend and Django REST API.": ["Le projet est réparti sur deux dépôts : le frontend Angular et l'API Django REST.", "المشروع موزّع على مستودعين: واجهة Angular وواجهة Django REST API."],
    "Backend repository": ["Dépôt backend", "مستودع الواجهة الخلفية"],
    "About me": ["À propos", "نبذة عني"],
    "A developer who designs, and": ["Un développeur qui conçoit, et", "مطوّر يصمّم، و"],
    "a designer who ships.": ["un designer qui concrétise.", "مصمّم ينجز ويطلق."],
    "Performance-driven Full-Stack Web Developer and UI/UX Designer with expertise in building scalable, accessible, and high-converting web applications.": ["Développeur web Full-Stack et designer UI/UX axé sur la performance, spécialisé dans les applications web évolutives, accessibles et efficaces.", "مطوّر ويب متكامل ومصمّم UI/UX يركّز على الأداء، ومتخصّص في تطبيقات ويب قابلة للتوسّع وسهلة الوصول وفعّالة."],
    "Download full CV (English PDF)": ["Télécharger le CV complet (PDF en anglais)", "تحميل السيرة الذاتية الكاملة (PDF بالإنجليزية)"],
    "Development": ["Développement", "التطوير"],
    "React, Next.js, Angular and TypeScript on the front end. Python (Django), PHP and RESTful APIs on the back end.": ["React, Next.js, Angular et TypeScript côté frontend. Python (Django), PHP et API REST côté backend.", "React وNext.js وAngular وTypeScript للواجهة الأمامية. Python (Django) وPHP وRESTful APIs للواجهة الخلفية."],
    "Design": ["Design", "التصميم"],
    "Wireframes, high-fidelity prototypes and design systems in Figma, built to WCAG 2.1 accessibility guidelines.": ["Wireframes, prototypes haute fidélité et design systems sur Figma, selon les recommandations d'accessibilité WCAG 2.1.", "مخططات أولية ونماذج عالية الدقة وأنظمة تصميم على Figma وفق إرشادات سهولة الوصول WCAG 2.1."],
    "Delivery": ["Livraison", "التسليم"],
    "Git, Docker, CI/CD and Agile / Scrum, with attention to web performance and SEO.": ["Git, Docker, CI/CD et Agile / Scrum, avec une attention particulière aux performances web et au SEO.", "Git وDocker وCI/CD وAgile / Scrum، مع الاهتمام بأداء الويب وتحسين الظهور في محركات البحث."],
    "Skills": ["Compétences", "المهارات"],
    "Design and code, one toolbox": ["Design et développement, une seule boîte à outils", "التصميم والبرمجة، ضمن مجموعة مهارات واحدة"],
    "Front-end": ["Frontend", "الواجهة الأمامية"],
    "Responsive Web Design": ["Design web responsive", "تصميم ويب متجاوب"],
    "Back-end & databases": ["Backend et bases de données", "الواجهة الخلفية وقواعد البيانات"],
    "Database design & administration": ["Conception et administration de bases de données", "تصميم قواعد البيانات وإدارتها"],
    "Server-side rendering (SSR)": ["Rendu côté serveur (SSR)", "العرض من جهة الخادم (SSR)"],
    "UI/UX & design systems": ["UI/UX et design systems", "UI/UX وأنظمة التصميم"],
    "Wireframing": ["Wireframing", "التخطيط الأولي للواجهات"],
    "High-fidelity prototyping": ["Prototypage haute fidélité", "إنشاء نماذج أولية عالية الدقة"],
    "Design systems": ["Design systems", "أنظمة التصميم"],
    "WCAG 2.1 accessibility": ["Accessibilité WCAG 2.1", "سهولة الوصول وفق WCAG 2.1"],
    "DevOps, tools & CMS": ["DevOps, outils et CMS", "DevOps والأدوات وCMS"],
    "Web performance optimization": ["Optimisation des performances web", "تحسين أداء الويب"],
    "Experience": ["Expérience", "الخبرة"],
    "Where I have worked": ["Mon parcours professionnel", "مسيرتي المهنية"],
    "Full Stack Web Developer, Graduation Project (PFE)": ["Développeur web Full-Stack — Projet de fin d'études", "مطوّر ويب متكامل — مشروع التخرّج"],
    "Built and deployed a full-stack application with Angular (TypeScript) and Django REST Framework. Designed a responsive component library in Figma following WCAG 2.1, and worked in an Agile/Scrum team using Git/GitHub and CI/CD. See the project details and source repositories on the": ["Développement et déploiement d'une application Full-Stack avec Angular (TypeScript) et Django REST Framework. Conception d'une bibliothèque de composants responsive sur Figma selon WCAG 2.1 et collaboration en équipe Agile/Scrum avec Git/GitHub et CI/CD. Consultez les détails et les dépôts du projet sur la page", "طوّرت ونشرت تطبيقًا متكاملًا باستخدام Angular (TypeScript) وDjango REST Framework. صمّمت مكتبة مكوّنات متجاوبة على Figma وفق WCAG 2.1 وعملت ضمن فريق Agile/Scrum باستخدام Git/GitHub وCI/CD. تجد تفاصيل المشروع ومستودعاته في صفحة"],
    "Projects page": ["Projets", "المشاريع"],
    "UI/UX Designer & Web Developer": ["Designer UI/UX et développeur web", "مصمّم UI/UX ومطوّر ويب"],
    "Defined graphic charters, visual identities and brand design systems for client web platforms. Built 15+ high-fidelity responsive mockups and interactive prototypes in Figma, and developed front-end components in HTML5, CSS3 and JavaScript. See the": ["Définition de chartes graphiques, d'identités visuelles et de systèmes de marque pour des plateformes web. Création de plus de 15 maquettes responsive haute fidélité et prototypes interactifs sur Figma, et développement de composants frontend en HTML5, CSS3 et JavaScript. Découvrez le projet", "أنجزت أدلة الهوية البصرية وأنظمة العلامات التجارية لمنصات الويب. أعددت أكثر من 15 نموذجًا متجاوبًا عالي الدقة ونماذج تفاعلية على Figma، وطوّرت مكوّنات الواجهة باستخدام HTML5 وCSS3 وJavaScript. استكشف مشروع"],
    "HobCom project": ["HobCom", "HobCom"],
    "Freelance UI/UX Designer & Front-End Developer": ["Designer UI/UX et développeur frontend freelance", "مصمّم UI/UX ومطوّر واجهات أمامية مستقل"],
    "Self-employed · Remote / Nabeul": ["Indépendant · À distance / Nabeul", "عمل مستقل · عن بُعد / نابل"],
    "Delivered end-to-end web applications and interfaces for international and local clients with React, Next.js and Tailwind CSS. Audited and refactored client platforms for WCAG accessibility and SEO best practices.": ["Réalisation d'applications et d'interfaces web complètes pour des clients locaux et internationaux avec React, Next.js et Tailwind CSS. Audit et refonte de plateformes selon les bonnes pratiques WCAG et SEO.", "أنجزت تطبيقات وواجهات ويب متكاملة لعملاء محليين ودوليين باستخدام React وNext.js وTailwind CSS. راجعت وطوّرت منصات العملاء وفق أفضل ممارسات WCAG وSEO."],
    "Network Technician Intern": ["Stagiaire technicien réseau", "متدرّب فني شبكات"],
    "Assisted senior network engineers with local network maintenance, router configuration and system troubleshooting.": ["Assistance aux ingénieurs réseau pour la maintenance du réseau local, la configuration des routeurs et le dépannage des systèmes.", "ساعدت مهندسي الشبكات في صيانة الشبكة المحلية وإعداد الموجّهات واستكشاف أعطال الأنظمة."],
    "Education & languages": ["Formation et langues", "التعليم واللغات"],
    "Education": ["Formation", "التعليم"],
    "BTS in Web Development": ["BTS en développement web", "شهادة BTS في تطوير الويب"],
    "Software architecture, full-stack web development (React, Next.js, Django, MySQL) and design systems. Defended the PFE with High Honors.": ["Architecture logicielle, développement web Full-Stack (React, Next.js, Django, MySQL) et design systems. Projet de fin d'études soutenu avec mention très bien.", "هندسة البرمجيات وتطوير الويب المتكامل (React وNext.js وDjango وMySQL) وأنظمة التصميم. نوقش مشروع التخرّج بتقدير امتياز."],
    "BTP in Management Information Systems": ["BTP en systèmes d'information de gestion", "شهادة BTP في نظم المعلومات الإدارية"],
    "Languages": ["Langues", "اللغات"],
    "Arabic, English, French": ["Arabe, anglais, français", "العربية والإنجليزية والفرنسية"],
    "Arabic (native), English (fluent, C1), French (professional).": ["Arabe (langue maternelle), anglais (courant, C1), français (professionnel).", "العربية (اللغة الأم)، الإنجليزية (بطلاقة، C1)، الفرنسية (مستوى مهني)."],
    "Let's build something together.": ["Construisons quelque chose ensemble.", "لنبنِ شيئًا مميزًا معًا."],
    "See my projects": ["Voir mes projets", "شاهد مشاريعي"],
    "Email": ["E-mail", "البريد الإلكتروني"],
    "Project showcase": ["Présentation des projets", "معرض المشاريع"],
    "Web applications, booking flows and component libraries, from first wireframe to deployment.": ["Applications web, parcours de réservation et bibliothèques de composants, de la première maquette au déploiement.", "تطبيقات ويب ومسارات حجز ومكتبات مكوّنات، من أول مخطط إلى النشر."],
    "Contact": ["Contact", "اتصل بي"],
    "Send a message and I will get back to you as soon as I can.": ["Envoyez-moi un message et je vous répondrai dès que possible.", "أرسل لي رسالة وسأجيبك في أقرب وقت ممكن."],
    "Contact form and details": ["Formulaire et coordonnées", "نموذج الاتصال ومعلومات التواصل"],
    "Name": ["Nom", "الاسم"],
    "Subject": ["Objet", "الموضوع"],
    "Message": ["Message", "الرسالة"],
    "Leave this field empty": ["Laissez ce champ vide", "اترك هذا الحقل فارغًا"],
    "Send message": ["Envoyer le message", "إرسال الرسالة"],
    "Get in touch": ["Me contacter", "تواصل معي"],
    "Let’s connect": ["Restons en contact", "لنبقَ على تواصل"],
    "Have a question or an idea? Choose the way that works best for you.": ["Une question ou une idée ? Choisissez le moyen qui vous convient.", "لديك سؤال أو فكرة؟ اختر وسيلة التواصل المناسبة لك."],
    "Phone": ["Téléphone", "الهاتف"],
    "Find me online": ["Retrouvez-moi en ligne", "تابعني عبر الإنترنت"],
    "Social profiles": ["Réseaux sociaux", "حساباتي الاجتماعية"],
    "Contact details": ["Coordonnées", "معلومات التواصل"],
    "Direct contact": ["Contact direct", "تواصل مباشر"],
    "HobCom project source code": ["Code source du projet HobCom", "الشيفرة المصدرية لمشروع HobCom"],
    "Smile Expert project source code": ["Code source du projet Smile Expert", "الشيفرة المصدرية لمشروع Smile Expert"],
    "Capgemini project source code": ["Code source du projet Capgemini", "الشيفرة المصدرية لمشروع Capgemini"],
    "Location": ["Lieu", "الموقع"],
    "Nabeul, Tunisia": ["Nabeul, Tunisie", "نابل، تونس"],
    "Arabic, English, French": ["Arabe, anglais, français", "العربية والإنجليزية والفرنسية"],
    "Have a project in mind?": ["Un projet en tête ?", "هل لديك مشروع؟"],
    "Let's talk.": ["Parlons-en.", "لنتحدث."],
    "Send a message": ["Envoyer un message", "أرسل رسالة"],
    "About me": ["À propos", "نبذة عني"],
    "Selected work": ["Projets sélectionnés", "أعمال مختارة"],
    "Full-Stack & UI/UX": ["Full-Stack et UI/UX", "Full-Stack وUI/UX"],
    "Lead UI/UX Designer": ["Designer UI/UX principal", "مصمّم UI/UX رئيسي"],
    "Role": ["Rôle", "الدور"],
    "Full-Stack & UI/UX Developer": ["Développeur Full-Stack et UI/UX", "مطوّر Full-Stack وUI/UX"],
    "Client": ["Client", "العميل"],
    "Stack": ["Technologies", "التقنيات"],
    "Explore the code": ["Explorer le code", "استكشف الشيفرة"],
    "Frontend repository": ["Dépôt frontend", "مستودع الواجهة الأمامية"],
    "Backend repository": ["Dépôt backend", "مستودع الواجهة الخلفية"],
    "Contribution": ["Contribution", "مساهمتي"],
    "Tools": ["Outils", "الأدوات"],
    "Focus": ["Priorités", "التركيز"],
    "Company": ["Entreprise", "الشركة"],
    "Full Stack Web Developer": ["Développeur web Full-Stack", "مطوّر ويب متكامل"],
    "HobCom Agency web application home page": ["Page d'accueil de l'application web HobCom Agency", "الصفحة الرئيسية لتطبيق ويب وكالة HobCom"],
    "Smile Expert appointment booking flow": ["Parcours de réservation de Smile Expert", "مسار حجز المواعيد في Smile Expert"],
    "Capgemini graduation project screenshot": ["Capture d'écran du projet de fin d'études Capgemini", "لقطة شاشة لمشروع التخرّج في Capgemini"],
    "Please enter your name.": ["Veuillez saisir votre nom.", "يرجى إدخال اسمك."],
    "Please enter a valid email address.": ["Veuillez saisir une adresse e-mail valide.", "يرجى إدخال عنوان بريد إلكتروني صالح."],
    "Please enter a subject.": ["Veuillez saisir un objet.", "يرجى إدخال الموضوع."],
    "Please write a message of at least 10 characters.": ["Veuillez rédiger un message d'au moins 10 caractères.", "يرجى كتابة رسالة لا تقل عن 10 أحرف."],
    "Please fix the highlighted fields.": ["Veuillez corriger les champs signalés.", "يرجى تصحيح الحقول المحددة."],
    "Sending...": ["Envoi en cours...", "جارٍ الإرسال..."]
  };

  var pageCopy = {
    "Hedi Temani | Full-Stack Web Developer & UI/UX Designer": [
      "Hedi Temani | Développeur web Full-Stack et designer UI/UX",
      "الهادي الطمني | مطوّر ويب متكامل ومصمّم UI/UX"
    ],
    "About | Hedi Temani": ["À propos | Hedi Temani", "نبذة عن الهادي الطمني"],
    "Projects | Hedi Temani": ["Projets | Hedi Temani", "المشاريع | الهادي الطمني"],
    "Contact | Hedi Temani": ["Contact | Hedi Temani", "اتصل بي | الهادي الطمني"]
  };

  var descriptionCopy = {
    "Portfolio of Hedi Temani, a Full-Stack Web Developer and UI/UX Designer based in Nabeul, Tunisia.": [
      "Portfolio de Hedi Temani, développeur web Full-Stack et designer UI/UX à Nabeul, en Tunisie.",
      "معرض أعمال الهادي الطمني، مطوّر ويب متكامل ومصمّم UI/UX من نابل، تونس."
    ],
    "About Hedi Temani: skills, experience and education of a Full-Stack Web Developer and UI/UX Designer.": [
      "À propos de Hedi Temani : compétences, expérience et formation en développement web Full-Stack et design UI/UX.",
      "نبذة عن الهادي الطمني: مهارات وخبرة وتعليم مطوّر ويب متكامل ومصمّم UI/UX."
    ],
    "Selected projects by Hedi Temani: web applications, booking flows and design systems.": [
      "Projets sélectionnés de Hedi Temani : applications web, parcours de réservation et design systems.",
      "مشاريع مختارة للهادي الطمني: تطبيقات ويب ومسارات حجز وأنظمة تصميم."
    ],
    "Get in touch with Hedi Temani for web development and UI/UX design projects.": [
      "Contactez Hedi Temani pour vos projets de développement web et de design UI/UX.",
      "تواصل مع الهادي الطمني لمشاريع تطوير الويب وتصميم UI/UX."
    ]
  };

  var uiCopy = {
    en: {
      title: "Choose your language",
      description: "Select your preferred language. You can change it anytime from the footer.",
      button: "Language: EN",
      close: "Close language selection",
      closeText: "Close"
    },
    fr: {
      title: "Choisissez votre langue",
      description: "Choisissez votre langue préférée. Vous pourrez la modifier à tout moment depuis le pied de page.",
      button: "Langue : FR",
      close: "Fermer le choix de langue",
      closeText: "Fermer"
    },
    ar: {
      title: "اختر لغتك",
      description: "اختر اللغة التي تفضّلها. يمكنك تغييرها في أي وقت من أسفل الصفحة.",
      button: "اللغة: AR",
      close: "إغلاق اختيار اللغة",
      closeText: "إغلاق"
    }
  };

  var supportedLanguages = ["en", "fr", "ar"];
  var languageNames = { en: "English", fr: "Français", ar: "العربية" };
  var originalText = new WeakMap();
  var originalAttributes = new WeakMap();
  var currentLanguage = "en";
  var modal;
  var languageButton;
  var returnFocus = null;
  var hasSavedLanguage = false;
  var originalPageTitle = null;
  var originalDescription = null;

  function translation(value, language) {
    if (language === "en") {
      return value;
    }
    var entry = copy[value];
    return entry ? entry[language === "fr" ? 0 : 1] : value;
  }

  function applyLanguage(language) {
    currentLanguage = language;
    document.documentElement.lang = language;
    document.documentElement.dir = language === "ar" ? "rtl" : "ltr";

    var walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
    var nodes = [];
    while (walker.nextNode()) {
      nodes.push(walker.currentNode);
    }
    nodes.forEach(function (node) {
      if (!originalText.has(node)) {
        originalText.set(node, node.nodeValue);
      }
      var source = originalText.get(node);
      var trimmed = source.trim();
      var translated = translation(trimmed, language);
      if (translated !== trimmed) {
        var leading = source.slice(0, source.indexOf(trimmed));
        var trailing = source.slice(source.indexOf(trimmed) + trimmed.length);
        node.nodeValue = leading + translated + trailing;
      } else {
        node.nodeValue = source;
      }
    });

    document.querySelectorAll("[aria-label], img[alt]").forEach(function (element) {
      ["aria-label", "alt"].forEach(function (attribute) {
        if (!element.hasAttribute(attribute)) {
          return;
        }
        var key = attribute;
        var stored = originalAttributes.get(element) || {};
        if (!Object.prototype.hasOwnProperty.call(stored, key)) {
          stored[key] = element.getAttribute(attribute);
          originalAttributes.set(element, stored);
        }
        element.setAttribute(attribute, translation(stored[key], language));
      });
    });

    var title = document.querySelector("title");
    if (title) {
      if (originalPageTitle === null) {
        originalPageTitle = title.textContent;
      }
      if (pageCopy[originalPageTitle]) {
        document.title = language === "en"
          ? originalPageTitle
          : pageCopy[originalPageTitle][language === "fr" ? 0 : 1];
      }
    }

    var description = document.querySelector('meta[name="description"]');
    if (description) {
      if (originalDescription === null) {
        originalDescription = description.content;
      }
      if (descriptionCopy[originalDescription]) {
        description.content = language === "en"
          ? originalDescription
          : descriptionCopy[originalDescription][language === "fr" ? 0 : 1];
      }
    }

    document.querySelectorAll('input[name="_subject"]').forEach(function (input) {
      input.value = language === "fr" ? "Nouveau message depuis votre portfolio"
        : language === "ar" ? "رسالة جديدة من معرض أعمالك"
          : "New message from your portfolio";
    });

    if (languageButton) {
      languageButton.textContent = uiCopy[language].button;
      languageButton.setAttribute("aria-label", uiCopy[language].button);
    }
    if (modal) {
      modal.querySelector(".language-dialog-title").textContent = uiCopy[language].title;
      modal.querySelector(".language-dialog-description").textContent = uiCopy[language].description;
      var closeButton = modal.querySelector(".language-dialog-close");
      closeButton.textContent = uiCopy[language].closeText;
      closeButton.setAttribute("aria-label", uiCopy[language].close);
      modal.querySelectorAll("[data-language]").forEach(function (button) {
        button.setAttribute("aria-pressed", String(button.getAttribute("data-language") === language));
      });
    }

    window.dispatchEvent(new CustomEvent("languagechange", { detail: { language: language } }));
  }

  function closeModal() {
    if (modal && !modal.hidden) {
      var mandatory = modal.getAttribute("data-mandatory") === "true";
      modal.hidden = true;
      document.body.classList.remove("language-open");
      if (returnFocus && document.contains(returnFocus)) {
        returnFocus.focus();
      } else if (mandatory) {
        var heading = document.querySelector("#main h1");
        if (heading) {
          heading.setAttribute("tabindex", "-1");
          heading.focus();
        }
      }
    }
  }

  function openModal(mandatory) {
    returnFocus = mandatory ? null : document.activeElement;
    modal.hidden = false;
    modal.setAttribute("data-mandatory", String(mandatory));
    modal.querySelector(".language-dialog-close").hidden = mandatory;
    document.body.classList.add("language-open");
    modal.querySelector("[data-language]").focus();
  }

  function createModal() {
    modal = document.createElement("div");
    modal.className = "language-overlay";
    modal.hidden = true;
    modal.setAttribute("role", "dialog");
    modal.setAttribute("aria-modal", "true");
    modal.setAttribute("aria-labelledby", "language-dialog-title");
    modal.innerHTML =
      '<div class="language-dialog">' +
        '<p class="eyebrow">Hedi Temani</p>' +
        '<h2 class="language-dialog-title" id="language-dialog-title"></h2>' +
        '<p class="language-dialog-description"></p>' +
        '<div class="language-options">' +
          '<button class="language-option" type="button" data-language="en" lang="en">English</button>' +
          '<button class="language-option" type="button" data-language="fr" lang="fr">Français</button>' +
          '<button class="language-option" type="button" data-language="ar" lang="ar">العربية</button>' +
        '</div>' +
        '<button class="language-dialog-close" type="button"></button>' +
      '</div>';
    document.body.appendChild(modal);
    modal.addEventListener("click", function (event) {
      var language = event.target.closest("[data-language]");
      if (language) {
        currentLanguage = language.getAttribute("data-language");
        applyLanguage(currentLanguage);
        try {
          localStorage.setItem(languageKey, currentLanguage);
          hasSavedLanguage = true;
        } catch (error) {
          hasSavedLanguage = false;
        }
        closeModal();
      } else if (event.target === modal && hasSavedLanguage) {
        closeModal();
      } else if (event.target.closest(".language-dialog-close") && hasSavedLanguage) {
        closeModal();
      }
    });
    document.addEventListener("keydown", function (event) {
      if (modal.hidden) {
        return;
      }
      if (event.key === "Escape" && hasSavedLanguage) {
        closeModal();
      }
      if (event.key === "Tab") {
        var focusable = Array.prototype.slice.call(
          modal.querySelectorAll("button:not([disabled]):not([hidden])")
        );
        var first = focusable[0];
        var last = focusable[focusable.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    });
  }

  function initialize() {
    createModal();
    var footer = document.querySelector(".footer-inner");
    if (footer) {
      languageButton = document.createElement("button");
      languageButton.className = "language-switch";
      languageButton.type = "button";
      languageButton.addEventListener("click", function () {
        openModal(false);
      });
      footer.appendChild(languageButton);
    }

    try {
      var saved = localStorage.getItem(languageKey);
      if (supportedLanguages.indexOf(saved) !== -1) {
        hasSavedLanguage = true;
        currentLanguage = saved;
      }
    } catch (error) {
      hasSavedLanguage = false;
    }
    applyLanguage(currentLanguage);
    if (!hasSavedLanguage) {
      openModal(true);
    }
  }

  window.siteI18n = {
    t: function (english) {
      return translation(english, currentLanguage);
    },
    getLanguage: function () {
      return currentLanguage;
    }
  };

  initialize();
})();
