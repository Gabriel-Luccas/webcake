const imageContainer = document.querySelector('.image-container');
let isDown = false; // Indica se o mouse está pressionado
let startX; // Posição inicial do mouse
let scrollLeft; // Posição inicial do container
let scrollSpeed = 2; // Controla a velocidade de rolagem
let momentum = 0; // Usado para calcular a inércia

// Função para iniciar o arrasto
imageContainer.addEventListener('mousedown', (e) => {
    isDown = true; // Define como pressionado
    imageContainer.classList.add('active'); // Adiciona classe ativa para estilos
    startX = e.pageX - imageContainer.offsetLeft; // Captura a posição do mouse
    scrollLeft = imageContainer.scrollLeft; // Captura a posição do scroll
    momentum = 0; // Reseta o momentum ao começar o arrasto
});

// Função para finalizar o arrasto
imageContainer.addEventListener('mouseleave', () => {
    isDown = false; // Para o arrasto ao sair do container
    imageContainer.classList.remove('active');
});

imageContainer.addEventListener('mouseup', () => {
    isDown = false; // Para o arrasto ao soltar o mouse
    imageContainer.classList.remove('active');
    
    // Inércia ao soltar o mouse
    momentum = (event.pageX - startX) * scrollSpeed; // Calcula o momentum
    smoothScroll(momentum); // Chama a função de rolagem suave
});

// Função para arrastar as imagens
imageContainer.addEventListener('mousemove', (e) => {
    if (!isDown) return; // Verifica se o mouse está pressionado
    e.preventDefault(); // Impede a seleção de texto
    const x = e.pageX - imageContainer.offsetLeft; // Posição atual do mouse
    const walk = (x - startX) * scrollSpeed; // Calcula a distância de arrasto
    imageContainer.scrollLeft = scrollLeft - walk; // Move o container
});

// Função para rolagem suave após soltar o mouse
function smoothScroll(velocity) {
    if (Math.abs(velocity) < 1) return; // Para se a velocidade for baixa

    imageContainer.scrollLeft += velocity; // Aplica a velocidade ao scroll
    velocity *= 0.95; // Reduz a velocidade para simular a inércia
    requestAnimationFrame(() => smoothScroll(velocity)); // Chama a função novamente para continuidade
}
