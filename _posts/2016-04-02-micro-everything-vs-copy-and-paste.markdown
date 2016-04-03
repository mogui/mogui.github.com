---
layout: post
title: "micro.* VS copy & paste"
date: "2016-04-02 16:33:02 +0200"
excerpt: where we talk about the meaning of a music genre
music: Immortal - Against The Tide (In The Artic World)
---

Chi lavora nell'informatica e segue le sue evoluzioni ha da sempre osservato sali e scendi tipo montagne russe di paradigmi prima in voga poi abbandonati poi ritornati poi reinterpretati etc...

un po di esempi:


- **siti statici**
    - **Mega CMS**    
    *utili anche per fare la pizza*
        - **static site generators**

---

- **include driven**   
*aka #accozzagliadifileinclusiammerda*
    - **mega framework**   
      *(che ti trombano pure la sorella)*
        - **micro framework**    
        *(che madonna benedetta almeno l'auth?)*

Tra i tanti: `functional programming vs OOP`,
`MVC, MVVM, TUMAMMABUCAIOLA`, `Waterfall, Agile, Semiagile AgileWaterfoll, #dimoagilematantoèwaterfallusandoTrello` insomma non si finisce più.

Il trend del momento è `micro-tutto`, o meglio `µ-tutto` che è più cool.    
Per lo più è un bene, si è visto il fiorire di diversi microframework per sviluppare applicazioni web che sono meravigliosi, da **Sinatra** a **Flask** e **Bottle**, addirittura PHP ne ha molti.   
Anche architetturalemnte si sta diffondendo questa filosofia dei **microservices** che personalmente apprezzo molto.   

Dov'è il problema?

Tutti gli sviluppatori (*quelli che non sono #scimmiedacodice*) quando esce qualcosa di nuovo e diventa di trend vogliono assolutamente provarlo, applicarlo a tutti i costi anche in contesti dove ha poco senso. Questo fa nascere mille progettini che riproducono la nuova tecnologia o la applicano ad altri contesti, a tutti i contesti, ci fanno cose che boh *sinatra like API REST for human in R*.   
In sostanza le cose ci sfuggono di mano, non ci ricordiamo che ogni tecnologia *ha i suoi confini*, i suoi casi d'uso, i contesti in cui eccelle e finiamo per creare dei mostri che sono tecnicamente interessanti ma potenzialmente dannosi e sostanzialmente inutili.    

Tipo:

> "bello nodejs, asincrono event based, javascript sul server, WOW ! Cool!"

Poi quando comicni ad usarlo per qualsiasi cosa, tool da linea di comando, web app che funzionano a query sincrone sul DB e basta, quando hai la necessità di [questo](https://github.com/abbr/deasync) allora bisognerebbe farsi due domande, ma che sto avvitando le viti con il martello?

E' questo che è successo con  [left-pad](https://www.npmjs.com/package/left-pad) e npm.   
La comunità **node** ha così tanto abbracciato questo trend del `µ-tutto` che incoraggia a fare micro moduli da cui dipendere, ma micro sul serio: il suddetto modulo sono 11 righe di codice per paddare una stringa.

Io dico OK code reuse, OK modularizzazione, ma non vi sembra di avere un po' esagerato?    
Poi è proprio l'approccio che porta a utilizzare subito un modulo una libreria per qualsiasi cosa che è brutto.    
**Non era meglio un bel Copia & Incolla™** se proprio non sapevi come fare sto pad?

Lo scoppio di questa storia ha aperto discussioni anche su altri fronti, controllo delle dipendenze, quanto entità open come npm siano suscettibili a richieste enterprise, che non apro visto se ne è già parlato parecchio su internet.

Adieu

<iframe width="100%" height="315" src="https://www.youtube.com/embed/hftR89ygJn0?autoplay=1" frameborder="0" allowfullscreen></iframe>
