
let menu=Number(prompt("Digite el numero de la operacion que desea realizar: \n 1- Suma \n 2- Resta \n 3- Multiplicacion \n 4- Division"));
let num1=Number(prompt("Digite el Primer Numero: "));
let num2=Number(prompt("Digite el Segundo Numero: "));

if (menu==1) 
{
    document.write("  La suma es:  ",  +num1+num2);
}

if (menu==2) 
{
    document.write("  La resta es:  ",  num1-num2);
}

if (menu==3) 
{
    document.write("  La multiplicacion es:  ",  num1*num2);
}

if (menu==4) 
{
    document.write("  La division es:  ",  num1/num2);
}

