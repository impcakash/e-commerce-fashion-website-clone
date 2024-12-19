let str1="";
let str2="";
let str3="";
let obj={};
function displayFromBucket() {
    let object=JSON.parse(localStorage.getItem("bucket"));
      
      // localStorage.setItem("bucket",JSON.stringify(object));


    let mainDisplayImage = document.getElementById("mainDisplayImage");
    mainDisplayImage.src=object.display_img;

    let extraimage1=document.getElementById("image1extra");
    extraimage1.src=object.display_img;
    str1=object.display_img;

    let extraimage2 = document.getElementById("image2extra");
    extraimage2.src=object.img2;
    str2=object.img2;

    let extraimage3 = document.getElementById("image3extra");
    extraimage3.src=object.img3;
    str3=object.img3;

    let brandName = document.getElementById("brandName");
    brandName.innerText=object.brand;

    let productTitle=document.getElementById("productTitle");
    productTitle.innerText=object.name;

    let top_divoneline= document.getElementById("top_divoneline");
    if(top_divoneline!=null) {
        top_divoneline.innerText=object.name;
    }

    let productPrice=document.getElementById("productPrice");
    productPrice.innerText="Rs. "+object.price;

    let productPriceOff=document.getElementById("productPriceOff");
    productPriceOff.innerText="Rs. "+object.MRP+" ("+object.discount+"% off)";

    let productColor=document.getElementById("productColor");
    productColor.innerText=object.color;
    return object;
}


let itemDetailsDiv=document.getElementById("popupBackgroundBlack");
function popupPoductDetails() {
  itemDetailsDiv.style.visibility="visible";
}

function closeDetailsDiv() {
  itemDetailsDiv.style.visibility="hidden";
}

function displayProductDetails() {
  window.location.href="Productdetailspage.html";
}

function productSizeSelect(value) {
  let s=document.getElementById("s");
  let m=document.getElementById("m");
  let l = document.getElementById("l");
  let xl = document.getElementById("xl");
  let xxl = document.getElementById("xxl");
  if(value =="s") {
    s.style.backgroundColor ="#2f4254";
    s.style.color = "white";

    m.style.backgroundColor = "white";
    m.style.color = "black";
    l.style.backgroundColor = "white";
    l.style.color = "black";
    xl.style.backgroundColor = "white";
    xl.style.color = "black";
    xxl.style.backgroundColor = "white";
    xxl.style.color = "black";
  } else if( value=="m") {
    m.style.backgroundColor ="#2f4254";
    m.style.color = "white";

    s.style.backgroundColor = "white";
    s.style.color = "black";
    l.style.backgroundColor = "white";
    l.style.color = "black";
    xl.style.backgroundColor = "white";
    xl.style.color = "black";
    xxl.style.backgroundColor = "white";
    xxl.style.color = "black";
  } else if(value=="l") {
    l.style.backgroundColor ="#2f4254";
    l.style.color = "white";

    s.style.backgroundColor = "white";
    s.style.color = "black";
    m.style.backgroundColor = "white";
    m.style.color = "black";
    xl.style.backgroundColor = "white";
    xl.style.color = "black";
    xxl.style.backgroundColor = "white";
    xxl.style.color = "black";
  } else if(value=="xl") {
    xl.style.backgroundColor ="#2f4254";
    xl.style.color = "white";

    s.style.backgroundColor = "white";
    s.style.color = "black";
    m.style.backgroundColor = "white";
    m.style.color = "black";
    l.style.backgroundColor = "white";
    l.style.color = "black";
    xxl.style.backgroundColor = "white";
    xxl.style.color = "black";
  } else if(value=="xxl") {
    xxl.style.backgroundColor ="#2f4254";
    xxl.style.color = "white";

    s.style.backgroundColor = "white";
    s.style.color = "black";
    m.style.backgroundColor = "white";
    m.style.color = "black";
    l.style.backgroundColor = "white";
    l.style.color = "black";
    xl.style.backgroundColor = "white";
    xl.style.color = "black";
  }
}

function displayImage1() {
  mainDisplayImage.src = str1;
}
function displayImage2() {
  mainDisplayImage.src = str2;
}
function displayImage3() {
  mainDisplayImage.src = str3;
}
console.log(obj);

function addProductTocart() {
    if (localStorage.getItem("Cart_AJIO") == null) {
        localStorage.setItem("Cart_AJIO", JSON.stringify([]));
      }
    let items=JSON.parse(localStorage.getItem("Cart_AJIO"));
    let object=displayFromBucket();
    items.push(object);
    localStorage.setItem("Cart_AJIO", JSON.stringify(items));  
    window.location.reload();   
}