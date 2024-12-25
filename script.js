class LibraryItem {
    constructor(title,author,publishedYear) {
        this.title = title;
        this.author = author;
        this.publishedYear = publishedYear
    }
    getDetails(){
        console.log(`this book's author is ${this.author} ,title is ${this.title} and published in ${this.publishedYear}`);
    }
}

class Book extends LibraryItem {
    constructor(title,author,publishedYear,genre) {
       super(title,author,publishedYear) 
       this.genre = genre;
    }
    getDetailInfo(){
        console.log(`this book's author is ${this.author} ,title is ${this.title} , published in ${this.publishedYear} and genre is ${this.genre}`);
    }
}

class Magazine extends Book {
    constructor(title,author,publishedYear,genre,issueNumber) {
        super(title,author,publishedYear,genre)
        this.issueNumber = issueNumber;
    }
    getDetailInfo1(){
        console.log(`this magazine's author is ${this.author} ,title is ${this.title} , published in ${this.publishedYear} , genre is ${this.genre} and issue number is ${this.issueNumber}`);
    }
}

const book = new Magazine("gilocavt shoba axal wels","mravals daeswarit",2025,"fiction",7)
book.getDetailInfo1()
book.getDetailInfo()
book.getDetails()