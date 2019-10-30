
var mang = [4, 7, 5, 6, 2, 9, 13, 27, 10];
function tinhTongSoLe(mang)
{
    var tong = 0;
    for(var i = 0; i < mang.length; i++)
    {
        if(mang[i] % 2 != 0)
        {
            tong += mang[i];
        }
    }
    return tong;
}
console.log("Tổng các số lẻ = " + tinhTongSoLe(mang));
