import type { InfoPageContent } from '../infoPages';

export const nlInfo: InfoPageContent = {
  about: {
    badge: 'Platformprofiel & Organisatie',
    heading: 'Over SciCalcX',
    subheading: 'De verbinding tussen geavanceerde wiskunde en interactieve software-engineering.',
    missionBadge: 'Onze Missie',
    missionP1: 'SciCalcX is opgericht om studenten techniek en informatica een naadloos platform te bieden zonder te hoeven schakelen tussen verschillende rekenmachines, losse statistiektools en logge externe IDE\'s.',
    missionP2: 'Ons platform combineert numerieke precisie, lineaire algebra, calculus en bitsgewijze logica direct met een interactieve codetutor en compiler in de browser, ontworpen voor snelle en betrouwbare interactie.',
    teamBadge: 'Ontwikkelings- en Redactieteam',
    teamTitle: 'Ontwikkelings- en Redactieteam',
    standardsBadge: 'Precisienormen',
    standardsTitle: 'Rekenprecisie & Validatiestandaarden',
    standardsIntro: 'Precisie is essentieel voor wetenschappelijke en technische toepassingen:',
    standards: [
      { label: 'Precisie Normalisatie', text: 'IEEE-754 afrondingsartefacten worden algoritmisch gecorrigeerd via decimale normalisatie voor betrouwbare en duidelijke weergaven tot 12 decimalen.' },
      { label: 'Gestandaardiseerde Verificatie', text: 'Matrixbewerkingen en de numerieke kwadratuur van Simpson worden continu gecontroleerd aan de hand van analytische referentieoplossingen.' },
      { label: 'Gedifferentieerd Uitvoeringsmodel', text: 'SciCalcX maakt een helder onderscheid tussen rekentaken: wiskundige rekenmachines (Wetenschappelijk, Matrix, Calculus, Grafieken, Statistiek, Programmeur) draaien 100% lokaal in uw browser. De Code Tutor werkt anders: code wordt via beveiligde HTTPS verzonden naar geïsoleerde externe sandboxdiensten (Judge0 CE en Wandbox), zoals uiteengezet in ons Privacybeleid.' },
    ],
    architectureBadge: 'Webarchitectuur',
    architectureTitle: 'Moderne Webarchitectuur',
    architectureDesc: 'Gebouwd volgens de nieuwste webstandaarden voor maximale snelheid, toegankelijkheid en soepele werking op mobiel en desktop.',
  },
  contact: {
    badge: 'Communicatie',
    heading: 'Contact & Ondersteuning',
    subheading: 'Neem contact op met ons team voor vragen, bugrapporten of suggesties.',
    directTitle: 'Direct Contact',
    emailLabel: 'Ondersteunings-e-mail',
    repoLabel: 'Open-Source Opslagplaats',
    responseLabel: 'Reactietijd',
    responseTime: 'Binnen 24-48 werkuren',
    formTitle: 'Stuur een Bericht',
    nameLabel: 'Uw Naam',
    emailInputLabel: 'E-mailadres',
    subjectLabel: 'Onderwerp',
    messageLabel: 'Uw Bericht',
    submitBtn: 'Bericht Verzenden',
    successNotice: 'Uw e-mailclient is geopend! U kunt ook direct mailen naar support@scicalcx.com.',
  },
  terms: {
    badge: 'Juridische Voorwaarden',
    heading: 'Algemene Voorwaarden',
    subheading: 'Laatst bijgewerkt: 14 september 2026. Bekijk de voorwaarden en richtlijnen voor het gebruik van SciCalcX.',
    sections: [
      { 
        title: '1. Aanvaarding van Voorwaarden', 
        paragraphs: [
          'Door SciCalcX (https://scicalcx.com/) te bezoeken of te gebruiken, verklaart u deze algemene voorwaarden te hebben gelezen, begrepen en ermee akkoord te gaan. Indien u niet akkoord gaat, dient u het gebruik onmiddellijk te staken.',
          'Deze voorwaarden zijn van toepassing op alle online rekenmachines, lineaire algebra-solvers, numerieke integratiemodules, statistische tools en code-uitvoeringsomgevingen.'
        ]
      },
      { 
        title: '2. Toegestaan Academisch en Professioneel Gebruik', 
        paragraphs: [
          'SciCalcX is bedoeld voor educatieve, academische, professionele en persoonlijke analysedoeleinden. Het staat u vrij berekeningsresultaten, grafieken en codevoorbeelden te gebruiken in studieverslagen, laboratoriumrapporten en technische documenten.',
          'Het is niet toegestaan geautomatiseerde scrapers, denial-of-service scripts of overmatige geautomatiseerde verzoeken te gebruiken die een onevenredige belasting vormen voor onze infrastructuur of die van externe partners.'
        ]
      },
      { 
        title: '3. Verantwoord Gebruik van Code-uitvoering in de Sandbox', 
        paragraphs: [
          'De Code Tutor maakt verbinding met externe containeruitvoeringsdiensten (Judge0 CE en de Wandbox API). Bij het indienen van broncode stemt u ermee in het volgende niet in te dienen of uit te voeren:',
          '• Schadelijke software, virussen, wormen, rootkits of exploits.',
          '• Cryptocurrency-mining of ongeautoriseerde geautomatiseerde achtergrondprocessen.',
          '• Netwerkscanners, poortscanners, DoS-scripts of spambots.',
          '• Pogingen om uit containers te ontsnappen, systeembestanden te lezen of servers te manipuleren.',
          'Overtredingen leiden tot onmiddellijke beëindiging van de toegang en mogelijke melding bij beveiligingsinstanties.'
        ]
      },
      { 
        title: '4. Wiskundige Nauwkeurigheid en "As-Is" Disclaimer', 
        paragraphs: [
          'SciCalcX implementeert beproefde wiskundige algoritmen (waaronder de 1/3-regel van Simpson, symmetrische differentiequotiënten en Laplace-expansies) naast precisienormalisatie. Alle berekeningsdiensten worden echter geleverd op "AS-IS" en "AS-AVAILABLE" basis, zonder enige garantie.',
          'Drijvende-kommaberekeningen op digitale processors kennen inherente afrondingsbeperkingen. SciCalcX mag niet worden gebruikt als enige berekeningsbron in veiligheidskritische toepassingen zoals luchtvaart, medische diagnostiek, constructieve berekeningen of financiële beleggingen waar afwijkingen tot schade kunnen leiden.'
        ]
      },
      { 
        title: '5. Intellectuele Eigendomsrechten', 
        paragraphs: [
          'De merknaam SciCalcX, het grafisch ontwerp, de gebruikersinterface, algoritmen en educatieve teksten zijn het intellectuele eigendom van SciCalcX en haar medewerkers. Open-source componenten worden gebruikt onder hun respectieve licenties.',
          'Gebruikers behouden het volledige auteursrecht op de broncode en wiskundige formules die zij op het platform invoeren.'
        ]
      },
      { 
        title: '6. Externe Diensten en Koppelingen', 
        paragraphs: [
          'SciCalcX vertrouwt op gerenommeerde externe leveranciers voor bepaalde functies: Cloudflare voor netwerkbeveiliging en CDN, Judge0 CE en Wandbox voor externe code-uitvoering, en Google voor statistieken en advertenties. SciCalcX beheert de infrastructuur van derden niet en is niet aansprakelijk voor tijdelijke storingen of inhoud op externe websites.'
        ]
      },
      { 
        title: '7. Beperking van Aansprakelijkheid', 
        paragraphs: [
          'Voor zover maximaal toegestaan door de toepasselijke wetgeving zijn SciCalcX, haar ontwikkelaars en auteurs niet aansprakelijk voor enige directe, indirecte of gevolgschade die voortvloeit uit het gebruik of het niet kunnen gebruiken van het platform, inclusief gegevensverlies, rekenfouten of studievertraging.'
        ]
      },
      { 
        title: '8. Wijzigingen en Contact', 
        paragraphs: [
          'Wij behouden ons het recht voor deze voorwaarden op elk moment aan te passen. Wijzigingen worden aangegeven met een bijgewerkte datum bovenaan dit document.',
          'Vragen over deze voorwaarden kunt u richten aan support@scicalcx.com.'
        ]
      },
    ],
  },
  privacy: {
    badge: 'Privacy & Gegevensbescherming',
    heading: 'Privacybeleid',
    subheading: 'Laatst bijgewerkt: 14 september 2026. Informatie over wiskundige privacy, cookies en gegevensstromen bij SciCalcX.',
    sections: [
      { 
        title: '1. Inleiding en Toepassingsgebied', 
        paragraphs: [
          'Bij SciCalcX (https://scicalcx.com/) geloven we in transparante, privacygerichte software. Dit Privacybeleid beschrijft welke gegevens worden verwerkt, wat we bewust niet verzamelen en hoe externe diensten functioneren.',
          'SciCalcX vereist geen gebruikersregistratie, accounts of wachtwoorden. Alle rekenmachines en artikelen zijn vrij toegankelijk zonder een account aan te maken.'
        ]
      },
      { 
        title: '2. Wiskundige Berekeningen Volledig aan de Clientzijde', 
        paragraphs: [
          'De wiskundige kerntools van SciCalcX—waaronder de Wetenschappelijke Rekenmachine, Matrix Rekenmachine, Calculus Solver, Grafische Plotter, Statistiek Rekenmachine en Programmeur Bitboard—werken 100% aan de clientzijde in uw webbrowser.',
          'Wanneer u berekeningen invoert zoals "sin(45)", een matrix definieert of een standaarddeviatie berekent, wordt de formule lokaal geëvalueerd door de JavaScript-engine van uw browser. Uw formules, variabelen en datasets worden nooit naar onze servers verzonden en nooit opgeslagen in externe databases.'
        ]
      },
      { 
        title: '3. Code Tutor & Externe Sandbox-uitvoering', 
        paragraphs: [
          'In tegenstelling tot de rekenmachines stelt de Code Tutor gebruikers in staat programma\'s in C, C++ en Python te compileren en uit te voeren. Browsers kunnen GCC-compilers niet standaard lokaal op uw hardware uitvoeren zonder externe compilers.',
          'Wanneer u op "Code Uitvoeren" klikt, worden uw broncode, invoer (stdin) en taalkeuze via versleutelde HTTPS verzonden naar externe sandboxdiensten (Judge0 CE op ce.judge0.com met automatische terugval op de Wandbox API op wandbox.org).',
          'Deze diensten voeren uw programma uit in een tijdelijke, geïsoleerde container en sturen de uitvoer (stdout) en foutmeldingen (stderr) terug naar uw browser. Uw code wordt enkel voor de duur van de uitvoeropdracht verwerkt en wordt niet permanent opgeslagen, verkocht of gebruikt voor AI-training.'
        ]
      },
      { 
        title: '4. Gegevens die Wij Niet Verzamelen', 
        paragraphs: [
          '• Wij verzamelen geen namen, telefoonnummers of fysieke adressen.',
          '• Wij vragen of bewaren geen bankrekeningnummers of betaalgegevens.',
          '• Wij verkopen of verhuren geen gebruikersgegevens aan datahandelaren.'
        ]
      },
      { 
        title: '5. Lokale Browseropslag (localStorage)', 
        paragraphs: [
          'SciCalcX gebruikt de ingebouwde localStorage van uw browser uitsluitend om het gebruiksgemak op uw apparaat te verbeteren:',
          '• Themakit (theme): Onthoudt uw keuze voor donkere of lichte modus.',
          '• Rekenverleden (scicalcx_history): Bewaart recente berekeningsresultaten (maximaal 50 items) in een lokale geschiedenis. U kunt dit op elk moment wissen via "[ Alles Wissen ]".',
          '• Cookiebevestiging (scicalcx_cookie_consent): Onthoudt of u de cookiemelding heeft gesloten.',
          '• Rekenmachinegeheugen (scicalcx_memory): Bewaart de actieve getalwaarde in het geheugen (M+ / M- / MR).',
          '• Code Concepten en Voortgang (scicalcx_code_draft_*, scicalcx_sandbox_draft_*, scicalcx_completed_subs): Slaat uw actieve code en voortgang lokaal op zodat uw werk niet verloren gaat bij het vernieuwen.',
          '• Opdrachtexport (scicalcx_student_name, scicalcx_student_roll): Bewaart optioneel naam en studentnummer om het exportoverzicht in te vullen. Dit gebeurt strikt in het browsergeheugen om een PNG-afbeelding te genereren en wordt nooit over het netwerk verzonden.',
          'Alle localStorage-sleutels blijven op uw eigen apparaat en kunnen te allen tijde worden gewist via uw browserinstellingen.'
        ]
      },
      { 
        title: '6. Cookies, Analyse en Google AdSense', 
        paragraphs: [
          'SciCalcX gebruikt standaard webtechnologieën voor stabiliteit en hostingondersteuning:',
          '• Cloudflare: Gebruikt technische beveiligingscookies om cyberaanvallen af te slaan en inhoud snel te leveren.',
          '• Google Analytics 4 (Meet-ID: G-XSYVYWTGTS): Verzamelt geaggregeerde, niet-persoonlijke statistieken (zoals bekeken pagina\'s en apparaatcategorieën) om de gebruiksvriendelijkheid van de rekenmachines te verbeteren.',
          '• Google AdSense: Externe leveranciers, waaronder Google, gebruiken cookies om advertenties weer te geven op basis van eerdere bezoeken aan deze of andere websites.',
          'U kunt gepersonaliseerde advertenties uitschakelen via Google Advertentie-instellingen (https://adssettings.google.com/) of via de Network Advertising Initiative (http://www.aboutads.info/choices/).'
        ]
      },
      { 
        title: '7. Contactberichten en E-mail', 
        paragraphs: [
          'Wanneer u contact met ons opneemt via het formulier of direct mailt naar support@scicalcx.com, worden uw naam, e-mailadres en bericht uitsluitend gebruikt om uw vraag te beantwoorden en technische ondersteuning te bieden. Wij voegen u niet toe aan marketingnieuwsbrieven.'
        ]
      },
      { 
        title: '8. Gegevensbeveiliging en Bewaartermijnen', 
        paragraphs: [
          'Omdat wij geen gebruikersaccounts of inloggegevens bijhouden, is er geen centrale database die kan lekken. Alle communicatie tussen uw browser en SciCalcX verloopt via moderne TLS/HTTPS-versleuteling. Serverlogbestanden worden enkel bewaard voor technische analyse en diagnostiek.'
        ]
      },
      { 
        title: '9. Privacy van Minderjarigen (COPPA)', 
        paragraphs: [
          'SciCalcX is een educatief rekenplatform. Wij verzamelen niet bewust persoonsgegevens van kinderen onder de 13 jaar. Mocht u vermoeden dat een kind ons gegevens heeft gestuurd, neem dan contact op via support@scicalcx.com voor directe verwijdering.'
        ]
      },
      { 
        title: '10. Rechten van Gebruikers (AVG / GDPR)', 
        paragraphs: [
          'Onder de Algemene Verordening Gegevensbescherming (AVG) heeft u rechten inzake inzage, rectificatie en verwijdering van uw persoonsgegevens. Aangezien SciCalcX geen profielen of formules op servers opslaat, kunt u vrijwel alle gegevens zelfstandig wissen door de cache en localStorage van uw browser te legen.',
          'Voor privacyvragen kunt u mailen naar support@scicalcx.com.'
        ]
      },
    ],
  },
  editorial: {
    badge: 'Academische & Redactionele Normen',
    heading: 'Redactionele Integriteit & Validatie',
    subheading: 'Onze toewijding aan wiskundige nauwkeurigheid, getoetste formules en transparante algoritmen.',
    sections: [
      {
        title: 'Toewijding aan Academische Grondigheid',
        paragraphs: [
          'Bij SciCalcX vormt wetenschappelijke precisie het fundament van al ons werk. Onze rekenmachines en artikelen zijn samengesteld voor scholieren, studenten techniek, data scientists en ontwikkelaars die betrouwbare rekentools nodig hebben.',
          'Wij publiceren geen ongefundeerde beweringen, zoekwoordverzadigde teksten of gekopieerde uitleg. Elke handleiding legt de algebraïsche principes stap voor stap en helder uit.'
        ]
      },
      {
        title: 'Wiskundige Verificatie en Benchmarking',
        paragraphs: [
          'Voordat een nieuwe rekenfunctie online gaat, worden de numerieke methoden getest tegen referentieoplossingen:',
          '• Determinanten en inverse matrices: Gecontroleerd tegen standaard lineaire algebra testmatrices en symbolische solvers voor 2x2 en 3x3 configuraties, inclusief singuliere matrices.',
          '• Numerieke Calculus: Onze samengestelde 1/3-regel van Simpson (met N=1000 deelintervallen) en centrale differenties (h=1e-6) worden getoetst aan bekende analytische integralen.',
          '• Descriptieve Statistiek: Gemiddelde, mediaan, modus, steekproefvariantie (Bessel-correctie n-1) en populatievariantie zijn gevalideerd tegen gestandaardiseerde datasets.'
        ]
      },
      {
        title: 'Transparantie over Rekenmethoden',
        paragraphs: [
          'Wij geloven dat studenten moeten begrijpen hoe antwoorden tot stand komen. In plaats van rekenmachines als black box te behandelen, documenteert SciCalcX de methode, zoals het Shunting-Yard algoritme, decimale normalisatie of kwadratuurformules.',
          'We benoemen ook expliciet de grenzen van numerieke berekeningen, zoals afrondingsfouten in drijvende-kommaberekeningen en asymptoten.'
        ]
      },
      {
        title: 'Beleid inzake AI-ondersteuning',
        paragraphs: [
          'Hulpmiddelen die intern bij het coderen worden ingezet, worden te allen tijde gecontroleerd door het ontwikkelingsteam van SciCalcX. Geen enkel artikel of algoritme wordt gepubliceerd zonder menselijke controle op wiskundige juistheid en helderheid.',
          'Wij maken geen gebruik van geautomatiseerde massaproductie van content. Elke handleiding is ontworpen om daadwerkelijke leerwaarde te bieden.'
        ]
      },
      {
        title: 'Bronvermelding en Originaliteit',
        paragraphs: [
          'Alle artikelen, codevoorbeelden en diagrammen zijn oorspronkelijk ontwikkeld door ons team of herleidbaar tot academische handboeken en open standaarden. Wij respecteren intellectueel eigendom en hanteren academische citatienormen.'
        ]
      },
      {
        title: 'Foutrapportage en Correcties',
        paragraphs: [
          'Wetenschap en wiskunde bloeien bij toetsing. Mocht u een onnauwkeurigheid of rekenfout opmerken, dan stellen we uw melding zeer op prijs. Wij onderzoeken meldingen zorgvuldig en publiceren correcties transparant.',
          'U kunt fouten melden via support@scicalcx.com of via een openbaar issue op onze GitHub-repository: github.com/RishabhDev817/scicalcx.'
        ]
      }
    ]
  }
};
