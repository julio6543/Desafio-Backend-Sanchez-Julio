


class ProductGaming {
    constructor() {
        this.products = [];
    }

    getProducts = () => {
        return this.products;
    };

    addProduct = (title, description, price, thumbnail, code, stock) => {
        if (!title || !description || !price || !thumbnail || !code || !stock) {
        console.log("Completar todos los campos en blanco");
        return;
        }

        for (let i = 0; i < this.products.length; i++) {
        if (this.products[i].code === code) {
            console.log(`El código ${code} ya está en uso`);
            return;
        }
        }

        const product = {
        title,
        description,
        price,
        thumbnail,
        code,
        stock,
        games: []
        };

        if (this.products.length === 0) {
        product.id = 1;
        } else {
        product.id = this.products[this.products.length - 1].id + 1;
        }

        this.products.push(product);
        console.log("Producto agregado con éxito");
    };

    addGameToProduct = (productId, gameTitle) => {
        const productIndex = this.products.findIndex(
        (product) => product.id === productId
        );

        if (productIndex === -1) {
        console.log("Producto no encontrado");
        return;
        }

        this.products[productIndex].games.push(gameTitle);
        console.log("Juego agregado con éxito");
    };
    }

    const handleProducts = new ProductGaming();
    handleProducts.addProduct(
    "Consola de videojuegos",
    "Una  consola de ultima generación",
    50000,
    'https://images.yaoota.com/MZZjuUE-xY9FU_ltZSfORqPiLfU=/trim/yaootaweb-production-ke/media/crawledproductimages/f043ecc3795351ea67a6719014f00f598e154ea5.jpg',
    
    10
);

handleProducts.addGameToProduct(1, "Genshin Impact");
handleProducts.addGameToProduct(1, "Rocket Ligue");
handleProducts.addGameToProduct(1, "God of War");

console.log(handleProducts.getProducts());
