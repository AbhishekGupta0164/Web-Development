fetch("https://dummyjson.com/products")
  .then((response) => {
    return response.json()})
  .then((data) => {

    let body = document.querySelector("body");
    data.products.map((a) => {
      console.log(a);

      body.innerHTML += `<div style="border:1px solid black; 
           margin:20px;
           padding:10px;
           width:300px;
           border-radius:30px">
           <img src="${a.thumbnail}"
           width:"100px">
              <h3>${a.title}</h3>
              <h2>${a.brand}</h2>
              <h2>${a.price}</h2>
              <h2>${a.rating}</h2>
              <button oneclick="addToCart(${a.id})">Add To Cart</button>
            

              </div>`;

    });
    window.allP=data.products;
  });
    console.log(window);
    function addToCart(id) {
      let data=window.allP.find((a)=>{
        return a.id===id
      });
      console.log(data);
      localStorage.setItem("cart",JSON.stringify(data));
    }

