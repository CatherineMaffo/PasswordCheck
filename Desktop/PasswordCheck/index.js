const form = document.querySelector(".form");



const inputTwo = document.querySelector(".inputTwo");
const inputOne = document.querySelector(".inputOne");

const btn = document.querySelector("#button");

const check_1 = document.querySelector(".check_1");
const check_2 = document.querySelector(".check_2");
const check_3 = document.querySelector(".check_3");
const check_4 = document.querySelector(".check_4");
const check_5 = document.querySelector(".check_5");

let passwordOne =[]
let passwordTwo =[]



form.addEventListener("keyup", (e) => {
  e.preventDefault();
  
});



const equalpass = function () {
 
  passwordOne = document.querySelector("#password_1").value;
   passwordTwo = document.querySelector("#password_2").value;
  
  
  function checkEquality() {
    if (
      passwordOne.length > 0 &&
      passwordTwo.length > 0 &&
      passwordOne === passwordTwo
    ) {
      check_1.innerHTML = "Passwords are equal✅";
    } else {
      check_1.innerHTML = "Passwords are not ❌";
    }
  }
  checkEquality();

  function checkLowerCase(str){
    for(var i=0; i<str.length; i++){
      if(str.charAt(i).includes(str.charAt(i).toLowerCase())){
        check_2.innerHTML = "Lower Case Letters ✅";
        break
      }else{
        check_2.innerHTML = "Lower Case Letters ❌"
      }
    }
  } 

  checkLowerCase(passwordOne);
  checkLowerCase(passwordTwo);

  function checkUpperCase(str) {
    for(var i=0; i<str.length; i++){
      if(
        str.charAt(i).match(/[A-Z]$/) 
        ) {
        check_3.innerHTML = "Upper Case Letters✅";
        break
      } else {
        check_3.innerHTML = " Upper Case Letters❌";
      }
    }
    
  }

  checkUpperCase(passwordOne);
  checkUpperCase(passwordTwo);


  function checkNumbers(str) {
    for(var i=0; i<str.length; i++){
      if (
        str.charAt(i).match(/[0-9]$/)
        ) {
        check_4.innerHTML = "Contains Numbers✅";
        break
      } else {
        check_4.innerHTML = " Contains Numbers❌";
      }
    }
    
  }

  checkNumbers(passwordOne);

  function checkCharacters() {
    if ( passwordOne.length > 9 || passwordTwo.length > 9) {
      check_5.innerHTML = "At least 10 Characters long ✅";
    } else {
      check_5.innerHTML = " At least 10 Characters long❌";
    }
  }

  checkCharacters();



};

equalpass();

form.addEventListener("keyup", equalpass)

function togglePassword(){
    btn.addEventListener('click',()=>{
        btn.classList.toggle('cathy')
        

        if( btn.classList.contains('cathy')){
          btn.innerHTML='Hide Password'
          inputOne.type ="text"
          inputTwo.type ="text"
        }else{
          btn.innerHTML='Show Password'
          inputOne.type ="password"
          inputTwo.type ="password"
        }
        
       
      
    })

}
togglePassword();
