let items = document.getElementsByClassName("contact-item");
const pagination = document.querySelector(`.pagination`);

let pageCount = Math.ceil(items.length / 10);

const pagingLink = (pageNumber) => `<li><a onclick = 'ShowHide(${pageNumber})' >${pageNumber}</a></li>`;

for (let index = 0; index < pageCount; index++) {
    pagination.insertAdjacentHTML(`beforeend`, pagingLink(index + 1));
}

ShowHide(1);

function ShowHide(pageNumber) {
    let itemsIndexStart = (pageNumber * 10) - 10;
    for (let index = 0; index < items.length; index++) {
        if (index > itemsIndexStart - 1 && index < itemsIndexStart + 10)
            items[index].style.display = "block";
        else
            items[index].style.display = "none";
    }
}