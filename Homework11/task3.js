async function getTodo() {
const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
return await response.json();
}

async function getTodo2() {
const response = await fetch('https://jsonplaceholder.typicode.com/todos/2');
return await response.json();
}

async function getUser() {
const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
return await response.json();
}

async function getUser3() {
const response = await fetch('https://jsonplaceholder.typicode.com/users/3') 
return await response.json();
}

async function fetchAll() {
    try {
        const [todo, todo2, user, user3] = await Promise.all([
            getTodo(),
            getTodo2(),
            getUser(),
            getUser3()
        ]);

    console.log("Promise.all результат:");
    console.log("To do:", todo);
    console.log("To do 2", todo2);
    console.log("User", user);
    console.log("User 3", user3);
    } catch (error) {
        console.error("Помилка в Promise.all", error);
    }
}

async function fetchRace() {
    try {
        const result = await Promise.race([
            getTodo(),
            getTodo2(),
            getUser(),
            getUser3()
        ]);
    
        console.log("Pronise.race результат:", result);
    } catch (error) {
        console.error("Помилка в Promise.race:", error);
    }
}

fetchAll();
fetchRace();
