import type { InfoPageContent } from '../infoPages';

export const itInfo: InfoPageContent = {
  about: {
    badge: 'Profilo della Piattaforma & Governance',
    heading: 'Chi Siamo - SciCalcX',
    subheading: 'Colmare la distanza tra calcolo matematico avanzato e programmazione interattiva.',
    missionBadge: 'La Nostra Missione',
    missionP1: 'SciCalcX è nato per risolvere una difficoltà comune tra gli studenti di informatica e ingegneria: la necessità di passare continuamente tra calcolatrici separate, strumenti statistici frammentati e pesanti ambienti di sviluppo esterni.',
    missionP2: 'La nostra suite integra calcolo numerico ad alta precisione, algebra lineare, analisi matematica e operazioni bit a bit direttamente a fianco di un tutor di codice interattivo e compilatore, progettato per funzionare in modo rapido e fluido nel browser.',
    teamBadge: 'Team di Sviluppo & Redazione',
    teamTitle: 'Team di Sviluppo & Redazione',
    standardsBadge: 'Accuratezza & Standard',
    standardsTitle: 'Precisione di Calcolo e Standard Editoriali',
    standardsIntro: 'La precisione è fondamentale nelle scienze applicate. Applichiamo standard di verifica rigorosi:',
    standards: [
      { label: 'Normalizzazione di Precisione', text: 'Le consuete approssimazioni in virgola mobile IEEE-754 vengono corrette tramite algoritmi di normalizzazione decimale per garantire fino a 12 cifre decimali chiare e affidabili.' },
      { label: 'Verifica Algoritmica Standardizzata', text: 'Le operazioni su matrici e la quadratura numerica di Simpson vengono costantemente confrontate con soluzioni analitiche di riferimento e casi di test dell\'algebra lineare.' },
      { label: 'Modello di Esecuzione Differenziato', text: 'SciCalcX distingue nettamente i tipi di calcolo: gli strumenti matematici (Scientifica, Matrici, Analisi, Grafici, Statistica, Programmatore) operano al 100% in locale nel browser. Il Tutor di Codice è differente: il codice viene trasmesso in modo sicuro tramite HTTPS a sandbox esterne isolate (Judge0 CE e Wandbox), come illustrato nella nostra Informativa sulla Privacy.' },
    ],
    architectureBadge: 'Architettura Web',
    architectureTitle: 'Architettura Web ad Alte Prestazioni',
    architectureDesc: 'Progettato secondo i più recenti standard web per garantire la massima accessibilità, tempi di caricamento istantanei e ottima usabilità da dispositivi mobili.',
  },
  contact: {
    badge: 'Comunicazioni',
    heading: 'Contattaci',
    subheading: 'Contatta il nostro team di sviluppo e supporto per domande, suggerimenti o segnalazioni di bug.',
    directTitle: 'Contatto Diretto',
    emailLabel: 'Email di Supporto',
    repoLabel: 'Repository Open Source',
    responseLabel: 'Tempi di Risposta',
    responseTime: 'Entro 24-48 ore lavorative',
    formTitle: 'Invia un Messaggio',
    nameLabel: 'Il Tuo Nome',
    emailInputLabel: 'Indirizzo Email',
    subjectLabel: 'Oggetto',
    messageLabel: 'Il Tuo Messaggio',
    submitBtn: 'Invia Messaggio al Team',
    successNotice: 'Client di posta avviato! Se non si apre automaticamente, scrivi a support@scicalcx.com.',
  },
  terms: {
    badge: 'Accordi Legali',
    heading: 'Termini e Condizioni di Utilizzo',
    subheading: 'Ultimo aggiornamento: 14 settembre 2026. Consulta le regole e le condizioni di utilizzo dei servizi di SciCalcX.',
    sections: [
      { 
        title: '1. Accettazione dei Termini', 
        paragraphs: [
          'Accedendo o utilizzando SciCalcX (https://scicalcx.com/), l\'utente dichiara di aver letto, compreso e accettato integralmente i presenti Termini e Condizioni. Se non si accettano tali clausole, è necessario interrompere immediatamente l\'utilizzo del servizio.',
          'Questi termini si applicano a tutte le calcolatrici scientifiche, ai risolutori di matrici, agli strumenti di calcolo infinitesimale, ai moduli di statistica e agli ambienti di esecuzione in sandbox.'
        ]
      },
      { 
        title: '2. Utilizzo Consentito Accademico e Professionale', 
        paragraphs: [
          'SciCalcX è messo a disposizione per finalità didattiche, accademiche, professionali e di studio personale. È consentito utilizzare i risultati dei calcoli, i grafici e gli esempi di codice in tesi universitarie, relazioni di laboratorio e perizie tecniche.',
          'L\'utente si impegna a non impiegare scraper automatici, script di attacco denial-of-service o sistemi di richiesta abusivi che possano sovraccaricare la nostra infrastruttura o quella dei partner di esecuzione.'
        ]
      },
      { 
        title: '3. Utilizzo Responsabile dell\'Esecuzione di Codice in Sandbox', 
        paragraphs: [
          'Il Tutor di Codice si interfaccia con servizi remoti di esecuzione in container (Judge0 CE e API Wandbox). Con l\'invio di codice sorgente, l\'utente accetta di non trasmettere né eseguire:',
          '• Malware, virus, worm, rootkit o exploit di sicurezza.',
          '• Algoritmi di mining di criptovalute o carichi di lavoro automatizzati non autorizzati.',
          '• Scanner di rete, port scanner, script di attacco o bot di spam.',
          '• Tentativi di evasione dal container sandbox, lettura di file di sistema o manomissione degli ambienti di esecuzione.',
          'Eventuali violazioni comporteranno l\'immediata revoca dell\'accesso e la possibile segnalazione agli organi preposti alla sicurezza delle reti.'
        ]
      },
      { 
        title: '4. Precisione dei Calcoli e Clausola di Esclusione di Garanzia ("Così Com\'è")', 
        paragraphs: [
          'SciCalcX impiega algoritmi matematici rigorosi (tra cui la regola di Simpson, le differenze finite simmetriche e gli sviluppi di Laplace) accompagnati da normalizzazione di precisione. Tuttavia, tutti i servizi sono forniti rigorosamente "COSÌ COME SONO" e "SECONDO DISPONIBILITÀ", senza alcuna garanzia implicita o esplicita.',
          'L\'aritmetica in virgola mobile sui microprocessori presenta limiti fisici di approssimazione. SciCalcX non deve essere utilizzato come unico strumento di valutazione in ambiti critici quali ingegneria aerospaziale, diagnostica medica, calcoli strutturali edili o transazioni finanziarie ad alto rischio dove un errore numerico potrebbe causare danni a persone o cose.'
        ]
      },
      { 
        title: '5. Proprietà Intellettuale', 
        paragraphs: [
          'Il marchio SciCalcX, la veste grafica, i componenti software originali, gli algoritmi e i tutorial didattici sono proprietà intellettuale di SciCalcX e dei suoi contributori. Le componenti open-source integrate sono accreditate e tutelate dalle rispettive licenze.',
          'Gli utenti mantengono la piena titolarità dei diritti d\'autore sulle espressioni matematiche e sui codici sorgente immessi sul portale.'
        ]
      },
      { 
        title: '6. Servizi di Terze Parti e Collegamenti Esterni', 
        paragraphs: [
          'SciCalcX si avvale di partner terzi affidabili per specifiche funzionalità: Cloudflare per CDN e sicurezza perimetrale, Judge0 CE e Wandbox per la compilazione in sandbox, e Google per la misurazione statistica e gli annunci pubblicitari. SciCalcX non controlla tali infrastrutture e non è responsabile per interruzioni temporanee o per i contenuti di siti esterni collegati.'
        ]
      },
      { 
        title: '7. Limitazione di Responsabilità', 
        paragraphs: [
          'Nella misura massima consentita dalle norme vigenti, SciCalcX, i suoi sviluppatori e autori declinano ogni responsabilità per danni diretti, indiretti, incidentali o consequenziali derivanti dall\'uso o dall\'impossibilità di usare il sito, inclusi perdite di dati, errori di arrotondamento o interruzioni di attività.'
        ]
      },
      { 
        title: '8. Modifiche e Contatti', 
        paragraphs: [
          'Ci riserviamo il diritto di aggiornare i presenti termini in qualunque momento. Le variazioni sostanziali saranno evidenziate dalla data aggiornata in alto.',
          'Per qualsiasi chiarimento contrattuale è possibile scrivere a support@scicalcx.com.'
        ]
      },
    ],
  },
  privacy: {
    badge: 'Privacy & Protezione Dati',
    heading: 'Informativa sulla Privacy',
    subheading: 'Ultimo aggiornamento: 14 settembre 2026. Scopri come SciCalcX tutela la privacy nei calcoli, l\'uso dei cookie e la gestione trasparente dei dati.',
    sections: [
      { 
        title: '1. Introduzione e Finalità', 
        paragraphs: [
          'Su SciCalcX (https://scicalcx.com/), la trasparenza e la tutela della riservatezza sono principi cardine. La presente informativa chiarisce quali dati vengono trattati, quali dati non raccogliamo, il funzionamento della memoria del browser e il ruolo dei partner tecnologici.',
          'SciCalcX non richiede registrazione di account, credenziali né password. Tutte le calcolatrici e gli articoli tecnici sono liberamente accessibili a chiunque senza bisogno di profilarsi.'
        ]
      },
      { 
        title: '2. Elaborazione Matematica al 100% nel Browser', 
        paragraphs: [
          'Gli strumenti matematici fondamentali di SciCalcX—inclusi la Calcolatrice Scientifica, la Calcolatrice di Matrici, lo Strumento di Analisi, il Graficatore, la Calcolatrice Statistica e il Registro del Programmatore—funzionano al 100% in locale nel browser dell\'utente.',
          'Quando si digitano formule come "sin(45)", si imposta una matrice 3x3 o si valuta la deviazione standard di una serie numerica, l\'elaborazione viene eseguita dal motore JavaScript del dispositivo. Le espressioni matematiche, le variabili e i valori immessi non vengono mai trasmessi ai nostri server né salvati in archivi remoti.'
        ]
      },
      { 
        title: '3. Tutor di Codice ed Esecuzione in Sandbox Remota', 
        paragraphs: [
          'A differenza delle calcolatrici matematiche, il Tutor di Codice permette di scrivere ed eseguire programmi in C, C++ e Python. I browser non possiedono gli strumenti per compilare ed eseguire file binari C++ o GCC direttamente sull\'hardware locale senza appoggiarsi a un ambiente esterno.',
          'Quando si preme "Esegui Codice", il codice sorgente, l\'input standard opzionale (stdin) e il linguaggio selezionato vengono inoltrati tramite connessione cifrata HTTPS a fornitori esterni di container sandbox (Judge0 CE su ce.judge0.com con fallback automatico all\'API Wandbox su wandbox.org).',
          'Questi servizi eseguono il programma all\'interno di un container temporaneo e protetto, restituendo al browser l\'output della console (stdout) e gli eventuali errori (stderr). Il codice viene elaborato solo per il tempo strettamente necessario alla compilazione e non viene salvato permanentemente, né commercializzato, né impiegato per addestrare modelli di intelligenza artificiale.'
        ]
      },
      { 
        title: '4. Dati che Non Raccogliamo', 
        paragraphs: [
          '• Non raccogliamo nomi, numeri di telefono o indirizzi di residenza.',
          '• Non richiediamo né conserviamo carte di pagamento o dati bancari.',
          '• Non vendiamo, non cediamo e non noleggiamo informazioni ad agenzie di data brokerage.'
        ]
      },
      { 
        title: '5. Memoria Locale del Browser (localStorage)', 
        paragraphs: [
          'SciCalcX impiega la funzionalità standard localStorage del browser esclusivamente per migliorare l\'esperienza d\'uso locale sul dispositivo:',
          '• Preferenza del Tema (theme): Memorizza la scelta della modalità scura o chiara.',
          '• Cronologia dei Calcoli (scicalcx_history): Conserva gli ultimi risultati calcolati (fino a 50 voci) in una pila locale. È possibile azzerarla in qualsiasi momento con il tasto "[ Cancella Tutto ]".',
          '• Presa Visione del Banner Cookie (scicalcx_cookie_consent): Ricorda la chiusura o l\'accettazione dell\'avviso.',
          '• Registro di Memoria della Calcolatrice (scicalcx_memory): Tiene traccia del valore attivo nella memoria (M+ / M- / MR).',
          '• Bozze e Progresso del Tutor (scicalcx_code_draft_*, scicalcx_sandbox_draft_*, scicalcx_completed_subs): Salva localmente il codice in lavorazione e il completamento delle lezioni per evitare perdite accidentali in caso di ricaricamento della pagina.',
          '• Dati di Esportazione Compiti (scicalcx_student_name, scicalcx_student_roll): Memorizza facoltativamente nome e matricola per generare l\'immagine dell\'esercitazione. Tali dati risiedono solo nella memoria temporanea del browser per comporre il file PNG e non vengono mai inoltrati alla rete.',
          'Tutti i dati in localStorage rimangono circoscritti al dispositivo e possono essere rimossi in qualsiasi momento cancellando la cronologia del browser.'
        ]
      },
      { 
        title: '6. Cookie, Analisi di Traffico e Google AdSense', 
        paragraphs: [
          'SciCalcX adotta tecnologie web consolidate per preservare la stabilità operativa e coprire i costi di hosting:',
          '• Cloudflare: Utilizza cookie tecnici di sicurezza e instradamento per proteggere il sito da attacchi DDoS e garantire velocità di risposta.',
          '• Google Analytics 4 (ID di Misurazione: G-XSYVYWTGTS): Raccoglie metriche statistiche aggregate e anonime (pagine visitate, dispositivo usato, referenze) utili a comprendere l\'utilizzo del sito e velocizzare le pagine.',
          '• Google AdSense: Fornitori terzi, tra cui Google, utilizzano cookie per pubblicare annunci basati sulle precedenti visite degli utenti a questo o ad altri siti web.',
          'Gli utenti possono disattivare la pubblicità personalizzata accedendo alle Impostazioni Annunci di Google (https://adssettings.google.com/) o tramite la pagina della Network Advertising Initiative (http://www.aboutads.info/choices/).'
        ]
      },
      { 
        title: '7. Richieste di Assistenza ed Email Dirette', 
        paragraphs: [
          'I messaggi inviati tramite la pagina Contatti o via email all\'indirizzo support@scicalcx.com vengono utilizzati unicamente per rispondere al quesito, riprodurre bug segnalati o fornire supporto tecnico. Non utilizziamo tali indirizzi per inviare newsletter promozionali.'
        ]
      },
      { 
        title: '8. Sicurezza e Tempi di Conservazione', 
        paragraphs: [
          'Non gestendo registri utenti o credenziali, non sussiste alcun database di dati personali a rischio di sottrazione. Tutte le comunicazioni tra browser e SciCalcX avvengono su canale cifrato TLS/HTTPS. I log tecnici di rete vengono conservati solo per il tempo strettamente indispensabile alla manutenzione.'
        ]
      },
      { 
        title: '9. Tutela dei Minori (COPPA)', 
        paragraphs: [
          'SciCalcX è un ambiente didattico dedicato alle discipline scientifiche. Non raccogliamo consapevolmente informazioni personali di minori di 13 anni. Qualora si riscontrasse l\'invio di dati personali da parte di un minore, invitiamo a scrivere a support@scicalcx.com per la tempestiva cancellazione.'
        ]
      },
      { 
        title: '10. Diritti degli Utenti (GDPR / Normativa Europea)', 
        paragraphs: [
          'In conformità al Regolamento Generale sulla Protezione dei Dati (GDPR), gli utenti hanno diritto di accesso, rettifica e cancellazione dei propri dati. Poiché SciCalcX non memorizza profili né formule sui server, la quasi totalità delle informazioni può essere cancellata in piena autonomia svuotando la cache e il localStorage del browser.',
          'Per qualsiasi quesito in tema di privacy, il nostro team risponde all\'indirizzo support@scicalcx.com.'
        ]
      },
    ],
  },
  editorial: {
    badge: 'Standard Accademici & Redazionali',
    heading: 'Integrità Editoriale e Standard Matematici',
    subheading: 'Il nostro impegno costante verso l\'esattezza scientifica, la verifica delle formule e la trasparenza degli algoritmi.',
    sections: [
      {
        title: 'Impegno verso il Rigore Universitario',
        paragraphs: [
          'Su SciCalcX, la precisione matematica e tecnica costituisce la base di ogni funzionalità. I nostri calcolatori e i nostri tutorial sono redatti e verificati per supportare studenti delle superiori, universitari di ingegneria, data scientist e sviluppatori che necessitano di calcoli accurati.',
          'Rifiutiamo tesi matematiche prive di fondamento, articoli gonfiati con parole chiave artificiali e contenuti duplicati. Ogni guida illustra i concetti algebrici e analitici con chiarezza e gradualità.'
        ]
      },
      {
        title: 'Verifica Numerica e Test di Controllo',
        paragraphs: [
          'Prima della pubblicazione di nuove funzionalità, i motori matematici vengono confrontati con insiemi di test di riferimento:',
          '• Determinanti e Inverse di Matrici: Verificati su matrici test standardizzate e motori simbolici per dimensioni 2x2 e 3x3, inclusi i casi singolari e mal condizionati.',
          '• Calcolo Infinitesimale Numerico: La regola 1/3 di Simpson (con N=1000 suddivisioni) e le derivate con quoziente di differenze finite centrate (h=1e-6) sono controllate su integrali analiticamente noti di polinomi, funzioni trigonometriche ed esponenziali.',
          '• Statistica Descrittiva: Media, mediana, moda, varianza campionaria (con correzione di Bessel n-1) e varianza di popolazione sono validate su dataset statistici standard.'
        ]
      },
      {
        title: 'Trasparenza sui Procedimenti Algoritmici',
        paragraphs: [
          'Riteniamo che chi studia debba comprendere come viene elaborata una risposta. Piuttosto che proporre calcolatrici come "scatole chiuse", SciCalcX documenta i metodi adottati, come l\'algoritmo Shunting-Yard, la normalizzazione decimale IEEE-754 o la quadratura numerica.',
          'Indichiamo inoltre chiaramente i limiti fisici del calcolo numerico, quali gli errori di arrotondamento e gli asintoti verticali.'
        ]
      },
      {
        title: 'Politica sull\'Uso di Strumenti di IA',
        paragraphs: [
          'Eventuali strumenti di assistenza alla programmazione impiegati internamente sono sempre subordinati all\'attenta revisione umana da parte del team di ingegneri di SciCalcX. Nessun articolo o algoritmo viene pubblicato senza controllo manuale della correttezza concettuale e della validità didattica.',
          'Non pubblichiamo contenuti generati automaticamente in serie. Ogni guida ha il fine preciso di offrire un autentico valore di apprendimento.'
        ]
      },
      {
        title: 'Attribuzione delle Fonti e Originalità',
        paragraphs: [
          'Tutti gli articoli didattici, gli script e i diagrammi sono elaborati originariamente dal nostro team o traggono ispirazione da testi accademici e standard aperti debitamente citati. Rispettiamo rigorosamente la proprietà intellettuale.'
        ]
      },
      {
        title: 'Segnalazione Errori e Correzioni Trasparenti',
        paragraphs: [
          'La scienza e la matematica progrediscono grazie al confronto critico. Qualora si individuassero imprecisioni, refusi o discrepanze numeriche, incoraggiamo la segnalazione affinché possiamo verificare e correggere prontamente.',
          'È possibile inviare segnalazioni via email a support@scicalcx.com o aprendo una issue pubblica sul nostro repository GitHub: github.com/RishabhDev817/scicalcx.'
        ]
      }
    ]
  }
};
