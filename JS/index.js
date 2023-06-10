let button = document.getElementsByClassName('button');
const time = document.querySelector('#time'),
      logIn = document.getElementById('logIn'),
      dropdown = document.getElementById('services'),
      searchButoon = document.getElementById('search-btn'),
      modal = document.getElementById('modals'),
      closebutoon = document.getElementById('modals'),
     comment = document.getElementById('comment');


console.log(searchButoon)
console.log(modal)
console.log(closebutoon)
searchButoon.addEventListener('click',(e)=>

modal.style.display = 'block',
// e.preventDefault(),
//alert('Search Function under development '),

)


closebutoon.addEventListener('click',function(){
  modal.style.display = 'none'; 
})
comment.addEventListener('click',()=>
alert('Comment Functionality Under Development Comming Soon.Thanks for Choosing Us'))

 for ( x= 0; x <button.length;x++)
 {
    button[x].addEventListener('click',() => window.location="B:\\tnc-company-projects\\company-website\\bootsrap-website\\html.pages\\service.html");
    
 }
 console.log(logIn)
//  logIn.addEventListener('click',() => window.location="B:\\tnc-company-projects\\company-website\\bootsrap-website\\html.pages\\administration.html");
   
 // function for setting yearin the footer
 time.innerHTML = new Date().getFullYear();


 // dropdown
 console.log(dropdown)
dropdown.addEventListener('mouseover',() =>dropdownfunction());
   
function dropdownfunction(){
   dropdown.style.display = 'block';
}
   