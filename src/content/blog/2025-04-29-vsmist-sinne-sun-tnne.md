---
title: 'Väsäämistä sinne sun tänne'
pubDate: '2025-04-29T16:22:23.691'
author: 'Juha Halmu'
description: ''
tags: [Devaus,häsläys,opiskelu,päiväkirja]
---
Tosiaan on tullut taas mentyä sinne sun tänne niin että päässä pyörii. Olen pääosin viettänyt aikaani MB:llä olevalla linuxilla. Koska siinä toimii pelit. No, pelaamisesta siirryin kehittelemään asiota. 

Ensin aloitin ihan että nytpä Jopliniin se plugini että voisi sitä kautta päivittää tätä blogia. Lisäarvona ainakin, että voisin sitä kautta päivittää tätä blogia. Jaa taisi siinä tulla editointikin ohessa. Mitä minä sillä? No se jäi vielä vaiheeseen kun ilmeisesti Headers ei tykkää. Jäin vähän junnaamaan Clauden kanssa kun taas piti muistaa että lähestytäänpä aihetta erilailla. No, jätin asian nyt muhimaan ja menin miettimään muita lähestymistapoja. Tai oikeastaan aloin tutkimaan MCP servereitä. Tässä vaiheessa olin jo ottanut kuukauden Claudea ja laitoin myös rahnaa ihan api-käyttöä varten. Meinaan varovainen uudelleen tutustuminen Cursoriin lienisi paikallaan - ja siihenhän tosiaan se Clauden apiavainkin meni sujuvasti sisään. Ja apia käyttää myös seuraava, että tuli vastaan myös Claude Code eli pystyisi tekemään terminaalipohjaisesti tekoälyjuttuja niin että pääsisi kiinni myös tiedostoihin. Joka on kiva asia. Varsinkin jos päästään kiinnin manuaaleihin. Laitanpä tähän muistutukseksi että openain puolellekin taisi jäädä jokunen lantti käyttämättä.  

Koetin tehdä MCP serveriä ihan kokeilun vuoksi selain-Claudella ja alkoihan se Claudekin löytää aiheesta tietoa kun annoin sille manuaalia ja koodinpätkää tutkittavaksi. Katsoin siinä ohessa muutaman videon aiheesta ja kyllä aiheesta lienee jo hyvä kuva. Cursor on myös hyvä olla mukana kun on kiva nähdä koodia värillisenä, helpompi itsekin sanoa sananen, vaikka kuinka node on nyt viritetty väreille (ja toisaalta neovim herkuilla). 

Mutta joo ei tullut joplinia eikä chaplinia. Vielä ainakaan. Löysin valmiin MCP serverin nimeltä Contex7 jonka pitäisi siis hakea tuoreet manuaalitiedot tekoälyn ulottuville. Omana MCP aiheena oli sama. Cursoriinahan taasen pystyy laittamaan ja yleensä siinä jo on tuoreet manuaalit että menee uusinpien ominaisuuksien mukaan kehittelyt. Mietin nyt edelleen Elixiriä, joka on siis vähän nichempi kieli vielä verrattuna javascriptiin. Ja senpä takia sitä onkin päätynyt niin helposti tekemään eli mennyt tekoalyn mukana kun on erehtynyt kysymään jotain. 

Mielessä on toki yksi johon tarvitaan pyyttonia ja javaakin pyörimään taustalle. Mitä jos siihen yhdistäisi sitten elixiriä. Toisaalta minun pitää löytää Elixiriin vähän ei-liveview-lähestymistapaa. Ja nythän siihen saisi ympättyä pythoniakin. Kuulostaa niin kivalta, että päädyn kuitenkin tekemään sitä Go:lla koska pitää aina vältellä kivoilta tuntuvia juttua? Hah.

Mitäs muuta. Olen vähän miettinyt uusiksi että mites noita ohjelmia kannattaakaan niin olla tuolla ulkoisella kovolla. Häirtisee lisäksi että tuli virhepainallettua jotain nappia kun oli pitkät kynnet ja macos kovosta on jotenkin kaksi osiota. 

Ja sitten vähän että kun asentelen ohjelmia Brewillä niin ohjelmia on nyt kolmessa eri paikassa. Jotenkin Volume/ulkoisesenkovonnimi on mennyt nyt toiseenkin polkuun. Aina toki toiset jutut voisi ja jopa ohjelmat voisi olla ulkoisella, niin kuin Ollaman tiedostot. Sikäli tää mun toiminta jotenkin tuntuu olevan siirtymässä enemmän terminaalin puolella, että alkaa jo vähän rasittaa kaikenlaiset kilkkeet. Toisaalta olen vaan enemmän myös viritellyt terminaalin kautta eri koneita niin. Ja varmasti rasittunutkin kun yrittänyt nanolla koodailla. 

Josta tulee mieleen että pitäisi mennä virittelemään hyperlandia jossain vaiheesssa. Ei nyt. Ei siinä nyt kauan menisi sikäli. Toki voisi olla rento ja mennä tekemään sitä vaikka mun punaiseen lukutuoliin tahi sohvalle. Niin kuin rennot ihmiset.  

Johtojakin pitäisi asetella vähän dynaamisemmaksi komboksi että vois siirtyä yhden piuhan siirrolla käyttään toista konetta. Ja toisaalta niihin muihin pääsisi sitten virtuaalipöydillä tarpeen vaatiessa kiinni.  Ja voisi varmistaa jossain vaiheessa ulkopuolelta pääsy kotikoneelle. Sekin eräällä lailla jo aloitettu projekti. 

Tässähän tarvitsisi jo todoooooooooooo listaa. Siitä josta kaikki alkaa ja johon kaikki lopulta kulminoituu. 

No niin. Annoin Clauden parin kertaa pyörittää tekstiä ja tässä lopputulos joka näyttää sopivan sekvalta ja prolta (vaikea on AI:n tyhjästä nyhjäistä). Samalla tulee testattua kuinka **en** ole implementeerannut esim checkbox tyylejä blogiin - vai olenko?

# Projektisuunnitelma ja TODO-lista

## Aktiiviset kehitysprojektit (prioriteetti)
- [ ] **Joplin-plugin blogipäivityksiin**
  - [ ] Ratkaista Headers-ongelma (debuggaus Clauden kanssa)
    - *Esim. `headers.parse()` aiheuttaa virheen, kokeile `headers.processSync()` -lähestymistapaa*
  - [ ] Implementoida editointitoiminnallisuus
    - *Esim. MDEditor-komponentin käyttö tai Joplinin oman editorin laajentaminen*
  - [ ] Testata julkaisuprosessi
    - *Esim. Markdown → HTML muunnos ja API-kutsu blogiin*

- [ ] **Tekoäly-työkalujen integrointi**
  - [ ] Jatkaa Context7-MCP-serverin käyttöönottoa (manuaalitietojen haku tekoälylle)
    - *Esim. `npx context7 serve --dir ./manuals --port 3000`*
  - [ ] Hyödyntää Claude API:a tehokkaasti (API-avain jo hankittu)
    - *Esim. `curl -X POST -H "x-api-key: $CLAUDE_API_KEY" -H "Content-Type: application/json" -d '{"prompt": "Analysoi tämä koodi...", "model": "claude-v2"}'`*
  - [ ] Kokeilla Claude Code -terminaalityökalua tiedostojen käsittelyyn
    - *Esim. `claudecode "Refaktoroi tämä funktio ja lisää testit" --files=src/main.js`*

## Teknologiat ja kehityssuunnat
- [ ] **Elixir-kehitys**
  - [ ] Tutkia vaihtoehtoja LiveView-lähestymistavan ulkopuolelta
    - *Esim. Phoenix API + React/Svelte frontend tai Plug + Cowboy yhdistelmä*
  - [ ] Selvittää Python-integraation mahdollisuudet Elixiriin
    - *Esim. `erlport` tai `export` käyttö: `{:ok, py} = :python.start()`*
  - [ ] Arvioida Go vs. Elixir sopivuus projekteihin
    - *Esim. benchmark-testi rinnakkaisuus: Go goroutines vs. Elixir processes*

## Kehitysympäristön optimointi
- [ ] Uudelleentestata Cursor+Claude-yhdistelmä koodauksessa
  - *Esim. Cursor-asetukset: `"AI": { "provider": "claude", "apiKey": "..." }`*
- [ ] Määrittää selkeä strategia tiedostojen ja ohjelmien sijoitteluun
  - [ ] Ratkaista macOS-kovalevyn kaksoisosiointi-ongelma
    - *Esim. `diskutil list` ja `diskutil apfs resizeContainer`*
  - [ ] Järjestellä Brew-ohjelmien sijainnit loogisemmin
    - *Esim. `brew --prefix` ja symlinkit tai `brew bundle` Brewfile käyttöön*
- [ ] Viritellä Hyprland-työpöytäympäristö (mielellään rentona projektina)
  - *Esim. `~/.config/hypr/hyprland.conf`: `bind = $mod, SPACE, exec, rofi -show drun`*

## Infrastruktuuri ja käytettävyys
- [ ] **Työpisteiden joustavuus**
  - [ ] Toteuttaa yhden piuhan dynaaminen ratkaisu koneiden vaihtamiseen
    - *Esim. KVM-kytkin tai USB-C docking station + näppäimistökytkin*
  - [ ] Järjestää virtuaalipöytäratkaisu useiden koneiden hallintaan
    - *Esim. Synergy, Barrier tai x2vnc avulla jaettu näppäimistö ja hiiri*
  - [ ] Mahdollistaa etäpääsy kotikoneelle (jatkaa jo aloitettua projektia)
    - *Esim. SSH-avain + Tailscale tai WireGuard VPN + port forwarding*

## Resurssit ja työkalut
- [ ] Käyttää loppuun OpenAI:n puolelle jääneet varat
  - *Esim. GPT-4 API -kutsujen käyttö koodigeneroinnissa tai käännösprojekteissa*
- [ ] Implementoida kunnollinen projektinhallintajärjestelmä (tämän TODO-listan pohjalta)
  - *Esim. GitHub Projects, Trello tai Joplin + tagin käyttö: `#TODO`*
- [ ] Siirtyä Nanosta monipuolisempiin terminaalipohjaisiin editoreihin tarpeen mukaan
  - *Esim. Neovim + LSP + Treesitter: `nvim --cmd "lua require('lsp').setup()"`*


Ei vainen. Tässä on ensimmäinen versio, se oli ihan asiallinen:

# TODO-lista

## Kehitysprojektit
- [ ] Jatka Joplin-pluginin kehittämistä blogipäivityksiä varten (Headers-ongelma)
- [ ] Tutki MCP-servereitä tarkemmin
- [ ] Kokeile Context7-MCP-serveriä manuaalitietojen hakemiseen tekoälylle
- [ ] Tutki Elixir-kielen mahdollisuuksia ei-LiveView-lähestymistavalla
- [ ] Harkitse Python+Java+Elixir-yhdistelmäprojektia

## Työkalut ja ympäristöt
- [ ] Testaa uudelleen Cursor-editoria Claude API:n kanssa
- [ ] Kokeile Claude Code -terminaalityökalua
- [ ] Käytä loppuun OpenAI:n puolelle jääneet varat
- [ ] Viritä Hyprland-työpöytäympäristö
- [ ] Järjestele ohjelmat ja tiedostot loogisemmin ulkoisen kovalevyn ja pääjärjestelmän välillä
- [ ] Selvitä macOS-kovalevyn kaksi osiota -ongelma

## Käytännön järjestelyt
- [ ] Järjestele johdot dynaamisemmaksi yhdistelmäksi (yhden piuhan siirto koneiden välillä)
- [ ] Mahdollista ulkopuolelta pääsy kotikoneelle
- [ ] Harkitse todo-listan käyttöönottoa projektinhallintaan