document.getElementById('calculate').addEventListener('click', function(){
    const conta = document.getElementById('valorConta').value
    const clientes = document.getElementById('clientes').value
    const total = conta / clientes

    document.getElementById('total').innerHTML = (`Valor a ser pago por cada cliente: R$ ${total.toFixed(2)}`)
})
