console.log('\n create a new product');
const p1 = {id:3, title : 'Skybag', price: 600, description: 'bags', category: 'luggage bags'};
fetch(`http://localhost:5000/api/products/create`,
{
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(p1)
})
.then((response)=>response.json())
.then((data)=>console.log(data))
.catch((error)=>console.log(error));

console.log('\n find products');
fetch(`http://localhost:5000/api/products`)
.then((response)=>response.json())
.then((data)=>console.log(data))
.catch((error)=>console.log(error));

console.log('\n find one product');
fetch(`http://localhost:5000/api/products/find?id=${2}`)
.then((response)=>response.json())
.then((data)=>console.log(data))
.catch((error)=>console.log(error));


console.log('\n delete products');
fetch(`http://localhost:5000/api/products/delete?id=${2}`,{
    method: 'DELETE'
})
.then((response)=>response.json())
.then((data)=>console.log(data))
.catch((error)=>console.log(error));

console.log('\n update products');
p1.price = 900;
fetch(`http://localhost:5000/api/products/update`,
{
    method: 'PUT',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(p1)
}
)
