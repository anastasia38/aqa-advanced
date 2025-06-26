const car1 = {
    brand: "Mercedes",
    model: "SLK",
    year: "2020"
};

const car2 = {
    brand: "Toyota",
    model: "Camry",
    owner: "Anastasiia"
};

const car3 = { ...car1, ...car2};

console.log(car3);
