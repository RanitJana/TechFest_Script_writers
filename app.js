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


let userData = [];
let customer_name = document.querySelector("#customer_name");
let bookName = document.querySelector("#bookName");
let count = document.querySelector('#count');
let msg = document.querySelector('.msgUser');

let userBtn = document.querySelector('#submit');

userBtn.addEventListener('click', () => {
    console.log(customer_name.value);
    console.log(bookName.value);
    console.log(count.value);



    let idx = bookData.findIndex(val => val.name == bookName);
    if (idx == -1) {
        msg.innerHTML = `${bookName.value} is not available in our library.`;
        return;
    }
    if (bookData[idx].count == 0) {
        msg.innerHTML = `${bookName.value} is not available currently.`;
        return;
    }
    if (bookData[idx].count > count.value) {
        msg.innerHTML = `Total${count.value} books of ${bookName.value} is available currently.`;
        return;
    }
    let userInfo = userData.findIndex(val => customer_name.value == val.value);
    if (userInfo != -1) {
        let bookIdx = userData[userInfo].books.findIndex(obj => bookName == obj.bookName);
        if (bookIdx == -1) {
            userData[userInfo].books.push({ bookName: bookName.value, count: count.value });
        }
        else {
            userData[userInfo].books[bookIdx] = +userData[userInfo].books[bookIdx] + +count.value;
        }
    }
    else {
        let data = {
            name: customer_name.value,
            books: [{ bookName: bookName.value, count: count.value }]
        }
        userData.push(data);
        localStorage.setItem('user', JSON.stringify(userData));
    }
})

