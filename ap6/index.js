// var res=fetch('https://dummyjson.com/carts');
// console.log(res);
// displaying json format data in tables
fetch('https://dummyjson.com/carts')
.then(response => response.json())
.then(res =>{
    // const data=res.carts[0].products;
    let rows = '';
    res.carts.forEach(cart =>{
        cart.products.forEach(product =>{
            rows +=`<tr><td>${product.id}</td><td>${product.title}</td><td>${product.price}</td><td>${product.quantity}</td><td>${product.total}</td><td>${product.discountPercentage}</td><td>${product.discountedPrice}</td><td><img src="${product.thumbnail}" style="width:20%"></td></tr>`;
        })
    })
    document.getElementById("tableRows").innerHTML=rows;
    })
.catch(error =>{console.log("error");})

// fetch('https://dummyjson.com/carts')
// .then(res => console.log(result))
// .catch(error => console.log(error))