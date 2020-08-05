//console.log("hello world!");
var x = 10;
console.log(x);
console.log(x+10);
x = "xin chào";
console.log(x);
console.log(x+10);
console.log("xin chao"+" t2005e")
console.log(x.length);//độ dài của chuỗi
var y="a10";
//console.log(y+10);
y = parseInt(y);//chuyển chuỗi thnahf số
console.log(y);//NaN-> Not a number
if (isNaN(y)){
    console.log("không có giá trị");
}else {
    console.log(y+10)
}
for (var i=0; i<10; i++){
    console.log("i= "+i)
}
var ary = [];
ary[0] = 1999;
ary[1] = "hello";
ary[2] = [2,3,4, "xin chào" ,[3,5,7]];
console.log(ary[2][4][1]);
ary[2][4][3] = 55;
console.log(ary[2] [4] [3]);
ary[2] [4] [4] =["a","b",5]
var s =[];
s[0]=1;
s[1]=2;
s[3]=4;
//var s = [1,2,3,5,8,13,21];
for(var i=0;i<s.length;i++){
    console.log(s[i]);
}
var f = ham_gi_do();
console.log(f);
function ham_gi_do(a,b) {
    console.log("đây là bên trong hàm gì đó: " + (a+b));
    return "xin chào";
}

s.map(function (e) {
    console.log("s: "+e);
});

var arr = [];
//for (var i=0;i<10;i++){
//   arr[i] = i*2+1;
//   i++;
//}
// nếu muốn chọn theem1 số nữa
//arr[10] = 99
for (var i=0;i<10;i++){
    arr.push(i*2+1);
}
arr.push(99);
arr.splice(1,2);//xóa từ vị trí 1 và xóa 2 phần tử
arr.map(function (e) {
    console.log("arr: "+e);
});
