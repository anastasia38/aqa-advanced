import { Book } from './Book.js';
import { EBook } from './EBook.js';


const book1 = new Book("Who will cry when you die?", "Robin Sharma", 2005);
const book2 = new Book("Rich Dad Poor Dad", "Robert T. Kiyosaki and Sharon Lechter", 1997);
const ebook1 = new EBook("Digital Fortress", "Dan Brown", 2008, "PDF");

book1.printInfo();
book2.printInfo();
ebook1.printInfo();

const oldest = Book.findOldestBook([book1, book2, ebook1]);
console.log("The oldest book:");
oldest.printInfo();

const ebook2 = EBook.createFromBook(book2, "EPUB");
console.log("Електронна версія");
ebook2.printInfo();


book1.name = "The Mont Who Sold His Ferrari";
book1.author = "Robin Sharma";
book1.year = 1996;

console.log("After changes:");
book1.printInfo();

