
const userContainer = document.getElementById('products');
const getProducts = () =>{
    return fetch('https://dummyjson.com/products?limit=8')
    .then(response => response.json())
    .then(response => response)
    .catch(error => error)
    
}
getProducts();
const displayProduct = async() => {
const products = await getProducts();
console.log(products)
products.products.map(item =>{
let div = document.createElement('div');
let image = document.createElement('img')
let tittle= document.createElement('h2')
let rate = document.createElement('p')
let userName = document.createElement('p')


image.src = item.thumbnail;
tittle.innerHTML = `${item.brand}`
rate.innerHTML = `${item.rating}`;
userName.innerHTML = item.price;
div.appendChild(image);
div.appendChild(tittle);
div.appendChild(userName);
div.setAttribute('key', item.id);
div.setAttribute('class', 'people');
userContainer.appendChild(div);
});
};
displayProduct();


