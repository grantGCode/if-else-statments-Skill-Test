//Write a function that returns the length of string data type
//only if the argument passed into that function is a string
//console log the return value from that function
//if the argument is not a string return the statement "The argument passed is not a string"
//** to check for the datatype of an argument use the typeof operator 
//log the output of your function to the console 

function checkStringLength(param) {
  
  if (typeof param === "string") {
    return param.length;
  } else {
    return "The argument passed is not a string.";
    console.log()
  }
  
}

checkStringLength("myString")
checkStringLength(1552.07)