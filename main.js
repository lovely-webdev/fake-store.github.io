fetch('https://dummyjson.com/products').then((data)=>{
   // console.log(data);
    return data.json();
}).then((completedata)=>{
    //console.log(completedata.products[2].title);   
    let data1 = "";
    details =  completedata.products.map((values)=>{
         data1 += `
         <div class="col-md-3 product_main p-3">
         <img src="${values.thumbnail}" class="card-img-top" alt="...">
         <div class="product text-capitalize pt-3">
           <h5 class="product-title">${values.title}</h5>
           <p class="description">${values.description}</p>
         </div>
         
         <ul class="list-group list-group-flush">
           <p class="category text-capitalize text-warning"><span class="p-2"><i>${values.category}</i></span>|<span class="p-2"><i>${values.brand}</i></span>|<span class="p-2"><i>Stock Left: ${values.stock}</i></span></p>
           <p class="price p-2 bg-warning text-capitalize fs-5"><b>$${values.price}</b></p>
         </ul>
       </div>`;
       document.getElementById("products").innerHTML = data1;

       
    })
}).catch((err)=>{
    console.log(err)
})
