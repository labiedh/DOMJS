// ************************************************************************************************
//                                            DATA
// ************************************************************************************************
var DataPcBureau = [{
        "img": "res/pc-de-bureau-asus.jpg",
        "titre": "Pc de Bureau ALL IN ONE ASUS Dual Core 4Go 1To",
        "description": "Intel Celeron Dual Core J4005 ( 2.0 GHz up to 2.7 GHz, 4 Mo de mémoire cache), Ecran 21.5' FULL HD (1920 x 1080)...",
        "prix": 1212,
        "quantite": 2,
        "qteCommande": 0,
        "ref": 0
    },
    {
        "img": "res/pc-de-bureau-dell.jpg",
        "titre": "PC DE BUREAU DELL N204VD3671EMEA03 Vostro 3671 Ci3-9100_4Go_1To",
        "description": "Intel® Core ™ i3 9100 9ème Génération (3.6 GHz up to 4.2 GHz, 6 Mo de Mémoire Cache, Quad-Core) 4Go DDR4 à 2 666 MHz...",
        "prix": 926,
        "quantite": 0,
        "qteCommande": 0,
        "ref": 1
    },
    {
        "img": "res/pc-de-bureau-hp.jpg",
        "titre": "PC DE BUREAU HP HP Desktop Pro G4 Pro 300 G3",
        "description": "Intel® Core™ i3-9100 (3.6 GHz base frequency, up to 4.2 GHz with Intel® Turbo Boost Technology, 6 MB L3 cache, 4 cores) ,Ecran 20.7' LED...",
        "prix": 1155,
        "quantite": 5,
        "qteCommande": 0,
        "ref": 2
    },
    {
        "img": "res/pc-de-bureau-msi.jpg",
        "titre": "PC DE BUREAU GAMER MSI Aegis TI3",
        "description": "Intel Core i7-8700K (3.7/4.7 Turbo GHz –12 Mo),2To + 512 Go SSD,8 Go DDR4 ...",
        "prix": 8999,
        "quantite": 1,
        "qteCommande": 0,
        "ref": 3
    }
    // *********************************************************
]
var DataPcPortable = [{
        "img": "res/pc-portable-hp-.jpg",
        "titre": "PC PORTABLE HP 8UL39EA",
        "description": "Intel Celeron Dual-Core N4000 (1,1 GHz jusqu’à 2.6 GHz, 4 Mo de mémoire cache, Dual-Core)...",
        "prix": 742,
        "quantite": 2,
        "qteCommande": 0,
        "ref": 4

    },
    {
        "img": "res/pc-portable-msi.jpg",
        "titre": "PC Portable Gamer MSI GF63",
        "description": "Intel Core i7-10750H (2.6 GHz up to 5.00 GHz, 12 Mo de mémoire cache, Hexa-Core)...",
        "prix": 3219,
        "quantite": 5,
        "qteCommande": 0,
        "ref": 5
    },
    {
        "img": "res/pc-portable-asus-.jpg",
        "titre": "PC PORTABLE ASUS ASUS X543MA",
        "description": "Intel Celeron Dual-Core N4000,Ecran 15.6' HD LED,Carte graphique: Intel HD...",
        "prix": 686,
        "quantite": 0,
        "qteCommande": 0,
        "ref": 6
    },
    {
        "img": "res/pc-portable-dell.jpg",
        "titre": "PC PORTABLE DELL INSPIRON",
        "description": "Intel Core i3-10005 (1.2 GHz up to 3.4 GHz, 4 Mo de mémoire cache, Dual-Core)...",
        "prix": 1116,
        "quantite": 12,
        "qteCommande": 0,
        "ref": 7
    }
]
var DataImprimante = [{
            "img": "res/imp-ep.jpg",
            "titre": "IMPRIMANTE A RESERVOIR INTEGRE ECO TANK C11CG89402 EcoTank L1110 monofonction Couleur A4 ",
            "description": "Imprimante jet d'encre Epson couleur - Fonction impression - Format papier: A4, Technologie d'impression: jet d'encre (Tête d'impression Epson Micro Piezo), Résolution d’impression: 5760 x 1440 DPI...",
            "prix": "363",
            "quantite": 0,
            "qteCommande": 0,
            "ref": 8
        },
        {
            "img": "res/imp-hp.jpg",
            "titre": "IMPRIMANTE HP A RESERVOIR INTEGRE 315 ALL IN ONE / Extension de garantie 2 ans + 5 Bouteilles d'encre Offertes ",
            "description": "Fonctions: Impression, scan et copie, Format Papier: A4, Technolgie d'impression: jet d'encre, Vitesse d'impression A4 ISO: Jusqu'à 8 ppm (N&B) / 5ppm (Couleur)... ",
            "prix": 370,
            "quantite": 4,
            "qteCommande": 0,
            "ref": 9
        },
        {
            "img": "res/imp-lexmark.jpg",
            "titre": "IMPRIMANTE LEXMARK 4 EN 1 REF MB2442adwe IMPRIMANTE/SCANNER/COPIEUR/FAX MONOCHROME ",
            "description": "Laser monochrome, Impression recto-verso: Duplex intégré, Vitesse d'impression: Jusqu'à 40 pages par minute...",
            "prix": 867,
            "quantite": 7,
            "qteCommande": 0,
            "ref": 10
        },
        {
            "img": "res/imp-toshiba-.jpg",
            "titre": "PHOTOCOPIEUR TOSHIBA e-STUDIO 2323AM MUTIFONCTION A3/A4 MONOCHROME",
            "description": "copie, impression, scan couleur en standard Vitesse : 23 ppm Résolution imprimante : 2400dpi x 600dpi...        ",
            "prix": 1599,
            "quantite": 3,
            "qteCommande": 0,
            "ref": 11
        }
    ]
    // ************************************************************************************************
    //                                           Affichage
    // ************************************************************************************************
function PcBureau() {
    var html = [];
    for (var i = 0; i < DataPcBureau.length; i++) {

        html.push(" <div class='card border-info mb-3'><img src='" + DataPcBureau[i].img +
            " ' class='card-img-top' ><div class='card-body' id='pro'><h5 class='card-title'>" + DataPcBureau[i].titre + "</h5>" +
            "<p class='card-text'>" + DataPcBureau[i].description + "</p> <div class='prix'>" +
            "<h4>" + DataPcBureau[i].prix + ",000DT</h4></div><div id='btn'>" +
            "<button type='button' class='btn btn-outline-info' id='jaime" + DataPcBureau[i].ref + "' onclick='jaime(" + DataPcBureau[i].ref + ")'>" +
            "<svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' class='bi bi-heart' viewBox='0 0 16 16' >" +
            "<path fill-rule='evenodd' d='M8 2.748l-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z'></path>" +
            "</svg>" +
            " </button>&nbsp&nbsp")
        if (DataPcBureau[i].quantite === 0) {

            html.push("<button type='button' class='btn btn-outline-info' data-toggle='modal' data-target='#myModal'disabled >" +
                "<svg width='1em' height='1em' viewBox='0 0 16 16' class='bi bi-bag' fill='currentColor' xmlns='http://www.w3.org/2000/svg'>" +
                "<path fill-rule='evenodd' d='M8 1a2.5 2.5 0 0 0-2.5 2.5V4h5v-.5A2.5 2.5 0 0 0 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5v9a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V5H2z' ></path>" +
                "</svg>" +
                "</button>" +
                " </div><div class='etat text-danger '>" +
                "<svg width='1em' height='1em' viewBox='0 0 16 16' class='bi bi-x-square-fill' fill='currentColor' xmlns='http://www.w3.org/2000/svg'>" +
                "<path fill-rule='evenodd' d='M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm3.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z'/>" +
                "</svg> <h6 id='stock'>Stock épuisé</h6></div> </div></div> ")
        } else {


            html.push("<button type='button' class='btn btn-outline-info' data-toggle='modal' data-target='#myModal' id='prod" + DataPcBureau[i].ref + "'  onclick='AchatBureau(" + i + ")' >" +
                "<svg width='1em' height='1em' viewBox='0 0 16 16' class='bi bi-bag' fill='currentColor' xmlns='http://www.w3.org/2000/svg'>" +
                "<path fill-rule='evenodd' d='M8 1a2.5 2.5 0 0 0-2.5 2.5V4h5v-.5A2.5 2.5 0 0 0 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5v9a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V5H2z' ></path>" +
                "</svg>" +
                "</button>" +
                " </div><div class='etat text-success'id='stok-test" + DataPcBureau[i].ref + "'>" +
                "<svg width='1em' height='1em' viewBox='0 0 16 16' class='bi bi-check-square-fill' fill='currentColor' xmlns='http://www.w3.org/2000/svg'>" +
                " <path fill-rule='evenodd' d='M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm10.03 4.97a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z' / > " +
                "</svg> <h6 id='stock" + DataPcBureau[i].ref + "' >En Stock</h6></div> </div></div> ")
        }
    }
    document.getElementById("divBureau").innerHTML = html.join("");
    document.getElementById("divBureau").setAttribute("id", "article");
}
// ************************
function PcPortable() {
    var html = [];
    for (var i = 0; i < DataPcPortable.length; i++) {

        html.push(" <div class='card border-info mb-3'><img src='" + DataPcPortable[i].img + " ' class='card-img-top' ><div class='card-body' id='pro'><h5 class='card-title'>" + DataPcPortable[i].titre + "</h5>" +
            "<p class='card-text'>" + DataPcPortable[i].description + "</p> <div class='prix'>" +
            "<h4>" + DataPcPortable[i].prix + ",000DT</h4></div><div id='btn'>" +
            "<button type='button' class='btn btn-outline-info' id='jaime" + DataPcPortable[i].ref + "' onclick='jaime(" + DataPcPortable[i].ref + ")'>" +
            "<svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' class='bi bi-heart' viewBox='0 0 16 16'>" +
            "<path fill-rule='evenodd' d='M8 2.748l-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z'></path>" +
            "</svg>" +
            " </button>&nbsp&nbsp")
        if (DataPcPortable[i].quantite === 0) {

            html.push("<button type='button' class='btn btn-outline-info' data-toggle='modal' data-target='#myModal'onclick='AchatPortable(" + i + ")'disabled >" +
                "<svg width='1em' height='1em' viewBox='0 0 16 16' class='bi bi-bag' fill='currentColor' xmlns='http://www.w3.org/2000/svg'>" +
                "<path fill-rule='evenodd' d='M8 1a2.5 2.5 0 0 0-2.5 2.5V4h5v-.5A2.5 2.5 0 0 0 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5v9a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V5H2z' ></path>" +
                "</svg>" +
                "</button>" +
                " </div><div class='etat text-danger '>" +
                "<svg width='1em' height='1em' viewBox='0 0 16 16' class='bi bi-x-square-fill' fill='currentColor' xmlns='http://www.w3.org/2000/svg'>" +
                "<path fill-rule='evenodd' d='M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm3.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z'/>" +
                "</svg> <h6>Stock épuisé</h6></div> </div></div> ")
        } else {


            html.push("<button type='button' class='btn btn-outline-info' data-toggle='modal' data-target='#myModal' id='prod" + DataPcPortable[i].ref + "' onclick='AchatPortable(" + i + ")' >" +
                "<svg width='1em' height='1em' viewBox='0 0 16 16' class='bi bi-bag' fill='currentColor' xmlns='http://www.w3.org/2000/svg'>" +
                "<path fill-rule='evenodd' d='M8 1a2.5 2.5 0 0 0-2.5 2.5V4h5v-.5A2.5 2.5 0 0 0 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5v9a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V5H2z' ></path>" +
                "</svg>" +
                "</button>" +
                " </div><div class='etat text-success' id='stok-test" + DataPcPortable[i].ref + "'>" +
                "<svg width='1em' height='1em' viewBox='0 0 16 16' class='bi bi-check-square-fill' fill='currentColor' xmlns='http://www.w3.org/2000/svg'>" +
                " <path fill-rule='evenodd' d='M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm10.03 4.97a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z' / > " +
                "</svg> <h6  id='stock" + DataPcPortable[i].ref + "'>En Stock</h6></div> </div></div> ")

        }


    }
    document.getElementById("divPortable").innerHTML = html.join("");
    document.getElementById("divPortable").setAttribute("id", "article");

}
// ************************
function PcImprimante() {
    var html = [];
    for (var i = 0; i < DataImprimante.length; i++) {

        html.push(" <div class='card border-info mb-3'><img src='" + DataImprimante[i].img + " ' class='card-img-top' ><div class='card-body' id='pro'><h5 class='card-title'>" + DataImprimante[i].titre + "</h5>" +
            "<p class='card-text'>" + DataImprimante[i].description + "</p> <div class='prix'>" +
            "<h4>" + DataImprimante[i].prix + ",000DT</h4></div><div id='btn'>" +
            "<button type='button' class='btn btn-outline-info' id='jaime" + DataImprimante[i].ref + "' onclick='jaime(" + DataImprimante[i].ref + ")'>" +
            "<svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' class='bi bi-heart' viewBox='0 0 16 16'>" +
            "<path fill-rule='evenodd' d='M8 2.748l-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z'></path>" +
            "</svg>" +
            " </button>&nbsp&nbsp")
        if (DataImprimante[i].quantite === 0) {

            html.push("<button type='button' class='btn btn-outline-info' data-toggle='modal' data-target='#myModal'onclick='AchatImprimante(" + i + ")'disabled >" +
                "<svg width='1em' height='1em' viewBox='0 0 16 16' class='bi bi-bag' fill='currentColor' xmlns='http://www.w3.org/2000/svg'>" +
                "<path fill-rule='evenodd' d='M8 1a2.5 2.5 0 0 0-2.5 2.5V4h5v-.5A2.5 2.5 0 0 0 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5v9a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V5H2z' ></path>" +
                "</svg>" +
                "</button>" +
                " </div><div class='etat text-danger '>" +
                "<svg width='1em' height='1em' viewBox='0 0 16 16' class='bi bi-x-square-fill' fill='currentColor' xmlns='http://www.w3.org/2000/svg'>" +
                "<path fill-rule='evenodd' d='M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm3.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z'/>" +
                "</svg> <h6>Stock épuisé</h6></div> </div></div> ")
        } else {


            html.push("<button type='button' class='btn btn-outline-info' data-toggle='modal' data-target='#myModal' id='prod" + DataImprimante[i].ref + "' onclick=' AchatImprimante(" + i + ")' >" +
                "<svg width='1em' height='1em' viewBox='0 0 16 16' class='bi bi-bag' fill='currentColor' xmlns='http://www.w3.org/2000/svg'>" +
                "<path fill-rule='evenodd' d='M8 1a2.5 2.5 0 0 0-2.5 2.5V4h5v-.5A2.5 2.5 0 0 0 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5v9a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V5H2z' ></path>" +
                "</svg>" +
                "</button>" +
                " </div><div class='etat text-success' id='stok-test" + DataImprimante[i].ref + "'>" +
                "<svg width='1em' height='1em' viewBox='0 0 16 16' class='bi bi-check-square-fill' fill='currentColor' xmlns='http://www.w3.org/2000/svg'>" +
                " <path fill-rule='evenodd' d='M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm10.03 4.97a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z' / > " +
                "</svg> <h6 id='stock" + DataImprimante[i].ref + "'>En Stock</h6></div> </div></div> ")

        }


    }
    document.getElementById("divImprimante").innerHTML = html.join("");
    document.getElementById("divImprimante").setAttribute("id", "article");
}
// ************************************************************************************************
//                                            BTN ACHAT
// ************************************************************************************************
function AchatBureau(i) {

    var html1 = [];
    html1.push("<h5 class='modal-title'>" + DataPcBureau[i].titre + "</h5>")
    var html = [];
    html.push("<div class='card border-info mb-3' style='max-width: 540px;'>" +
        "<div class='row'>" +
        "<div class='col-md-4'>" +
        "<img src='" + DataPcBureau[i].img + "' alt='...'style='max-width: 150px;'>" +
        "</div>" +
        "<div class='col-md-8'>" +
        "<div class='card-body'>" +
        "<p class='card-text'> " + DataPcBureau[i].description + " </p>" +
        "<label for='fname'><small id='prixPro'>Prix &nbsp&nbsp" + DataPcBureau[i].prix + ".000 DT" +
        "</small></label><br>" +
        "</div>" +
        "</div>" +
        "</div>" +
        "</div>" +
        "</div>")


    document.getElementById("modelID").innerHTML = html.join("");
    document.getElementById("modelTitle").innerHTML = html1.join("");
    cartNumbers(DataPcBureau[i]);
    totalCost(DataPcBureau[i]);


}

function AchatPortable(i) {
    var html1 = [];
    html1.push("<h5 class='modal-title'>" + DataPcPortable[i].titre + "</h5>")
    var html = [];
    html.push("<div class='card border-info mb-3' style='max-width: 540px;'>" +
        "<div class='row g-0'>" +
        "<div class='col-md-4'>" +
        "<img src='" + DataPcPortable[i].img + "' alt='...'style='max-width: 150px;'>" +
        "</div>" +
        "<div class='col-md-8'>" +
        "<div class='card-body'>" +
        "<p class='card-text'> " + DataPcPortable[i].description + " </p>" +
        "<label for='fname'><small id='prixPro'>Prix &nbsp&nbsp" + DataPcPortable[i].prix + ".000 DT" +
        "</small></label><br>" +
        "</div>" +
        "</div>" +
        "</div>" +
        "</div>")

    document.getElementById("modelID").innerHTML = html.join("");
    document.getElementById("modelTitle").innerHTML = html1.join("");
    cartNumbers(DataPcPortable[i]);
    totalCost(DataPcPortable[i]);


}
// ************************
function AchatImprimante(i) {
    var html1 = [];
    html1.push("<h5 class='modal-title'>" + DataImprimante[i].titre + "</h5>")
    var html = [];
    html.push("<div class='card border-info mb-3' style='max-width: 540px;'>" +
        "<div class='row g-0'>" +
        "<div class='col-md-4'>" +
        "<img src='" + DataImprimante[i].img + "' alt='...'style='max-width: 150px;'>" +
        "</div>" +
        "<div class='col-md-8'>" +
        "<div class='card-body'>" +
        "<p class='card-text'> " + DataImprimante[i].description + " </p>" +
        "<label for='fname'><small id='prixPro'>Prix &nbsp&nbsp" + DataImprimante[i].prix + ".000 DT" +
        "</small></label><br>" +
        "</div>" +
        "</div>" +
        "</div>" +
        "</div>")

    document.getElementById("modelID").innerHTML = html.join("");
    document.getElementById("modelTitle").innerHTML = html1.join("");
    cartNumbers(DataImprimante[i]);
    totalCost(DataImprimante[i]);


}
// ************************************************************************************************
//                                             Qte Produit 
// ************************************************************************************************
function cartNumbers(product) {
    let productNumbers = localStorage.getItem('cartNumbers');
    productNumbers = parseInt(productNumbers);

    if (productNumbers) {

        localStorage.setItem('cartNumbers', productNumbers + 1);
        document.querySelector('.navbar-brand span').textContent = productNumbers + 1;

    } else {

        localStorage.setItem('cartNumbers', 1);
        document.querySelector('.navbar-brand span').textContent = 1;
    }
    setItem(product);
}
// ************************************************************************************************
//                                             Liste Produit
// ************************************************************************************************
function setItem(product) {
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);
    if (cartItems != null) {
        if (cartItems[product.ref] == undefined) {
            cartItems = {
                ...cartItems,
                [product.ref]: product
            }
        }
        cartItems[product.ref].qteCommande += 1;
        cartItems[product.ref].quantite -= 1;
        if (cartItems[product.ref].quantite <= 0) {
            rupturestock(product.ref);
        }
    } else {
        product.qteCommande = 1;
        product.quantite -= 1;
        cartItems = {
            [product.ref]: product
        }
        if (product.quantite <= 0) {
            rupturestock(product.ref);
        }
    }


    localStorage.setItem("productsInCart", JSON.stringify(cartItems));
}

// ************************************************************************************************
//                                             chargement de page
// ************************************************************************************************
function onLoadCartNumbers() {
    let productNumbers = localStorage.getItem('cartNumbers');
    if (productNumbers) {
        document.querySelector('.navbar-brand span').textContent = productNumbers;
    }

}
// ************************************************************************************************
//                                             J'aime
// ************************************************************************************************
function jaime(a) {
    let id = 'jaime' + a.toString();
    let btn = document.getElementById(id);
    let elClassName = btn.getAttribute('class');
    if (elClassName === "btn btn-outline-info") {
        btn.removeAttribute('class');
        btn.setAttribute('class', 'btn btn-danger');
    } else {
        btn.removeAttribute('class');
        btn.setAttribute('class', 'btn btn-outline-info');
    }
}
// ************************************************************************************************
//                                             Calcul Total
// ************************************************************************************************
function totalCost(product) {
    let cartCost = localStorage.getItem("totalCost");

    if (cartCost != null) {
        cartCost = parseInt(cartCost);
        localStorage.setItem("totalCost", cartCost + product.prix);

    } else {
        localStorage.setItem("totalCost", product.prix);
    }
}
// ************************************************************************************************
//                                             Afficher le panier
// ************************************************************************************************
function displayCart() {
    let cartItems = localStorage.getItem("productsInCart");
    cartItems = JSON.parse(cartItems)
    let productCantainer = document.querySelector(".listeproduit");
    let cartCost = localStorage.getItem("totalCost");

    if (cartItems && productCantainer) {
        productCantainer.innerHTML = '';
        Object.values(cartItems).map(item => {
            productCantainer.innerHTML += `<div class="row" id="produit">
            <div class="col-md-6 ">
                <div class="row">
                    <div class="col-md-2 " id="btncom">
                        <button type="button" class="btn btn-outline-danger" onclick="cart_quantity_delete('${item.ref} ')">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                                <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"></path>
                                <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"></path>
                            </svg>
                        </button>
                    </div>
                    <div class="col-md-3 ">
                        <img src="${item.img} " class="imagecom">
                    </div>
                    <div class="col-md-7 " id="titrecom">
                        <span> ${item.titre} </span>

                    </div>
                </div>
            </div>
            <div class="col-md-2 text-center">
                <span>${item.prix}.000 DT</span>
            </div>
            <div class="col-md-2 text-center">
               <div class="quantity buttons_added">
                  <input type="button" value="-" class="minus" onclick="minus_quantity('${item.ref} ')">
                  <input type="number" step="1" min="1" max="" name="quantity" value="${item.qteCommande}" title="Qty" 
                     class="input-text qty text" size="4" pattern="" inputmode="" disabled>
                  <input type="button" value="+" class="plus" onclick="plus_quantity('${item.ref} ')">
                </div>
             </div>
            <div class="col-md-2 text-center">
                <span>${item.qteCommande * item.prix}.000 DT</span>
            </div>

        </div>`;
        });
        productCantainer.innerHTML += `
        <div class="row" id="pro-total">
        <div class="col-md-9"></div>
        <div class="col-md-1 text-center"><h5> Total </h5></div>
        <div class="col-md-2 text-center"><h5 class="pt"> ${cartCost},000 DT</h5</div>
        </div>
       
        `;


    }

}
// ************************************************************************************************
//                                             Delete Produit
// ************************************************************************************************
function cart_quantity_delete(t) {
    let i = parseInt(t)
    let cartItems = localStorage.getItem("productsInCart");
    let cartCost = localStorage.getItem("totalCost");
    let productNumbers = localStorage.getItem('cartNumbers');
    productNumbers = parseInt(productNumbers);
    cartCost = parseInt(cartCost);
    cartItems = JSON.parse(cartItems)
    localStorage.setItem('cartNumbers', productNumbers - cartItems[i].qteCommande);
    let totalProduit = (cartItems[i].qteCommande * cartItems[i].prix);
    localStorage.setItem("totalCost", cartCost - totalProduit);
    delete cartItems[i];
    localStorage.setItem("productsInCart", JSON.stringify(cartItems));
    location.reload();
}
// ************************************************************************************************
//                                            Ajout Qte
// ************************************************************************************************
function plus_quantity(t) {
    let i = parseInt(t)
    let cartItems = localStorage.getItem("productsInCart");
    let cartCost = localStorage.getItem("totalCost");
    let productNumbers = localStorage.getItem('cartNumbers');
    productNumbers = parseInt(productNumbers);
    cartCost = parseInt(cartCost);
    cartItems = JSON.parse(cartItems)


    if (cartItems[i].quantite > 0) {
        cartItems[i].qteCommande += 1;
        cartItems[i].quantite -= 1;
        cartCost += cartItems[i].prix;

        localStorage.setItem('cartNumbers', productNumbers + 1);
        localStorage.setItem("totalCost", cartCost);
        localStorage.setItem("productsInCart", JSON.stringify(cartItems));
        location.reload();
    } else {
        $('#myModal-stok').modal('show');
    }

}
// ************************************************************************************************
//                                            Diminution Produit
// ************************************************************************************************
function minus_quantity(t) {

    let i = parseInt(t)
    let cartItems = localStorage.getItem("productsInCart");
    let cartCost = localStorage.getItem("totalCost");
    let productNumbers = localStorage.getItem('cartNumbers');

    productNumbers = parseInt(productNumbers);
    cartCost = parseInt(cartCost);

    cartItems = JSON.parse(cartItems)
    if (cartItems[i].qteCommande > 1) {
        cartCost -= cartItems[i].prix;
        cartItems[i].qteCommande -= 1;
        cartItems[i].quantite += 1;

        localStorage.setItem('cartNumbers', productNumbers - 1);
        localStorage.setItem("totalCost", cartCost);
        localStorage.setItem("productsInCart", JSON.stringify(cartItems));
        location.reload();
    } else {
        cart_quantity_delete(t);
    }
}
// ************************************************************************************************
//                                             rupture de stock
// ************************************************************************************************
function rupturestock(a) {
    var html = [];
    let id2 = "stock" + a.toString();
    let id1 = "stok-test" + a.toString();
    let id = "prod" + a.toString();
    let btn = document.getElementById(id);
    let txt = document.getElementById(id1);
    txt.removeAttribute('class');
    txt.setAttribute('class', 'etat text-danger')
    btn.setAttribute('disabled', '');
    html.push("Stock épuisé")
    document.getElementById(id2).innerHTML = html.join("");

}
// *************************************************************************************************

onLoadCartNumbers();
displayCart();