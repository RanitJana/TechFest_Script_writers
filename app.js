let bookData = [];
let book_add_btn = document.querySelector("#add_btn");
let book_name = document.querySelector("#book_name");
let book_count = document.querySelector("#book_count");
let node = document.querySelector('.node');
book_add_btn.addEventListener('click', () => {
    let data = {
        name: book_name.value,
        count: book_count.value
    }
    let idx = bookData.findIndex(name => book_name.value == name.name);
    if (idx != -1) {
        bookData[idx].count = +bookData[idx].count + +book_count.value;
    }
    else
        bookData.push(data);
    node.innerHTML = "Data added successfully!";
    setTimeout(() => {
        node.innerHTML = "";
    }, 2000);
    localStorage.setItem("books", JSON.stringify(bookData));
});