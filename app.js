const modulesData = [dataIntro, dataMapa, dataEntrega];

let currentTabId = modulesData[0].id;
let secondsElapsed = 0;
let timerInterval;

const tabsContainer = document.getElementById('tabs-container');
const contentContainer = document.getElementById('app-content');
const timerElement = document.getElementById('timer');

// Renderiza as Abas no Header
function renderTabs() {
    tabsContainer.innerHTML = '';
    modulesData.forEach(module => {
        const btn = document.createElement('button');
        // Estilização simplificada e adaptada para o menu superior
        btn.className = `tab-btn px-4 md:px-6 py-4 font-semibold text-sm md:text-base text-gray-500 flex items-center gap-2 outline-none ${module.id === currentTabId ? 'active' : ''}`;
        btn.innerHTML = `${module.icon} ${module.title}`;
        
        btn.addEventListener('click', () => {
            currentTabId = module.id;
            renderTabs(); 
            renderContent(); 
        });
        
        tabsContainer.appendChild(btn);
    });
}

// Renderiza o Conteúdo Dinâmico com Animação
function renderContent() {
    const activeModule = modulesData.find(m => m.id === currentTabId);
    if (activeModule) {
        contentContainer.classList.remove('fade-in');
        void contentContainer.offsetWidth; // Trigger reflow
        contentContainer.innerHTML = activeModule.content;
        contentContainer.classList.add('fade-in');
    }
}

// Lógica do Cronômetro
function updateTimer() {
    secondsElapsed++;
    
    const minutes = Math.floor(secondsElapsed / 60);
    const seconds = secondsElapsed % 60;
    
    const displayMins = String(minutes).padStart(2, '0');
    const displaySecs = String(seconds).padStart(2, '0');
    
    timerElement.textContent = `${displayMins}:${displaySecs}`;
    
    // Alerta visual aos 35 minutos (2100 segundos)
    if (secondsElapsed >= 2100) {
        timerElement.classList.remove('text-gray-700');
        timerElement.classList.add('text-red-600', 'animate-pulse');
        timerElement.parentElement.classList.add('border-red-400', 'bg-red-50');
    }
}

// Função global para revelar/ocultar as metáforas (Aba 3)
window.toggleMetaphors = function() {
    const container = document.getElementById('metaphors-container');
    if (container) {
        container.classList.toggle('hidden');
    }
};

// Inicialização
function initApp() {
    renderTabs();
    renderContent();
    timerInterval = setInterval(updateTimer, 1000);
}

document.addEventListener('DOMContentLoaded', initApp);