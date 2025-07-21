   let hardcodedProducts = [
 {
        name: "Apple iPhone",
        tittle: "15 Pro Max",
        price: "Rs. 420,000",
        display : " Display: 6.7 Super Retina XDR",
        ram : " RAM: 8 GB",
        image: "./images/mobile-sell.avif" , 
        images : [
          "./images/iphone6.avif",
            // "./images/iphone19.avif" ,
            "./images/iphone14.avif" ,
            "./images/iphone20.avif" ,
            "./images/iphone22.avif" ,
            "./images/iphone21.avif" 
        ]

      },
      {
        name: "Toyota Corolla",
        tittle: "Altis 1.8L 2023",
        price: "Rs. 3,250,000",
         display : " Display: 6.7 Super Retina XDR",
        ram : " RAM: 8 GB",
        image: "./images/cardis.avif",
        images : [
            // "./images/car3.avif" ,
            "./images/car7.avif" ,
            "./images/car6.avif" ,
            "./images/car1.avif" , 
            "./images/car4.avif" ,
            "./images/car5.avif" 
        ]
      },
      {
        name: "Property for Rent",
        tittle: "2 Bed Apartment",
        price: "Rs. 45,000/month",
         display : " Display: 6.7 Super Retina XDR",
        ram : " RAM: 8 GB",
        image: "./images/property-rent.avif",
        images : [
          "./images/rent6.avif",
          "./images/rent1.avif",
          "./images/rent2.avif",
          "./images/rent3.avif",
          "./images/rent4.avif"
          // "./images/rent5.avif"
        ]
      },
      {
        name: "Property for Sale",
        tittle: "10 Marla House",
        price: "Rs. 18000000",
         display : " Display: 6.7 Super Retina XDR",
        ram : " RAM: 8 GB",
        image: "./images/property-sell.jpg",
        images : [
              "./images/sale1.avif",
              // "./images/sale2.avif",
              "./images/sale3.avif",
              "./images/sale4.avif",
              "./images/sale5.avif",
              "./images/sale6.avif"
        ]
      },
      {
        name: "Canon Camera",
        tittle: "DSLR 1500D",
        price: "Rs. 120,000",
         display : " Display: 6.7 Super Retina XDR",
        ram : " RAM: 8 GB",
        image: "./images/camrera-sell.jpg",
        images : [
          "./images/camera8.avif",
              // "./images/camera7.avif",
              "./images/camera3.avif",
              "./images/camera4.avif",
              "./images/camera5.avif",
              "./images/camera6.avif",
        ]
      },
      {
        name: "Running Business",
        tittle: "Grocery Store",
        price: "Rs. 700,000",
         display : " Display: 6.7 Super Retina XDR",
        ram : " RAM: 8 GB",
        image: "./images/bussiness-sell.jpg",
        images : [
             "./images/filter1.webp",
             "./images/filter2.webp",
            //  "./images/filter3.webp",
             "./images/filter4.webp",
             "./images/filter7.webp",
             "./images/filter8.webp",

        ]
      },
      {
        name: "Honda Bike",
        tittle: "125cc 2022 Model",
        price: "Rs. 165,000",
         display : " Display: 6.7 Super Retina XDR",
        ram : " RAM: 8 GB",
        image: "./images/bike--sell.jpg",
        images : [
              // "./images/bike3.avif",
              "./images/bike4.avif",
              "./images/bike5.avif",
              "./images/bike2.avif",
              "./images/bike6.avif",
              "./images/bike8.avif"
        ]
      },
      {
        name: "Job Offer",
        tittle: "Graphic Designer - Remote",
        price: "Salary: Rs. 60,000",
         display : " Display: 6.7 Super Retina XDR",
        ram : " RAM: 8 GB",
        image: "./images/jobs.jpg",
        images : [
              "./images/job2.avif",
              "./images/job1.avif",
              "./images/job3.avif",
              "./images/job4.avif",
              // "./images/job5.avif",
              "./images/job6.avif"
        ]
      },
      {
        name: "Home Services",
        tittle: "AC Repair & Cleaning",
        price: "Starting Rs. 1,000",
        display : " Display: 6.7 Super Retina XDR",
        ram : " RAM: 8 GB",
        image: "./images/services-sell.jpg",
        images : [
          // "./images/service4.avif",
          "./images/service1.avif",
          "./images/service2.avif",
          "./images/service3.avif",
          "./images/service5.avif",
          "./images/service6.avif"
        ]
      }
    ];

let newProducts = JSON.parse(localStorage.getItem("allProduct")) || [];

// Dono ko combine karwaya hai 
let allCombined = [...hardcodedProducts, ...newProducts];

//  jo card Show krwa rha hon
let show = document.getElementById("show");
show.innerHTML = "";

for (let i = 0; i < allCombined.length; i++) {
  show.innerHTML += `
    <div id="carddis">
      <img src="${allCombined[i].image}">
      <h2>${allCombined[i].name}</h2>
      <h3>${allCombined[i].tittle}</h3>
      <p>${allCombined[i].price}</p>
      <p>${allCombined[i].display}</p>
      <p>${allCombined[i].ram}</p>
      <button onclick="viewDetail(${i})" style="margin: 0 16px 16px; padding: 10px 0; width: calc(100% - 32px); border: none; background: linear-gradient(135deg, #3b82f6, #2563eb); color: white; font-size: 15px; font-weight: bold; border-radius: 8px; cursor: pointer; transition: background 0.3s ease;">View Details</button>
    </div>
  `;
}

//  View Detail Function
function viewDetail(index) {
  let selected = allCombined[index];
  localStorage.setItem("selectProduct", JSON.stringify(selected));
  window.location.href = "display.html";
}

