/////////////////Celokupna ponuda

let celaPonuda = [
  {
    "naslov": "Dior Sauvage",
    "zapremina": "60ml",
    "pol": "Muški",
    "nota": "aromatični fougere",
    "cena": "8290RSD",
    "godinaProizvodnje": "2015",
    "tip": "Toaletna voda",
    "slika": {
      "src": "img/dior.jpg",
      "alt": "Dior Sauvage"
    }
  },
  {
    "naslov": "Tom Ford Oud Wood",
    "zapremina": "30ml",
    "pol": "Muški",
    "nota": "orijentalni drveni",
    "cena": "16900RSD",
    "godinaProizvodnje": "2007",
    "tip": "Parfemska voda",
    "slika": {
      "src": "img/tf.jpg",
      "alt": "Oud Wood"
    }
  },
  {
    "naslov": "Narciso Rodriguez",
    "zapremina": "50ml",
    "pol": "Ženski",
    "nota": "ruža",
    "cena": "10590RSD",
    "godinaProizvodnje": "2003",
    "tip": "Parfemska voda",
    "slika": {
      "src": "img/narciso.jpg",
      "alt": "Narciso Rodriguez"
    }
  },
  {
    "naslov": "Paco Rabanne 1 Million",
    "zapremina": "50ml",
    "pol": "Muški",
    "nota": "kožni",
    "cena": "6430RSD",
    "godinaProizvodnje": "2009",
    "tip": "Parfemska voda",
    "slika": {
      "src": "img/milion.jpg",
      "alt": "1 Million"
    }
  },
  {
    "naslov": "PRADA Candy Woman",
    "zapremina": "80ml",
    "pol": "Ženski",
    "nota": "mošus, puderaste note",
    "cena": "13590RSD",
    "godinaProizvodnje": "2011",
    "tip": "Parfemska voda",
    "slika": {
      "src": "img/candy.jpg",
      "alt": "Prada Candy"
    }
  },
  {
    "naslov": "Bleu de Chanel",
    "zapremina": "50ml",
    "pol": "Muški",
    "nota": "drveni aromatični",
    "cena": "10290RSD",
    "godinaProizvodnje": "2014",
    "tip": "Parfemska voda",
    "slika": {
      "src": "img/chanel.jpg",
      "alt": "Bleu de Chanel"
    }
  },
  {
    "naslov": "Calvin Klein CK One",
    "zapremina": "100ml",
    "pol": "Muški",
    "nota": "citrusni aromatični",
    "cena": "3560RSD",
    "godinaProizvodnje": "1994",
    "tip": "Toaletna voda",
    "slika": {
      "src": "img/ck.jpg",
      "alt": "CK One"
    }
  },
  {
    "naslov": "Escada Especially Woman",
    "zapremina": "50ml",
    "pol": "Ženski",
    "nota": "ruža, jilang-jilang, vodene note",
    "cena": "10190RSD",
    "godinaProizvodnje": "2011",
    "tip": "Parfemska voda",
    "slika": {
      "src": "img/escada.jpg",
      "alt": "Especially Woman"
    }
  },
  {
    "naslov": "Sisley Soir D'orient",
    "zapremina": "100ml",
    "pol": "Ženski",
    "nota": "turska ruža, crni biber",
    "cena": "29790RSD",
    "godinaProizvodnje": "2015",
    "tip": "Parfemska voda",
    "slika": {
      "src": "img/sisli.jpg",
      "alt": "Soir D'orient"
    }
  },
  {
    "naslov": "Creed Aventus",
    "zapremina": "50ml",
    "pol": "Muški",
    "nota": "voćni chypre",
    "cena": "20400RSD",
    "godinaProizvodnje": "2010",
    "tip": "Parfemska voda",
    "slika": {
      "src": "img/creed.jpg",
      "alt": "Creed Aventus"
    }
  },
  {
    "naslov": "SENSAI The Silk",
    "zapremina": "50ml",
    "pol": "Ženski",
    "nota": "bergamot, božur",
    "cena": "15590RSD",
    "godinaProizvodnje": "2015",
    "tip": "Parfemska voda",
    "slika": {
      "src": "img/sensai.jpg",
      "alt": "The Silk"
    }
  },
  {
    "naslov": "CARTIER La Panthere",
    "zapremina": "50ml",
    "pol": "Ženski",
    "nota": "jagoda, gardenija",
    "cena": "12690RSD",
    "godinaProizvodnje": "2020",
    "tip": "Parfemska voda",
    "slika": {
      "src": "img/kartier.jpg",
      "alt": "La Panthere"
    }
  },
  {
    "naslov": "De Lune Cartier",
    "zapremina": "125ml",
    "pol": "Ženski",
    "nota": "cvetni drveni mošusni",
    "cena": "7090RSD",
    "godinaProizvodnje": "2011",
    "tip": "Toaletna voda",
    "slika": {
      "src": "img/luna.jpg",
      "alt": "De Lune"
    }
  },
  {
    "naslov": "Euphoria Calvin Klein",
    "zapremina": "100ml",
    "pol": "Ženski",
    "nota": "orijentalni cvetni",
    "cena": "5970RSD",
    "godinaProizvodnje": "2005",
    "tip": "Parfemska voda",
    "slika": {
      "src": "img/euforija.jpg",
      "alt": "Euphoria"
    }
  },
  {
    "naslov": "Invictus Paco Rabanne",
    "zapremina": "100ml",
    "pol": "Muški",
    "nota": "grejpfrut, morske note",
    "cena": "6090RSD",
    "godinaProizvodnje": "2013",
    "tip": "Toaletna voda",
    "slika": {
      "src": "img/invictus.jpg",
      "alt": "Invictus"
    }
  },
  {
    "naslov": "Blue Jeans Versace",
    "zapremina": "75ml",
    "pol": "Muški",
    "nota": "kleka, citrusi, bosiljak, anis",
    "cena": "3690RSD",
    "godinaProizvodnje": "1994",
    "tip": "Toaletna voda",
    "slika": {
      "src": "img/dyins.jpg",
      "alt": "Blue Jeans"
    }
  }
]
//ZA IZDVOJENE
var parfemNaslov = [
  "Sisley Soir D'orient",
  "Creed Aventus",
  "Tom Ford Oud Wood",
  "Escada Especially Woman",
  "Calvin Klein CK One",
  "Paco Rabanne 1 Million",
];
var parfemSlika = [
  "sisli.jpg",
  "creed.jpg",
  "tf.jpg",
  "escada.jpg",
  "ck.jpg",
  "milion.jpg",
];
var kratakOpis = [
  "<li>Brend: Sisley</li><li>Zapremina: 100ml</li><li>Tip: Parfemska voda</li><li>Mirisna nota: turska ruža</li><li>Godina lansiranja: 2015</li><li>Pol: Ženski</li><li><b>Cena: 29790 RSD</b></li>",
  "<li>Brend: Creed</li><li>Zapremina: 50ml</li><li>Tip: Parfemska voda</li><li>Mirisna nota: voćni chypre</li><li>Godina lansiranja: 2010 </li><li>Pol: Muški </li><li><b>Cena: 20400 RSD</b></li>",
  "<li>Brend: Tom Ford</li><li>Zapremina: 30ml</li><li>Tip: Parfemska voda</li><li>Mirisna nota: orijentalni drveni </li><li>Godina lansiranja: 2007 </li><li>Pol: Unisex </li><li><b>Cena: 16900 RSD </b></li>",
  "<li>Brend: Escada </li><li>Zapremina: 50ml</li><li>Tip: Parfemska voda</li><li>Mirisna nota: vodene note </li><li>Godina lansiranja: 2011 </li><li>Pol: Ženski </li><li><b>Cena: 10190 RSD </b></li>",
  "<li>Brend: Calvin Klein </li><li>Zapremina: 100ml</li><li>Tip: Toaletna voda </li><li>Mirisna nota: 	citrusni aromatični </li><li>Godina lansiranja: 1994 </li><li>Pol: Unisex </li><li><b>Cena: 3560 RSD </b></li>",
  "<li>Brend: Paco Rabanne </li><li>Zapremina: 50ml </li><li>Tip: Parfemsa voda </li><li>Mirisna nota: kožni </li><li>Godina lansiranja: 2009 </li><li>Pol: Muški </li><li><b>Cena: 6430 RSD </b></li>",
];
var opis = [
  "Parfem koji nas obavija prepoznatljivom, skoro magičnom atmosferom orijentalne palate. Alcazar dvorac u Sevilji se prikazuje u novom svetlu, ukazujući na miris obavijen velom tajne koja slavi divnu ženstvenost. Kompozicija je zagonetna koliko i očaravajuće senzualna. Blistavo očaravajućim gornjim notama zavodi cvetnim srcem ostavljajući delikatno drvenu toplinu na svom putu.",
  "Creed Aventus - chypre voćni miris za muškarce. Mirisna kreacija parfimera Olivier Creed, koja slavi snagu, moć, viziju i uspeh. Inspirisan je dramatičnim životom vladara Napoleona. Otvara se notama ananasa, bergamota, crne ribizle i jabuke. U srži su pačuli, suva breza, ruža i marokanski jasmin. Završava se asortimanom vanile, mošusa, hrastove mahovine i ambre. Izazovan, muževan i optimističan miris.",
  "Oud Wood od Tom Ford-a je luksuzan, prefinjen, atraktivan i očaravajući parfem namenjen muškarcima i ženama. Oud Wood parfem spada u izuzetno luksuznu Private Blend kolekciju, a otvara se notama palisandera, kardamona i kineskog bibera. U srcu ovog elegantnog, šarmantnog, sofisticiranog i čarobnog parfema su agar, sandalovina i vetiver, dok se osnova parfema sastoji od mešavine nota tonke, vanile i ambera.",
  "Especially Elixir od Escada-e je ženstven, sofisticiran, elegantan i očaravajući parfem namenjen savremenim ženama koje zrače samopouzdanjem. Especially Elixir parfem je intenzivnija varijanta parfema Escada Especially iz 2011. godine, a otvara se notama grejpfruta, kruške i ambrete.",
  "CK One od Calvin Klein-a je osvežavajući, prijatan, blistav i dopadljiv parfem namenjen muškarcim i ženama. CK One parfem se otvara svežim notama ananasa, mandarine, papaje, bergamota, kardamona i limuna. U srcu ovog šarmantnog, opuštajućeg i privlačnog parfema su muškatni orah, ljubičica, koren irisa, jasmin, đurđevak i ruža, dok se osnova parfema sastoji od mešavine nota sandalovine, ambera, mošusa, kedra i mahovine. Parfem Calvin Klein CK One je napravljen u veoma lepoj minimalističkoj staklenoj bočici.",
  "1 Million Parfum od Paco Rabanne-a je luksuzan, elegantan, prefinjen i neodoljiv muški parfem. 1 Million Parfum parfem se otvara notama tuberoze, monoi ulja i sunca. U srcu ovog privlačnog, otmenog, atraktivnog i zavodljivog parfema su labdanum, koža i kašmeran, dok se osnova parfema sastoji od mešavina nota ambergisa, soli i bora. Parfem Paco Rabanne 1 Million Parfum su kreirali parfimeri Quentin Bisch i Christophe Raynaud.",
];
  //DINAMICKI ISPIS HEADERA
  var header = document.getElementById("header");
  var linkoviLeft = ["Izdvojeno", "Parfemi"];
  var linkoviRight = ["Kontakt", "O Autoru"];
  var linkovi = ["#izdvajamo", "#h1celokupna", "#kontakt", "#oautoru"];

  //DINAMICKO ISPISIVANJE IZDVOJENOG IZ PONUDE
  var izdvajamo = document.getElementById("izdvajamo");
  function mediaquery(x) {
    if (x.matches) {
      header.innerHTML = "";
      for (let br = 0; br < linkoviLeft.length; br++) {
        header.innerHTML +=
          "<a href='" + linkovi[br] + "'>" + linkoviLeft[br] + "</a>";
      }
      for (let br = 0; br < linkoviRight.length; br++) {
        header.innerHTML +=
          "<a href='" + linkovi[br + 2] + "'>" + linkoviRight[br] + "</a>";
      }
      izdvajamo.innerHTML = "<h3>Parfemi</h3>";
      for (let i = 0; i < kratakOpis.length; i++) {
        //LEFT
        if (i % 2) {
          izdvajamo.innerHTML +=
            "<div class='novi boja'><h4 class='naslovi'>" +
            parfemNaslov[i] +
            "</h4><ul class='izdvajamo'>" +
            kratakOpis[i] +
            "</ul><p class='tekstovi'>" +
            opis[i] +
            "</p><a width='60%' data-magnify='gallery' data-caption='" +
            parfemNaslov[i] +
            "' href='img/" +
            parfemSlika[i] +
            "'><img width='50%' src='img/" +
            parfemSlika[i] +
            "' alt='" +
            parfemNaslov[i] +
            "'></a> </div>";
        }
        else {
          izdvajamo.innerHTML +=
            "<div class='novi'><h4 class='naslovi'>" +
            parfemNaslov[i] +
            "</h4><ul class='izdvajamo'>" +
            kratakOpis[i] +
            "</ul><p class='tekstovi'>" +
            opis[i] +
            "</p><a width='60%' data-magnify='gallery' data-caption='" +
            parfemNaslov[i] +
            "' href='img/" +
            parfemSlika[i] +
            "'><img width='50%' src='img/" +
            parfemSlika[i] +
            "' alt='" +
            parfemNaslov[i] +
            "'></a> </div>";
        }
      }
    } else {
      header.innerHTML = "";
      for (let br = 0; br < linkoviLeft.length; br++) {
        header.innerHTML +=
          "<a href='" + linkovi[br] + "'>" + linkoviLeft[br] + "</a>";
      }
      header.innerHTML += "<img src='img/logo.png' alt='logo' />";
      for (let br = 0; br < linkoviRight.length; br++) {
        header.innerHTML +=
          "<a href='" + linkovi[br + 2] + "'>" + linkoviRight[br] + "</a>";
      }
      izdvajamo.innerHTML = "<h3>Izdvajamo iz ponude</h3>";
      for (let i = 0; i < kratakOpis.length; i += 2) {
        //LEFT
        izdvajamo.innerHTML +=
          "<div class='isti'><a data-magnify='gallery' data-caption='" +
          parfemNaslov[i] +
          "' href='img/" +
          parfemSlika[i] +
          "'><img class='left' src='img/" +
          parfemSlika[i] +
          "' alt='" +
          parfemNaslov +
          "' /></a><div class='right desnitekst'><h4>" +
          parfemNaslov[i] +
          "</h4><ul class='left'>" +
          kratakOpis[i] +
          "</ul><div class='tekstovi right'><p>" +
          opis[i] +
          "</p></div><div class='cleaner'></div></div><div class='cleaner'></div></div>";
        //RIGHT
        if (i == kratakOpis.length - 1) break;
        izdvajamo.innerHTML +=
          "<div class='isti boja'><div class='left levitekst'><h4>" +
          parfemNaslov[i + 1] +
          "</h4><ul class='left'>" +
          kratakOpis[i + 1] +
          "</ul><div class='tekstovi right'><p>" +
          opis[i + 1] +
          "</p></div>  <div class='cleaner'></div> </div><a data-magnify='gallery' data-caption='" +
          parfemNaslov[i + 1] +
          "' href='img/" +
          parfemSlika[i + 1] +
          "'><img class='right' src='img/" +
          parfemSlika[i + 1] +
          "' alt='" +
          parfemNaslov[i + 1] +
          "' /> </a><div class='cleaner'></div></div>";
      }
    }
  }
function pojava() {
  var isti = document.querySelectorAll(".isti");
  var ekran = window.innerHeight / 1.3;
  isti.forEach((i) => {
    var pozicija = i.getBoundingClientRect().top;
    if (pozicija < ekran) {
      i.classList.add("pojava");
    }
  });
  var autorh3 = document.getElementById("hatri");
  var pozicija2 = autorh3.getBoundingClientRect().top;
  if (pozicija2 < ekran) {
    autorh3.style.opacity = "1";
    autorh3.style.marginLeft = "0px";
  }
  var text = document.getElementById("text");
  var pozicija3 = text.getBoundingClientRect().top;
  if (pozicija3 < ekran) {
    text.style.opacity = "1";
    text.style.marginLeft = "60px";
  }
  var slika = document.querySelector("#oautoru img");
  var pozicija4 = slika.getBoundingClientRect().top;
  if (pozicija4 < ekran) {
    slika.style.opacity = "1";
    slika.style.marginRight = "10px";
  }
  var kontakt = document.querySelector("#kontakt h3");
  var pozicija5 = kontakt.getBoundingClientRect().top;
  if (pozicija5 < ekran) {
    kontakt.style.opacity = "1";
    kontakt.style.marginLeft = "0px";
  }
  var tabela = document.querySelector("table");
  var pozicija6 = tabela.getBoundingClientRect().top;
  if (pozicija6 < ekran) {
    tabela.style.opacity = "1";
    tabela.style.marginRight = "0px";
  }
}
//DINAMICKO ISPISIVANJE CELOKUPNE PONUDE
let ispis = ""
for (let jedan of celaPonuda) {
  ispis +=
    `
    <div class="product-card">`;
  if (parfemNaslov.includes(jedan.naslov)) {

    ispis +=
      `<div class="badge">Hot</div>`;
  }

  ispis += `
    <div class="product-tumb">
      <img src="${jedan.slika.src}" alt="${jedan.slika.alt}">
    </div>
    <div class="product-details">
      <span class="product-catagory">${jedan.tip}, ${jedan.pol}</span>
      <h4><a href="">${jedan.naslov}</a></h4>
      <p>${jedan.pol} parfem, proizveden ${jedan.godinaProizvodnje}. Sa notama: ${jedan.nota}. Dolazi u pakovanju od ${jedan.zapremina}</p>
      <div class="product-bottom-details">
        <div class="product-price">${jedan.cena}</div>
        <div class="product-links">
          <a href="" class='heartButton'><i class="fa fa-heart"></i></a>
          <a href="#kontakt"><i class="fa fa-shopping-cart"></i></a>
        </div>
      </div>
    </div>
  </div>
  `
}
/////////////////////////////////////////////

// DUGME ZA FAVORITE I POPUP MESSAGE KAD SE UKLONI/DODA
$(document).on("click",".heartButton", function (e) {
  e.preventDefault();
  if($(this).attr("data-click") == "1"){
    //SKINUTO IZ FAVORITA
    $(this).css("color","#e1e1e1")
    $(this).attr("data-click","2")
    displayNotification("Uspesno uklonjeno iz favorita");
  }
  else{
    //UNESENO U FAVORITE
    $(this).css("color", "#fbb72c");
    $(this).attr("data-click","1");
    displayNotification("Uspesno dodato u favorite");
  }
  
});
function displayNotification(tekst){
  var notification = document.getElementById("notification");
  notification.classList.remove("hidden");
  notification.classList.remove("visible");
    notification.classList.add("visible");
    notification.innerText = tekst;
  
  setTimeout(() => {
    notification.classList.remove("visible");
    notification.classList.add("hidden");
    notification.innerText = "";
  }, 2000);
//////////////////////////////////////////////////////////
}
$("#celokupnaPonuda").html(ispis)
$(document).on("click", "#sortM", function (e) {
  e.preventDefault();
  ispis = "";
  for (let jedan of celaPonuda) {
    if (jedan.pol == "Muški") {
      ispis +=
        `
    <div class="product-card">`;
      if (parfemNaslov.includes(jedan.naslov)) {

        ispis +=
          `<div class="badge">Hot</div>`;
      }

      ispis += `
    <div class="product-tumb">
      <img src="${jedan.slika.src}" alt="${jedan.slika.alt}">
    </div>
    <div class="product-details">
      <span class="product-catagory">${jedan.tip}, ${jedan.pol}</span>
      <h4><a href="">${jedan.naslov}</a></h4>
      <p>${jedan.pol} parfem, proizveden ${jedan.godinaProizvodnje}. Sa notama: ${jedan.nota}. Dolazi u pakovanju od ${jedan.zapremina}</p>
      <div class="product-bottom-details">
        <div class="product-price">${jedan.cena}</div>
        <div class="product-links">
          <a href="" class='heartButton'><i class="fa fa-heart"></i></a>
          <a href="#kontakt"><i class="fa fa-shopping-cart"></i></a>
        </div>
      </div>
    </div>
  </div>
  `;
    }
  }
  $("#celokupnaPonuda").html(ispis)

});
/////////////////////////////////////////////////////

//////////////////////////
//////////////FORMA
window.addEventListener("scroll", pojava);
window.onload = function () {
  //ime
  var ime = document.getElementById("ime");
  ime.style.border = "1px solid grey";
  ime.addEventListener("input", zaime);

  //prezime
  var prezime = document.getElementById("prezime");
  prezime.style.border = "1px solid grey";
  prezime.addEventListener("input", zaprezime);

  //GRADOVI
  var grad = this.document.getElementById("grad");
  grad.style.border = "1px solid grey";
  grad.addEventListener("change", zagrad);

  //gradovi
  var gradovi = [
    "Beograd",
    "Kruševac",
    "Niš",
    "Novi Sad",
    "Zrenjanin",
    "Pančevo",
    "Valjevo",
    "Кragujevac",
    "Kraljevo",
    "Vršac",
    "Jagodina",
  ];
  var ispisGradova = `<option value="0">Izaberite grad</option>`;
  for (var i = 0; i < gradovi.length; i++) {
    ispisGradova += `<option value="${i + 1}">${gradovi[i]}</option>`;
  }
  document.getElementById("grad").innerHTML = ispisGradova;
  //email
  var email = document.getElementById("email");
  email.style.border = "1px solid grey";
  email.addEventListener("input", zaemail);
  //broj
  var broj = document.getElementById("broj");
  broj.style.border = "1px solid grey";
  broj.addEventListener("input", zabroj);
  //poruka
  var poruka = document.getElementById("poruka");
  poruka.style.border = "1px solid grey";
  poruka.addEventListener("input", zaporuku);
  //dugme
  var dugme = document.getElementById("dugme");
  dugme.addEventListener("click", zadugme);
// GRESKE
var gime = true;
var gprezime = true;
var ggrad = true;
var gemail = true;
var gbroj = true;
var gporuka = true;

function zaime() {
  var regExpIme =  /^[A-Z][a-z]{2,14}(\s[A-Z][a-z]{2,14})*$/;
  var x = document.getElementById("greskaime");
  if (regExpIme.test(ime.value)) {
    ime.style.border = "1px solid green";
    x.innerHTML = `<i class="fas fa-check"></i>`;
    gime = false;
  } else if (ime.value.length == 0) {
    ime.style.border = "1px solid grey";
    x.textContent = "";
    gime = true;
  } else {
    ime.style.border = "1px solid red";
    x.textContent = "* Ime mora počinjati velikim slovom i da ima bar 3 slova";
    gime = true;
  }
}
function zaprezime() {
  var regExpPrezime = /^[A-Z][a-z]{2,14}(\s[A-Z][a-z]{2,14})*$/;
  var x = document.getElementById("greskaprezime");
  if (regExpPrezime.test(prezime.value)) {
    prezime.style.border = "1px solid green";
    x.innerHTML = `<i class="fas fa-check"></i>`;
    gprezime = false;
  } else if (prezime.value.length == 0) {
    prezime.style.border = "1px solid grey";
    x.textContent = "";
    gpreime = true;
  } else {
    prezime.style.border = "1px solid red";
    x.textContent = "* Prezime mora počinjati velikim slovom i da ima bar 3 slova";
    gprezime = true;
  }
}
function zaemail() {
  var x = document.getElementById("greskaemail");
  var regExpEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (regExpEmail.test(email.value)) {
    email.style.border = "1px solid green";
    x.innerHTML = `<i class="fas fa-check"></i>`;
    gemail = false;
  } else if (email.value.length == 0) {
    email.style.border = "1px solid grey";
    x.textContent = "";
    gemail = true;
  } else {
    email.style.border = "1px solid red";
    x.textContent = "* Unesite validan email";
    gemail = true;
  }
}
function zabroj() {
  var x = document.getElementById("greskabroj");
  var regExpBroj = /^06[0-9]\/[0-9]{4}\-[0-9]{3,4}$/;
  if (regExpBroj.test(broj.value)) {
    broj.style.border = "1px solid green";
    x.innerHTML = `<i class="fas fa-check"></i>`;
    gbroj = false;
  } else if (broj.value.length == 0) {
    broj.style.border = "1px solid grey";
    x.textContent = "";
    gbroj = true;
  } else {
    broj.style.border = "1px solid red";
    x.textContent = "* Validan format broja:  060/1234-567";
    gbroj = true;
  }
}
function zagrad() {
  var x = document.getElementById("greskagrad");
  if (grad.value == 0) {
    grad.style.border = "1px solid grey";
    x.textContent = "";
    ggrad = true;
  } else {
    grad.style.border = "1px solid green";
    x.innerHTML = `<i class="fas fa-check"></i>`;
    ggrad = false;
  }
}
function zaporuku() {
  var x = document.getElementById("greskaporuka");
  if (poruka.value == "") {
    poruka.style.border = "1px solid red";
    x.textContent = "* Ne smete ostaviti praznu poruku";
    gporuka = true;
  } else if (poruka.value.length == 0) {
    poruka.style.border = "1px solid grey";
    x.textContent = "";
    gporuka = true;
  } else {
    poruka.style.border = "1px solid green";
    x.innerHTML = `<i class="fas fa-check"></i>`;
    gporuka = false;
  }
}
function zadugme() {
  var greskaime = document.getElementById("greskaime");

  var greskaprezime = document.getElementById("greskaprezime");

  var greskaemail = document.getElementById("greskaemail");

  var greskabroj = document.getElementById("greskabroj");

  var greskagrad = document.getElementById("greskagrad");

  var greskaporuka = document.getElementById("greskaporuka");
  var x = document.getElementById("uspesno");
  var f = document.getElementById("forma");
  if (
    gime == false &&
    gprezime == false &&
    ggrad == false &&
    gemail == false &&
    gbroj == false &&
    gporuka == false
  ) {
    ime.style.border = "1px solid grey";
    greskaime.innerHTML = "";
    prezime.style.border = "1px solid grey";
    greskaprezime.innerHTML = "";
    email.style.border = "1px solid grey";
    greskaemail.innerHTML = "";
    broj.style.border = "1px solid grey";
    greskabroj.innerHTML = "";
    grad.style.border = "1px solid grey";
    greskagrad.innerHTML = "";
    poruka.style.border = "1px solid grey";
    greskaporuka.innerHTML = "";

    x.style.color = "green";
    x.innerHTML = `<i class="fas fa-check"></i> Uspesno ste poslali poruku!`;
    f.reset();
    gime = true;
    gprezime = true;
    ggrad = true;
    gemail = true;
    gbroj = true;
    gporuka = true;
  } else {
    x.style.color = "red";
    x.textContent = "Unesite sve podatke!";
  }

}

 
  var z = window.matchMedia("(max-width: 768px)");
  mediaquery(z);
  z.addListener(mediaquery);
  //DINAMICKI FOOTER IKONICE
  var mreze = document.getElementById("mreze");
  var ikoniceLinkovi = [
    "sitemap.xml",
    "rss.xml",
    "https://www.facebook.com/bananatripp/",
    "https://www.instagram.com/nowhere.around.you1/",
    "https://twitter.com/login",
    "https://web.whatsapp.com/",
  ];
  var ikoniceTitlovi = [
    "Sitemap",
    "RSS",
    "Facebook",
    "Instagram",
    "Twitter",
    "Whatsapp",
  ];
  var ikoniceKlase = [
    "fas fa-sitemap",
    "fas fa-rss",
    "fab fa-facebook-f",
    "fab fa-instagram",
    "fab fa-twitter",
    "fab fa-whatsapp",
  ];
  for (let b = 0; b < ikoniceKlase.length; b++) {
    mreze.innerHTML +=
      "<a href='" +
      ikoniceLinkovi[b] +
      "'title='" +
      ikoniceTitlovi[b] +
      "'target='_blank'class='" +
      ikoniceKlase[b] +
      "'>";
  }
  setInterval(Slider, 2000);
};

$(document).on("click", "#sortZ", function (e) {
  e.preventDefault();
  ispis = "";
  for (let jedan of celaPonuda) {
    if (jedan.pol == "Ženski") {
      ispis +=
        `
    <div class="product-card">`;
      if (parfemNaslov.includes(jedan.naslov)) {

        ispis +=
          `<div class="badge">Hot</div>`;
      }

      ispis += `
    <div class="product-tumb">
      <img src="${jedan.slika.src}" alt="${jedan.slika.alt}">
    </div>
    <div class="product-details">
      <span class="product-catagory">${jedan.tip}, ${jedan.pol}</span>
      <h4><a href="">${jedan.naslov}</a></h4>
      <p>${jedan.pol} parfem, proizveden ${jedan.godinaProizvodnje}. Sa notama: ${jedan.nota}. Dolazi u pakovanju od ${jedan.zapremina}</p>
      <div class="product-bottom-details">
        <div class="product-price">${jedan.cena}</div>
        <div class="product-links">
          <a href="" class='heartButton'><i class="fa fa-heart"></i></a>
          <a href="#kontakt"><i class="fa fa-shopping-cart"></i></a>
        </div>
      </div>
    </div>
  </div>
  `
    }
  }
  $("#celokupnaPonuda").html(ispis)
});
//////////////////////////////////////////////
//SLAJDER
var slajderSlike = ["thumb.jpg", "thumb1.jpg", "thumb2.jpg"];
var brojac = 0;
var slajder = document.getElementById("thumb");
function Slider() {
  if (brojac === slajderSlike.length) {
    brojac = 0;
  }

  slajder.style.backgroundImage =
    "linear-gradient(rgba(252, 191, 73, 0.3),rgba(252, 191, 73, 0.3)),url('img/" +
    slajderSlike[brojac] +
    "')";
  brojac++;
}
//STRELICA ZA GORE
$("#vrh").on("click", function () {
  window.scrollTo(0, 0);
});
//PRIKAZI VISE
$("#prikazivise").on("click", function () {
  $("#vise").slideToggle();
});

$(document).ready(function () {
  // $("[data-magnify=gallery]").magnify();

  var datum = new Date();
  function updateTime() {
    datum = new Date(datum.getTime() + 1000);
    var dan = datum.getDate();
    if (dan < 10) {
      dan = "0" + dan;
    }
    var mesec = datum.getMonth() + 1;
    if (mesec < 10) {
      mesec = "0" + mesec;
    }
    var sat = datum.getHours();
    if (sat < 10) {
      sat = "0" + sat;
    }
    var minut = datum.getMinutes();
    if (minut < 10) {
      minut = "0" + minut;
    }
    var sekund = datum.getSeconds();
    if (sekund < 10) {
      sekund = "0" + sekund;
    }

    $("#vreme").html(
      "<b>" +
      dan +
      "/" +
      mesec +
      "/" +
      datum.getFullYear() +
      " " +
      sat +
      ":" +
      minut +
      ":" +
      sekund +
      "</b>"
    );
  }
  setInterval(updateTime, 1000);
});