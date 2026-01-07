# Bin2Dec - Conversor Binário para Decimal

Este projeto é uma implementação do desafio **Bin2Dec**, que faz parte da renomada lista de projetos do repositório [florinpop17/app-ideas](https://github.com/florinpop17/app-ideas).

O sistema numérico binário é a base de todos os computadores digitais. Este projeto visa proporcionar a prática da matemática de base 2, convertendo sequências de até 8 dígitos binários em seus equivalentes decimais.

---

## 🚀 O Desafio

O objetivo principal foi criar um conversor funcional respeitando restrições técnicas que estimulam a lógica de programação sem o uso de facilidades modernas de manipulação de listas.

### ⚖️ Restrições Implementadas
* **Sem Matrizes (Arrays):** O projeto não utiliza arrays para armazenar ou percorrer os bits.
* **Lógica Matemática Pura:** O cálculo do valor decimal de cada bit é realizado utilizando a função de potência ($2^n$), processando a string de entrada caractere por caractere.
* **Validação de Entrada:** O sistema alerta o usuário em tempo real caso caracteres diferentes de `0` ou `1` sejam inseridos.

---

## 🛠️ Tecnologias Utilizadas

O projeto foi desenvolvido com uma abordagem **Vanilla**, garantindo performance e leveza:
* **HTML5:** Estrutura semântica.
* **CSS3:** Design responsivo com estética *Glassmorphism* (efeito de vidro) e gradientes modernos.
* **JavaScript:** Lógica de conversão, manipulação de DOM e validações.

---

## 📖 Funcionalidades (User Stories)

- [x] Inserção de até 8 dígitos binários.
- [x] Notificação de erro para valores diferentes de 0 ou 1.
- [x] Atualização automática do resultado decimal durante a digitação.
- [x] Layout totalmente responsivo para dispositivos móveis e desktop.

---

## ⚙️ Como Executar o Projeto

1. Clone este repositório:
   ```bash
   git clone [https://github.com/seu-usuario/bin2dec.git](https://github.com/seu-usuario/bin2dec.git)