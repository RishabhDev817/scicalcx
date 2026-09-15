import type { InfoPageContent } from '../infoPages';

export const deInfo: InfoPageContent = {
  about: {
    badge: 'Plattform-Profil & Organisation',
    heading: 'Über SciCalcX',
    subheading: 'Die Verbindung zwischen mathematischer Präzision und interaktiver Programmierung.',
    missionBadge: 'Unsere Mission',
    missionP1: 'SciCalcX entstand aus einer typischen Herausforderung im MINT- und Informatikstudium: dem ständigen Wechsel zwischen isolierten Taschenrechnern, separaten Statistiktools und trägen externen Entwicklungsumgebungen.',
    missionP2: 'Unsere Plattform vereint hochpräzise numerische Berechnungen, Lineare Algebra, Analysis und Bit-Manipulationen direkt mit einem interaktiven Programmier-Tutor und Compiler – entwickelt für schnelle Reaktionszeiten direkt im Webbrowser.',
    teamBadge: 'Entwicklungs- & Redaktionsteam',
    teamTitle: 'Entwicklungs- & Redaktionsteam',
    standardsBadge: 'Genauigkeit & Standards',
    standardsTitle: 'Berechnungsgenauigkeit & Wissenschaftliche Standards',
    standardsIntro: 'Exaktheit ist in Naturwissenschaften und Ingenieurwesen unabdingbar. Wir stützen uns auf strenge Validierungsverfahren:',
    standards: [
      { label: 'Präzisions-Normalisierung', text: 'Typische Rundungsartefakte der IEEE-754-Gleitkommaarithmetik werden durch Dezimalnormalisierungsalgorithmen bereinigt, um saubere Darstellungen bis zu 12 Dezimalstellen zu gewährleisten.' },
      { label: 'Standardisierte Validierung', text: 'Matrixoperationen und Simpsons numerische Quadratur werden kontinuierlich gegen symbolische Referenzrechner und algebraische Testfälle abgeglichen.' },
      { label: 'Differenziertes Ausführungsmodell', text: 'SciCalcX wahrt eine strikte architektonische Trennung zwischen den Berechnungsarten: Alle mathematischen Rechner (Wissenschaftlich, Matrizen, Analysis, Graphen, Statistik, Programmierer) rechnen zu 100 % lokal in Ihrem Browser ohne Netzwerkanfragen. Der Code-Tutor führt eingereichten Quelltext aus, indem er verschlüsselt über HTTPS direkt an isolierte Container-Sandbox-Dienste (primär: Judge0 CE unter ce.judge0.com, Fallback: Wandbox API unter wandbox.org) ohne dauerhafte serverseitige Speicherung übertragen wird.' },
    ],
    architectureBadge: 'Web-Architektur',
    architectureTitle: 'Moderne Web-Architektur',
    architectureDesc: 'Entwickelt nach zeitgemäßen Webstandards für höchste Barrierefreiheit, minimale Ladezeiten und optimale Bedienung auf Mobilgeräten.',
  },
  contact: {
    badge: 'Kommunikation',
    heading: 'Kontaktieren Sie uns',
    subheading: 'Wenden Sie sich bei Fragen, Feedback oder Fehlerberichten direkt an unser Entwicklerteam.',
    directTitle: 'Direktkontakt',
    emailLabel: 'Support-E-Mail',
    repoLabel: 'Open-Source-Code',
    responseLabel: 'Antwortzeit',
    responseTime: 'Innerhalb von 24–48 Werktagsstunden',
    formTitle: 'Nachricht senden',
    nameLabel: 'Ihr Name',
    emailInputLabel: 'E-Mail-Adresse',
    subjectLabel: 'Betreff',
    messageLabel: 'Ihre Nachricht',
    submitBtn: 'Nachricht an Support-Team senden',
    successNotice: 'E-Mail-Programm geöffnet! Falls sich Ihre Mail-App nicht automatisch öffnet, schreiben Sie direkt an support@scicalcx.com.',
  },
  terms: {
    badge: 'Rechtliche Hinweise',
    heading: 'Nutzungsbedingungen',
    subheading: 'Stand: 14. September 2026. Richtlinien und Bedingungen für die Nutzung der SciCalcX-Onlinedienste.',
    sections: [
      { 
        title: '1. Geltungsbereich und Annahme der Bedingungen', 
        paragraphs: [
          'Durch den Zugriff auf oder die Nutzung von SciCalcX (https://scicalcx.com/) bestätigen Sie, dass Sie diese Nutzungsbedingungen gelesen, verstanden haben und an sie rechtlich gebunden sind. Wenn Sie diesen Bedingungen nicht zustimmen, müssen Sie die Nutzung unverzüglich einstellen.',
          'Diese Bestimmungen gelten für alle wissenschaftlichen Rechner, Matrizen-Solver, Infinitesimal-Werkzeuge, Statistikmodule, Entwickler-Utilities und Sandbox-Kompilierungsumgebungen.'
        ]
      },
      { 
        title: '2. Zulässige akademische und berufliche Nutzung', 
        paragraphs: [
          'SciCalcX wird für akademische, wissenschaftliche, berufliche und private Berechnungszwecke bereitgestellt. Es ist gestattet, Berechnungsergebnisse, grafische Plots und Codebeispiele in Seminararbeiten, Laborberichten und technischen Gutachten zu verwenden.',
          'Sie verpflichten sich, keine automatisierten Scraping-Tools, Denial-of-Service-Skripte oder missbräuchliche Abfrageschleifen einzusetzen, die unsere Infrastruktur oder Partner-Ausführungsdienste überlasten.'
        ]
      },
      { 
        title: '3. Verantwortliche Nutzung der Code-Ausführung in der Sandbox', 
        paragraphs: [
          'Der Code-Tutor bindet externe Container-Ausführungsdienste (Judge0 CE und Wandbox API) ein. Bei der Übermittlung von Quellcode erklären Sie sich damit einverstanden, Folgendes weder auszuführen noch zu übertragen:',
          '• Schadsoftware, Viren, Würmer, Rootkits oder Exploit-Payloads.',
          '• Kryptomining-Algorithmen oder nicht autorisierte rechenintensive Batch-Jobs.',
          '• Nicht autorisierte Netzwerk- oder Portscanner, DoS-Skripte oder Spam-Bots.',
          '• Versuche des Sandbox-Ausbruchs, das unbefugte Auslesen von Systemdateien oder Manipulationen der Laufzeitumgebung.',
          'Verstöße führen zur sofortigen Sperrung des Zugriffs sowie zu potenziellen Meldungen an Sicherheitsdienstleister.'
        ]
      },
      { 
        title: '4. Mathematische Genauigkeit und Haftungsausschluss („Wie besehen“)', 
        paragraphs: [
          'SciCalcX nutzt etablierte mathematische Algorithmen (einschließlich Simpsons 1/3-Quadratur, symmetrischer Differenzenquotienten und Laplace-Entwicklungen) in Verbindung mit numerischer Normalisierung. Dennoch werden alle Berechnungsdienste ausschließlich „WIE BESEHEN“ und „NACH VERFÜGBARKEIT“ ohne jegliche Gewährleistung bereitgestellt.',
          'Gleitkommaoperationen auf digitalen Prozessoren unterliegen physikalischen und numerischen Näherungsgrenzen. SciCalcX darf nicht als alleiniges Berechnungsfundament in sicherheitskritischen Bereichen wie Luftfahrt, Medizindiagnostik, Tragwerksplanung oder hochriskanten Finanztransaktionen eingesetzt werden, bei denen Berechnungsabweichungen Personenschäden oder finanzielle Einbußen verursachen könnten.'
        ]
      },
      { 
        title: '5. Geistiges Eigentum und Urheberrechte', 
        paragraphs: [
          'Der Markenname SciCalcX, das visuelle Interface-Design, proprietäre UI-Komponenten, Algorithmen und didaktische Leitfäden sind geistiges Eigentum von SciCalcX und seinen Mitwirkenden. Eingebundene Open-Source-Komponenten sind unter ihren jeweiligen Lizenzen ausgewiesen.',
          'Nutzer behalten das uneingeschränkte Urheberrecht an allen eingegebenen Quellcodes und mathematischen Formeln.'
        ]
      },
      { 
        title: '6. Dienste Dritter und externe Verlinkungen', 
        paragraphs: [
          'SciCalcX arbeitet mit renommierten Drittanbietern zusammen: Cloudflare (CDN und Sicherheit), Judge0 CE und Wandbox (Sandbox-Kompilierung) sowie Google (Reichweitenmessung und Werbeeinblendungen). SciCalcX hat keinen Einfluss auf die Infrastruktur Dritter und haftet nicht für vorübergehende Ausfälle dieser Dienste oder fremde Inhalte verlinkter Webseiten.'
        ]
      },
      { 
        title: '7. Haftungsbeschränkung', 
        paragraphs: [
          'Soweit gesetzlich zulässig, übernehmen SciCalcX, seine Entwickler und Autoren keine Haftung für direkte, indirekte, zufällige oder Folgeschäden, die aus der Nutzung oder Nichtverfügbarkeit der Plattform entstehen, einschließlich Datenverlusten, Rundungsfehlern, Notenabzügen im Studium oder Geschäftsunterbrechungen.'
        ]
      },
      { 
        title: '8. Änderungen und Kontakt', 
        paragraphs: [
          'Wir behalten uns vor, diese Nutzungsbedingungen bei Bedarf anzupassen. Wesentliche Änderungen werden durch das aktualisierte Datum am Dokumentenanfang kenntlich gemacht.',
          'Fragen zu diesen Bedingungen richten Sie bitte an support@scicalcx.com.'
        ]
      },
    ],
  },
  privacy: {
    badge: 'Datenschutz & Richtlinien',
    heading: 'Datenschutzerklärung',
    subheading: 'Stand: 14. September 2026. Transparente Informationen über rechnerischen Datenschutz, Cookies und Datenflüsse bei SciCalcX.',
    sections: [
      { 
        title: '1. Einleitung und Geltungsbereich', 
        paragraphs: [
          'Bei SciCalcX (https://scicalcx.com/) legen wir größten Wert auf Transparenz und Datensparsamkeit. Diese Datenschutzerklärung erläutert, welche Daten verarbeitet werden, welche Daten wir bewusst nicht erfassen und wie Drittanbieterdienste eingebunden sind.',
          'SciCalcX verlangt weder eine Benutzerregistrierung noch Logins oder Passwörter. Sämtliche Rechner und Artikel können ohne Nutzerkonto aufgerufen werden.'
        ]
      },
      { 
        title: '2. Lokale mathematische Datenverarbeitung (Client-Side)', 
        paragraphs: [
          'Die mathematischen Kernrechner von SciCalcX – namentlich Wissenschaftlicher Rechner, Matrizen-Rechner, Analysis-Rechner, Funktionsplotter, Statistik-Rechner und Programmierer-Board – arbeiten zu 100 % lokal in Ihrem Webbrowser.',
          'Wenn Sie Rechenterme wie „sin(45)“ eingeben, Matrizen definieren oder Standardabweichungen analysieren, erfolgt die Auswertung im JavaScript-Kern Ihres Endgeräts. Ihre Gleichungen, Variablen und Zahlenreihen werden zu keinem Zeitpunkt an unsere Server gesendet oder in externen Datenbanken gespeichert.'
        ]
      },
      { 
        title: '3. Code-Tutor & Externe Sandbox-Ausführung', 
        paragraphs: [
          'Im Unterschied zu reinen Taschenrechnern ermöglicht der Code-Tutor das Schreiben und Ausführen von Skripten in C, C++ und Python. Webbrowser können GCC-Kompilierketten nicht nativ ohne Backend-Systeme auf Client-Hardware ausführen.',
          'Sobald Sie auf „Code Ausführen“ klicken, werden Ihr Quelltext, die optionale Standardeingabe (stdin) und die Sprachauswahl verschlüsselt über HTTPS an externe Container-Ausführungsdienste übertragen (Judge0 CE auf ce.judge0.com mit automatischem Fallback auf die Wandbox API unter wandbox.org).',
          'Diese Dienste führen Ihr Programm in einer isolierten, flüchtigen Sandbox aus und senden die Konsolenausgabe (stdout) sowie Fehlermeldungen (stderr) zurück. Ihr Quellcode wird ausschließlich für den Moment der Ausführung verarbeitet und weder dauerhaft gespeichert noch für KI-Trainingszwecke verwertet.'
        ]
      },
      { 
        title: '4. Daten, die wir nicht erheben', 
        paragraphs: [
          '• Wir erfassen keine Personennamen, Telefonnummern oder Anschriften.',
          '• Wir verlangen und speichern keinerlei Zahlungskarten-, Bank- oder Finanzdaten.',
          '• Wir verkaufen oder vermieten keine Nutzerdaten an Adress- oder Datenhändler.'
        ]
      },
      { 
        title: '5. Lokaler Browserspeicher (localStorage)', 
        paragraphs: [
          'SciCalcX nutzt den nativen localStorage Ihres Browsers ausschließlich zur Erhöhung des Bedienkomforts:',
          '• Design-Einstellung (theme): Speichert Ihre Wahl des Hell- oder Dunkelmodus.',
          '• Berechnungshistorie (scicalcx_history): Merkt sich Ihre letzten Rechenergebnisse (maximal 50 Einträge) in einem lokalen Stack. Sie können diese Liste jederzeit über „[ Alles Löschen ]“ leeren.',
          '• Cookie-Hinweis (scicalcx_cookie_consent): Speichert die Bestätigung unseres Hinweises.',
          '• Rechnerspeicher-Register (scicalcx_memory): Sichert den aktuellen Speicherwert (M+ / M- / MR).',
          '• Code-Tutor Entwürfe (scicalcx_code_draft_*, scicalcx_sandbox_draft_*, scicalcx_completed_subs): Speichert Ihren aktuellen Code und den Lernfortschritt ab, damit bei einem Neuladen nichts verloren geht.',
          '• Aufgaben-Export (scicalcx_student_name, scicalcx_student_roll): Merkt sich Name und Matrikelnummer optional für den Aufgabenbericht. Diese Angaben verbleiben rein im Arbeitsspeicher Ihres Geräts zur PNG-Generierung und gelangen nie ins Netzwerk.',
          'Alle localStorage-Werte liegen ausschließlich auf Ihrem Gerät und können jederzeit über die Browsereinstellungen gelöscht werden.'
        ]
      },
      { 
        title: '6. Cookies, Reichweitenanalyse und Google AdSense', 
        paragraphs: [
          'SciCalcX setzt bewährte Webtechnologien ein, um Betriebssicherheit und Hosting zu gewährleisten:',
          '• Cloudflare: Verwendet technische Sicherheits-Cookies zur Abwehr von Cyberangriffen und zur schnellen Auslieferung.',
          '• Google Analytics 4 (Mess-ID: G-XSYVYWTGTS): Erfasst anonymisierte, aggregierte Nutzungsstatistiken (Seitenaufrufe, Gerätetypen, Herkunftsseiten), um beliebte Funktionen zu erkennen und Ladezeiten zu verbessern.',
          '• Google AdSense: Drittanbieter wie Google verwenden Cookies, um Anzeigen basierend auf vorherigen Besuchen der Nutzer auf dieser oder anderen Websites zu schalten. Googles Werbe-Cookies ermöglichen die Bereitstellung relevanter Werbeeinblendungen.',
          'Nutzer können personalisierte Werbung in den Google-Anzeigeneinstellungen (https://adssettings.google.com/) oder über die Network Advertising Initiative (http://www.aboutads.info/choices/) deaktivieren.'
        ]
      },
      { 
        title: '7. Kontaktaufnahme und E-Mail-Kommunikation', 
        paragraphs: [
          'Wenn Sie unser Kontaktformular nutzen oder direkt an support@scicalcx.com schreiben, werden Ihr Name, Ihre E-Mail-Adresse und der Nachrichtentext ausschließlich zur Bearbeitung Ihrer Anfrage verwendet. Wir betreiben kein Marketing-Newsletter-Tracking und geben keine Mailadressen weiter.'
        ]
      },
      { 
        title: '8. Datensicherheit und Aufbewahrungsfristen', 
        paragraphs: [
          'Da wir keine Kontodatenbanken führen, existieren keine zentralen Bestände personenbezogener Profile. Die Datenübertragung erfolgt durchgehend verschlüsselt via modernem TLS/HTTPS. Server-Zugriffsprotokolle werden nur für technisch notwendige Diagnose- und Sicherheitsfenster vorgehalten.'
        ]
      },
      { 
        title: '9. Schutz Minderjähriger (COPPA)', 
        paragraphs: [
          'SciCalcX ist ein Bildungsangebot für Schüler, Studierende und Fachkräfte. Wir erfassen wissentlich keine personenbezogenen Daten von Kindern unter 13 Jahren. Sollten uns solche Daten versehentlich zugehen, bitten wir um Nachricht an support@scicalcx.com zur sofortigen Löschung.'
        ]
      },
      { 
        title: '10. Betroffenenrechte (DSGVO / GDPR)', 
        paragraphs: [
          'Nach der europäischen Datenschutz-Grundverordnung (DSGVO) stehen Ihnen Rechte auf Auskunft, Berichtigung und Löschung Ihrer Daten zu. Da SciCalcX serverseitig keine Nutzerprofile oder Formeldaten anlegt, können Sie den Großteil der Daten selbstständig durch Leeren des Browser-Caches und des localStorage von Ihrem Endgerät entfernen.',
          'Für datenschutzrechtliche Fragen erreichen Sie uns jederzeit unter support@scicalcx.com.'
        ]
      },
    ],
  },
  editorial: {
    badge: 'Akademische Standards & Redaktion',
    heading: 'Redaktionelle Integrität & Methodische Standards',
    subheading: 'Unser Anspruch an mathematische Exaktheit, Formelvalidierung und transparente Algorithmen.',
    sections: [
      {
        title: 'Verpflichtung zu akademischer Sorgfalt',
        paragraphs: [
          'Bei SciCalcX bildet mathematische und technische Verlässlichkeit die Grundlage unserer Arbeit. Unsere Rechner und Fachartikel werden so verfasst, dass sie Schülern, Studierenden der Ingenieurwissenschaften, Data Scientists und Entwicklern verlässliche Werkzeuge an die Hand geben.',
          'Wir verzichten auf ungesicherte Behauptungen, künstlich mit Schlagwörtern überfrachtete Texte oder inhaltsleere Übersetzungen. Jede Anleitung erklärt die mathematischen und informationstechnischen Grundlagen schrittweise und nachvollziehbar.'
        ]
      },
      {
        title: 'Mathematische Validierung und Benchmark-Tests',
        paragraphs: [
          'Vor der Bereitstellung neuer Rechnerfunktionen werden die numerischen Routinen anhand von Referenzdaten überprüft:',
          '• Determinanten und inverse Matrizen: Getestet an standardisierten algebraischen Testmatrizen und symbolischen Vergleichsrechnern für 2x2- und 3x3-Konfigurationen, einschließlich singulärer Grenzfälle.',
          '• Numerische Analysis: Unsere Simpson 1/3-Regel (mit N=1000 Teilintervallen) und Differenzenquotienten (h=1e-6) werden mit analytisch bekannten polynomialen, trigonometrischen und exponentiellen Integralen verglichen.',
          '• Deskriptive Statistik: Mittelwert, Median, Modalwert, Stichprobenvarianz (Bessel-Korrektur n-1) und Populationsvarianz sind gegen standardisierte statistische Referenzreihen validiert.'
        ]
      },
      {
        title: 'Transparente Offenlegung von Rechenverfahren',
        paragraphs: [
          'Wir sind überzeugt, dass Lernende verstehen müssen, wie ihre Ergebnisse entstehen. Statt Rechner als undurchsichtige Blackbox zu behandeln, dokumentiert SciCalcX die mathematischen Verfahren – sei es der Shunting-Yard-Algorithmus, die Dezimalnormalisierung oder numerische Integrationsformeln.',
          'Ebenso weisen wir offen auf systembedingte Grenzen hin, etwa Rundungsfehler binärer Fließkommazahlen, Schrittweitenbeschränkungen oder Definitionslücken.'
        ]
      },
      {
        title: 'Richtlinie zu KI-unterstützten Werkzeugen',
        paragraphs: [
          'Intern genutzte Hilfswerkzeuge oder Rechenmodelle unterliegen ausnahmslos der fachlichen Prüfung durch das Entwicklerteam von SciCalcX. Kein Code und kein Artikel wird ohne menschliche Kontrolle auf mathematische Richtigkeit, sprachliche Klarheit und didaktischen Nutzen veröffentlicht.',
          'Wir betreiben keine automatisch generierten Textfabriken. Jeder Leitfaden auf SciCalcX wird mit dem Ziel verfasst, echten didaktischen Mehrwert zu bieten.'
        ]
      },
      {
        title: 'Quellenangaben und Eigenleistung',
        paragraphs: [
          'Sämtliche Fachtexte, Programmbeispiele und Grafiken werden vom SciCalcX-Team eigenständig erstellt oder basieren auf klassischen Fachbüchern und anerkannten Open-Source-Spezifikationen. Wir achten geistiges Eigentum und halten uns an akademische Zitierregeln.'
        ]
      },
      {
        title: 'Fehlerkultur und kontinuierliche Korrekturen',
        paragraphs: [
          'Wissenschaft lebt von Überprüfung und Korrektur. Sollten Sie Ungenauigkeiten, Unstimmigkeiten oder Rechenfehler entdecken, freuen wir uns über Ihren Hinweis. Wir prüfen Rückmeldungen umgehend und stellen Korrekturen transparent bereit.',
          'Fehler können Sie direkt per E-Mail an support@scicalcx.com melden oder als Issue in unserem öffentlichen GitHub-Repository unter github.com/RishabhDev817/scicalcx einreichen.'
        ]
      }
    ]
  }
};
