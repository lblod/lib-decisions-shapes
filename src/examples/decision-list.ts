export const decisionListExample = `<!DOCTYPE html><html lang="nl"><head>
    <meta charset="utf-8">
    <title>Besluitenlijst van Gemeenteraad Kortenberg, zitting van 8 januari
        2024, 19:02 | Publicatie Gelinkt Notuleren</title>
    </head>
    <body>
    <div prefix="eli: http://data.europa.eu/eli/ontology# prov: http://www.w3.org/ns/prov# mandaat: http://data.vlaanderen.be/ns/mandaat# besluit: http://data.vlaanderen.be/ns/besluit# ext: http://mu.semte.ch/vocabularies/ext/ person: http://www.w3.org/ns/person# persoon: http://data.vlaanderen.be/ns/persoon# dateplugin: http://say.data.gift/manipulators/insertion/ besluittype: https://data.vlaanderen.be/id/concept/BesluitType/ dct: http://purl.org/dc/terms/ mobiliteit: https://data.vlaanderen.be/ns/mobiliteit# lblodmow: http://data.lblod.info/vocabularies/mobiliteit/">
        <!-- Zitting -->
        <div typeof="besluit:Zitting" resource="http://data.lblod.info/id/zittingen/6585961C5FFC6BB4ED446217">
            <span property="besluit:heeftBesluitenlijst" resource="http://data.lblod.info/id/lblod/besluitenlijsten/fb4ceae0-b131-11ee-ae1d-77c537c8924c"
            typeof="foaf:Document https://data.vlaanderen.be/id/concept/BesluitDocumentType/3fa67785-ffdc-4b30-8880-2b99d97b4dee" id="1"></span>
            <span property="besluit:heeftAgendalijst" resource="http://data.lblod.info/id/lblod/agendalijsten/fb4ceae0-b131-11ee-ae1d-77c537c8924c"
            typeof="foaf:Document https://data.vlaanderen.be/doc/concept/BesluitDocumentType/13fefad6-a9d6-4025-83b5-e4cbee3a8965" id="8"></span>
            <span property="besluit:heeftUittreksel" resource="http://data.lblod.info/id/lblod/uittreksels/02d9ca20-b133-11ee-ae1d-77c537c8924c"
            typeof="foaf:Document https://data.vlaanderen.be/id/concept/BesluitDocumentType/9d5bfaca-bbf2-49dd-a830-769f91a6377b" id="9"></span>
            <span property="besluit:heeftNotulen" resource="http://data.lblod.info/id/lblod/notulen/c8cee57499cab28094be7831ca6303f05ccf276e68b99b88f14233d22ee4f554"
            typeof="foaf:Document https://data.vlaanderen.be/doc/concept/BesluitDocumentType/8e791b27-7600-4577-b24e-c7c29e0eb773" id="7"></span>
            <h1>Besluitenlijst van 
                <div
                property="http://data.vlaanderen.be/ns/besluit#isGehoudenDoor"
                resource="http://data.lblod.info/id/bestuursorganen/fa8ab31cb822a4105f6aa376fb89c7de28021fc05de00ac2730bdfeb5d8c6494"
                typeof="besluit:Bestuursorgaan" id="11">Gemeenteraad Kortenberg
                    <div property="generiek:isTijdspecialisatieVan"
                    resource="http://data.lblod.info/id/bestuursorganen/2fae219ddea1dca82b2f493edd14187df83e7e2ab559ebd48aad73ae48c6157d"
                    typeof="besluit:Bestuursorgaan" id="33">
                        <span property="org:classification" resource="http://data.vlaanderen.be/id/concept/BestuursorgaanClassificatieCode/5ab0e9b8a3b2ca7c5e000005" id="34"></span>
                        <span property="skos:prefLabel" id="35">Gemeenteraad Kortenberg</span>
                        <div property="besluit:bestuurt" resource="http://data.lblod.info/id/bestuurseenheden/e580b3ee33ff28d93f803e7f70cdb1d99bf6ae9d56b0f630fd7b6837adf8cd4c" typeof="besluit:Bestuurseenheid" id="36">
                            <span property="org:classification" resource="http://data.vlaanderen.be/id/concept/BestuurseenheidClassificatieCode/5ab0e9b8a3b2ca7c5e000001" id="37"></span>
                            <span property="skos:prefLabel" content="Kortenberg" id="38"></span>
                            <div property="besluit:werkingsgebied" resource="http://data.lblod.info/id/werkingsgebieden/0d89527de8beb0b0799fb935e1f2a7c42ef4df4d9c064b709a1ddfca823b3d97" typeof="prov:Location" id="39">
                                <span property="rdfs:label" content="Kortenberg" id="40"></span>
                                <span property="http://mu.semte.ch/vocabularies/ext/werkingsgebiedNiveau" content="Gemeente" id="41"></span>
                            </div>
                        </div>
                    </div>
                </div>,
                zitting op 
                <span property="prov:startedAtTime"
                content="2024-01-08T19:02:31.586Z"
                datatype="http://www.w3.org/2001/XMLSchema#dateTime" id="4">08/01/2024
                20:02</span>
                <p>
                    Locatie:
                    <span property="prov:atLocation" datatype="xsd:string" id="12">
                        Administratief Centrum, Kortenberg
                    </span>
                </p>
            </h1> 
            <span property="http://data.vlaanderen.be/ns/besluit#geplandeStart" content="2024-01-08T19:00:31.586Z" datatype="http://www.w3.org/2001/XMLSchema#dateTime" id="6"></span>
            <span property="prov:endedAtTime" content="2024-01-08T20:35:23.748Z" datatype="http://www.w3.org/2001/XMLSchema#dateTime" id="5"></span>
            
            <!-- Zitting heeft aanwezigen bij start, voorzitter en secretaris -->
            <h2>Aanwezigen bij zitting</h2>
            <div property="ext:aanwezigenTable">
                <p> <strong>Aanwezige leden</strong> </p>
                <ul class="au-c-template-list-inline">
                    <li class="au-c-template-list-inline__item"
                        typeof="http://data.vlaanderen.be/ns/mandaat#Mandataris"
                        resource="http://data.lblod.info/id/mandatarissen/548c1b6d-21ef-4eab-b039-e6634a1950da"
                        property="besluit:heeftAanwezigeBijStart" id="13"> <span
                        resource="http://data.lblod.info/id/personen/f809a3b05e7034a59fcf0cf43516b00db1a5b44cc9a84c6f409c9ef93fc60e7f"
                        property="mandaat:isBestuurlijkeAliasVan"
                        typeof="person:Person"> <span
                        property="persoon:gebruikteVoornaam"
                        content="René">René </span> <span
                        property="foaf:familyName" content="De"
                        becker>De Becker </span> </span> (<span
                        property="org:holds" typeof="mandaat:Mandaat"
                        resource="http://data.lblod.info/id/mandaten/60fe554f46ac622d970080a0cab0d5a3f7a8c7d9304068b4f417a9d579a6c4ac"><span
                        property="org:role" typeof="skos:Concept"
                        resource="http://data.vlaanderen.be/id/concept/BestuursfunctieCode/5ab0e9b8a3b2ca7c5e000011"><span
                        property="skos:prefLabel"
                        content="Gemeenteraadslid">Gemeenteraadslid</span></span></span>)
                    </li>
                    <li class="au-c-template-list-inline__item"
                        typeof="http://data.vlaanderen.be/ns/mandaat#Mandataris"
                        resource="http://data.lblod.info/id/mandatarissen/6048766A9006E90008000405"
                        property="besluit:heeftAanwezigeBijStart"> <span
                        resource="http://data.lblod.info/id/personen/ad3cc64630b4f9db252837a9f422b5fe25f3acbc2619208bf0003f076829d873"
                        property="mandaat:isBestuurlijkeAliasVan"
                        typeof="person:Person"> <span
                        property="persoon:gebruikteVoornaam"
                        content="Walter">Walter</span> <span
                        property="foaf:familyName" content="De"
                        brouwer>De Brouwer </span> </span> (<span
                        property="org:holds" typeof="mandaat:Mandaat"
                        resource="http://data.lblod.info/id/mandaten/60fe554f46ac622d970080a0cab0d5a3f7a8c7d9304068b4f417a9d579a6c4ac"><span
                        property="org:role" typeof="skos:Concept"
                        resource="http://data.vlaanderen.be/id/concept/BestuursfunctieCode/5ab0e9b8a3b2ca7c5e000011"><span
                        property="skos:prefLabel"
                        content="Gemeenteraadslid">Gemeenteraadslid</span></span></span>)
                    </li>
                    <li class="au-c-template-list-inline__item"
                        typeof="http://data.vlaanderen.be/ns/mandaat#Mandataris"
                        resource="http://data.lblod.info/id/mandatarissen/61AF74659790B8000800029F"
                        property="besluit:heeftAanwezigeBijStart"> <span
                        resource="http://data.lblod.info/id/personen/3ab8e3b5-7218-4872-b438-92e4b07bea5e"
                        property="mandaat:isBestuurlijkeAliasVan"
                        typeof="person:Person"> <span
                        property="persoon:gebruikteVoornaam"
                        content="Carla">Carla </span> <span
                        property="foaf:familyName"
                        content="Demaertelaere">Demaertelaere
                    </span> </span> (<span property="org:holds"
                        typeof="mandaat:Mandaat"
                        resource="http://data.lblod.info/id/mandaten/60fe554f46ac622d970080a0cab0d5a3f7a8c7d9304068b4f417a9d579a6c4ac"><span
                        property="org:role" typeof="skos:Concept"
                        resource="http://data.vlaanderen.be/id/concept/BestuursfunctieCode/5ab0e9b8a3b2ca7c5e000011"><span
                        property="skos:prefLabel"
                        content="Gemeenteraadslid">Gemeenteraadslid</span></span></span>)
                    </li>
                </ul>
            </div>

            <!-- Zitting heeft afwezigen bij start -->
            <h2>Afwezigen bij zitting</h2>
            <div>
                <ul>
                    <li typeof="http://data.vlaanderen.be/ns/mandaat#Mandataris"
                    resource="http://data.lblod.info/id/mandatarissen/541ca8f4-9ddf-495e-86d1-26f2a468c3d2"
                    property="ext:heeftAfwezigeBijStart" id="44"> <span
                    resource="http://data.lblod.info/id/personen/d96be053f57e9ad1e8846c10914e9032cecf531acbf0191d451ec86ad46a6b18"
                    property="mandaat:isBestuurlijkeAliasVan"
                    typeof="person:Person"> <span
                    property="persoon:gebruikteVoornaam"
                    content="Melody">Melody</span> <span
                    property="foaf:familyName"
                    content="Debaetselier">Debaetselier </span>
                </span> (<span property="org:holds"
                typeof="mandaat:Mandaat"
                resource="http://data.lblod.info/id/mandaten/60fe554f46ac622d970080a0cab0d5a3f7a8c7d9304068b4f417a9d579a6c4ac"><span
                property="org:role" typeof="skos:Concept"
                resource="http://data.vlaanderen.be/id/concept/BestuursfunctieCode/5ab0e9b8a3b2ca7c5e000011"><span
                property="skos:prefLabel"
                content="Gemeenteraadslid">Gemeenteraadslid</span></span></span>)
            </li>
            </ul>
            </div>
            </div>

            <p>
                <strong>Voorzitter:</strong>
                <span property="besluit:heeftVoorzitter"
                typeof="http://data.vlaanderen.be/ns/mandaat#Mandataris"
                resource="http://data.lblod.info/id/mandatarissen/90526e3f-60cb-4a68-b7c3-f3452e986678" id="14">
                <span property="mandaat:isBestuurlijkeAliasVan"
                resource="http://data.lblod.info/id/personen/7e0f5343fd2762ec57e871a0f47315f8cb6f98a1a69ef11bdbaf256a54ef7d46">
                <span property="persoon:gebruikteVoornaam">Ann</span>
                <span property="foaf:familyName">Van de Casteele</span>
            </span>
            </span>
            </p>
            <p>
                <strong>Secretaris:</strong>
                <span property="besluit:heeftSecretaris"
                typeof="http://data.vlaanderen.be/ns/mandaat#Mandataris"
                resource="http://data.lblod.info/id/functionarissen/5D4945AEA3ACB60008000397" id="15">
                <span
                resource="http://data.lblod.info/id/personen/5D494598A3ACB60008000394"
                property="mandaat:isBestuurlijkeAliasVan">
                <span property="persoon:gebruikteVoornaam">Leen</span>
                <span property="foaf:familyName">Ceuppens</span>
            </span>
            </span>
            </p>

            <!-- Behandeling van Agendapunt -->
            <div resource="http://data.lblod.info/id/behandelingen-van-agendapunten/6595370F8AAC56EB1455CBD6" typeof="besluit:BehandelingVanAgendapunt">        
                <!-- Agendapunt is completely described -->
                <div property="http://purl.org/dc/terms/subject" resource="http://data.lblod.info/id/agendapunten/6595370F8AAC56EB1455CBD7" typeof="besluit:Agendapunt" id="45">
                    <span property="dc:title" content="8/2.	Aanvullende belasting op de personenbelasting voor 2024 -2025" id="20"></span> 
                    <span property="besluit:Agendapunt.type"
                        resource="http://lblod.data.gift/concepts/b122db75-fd93-4f03-b57a-2a9269289782"
                        typeof="skos:Concept" id="21"></span>
                    <span property="dct:description"
                    content="De gemeenteraad agendeert de wijziging van de aanvullende belasting op de
                    personenbelasting voor 2024 en 2025 met 7,9% waarbij de
                    grondslag ongewijzigd blijft." id="17"></span>
                    <span property="besluit:heeftOntwerpbesluit" resource="https://publicatie.gelinkt-notuleren.vlaanderen.be/Kortenberg/Gemeente/zittingen/04cc45b0-a58a-11ee-ae1d-77c537c8924c/uittreksels/030b6170-b133-11ee-ae1d-77c537c8924c" id="42"></span>
                    <span property="dct:references" resource="http://data.lblod.info/id/agendapunten/659537278AAC56EB1455CBD8" id="43"></span>
                    <span property="besluit:aangebrachtNa"
                    resource="http://data.lblod.info/id/agendapunten/659537278AAC56EB1455CBD8" id="16"></span>
                    <span property="besluit:geplandOpenbaar" datatype="xsd:boolean" content="true" id="18"></span>
                </div>
                <span about="http://data.lblod.info/id/zittingen/6585961C5FFC6BB4ED446217" property="besluit:behandelt" resource="http://data.lblod.info/id/agendapunten/6595370F8AAC56EB1455CBD7" id="3"></span>         
                <span property="besluit:gebeurtNa" resource="http://data.lblod.info/id/behandelingen-van-agendapunten/658596645FFC6BB4ED446226"></span>        
                <span property="besluit:openbaar" datatype="xsd:boolean" content="true" class="au-template-public">        </span>
                <span about="http://data.lblod.info/id/besluiten/47555f4c-ab1a-4283-9312-91b52aa63da3" property="prov:wasGeneratedBy" resource="http://data.lblod.info/id/behandelingen-van-agendapunten/6595370F8AAC56EB1455CBD6" id="24"></span>
                <div property="prov:generated" resource="http://data.lblod.info/id/besluiten/47555f4c-ab1a-4283-9312-91b52aa63da3" typeof="http://data.vlaanderen.be/ns/besluit#Besluit http://mu.semte.ch/vocabularies/ext/BesluitKlassiekeStijl https://data.vlaanderen.be/id/concept/BesluitType/e96ec8af-6480-4b32-876a-fefe5f0a3793" id="46">              
                    <h2 property="eli:title" id="26">8/2.	Aanvullende belasting op de personenbelasting voor 2024 -2025</h2>              
                    <p property="eli:description" id="23">De gemeenteraad keurde de aanvullende belasting op de personenbelasting voor 2024 en 2025 met 7,9% goed. De grondslag blijft ongewijzigd.</p> 
                    <span property="eli:language" resource="http://publications.europa.eu/resource/authority/language/NLD" typeof="skos:Concept" id="27"></span> 
                    <span property="besluit:citeeropschrift" content="Aanvullende belasting op de personenbelasting voor 2024 -2025" xsd:datatype="xsd:string" id="25"></span>
                    <span property="eli:first_date_entry_in_force" content="2024-01-08" datatype="xsd:Date" id="30"></span>
                    <span property="eli:date_no_longer_in_force" content="2025-12-31" datatype="xsd:Date" id="29"></span>
                    <span property="eli:date_publication" datatype="xsd:date" content="2024-01-12" id="28">
                </div>
                
                <h2>Stemmingen</h2>            
                <div typeof="http://data.vlaanderen.be/ns/besluit#Stemming" resource="http://data.lblod.info/id/stemmingen/65A10D973FDCA37A9CE54C01" property="besluit:heeftStemming" id="22">
                    <p>
                        <strong>Onderwerp:</strong> 
                        <span property="besluit:onderwerp" id="32">De gemeenteraad keurde de opcentiemen op onroerende voorheffing voor 2024 en 2025 met 598 opcentiemen goed. De grondslag blijft ongewijzigd.</span>
                        ,              </p>             
                    <p>                
                        <strong>Gevolg:</strong>               
                        <span property="besluit:gevolg" id="31">Goedgekeurd</span>
                    </p>
                </div>
            </div>
                
            <div class="au-u-margin-top">
                <p class="au-c-heading au-c-heading--5 au-u-margin-bottom-tiny">
                    Besluitenlijst goedgekeurd door
                    
                    <!-- Zitting isGehoudenDoor-->
                    <span property="eli:passed_by"
                    resource="http://data.lblod.info/id/bestuursorganen/fa8ab31cb822a4105f6aa376fb89c7de28021fc05de00ac2730bdfeb5d8c6494"
                    typeof="besluit:Bestuursorgaan">
                        <span property="mandaat:isTijdspecialisatieVan"
                        resource="http://data.lblod.info/id/bestuursorganen/2fae219ddea1dca82b2f493edd14187df83e7e2ab559ebd48aad73ae48c6157d"
                        typeof="besluit:Bestuursorgaan">
                            <span property="skos:prefLabel">Gemeenteraad Kortenberg</span>
                        </span>
                    </span>
                </p>
                    
                <p class="au-c-heading au-c-heading--5">
                    Datum publicatie:
                    
                    <span property="eli:date_publication" datatype="xsd:date"
                    content="2024-01-12" id="2">
                    
                    12 januari 2024
                    
                    </span>
                </p>
            </div>
        </div>
    </div>
</body>
</html>`