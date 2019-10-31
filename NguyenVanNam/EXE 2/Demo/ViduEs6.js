// var mang = [4, 7, 5, 6, 2, 9, 13, 27, 10];
// function tinhTongSoLe(mang)
// {
//     var tong = 0;
//     for(var i = 0; i < mang.length; i++)
//     {
//         if(mang[i] % 2 != 0)
//         {
//             tong += mang[i];
//         }
//     }
//     return tong;
// }
// console.log("Tổng các số lẻ = " + tinhTongSoLe(mang));
var chuoi1 = "Hello";
var chuoi2 = "TDC-Cao đẳng công nghệ";
function soSanh()
{
    if(chuoi1 > chuoi2)
    {
        console.log("chuỗi 1 dài hơn chuỗi 2")
    }
    else
    {
        console.log("chuỗi 1 ngắn hơn chuỗi 2")
    }
}
soSanh();

function noiChuoi()
{
    var chuoi = "Welcome";
    var chuoi1 = " Mình là Nam đến từ TDC";
    chuoi = chuoi.concat(chuoi1, "!!!");
    console.log("Kết quả sau khi nối chuỗi: " +chuoi);
}
noiChuoi();

function timKiemThayThe()
{
    var chuoi = chuoi1 + chuoi2;
    console.log(chuoi.replace("TDC-Cao đẳng công nghệ"," Trường cao đẳng công nghệ thủ đức"));
}
timKiemThayThe();

function viTri()
{
    console.log("vị trí xuất hiện chuỗi: " + chuoi2.indexOf("Cao"));
}
viTri();