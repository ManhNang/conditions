const imgDb = [
    [
        "img/row-1-img-1.jpg",
        "img/row-1-img-2.jpg",
        "img/row-1-img-3.jpg",
    ],
    [
        "img/row-2-img-1.jpg",
        "img/row-2-img-2.jpg",
        "img/row-2-img-3.jpg",
    ],
    [
        "img/row-3-img-1.jpg",
        "img/row-3-img-2.jpg",
        "img/row-3-img-3.jpg",
    ],
    [
        "img/row-4-img-1.jpg",
        "img/row-4-img-2.jpg",
        "img/row-4-img-3.jpg",
    ],
    [
        "img/row-5-img-1.jpg",
        "img/row-5-img-2.jpg",
        "img/row-5-img-3.jpg",
    ],
]

const pieces = document.querySelectorAll('.my-img');

function render() {
    pieces.forEach((piece, index) => {
        let currentIndex = parseInt(piece.getAttribute('data-current'));
        piece.src = imgDb[index][currentIndex];
    });
}

function checkWin(){
    let firstImg = pieces[0].getAttribute('data-current');
    let isWin = Array.from(pieces).every(piece => piece.getAttribute('data-current') === firstImg);

    pieces.forEach((piece) => {
        if(isWin){
            piece.classList.add('completed');
        }
        else piece.classList.remove('completed');
    })
}

pieces.forEach((piece) => {
    piece.addEventListener('click', () =>{
        let currentImg = parseInt(piece.getAttribute('data-current'));

        currentImg = (currentImg + 1) % 3;

        piece.setAttribute('data-current', currentImg);
        render();
        checkWin();
    })
})

render();