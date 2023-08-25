let list = document.querySelector('.products__list');

async function iterador() {
    try{
        const res = await fetch('http://localhost:5000/products/list');
        const products = await res.json();
        products.forEach(product => {
            list.innerHTML +=`
            <a class="card" href="">
                <div class="card__image_box">
                    <img class="card__image" src="${product.img}" alt="">
                </div>
                <div class="card__info_box">
                    <p class="card__title">${product.name}</p>
                    <p class="card__price">${product.price}$</p>
                </div>
                <div class="card__button_box">
                    <button class="button">
                        <img class="button__icon" src="../images/icons/cart.png" alt="">
                        <p class="button__text">agregar</p>
                    </button>
                </div>
            </a>`
        });
    }catch(error){
        console.log(error);
    };
};

let products = iterador();