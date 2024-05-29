export const decisionListShape = `@prefix sh:      <http://www.w3.org/ns/shacl#> .
@prefix qb:      <http://purl.org/linked-data/cube#> .
@prefix lblodBesluit:	<http://lblod.data.gift/vocabularies/besluit/> .

<https://data.vlaanderen.be/shacl/besluit-publicatie#DocumentShape>
	a sh:NodeShape ;
	sh:targetClass <http://xmlns.com/foaf/0.1/Document> ;
  	sh:property [
		sh:name "documenttype" ;
		sh:description "Type van het besluit. Concept uit een van volgende concept schemes: https://data.vlaanderen.be/id/conceptscheme/BesluitType https://data.vlaanderen.be/id/conceptscheme/BesluitDocumentType" ;
		sh:path <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> ;
		sh:minCount 1 ;
		lblodBesluit:usageNote '1'
	] ;
    sh:property [
		sh:name "publicatiedatum" ;
		sh:description "De officiële publicatiedatum van het besluit." ;
		sh:path <http://data.europa.eu/eli/ontology#date_publication> ;
		sh:datatype <http://www.w3.org/2001/XMLSchema#date> ;
		sh:maxCount 1 ;
		lblodBesluit:usageNote '2'
	] .

<https://data.vlaanderen.be/shacl/besluit-publicatie#ZittingShape>
	a sh:NodeShape ;
	sh:targetClass <http://data.vlaanderen.be/ns/besluit#Zitting> ;
  	sh:property [
		sh:name "behandelt" ;
        lblodBesluit:maturiteitsniveau "Niveau 1" ;
		sh:description "Een formeel vastgelegd agendapunt van de zitting." ;
		sh:path <http://data.vlaanderen.be/ns/besluit#behandelt> ;
		sh:class <http://data.vlaanderen.be/ns/besluit#Agendapunt> ;
		sh:minCount 1 ;
		lblodBesluit:usageNote '3'
	] ;
  sh:property [
		sh:name "start" ;
        lblodBesluit:maturiteitsniveau "Niveau 1" ;
		sh:description "Tijdstip waarop de zitting begint." ;
		sh:path <http://www.w3.org/ns/prov#startedAtTime> ;
		sh:datatype <http://www.w3.org/2001/XMLSchema#dateTime> ;
		sh:minCount 1 ;
		sh:maxCount 1 ;
		lblodBesluit:usageNote '4'
	] ;
	sh:property [
		sh:name "eind" ;
        lblodBesluit:maturiteitsniveau "Niveau 1" ;
		sh:description "Tijdstip waarop de zitting eindigt." ;
		sh:path <http://www.w3.org/ns/prov#endedAtTime> ;
		sh:datatype <http://www.w3.org/2001/XMLSchema#dateTime> ;
		sh:minCount 1 ;
		sh:maxCount 1 ;
		lblodBesluit:usageNote '5'
	] ;
	sh:property [
		sh:name "geplandeStart" ;
        lblodBesluit:maturiteitsniveau "Niveau 1" ;
		sh:description "Het tijdstip waarop de zitting gepland is om te beginnen." ;
		sh:path <http://data.vlaanderen.be/ns/besluit#geplandeStart> ;
		sh:datatype <http://www.w3.org/2001/XMLSchema#dateTime> ;
		sh:minCount 1 ;
		sh:maxCount 1 ;
		lblodBesluit:usageNote '6'
	] ;
    sh:property [
		sh:name "heeftNotulen" ;
        lblodBesluit:maturiteitsniveau "Niveau 1" ;
		sh:description "De formele notulen van de zitting." ;
		sh:path <http://data.vlaanderen.be/ns/besluit#heeftNotulen> ;
		sh:class <http://xmlns.com/foaf/0.1/Document> ;
        sh:minCount 0 ;
		sh:maxCount 1 ;
		lblodBesluit:usageNote '7'
	] ;
    sh:property [
		sh:name "heeftAgenda" ;
		sh:description "De formele notulen van de zitting." ;
		sh:path <http://data.vlaanderen.be/ns/besluit#heeftAgenda> ;
		sh:class <http://xmlns.com/foaf/0.1/Document> ;
        sh:minCount 0 ;
		sh:maxCount 1 ;
		lblodBesluit:usageNote '8'
	] ;
    sh:property [
		sh:name "heeftUittreksel" ;
		sh:description "De formele notulen van de zitting." ;
		sh:path <http://data.vlaanderen.be/ns/besluit#heeftUittreksel> ;
		sh:class <http://xmlns.com/foaf/0.1/Document> ;
        sh:minCount 0 ;
		lblodBesluit:usageNote '9'
	] ;
     sh:property [
		sh:name "heeftBesluitenlijst" ;
		sh:description "De formele notulen van de zitting." ;
		sh:path <http://data.vlaanderen.be/ns/besluit#heeftBesluitenlijst> ;
		sh:class <http://xmlns.com/foaf/0.1/Document> ;
        sh:minCount 0 ;
		sh:maxCount 1 ;
		lblodBesluit:usageNote '1'
	] ;
  	sh:property [
		sh:name "isGehoudenDoor" ;
        lblodBesluit:maturiteitsniveau "Niveau 1" ;
		sh:description "Duidt aan door welk orgaan de zitting is gehouden." ;
		sh:path <http://data.vlaanderen.be/ns/besluit#isGehoudenDoor> ;
		sh:class <http://data.vlaanderen.be/ns/besluit#Bestuursorgaan> ;
		sh:minCount 1 ;
		sh:maxCount 1 ;
		lblodBesluit:usageNote '11'
	] ;
    sh:property [
		sh:name "locatie" ;
        lblodBesluit:maturiteitsniveau "Niveau 1" ;
		sh:description "Locatie waar de zitting plaatsvindt. Doorgaans is dit een zaal in een gebouw." ;
		sh:path <http://www.w3.org/ns/prov#atLocation> ;
		sh:class <http://www.w3.org/ns/prov#Location> ;
        sh:minCount 0 ;
		sh:maxCount 1 ;
		lblodBesluit:usageNote '12'
	] ;
    sh:property [
        sh:name "heeftAanwezigeBijStart" ;
        lblodBesluit:maturiteitsniveau "Niveau 3" ;
        sh:description "Een mandataris (van het bestuursorsgaan die de zitting hield) die aanwezig was bij de start van de zitting." ;
        sh:path <http://data.vlaanderen.be/ns/besluit#heeftAanwezigeBijStart> ;
        sh:class <http://data.vlaanderen.be/ns/mandaat#Mandataris> ;
        sh:minCount 0 ;
		lblodBesluit:usageNote '13'
    ] ;
    sh:property [
        sh:name "heeftAfwezigeBijStart" ;
        sh:description "Een mandataris (van het bestuursorsgaan die de zitting hield) die afwezig was bij de start van de zitting." ;
        sh:path <http://mu.semte.ch/vocabularies/ext/heeftAfwezigeBijStart> ;
        sh:class <http://data.vlaanderen.be/ns/mandaat#Mandataris> ;
        sh:minCount 0 ;
		lblodBesluit:usageNote '44'
    ] ;
    sh:property [
        sh:name "heeftVoorzitter" ;
        lblodBesluit:maturiteitsniveau "Niveau 3" ;
        sh:description "De mandataris die de rol als voorzitter heeft gedurende de zitting." ;
        sh:path <http://data.vlaanderen.be/ns/besluit#heeftVoorzitter> ;
        sh:class <http://data.vlaanderen.be/ns/mandaat#Mandataris> ;
        sh:minCount 1 ;
        sh:maxCount 1 ;
		lblodBesluit:usageNote '14'
    ] ;
    sh:property [
        sh:name "heeftSecretaris" ;
        lblodBesluit:maturiteitsniveau "Niveau 3" ;
        sh:description "De mandataris die de rol van secretaris heeft gedurende de zitting." ;
        sh:path <http://data.vlaanderen.be/ns/besluit#heeftSecretaris> ;
        sh:class <http://data.lblod.info/vocabularies/leidinggevenden/Functionaris> ;
        sh:minCount 1 ;
        sh:maxCount 1 ;
		lblodBesluit:usageNote '15'
    ] ;
  	sh:closed false .
<https://data.vlaanderen.be/shacl/besluit-publicatie#AgendapuntShape>
	a sh:NodeShape ;
	sh:targetClass <http://data.vlaanderen.be/ns/besluit#Agendapunt> ;
	sh:property [
		sh:name "aangebrachtNa" ;
        lblodBesluit:maturiteitsniveau "Niveau 1" ;
		sh:description "Het agendapunt dat op de agenda direct dit agendapunt voorafging." ;
		sh:path <http://data.vlaanderen.be/ns/besluit#aangebrachtNa> ;
		sh:class <http://data.vlaanderen.be/ns/besluit#Agendapunt> ;
        sh:minCount 0 ;
		sh:maxCount 1 ;
		lblodBesluit:usageNote '16'
	] ;
	sh:property [
		sh:name "heeftOntwerpbesluit" ;
		sh:description "Een (mogelijks nog aan te vullen of aan te passen) ontwerp voor het besluit dat uit dit agendapunt zou voortkomen." ;
		sh:path <http://data.vlaanderen.be/ns/besluit#heeftOntwerpbesluit> ;
		sh:class <http://xmlns.com/foaf/0.1/Document> ;
		lblodBesluit:usageNote '42'
	] ;
	sh:property [
		sh:name "refereertAan" ;
		sh:description "Een ander agendapunt waarnaar verwezen wordt vanuit dit agendapunt." ;
		sh:path <http://purl.org/dc/terms/references> ;
		sh:class <http://data.vlaanderen.be/ns/besluit#Agendapunt> ;
		lblodBesluit:usageNote '43'
	] ;
	sh:property [
		sh:name "beschrijving" ;
        lblodBesluit:maturiteitsniveau "Niveau 1" ;
		sh:description "Korte beschrijving van het agendapunt." ;
		sh:path <http://purl.org/dc/terms/description> ;
		sh:datatype <http://www.w3.org/2001/XMLSchema#string> ;
        sh:minCount 0 ;
		sh:maxCount 1 ;
		lblodBesluit:usageNote '17'
	] ;
	sh:property [
		sh:name "geplandOpenbaar" ;
        lblodBesluit:maturiteitsniveau "Niveau 1" ;
		sh:description "Geeft aan of het agendapunt al dan niet bedoeld is om openbaar te bespreken." ;
		sh:path <http://data.vlaanderen.be/ns/besluit#geplandOpenbaar> ;
		sh:datatype <http://www.w3.org/2001/XMLSchema#boolean> ;
		sh:minCount 1 ;
		sh:maxCount 1 ;
		lblodBesluit:usageNote '18'
	] ;
	sh:property [
		sh:name "titel" ;
        lblodBesluit:maturiteitsniveau "Niveau 1" ;
		sh:description "De naam van het agendapunt." ;
		sh:path <http://purl.org/dc/terms/title> ;
		sh:datatype <http://www.w3.org/2001/XMLSchema#string> ;
		sh:minCount 1 ;
		sh:maxCount 1 ;
		lblodBesluit:usageNote '20'
	] ;
  sh:property [
		sh:name "type" ;
		sh:description "Type van het agendapunt." ;
		sh:path <http://data.vlaanderen.be/ns/besluit#Agendapunt.type> ;
		sh:class <http://www.w3.org/2004/02/skos/core#Concept> ;
		sh:minCount 1 ;
		lblodBesluit:usageNote '21'
	] ;
	sh:closed false .
<https://data.vlaanderen.be/shacl/besluit-publicatie#BehandelingVanAgendapuntShape>
	a sh:NodeShape ;
	sh:targetClass <http://data.vlaanderen.be/ns/besluit#BehandelingVanAgendapunt> ;
	sh:property [
		sh:name "heeftStemming" ;
        lblodBesluit:maturiteitsniveau "Niveau 1" ;
		sh:description "Een stemming die plaatsvond tijdens de behandeling van het agendapunt." ;
		sh:path <http://data.vlaanderen.be/ns/besluit#heeftStemming> ;
		sh:class <http://data.vlaanderen.be/ns/besluit#Stemming> ;
        sh:minCount 0 ;
		lblodBesluit:usageNote '22'
	] ;
	sh:closed false .
<https://data.vlaanderen.be/shacl/besluit-publicatie#BesluitShape>
	a sh:NodeShape ;
	sh:targetClass <http://data.vlaanderen.be/ns/besluit#Besluit> ;
	sh:property [
		sh:name "beschrijving" ;
        lblodBesluit:maturiteitsniveau "Niveau 1" ;
		sh:description "Een beknopte beschrijving van het besluit." ;
		sh:path <http://data.europa.eu/eli/ontology#description> ;
		sh:datatype <http://www.w3.org/2001/XMLSchema#string> ;
        sh:minCount 0 ;
		sh:maxCount 1 ;
		lblodBesluit:usageNote '23'
	] ;
    sh:property [
		sh:name "volgtUit" ;
        lblodBesluit:maturiteitsniveau "Bonusniveau" ;
		sh:description "De behandeling van het agendapunt die tot dit besluit heeft geleid." ;
		sh:path <http://www.w3.org/ns/prov#wasGeneratedBy> ;
		sh:class <http://data.vlaanderen.be/ns/besluit#BehandelingVanAgendapunt> ;
		sh:minCount 1 ;
		sh:maxCount 1 ;
		lblodBesluit:usageNote '24'
	] ;
	sh:property [
		sh:name "citeeropschrift" ;
        lblodBesluit:maturiteitsniveau "Niveau 3" ;
		sh:description "De beknopte titel of officiële korte naam van een decreet, wet, besluit... Deze wordt officieel vastgelegd. Deze benaming wordt in de praktijk gebruikt om naar de rechtsgrond te verwijzen." ;
		sh:path <http://data.europa.eu/eli/ontology#title_short> ;
		sh:datatype <http://www.w3.org/2001/XMLSchema#string> ;
        sh:minCount 0 ;
		sh:maxCount 1 ;
		lblodBesluit:usageNote '25'
	] ;
    sh:property [
		sh:name "titel" ;
        lblodBesluit:maturiteitsniveau "Niveau 1" ;
		sh:description "Titel van de legale verschijningsvorm." ;
		sh:path <http://data.europa.eu/eli/ontology#title> ;
		sh:datatype <http://www.w3.org/2001/XMLSchema#string> ;
		sh:minCount 1 ;
		lblodBesluit:usageNote '26'
	] ;
	sh:property [
		sh:name "taal" ;
        lblodBesluit:maturiteitsniveau "Niveau 1" ;
		sh:description "De taal van de verschijningsvorm." ;
		sh:path <http://data.europa.eu/eli/ontology#language> ;
		sh:class <http://www.w3.org/2004/02/skos/core#Concept> ;
		sh:minCount 1 ;
		sh:maxCount 1 ;
		qb:codeList <http://publications.europa.eu/mdr/authority/language/index.html> ;
		lblodBesluit:usageNote '27'
	] ;
	sh:property [
		sh:name "publicatiedatum" ;
        lblodBesluit:maturiteitsniveau "Bonusniveau" ;
		sh:description "De officiële publicatiedatum van het besluit." ;
		sh:path <http://data.europa.eu/eli/ontology#date_publication> ;
		sh:datatype <http://www.w3.org/2001/XMLSchema#date> ;
        sh:minCount 0 ;
		sh:maxCount 1 ;
		lblodBesluit:usageNote '28'
	] ;
    sh:property [
		sh:name "buitenwerkingtreding" ;
		sh:description "De laatste dag waarop de regelgeving nog van kracht is." ;
		sh:path <http://data.europa.eu/eli/ontology#date_no_longer_in_force> ;
		sh:datatype <http://www.w3.org/2001/XMLSchema#date> ;
        sh:minCount 0 ;
		sh:maxCount 1 ;
		lblodBesluit:usageNote '29'
	] ;
	sh:property [
		sh:name "inwerkingtreding" ;
		sh:description "De datum waarop de regelgeving van kracht wordt." ;
		sh:path <http://data.europa.eu/eli/ontology#first_date_entry_in_force> ;
		sh:datatype <http://www.w3.org/2001/XMLSchema#date> ;
		sh:minCount 0 ;
		sh:maxCount 1 ;
		lblodBesluit:usageNote '30'
	] ;
	sh:closed false .
<https://data.vlaanderen.be/shacl/besluit-publicatie#StemmingShape>
 	a sh:NodeShape ;
 	sh:targetClass <http://data.vlaanderen.be/ns/besluit#Stemming> ;
 	sh:property [
 		sh:name "gevolg" ;
        lblodBesluit:maturiteitsniveau "Niveau 3" ;
 		sh:description "Het gevolg van de stemming." ;
 		sh:path <http://data.vlaanderen.be/ns/besluit#gevolg> ;
# 		sh:datatype <http://www.w3.org/1999/02/22-rdf-syntax-ns#langString> ; # see https://github.com/rdfjs/N3.js/issues/252
 		sh:minCount 1 ;
 		sh:maxCount 1 ;
		lblodBesluit:usageNote '31'
 	] ;
	sh:property [
 		sh:name "onderwerp" ;
        lblodBesluit:maturiteitsniveau "Niveau 1" ;
 		sh:description "De beschrijving van het onderwerp waarover de stemming gaat." ;
 		sh:path <http://data.vlaanderen.be/ns/besluit#onderwerp> ;
# 		sh:datatype <http://www.w3.org/1999/02/22-rdf-syntax-ns#langString> ; see https://github.com/rdfjs/N3.js/issues/252
 		sh:minCount 1 ;
 		sh:maxCount 1 ;
		lblodBesluit:usageNote '32'
 	] ;
 	sh:closed false .

<https://data.vlaanderen.be/shacl/mandatendatabank#Bestuursorgaan(inbestuursperiode)Shape>
	a sh:NodeShape ;
	sh:targetClass <http://data.vlaanderen.be/ns/besluit#Bestuursorgaan> ;
	sh:property [
		sh:name "isTijdspecialisatieVan" ;
		sh:description "Duidt de bronentiteit aan waarvan deze entiteit een tijdsgebonden specialisatie is. De specialisatie stelt de bron voor gedurende een bepaalde periode." ;
		sh:path [ sh:alternativePath ( <https://data.vlaanderen.be/ns/generiek#isTijdspecialisatieVan> <https://data.vlaanderen.be/ns/mandaat#isTijdspecialisatieVan> ) ] ;
		sh:class <http://data.vlaanderen.be/ns/besluit#Bestuursorgaan> ;
		sh:minCount 1 ;
		sh:maxCount 1 ;
		lblodBesluit:usageNote '33'
	] ;
	sh:closed false .

<https://data.vlaanderen.be/shacl/besluit-publicatie#BestuursorgaanShape>
	a sh:NodeShape ;
	sh:targetClass <http://data.vlaanderen.be/ns/besluit#Bestuursorgaan> ;
	sh:property [
		sh:name "classificatie" ;
		lblodBesluit:maturiteitsniveau "Bonusniveau" ;
		sh:description "Het type bestuursorgaan." ;
		sh:path <http://www.w3.org/ns/org#classification> ;
		sh:class <http://www.w3.org/2004/02/skos/core#Concept> ;
		sh:minCount 1 ;
		sh:maxCount 1 ;
		lblodBesluit:usageNote '34'
	] ;
	sh:property [
		sh:name "naam" ;
		lblodBesluit:maturiteitsniveau "Bonusniveau" ;
		sh:description "Naam van de bestuursorgaan." ;
		sh:path <http://www.w3.org/2004/02/skos/core#prefLabel> ;
		sh:datatype <http://www.w3.org/2001/XMLSchema#string> ;
		sh:minCount 1 ;
		sh:maxCount 1 ;
		lblodBesluit:usageNote '35'
	] ;
	sh:property [
		sh:name "bestuurt" ;
		lblodBesluit:maturiteitsniveau "Bonusniveau" ;
		sh:description "De bestuurseenheid die door het orgaan bestuurd wordt." ;
		sh:path <http://data.vlaanderen.be/ns/besluit#bestuurt> ;
		sh:class <http://data.vlaanderen.be/ns/besluit#Bestuurseenheid> ;
		sh:minCount 1 ;
		sh:maxCount 1 ;
		lblodBesluit:usageNote '36'
	] ;
	sh:closed false .

<https://data.vlaanderen.be/shacl/besluit-publicatie#BestuurseenheidShape>
	a sh:NodeShape ;
	sh:targetClass <http://data.vlaanderen.be/ns/besluit#Bestuurseenheid> ;
	sh:property [
		sh:name "classificatie" ;
		sh:description "Classificatie van de bestuurseenheid." ;
		sh:path <http://www.w3.org/ns/org#classification> ;
		sh:class <http://www.w3.org/2004/02/skos/core#Concept> ;
		sh:minCount 1 ;
		sh:maxCount 1 ;
		lblodBesluit:usageNote '37'
	] ;
	sh:property [
		sh:name "naam" ;
		lblodBesluit:maturiteitsniveau "Bonusniveau" ;
		sh:description "Naam van de bestuurseenheid." ;
		sh:path <http://www.w3.org/2004/02/skos/core#prefLabel> ;
		sh:datatype <http://www.w3.org/2001/XMLSchema#string> ;
		sh:minCount 1 ;
		sh:maxCount 1 ;
		lblodBesluit:usageNote '38'
	] ;
	sh:property [
		sh:name "werkingsgebied" ;
		sh:description "Geografische gebied waarbinnen de bestuurseenheid bepaalde verantwoordelijkheden heeft waarbinnen het bestuurshandelingen kan stellen." ;
		sh:path <http://data.vlaanderen.be/ns/besluit#werkingsgebied> ;
		sh:class <http://www.w3.org/ns/prov#Location> ;
		sh:minCount 1 ;
		sh:maxCount 1 ;
		lblodBesluit:usageNote '39'
	] ;
	sh:closed false .

<https://data.vlaanderen.be/shacl/besluit-publicatie#WerkingsgebiedShape>
	a sh:NodeShape ;
	sh:targetClass <http://www.w3.org/ns/prov#Location> ;
	sh:property [
		sh:name "naam" ;
		lblodBesluit:maturiteitsniveau "Bonusniveau" ;
		sh:description "Naam van het werkingsgebied." ;
		sh:path <http://www.w3.org/2000/01/rdf-schema#label> ;
		sh:datatype <http://www.w3.org/2001/XMLSchema#string> ;
		sh:minCount 1 ;
		sh:maxCount 1 ;
		lblodBesluit:usageNote '40'
	] ;
	sh:property [
		sh:name "werkingsgebiedNiveau" ;
		sh:description "Niveau (gemeente, provincie, gewest...) van het gebied waarbinnen de bestuurseenheid bepaalde verantwoordelijkheden heeft waarbinnen het bestuurshandelingen kan stellen." ;
		sh:path <http://mu.semte.ch/vocabularies/ext/werkingsgebiedNiveau> ;
		sh:datatype <http://www.w3.org/2001/XMLSchema#string> ;
		sh:minCount 0 ;
		sh:maxCount 1 ;
		lblodBesluit:usageNote '41'
	] ;
	sh:closed false .`