
const audioTagsContainer = document.getElementById('audioTags');

// Crear dinámicamente 100 etiquetas de audio
for (let i = 1; i <= 30; i++) {
    const tagContainer = document.createElement('div'); // Contenedor para el audio y el texto
    tagContainer.classList.add('tag-container');

    // Crear el título de la etiqueta
    const tagLabel = document.createElement('p');
    tagLabel.textContent = `Audio ${i}`; //string con variables, convierte el número en un string; otra manera es 'Audio string(i)
    tagContainer.appendChild(tagLabel); //hijo con un texto y div general

    // Crear el elemento de audio
    const audioElement = document.createElement('audio'); //crea un elemento de audio
    audioElement.classList.add('tag');
    audioElement.controls = true; // Agregar controles para reproducir/pausar; true significa mostrar audio
    audioElement.src = `https://evolution.voxeo.com/library/audio/prompts/numbers/${i}.wav`; // Ruta al archivo de audio; se cambia la url para encontrar el número
    audioElement.onerror = () => console.log(`Audio ${i} no encontrado`); //se puede generar un error en código de flecha

    // Añadir el audio y el título al contenedor
    tagContainer.appendChild(audioElement); //se coloca un hijo
    audioTagsContainer.appendChild(tagContainer);
}


function openModal(imageSrc) {
    const modal = document.getElementById("modal");
    const modalImage = document.getElementById("modalImage");

    modal.style.display = "flex"; // Muestra el modal
    modalImage.src = imageSrc;    // Asigna la imagen seleccionada al modal
}

function closeModal() {
    const modal = document.getElementById("modal");
    modal.style.display = "none"; // Oculta el modal
}

closeModal();