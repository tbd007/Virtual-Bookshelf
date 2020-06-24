let items;
let title;
let info;
let thumbnail;
let author;
let publisher;
let date;
let desc;
let link;
let isbn;


 

function handleResponse(){
let book = document.getElementById('bookTitle').value;
let authorName= document.getElementById('authorName').value;
let  url1= "https://www.googleapis.com/books/v1/volumes?q=";
let  url3= "+inauthor:";
let  url5= "&key=AIzaSyDeia13uayqMRAvEiTlTm1ZFwCbHdL_sjQ";
let  baseURL = url1+book+url3+authorName+url5;

    fetch(baseURL)
    .then(function (res) {
        return res.json();
      })
      .then(function (result) {
        items = result.items[0];
        title = result.items[0].volumeInfo.title;
        author = result.items[0].volumeInfo.authors[0];
        info = result.items[0].volumeInfo.canonicalVolumeLink;
        thumbnail= result.items[0].volumeInfo.imageLinks.smallThumbnail;
        publisher = result.items[0].volumeInfo.publisher;
        desc = result.items[0].volumeInfo.description;
        isbn= result.items[0].volumeInfo.industryIdentifiers[0].identifier;
        date = result.items[0].volumeInfo.publishedDate;
        link= "https://www.amazon.com/s?k="+isbn;
        console.log(isbn);
        console.log(result);

        document.getElementById('logos').innerHTML += `<div class="results">
        <div class="shopitem">
        <p style="color:palegreen; font-family:'Jost'; text-transform:uppercase"> ${title} </br> ${author} | ${publisher} ${date}</p></br>
        </div>
        <div class="shopitem">
        <p style="color:white;font-size:0.8em;font-family:'Jost'; line-height:1.3em"> ${desc}</p>
        </div>
        <div class="shopitem">
        <a class="shoplink" href="${link}">BUY  <i class="fab fa-opencart"></i></a>
        </div>
        </div>`;

        document.getElementById('firstshelf').innerHTML += `<div class="book"><h2>${title}</h2><br><h3>${author}</h3><br><img src="${thumbnail}">
        <button><a href="${info}" target=_blank">VIEW</a></button>
        <button class="remove" onclick="removeItems(event)">x</button></div>`;
      }),
      function (error) {
        console.log(error);
      };
}


function removeItems(event){
    var item = event.target;  

    item.parentNode.remove();
  
}
