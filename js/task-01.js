const elemList = document.querySelector('#categories').children;
console.log('Number of categories >>>', elemList.length);

[...elemList].forEach(item => {
const title = item.querySelector("h2").textContent;
const innerList = item.querySelectorAll('li').length;
console.log('Categories >>>', title);
console.log('Elements >>>', innerList);
});
