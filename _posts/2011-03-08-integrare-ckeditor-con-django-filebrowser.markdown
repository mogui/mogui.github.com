---
author: mogui247
date: '2011-03-08 21:49:48'
layout: post
slug: integrare-ckeditor-con-django-filebrowser
title: Integrare CKeditor con django-filebrowser
published: true

tags:
- django
- python
---

[-> originally posted here](http://www.kiui.it/blog/2011/02/01/django_ckeditor/)
2012-02-01
Tra gli editor WYSIWYG in javascript più usati [CKeditor](http://ckeditor.com/) (ex FCKeditor) è uno dei più completi e ben fatti. Si integra facilmente nelle pagine includendo semplicemente un file javascript e settandone l'aspetto.

Inoltre ha una discreta [documentazione](http://docs.cksource.com/CKEditor_3.x/Developers_Guide) su come installarlo ed integrarlo nel proprio sito o CMS. Di fianco a CKeditor c'è CKFinder che è un filebrowser che permette dall'editor di caricare direttamente dal proprio computer sul server immagini e file di ogni tipo. Per farlo interagire con il server il filebrowser ha bisogno di uno script o un connettore in un linguaggio lato server per poter accedere al filesystem del server che ospita il sito.

I connettori che per ora mette a disposizione CKFinder sono soltanto per PHP, ASP, ASP.NET e Cold Fusion ... di Python neanche l'ombra...

Quindi cosa fare se vogliamo usare CKEditor in tutta la sua utilità con un file manger nella nostra applicazione Django? O si aspetta che qualcuno implementi un connettore tra CKFinder e Python, o ci si arma di pazienza e lo si scrive di proprio pugno, o si trova un'altra via.? Consigliamo di scegliere la terza.

Cercando sul web subito si trova che esiste un buon file-manager per Django: [django-filebrowser](http://code.google.com/p/django-filebrowser/) che si installa molto facilmente, e pare che sia già predisposto per integrarsi con un altro editor WYSIWYG TinyMCE. Ma CKEditor niente. Niente paura!

django-filebrowser funziona indipendentemente e seguendo le indicazioni per installarlo, avremo in django admin una nuova voce "filebrowser" per gestire l'upload di file. (meglio usare questa versione modificata di django-
filebrowser che è più scarna ed ha meno dipendenze.

Una volta installato il filebrowser dobbiamo collegarlo a ckeditor. CKEditor ce lo permette abbastanza facilmente dobbiamo solo fornirgli il link al nostro file browser aggiungendo alle configurazioni di CKEditor come viene [spiegato
nella documentazione](http://docs.cksource.com/CKEditor_3.x/Developers_Guide/File_Browser_%28Uploader%29/Custom_File_Browser.%20filebrowserBrowseUrl%20=%20%22/admin/filebrowser/browse/);

{% highlight js linenos %}
filebrowserBrowseUrl = "/admin/filebrowser/browse/";
{% endhighlight %}

E fin qui tutto semplice, ma manca di praticità perchè cliccando su "Cerca sul Server" di CKEditor viene aperto django-filebrowser ma non abbiamo nessun modo per selezionare un file e ottenere l'url nel nostro editor. Con l'aiuto di
JQuery si può ottenere elegantemente una buona soluzione (questo snippet di javascript deve essere incluso nelle pagine di django-filebrowser):

{% highlight js linenos %}
 /** questa funzione estrae il valore 'paramName' dall URL */ 
function getUrlParam(paramName) { 
	var reParam = new RegExp('(?:[\?&]|&amp;)' + paramName + '=([^&]+)', 'i') ; 
	var match = window.location.search.match(reParam) ; 
	return (match && match.length > 1) ?match[1] : '' ; 
}

$(document).ready(function() { 
	// trasformiamo tutte le textarea in oistanze di CKEditor 
	$('textarea').ckeditor();

	// estraiamo il parametro 'CKEditorFuncNum' dall'URL. 
	// l'esistenza di questo parametro ci dice se la pagina è stata chiamata da CKEditor, 
	// infatti è un parametro che rappresenta la finestra che CKEditor apre 
	// e viene appesa all'url del filebrowser che gli abbiamo impostato nelle configurazioni 
	var funcNum = getUrlParam('CKEditorFuncNum'); 
	// se il parametro esistemodifichiamo l'html delle pagine di django-filebrowser aggiungendo 
	// un nuovo link di fianco ai link che non sono link a cartelle 
	// il link che appendiamo ha una classe particolare 'ckeditor_select' che useremo dopo per legargli una funzione al click 

	if(funcNum != 0 ){ 
		// il selettore di JQuery è un po intricato ma vedendo il DOM della pagina si capisce 
		$('.result-list b:has(a:not([href*=filebrowser/browse]))').after('&nbsp;-&nbsp;<a class="ckeditor_select" href="#">insert this file</a>'); 
	}

	/* * funzione che parte al click del link che abbiamo appena aggiunto */
	$('a.ckeditor_select').click(function(){ 
		// estrae l'url del link vicino (nello specifico l'url dell'immagine che vogliamo selezionare) 
		var fileUrl = $(this).prev().children('a').attr('href'); 
		// questa riga è il modo per passare a CKeditor l url che abbiamo selezionato
		window.opener.CKEDITOR.tools.callFunction(funcNum, fileUrl);

		// chiudiamo la finestra del filebrowser window.close();

		// ritorniamo falso, il link non deve andare da nessuna parte 
		return false; 
	})
})

{% endhighlight %}

