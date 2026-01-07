# Bin2Dec – Conversor Binário para Decimal

Este projeto é uma implementação do desafio **Bin2Dec**, pertencente à conhecida lista de ideias do repositório [florinpop17/app-ideas](https://github.com/florinpop17/app-ideas).

O sistema numérico binário é a base do funcionamento dos computadores digitais. Este projeto tem como objetivo exercitar a lógica matemática da base 2, convertendo números binários (com até 8 dígitos) em seus equivalentes decimais de forma didática e interativa.

---

## 🚀 O Desafio

O principal objetivo foi criar um conversor funcional respeitando restrições que incentivam o raciocínio lógico e o entendimento do processo de conversão binário → decimal, **sem o uso de funções prontas de conversão**


### ⚖️ Restrições Implementadas
* **Sem Arrays:** Não são utilizadas matrizes para armazenar ou percorrer os bits.
* **Sem Funções de Conversão:** Não é utilizado parseInt, Math.pow ou qualquer biblioteca de apoio.
* **Lógica Matemática Pura:** O cálculo do valor decimal de cada bit é realizado utilizando a função de potência ($2^n$), processando a string de entrada caractere por caractere.
* **Validação de Entrada:** O sistema alerta o usuário em tempo real caso caracteres diferentes de `0` ou `1` sejam inseridos.

---

## 🛠️ Tecnologias Utilizadas

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


