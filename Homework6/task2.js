function isAdult(age) {
    if (age >=18) {
        return "Ця людина доросла";
    } else {
        return "Ця людина не доросла";
     }
    }
    
    console.log("25 років:", isAdult(25));
    console.log("15 років:", isAdult(15));