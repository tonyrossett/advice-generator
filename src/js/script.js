const adviceUpdateButton = document.querySelector(".atualiza-conselho");
const adviceNumber = document.querySelector(".conselho-num");
const adviceDescription = document.querySelector(".descr-conselho");

async function getAdvice() {
    const response = await fetch("https://api.adviceslip.com/advice");
    const adviceContent = await response.json();
    const adviceId = `Advice #${adviceContent.slip.id}`;
    const adviceText = `"${adviceContent.slip.advice}"`;

    adviceNumber.innerHTML = adviceId;
    adviceDescription.innerHTML = adviceText;
}

adviceUpdateButton.addEventListener("click", getAdvice);

getAdvice();

// Criado em 06/11/2023