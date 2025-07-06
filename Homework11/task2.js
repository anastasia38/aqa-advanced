function getTodo() {
return fetch('https://jsonplaceholder.typicode.com/todos/1')
.then(response => response.json())
}

function getTodo2() {
return fetch('https://jsonplaceholder.typicode.com/todos/2')
.then(response => response.json())
}

function getUser() {
return fetch('https://jsonplaceholder.typicode.com/users/1') 
.then(response => response.json());
}

function getUser3() {
return fetch('https://jsonplaceholder.typicode.com/users/3') 
.then(response => response.json());
}

const allResults = Promise.all([getTodo(), getTodo2(), getUser(), getUser3()]);
allResults
.then(([todo, todo2, user, user3]) => {
    console.log("Promise.all результат:");
    console.log("To do:", todo);
    console.log("To do 2", todo2);
    console.log("User", user);
    console.log("User 3", user3);
})

.catch(error => {
    console.error('Помилка в Promise.all:', error);
});

const raceResult = Promise.race([getTodo(), getTodo2(), getUser(), getUser3()]);
raceResult
 .then(result => {
    console.log('Promise.race результат:', result);
 })
 .catch(error => {
    console.error('Помилка в Promise.race', error);
 });