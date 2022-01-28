let products = [];
let cartItems = [];
let productsCount = 0;
let isEmptyProductList = true;
let isEmptyCartList = true;
const productList = document.getElementById('productList');
const cartList = document.getElementById('cartList');
productList.innerHTML = "Empty Product List"
cartList.innerHTML = "Empty Cart"

function validateAndAddProduct(){
    let productName = document.getElementById('productName').value;
    let productImageLink = document.getElementById('productImage').value;
    productImageLink = productImageLink.replace("C:\\fakepath\\","");
    let productdiscription = document.getElementById('productDiscription').value;
    let quantity = document.getElementById('productQuantity').value;
    let price = document.getElementById('productPrice').value;
        
    const product = {
        "productID" : ++productsCount,
        "productName" : productName,
        "productImageLink" : productImageLink,
        "productdiscription" : productdiscription,
        "quantity" : quantity,
        "price" : price,
    };

    products.push(product);
    populate(productsCount, productList, 'product');
}


// Populating the Product & cart Area with Products on user click
function populate(id, resultDiv, populating){
    if(isEmptyProductList) checkEmptyProductList();
    // creating required elements for Product / Cart 
    let divCard = document.createElement('div');
    divCard.className = "card mt-1";

    let productRow = document.createElement('div');
    productRow.className = 'row align-items-center';

    let col1 = document.createElement('div');
    col1.className = 'col col-lg-3 col-md-3 col-sm-12 col-12';
    let image = document.createElement('img'); 
    image.className = 'img-fluid';

    let col2 = document.createElement('div');
    col2.className = 'col col-lg-9 col-md-9 col-sm-12 col-12';

    let productDetailRow = document.createElement('div');
    productDetailRow.className = 'row align-items-center';

    let productDetailCol1 = document.createElement('div');
    productDetailCol1.className = 'col col-lg-4 col-md-4 col-sm-12 col-12';

    let productDetailCol2 = document.createElement('div');
    productDetailCol2.className = 'col col-lg-4 col-md-4 col-sm-12 col-12';
    
    let productDetailCol3 = document.createElement('div');
    productDetailCol3.className = 'col col-lg-4 col-md-4 col-sm-12 col-12';
    
    let addToCartButton = document.createElement('button');
    
    // staging details for either product or cart 
    if(populating == 'product') {
        let index = id - 1;
        addToCartButton.id = productsCount;
        divCard.id = 'product' + id;
        image.src = products[index].productImageLink;
        productDetailCol1.innerHTML = 'Name : ' + products[index].productName + '<br> Discription : ' + products[index].productdiscription;
        productDetailCol2.innerHTML = 'Price : ' + products[index].price + '<br>Quantity : <span id="productQuantity' + id + '"> ' + products[index].quantity + '</span>';
        addToCartButton.className = 'btn btn-primary';
        addToCartButton.innerHTML = 'Add to Cart';
        addToCartButton.onclick = function () { addToCart(this.id) };
    } else {
        let cartIndex = cartItems.findIndex( (cart) => cart.productID == id );
        image.src = cartItems[cartIndex].productImageLink;
        addToCartButton.id = 'cartDeleteButton' + id;
        divCard.id = 'cart' + id;
        productDetailCol1.innerHTML = 'Name : ' + cartItems[cartIndex].productName;
        productDetailCol2.innerHTML ='<span id="cartProductQuantity' + id + '"> ' + cartItems[cartIndex].quantity + '</span> x ' + cartItems[cartIndex].price + ' = <span id="cartProductTotal' + id + '"> ' +(cartItems[cartIndex].quantity * cartItems[cartIndex].price) + '</span>';
        addToCartButton.className = 'btn btn-danger';
        addToCartButton.innerHTML = 'Delete';
        addToCartButton.onclick = function () { deleteFromCart(this.id) };
    }

    // merging all nodes
    col1.appendChild(image);
    productDetailRow.appendChild(productDetailCol1);
    productDetailRow.appendChild(productDetailCol2);
    productDetailCol3.appendChild(addToCartButton);
    productDetailRow.appendChild(productDetailCol3);
    col2.appendChild(productDetailRow);

    productRow.appendChild(col1);
    productRow.appendChild(col2);
    divCard.appendChild(productRow);
    resultDiv.appendChild(divCard);
}


// Adding product to cart 
function addToCart(id) {
    if(isEmptyCartList) checkEmptyCartList();
    let index = id - 1;
    let cartindex = cartItems.findIndex( (product) => product.productID == id );
    let quantity = 1;
    quantity = parseInt(prompt("Enter quantity",1));
    if(quantity <= products[index].quantity && quantity > 0){
        if(cartindex >= 0) {
            products[index].quantity -= quantity;
            cartItems[cartindex].quantity += quantity;
            document.getElementById('productQuantity' + id).innerHTML = products[index].quantity;
            document.getElementById('cartProductQuantity' + id).innerHTML = cartItems[cartindex].quantity;
            document.getElementById('cartProductTotal' + id).innerHTML = cartItems[cartindex].quantity * cartItems[cartindex].price;
        } else {
            const productToCart = {
                "productID" : products[index].productID,
                "productName" : products[index].productName,
                "productImageLink" : products[index].productImageLink,
                "quantity" : quantity,
                "price" : products[index].price,
            };
            cartItems.push(productToCart);
            populate(products[index].productID, cartList, 'cart');
            products[index].quantity -= quantity;
            document.getElementById('productQuantity' + id).innerHTML = products[index].quantity;   
        }
        updateTotal();
        let addToCartButton = document.getElementById(id);
        if(products[index].quantity == 0){
            addToCartButton.disabled = true;
            addToCartButton.innerHTML = "Out Of Stock";
            addToCartButton.className = "btn btn-danger";
        }    
    } else {
        alert('Invalid Quantity');
    }
}


// deleteFromCart
function deleteFromCart(id) {
    let productid = parseInt(id.replace("cartDeleteButton", ""));
    let cartIndex = cartItems.findIndex( (product) => product.productID == productid );
    let restoreQuantity = cartItems[cartIndex].quantity;

    cartItems.splice(cartIndex,1);
    document.getElementById('cart' + productid).remove();
    products[productid-1].quantity += restoreQuantity;
    document.getElementById('productQuantity' + productid).innerHTML = products[productid-1].quantity;
    let checkAddToCartButton = document.getElementById(productid);
    if(cartItems.length == 0) {
        cartList.innerHTML = "Empty Cart";
        isEmptyCartList = true;
    }
    if(checkAddToCartButton.disabled) {
        checkAddToCartButton.disabled = false; 
        checkAddToCartButton.innerHTML = "Add To Cart";
        checkAddToCartButton.className = "btn btn-primary";
    }
    updateTotal();
}

function checkEmptyProductList() {
    productList.innerHTML = "";
    isEmptyProductList = false;
}

function checkEmptyCartList() {
    cartList.innerHTML = "";
    isEmptyCartList = false;
}

function updateTotal() {
    let total = 0;
    cartItems.forEach((cartItem) => total+= cartItem.quantity * cartItem.price);
    document.getElementById('cartTotal').innerHTML = total;
}