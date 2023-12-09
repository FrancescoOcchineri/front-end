let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://striveschool-api.herokuapp.com/books');
xhr.send();
xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
        console.log('all its done');
        let json = xhr.responseText;
        let obj = JSON.parse(json)
        libreria(obj);
    }
}

function libreria(books) {
    let cardContainer = document.querySelector('.container');
    let column = document.querySelector('.row');
    books.forEach(book => {
        let row = document.createElement('div');
        row.className = 'col';
        let card = document.createElement('div');
        card.className = 'card h-100 shadow-sm';
        card.style.width = '100%';
        let img = document.createElement('img');
        img.src = book.img;
        img.className = 'card-img-top';
        card.appendChild(img);
        let cardBody = document.createElement('div');
        cardBody.className = 'card-body d-flex flex-column align-items-start';
        let titleBook = document.createElement('h5');
        titleBook.innerText = book.title;
        let category = document.createElement('span');
        category.className = 'badge rounded-pill text-bg-dark mb-2'
        let price = document.createElement('p');
        price.className = 'fs-4 mt-auto';
        price.innerText = book.price + '€';
        category.innerText = book.category;
        let button = document.createElement('a');
        button.className = 'btn btn-danger my-2';
        button.innerText = 'Aggiungi al carrello';

        // Evento click in cui clono la carta per inserirla nel carrello
        button.addEventListener('click', () => {
            let listShop = document.querySelector('.listShop');
            let clonedCard = card.cloneNode(true);
            clonedCard.className = 'd-flex d-row mb-3'
            let clonedButton = clonedCard.querySelector('.btn.btn-danger');
            clonedButton.remove();
            let clonedButton2 = clonedCard.querySelector('.btn.btn-white');
            clonedButton2.className = 'scarta btn btn-sm btn-danger border border-danger'
            clonedButton2.innerText = 'Rimuovi';
            let clonedBody = clonedCard.querySelector('.card-body')
            clonedBody.className = 'mx-2'
            let clonedImage = clonedCard.querySelector('.card-img-top')
            clonedImage.style.width = '100px';
            clonedImage.style.height = '150px';
            let clonedTitle = clonedCard.querySelector('h5')
            clonedTitle.className = 'fs-6'
            let clonedBadge = clonedCard.querySelector('span')
            clonedBadge.remove();
            let clonedPrice = clonedCard.querySelector('.fs-4')
            clonedPrice.className = 'fw-bold'
            clonedButton2.addEventListener('click', () => {
                clonedCard.remove();
            })
            listShop.appendChild(clonedCard);
            let cartItems = JSON.parse(localStorage.getItem('cart')) || [];
            cartItems.push({
                img: book.img,
                title: book.title,
                category: book.category,
                price: book.price,
            });
            localStorage.setItem('cart', JSON.stringify(cartItems));
        })


        let button2 = document.createElement('a');
        button2.className = 'scarta btn btn-white text-danger border border-danger';
        button2.innerText = 'Scarta';

        // Evento click per rimuovere la carta
        button2.addEventListener('click', () => {
            card.remove();
        })


        cardBody.appendChild(titleBook);
        cardBody.appendChild(category);
        cardBody.appendChild(price);
        cardBody.appendChild(button);
        cardBody.appendChild(button2);
        card.appendChild(cardBody);
        row.appendChild(card)
        column.appendChild(row)
    })
    cardContainer.appendChild(column);
}
