const quiz = [
    {
      pergunta: "Qual é o maior time do Rio de Janeiro?",
      opcoes: ["Vasco", "Flamengo", "Fluminense", "Botafogo"],
      correta: 2
    },
    {
      pergunta: "Qual é o melhor meia do Brasil?",
      opcoes: ["Arias", "Arrascaeta", "Veiga", "Gerson"],
      correta: 0
    },
    {
      pergunta: "Quem foi artilheiro da Libertadores de 2023?",
      opcoes: ["Gabigol", "Cano", "Cavani", "Endrick"],
      correta: 1
    },
    {
      pergunta: "Quantos títulos brasileiro o Fluminense tem?",
      opcoes: ["3", "2", "6", "4"],
      correta: 3
    },
    {
      pergunta: "Quantos títulos brasileiros o Cano tem?",
      opcoes: ["1", "0", "3", "2"],
      correta: 1
    }
  ];
  
  let indiceAtual = 0;
  let pontuacao = 0;
  
  const questionContainer = document.getElementById("question-container");
  const submitButton = document.getElementById("submit");
  const feedback = document.getElementById("feedback");
  const score = document.getElementById("score");
  
  function mostrarPergunta() {
    const q = quiz[indiceAtual];
    feedback.textContent = "";
    let html = `<div class="question"><p><strong>${q.pergunta}</strong></p><div class="options">`;
  
    q.opcoes.forEach((opcao, i) => {
      html += `<label><input type="radio" name="resposta" value="${i}"> ${opcao}</label>`;
    });
  
    html += "</div></div>";
    questionContainer.innerHTML = html;
  }
  
  submitButton.addEventListener("click", () => {
    const selecionada = document.querySelector('input[name="resposta"]:checked');
  
    if (!selecionada) {
      feedback.textContent = "Por favor, selecione uma resposta.";
      feedback.style.color = "red";
      return;
    }
  
    const resposta = parseInt(selecionada.value);
    if (resposta === quiz[indiceAtual].correta) {
      feedback.textContent = "Correto!";
      feedback.style.color = "green";
      pontuacao++;
    } else {
      feedback.textContent = "Incorreto!";
      feedback.style.color = "red";
    }
  
    setTimeout(() => {
      indiceAtual++;
      if (indiceAtual < quiz.length) {
        mostrarPergunta();
      } else {
        questionContainer.innerHTML = "";
        submitButton.style.display = "none";
        feedback.textContent = "";
        score.textContent = `Você acertou ${pontuacao} de ${quiz.length} perguntas.`;
      }
    }, 1000);
  });
  
  mostrarPergunta();
  