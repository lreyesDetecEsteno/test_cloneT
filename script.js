// Función para mezclar un array usando el algoritmo de Fisher-Yates
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        // Genera un índice aleatorio entre 0 y i
        const j = Math.floor(Math.random() * (i + 1));
        // Intercambia los elementos array[i] y array[j]
        [array[i], array[j]] = [array[j], array[i]];
    }
}




const profiles = [
    {
        name: "Novi",
        description: "Hola, soy el Novi y sobreviví a la picadura de una araña....\nUna es mentira, la otra es verdad\n1- me picó una araña\n2- tengo la mea tula",
        images: [
            "images/novi4.png",
            "images/novi3.png",
            "images/novi2.png"
        ]
    },
    {
        name: "Luis",
        description: "La funa me persigue, pero como me falta una costilla, voy más rápido\nTe dije que soy DJ?\n\n¿a cuánto el gogoh?",
        images: [
            "images/lucho1.png",
            "images/lucho2.png",
            "images/lucho3.png"
        ]
    },
    {
        name: "Germancito",
        description: "Soy lo más cercano a un tío facho que podrás tener....\ncuando tomo piscolas, se asoma mi personalidad: el tío GTA\npor último y lo más importante....y el pico?",
        images: [
            "images/german1.png",
            "images/german2.png",
            "images/german3.png"
        ]
    },

    {
        name: "Skelly",
        description: "soy la Skelly, desde La Serena con todo el flow\nDescuídame 5 segundos y te dibujo embarazado\nTe conté que tengo un podcast con el Taku?\nCompra poleras si vas a la serena, por favor...\nuwu",
        images: [
            "images/skelly1.png",
            "images/skelly2.png",
            "images/skelly3.png"
        ]
    }, 
    {
        name: "Gio",
        description: "Dame 5 segundos y te dejo el baño con pecas\nFui a la piscina y me enfermé\nLeo los mensajes de tinder en el baño\nSalí a comprar pan y no he vuelto ",
        images: [
            "images/gio1.png",
            "images/gio2.png",
            "images/gio3.png"
        ]
    },
    {
        name: "Razi",
        description: "Me duele siempre la guata, así que no me invites a comer\nBueno, invítame a comer, no hay problema\nFui a una piscina y me enfermé\nTe leo mientras me tomo mi segunda once",
        images: [
            "images/razi1.png",
            "images/razi2.png",
            "images/razi3.png"
        ]
    },

    {
        name: "Danni",
        description: "Premio o castigo?\nBroma, pero si quieres no es broma\nJugador recien empezando en intermedio",
        images: [
            "images/dani1.png",
            "images/dani2.png",
            "images/dani3.png"
        ]
    },

    {
        name: "Xuma World Champ",
        description: "Tienes dos segundos para dar like y ponerte a la fila para que te hable...",
        images: [
            "images/xuma1.png",
            "images/xuma2.png",
            "images/xuma3.png"
        ]
    },

    {
        name: "Takurillo",
        description: "somos dos personas atrapadas en un cuerpo\nLunes martes miércoles, atiende César\nJueves, viernes sábado el Taku\nDomingo se descansa",
        images: [
            "images/taku1.png",
            "images/taku2.png",
            "images/taku3.png",
            "images/taku4.png",
            "images/taku5.png",
            "images/taku6.png",
        ]
    },


    // Agrega más perfiles aquí
];

const cardContainer = document.getElementById('card-container');
const likeButton = document.getElementById('like-button');
const dislikeButton = document.getElementById('dislike-button');

let currentProfileIndex = 0;

// Mezclar el array de perfiles al cargar la página
shuffleArray(profiles);

// Función para mostrar el siguiente perfil
function showNextProfile() {
    cardContainer.innerHTML = '';
    if (currentProfileIndex >= profiles.length) {
        // No hay más perfiles
        const noMore = document.createElement('div');
        noMore.classList.add('card', 'no-more');
        noMore.innerText = "No hay más perfiles";
        cardContainer.appendChild(noMore);
        return;
    }

    const profile = profiles[currentProfileIndex];
    const card = document.createElement('div');
    card.classList.add('card');

    // Crear el carrusel de imágenes
    const carousel = document.createElement('div');
    carousel.classList.add('image-carousel');

    profile.images.forEach((imgSrc, index) => {
        const img = document.createElement('img');
        img.src = imgSrc;
        if (index === 0) img.classList.add('active');
        carousel.appendChild(img);
    });

    // Botones del carrusel
    const carouselButtons = document.createElement('div');
    carouselButtons.classList.add('carousel-buttons');

    const prevButton = document.createElement('button');
    prevButton.innerHTML = '&#10094;'; // Símbolo de izquierda
    carouselButtons.appendChild(prevButton);

    const nextButton = document.createElement('button');
    nextButton.innerHTML = '&#10095;'; // Símbolo de derecha
    carouselButtons.appendChild(nextButton);

    carousel.appendChild(carouselButtons);
    card.appendChild(carousel);

    // Información del perfil
    const profileInfo = document.createElement('div');
    profileInfo.classList.add('profile-info');

    const nameTag = document.createElement('div');
    nameTag.classList.add('profile-name');
    nameTag.innerText = profile.name;
    profileInfo.appendChild(nameTag);

    const description = document.createElement('div');
    description.classList.add('profile-description');
    description.innerHTML = profile.description.replace(/\n/g, '<br>');
    profileInfo.appendChild(description);

    card.appendChild(profileInfo);

    cardContainer.appendChild(card);

    // Lógica del carrusel
    let currentImageIndex = 0;
    const images = carousel.querySelectorAll('img');

    prevButton.addEventListener('click', () => {
        images[currentImageIndex].classList.remove('active');
        currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
        images[currentImageIndex].classList.add('active');
    });

    nextButton.addEventListener('click', () => {
        images[currentImageIndex].classList.remove('active');
        currentImageIndex = (currentImageIndex + 1) % images.length;
        images[currentImageIndex].classList.add('active');
    });
}

// Función para manejar like
function like() {
    animateCard('right');
    console.log(`Has dado like a ${profiles[currentProfileIndex].name}`);
    currentProfileIndex++;
    setTimeout(showNextProfile, 300);
}

// Función para manejar dislike
function dislike() {
    animateCard('left');
    console.log(`Has dado dislike a ${profiles[currentProfileIndex].name}`);
    currentProfileIndex++;
    setTimeout(showNextProfile, 300);
}

// Función para animar la tarjeta
function animateCard(direction) {
    const card = document.querySelector('.card');
    if (card) {
        if (direction === 'right') {
            card.style.transform = 'translateX(100%) rotate(20deg)';
            card.style.opacity = '0';
        } else {
            card.style.transform = 'translateX(-100%) rotate(-20deg)';
            card.style.opacity = '0';
        }
    }
}

// Event Listeners para los botones
likeButton.addEventListener('click', like);
dislikeButton.addEventListener('click', dislike);

// Mostrar el primer perfil al cargar
showNextProfile();