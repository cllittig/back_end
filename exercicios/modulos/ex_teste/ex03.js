function div(n1,n2)
{
    const resultados = [];
    for(var i = n1, u = n2  ; i <= u ; i++)
    {
        resultados.push(i/u);
    };
    return resultados;
};

module.exports = div;