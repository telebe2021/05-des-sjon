 let id = new URLSearchParams(window.location.search).get("id");

fetch(`https://northwind.vercel.app/api/products/${id}`)
    .then(res => res.json())
    .then(data => {
    document.querySelector("div").innerHTML += `
        <span>
            <p>mehsulun adi: ${data.name}</p>
            <p> mehsulun qiymeti : ${data.unitPrice}</p>
            <p> stokda ver: ${data.unitsInStock}</p>
            <p> qablasadirma : ${data.quantityPerUnit}</p>
        </span>
   <a href="./index.html"> Esas sehifeye qayit</a>
            `
        });
