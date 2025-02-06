

function fetchNewArrivals() {
    
    fetch('https://fakestoreapi.com/products') 
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
          fetchNewArrivals();


          function displayNewArrivalsP(newProductsArray){
            const newArrivals = document.getElementById("newArrivals");
         
             //create the header for the section
             let header = document.createElement("h2");
             header.innerText="New Arrivals"
             newArrivals.appendChild(header);
         
             //create a container for the 3 products
             let newProductsContainer = document.createElement("div");
             newProductsContainer.classList.add("ArrivalsContainer");
             //for each to create a New Arrivals products card 
             newProductsArray.forEach((product)=>{
                 let ProductCard = document.createElement("div");
                 ProductCard.classList.add("ProductCard");
                 
                  let img = document.createElement('img');
                   img.src = product.image; 
         
                   let title = document.createElement('h3');
                   title.textContent = product.title;
                //Append the img and the title inside the product card
                   ProductCard.append(img,title)
         
         
                   newProductsContainer.appendChild(ProductCard)
                   
                 newArrivals.appendChild(newProductsContainer)
         
             })
         
            }
         
    
      

            // testimonial Section

            let testimonials= localStorage.getItem("userFeedback") 
            ?JSON.parse(localStorage.getItem("userFeedback")):[];
          
            // Function to create a testimonial card dynamically
function createTestimonialCard() {
    const testimonialContainer = document.createElement('div');
    testimonialContainer.classList.add('testimonial-card');

    // Add quote icons
    const quoteRight = document.createElement('div');
    quoteRight.classList.add('fas', 'fa-quote-right', 'fa-quote');
    testimonialContainer.appendChild(quoteRight);

    const quoteLeft = document.createElement('div');
    quoteLeft.classList.add('fas', 'fa-quote-left', 'fa-quote');
    testimonialContainer.appendChild(quoteLeft);

    // Create the testimonial paragraph
    const testimonialText = document.createElement('p');
    testimonialText.classList.add('testimonial');
    testimonialContainer.appendChild(testimonialText);

    // Create the user div
    const userDiv = document.createElement('div');
    userDiv.classList.add('user');
    testimonialContainer.appendChild(userDiv);

    // Create the user image
    const userImage = document.createElement('img');
    userImage.classList.add('user-image');
    userDiv.appendChild(userImage);

    // Create the user details div
    const userDetails = document.createElement('div');
    userDetails.classList.add('user-details');
    userDiv.appendChild(userDetails);

    // Create the username element
    const username = document.createElement('h4');
    username.classList.add('username');
    userDetails.appendChild(username);   

    return testimonialContainer; // Return the created element
}

// Append testimonial cards to the testimonial container
const testimonialSection = document.querySelector('.testimonial-container');

// Initialize index for testimonials
let idx = 0;

// Function to update testimonial dynamically
function updateTestimonial() {
    if (testimonials.length === 0) {
        const noTestimonialsMessage = document.createElement('p');
        noTestimonialsMessage.classList.add('noTestimonialsMessage');

        noTestimonialsMessage.textContent = "No testimonials available at the moment.";
        testimonialSection.innerHTML = ''; // Clear the section
        testimonialSection.appendChild(noTestimonialsMessage); // Add the "no testimonials" message
        return;
    }
    // Get current testimonial data
    const { name, photo, text } = testimonials[idx];

    // Create the testimonial card
    const testimonialCard = createTestimonialCard();

    // Update the content dynamically
    testimonialCard.querySelector('.testimonial').innerHTML = text;
    testimonialCard.querySelector('.user-image').src = photo;
    testimonialCard.querySelector('.username').innerHTML = name;

    // Clear the previous content and append the new testimonial card
    testimonialSection.innerHTML = ''; // Clears the previous content
    testimonialSection.appendChild(testimonialCard);

    idx = (idx + 1) % testimonials.length;
}

// Start updating the testimonial every 3 seconds
setInterval(updateTestimonial, 4000);

// Call it immediately to load the first testimonial right away
updateTestimonial();