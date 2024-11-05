
        const quizData = [
            {
                question: "Qual é a tag usada para criar um parágrafo no HTML?",
                answers: [
                    { text: "<h1>", correct: false },
                    { text: "<div>", correct: false },
                    { text: "<p>", correct: true },
                    { text: "<span>", correct: false }
                ]
            },
            {
                question: "Qual tag define o título de uma página?",
                answers: [
                    { text: "<header>", correct: false },
                    { text: "<meta>", correct: false },
                    { text: "<title>", correct: true },
                    { text: "<head>", correct: false }
                ]
            },
            {
                question: "Como você insere uma quebra de linha em HTML?",
                answers: [
                    { text: "<lb>", correct: false },
                    { text: "<break>", correct: false },
                    { text: "<br>", correct: true },
                    { text: "<line>", correct: false }
                ]
            },
            {
                question: "Qual atributo altera a cor de fundo da página?",
                answers: [
                    { text: "bgcolor", correct: true },
                    { text: "background", correct: false },
                    { text: "color", correct: false },
                    { text: "bg-color", correct: false }
                ]
            },
            {
                question: "Qual tag cria uma lista ordenada?",
                answers: [
                    { text: "<ul>", correct: false },
                    { text: "<list>", correct: false },
                    { text: "<ol>", correct: true },
                    { text: "<li>", correct: false }
                ]
            },
            {
                question: "Qual das seguintes Tags é usada para criar um hiperlink?",
                answers: [
                    { text: "<link>", correct: false },
                    { text: "<href>", correct: false },
                    { text: "<a>", correct: true },
                    { text: "<nav>", correct: false }
                ]
            },
            {
                question: "Qual atributo da tag <img> define o endereço da imagem?",
                answers: [
                    { text: "src", correct: true },
                    { text: "source", correct: false },
                    { text: "href", correct: false },
                    { text: "imgsrc", correct: false }
                ]
            },
            {
                question: "Como se insere um comentário no HTML?",
                answers: [
                    { text: "<!-- comentário -->", correct: true },
                    { text: "// comentário", correct: false },
                    { text: "/* comentário */", correct: false },
                    { text: "<? comentário ?>", correct: false }
                ]
            },
            {
                question: "Qual tag cria um campo de texto em um formulário?",
                answers: [
                    { text: "<input type='password'>", correct: false },
                    { text: "<input type='text'>", correct: true },
                    { text: "<input type='email'>", correct: false },
                    { text: "<input type='submit'>", correct: false }
                ]
            },
            {
                question: "Qual tag define uma linha de uma tabela?",
                answers: [
                    { text: "<tr>", correct: true },
                    { text: "<td>", correct: false },
                    { text: "<table>", correct: false },
                    { text: "<th>", correct: false }
                ]
            },
            {
                question: "Qual tag exibe um texto em negrito?",
                answers: [
                    { text: "<strong>", correct: true },
                    { text: "<i>", correct: false },
                    { text: "<u>", correct: false },
                    { text: "<mark>", correct: false }
                ]
            },
            {
                question: "Como você define o charset como UTF-8?",
                answers: [
                    { text: "<meta charset='UTF-8'>", correct: true },
                    { text: "<meta encoding='UTF-8'>", correct: false },
                    { text: "<meta type='UTF-8'>", correct: false },
                    { text: "<meta utf='8'>", correct: false }
                ]
            },
            {
                question: "Qual das alternativas abaixo cria uma lista não ordenada?",
                answers: [
                    { text: "<ul>", correct: true },
                    { text: "<ol>", correct: false },
                    { text: "<li>", correct: false },
                    { text: "<dl>", correct: false }
                ]
            },
            {
                question: "Qual tag cria um campo de senha em um formulário?",
                answers: [
                    { text: "<input type='password'>", correct: true },
                    { text: "<input type='text'>", correct: false },
                    { text: "<input type='email'>", correct: false },
                    { text: "<input type='hidden'>", correct: false }
                ]
            },
            {
                question: "Qual atributo define o texto que aparece quando se passa o mouse sobre uma imagem?",
                answers: [
                    { text: "title", correct: true },
                    { text: "alt", correct: false },
                    { text: "hover", correct: false },
                    { text: "desc", correct: false }
                ]
            },
            {
                question: "Qual tag insere uma imagem em uma página HTML?",
                answers: [
                    { text: "<a>", correct: false },
                    { text: "<img>", correct: true },
                    { text: "<picture>", correct: false },
                    { text: "<figure>", correct: false }
                ]
            },
            {
                question: "Qual tag cria um título de nível 1?",
                answers: [
                    { text: "<h2>", correct: false },
                    { text: "<h3>", correct: false },
                    { text: "<h1>", correct: true },
                    { text: "<h4>", correct: false }
                ]
            },
            {
                question: "Qual atributo define a largura de uma tabela?",
                answers: [
                    { text: "width", correct: true },
                    { text: "size", correct: false },
                    { text: "length", correct: false },
                    { text: "height", correct: false }
                ]
            },
            {
                question: "Qual tag cria uma célula de dados em uma tabela?",
                answers: [
                    { text: "<td>", correct: true },
                    { text: "<th>", correct: false },
                    { text: "<tr>", correct: false },
                    { text: "<table>", correct: false }
                ]
            },
            {
                question: "Qual tag define uma célula de cabeçalho em uma tabela?",
                answers: [
                    { text: "<td>", correct: false },
                    { text: "<tr>", correct: false },
                    { text: "<th>", correct: true },
                    { text: "<table>", correct: false }
                ]
            },
            {
                question: "Qual tag é usada para criar um formulário?",
                answers: [
                    { text: "<form>", correct: true },
                    { text: "<input>", correct: false },
                    { text: "<textarea>", correct: false },
                    { text: "<fieldset>", correct: false }
                ]
            },
            {
                question: "Qual tag é usada para adicionar um vídeo em HTML5?",
                answers: [
                    { text: "<media>", correct: false },
                    { text: "<video>", correct: true },
                    { text: "<embed>", correct: false },
                    { text: "<object>", correct: false }
                ]
            },
            {
                question: "Qual tag exibe um texto em itálico?",
                answers: [
                    { text: "<i>", correct: true },
                    { text: "<strong>", correct: false },
                    { text: "<u>", correct: false },
                    { text: "<em>", correct: false }
                ]
            },
            {
                question: "Qual atributo define o endereço de destino de um link?",
                answers: [
                    { text: "src", correct: false },
                    { text: "href", correct: true },
                    { text: "action", correct: false },
                    { text: "target", correct: false }
                ]
            },
            {
                question: "Qual tag é usada para criar uma caixa de seleção?",
                answers: [
                    { text: "<input type='radio'>", correct: false },
                    { text: "<input type='text'>", correct: false },
                    { text: "<input type='checkbox'>", correct: true },
                    { text: "<input type='submit'>", correct: false }
                ]
            }
        ];

        // Elementos do DOM
        const questionElement = document.getElementById('question');
        const answersElement = document.getElementById('answers');
        const nextBtn = document.getElementById('nextBtn');
        const resultElement = document.getElementById('result');

        let currentQuestionIndex = 0;
        let score = 0;

        // Carregar pergunta e respostas
        function loadQuestion() {
            resetState();
            const currentQuestion = quizData[currentQuestionIndex];
            questionElement.innerText = currentQuestion.question;

            currentQuestion.answers.forEach(answer => {
                const li = document.createElement('li');
                li.innerText = answer.text;
                li.addEventListener('click', () => selectAnswer(answer, li));
                answersElement.appendChild(li);
            });
        }

        // Selecionar resposta
        function selectAnswer(answer, li) {
            if (answer.correct) {
                score++;
                li.style.backgroundColor = 'green';
            } else {
                li.style.backgroundColor = 'red';
            }

            Array.from(answersElement.children).forEach(child => {
                child.style.pointerEvents = 'none';
                if (child.innerText === answer.text && !answer.correct) {
                    child.style.backgroundColor = 'red';
                } else if (quizData[currentQuestionIndex].answers.find(a => a.text === child.innerText && a.correct)) {
                    child.style.backgroundColor = 'green';
                }
            });

            nextBtn.disabled = false;
        }

        // Resetar estado para a próxima pergunta
        function resetState() {
            nextBtn.disabled = true;
            answersElement.innerHTML = '';
            resultElement.innerHTML = '';
        }

        // Próxima pergunta
        nextBtn.addEventListener('click', () => {
            currentQuestionIndex++;

            if (currentQuestionIndex < quizData.length) {
                loadQuestion();
            } else {
                showResult();
            }
        });

        // Mostrar resultado final
        function showResult() {
            questionElement.innerText = "Fim do Quiz!";
            resultElement.innerHTML = `Você acertou ${score} de ${quizData.length} perguntas.`;
            nextBtn.style.display = 'none';
        }

        // Iniciar o quiz
        loadQuestion();

  document.addEventListener('contextmenu', function(e) {
        e.preventDefault();
    });

   document.addEventListener('keydown', function(e) {
        if (e.key === "F12" || (e.ctrlKey && e.shiftKey && e.key === 'I')) {
            e.preventDefault();
        }
    });
 