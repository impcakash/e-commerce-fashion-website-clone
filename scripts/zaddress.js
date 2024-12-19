function showPop() {
    document.getElementById('pop-1').classList.toggle("active");
}
let data = JSON.parse(localStorage.getItem('Cart_AJIO'));
var bagtotal = 0;
var bagdiscount = 0;
for (let i = 0; i < data.length; i++) {
    bagtotal += data[i].MRP;
    bagdiscount += Math.floor(data[i].MRP * data[i].discount) / 100;
}
console.log('bagTotal', bagtotal);
console.log('bagDiscount', bagdiscount);

let bagTotal = document.getElementById('det1');
bagTotal.textContent = "Rs. " + bagtotal;
let bagDiscount = document.getElementById('det2');
bagDiscount.textContent = "Rs. " + "- " + Math.round(bagdiscount);
let delivery = document.getElementById('det3');
if (bagtotal - bagdiscount > 1000) {
    delivery.textContent = "Free";
} else {
    delivery.textContent = "Rs. " + 99;
}


let totalPrice = document.getElementById('det4');
if (document.getElementById('det3').textContent != "Free") {
    totalPrice.textContent = "Rs. " + Math.round(Number(document.getElementById('det3').textContent) + bagtotal - bagdiscount);
} else {
    totalPrice.textContent = "Rs. " + Math.round(bagtotal - bagdiscount);
}

let parent = document.getElementById('prodDetails')
function showData(data) {
    data.forEach((product) => {
        let mdiv = document.createElement('div');
        mdiv.setAttribute('class', 'detail')
        let div = document.createElement('div');
        let img = document.createElement('img');
        img.src = product.display_img;
        let div2 = document.createElement('div');
        let h3 = document.createElement('p');
        h3.setAttribute('class', 'pName')
        h3.textContent = product.brand + " - " + product.name;
        let pri = document.createElement('h5');
        pri.setAttribute('class', 'tag')
        pri.textContent = "Rs. " + product.price;
        div.append(img);
        div2.append(h3, pri);
        mdiv.append(div, div2)
        parent.append(mdiv)
    })

}
showData(data);
function getPayment() {
    window.location.href = "payment.html";
}
function refresh() {
    window.location.reload();
}