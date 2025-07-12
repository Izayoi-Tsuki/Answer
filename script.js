// Book of Answers - Main Application Logic

class BookOfAnswers {
    constructor() {
        this.answers = [
            // Positive and Encouraging Answers
            "Yes, absolutely!",
            "Without a doubt.",
            "You can count on it.",
            "Most likely.",
            "Outlook is good.",
            "Signs point to yes.",
            "Reply hazy, try again.",
            "Ask again later.",
            "Better not tell you now.",
            "Cannot predict now.",
            "Concentrate and ask again.",
            "Don't count on it.",
            "My reply is no.",
            "My sources say no.",
            "Outlook not so good.",
            "Very doubtful.",
            
            // Wisdom and Philosophical Answers
            "The answer lies within you.",
            "Trust your intuition.",
            "Patience will reveal the truth.",
            "The universe is aligning in your favor.",
            "Sometimes the best answer is no answer.",
            "Your heart already knows.",
            "The path will become clear.",
            "Embrace the uncertainty.",
            "Focus on what you can control.",
            "Let go and let it be.",
            "The timing is perfect.",
            "Your instincts are correct.",
            "The answer will come when you least expect it.",
            "Trust the process.",
            "Everything happens for a reason.",
            "The truth will set you free.",
            
            // Action-Oriented Answers
            "Take action now.",
            "Wait for the right moment.",
            "Seek advice from others.",
            "Trust your gut feeling.",
            "The answer is yes, but be patient.",
            "Proceed with caution.",
            "The time is now.",
            "Consider all options first.",
            "Follow your passion.",
            "Listen to your inner voice.",
            "The opportunity is knocking.",
            "Be bold and decisive.",
            "Think before you act.",
            "The signs are positive.",
            "Trust your judgment.",
            "The answer will become clear soon.",
            
            // Mystical and Fun Answers
            "The stars align in your favor.",
            "The crystal ball says yes.",
            "The ancient wisdom says proceed.",
            "The cosmic forces are with you.",
            "The oracle speaks: it is so.",
            "The mystical energies say yes.",
            "The universe whispers: go for it.",
            "The spiritual realm approves.",
            "The cosmic dance favors you.",
            "The mystical forces are aligned.",
            "The ancient ones smile upon this.",
            "The cosmic winds bring good news.",
            "The spiritual guides say yes.",
            "The mystical path leads forward.",
            "The cosmic energy flows positively.",
            "The ancient wisdom guides you.",
            
            // Practical and Realistic Answers
            "It depends on your actions.",
            "The outcome is in your hands.",
            "Your effort will determine the result.",
            "Success requires dedication.",
            "The answer is conditional.",
            "Your choices matter most.",
            "The result depends on timing.",
            "Preparation is key.",
            "Your attitude will shape the outcome.",
            "The answer lies in your approach.",
            "Success comes with persistence.",
            "Your mindset determines the result.",
            "The outcome reflects your commitment.",
            "Your actions speak louder than words.",
            "The answer is what you make it.",
            "Your determination will decide.",
            
            // Humorous and Light-hearted Answers
            "Ask your cat, they know everything.",
            "The answer is 42 (just kidding).",
            "Maybe ask a magic 8-ball instead?",
            "The answer is blowing in the wind.",
            "Consult your inner fortune cookie.",
            "The answer is in the pudding.",
            "Ask again when Mercury is in retrograde.",
            "The answer is somewhere in the clouds.",
            "Check your horoscope for details.",
            "The answer is written in the stars.",
            "Ask your pet, they're always right.",
            "The answer is in your coffee grounds.",
            "Consult the ancient tea leaves.",
            "The answer is in the rainbow.",
            "Ask the moon, it knows all.",
            "The answer is in the wind chimes."
        ];
        
        this.history = [];
        this.maxHistory = 10;
        
        this.initializeApp();
    }
    
    initializeApp() {
        this.answerSection = document.getElementById('answer-section');
        this.answerContent = document.getElementById('answer-content');
        this.newQuestionButton = document.getElementById('new-question-button');
        this.historyList = document.getElementById('history-list');
        this.musicToggle = document.getElementById('music-toggle');
        
        // Audio elements
        this.mysticBgMusic = document.getElementById('mystic-bg-music');
        this.crystalSound = document.getElementById('crystal-sound');
        this.revealSound = document.getElementById('reveal-sound');
        
        this.musicEnabled = false;
        this.isThinking = false;
        
        this.bindEvents();
        this.loadHistory();
        this.initializeAudio();
    }
    
    bindEvents() {
        this.newQuestionButton.addEventListener('click', () => this.resetQuestion());
        this.musicToggle.addEventListener('click', () => this.toggleMusic());
        
        // Add click event to mystic circle
        const mysticCircle = document.querySelector('.mystic-circle');
        if (mysticCircle) {
            mysticCircle.addEventListener('click', () => this.askQuestion());
        }
    }
    
    initializeAudio() {
        // Set volume levels - much quieter and smoother
        if (this.mysticBgMusic) {
            this.mysticBgMusic.volume = 0.15; // Much quieter background music
        }
        if (this.crystalSound) {
            this.crystalSound.volume = 0.4; // Keep crystal sound moderate
        }
        if (this.revealSound) {
            this.revealSound.volume = 0.5; // Slightly different volume to avoid conflicts
        }
    }
    
    askQuestion() {
        // Prevent multiple clicks while thinking
        if (this.isThinking) return;
        
        this.isThinking = true;
        
        // Generate a random question since we don't have input
        const questions = [
            "What does the future hold?",
            "Should I take this path?",
            "What is the answer I seek?",
            "What does the universe want me to know?",
            "What guidance do I need?",
            "What is the truth?",
            "What should I do next?",
            "What is my destiny?",
            "What does my heart know?",
            "What wisdom do I need?"
        ];
        
        const question = questions[Math.floor(Math.random() * questions.length)];
        
        this.showLoading();
        this.playCrystalSound();
        
        // Simulate thinking time for better UX
        setTimeout(() => {
            const answer = this.getRandomAnswer();
            this.displayAnswer(question, answer);
            this.addToHistory(question, answer);
            this.saveHistory();
            this.isThinking = false;
            // Delay reveal sound to avoid conflict with crystal sound
            setTimeout(() => {
                this.playRevealSound();
            }, 500);
        }, 2000);
    }
    
    getRandomAnswer() {
        const randomIndex = Math.floor(Math.random() * this.answers.length);
        return this.answers[randomIndex];
    }
    
    displayAnswer(question, answer) {
        this.answerContent.textContent = answer;
        this.answerSection.style.display = 'block';
        
        // Reset mystic circle state
        this.resetMysticCircle();
        
        // Scroll to answer
        this.answerSection.scrollIntoView({ behavior: 'smooth' });
    }
    
    resetQuestion() {
        this.answerSection.style.display = 'none';
    }
    
    resetMysticCircle() {
        const mysticCircle = document.querySelector('.mystic-circle');
        if (mysticCircle) {
            mysticCircle.style.pointerEvents = 'auto';
            mysticCircle.style.opacity = '1';
        }
    }
    
    showLoading() {
        // Add loading animation to the mystic circle
        const mysticCircle = document.querySelector('.mystic-circle');
        if (mysticCircle) {
            mysticCircle.style.pointerEvents = 'none';
            mysticCircle.style.opacity = '0.7';
        }
    }
    
    playCrystalSound() {
        if (this.crystalSound) {
            this.crystalSound.currentTime = 0;
            this.crystalSound.play().catch(e => console.log('Audio play failed:', e));
        }
    }
    
    playRevealSound() {
        if (this.revealSound) {
            this.revealSound.currentTime = 0;
            // Fade in the reveal sound for smoother transition
            this.revealSound.volume = 0;
            this.revealSound.play().catch(e => console.log('Audio play failed:', e));
            
            // Gradually increase volume
            let volume = 0;
            const fadeIn = setInterval(() => {
                volume += 0.1;
                if (volume >= 0.5) {
                    volume = 0.5;
                    clearInterval(fadeIn);
                }
                this.revealSound.volume = volume;
            }, 50);
        }
    }
    
    playBgMusic() {
        if (this.mysticBgMusic) {
            try {
                // Fade in background music for smoother start
                this.mysticBgMusic.volume = 0;
                this.mysticBgMusic.play().then(() => {
                    // Gradually increase volume
                    let volume = 0;
                    const fadeIn = setInterval(() => {
                        volume += 0.02;
                        if (volume >= 0.15) {
                            volume = 0.15;
                            clearInterval(fadeIn);
                        }
                        this.mysticBgMusic.volume = volume;
                    }, 100);
                }).catch(e => {
                    console.log('Background music play failed:', e);
                    // Try alternative approach
                    this.mysticBgMusic.play();
                });
            } catch (e) {
                console.log('Background music error:', e);
            }
        }
    }
    
    stopBgMusic() {
        if (this.mysticBgMusic) {
            // Fade out background music for smoother stop
            let volume = this.mysticBgMusic.volume;
            const fadeOut = setInterval(() => {
                volume -= 0.02;
                if (volume <= 0) {
                    volume = 0;
                    clearInterval(fadeOut);
                    this.mysticBgMusic.pause();
                    this.mysticBgMusic.currentTime = 0;
                }
                this.mysticBgMusic.volume = volume;
            }, 100);
        }
    }
    
    toggleMusic() {
        this.musicEnabled = !this.musicEnabled;
        
        if (this.musicEnabled) {
            this.playBgMusic();
            this.musicToggle.classList.add('active');
            this.musicToggle.textContent = '🔊';
        } else {
            this.stopBgMusic();
            this.musicToggle.classList.remove('active');
            this.musicToggle.textContent = '🎵';
        }
    }
    
    addToHistory(question, answer) {
        const historyItem = {
            question: question,
            answer: answer,
            timestamp: new Date().toLocaleString()
        };
        
        this.history.unshift(historyItem);
        
        // Keep only the last maxHistory items
        if (this.history.length > this.maxHistory) {
            this.history = this.history.slice(0, this.maxHistory);
        }
        
        this.updateHistoryDisplay();
    }
    
    updateHistoryDisplay() {
        this.historyList.innerHTML = '';
        
        if (this.history.length === 0) {
            this.historyList.innerHTML = '<p style="text-align: center; color: rgba(224, 224, 224, 0.6); font-style: italic;">No questions asked yet. Tap the crystal ball above!</p>';
            return;
        }
        
        this.history.forEach(item => {
            const historyItem = document.createElement('div');
            historyItem.className = 'history-item';
            historyItem.innerHTML = `
                <div class="history-question">${this.escapeHtml(item.question)}</div>
                <div class="history-answer">${this.escapeHtml(item.answer)}</div>
                <small style="color: #999; font-size: 0.8rem;">${item.timestamp}</small>
            `;
            this.historyList.appendChild(historyItem);
        });
    }
    
    escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }
    
    saveHistory() {
        try {
            localStorage.setItem('bookOfAnswersHistory', JSON.stringify(this.history));
        } catch (e) {
            console.warn('Could not save history to localStorage:', e);
        }
    }
    
    loadHistory() {
        try {
            const saved = localStorage.getItem('bookOfAnswersHistory');
            if (saved) {
                this.history = JSON.parse(saved);
                this.updateHistoryDisplay();
            }
        } catch (e) {
            console.warn('Could not load history from localStorage:', e);
        }
    }
    
    clearHistory() {
        this.history = [];
        this.saveHistory();
        this.updateHistoryDisplay();
    }
}

// Initialize the app when the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new BookOfAnswers();
});

// Add some fun Easter eggs
document.addEventListener('keydown', (e) => {
    // Press 'H' to clear history
    if (e.key === 'h' && e.ctrlKey) {
        e.preventDefault();
        if (confirm('Clear all history?')) {
            window.bookOfAnswers?.clearHistory();
        }
    }
    
    // Press 'R' to get a random answer without asking
    if (e.key === 'r' && e.ctrlKey) {
        e.preventDefault();
        const randomAnswer = window.bookOfAnswers?.getRandomAnswer();
        if (randomAnswer) {
            alert(`Random answer: ${randomAnswer}`);
        }
    }
});

// Make the app instance globally available for debugging
window.bookOfAnswers = null;
document.addEventListener('DOMContentLoaded', () => {
    window.bookOfAnswers = new BookOfAnswers();
}); 