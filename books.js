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



fetch("https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=dtXnwzge83flh7CG6df2u1OAkW1dutfc")
  .then(response => response.text())
  .then( data => JSON.parse(data))
  .then (data => {
    console.log(data);
    const book = data.results.books[0].title;
    const author = data.results.books[0].author;
    const img = data.results.books[0].amazon_product_url;
    const rank = data.results.books[0].rank;
   
    const book2 = data.results.books[1].title;
    const author2 = data.results.books[1].author;
    const img2 = data.results.books[1].amazon_product_url;
    const rank2 = data.results.books[1].rank;

    const book3 = data.results.books[2].title;
    const author3 = data.results.books[2].author;
    const img3 = data.results.books[2].amazon_product_url;
    const rank3 = data.results.books[2].rank;

    const book4 = data.results.books[3].title;
    const author4 = data.results.books[3].author;
    const img4 = data.results.books[3].amazon_product_url;
    const rank4 = data.results.books[3].rank;

    const book5 = data.results.books[4].title;
    const author5 = data.results.books[4].author;
    const img5 = data.results.books[4].amazon_product_url;
    const rank5 = data.results.books[4].rank;

    const bestdate = data.results.bestsellers_date;
    console.log(bestdate);
    document.getElementById('times').innerHTML = bestdate;
 

 
  document.getElementById('rank1').innerHTML = `<p class="nytitem" ><span>${rank}</span>  ${book}</br>${author}</p>`;
  document.getElementById('det1').innerHTML = `<a class="nytlink" href="${img}">READ</a>`;
 
  document.getElementById('rank2').innerHTML = `<p class="nytitem" ><span>${rank2}</span>  ${book2} </br>${author2}</p>`;
  document.getElementById('det2').innerHTML = `<a class="nytlink href="${img2}">READ</a>`;

  document.getElementById('rank3').innerHTML = `<p class="nytitem" ><span>${rank3}</span>  ${book3} </br>${author3}</p>`;
  document.getElementById('det3').innerHTML = `<a class="nytlink href="${img3}">READ</a>`;

  document.getElementById('rank4').innerHTML = `<p class="nytitem" ><span>${rank4}</span>  ${book4} </br>${author4}</p>`;
  document.getElementById('det4').innerHTML = `<a class="nytlink href="${img4}">READ</a>`;

  document.getElementById('rank5').innerHTML = `<p class="nytitem" ><span>${rank5}</span>  ${book5} </br>${author5}</p>`;
  document.getElementById('det5').innerHTML = `<a class="nytlink href="${img5}">READ</a>`;



  })
  
