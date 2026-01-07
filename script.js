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

    
    if (/[^01]/.test(value)) {
        errorMessage.textContent = "Erro: Insira apenas dígitos 0 ou 1.";
        binaryInput.style.borderColor = "var(--error)";
        decimalOutput.textContent = "---";
        return;
    }

    let decimalAccumulator = 0;
    const len = value.length;

    for (let i = 0; i < len; i++) {
        
        const digit = value.charAt(i);
        
    
        const exponent = len - 1 - i;

        if (digit === '1') {
            decimalAccumulator += Math.pow(2, exponent);
        }
    }

    decimalOutput.textContent = decimalAccumulator;
});