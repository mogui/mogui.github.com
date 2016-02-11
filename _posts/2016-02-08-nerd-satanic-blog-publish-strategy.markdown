---
layout: post
title: "Nerd Satanic blog publish strategy"
date: "2016-02-08 19:06:37"
excerpt: where we talk about HOW this posts are published
music: In Flames - Dialog With The Stars
---

Siccome sono secoli che vorrei avere un blog ed essere costante nello scrivere, la mia prima paranoia è sempre stata, invece di pensare a cosa scrivere come avrebbe senso, ad avere un modo semplice e comodo di pubblicare i post.   
Semplice nel senso senza avere mille pezzetti di software, comodo nel senso di poterlo fare più o meno da qualsiasi computer o in mobilità.

Essendo uno smanettone del cazzo wordpress bello e pronto non mi andava gran ché, volevo scrivere in markdown e non rompermi le scatole con l'hosting, quindi la scelta è ricaduta su **jekyll** che fa tanto fichetto, hipster ed è cool è facile da usare con **github pages** quindi niente hosting niente php e via e via e via...   

Però il flusso di pubblicazione di jekyll è molto rigido, scrivi -> git commit e push -> pubblica su github che fa girare jekyll. Quindi niente mobile *(si lo so, c'è qualche client)*, e solo da una macchian con git e repository configurato.   

Qualsiasi giro di pensieri alla fine mette in mezzo **Dropbox** ha troppo vantaggi gratis per lo scopo:

- sync su ogni device configurato
- molte app mobile e non si integrano *(soprattutto tante per scrivere in markdown)*
- può girare headless su un server

Quindi il piano del male, neanche troppo originale, è questo:

1. scrivo i post in markdown in una cartella Dropbox con qualsivoglia editor/device
2. un server remoto con Dropbox installato sincornizza selettivamente quella cartella (la cartella può essere l'intero sito jekyll)
3. **qualcosa** succede quando ci sono dei post nuovi
4. il *qualcosa* attiva uno script fa il commit delle modifiche e pubblica su github (oppure fa girare jekyll se è il server stesso che serve il sito)

Ora il mio grattacapo è il punto 3, quel *qualcosa*.   
Infinita letteratura internettiana di nerd che utilizzano questo originalissimo flusso al punto 3 applica sostanzialmente varianti di 2 approcci:

- uno script con cron che fa polling per le modifiche
- usare qualcosa che si accorga dei nuovi file sul server tipo `incron`, `inotify`

Watcher e polling non mi piacciono come soluzione e quindi l'idea è che quel *qualcosa* deve esser ein qualche modo azionato da un intervento umano.   
*Primo pensiero:*  
faccio un micro servizio ~REST che fa partire quest'azione, ma l'ho scartato subito pensando che mi sarei dovuto rompere le palle a metterlo in sicurezza con qualche pseudo schema di autenticazione e poi scomodissimo per invocarlo che ne so da un iPhone al netto di fare un app apposta.   
*Secondo pensiero*:   
L'idea è di usare un servizio esistente come canale ~sicuro di suo, cosa meglio di **Twitter**? potrei avere un account twitter creato appositamente con un bot appeso alle API che a dei Direct Message fatti in un determinato modo fa partire lo script di pubblicazione.  Avendo l'account chiuso e un po di accortezze la cosa è abbastannza sicura e carina.

Quindi il *qualcosa* diventa **mandare un direct message ad un account twitter**. Bello !

La nerdaggine ha poi portato a generalizzare la cosa ed a creare [twibot](http://github.com/mogui/twibot).

Le esigenze poi mi si sono complicate, ma questa è una storia per un altra puntata.

<iframe width="100%" height="315" src="https://www.youtube.com/embed/ZPPJCQAQXyo?autoplay=1" frameborder="0" allowfullscreen></iframe>
