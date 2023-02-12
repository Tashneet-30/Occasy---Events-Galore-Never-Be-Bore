let http = new XMLHttpRequest();
http.open('get', 'hello.json', true);
http.send();
http.onload = function(){
   if(this.readyState == 4 && this.status == 200){
      let products = JSON.parse(this.responseText);
      let output = "";
      for(let item of products){
          
         console.log(item)
         output += `
         <div class="card" >

         <img src=${item["eventimage"]} class="card-img-top" alt="...">

         <h3>${item.eventname}</h3>
         <p>${item.eventdate}</p>
         <address>${item.eventvenue}</address>
         <div class="car-body">
             <p class="car-text">${item.eventdetails}</p>
         </div>
         <div class="car-body">
             <button><a href = "${item.eventlink}" >LOADMORE</a></button>
         </div>
     </div>
    



     
         `;
      }
      document.querySelector(".products").innerHTML = output;
   }
}