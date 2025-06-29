export class Book {
    constructor(name, author, year) {
        this.name = name;
        this.author = author;
        this.year = year;
    }
get name() {
    return this._name;
}

set name(value) {
    if (typeof value ==! 'string' || value.trim() === '') {
    console.log("Назва книги не повинна бути порожнім рядком!");
} else {
    this._name = value;
}
}

get author() {
    return this._author;
}

set author(value) {
    if (typeof value !== 'string' || value.trim() === '') {
        console.log("Ім'я автора не повинно бути порожнім рядком!");
     } else {
            this._author = value;
        }
    }

get year() {
    return this._year;
}

set year(value) {
    if (typeof value !== 'number' || value <=0 || !Number.isSafeInteger(value)) {
        console.log("Рік повинен бути додатнім числомю");
    
    } else {
            this._year = value;
        }
      }

printInfo() {
    console.log(`Name: ${this.name}, Author: ${this.author}, Year: ${this.year}`);
}

static findOldestBook(books) {
    return books.reduce((oldest, current) => {
        return current.year < oldest.year ? current : oldest;
    });
  }
}


//const Book1 = new Book("Who will cry when you die?", "Robin Sharma", 2025);

