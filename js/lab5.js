/* Author Anene */
/* file lab5.js */
window.onload = function(){
    "use strict";
    // put all of your code here


    //question 1
    let max= (num1, num2)=>{
        if(!(isNaN(num1)&&isNaN(num2))){
            let large=num1;
            if(num1<num2){
                large=num2;
            }
            return "1) The largest is of "+num1+" and"+ num2+" is= "+large;
        }else{
            return "1) Is not a number";
        }    
    }
    console.log(max(10,5));

    //question 2
    let maxOfThree=(num1, num2,num3)=>{
        if(!(isNaN(num1)&&isNaN(num2)&&isNaN(num3))){
            let large=Math.max(num1,num2,num3);
            return "2) The largest is of "+num1+", "+num2+" and"+ num3+" is= "+large;
        }else{
            return "2) Is not a number";
        }
    }
    console.log(maxOfThree(2,5,1));

    //question 3
    let isVowel=(char)=>{
        if(typeof(char)==="string"){
            if(char.length==1){
                let vowels=['a','e','i','o','u','A','E','I','O','U'];
                for(let i=0;i<vowels.length;i++){
                    if(vowels[i]===char){
                        return "3) The character '"+char+"' is a vowel";;
                    }
                }
                return "3) The character '"+char+"' is NOT a vowel";
            }
            return "3) Error: "+char+" is a string";
            
        }else{
            return "3) Error:"+char+"Is a number";
        }
    }
    console.log(isVowel("A"));

    //question 4 sum
    let sum=(nums)=>{
        if(Array.isArray(nums)){
            if(!nums.some(isNaN)){
                let sum=0;
                for(let i=0;i<nums.length;i++){
                    sum+=nums[i];
                }
                return "4) The Sum of array "+nums.toString()+" is= "+sum;
            }else{
                return "4) Error: Array contains non numeric value";    
            }

        }else{
            return "4) Error:"+ nums+" is not array";
        }
    }
    console.log(sum([1,2,3]));

    //question 4 multiply
    let multiply=(nums)=>{
        if(Array.isArray(nums)){
            if(!nums.some(isNaN)){
                let mul=1;
                for(let i=0;i<nums.length;i++){
                    mul*=nums[i];
                }
                return "4) The Multiply of array "+nums.toString()+" is= "+mul;
            }else{
                return "4) Error: Array contains non numeric value";    
            }

        }else{
            return "4) Error:"+ nums+" is not array";
        }
    }
    console.log(multiply([1,2,3]));

    //question 5 
    let reverse=(string)=>{
        if(typeof(string)==="string"){
            if(string.length>=1){
                let reverse="";
                for(let i=string.length-1;i>=0;i--){
                    reverse+=string[i];
                }
                return "5) the reversed string of "+ string+" is = "+ reverse;
            }
            return "5) Error: empty string";
            
        }else{
            return "5) Error:"+string+"Is a number";
        }
    }
    console.log(reverse("jag testar"));

    //question 6 
    let findLongestWord=(words)=>{
        if(Array.isArray(words)){
            if(words.some(isNaN)){
                let length=words[0].length;
                let word=words[0];
                for(let i=1;i<words.length;i++){
                    if(length<words[i].length){
                        length=words[i].length;
                        word=words[i];
                    }
                }
                return "6) The longest word of "+words.toString()+" is = "+word+" with length of = "+length;
            }else{
                return "6) Error: Array contains numeric value";    
            }

        }else{
            return "6) Error:"+ words+" is not array";
        }
    }
    console.log(findLongestWord(["one","three","four","six"]));

    //question 7
    let filterLongWords=(words, i)=>{
        if(Array.isArray(words)&& !isNaN(i)){
            let filtered=[];
            for(let j=0;j<words.length;j++){
                if(words[j].length>i)
                    filtered.push(words[j]);
            }
            return "7) filtered array of "+words.toString()+" is = "+ filtered.toString();
        }else{
            return "7) Error: wrong input formats";
        }
    }
    console.log(filterLongWords(["one","three","four","six"],3));

    //question 8
    let computeSumOfSquares=(nums)=>{
        if(Array.isArray(nums)){
            const result=nums.map((val)=>{return val*val}).reduce((prev, current, index) =>{
                return prev+current;
            });
            return "8) The sum of square of array "+nums.toString()+" is = "+ result;
        }else{
            return "8) Error: wrong input formats";
        }
    }
    console.log(computeSumOfSquares([1,2,3]));

    //question 9
    let printOddNumbersOnly=(nums)=>{
        if(Array.isArray(nums)){
            const result=nums.filter((val)=>{if(val%2!=0) return val;});
            return "9) The odd number of the arrays"+ nums.toString()+" are = "+ result.toString();
        }else{
            return "9) Error: wrong input formats";
        }
    }
    console.log(printOddNumbersOnly([1,2,3]));

    //question 10
    let computeSumOfSquaresOfEvensOnly=(nums)=>{
        if(Array.isArray(nums)){
            const result=nums.filter((val)=>{if(val%2===0) return val;}).map((val)=>{return val*val}).reduce((prev,current,index)=>{ return prev+current});
            return "10) The sum of squared even number of the arrays "+nums.toString()+" is = "+ result;
        }else{
            return "9) Error: wrong input formats";
        }
    }
    console.log(computeSumOfSquaresOfEvensOnly([1,2,3]));

    //question 11 sum with functional programming
    let sum_functional=(nums)=>{
        if(Array.isArray(nums)){
            if(!nums.some(isNaN)){
                const sum=nums.reduce((prev,current,index)=>{ return prev+current;});
                return "11) The Sum of the array "+nums.toString()+" is = "+sum;
            }else{
                return "11) Error: Array contains non numeric value";    
            }

        }else{
            return "11) Error:"+ nums+" is not array";
        }
    }
    console.log(sum_functional([1,2,3]));

    //question 4 multiply with functional programming
    let multiply_functional=(nums)=>{
        if(Array.isArray(nums)){
            if(!nums.some(isNaN)){
                const mul=nums.reduce((prev,current,index)=>{ return prev*current;});
                return "11) The Multiply of the array "+nums.toString()+" is= "+mul;
            }else{
                return "11) Error: Array contains non numeric value";    
            }

        }else{
            return "11) Error:"+ nums+" is not array";
        }
    }
    console.log(multiply_functional([1,2,3]));

    //question 12
    let findSecondBiggest=(nums)=>{
        if(Array.isArray(nums)){
            if(!nums.some(isNaN)){
                let biggest=nums[0];
                let second_biggest=nums[0];
                for(let i=1;i<nums.length;i++){
                    if(nums[i]>biggest){
                        let temp=biggest;
                        biggest=nums[i];
                        second_biggest=temp;
                    }
                }
                return "12) The Second biggest of the array "+nums.toString()+" is = "+second_biggest;
            }else{
                return "12) Error: Array contains non numeric value";    
            }

        }else{
            return "12) Error:"+ nums+" is not array";
        }
    }
    console.log(findSecondBiggest([1,2,3,4,5]));

    //question 13
    let printFibo=(n,a,b)=>{
        if(!isNaN(n)&&!isNaN(a)&&!isNaN(b)){
            let result=[];
            let prev,current;
            for(let i=0;i<n;i++){
                if(i===0){
                    result.push(a);
                    prev=a;
                }else if(i===1){
                    result.push(b);
                    current=b;
                }else{
                    let sum=prev+current;
                    result.push(sum);
                    prev=current;
                    current=sum;
                }
            }
            return "13) The Fibonacci sequence is of input lenght="+n+", start="+a+" and "+b+" is = "+result.toString();
        }else{
            return "13) Error: incorrect format";
        }
    }
    console.log(printFibo(10,0,1));

    function modifyTime(i) {
        if (i < 10) {
        i = "0" + i;
        }
        return i;
    }
    
    function clock() {
        var today = new Date();
        var d = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        var y = today.getFullYear();
        var h = today.getHours();
        var m = today.getMinutes();
        var s = today.getSeconds();
        // add a zero in front of numbers<10
        m = modifyTime(m);
        s = modifyTime(s);
        document.getElementById('clock').innerHTML = y+"-"+mm+"-"+d+" "+ h + ":" + m + ":" + s;
        let t = setTimeout(function() {
            clock()
        }, 500);
    }
    clock();
}