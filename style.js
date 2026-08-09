/* --- State Management --- */
let selectedTrackPipeline = "Standard";

/* --- Over-Spreading AI Sidebar Mechanical Controls --- */
function toggleAISidebar() {
    const aiWidget = document.getElementById('ai-widget');
    const bodyElement = document.body;
    const triggerTab = document.getElementById('ai-sidebar-trigger');

    if (!aiWidget || !triggerTab) return;

    aiWidget.classList.toggle('open');  
    bodyElement.classList.toggle('ai-open');  
      
    if (aiWidget.classList.contains('open')) {  
        triggerTab.style.right = '-50px';  
    } else {  
        triggerTab.style.right = '0';  
    }
}

/* --- Pipeline Track Switcher --- */
function updatePipeline(element, trackValue) {
    const parent = element.parentElement;
    if (!parent) return;

    const totalButtons = parent.querySelectorAll('.tab-btn');
    totalButtons.forEach(btn => btn.classList.remove('active'));
    element.classList.add('active');
    selectedTrackPipeline = trackValue;

    const allCards = document.querySelectorAll('.pipeline-card');  
    allCards.forEach(card => card.style.display = 'none');  

    const targetCard = document.getElementById(`track-${trackValue}`);  
    if (targetCard) {  
        targetCard.style.display = 'block';  
        targetCard.style.animation = 'fadeEffect 0.4s ease-in-out';  
    }
}

/* --- 20% Loan Engine & Live Calendar Target Generation --- */
function runCalculationEngine() {
    const selectElem = document.getElementById('loanAmount');
    if (!selectElem) return;

    const val = parseInt(selectElem.value, 10);
    const interest = Math.round(val * 0.2);
    const total = val + interest;

    const interestDisplay = document.getElementById('interestDisplay');
    const totalDisplay = document.getElementById('totalDisplay');
    if (interestDisplay) interestDisplay.innerText = interest.toLocaleString();  
    if (totalDisplay) totalDisplay.innerText = total.toLocaleString();  
      
    const baseDate = new Date();  
    const targetDate = new Date();  
    targetDate.setDate(baseDate.getDate() + 30);  
      
    const graceLimitDate = new Date();  
    graceLimitDate.setDate(targetDate.getDate() + 3);  
      
    const targetReturnDate = document.getElementById('targetReturnDate');
    const gracePeriodLimit = document.getElementById('gracePeriodLimit');

    if (targetReturnDate) targetReturnDate.innerText = targetDate.toLocaleDateString();  
    if (gracePeriodLimit) gracePeriodLimit.innerText = graceLimitDate.toLocaleDateString();
}

/* --- Document Export Engine --- */
function downloadContractDocument() {
    const loanAmountElem = document.getElementById('loanAmount');
    const interestDisplay = document.getElementById('interestDisplay');
    const totalDisplay = document.getElementById('totalDisplay');

    if (!loanAmountElem || !interestDisplay || !totalDisplay) return;

    const amountText = loanAmountElem.value;
    const interestText = interestDisplay.innerText;
    const totalText = totalDisplay.innerText;

    const plainText = `LIZKEMI CAPITAL LTD - STRATEGIC AGREEMENT\n` +  
                      `Selected Principal Matrix: ${amountText}\n` +  
                      `Accrued 20% Interest Calculation: ${interestText}\n` +  
                      `Total Repayment Obligation: ${totalText}\n\n` +  
                      `Generated under live secure browser token. 3-Day Grace period bounds apply strictly.`;  
                        
    const blob = new Blob([plainText], { type: "text/plain" });  
    const link = document.createElement("a");  
    link.href = URL.createObjectURL(blob);  
    link.download = "LizKemi_Loan_Manifest.txt";  
    link.click();
}

/* --- Capital Yield Forecast Simulator Matrix Formula & HTML5 Canvas Chart --- */
function runInvestmentEngine() {
    const capitalInput = document.getElementById('investmentCapital');
    const durationInput = document.getElementById('investmentDuration');
    if (!capitalInput || !durationInput) return;

    const capital = parseInt(capitalInput.value, 10);  
    const years = parseInt(durationInput.value, 10);  
      
    const capitalVal = document.getElementById('capitalVal');
    const durationVal = document.getElementById('durationVal');
    if (capitalVal) capitalVal.innerText = '$' + capital.toLocaleString();  
    if (durationVal) durationVal.innerText = years + (years === 1 ? ' Year' : ' Years');  
      
    const assumedRate = 0.10;  
    const projectedYield = Math.round(capital * Math.pow((1 + assumedRate), years));  
      
    const matureValuationDisplay = document.getElementById('matureValuationDisplay');
    if (matureValuationDisplay) matureValuationDisplay.innerText = '$' + projectedYield.toLocaleString();  

    drawGrowthChart(capital, assumedRate, years);
}

function drawGrowthChart(principal, rate, periods) {
    const chartCanvas = document.getElementById('growthChart');
    if (!chartCanvas) return;
    const gctx = chartCanvas.getContext('2d');
    if (!gctx) return;

    chartCanvas.width = chartCanvas.clientWidth || 300;  
    chartCanvas.height = 150;  
      
    const w = chartCanvas.width;  
    const h = chartCanvas.height;  
    gctx.clearRect(0, 0, w, h);  
      
    let points = [];  
    for (let i = 0; i <= periods; i++) {  
        points.push(principal * Math.pow((1 + rate), i));  
    }  
      
    const maxVal = points[points.length - 1];  
      
    gctx.beginPath();  
    gctx.strokeStyle = '#00f2fe';  
    gctx.lineWidth = 3;  
      
    for (let i = 0; i < points.length; i++) {  
        const xPos = (i / periods) * (w - 40) + 20;  
        const yPos = h - ((points[i] / maxVal) * (h - 30) + 10);  
        if (i === 0) gctx.moveTo(xPos, yPos);  
        else gctx.lineTo(xPos, yPos);  
          
        gctx.fillStyle = '#ffffff';  
        gctx.fillRect(xPos - 2, yPos - 2, 4, 4);  
    }  
    gctx.stroke();
}

/* --- Currency Matrix Conversion Engine --- */
function convertEquityMatrix() {
    const currencySelector = document.getElementById('currencySelector');
    if (!currencySelector) return;

    const currency = currencySelector.value;
    const rate = (currency === "SLL") ? 22.5 : 1;  
    const symbol = (currency === "SLL") ? "Le " : "$";  

    const data = {  
        aInit: 1.00 * rate,  
        aCurr: 1.45 * rate,  
        bInit: 2.50 * rate,  
        bCurr: 3.10 * rate,  
        dashCap: 154200.00 * rate,  
        dashYld: 12480.00 * rate  
    };  

    const setInnerText = (id, val) => {
        const el = document.getElementById(id);
        if (el) el.innerText = val;
    };

    setInnerText('seriesAInit', symbol + data.aInit.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2}));  
    setInnerText('seriesACurr', symbol + data.aCurr.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2}));  
    setInnerText('seriesBInit', symbol + data.bInit.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2}));  
    setInnerText('seriesBCurr', symbol + data.bCurr.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2}));  

    setInnerText('dashCapital', symbol + data.dashCap.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2}));  
    setInnerText('dashYield', (currency === "SLL" ? "+Le " : "+$") + data.dashYld.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2}));
}

/* --- Live Simulated System Activity Logs --- */
const logs = [
    "[LEDGER SUCCESS] Loan parameters validated successfully.",
    "[SECURE] 256-Bit transaction pipelines operating nominally.",
    "[INFO] Star map graphics synchronized with parallax layers.",
    "[METRIC] Cohort trade scorecards updated on current frame."
];

function appendLiveLogs() {
    const logBox = document.getElementById("systemLog");
    if (!logBox) return;
    const randomLog = logs[Math.floor(Math.random() * logs.length)];
    logBox.innerHTML = `[SYSTEM INFO] ${new Date().toLocaleTimeString()} - ${randomLog}<br>` + logBox.innerHTML;
}
setInterval(appendLiveLogs, 7000);

/* --- Real AI Agent Frontend Integration --- */
async function sendMessage() {
    const input = document.getElementById("userInput");
    const chat = document.getElementById("ai-chat");
    if (!input || !chat) return;

    const message = input.value.trim();
    if (!message) return;

    chat.innerHTML += `<div class="user">${escapeHTML(message)}</div>`;
    input.value = "";
    chat.scrollTop = chat.scrollHeight;

    try {
        const response = await fetch("/api/chat", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ message })
        });

        const data = await response.json();

        if (response.ok) {
            chat.innerHTML += `<div class="bot">${escapeHTML(data.reply)}</div>`;
        } else {
            chat.innerHTML += `<div class="bot error">System Error: ${escapeHTML(data.error || "Failed to fetch response.")}</div>`;
        }
    } catch (err) {
        chat.innerHTML += `<div class="bot error">Network connection error with LizKEMI backend agent.</div>`;
    }

    chat.scrollTop = chat.scrollHeight;
}

function escapeHTML(str) {
    return str.replace(/[&<>'"]/g, 
        tag => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[tag] || tag)
    );
}

/* --- Advanced Welcome Modal Control Functions --- */
function showAdvancedWelcome() {
    const modal = document.getElementById('welcome-modal');
    if (modal) {
        modal.classList.add('active');
    }
}

function closeWelcomeModal() {
    const modal = document.getElementById('welcome-modal');
    if (modal) {
        modal.classList.remove('active');
    }
}

// Window Loading Routines
window.addEventListener('DOMContentLoaded', () => {
    runCalculationEngine();
    runInvestmentEngine();
    convertEquityMatrix();
    showAdvancedWelcome();

    const userInputElem = document.getElementById("userInput");
    if (userInputElem) {
        userInputElem.addEventListener("keydown", (e) => {  
            if (e.key === "Enter") {  
                sendMessage();  
            }  
        });
    }
});

/* --- Stellar Cosmic Particle Constellation Rendering System --- */
const canvas = document.getElementById('canvas');
const ctx = canvas ? canvas.getContext('2d') : null;
let width, height, particles = [];

function setSize() {
    if (!canvas) return;
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;
    initParticles();
}

class Particle {
    constructor(targetX, targetY) {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.targetX = targetX;
        this.targetY = targetY;
        this.size = Math.random() * 2 + 1;
        this.speed = Math.random() * 0.05 + 0.02;
        this.alpha = 0;
        this.glow = Math.random() * Math.PI * 2;
    }

    update() {
        this.x += (this.targetX - this.x) * this.speed;
        this.y += (this.targetY - this.y) * this.speed;
        if (this.alpha < 1) this.alpha += 0.01;
        this.glow += 0.05;
    }

    draw() {
        if (!ctx) return;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,255,${this.alpha})`;
        ctx.fill();
    }
}

function initParticles() {
    if (!ctx) return;
    ctx.clearRect(0, 0, width, height);
    ctx.font = "bold 70px Arial";
    ctx.fillStyle = "white";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";

    if (width < 768) { ctx.font = "bold 32px Arial"; }  
      
    ctx.fillText("Liz KEMI Capital FIRM", width / 2, height / 2);  

    const imageData = ctx.getImageData(0, 0, width, height);  
    const data = imageData.data;  
    particles = [];  

    for (let y = 0; y < height; y += 5) {  
        for (let x = 0; x < width; x += 5) {  
            const index = (y * width + x) * 4;  
            if (data[index + 3] > 128) {  
                particles.push(new Particle(x, y));  
            }  
        }  
    }
}

window.addEventListener('resize', setSize);
if (canvas) {
    setSize();
}

function animate() {
    if (!ctx) return;
    ctx.fillStyle = "rgba(5, 5, 21, 0.15)";
    ctx.fillRect(0, 0, width, height);
    particles.forEach(p => {
        p.update();
        p.draw();
    });
    requestAnimationFrame(animate);
}
animate();

/* --- Face-API Model Loader & Video Camera Initialization --- */
Promise.all([
  faceapi.nets.tinyFaceDetector.loadFromUri('https://cdn.jsdelivr.net/gh/justadudewhohacks/face-api.js@master/weights'),
  faceapi.nets.faceLandmark68Net.loadFromUri('https://cdn.jsdelivr.net/gh/justadudewhohacks/face-api.js@master/weights')
]).then(startVideo);

function startVideo() {
  const video = document.getElementById('video');
  if (!video) return;
  navigator.mediaDevices.getUserMedia({ video: {} })
    .then(stream => { video.srcObject = stream; })
    .catch(err => console.error('Camera access error:', err));
}
