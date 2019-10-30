console.log('- VD1:');
var mang = [1, 3, 5];
function tichCacPhanTu(mang)
{
    var tich = 1;
    for(var i = 0; i < mang.length; i++)
    {
        tich *= mang[i];
    }
    return tich;
}

console.log("Tích các phần tử có trong mảng là: " + tichCacPhanTu(mang));

console.log('------------------------');
console.log('- VD2:');
for (let i = 0; i < 5; i++) {
   
    setTimeout(function(){
        
       console.log('Number: ', i);
    }, 100);
 }
