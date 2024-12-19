var flag = true;
function confirmPay(e) {

    var Name = document.getElementById("owner").value;
    var Cvv = document.getElementById("cvv").value;
    var CardNum = document.getElementById("cardnum").value;
    e.preventDefault();
    if (CardNum.length == 16 && Cvv.length == 3 && flag == true) {
        // if((Name !="" || Cvv !="" || CardNum != "" ) && flag==true )
        flag = false;
        swal("Congratulations!", "Payment Successfull", "success")
        setTimeout(() => window.location.href = "summary.html", 3000);
    }
    else {
        swal("Oops!", "please enter a valid details", "warning")
    }

}

let data = JSON.parse(localStorage.getItem('Cart_AJIO'));
console.log(data)
var bagtotal = 0;
var bagdiscount = 0;
for (let i = 0; i < data.length; i++) {
    bagtotal += data[i].MRP;
    bagdiscount += Math.floor(data[i].MRP * data[i].discount) / 100;
}
let bTotal = document.getElementById("det1");
let bDiscount = document.getElementById('det2');
bTotal.textContent = "Rs. " + bagtotal;
bDiscount.textContent = "Rs. " + bagdiscount;
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
    totalPrice.textContent = "Rs. " + Math.round(Number(document.getElementById('det3').textContent) + (bagtotal - bagdiscount));
} else {
    totalPrice.textContent = "Rs. " + Math.round(bagtotal - bagdiscount);
}

