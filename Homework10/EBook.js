import { Book } from './Book.js';

export class EBook extends Book {
    constructor(name, author, year, format) {
        super(name, author, year);
        this.format = format;
    }


get format() {
    return this._format;
}

set format(value) {
    if (typeof value != 'string' || value.trim() === '') {
        console.log("Формат не повинен бути порожнім!");
    } else {
        this._format = value;
    }
    }


printInfo() {
    console.log(`Name: ${this.name}, Author: ${this.author}, Year: ${this.year}, Format: ${this.format}`);
}

static createFromBook(book, format) {
    return new EBook(book.name, book.author, book.year, format);
}
}