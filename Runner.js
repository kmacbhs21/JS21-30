//Name : Keenan McDonald
// JS problems coding bat 21-30
// May 8th 2020

//#21
function countEvens(arr){
    var num = 0;
    for(var i=0; i<arr.length; i++){
        if(arr[i]%2 == 0) num++;
    }
    return num;
}

//#22
function countHi(str) {
    var hi = 0;
    for(var i=0; i<str.length; i++){
        if(str[i]=="h" && str[i+1]=="i"){
            hi++;
        }
    }
    return hi;
}

//#23
function no14 (nums) {
    var num1 = 0, num4 = 0;
    for (var i = 0; i < nums.length; i++) {
        if(nums[i] == 1 )
            num1 ++;
        if (nums[i] == 4)
            num4++;
    }
    return (num1 == 0 || num4 == 0) ;
}
//#24
function either24(arr) {
    var var1 = 0;
    var var2 = 0;
    for(var i=0; i<arr.length; i++){
        if (arr[i]==2 && arr[i+1]==2) var1++;
        if (arr[i]==4 && arr[i+1]==4) var2++;
    }
    return !(var1 == var2);
}

//#25
function makeChocolate(small, big, goal) {
    if((goal > big*5 + small) || (goal%5 > small)){
        return -1;
    }
    if(big*5 > goal){
        return goal%5;
    }
    return goal - big*5;
}
//#26


function luckySum(num1,num2,num3) {
    if(num1===13) return 0;
    if(num2===13) return num1;
    if(num3===13) return num1+num2;
    return num1+num2+num3;
}
//#27
function maxBlock (str) {
    var block = str[0];
    var max = 0;
    var Count = 0;
    for(var i = 0; i < str.length; i++) {
        if(block == str[i]){
            Count++;
            block = str[i];
        } else {
            Count = 1;
            block = str[i];
        }
        max = (max > Count)? max : Count;
    }
    return max ;
}
//#28
function linearIn(arr1, arr2){
    var a = 0;
    var b = 0;
    while((a < arr2.length) && (b < arr1.length)){
        if(arr1[b] < arr2[a] ){
            x++;
        }else{
            if(arr2[a] < arr1[b]){
                return false;
            }else{
                a++;
            }
        }
    }
    if(a != arr2.length){
        return false;
    }
    return false;
}
//#29
function countTriple(str) {
    var trip = 0;
    for(var i=0; i<str.length; i++){
        if(str[i]==str[i+1] && str[i+1]==str[i+2]) trip++;
    }
    return trip;
}
//#30
function sameEnds(str) {
    var end = "";
    var len = str.length;
    for(var i=0; i<=len/2; i++){
        for(var j=len/2; j<len; j++){
            if(str.substring(0,i) == str.substring(j)){
                end = str.substring(0,i);
            }
        }
    }
    return end;
}


function tester() {
    document.getElementById("output").innerHTML += countEvens([2, 2, 0]);
    document.getElementById("output").innerHTML += countHi( "hihi");
    document.getElementById("output").innerHTML += no14([1, 2, 3]);
    document.getElementById("output").innerHTML += either24([4, 4, 1]);
    document.getElementById("output").innerHTML += makeChocolate(4, 1, 9);
    document.getElementById("output").innerHTML += luckySum(1, 2, 3);
    document.getElementById("output").innerHTML += maxBlock( "abbCCCddBBBxx");
    document.getElementById("output").innerHTML += linearIn([1, 2, 4, 6], [2, 3, 4]);
    document.getElementById("output").innerHTML += countTriple("abcXXXabc");
    document.getElementById("output").innerHTML += sameEnds("abXYab");
}