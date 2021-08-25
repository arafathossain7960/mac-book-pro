// get memory 
function updateMemory(isUpdate){
   if(isUpdate == false){
      document.getElementById('memory-cost').innerText = 0;
   }else if(isUpdate == true){
   document.getElementById('memory-cost').innerText =180;
   } 
   totalPrice();
}

// get storage
function updateStorage(isUpdate){
  if(isUpdate == 'default'){
   document.getElementById('storage-cost').innerText = 0;
  }else if(isUpdate == 'medium'){
   document.getElementById('storage-cost').innerText = 100;
  }else if(isUpdate == 'pro'){
   document.getElementById('storage-cost').innerText = 180;
  }
  totalPrice();
}

// get delivery 
function updateDelivery(isFree){
   if(isFree == true){
      document.getElementById('delivery-cost').innerText=0;
   }else if(isFree == false){
      document.getElementById('delivery-cost').innerText=20;
   }
   totalPrice();
 }

// get total 
function totalPrice(){
  const memoryCost= productId('memory-cost');
  const storageCost= productId('storage-cost');
  const deliveryCost= productId('delivery-cost');
  // sum 
  const total =1299+ memoryCost+ storageCost + deliveryCost;
  document.getElementById('semi-total').innerText = total;
  document.getElementById('grant-total').innerText = total;
}

 // extra product cost id function
 function productId(id){
   const productCost=  document.getElementById(id);
   const productCostNumber =parseFloat(productCost.innerText);
   return productCostNumber;
 }

 // promo code function
 document.getElementById('apply-code').addEventListener('click', function(){
   const promoCode = document.getElementById('promo-code').value;
   if(promoCode == 'stevekaku'){
    const grantTotal =  document.getElementById('grant-total');
    const grantTotalNumber = parseFloat(grantTotal.innerText);
   const discount= grantTotalNumber/100;
   const discountAmount = discount*20;
   const totalDiscount = grantTotalNumber - discountAmount;
   grantTotal.innerText = totalDiscount;
   }
   document.getElementById('promo-code').value= '';
   
 });



