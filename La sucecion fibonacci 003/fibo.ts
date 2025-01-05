
const fibonacci = (n:number):void=>{
  let a:number = 0;
  let b:number = 1;
  let temp:number;
  let array: number[] = [a,b];
  
  for(let i:number=0;i<n;i++){ 
    
    temp = (a+b) 
    a = b 
    b=temp 
    array.push(temp)
    console.log(temp)
  
  }
   console.log(array)
  }
  
  fibonacci(50)