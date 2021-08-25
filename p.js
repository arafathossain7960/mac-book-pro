document.getElementById('btn').addEventListener('click', function(){
    document.getElementById('p').innerText= 12;
    const b = document.getElementById('p').innerText;
    const bn = parseFloat(b);
    
const total = document.getElementById('total').innerText;
const totalNumber = parseFloat(total);
console.log(totalNumber +bn )
})


