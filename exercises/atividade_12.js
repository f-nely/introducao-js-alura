let lis = document.querySelectorAll('li');

console.log(lis);

lis.forEach(function(li) {
    li.addEventListener('click', function() {
        alert(this.textContent)
    });
});