let arr = [1,3,4,5,2,6,8,9];

var brr = arr.filter((ele)=>{
    if(ele % 2 == 0) {
        return true;
    }else{
        return false;
    }
})

console.log(brr);