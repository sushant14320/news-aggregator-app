

document.onreadystatechange = function() { 
  if (document.readyState !== "complete") { 
      document.querySelector( 
        "body").style.visibility = "hidden"; 
      document.querySelector( 
        "#loader").style.visibility = "visible"; 
  } else { 
      document.querySelector( 
        "#loader").style.display = "none"; 
      document.querySelector( 
        "body").style.visibility = "visible"; 
  } 
};


  getdata();

  function search(){

    
var searchData = document.getElementById("search").value;
const key = "897c2e65625e425396495470aef7fadd";

const url = `https://newsapi.org/v2/everything?q=${searchData}&apiKey=${key}`

UserSearch();
async function UserSearch(){
  const response  = await fetch(url);
  const dataOf = await response.json();
  console.log(dataOf);
  if(dataOf.articles.length == 0)
  {

  
    var nodata = ` <div class="not-found">No article was found based on the search.</div>`;
    document.getElementById("news-articles").innerHTML = nodata;
    console.log("else executed");
  
    
} // end of then               
else
{
  dataOf.articles.forEach(article =>{

    const title = article.title;
    const img = article.urlToImage;
    const description = article.description;
    const auth = article.author;
    const link = article.url;
    const source = article.source.name;
 
    squery+=`
    <div class="main_card" style="width:400px;">
     
    <li class="article">
      
        
            
           <img class="article-img" src="${img}"  width="100%">
            
           <h2 class="article-title">${title}-${source}</h2><br>
            
            <p class="article-description">${description}</p><br>
            
            <span class="article-author">${auth} </span><br><br><br>
            
            <a class="article-link" href="${link}"><b>Full article</b></a><br><br><br><br>
    
       
        </li>
    </div>
    
    `
    document.getElementById("news-articles").innerHTML = squery;

  })
  var squery =+ ''
  
  
}



} //end of for loop

// searchData.addEventListener("input", function(event){

//   if(!this.value){
//     document.getElementById("news-articles").innerHTML = out;
//   }
  
//   })


  }

 

//Toggling the dark mode
  function myFunction() {
    var element = document.body;
    
    element.classList.toggle("dark-mode");
   
    
 }

 //fetching the data

async function getdata() {
  const res = await fetch('https://newsapi.org/v2/top-headlines?country=in&apiKey=897c2e65625e425396495470aef7fadd');
  const data = await res.json();
  
  console.log(data);
  
 
  data.articles.forEach(news =>{
    
    const title = news.title;
    const img = news.urlToImage;
    const description = news.description;
    const auth = news.author;
    const link = news.url;
    const source = news.source.name;



    out+=`
   <div class="main_card" style="width:400px;">
     
    <li class="article">
      
        
       
       
           <img class="article-img" src="${img}"  height="100%"  width="100%">
            
            <h2 class="article-title">${title}-${source}</h2><br>
            
            <p class="article-description">${description}</p><br>
            
            <span class="article-author">${auth}</span><br><br><br>
            
            <a class="article-link" href="${link}"><b>Full article</b></a><br><br><br><br>
    
        
       
     </li>
    
     </div>
  
    
    
    `
    document.getElementById("news-articles").innerHTML = out;
        
  })
 var out =+ '';




}

 


//search results apear on hitting enter

let input = document.getElementById("search");
input.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
   event.preventDefault();
   search();
  }
});