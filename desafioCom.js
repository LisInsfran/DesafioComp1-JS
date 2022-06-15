let user_name=prompt("Bienvenido! Introduci tu nombre n.n")
console.log(user_name);

let user_age=parseInt(prompt("Ok "+user_name+", ¿cuántos años tenés?"))
while(user_age<18){
    alert("Debes ser mayor de edad para ingresar, intentalo nuevamente!");
    user_age=prompt("Una vez más "+user_name+", o busca un mayor de edad que pueda ayudarte! :D");
    console.log(user_age);}