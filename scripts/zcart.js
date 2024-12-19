function getAddress() {
    window.location.href = "address.html";
}
let count = 0;
// let da=[
// {
//             display_img : "https://assets.ajio.com/medias/sys_master/root/20210824/qnyN/6124089d7cdb8cb824031048/performax_navy_blue_running_zip-front_dobby_jacket.jpg",
//             img2 : "https://assets.ajio.com/medias/sys_master/root/20210824/Tmuz/6123f3797cdb8cb824028358/-473Wx593H-441128864-darkblue-MODEL3.jpg",
//             img3 : "https://assets.ajio.com/medias/sys_master/root/20210824/RhpY/6123fa05f997ddce89a878b3/-473Wx593H-441128864-darkblue-MODEL2.jpg",
//             img4 : "",
//             brand : "PERFORMAX",
//             name : "Running Zip-Front Dobby Jacket",
//             price : 899,
//             MRP : 999,
//             discount : 10,
//             offer_price : 800,
//             color : "Dark-Blue",
//             size : "",

//         },
//         {
//             display_img : "https://assets.ajio.com/medias/sys_master/root/20210615/6iGo/60c7a62daeb269a9e3e75860/performax_black_panelled_zip-front_training_tracksuit_jacket.jpg",
//             img2 : "https://assets.ajio.com/medias/sys_master/root/20210615/rKQx/60c7a17bf997ddb312c8f7c9/-473Wx593H-441120341-jetblack-MODEL2.jpg",
//             img3 : "https://assets.ajio.com/medias/sys_master/root/20210615/V3fS/60c7a971aeb269a9e3e76345/-473Wx593H-441120341-jetblack-MODEL4.jpg",
//             img4 : "https://assets.ajio.com/medias/sys_master/root/20210615/cVQt/60c7a53df997ddb312c906b6/-473Wx593H-441120341-jetblack-MODEL3.jpg",
//             brand : "PERFORMAX",
//             name : "Panelled Zip-Front Training Tracksuit Jacket",
//             price : 1349,
//             MRP : 1499,
//             discount : 10,
//             offer_price : 1274,
//             color : "Jet-Black",
//             size : "",

//         },
//         {
//             display_img : "https://assets.ajio.com/medias/sys_master/root/20210403/OlAO/606935d8aeb269a9e340123f/perfkt-u_navy_quilted_zip-front_jackets_with_insert_pockets.jpg",
//             img2 : "https://assets.ajio.com/medias/sys_master/root/20210403/AEO0/606935d8aeb269a9e34011b2/-473Wx593H-461642086-navy-MODEL5.jpg",
//             img3 : "https://assets.ajio.com/medias/sys_master/root/20210403/AYSq/606935d8aeb269a9e34011ad/-473Wx593H-461642086-navy-MODEL3.jpg",
//             img4 : "https://assets.ajio.com/medias/sys_master/root/20210403/mF0h/606935d8aeb269a9e34011ac/-473Wx593H-461642086-navy-MODEL4.jpg",
//             brand : "PERFKT-U",
//             name : "Quilted Zip-Front Jackets with Insert Pockets",
//             price : 1033,
//             MRP : 3333,
//             discount : 69,
//             offer_price : 1000,
//             color : "",
//             size : "",

//         }
// ];
let da = JSON.parse(localStorage.getItem('Cart_AJIO'));
var bagtotal = 0;
var bagdiscount = 0;
for (let i = 0; i < da.length; i++) {
    bagtotal += da[i].MRP;
    bagdiscount += Math.floor(da[i].MRP * da[i].discount) / 100;
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
    delivery.textContent = 99;
}

let totalPrice = document.getElementById('det4');
if (document.getElementById('det3').textContent != "Free") {
    totalPrice.textContent = Math.round(Number(document.getElementById('det3').textContent) + bagtotal - bagdiscount);
} else {
    totalPrice.textContent = "Rs. " + Math.round(bagtotal - bagdiscount);

}
console.log('totalPrice', totalPrice)
let parent = document.getElementById('prod');
let mybag = document.getElementById('quan');
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
        label1.textContent = "Qty";
        selectQuan.innerHTML = ` <select name="" id="quantityPro"><option>1</option><option>2</option><option>3</option><option >4</option><option>5</option><option>More</option></select>`;
        let selectSize = document.createElement('select')
        console.log('selectQuan', selectQuan.value)
        selectSize.setAttribute('id', 'sizeSel')
        let label2 = document.createElement('label');
        label2.setAttribute('class', 'label2Class')
        label2.textContent = "Size"
        selectSize.innerHTML = `<option>XS</option><option>S</option select><option>M</option><option>L</option><option>XL</option><option>XXL</option>`;
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
        let lastDiv = document.createElement('div');
        lastDiv.setAttribute('class', 'lastD')
        let dele = document.createElement('button');
        dele.innerText = "Delete";
        let dele1 = document.createElement('button');
        dele1.innerHTML = `<i class="fa fa-heart-o" aria-hidden="true"></i>`;
        let bal = 0;
        dele1.onclick = () => {
            if (bal % 2 == 0) {
                dele1.style.color = "red"
                alert("product have added to wishlist")
                bal++;
            } else {
                dele1.style.color = "#176D93"
                alert("product have removed from the wishlist")
            }
        }
        lastDiv.append(dele, dele1)
        pdiv.append(saving, span, br, discount, sp, br1, finalPrice, lastDiv);
        mdiv.append(img, p, label1, selectQuan, label2, selectSize, pdiv);
        parent.append(mdiv);
        count++;
    })
}
showProd(da);
console.log('count', count);
mybag.textContent = '(' + count;
