
function par_ou_impar(numero)
{
    if (numero % 2 === 0)
    {
        return "O "+numero+" é par!"
    }
    else
    {
        return "O "+numero+" é impar!"
    }
}

console.log(par_ou_impar(5))

function fatorial(numero)
{
    var n1 = numero - 1, soma = numero
    
    for ( ;n1 > 0; n1--)
    {
        soma = soma * n1
    }
    
    if (soma === 0)
    {
        return "1 " + soma
    }
    else
    {
    return soma
    }
}

console.log(fatorial(6))

function primo(numero)
{
    var div = 0
    for (var i = 1; i < numero; i++)
    {
        if (numero % i === 0)
        {
            div++
        }
    }
    
    if (div > 2)
    {
        return "O numero " + numero + " não e primo"
    }
    else if (div = 2)
    {
        return "O numero " + numero + " e primo" 
    }
    
}

console.log(primo(20))

function fibonacci(numero)
{
    var sequencia = [0,1], Fn = 2
    for (var i = 2; i < numero;i++)
    {
        Fn = sequencia[i-1] + sequencia[i-2]
        sequencia.push(Fn)
    }
    return sequencia
}
console.log(fibonacci(11))



function pares_array(numeros)
{
    var pares = [], quantidade = numeros.length, num_atual = 0
    for (var i = 1; i <= quantidade; i++)
    {
        
        if (numeros[num_atual] % 2 == 0)
        {
            pares.push(numeros[num_atual])
        }
        num_atual++
    }
    return pares
}

console.log(pares_array([9,2,5,6,1,4,12]))

function pares_soma(numeros)
{
    var pares = [], quantidade = numeros.length, num_atual = 0
    for (var i = 1; i <= quantidade; i++)
    {
        
        if (numeros[num_atual] % 2 == 0)
        {
            pares.push(numeros[num_atual])
        }
        num_atual++
    }
    var soma = 0, num_atual2 = 0
    for (var I = 1; I <= pares.length; I++)
    {
        soma = soma + pares[num_atual2]
        num_atual2++
    }
    return soma
}

console.log(pares_soma([1,2,3,4,5,6]))

function atv10_multiplicacao(numeros)
{
    var resultado = numeros[0]
    for (var i = 0; i < numeros[1] - 1; i++)
    {
        resultado += numeros[0]
    }
    return resultado
}

console.log(atv10_multiplicacao([8,7]))