class TodoService {
    async getTodo(id) {
        const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
        return await response.json();
    }

    async getAllTodos() {
        const [todo1, todo2] = await Promise.all([
            this.getTodo(1),
            this.getTodo(2)
        ]);
        return [todo1, todo2];
    }

    async getRaceTodo() {
        return await Promise.race([
            this.getTodo(1),
            this.getTodo(2)
        ]);
      }
}

class UserService {
    async getUser(id) {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
        return await response.json();
    }

async getAllUsers() {
    const [user1, user3] = await Promise.all([
        this.getUser(1),
        this.getUser(3)
    ]);
    return [user1, user3];
}

async getRaceUser() {
    return await Promise.race([
        this.getUser(1),
        this.getUser(3)
    ]);
  }
}

const todoService = new TodoService();
const userService = new UserService();

async function runAll() {
    try {
        const [todos, users] = await Promise.all([
            todoService.getAllTodos(),
            userService.getAllUsers()
        ]);
    console.log('=== Promise all ===');
    console.log('Todos:', todos);
    console.log('Users:', users);
    } catch (error) {
        console.error('Помилка в Promise.all:', error);
    }
    }
async function runRace() {
    try {
        const result = await Promise.race([
            todoService.getAllTodos(),
            userService.getRaceUser()
        ]);

    console.log('=== Promise.race ===');
    console.log('Перший результат:', result);
    
    } catch (error) {
        console.error('Помилка в Promise.race:', error);
    }
    }
runAll();
runRace();
