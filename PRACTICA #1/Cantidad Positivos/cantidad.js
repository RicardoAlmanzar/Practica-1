let numero1=Number(prompt("Digite el primer numero: "));
let numero2=Number(prompt("Digite el segundo numero: "));

if (numero1<0 && numero2<0) 
{
    document.write("  Ambos numeros son negativos ");
}

if (numero1>0 && numero2>0) 
{
    document.write("  Ambos numeros son positivos ");
}

if (numero1>0 && numero2<0) 
{
    document.write("  El primer numero es positivo: ",numero1);
}

if (numero1<0 && numero2>0) 
{
    document.write("  El segundo numero es positivo: ",numero2);
}