
// for button
// arrow function here
const searchFieldBtn = () => {
    const searchInput = document.getElementById('search-input');
    const searchValue = searchInput.value
    searchInput.value = "";

    const url = `https://openlibrary.org/search.json?q=${searchValue}`;
    fetch(url)
    .then(res => res.json())
    .then(data => displaySearchResult(data))
}
// for display result 
// Arrow function
const displaySearchResult = books => {
const searchResult = document.getElementById('search-result');
searchResult.textContent = '';

const bookList = books.docs;
    bookList.forEach(book => {
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
        <div class="col">
            <div class="card card-info">
                <img src="https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg" class="card-img-top"  alt="">
                <div class="card-body">
                    <p class="fw-bold">${book.title}</p>
                    <p>by ${book.author_name ? book.author_name.slice(0,1) : 'Author Name not Available'}</p>
                    <p id="publish">First published in ${book.first_publish_year}</p>
                    <p>Publisher: ${book.publisher}</p>
                </div>
            </div>
        </div>

        `;
        searchResult.appendChild(div);
    })

    // NUmber of Books Found 
    const numberOfBooks = document.getElementById('number-of-books');
    numberOfBooks.textContent = "";
    const p = document.createElement('p');

    if(books.numFound !== 0){
        p.innerText = `${bookList.length} books were found Out of ${books.numFound} books `;  //message
        p.classList.add('text-center');
        p.classList.add('text-success');
        p.classList.add('fw-bold')
        numberOfBooks.appendChild(p);

    }
    else {
        p.innerText = 'NO RESULT FOUND!';       //message
        p.classList.add('text-center');
        p.classList.add('text-danger');
        numberOfBooks.appendChild(p);
    }
}
