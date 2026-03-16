const QuizController = {
    state: {
        questions: [],
        currentIndex: 0,
        score: 0,
        timeLeft: 200,
        timerInterval: null,
        studentName: null,
        group: null,
        apiUrl: null
    },

    init() {
        this.cacheDOM();
        this.bindEvents();
    },

    cacheDOM() {
        this.dom = {
            gSelect: document.getElementById('group-select'),
            nSelect: document.getElementById('studentNameSelect'),
            startBtn: document.getElementById('start-btn'),
            quizArea: document.getElementById('quiz-area'),
            setupArea: document.getElementById('setup-section'),
            qText: document.getElementById('question-text'),
            options: document.getElementById('options-grid'),
            nextBtn: document.getElementById('next-btn'),
            // Nuevos elementos de estado
            timer: document.getElementById('timer-display'),
            qNum: document.getElementById('current-q-number'),
            hits: document.getElementById('live-hits'),
            results: document.getElementById('final-results'),
            scoreDisplay: document.getElementById('final-score')
        };
    },

    bindEvents() {
        this.dom.gSelect.onchange = () => this.handleGroupChange();
        this.dom.nSelect.onchange = () => this.handleNameChange();
        this.dom.startBtn.onclick = () => this.startQuiz();
        this.dom.nextBtn.onclick = () => this.processAnswer();
    },

    async handleGroupChange() {
        const group = this.dom.gSelect.value;
        if(!group) return;
        const [nombres, url] = await GoogleSheet.obtenerNombres(group);
        this.state.apiUrl = url;
        this.state.group = group;
        this.dom.nSelect.innerHTML = '<option value="">-- Selecciona tu nombre --</option>';
        nombres.forEach(n => {
            let opt = document.createElement('option');
            opt.value = n; opt.textContent = n;
            this.dom.nSelect.appendChild(opt);
        });
        this.dom.nSelect.disabled = false;
    },

    handleNameChange() {
        this.state.studentName = this.dom.nSelect.value;
        this.dom.startBtn.disabled = !this.state.studentName;
        this.dom.startBtn.classList.toggle('opacity-50', !this.state.studentName);
    },

    startQuiz() {
        this.dom.setupArea.classList.add('hidden');
        this.dom.quizArea.classList.remove('hidden');
        // Seleccionamos 10 aleatorias del banco
        this.state.questions = [...bancoPreguntas].sort(() => Math.random() - 0.5).slice(0, 10);
        this.startTimer();
        this.renderQuestion();
    },

    startTimer() {
        this.state.timerInterval = setInterval(() => {
            this.state.timeLeft--;
            this.dom.timer.textContent = `${this.state.timeLeft}s`;
            
            if (this.state.timeLeft <= 0) {
                clearInterval(this.state.timerInterval);
                this.finishQuiz(); // Se acaba el tiempo, se califica lo que lleve
            }
        }, 1000);
    },

    renderQuestion() {
        const q = this.state.questions[this.state.currentIndex];
        this.state.selectedOption = null;
        
        // Actualizar marcadores visuales
        this.dom.qNum.textContent = this.state.currentIndex + 1;
        this.dom.hits.textContent = this.state.score;
        
        this.dom.qText.textContent = q.pregunta;
        this.dom.nextBtn.disabled = true;
        this.dom.nextBtn.classList.add('opacity-50');
        
        this.dom.options.innerHTML = "";
        q.opciones.forEach(opt => {
            const btn = document.createElement('button');
            btn.className = "p-4 border-2 border-slate-200 rounded-xl mb-3 w-full text-left font-bold transition-all hover:bg-indigo-50";
            btn.textContent = opt;
            btn.onclick = () => {
                this.state.selectedOption = opt;
                document.querySelectorAll('#options-grid button').forEach(b => b.classList.remove('bg-indigo-600', 'text-white', 'border-indigo-600'));
                btn.classList.add('bg-indigo-600', 'text-white', 'border-indigo-600');
                this.dom.nextBtn.disabled = false;
                this.dom.nextBtn.classList.remove('opacity-50');
            };
            this.dom.options.appendChild(btn);
        });

        this.drawGraph(q.puntos, q.indiceRojo);
    },

    drawGraph(pts, indiceRojo) {
        const ctx = document.getElementById('trigChart').getContext('2d');
        if(window.myChart) window.myChart.destroy();
        window.myChart = new Chart(ctx, {
            type: 'scatter',
            data: {
                datasets: [{
                    data: [...pts, pts[0]],
                    showLine: true, borderColor: '#4f46e5', borderWidth: 3,
                    pointRadius: pts.map((_, i) => i === indiceRojo ? 6 : 3), // Mitad del tamaño anterior
                    pointBackgroundColor: pts.map((_, i) => i === indiceRojo ? '#ff0000' : '#333')
                }]
            },
            options: {
                responsive: true, maintainAspectRatio: false,
                scales: { x: { display: false }, y: { display: false } },
                plugins: { legend: { display: false } }
            }
        });
    },

    processAnswer() {
        if(this.state.selectedOption === this.state.questions[this.state.currentIndex].correcta) {
            this.state.score++;
        }
        
        if(this.state.currentIndex < 9) {
            this.state.currentIndex++;
            this.renderQuestion();
        } else {
            clearInterval(this.state.timerInterval);
            this.finishQuiz();
        }
    },

    async finishQuiz() {
        this.dom.quizArea.classList.add('hidden');
        this.dom.results.classList.remove('hidden');
        
        const notaFinal = (this.state.score * 0.5).toFixed(1); // 10 preguntas * 0.5 = 5.0 máx.
        this.dom.scoreDisplay.textContent = notaFinal;
        
        // Envío a Google Sheets (Libro Unificado)
        await GoogleSheet.guardarResultado(this.state.apiUrl, {
            nombre: this.state.studentName,
            puntaje: notaFinal,
            juego: "Razones trigonometrica", // Nombre exacto de la columna solicitado
            grupo: this.state.group
        });
    }
};

document.addEventListener('DOMContentLoaded', () => QuizController.init());