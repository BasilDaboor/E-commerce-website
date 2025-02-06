function fetchData() {
    
    fetch('https://fakestoreapi.com/products') //after 1 min 
              .then(res=>res.json())
              .then(cardData=>{
                  let newArrivals = cardData.slice(17, 20);
                  return newArrivals;
              })
              .then(newArrivals =>{
                  console.log(newArrivals);
                  displayNewArrivalsP( newArrivals)
                  
              })
          }
          fetchData();


          function displayNewArrivalsP(newProductsArray){
            const newArrivals = document.getElementById("newArrivals");
         
             //create the header for the section
             let header = document.createElement("h2");
             header.innerText="New Arrivals"
             newArrivals.appendChild(header);
         
             //create a container for the 3 products
             let newProductsContainer = document.createElement("div");
             newProductsContainer.classList.add("ArrivalsContainer");
             //for each to create a 3 products card 
             newProductsArray.forEach((product)=>{
                 let ProductCard = document.createElement("div");
                 ProductCard.classList.add("ProductCard");
                 
                  let img = document.createElement('img');
                   img.src = product.image; 
         
                   let title = document.createElement('h3');
                   title.textContent = product.title;
         
                   ProductCard.append(img,title)
         
         
                   newProductsContainer.appendChild(ProductCard)
                   
             newArrivals.appendChild(newProductsContainer)
         
             })
         
            }
         