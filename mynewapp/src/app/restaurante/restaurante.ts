export class Restaurante {
    id: number;
    name: string;
    opening_year: number;
    country: string;
    cuisine: string;
    rating: number;
    description: string;
    image: string;
    mostrarDetalle: boolean = false;

    constructor (id: number, name: string, opening_year: number, country: string, cuisine: string, rating: number, description: string, image: string) {
        this.id = id;
        this.name = name;
        this.opening_year = opening_year;
        this.country = country;
        this.description = description;
        this.cuisine = cuisine;
        this.rating = rating;
        this.image = image;
    }
}