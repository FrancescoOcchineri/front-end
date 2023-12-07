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
        row.className = 'col-3';
        let card = document.createElement('div');
        card.className = 'card h-100';
        let img = document.createElement('img');
        img.src = book.img;
        img.className = 'card-img-top h-100';
        card.appendChild(img);
        let cardBody = document.createElement('div');
        cardBody.className = 'card-body';
        let titleBook = document.createElement('h5');
        titleBook.innerText = book.title;
        let price = document.createElement('p');
        price.innerText = book.price + '€';
        let category = document.createElement('span');
        category.className = 'badge rounded-pill text-bg-dark'
        category.innerText = book.category;
        let button = document.createElement('a');
        button.className = 'btn btn-danger d-flex flex-column mt-4';
        button.innerText = 'Aggiungi al carrello'
        let button2 = document.createElement('a');
        button2.className = 'btn btn-white text-danger border border-danger d-flex flex-column mt-2';
        button2.innerText = 'Scarta';
        cardBody.appendChild(titleBook);
        cardBody.appendChild(price);
        cardBody.appendChild(category);
        cardBody.appendChild(button);
        cardBody.appendChild(button2);
        card.appendChild(cardBody);
        row.appendChild(card)
        column.appendChild(row)
    })
    cardContainer.appendChild(column);
} 
