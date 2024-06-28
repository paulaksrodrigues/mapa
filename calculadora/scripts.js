function calcular() {
    const homens = parseInt(document.getElementById('homens').value);
    const mulheres = parseInt(document.getElementById('mulheres').value);
    const criancas = parseInt(document.getElementById('criancas').value);

    const totalCarne = (homens * 500 + mulheres * 300 + criancas * 200) / 1000;
    const totalFrango = (homens * 200 + mulheres * 200 + criancas * 100) / 1000;
    const totalLinguica = (homens * 200 + mulheres * 200 + criancas * 200) / 1000;
    const totalRefrigerante = (homens * 300 + mulheres * 400 + criancas * 200) / 1000;
    const totalCerveja = (homens * 800 + mulheres * 500) / 1000;

    const resultados = `
        <p>Carne bovina: ${totalCarne.toFixed(2)} kg</p>
        <p>Frango: ${totalFrango.toFixed(2)} kg</p>
        <p>Linguiça: ${totalLinguica.toFixed(2)} kg</p>
        <p>Refrigerante: ${totalRefrigerante.toFixed(2)} litros</p>
        <p>Cerveja: ${totalCerveja.toFixed(2)} litros</p>
    `;

    document.getElementById('resultados').innerHTML = resultados;
}