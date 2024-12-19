
let ran = document.getElementById('rand')
let count = 0;
ran.textContent = Math.floor(Math.random(10) * 1000);
function getHome() {
    localStorage.removeItem("Cart_AJIO");
    window.location.href = "index.html";
}
let data = JSON.parse(localStorage.getItem('Cart_AJIO'));
let parent = document.getElementById('prod')
function showProd(data) {
    data.forEach((product) => {
        let mdiv = document.createElement('div');
        mdiv.setAttribute('class', 'mdiv')
        let img = document.createElement("img");
        img.src = product.display_img;
        let p = document.createElement('span');
        p.setAttribute('id', 'prodName')
        p.textContent = product.brand + " - " + product.name;
        let selectQuan = document.createElement('select');
        selectQuan.setAttribute('id', 'quantitySel')
        let label1 = document.createElement('label');
        label1.setAttribute('class', 'labelClass')
        label1.textContent = "";
        let selectSize = document.createElement('select')
        console.log('selectQuan', selectQuan.value)
        selectSize.setAttribute('id', 'sizeSel')
        let label2 = document.createElement('label');
        label2.setAttribute('class', 'label2Class')
        label2.textContent = ""
        let pdiv = document.createElement('div');
        pdiv.setAttribute('class', 'priceDiv')
        let saving = document.createElement('span');
        saving.setAttribute('class', 'saving')
        saving.textContent = 'Savings : ';

        let span = document.createElement('span');
        span.textContent = "Rs." + Math.floor(product.MRP * product.discount) / 100;
        span.setAttribute('class', 'dis')
        let discount = document.createElement('span');
        let br = document.createElement('br');
        discount.setAttribute('class', 'discount');
        discount.textContent = product.MRP;
        let sp = document.createElement('span');
        sp.textContent = " ( " + product.discount + "% )";
        let finalPrice = document.createElement('span');
        finalPrice.setAttribute('class', 'finalPrice');
        let br1 = document.createElement('br');
        finalPrice.textContent = "Rs. " + product.offer_price;
        pdiv.append(saving, span, br, discount, sp, br1, finalPrice);
        mdiv.append(img, p, pdiv);
        parent.append(mdiv);
        count++;
    })
}
showProd(data);
