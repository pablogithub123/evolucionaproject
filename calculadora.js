function calcularPaneles() {
    const consumo = document.getElementById("consumo").value;
    const produccionPorPanel = 36; // kWh al mes
    const numeroDePaneles = Math.ceil(consumo / produccionPorPanel);

    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `Necesitas aproximadamente <strong>${numeroDePaneles}</strong> paneles solares.<br><br>`;

    // Datos adicionales
    resultado.innerHTML += `
        <h3>Datos Importantes:</h3>
        <ul>
            <li><strong>Producción de un panel:</strong> Un panel solar típico puede generar alrededor de 36 kWh al mes.</li>
            <li><strong>Tipo de panel recomendado:</strong> Se sugieren paneles <em>monocristalinos</em> por su alta eficiencia y menor espacio requerido.</li>
            <li><strong>Beneficios de la energía solar:</strong> Ahorro en costos de electricidad, reducción de huella de carbono y aumento del valor de la propiedad.</li>
            <li><strong>Consideraciones:</strong> Asegúrate de evaluar la orientación de tu techo y la cantidad de luz solar directa que recibe.</li>
        </ul>
    `;
}
