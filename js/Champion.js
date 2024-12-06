// Cambiamos de Pokemon a Champion
export default class Champion {
    constructor(data) {
        this.name = data.name;               // Nombre del campeón
        this.title = data.title;             // Título del campeón
        this.image = data.image.full;        // Imagen completa del campeón
        this.tags = data.tags;               // Roles del campeón (asesino, mago, etc.)
    }
}
