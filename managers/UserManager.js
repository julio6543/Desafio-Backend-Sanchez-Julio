class UserManager {
    constructor() {
        this.users = [];
        }
    
        getUsers = () => {
        return this.users;
        };
    
        addUser = (name, email, age) => {
        if (!name || !email || !age) {
            console.log("Por favor, completa todos los campos");
            return;
        }
    
        for (let i = 0; i < this.users.length; i++) {
            if (this.users[i].email === email) {
            console.log(`El correo electrónico ${email} ya está en uso`);
            return;
            }
        }
    
        const user = {
            name,
            email,
            age,
            games: []
        };
    
        if (this.users.length === 0) {
            user.id = 1;
        } else {
            user.id = this.users[this.users.length - 1].id + 1;
        }
    
        this.users.push(user);
        console.log("Usuario agregado exitosamente");
        };
    
        addGameToUser = (userId, gameTitle) => {
        const userIndex = this.users.findIndex(
            (user) => user.id === userId
        );
    
        if (userIndex === -1) {
            console.log("Usuario no encontrado");
            return;
        }
    
        this.users[userIndex].games.push(gameTitle);
        console.log("Juego agregado exitosamente");
        };
    }
    
    const handleUsers = new UserManager();
    handleUsers.addUser("julio sanchez", "juliogonzalosanchez21@gmail.com", 25);
    handleUsers.addUser("gonzalo sanchez", "gonzalosanchez94@live.com", 30);
    
    handleUsers.addGameToUser(1, "Genshin Impact");
    handleUsers.addGameToUser(1, "Rocket Ligue");
    handleUsers.addGameToUser(1, "God of War");
    
    console.log(handleUsers.getUsers());
    