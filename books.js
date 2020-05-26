let items;
let title;
let info;
let thumbnail;
let author;


 

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
        console.log(info);
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
