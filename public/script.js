async function windowActions() {
    console.log('window loaded');
    const form = document.querySelector('.userform');
    const search = document.querySelector('#city');
    const targetBox = document.querySelector('.targetBox');

    const results = await fetch('/api');
    const data = await request.json();

    form.addEventListener('submit', async (event) => {
        event.preventDefault();
        console.log('submit fired', search.value);
        const filtered = data.filter((record) => record.city.toUpperCase() === search.value.toUpperCase());
        filtered.forEachItem = document.createElement("li");
        appendItem.innerText = item.city;
        targetList.append(appendItem);
    });
    
    search.addEventListener('input', (event) => {
        console.log('input', event.target.value);
    });
}

window.onload = windowActions;