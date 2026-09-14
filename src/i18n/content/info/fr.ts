import type { InfoPageContent } from '../infoPages';

export const frInfo: InfoPageContent = {
  about: {
    badge: 'Profil de la Plateforme & Gouvernance',
    heading: 'À Propos de SciCalcX',
    subheading: 'Combler le fossé entre calcul mathématique et compilation interactive de programmes.',
    missionBadge: 'Notre Mission',
    missionP1: 'SciCalcX a été créé pour éliminer une frustration récurrente chez les étudiants en informatique et en ingénierie : la contrainte d\'alterner entre calculatrices mathématiques isolées, outils statistiques séparés et environnements de développement distants.',
    missionP2: 'Notre suite réunit calcul numérique de haute précision, algèbre linéaire, analyse infinitésimale et manipulation binaire directement aux côtés d\'un tuteur de code interactif et compilateur, conçu pour une exécution fluide et rapide directement dans votre navigateur web.',
    teamBadge: 'Équipe d\'Ingénierie & Édition',
    teamTitle: 'Équipe d\'Ingénierie & Édition',
    standardsBadge: 'Précision & Normes',
    standardsTitle: 'Normes de Précision Numérique et Rigueur Éditoriale',
    standardsIntro: 'La rigueur est essentielle dans les sciences appliquées et l\'ingénierie. Nous appliquons des protocoles d\'évaluation rigoureux :',
    standards: [
      { label: 'Normalisation de Précision', text: 'Les artefacts usuels de virgule flottante IEEE-754 sont atténués par des algorithmes de normalisation décimale pour garantir des affichages lisibles jusqu\'à 12 décimales.' },
      { label: 'Vérification Algorithmique', text: 'Les opérations matricielles et la quadrature numérique de Simpson sont systématiquement contrôlées face à des solutions symboliques de référence et des jeux de données d\'algèbre linéaire.' },
      { label: 'Modèle d\'Exécution Différencié', text: 'SciCalcX distingue clairement ses architectures : les calculatrices mathématiques (Scientifique, Matrices, Analyse, Graphique, Statistiques, Développeur) s\'exécutent localement dans votre navigateur. Le Tuteur de Code est différent : le code source est transmis de manière sécurisée via HTTPS vers des services sandbox distants isolés (Judge0 CE et Wandbox), comme détaillé dans notre Politique de Confidentialité.' },
    ],
    architectureBadge: 'Architecture Web',
    architectureTitle: 'Architecture Web Haute Performance',
    architectureDesc: 'Conçu avec les derniers standards du Web pour offrir accessibilité, rapidité sans dépendance logicielle lourde et ergonomie sur terminaux mobiles.',
  },
  contact: {
    badge: 'Communications',
    heading: 'Contactez-Nous',
    subheading: 'Contactez notre équipe de support et de développement pour toute question, suggestion ou signalement d\'anomalie.',
    directTitle: 'Contact Direct',
    emailLabel: 'Courriel de Support',
    repoLabel: 'Code Source Ouvert',
    responseLabel: 'Délai de Réponse',
    responseTime: 'Sous 24 à 48 heures ouvrées',
    formTitle: 'Envoyer un Message',
    nameLabel: 'Votre Nom',
    emailInputLabel: 'Adresse Courriel',
    subjectLabel: 'Objet du Message',
    messageLabel: 'Votre Message',
    submitBtn: 'Envoyer le Message à l\'Équipe',
    successNotice: 'Votre client de messagerie a été ouvert ! Si l\'application ne s\'est pas lancée automatiquement, écrivez directement à support@scicalcx.com.',
  },
  terms: {
    badge: 'Accords Juridiques',
    heading: 'Conditions Générales d\'Utilisation',
    subheading: 'Dernière mise à jour : 14 septembre 2026. Consultez les règles régissant l\'accès aux services en ligne de SciCalcX.',
    sections: [
      { 
        title: '1. Acceptation des Conditions', 
        paragraphs: [
          'En accédant à SciCalcX (https://scicalcx.com/) ou en l\'utilisant, vous reconnaissez avoir pris connaissance, compris et accepté d\'être juridiquement lié par les présentes Conditions Générales. Si vous refusez l\'une quelconque de ces clauses, vous devez immédiatement interrompre votre utilisation du service.',
          'Les présentes dispositions s\'appliquent à l\'ensemble des calculatrices scientifiques, résolveurs matriciels, outils d\'analyse numérique, calculateurs statistiques, modules pour développeurs et bacs à sable d\'exécution de code.'
        ]
      },
      { 
        title: '2. Usage Autorisé dans un Cadre Pédagogique et Professionnel', 
        paragraphs: [
          'SciCalcX est mis à disposition comme ressource documentaire pour des travaux d\'études, de recherche universitaire, d\'ingénierie et de calcul personnel. Vous êtes autorisé à intégrer les résultats, graphiques et extraits de code dans vos mémoires, rapports de laboratoire et analyses professionnelles.',
          'Vous vous engagez à ne pas utiliser de scripts d\'extraction massive (scraping), d\'outils d\'attaque par déni de service ou de mécanismes de requêtes abusives susceptibles d\'entraver notre infrastructure ou celle de nos partenaires d\'exécution.'
        ]
      },
      { 
        title: '3. Utilisation Responsable de l\'Exécution de Code en Sandbox', 
        paragraphs: [
          'L\'outil Tuteur de Code et Compilateur fait appel à des services distants d\'exécution en conteneurs (Judge0 CE et API Wandbox). En soumettant du code source, vous vous engagez à ne pas transmettre ni exécuter :',
          '• Des logiciels malveillants, virus, vers, rootkits ou exploits de sécurité.',
          '• Des algorithmes d\'extraction de cryptomonnaies ou des charges automatisées non sollicitées.',
          '• Des scanners de vulnérabilités réseau, outils de balayage de ports ou robots d\'envoi de pourriels.',
          '• Des tentatives d\'évasion de conteneur, de lecture de fichiers d\'infrastructure ou d\'altération des environnements serveurs.',
          'Tout manquement entraînera une coupure d\'accès immédiate et d\'éventuels signalements aux instances de sécurité réseau compétentes.'
        ]
      },
      { 
        title: '4. Précision Mathématique et Clause de Non-Garantie « En l\'État »', 
        paragraphs: [
          'SciCalcX met en œuvre des algorithmes scientifiques éprouvés (quadrature composée de Simpson, dérivées par différences finies symétriques, développements de Laplace) associés à une normalisation de précision. Toutefois, tous nos services de calcul sont fournis strictement « EN L\'ÉTAT » et « SELON DISPONIBILITÉ », sans aucune garantie expresse ou tacite.',
          'L\'arithmétique binaire à virgule flottante sur processeur comporte des limites d\'approximation intrinsèques. SciCalcX ne saurait être employé comme unique instrument d\'évaluation dans des secteurs critiques tels que l\'aéronautique, les diagnostics médicaux, la conception d\'ouvrages d\'art ou les transactions d\'arbitrage financier où une erreur numérique pourrait engendrer des préjudices physiques, corporels ou matériels.'
        ]
      },
      { 
        title: '5. Propriété Intellectuelle', 
        paragraphs: [
          'La marque SciCalcX, la charte graphique, les composants logiciels propriétaires, les algorithmes et les guides pédagogiques sont la propriété intellectuelle exclusive de SciCalcX et de ses contributeurs. Les briques open-source intégrées sont dument référencées et exploitées sous leurs licences respectives.',
          'Les utilisateurs demeurent titulaires de l\'intégralité des droits d\'auteur sur le code source et les formules mathématiques qu\'ils saisissent sur le site.'
        ]
      },
      { 
        title: '6. Prestataires Tiers et Liens Externes', 
        paragraphs: [
          'SciCalcX recourt à des tiers reconnus pour certaines fonctionnalités : Cloudflare pour la diffusion et la protection CDN, Judge0 CE et Wandbox pour l\'exécution distante de code, et Google pour la mesure d\'audience et la publicité. SciCalcX n\'exerce aucun contrôle sur ces infrastructures externes et décline toute responsabilité en cas de dysfonctionnement intermittent de ces tiers ou quant au contenu des liens externes.'
        ]
      },
      { 
        title: '7. Limitation de Responsabilité', 
        paragraphs: [
          'Dans toute la mesure permise par la loi applicable, SciCalcX, ses concepteurs, auteurs et contributeurs ne pourront être tenus pour responsables des dommages directs, indirects, accessoires ou punitifs consécutifs à l\'utilisation ou à l\'impossibilité d\'utiliser la plateforme, y compris les pertes de données, erreurs d\'arrondi, sanctions académiques ou interruptions d\'activité.'
        ]
      },
      { 
        title: '8. Révisions des Conditions et Contact', 
        paragraphs: [
          'Nous nous réservons la faculté d\'adapter à tout moment les présentes conditions. Toute modification importante est signalée par la mise à jour de la date figurant en tête du document.',
          'Pour toute interrogation juridique, contactez notre équipe à support@scicalcx.com.'
        ]
      },
    ],
  },
  privacy: {
    badge: 'Confidentialité & Données',
    heading: 'Politique de Confidentialité',
    subheading: 'Dernière mise à jour : 14 septembre 2026. Découvrez les engagements de SciCalcX relatifs à la confidentialité, aux cookies et à la transparence technique.',
    sections: [
      { 
        title: '1. Présentation et Périmètre', 
        paragraphs: [
          'Sur SciCalcX (https://scicalcx.com/), nous privilégions la transparence et le respect de la vie privée dès la conception. La présente politique détaille les informations collectées, celles que nous ne collectons pas, le rôle de la mémoire locale de votre navigateur et le recours à des prestataires externes.',
          'SciCalcX ne requiert aucun compte utilisateur, inscription ni mot de passe. L\'ensemble des outils de calcul et articles techniques est accessible librement et sans authentification.'
        ]
      },
      { 
        title: '2. Traitement Mathématique Strictement Côté Client', 
        paragraphs: [
          'Les outils mathématiques fondamentaux de SciCalcX—notamment la Calculatrice Scientifique, le Résolveur de Matrices, le Calculateur d\'Analyse, le Traceur de Courbes, le Calculateur Statistique et le Module Développeur—fonctionnent à 100 % dans votre navigateur web.',
          'Lorsque vous saisissez une formule telle que « sin(45) », définissez une matrice 3x3 ou évaluez la variance d\'une série, le traitement est opéré en local par le moteur JavaScript de votre équipement. Vos expressions mathématiques, valeurs de variables et séries statistiques ne sont jamais transmises à nos serveurs ni enregistrées dans une base distante.'
        ]
      },
      { 
        title: '3. Tuteur de Code et Exécution en Bac à Sable Distant', 
        paragraphs: [
          'À la différence des calculatrices numériques, le Tuteur de Code permet d\'écrire et de lancer des programmes en langage C, C++ et Python. Les navigateurs ne disposent pas d\'environnements natifs pour compiler du C++ ou invoquer des compilateurs GCC directement sur la machine cliente sans serveur dédié.',
          'Lorsque vous cliquez sur « Exécuter le Code », le code source, l\'entrée standard (stdin) et l\'identifiant de langage sont transmis via une connexion HTTPS chiffrée à des services de bac à sable conteneurisés (Judge0 CE sur ce.judge0.com et basculement vers l\'API Wandbox sur wandbox.org).',
          'Ces prestataires compilent votre programme dans un conteneur éphémère et isolé, puis retournent le flux de sortie (stdout) et les éventuelles erreurs de syntaxe (stderr) à votre navigateur. Votre code n\'est conservé que pour la stricte durée d\'exécution et ne fait l\'objet d\'aucun archivage permanent, vente ou entraînement d\'intelligence artificielle.'
        ]
      },
      { 
        title: '4. Données que Nous Ne Collectons Pas', 
        paragraphs: [
          '• Nous ne collectons ni vos noms civils, ni numéros de téléphone, ni coordonnées postales.',
          '• Nous ne demandons ni ne conservons aucune coordonnée bancaire ou moyen de paiement.',
          '• Nous ne vendons, ne louons et ne transmettons aucune donnée personnelle à des courtiers en données.'
        ]
      },
      { 
        title: '5. Stockage Local dans le Navigateur (localStorage)', 
        paragraphs: [
          'SciCalcX utilise la fonction native localStorage de votre navigateur dans le seul but de préserver votre confort d\'utilisation d\'une session à l\'autre :',
          '• Préférence d\'Affichage (theme) : Enregistre le choix du mode sombre ou clair pour conserver un rendu graphique cohérent.',
          '• Historique des Calculs (scicalcx_history) : Mémorise vos derniers résultats (plafonné à 50 entrées) dans une pile locale, effaçable à tout instant via le bouton « [ Tout Effacer ] ».',
          '• Consentement aux Cookies (scicalcx_cookie_consent) : Retient la fermeture ou l\'acceptation de notre bandeau d\'information.',
          '• Registre de Mémoire de la Calculatrice (scicalcx_memory) : Conserve la valeur numérique active de la mémoire (M+ / M- / MR).',
          '• Brouillons de Code et Progression (scicalcx_code_draft_*, scicalcx_sandbox_draft_*, scicalcx_completed_subs) : Sauvegarde votre code et le statut des exercices réussis pour éviter toute perte de travail lors du rafraîchissement.',
          '• Exportation de Devoir (scicalcx_student_name, scicalcx_student_roll) : Mémorise facultativement le nom et matricule de l\'étudiant pour préremplir le module d\'exportation. Ces informations sont traitées strictement dans la mémoire locale pour créer un instantané PNG et ne sont jamais communiquées sur le réseau.',
          'L\'ensemble de ces données réside exclusivement sur votre appareil et peut être purgé à tout moment depuis les options de votre navigateur.'
        ]
      },
      { 
        title: '6. Cookies, Mesure d\'Audience et Google AdSense', 
        paragraphs: [
          'SciCalcX fait appel à des technologies web standard pour garantir la pérennité et la sécurité de son hébergement :',
          '• Cloudflare : Emploie des cookies techniques de sécurité réseau afin de contrer les cyberattaques et optimiser la vitesse de transmission.',
          '• Google Analytics 4 (Identifiant : G-XSYVYWTGTS) : Agrège des données de fréquentation anonymisées (pages consultées, types d\'appareils, sites référents) dans le but d\'évaluer la fréquentation et d\'affiner nos interfaces de calcul.',
          '• Google AdSense : Des régies publicitaires tierces, notamment Google, utilisent des cookies pour diffuser des annonces adaptées aux visites antérieures des internautes. L\'usage de ces traceurs permet à Google et ses partenaires d\'adapter les annonces.',
          'Vous pouvez désactiver la personnalisation publicitaire via les Paramètres des Annonces Google (https://adssettings.google.com/) ou sur la plateforme Network Advertising Initiative (http://www.aboutads.info/choices/).'
        ]
      },
      { 
        title: '7. Demandes d\'Assistance et Courriel Direct', 
        paragraphs: [
          'Si vous adressez un message via le formulaire de Contact ou par courriel à support@scicalcx.com, vos coordonnées et le texte de votre message sont uniquement exploités pour traiter votre question, reproduire un bug éventuel ou vous assister. Vos adresses ne sont jamais reversées dans des listes de prospection.'
        ]
      },
      { 
        title: '8. Sécurité et Durée de Conservation des Données', 
        paragraphs: [
          'Faute de base d\'abonnés ou de gestion de comptes, il n\'existe aucun annuaire d\'utilisateurs susceptible de faire l\'objet d\'une fuite. Les communications entre votre équipement et SciCalcX reposent sur les protocoles modernes de chiffrement TLS/HTTPS. Les journaux techniques de nos serveurs ne sont conservés que pour les durées strictement nécessaires au diagnostic technique.'
        ]
      },
      { 
        title: '9. Protection des Mineurs (COPPA)', 
        paragraphs: [
          'SciCalcX est un outil pédagogique destiné à l\'apprentissage des mathématiques et des sciences. Nous ne collectons sciemment aucune donnée personnelle auprès d\'enfants de moins de 13 ans. Si vous constatez qu\'un mineur nous a transmis des données par courriel, contactez support@scicalcx.com pour suppression immédiate.'
        ]
      },
      { 
        title: '10. Droits des Utilisateurs Internationaux (RGPD / CCPA)', 
        paragraphs: [
          'Conformément aux réglementations sur la protection des données personnelles (notamment le Règlement Général sur la Protection des Données en Europe), vous bénéficiez de prérogatives d\'accès, de rectification et d\'effacement des éléments vous concernant. N\'hébergeant aucun compte utilisateur ni formule mathématique sur nos serveurs, la quasi-totalité des éléments peut être supprimée directement par vos soins en nettoyant le cache de votre navigateur.',
          'Pour toute question relative à vos droits, écrivez à support@scicalcx.com.'
        ]
      },
    ],
  },
  editorial: {
    badge: 'Normes Académiques & Éditoriales',
    heading: 'Intégrité Éditoriale et Rigueur Mathématique',
    subheading: 'Notre engagement constant envers la justesse de calcul, la validation des formules et la transparence des algorithmes.',
    sections: [
      {
        title: 'Engagement envers l\'Excellence Universitaire',
        paragraphs: [
          'Sur SciCalcX, l\'exactitude scientifique est le socle de notre démarche. Nos outils de calcul et nos fiches d\'apprentissage sont rédigés et relus à l\'intention des lycéens, étudiants d\'écoles d\'ingénieurs, chercheurs et développeurs qui exigent des instruments numériques de premier ordre.',
          'Nous proscrivons les allégations non vérifiées, le bourrage de mots-clés artificiel et les contenus dupliqués. Chaque tutoriel vise à éclairer pas à pas les concepts mathématiques ou informatiques abordés.'
        ]
      },
      {
        title: 'Validation Numérique et Bancs d\'Essai',
        paragraphs: [
          'Avant tout déploiement en ligne, nos méthodes de calcul sont soumises à des bancs de tests rigoureux :',
          '• Déterminants et Inversions de Matrices : Contrôlés face à des matrices de test standardisées et des résolveurs formels en formats 2x2 et 3x3, incluant les cas singuliers.',
          '• Analyse Numérique : Notre méthode de Simpson composite 1/3 (opérant sur N=1000 sous-intervalles) et les dérivées numériques par différences finies centrées (h=1e-6) sont validées sur des intégrales polynomiales, trigonométriques et exponentielles connues analytiquement.',
          '• Statistiques Descriptives : Moyenne, médiane, mode, variance d\'échantillon (avec correction de Bessel n-1) et variance de population sont certifiées sur des jeux de données statistiques de référence.'
        ]
      },
      {
        title: 'Transparence Méthodologique et Algorithmique',
        paragraphs: [
          'Nous estimons qu\'un apprenant doit comprendre le cheminement ayant permis d\'aboutir au résultat. Refusant la logique de la « boîte noire », chaque module de SciCalcX documente la méthode employée, qu\'il s\'agisse de la notation polonaise inverse via l\'algorithme Shunting-Yard, de la normalisation décimale ou de la quadrature numérique.',
          'Nous indiquons également sans détour les limites techniques du calcul numérique : arrondis des représentations binaires flottantes, pas de discrétisation et asymptotes de fonctions.'
        ]
      },
      {
        title: 'Ligne Directrice sur les Contenus Assistés par IA',
        paragraphs: [
          'Les éventuels outils d\'aide au codage utilisés en interne sont systématiquement encadrés par l\'équipe de développement de SciCalcX. Aucun code ni article n\'est mis en ligne sans vérification humaine de son exactitude mathématique, de sa clarté linguistique et de son intérêt pédagogique.',
          'Nous rejetons catégoriquement les fermes de contenus automatisés. Chaque ressource proposée sur SciCalcX est rédigée pour apporter une valeur pédagogique tangible.'
        ]
      },
      {
        title: 'Respect des Sources et Originalité',
        paragraphs: [
          'Tous nos articles didactiques, programmes d\'exemple et diagrammes sont conçus originalement par nos équipes ou s\'appuient sur des manuels académiques et standards ouverts dument cités. Nous respectons scrupuleusement la propriété intellectuelle.'
        ]
      },
      {
        title: 'Correction Transparente des Erreurs et Signalements',
        paragraphs: [
          'Les mathématiques et l\'ingénierie progressent par le débat et la vérification continue. Si vous repérez une imprécision, une coquille ou une anomalie de calcul, nous vous encourageons vivement à nous le signaler. Nous examinons chaque remontée sans délai et publions les correctifs nécessaires.',
          'Vous pouvez transmettre vos remarques à support@scicalcx.com ou consigner un ticket public sur notre dépôt GitHub : github.com/RishabhDev817/scicalcx.'
        ]
      }
    ]
  }
};
