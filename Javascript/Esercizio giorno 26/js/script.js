document.addEventListener('DOMContentLoaded', () => {
    let loadImg = document.querySelector('.btn.btn-primary')
    let small = document.querySelectorAll('small')
    small.forEach(id => {
        id.innerHTML = ''
    })

    loadImg.addEventListener('click', () => {
        fetch('https://api.pexels.com/v1/search?query=space', {
            method: 'GET',
            headers: {
                Authorization: 'q9diO46tgSK3k0XCZxAnPsoArCkL456KYymATrl0dQAmCltxLYNAbQvI'
            }
        })
            .then(response => response.json())
            .then(json => {
                let textMutedElements = document.querySelectorAll('.card .text-muted');
                json.photos.forEach((photo, index) => {
                    if (textMutedElements[index]) {
                        textMutedElements[index].innerHTML = photo.id;
                    }
                    let img = document.querySelectorAll('img');
                    if (img[index]) {
                        img[index].src = photo.src.medium;
                    }
                });
            })
            .catch(error => {
                console.error('Errore durante la fetch:', error);
            });
    });
    let loadImg2 = document.querySelector('.btn.btn-secondary');

    loadImg2.addEventListener('click', () => {
        fetch('https://api.pexels.com/v1/search?query=nature', {
            method: 'GET',
            headers: {
                Authorization: 'q9diO46tgSK3k0XCZxAnPsoArCkL456KYymATrl0dQAmCltxLYNAbQvI'
            }
        })
            .then(response => response.json())
            .then(json => {
                let textMutedElements = document.querySelectorAll('.card .text-muted');
                json.photos.forEach((photo, index) => {
                    if (textMutedElements[index]) {
                        textMutedElements[index].innerHTML = photo.id;
                    }
                    let img = document.querySelectorAll('img');
                    if (img[index]) {
                        img[index].src = photo.src.medium;
                    }
                });
            })
            .catch(error => {
                console.error('Errore durante la fetch:', error);
            });
    })

    let editButtons = document.querySelectorAll('.edit');
    editButtons.forEach(editButton => {
        editButton.innerHTML = 'Hide'
        editButton.addEventListener('click', () => {
            let card = editButton.closest('.card');
            card.remove();
        })
    })

    let buttonInput = document.querySelector('.btn-outline-secondary')
    buttonInput.addEventListener('click', () => {
        let input = document.querySelector('input');
        let inputValue = input.value;
        if (inputValue.trim() !== '') {
            fetch(`https://api.pexels.com/v1/search?query=${(inputValue)}`, {
                method: 'GET',
                headers: {
                    Authorization: 'q9diO46tgSK3k0XCZxAnPsoArCkL456KYymATrl0dQAmCltxLYNAbQvI'
                }
            })
                .then(response => response.json())
                .then(json => {
                    let textMutedElements = document.querySelectorAll('.card .text-muted');
                    json.photos.forEach((photo, index) => {
                        if (textMutedElements[index]) {
                            textMutedElements[index].innerHTML = `ID: ${photo.id}`;
                        }
                        let img = document.querySelectorAll('img');
                        if (img[index]) {
                            img[index].src = photo.src.medium;
                        }
                    });
                })
                .catch(error => {
                    console.error('Errore durante la fetch:', error);
                });
        }
    });
    let img = document.querySelectorAll('img');
    console.log(img)
    img.forEach(image => {
        image.addEventListener('click', () => {
            let iframe = document.createElement('iframe');
            iframe.src = 'nuova_pagina.html';
            iframe.width = '100%';
            iframe.height = '500px';
            image.appendChild(iframe);
        })
    })

});