let elements = [];

let table = document.querySelector("table tbody");
let search = document.querySelector("input");

fetch('https://northwind.vercel.app/api/products')
    .then(res => res.json())
    .then(data => {
        elements = data; 
        data.forEach(element => {
            table.innerHTML += `
        <tr>
            <td>${element.id}</td>
            <td>${element.name}</td>
            <td>${element.unitPrice}</td>
            <td>${element.unitsInStock}</td>
            <td><a href="#update"></a></td>
            <td><a href="./info.html?id=${element.id}">Info</a></td>
        </tr>
            `;
        });
    })
    .catch(error => {
        console.error("error", error);
    });

search.addEventListener("input", () => {
    const searchText = search.value.toLowerCase();

    const filtered = elements.filter(elem => {
        return elem.name.toLowerCase().includes(searchText); 
    });

    table.innerHTML = '';
    filtered.forEach(element => {
        table.innerHTML += `
            <tr>
                <td>${element.id}</td>
                <td>${element.name}</td>
                <td>${element.unitPrice}</td>
                <td>${element.unitsInStock}</td>
                <td><a href="#update"></a></td>
                <td><a href="./info.html?id=${element.id}">Info</a></td>
               
                </tr>
        `;
    });
});