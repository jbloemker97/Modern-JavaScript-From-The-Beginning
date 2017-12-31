class Book {
    constructor(title, author, isbn){
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}

class UI {
    // Show Alerts
    showAlert(message, status){
        const div = document.createElement("div");
        div.className = `${status}`;
        div.appendChild(document.createTextNode(message));
        const container = document.querySelector(".container");
        const form = document.querySelector("#book-form");
        container.insertBefore(div, form);
        setTimeout(() => {
            document.querySelector(`.${status}`).remove();
        }, 3000);
    }

    // Add Book
    addBook(book){
        const list = document.getElementById("book-list");
        // Create tr element
        const row = document.createElement("tr");
        // Insert cols
        row.innerHTML = `
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.isbn}</td>
            <td><a href="#" class='delete'>X</a></td>
        `;
    
        list.appendChild(row);
    }

    // Clear fields
    clearFields(){
        title.value = "";
        author.value = "";
        isbn.value = "";
    }

    // Delete Book
    deleteBook(e){
        if(e.className === "delete"){
            e.parentElement.parentElement.remove();
         }
    }

}


document.getElementById("book-form").addEventListener("submit", (e) => {
    const title = document.getElementById("title").value,
          author = document.getElementById("author").value,
          isbn = document.getElementById("isbn").value;

    const book = new Book(title, author, isbn);

    const ui = new UI();

    if(title === "" || author === "" || isbn === ""){
        // Show Error
        ui.showAlert("Please fill in the values below completely", "error");
    }else {
        // Add book to list
        ui.addBook(book);
        // Show Success
        ui.showAlert("Your book has been added!", "success");
        // Clear Fields
        ui.clearFields(book);
    }



    e.preventDefault();
});

document.querySelector(".table").addEventListener("click", (e) => {
    const ui = new UI(); 

    ui.deleteBook(e.target);

    ui.showAlert("Book Deleted!", "error");

});
