// cheack number prime or not
let n=5;
let count=0;
for(i=1;i<=10;i++){
    if(n%i==0)
    {
        count++;
    }
}
if(count==2){
    console.log("prime number :",n)
}
else{
    console.log("number not prime",n)
}