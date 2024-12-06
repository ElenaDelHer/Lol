// Importamos la clase Champion desde Champion.js
import Champion from './Champion.js';

// Creamos un array para los campeones
var champions = [];

// Seleccionamos el botón y agregamos un evento para mostrar la lista de campeones al hacer clic
const button = document.querySelector("button");
button.addEventListener("click", () => {
    // Ocultamos el botón después de hacer clic
    document.querySelector('#button').style.visibility = 'hidden';
    // Mostramos el contenedor donde se mostrarán los campeones
    document.querySelector('#champion-list').style.visibility = 'visible';
    startChampionList();
});

// Función asíncrona que va a realizar las solicitudes a la API de LoL
const startChampionList = async () => {
    try {
        // Obtenemos los datos de la API de LoL (campeones)
        const response = await fetch("https://ddragon.leagueoflegends.com/cdn/13.1.1/data/en_US/champion.json");
        const data = await response.json();

        // Iteramos sobre los campeones y creamos objetos Champion
        for (let championId in data.data) {
            const championData = data.data[championId];
            const champion = new Champion(championData);
            pushChampion(champion);
        }

        // Mostrar los campeones una vez que estén almacenados
        await showChampionList();

    } catch (error) {
        console.error("Error al obtener los campeones:", error);
        alert("Hubo un problema al cargar los campeones. Intenta más tarde.");
    }
};

// Esta función añade el Champion al array
function pushChampion(champion) {
    champions.push(champion);
}

// Esta función muestra los campeones en el DOM
const showChampionList = async () => {
    const championList = document.getElementById("champion-list");
    
    // Iteramos sobre los campeones y los mostramos en el DOM
    champions.forEach(champion => {
        // Añadimos cada campeón al DOM, mostrando su imagen, nombre, título y roles
        championList.innerHTML += `
            <div class="card">
                <img src="https://ddragon.leagueoflegends.com/cdn/13.1.1/img/champion/${champion.image}" alt="${champion.name}">
                <h2>${champion.name}</h2>
                <p>${champion.title}</p>
                <p>Roles: ${champion.tags.join(', ')}</p>
            </div>
        `;
    });
};
