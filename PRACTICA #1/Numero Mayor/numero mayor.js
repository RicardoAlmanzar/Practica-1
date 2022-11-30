let numero1=Number(prompt("Digite el primer numero: "));
let numero2=Number(prompt("Digite el segundo numero: "));
let numero3=Number(prompt("Digite el tercer numero: "));


if (numero1 > numero2 && numero1 > numero3) 
{
    document.write("  El numero mayor es:  ",numero1);
}

if (numero2 > numero1 && numero2 > numero3) 
{
    document.write("  El numero mayor es:  ",numero2);
}

if (numero3 > numero1 && numero3 > numero2) 
{
    document.write("  El numero mayor es:  ",numero3);
}
