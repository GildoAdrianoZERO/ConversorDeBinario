const binaryInput = document.getElementById('binaryInput');
const decimalOutput = document.getElementById('decimalOutput');
const errorMessage = document.getElementById('errorMessage');

binaryInput.addEventListener('input', () => {
    const value = binaryInput.value;

    // Reset de mensagens e estilo
    errorMessage.textContent = "";
    binaryInput.style.borderColor = "rgba(255, 255, 255, 0.1)";

    if (value.length === 0) {
        decimalOutput.textContent = "0";
        return;
    }

    // Validação: apenas 0 ou 1
    if (/[^01]/.test(value)) {
        errorMessage.textContent = "Erro: Insira apenas dígitos 0 ou 1.";
        binaryInput.style.borderColor = "var(--error)";
        decimalOutput.textContent = "---";
        return;
    }

    let decimalAccumulator = 0;

    for (let i = 0; i < value.length; i++) {
        decimalAccumulator = decimalAccumulator * 2;

        if (value.charAt(i) === '1') {
            decimalAccumulator += 1;
        }
    }

    decimalOutput.textContent = decimalAccumulator;
});
