// --- Type Definitions & Interfaces ---
type CurrencyType = "USD" | "SLL";

interface EquityMatrixData {
    aInit: number;
    aCurr: number;
    bInit: number;
    bCurr: number;
    dashCap: number;
    dashYld: number;
}

interface CurrencyRateConfig {
    [key: string]: {
        rate: number;
        symbol: string;
    };
}

/* --- State Management --- */
let selectedTrackPipeline: string = "Standard";

/* --- Over-Spreading AI Sidebar Mechanical Controls --- */
function toggleAISidebar(): void {
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
function updatePipeline(element: HTMLElement, trackValue: string): void {
    const parent = element.parentElement;
    if (!parent) return;

    const totalButtons = parent.querySelectorAll<HTMLElement>('.tab-btn');
    totalButtons.forEach(btn => btn.classList.remove('active'));
    element.classList.add('active');
    selectedTrackPipeline = trackValue;

    const allCards = document.querySelectorAll<HTMLElement>('.pipeline-card');  
    allCards.forEach(card => card.style.display = 'none');  

    const targetCard = document.getElementById(`track-${trackValue}`);  
    if (targetCard) {  
        targetCard.style.display = 'block';  
        targetCard.style.animation = 'fadeEffect 0.4s ease-in-out';  
    }
}

/* --- 20% Loan Engine & Live Calendar Target Generation --- */
function runCalculationEngine(): void {
    const selectElem = document.getElementById('loanAmount') as HTMLSelectElement | null;
    if (!selectElem) return;

    const val: number = parseInt(selectElem.value, 10);
    const interest: number = Math.round(val * 0.2);
    const total: number = val + interest;

    const interestDisplay = document.getElementById('interestDisplay');
    const totalDisplay = document.getElementById('totalDisplay');
    if (interestDisplay) interestDisplay.innerText = interest.toLocaleString();  
    if (totalDisplay) totalDisplay.innerText = total.toLocaleString();  
      
    const baseDate: Date = new Date();  
    const targetDate: Date = new Date();  
    targetDate.setDate(baseDate.getDate() + 30);  
      
    const graceLimitDate: Date = new Date();  
    graceLimitDate.setDate(targetDate.getDate() + 3);  
      
    const targetReturnDate = document.getElementById('targetReturnDate');
    const gracePeriodLimit = document.getElementById('gracePeriodLimit');

    if (targetReturnDate) targetReturnDate.innerText = targetDate.toLocaleDateString();  
    if (gracePeriodLimit) gracePeriodLimit.innerText = graceLimitDate.toLocaleDateString();
}

/* --- Document Export Engine --- */
function downloadContractDocument(): void {
    const loanAmountElem = document.getElementById('loanAmount') as HTMLSelectElement | null;
    const interestDisplay = document.getElementById('interestDisplay');
    const totalDisplay = document.getElementById('totalDisplay');

    if (!loanAmountElem || !interestDisplay || !totalDisplay) return;

    const amountText: string = loanAmountElem.value;
    const interestText: string = interestDisplay.innerText;
    const totalText: string = totalDisplay.innerText;

    const plainText: string = `LIZKEMI CAPITAL LTD - STRATEGIC AGREEMENT\n` +  
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
function runInvestmentEngine(): void {
    const capitalInput = document.getElementById('investmentCapital') as HTMLInputElement | null;
    const durationInput = document.getElementById('investmentDuration') as HTMLInputElement | null;
    if (!capitalInput || !durationInput) return;

    const capital: number = parseInt(capitalInput.value, 10);  
    const years: number = parseInt(durationInput.value, 10);  
      
    const capitalVal = document.getElementById('capitalVal');
    const durationVal = document.getElementById('durationVal');
    if (capitalVal) capitalVal.innerText = '$' + capital.toLocaleString();  
    if (durationVal) durationVal.innerText = years + (years === 1 ? ' Year' : ' Years');  
      
    const assumedRate: number = 0.10;  
    const projectedYield: number = Math.round(capital * Math.pow((1 + assumedRate), years));  
      
    const matureValuationDisplay = document.getElementById('matureValuationDisplay');
    if (matureValuationDisplay) matureValuationDisplay.innerText = '$' + projectedYield.toLocaleString();  

    drawGrowthChart(capital, assumedRate, years);
}

function drawGrowthChart(principal: number, rate: number, periods: number): void {
    const chartCanvas = document.getElementById('growthChart') as HTMLCanvasElement | null;
    if (!chartCanvas) return;
    const gctx = chartCanvas.getContext('2d');
    if (!gctx) return;

    chartCanvas.width = chartCanvas.clientWidth;  
    chartCanvas.height = 150;  
      
    const w: number = chartCanvas.width;  
    const h: number = chartCanvas.height;  
    gctx.clearRect(0, 0, w, h);  
      
    let points: number[] = [];  
    for (let i = 0; i <= periods; i++) {  
        points.push(principal * Math.pow((1 + rate), i));  
    }  
      
    const maxVal: number = points[points.length - 1];  
      
    gctx.beginPath();  
    gctx.strokeStyle = '#00f2fe';  
    gctx.lineWidth = 3;  
      
    for (let i = 0; i < points.length; i++) {  
        const xPos: number = (i / periods) * (w - 40) + 20;  
        const yPos: number = h - ((points[i] / maxVal) * (h - 30) + 10);  
        if (i === 0) gctx.moveTo(xPos, yPos);  
        else gctx.lineTo(xPos, yPos);  
          
        gctx.fillStyle = '#ffffff';  
        gctx.fillRect(xPos - 2, yPos - 2, 4, 4);  
    }  
    gctx.stroke();
}

/* --- Currency Matrix Conversion Engine --- */
function convertEquityMatrix(): void {
    const currencySelector = document.getElementById('currencySelector') as HTMLSelectElement | null;
    if (!currencySelector) return;

    const currency: string = currencySelector.value;
    const rate: number = (currency === "SLL") ? 22.5 : 1;  
    const symbol: string = (currency === "SLL") ? "Le " : "$";  

    const data: EquityMatrixData = {  
        aInit: 1.00 * rate,  
        aCurr: 1.45 * rate,  
        bInit: 2.50 * rate,  
        bCurr: 3.10 * rate,  
        dashCap: 154200.00 * rate,  
        dashYld: 12480.00 * rate  
    };  

    const setInnerText = (id: string, val: string) => {
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
const logs: string[] = [
    "[LEDGER SUCCESS] Loan parameters validated successfully.",
    "[SECURE] 256-Bit transaction pipelines operating nominally.",
    "[INFO] Star map graphics synchronized with parallax layers.",
    "[METRIC] Cohort trade scorecards updated on current frame."
];

function appendLiveLogs(): void {
    const logBox = document.getElementById("systemLog");
    if (!logBox) return;
    const randomLog: string = logs[Math.floor(Math.random() * logs.length)];
    logBox.innerHTML = `[SYSTEM INFO] ${new Date().toLocaleTimeString()} - ${randomLog}<br>` + logBox.innerHTML;
}
setInterval(appendLiveLogs, 7000);

/* --- Real AI Agent Frontend Integration --- */
async function sendMessage(): Promise<void> {
    const input = document.getElementById("userInput") as HTMLInputElement | null;
    const chat = document.getElementById("ai-chat");
    if (!input || !chat) return;

    const message: string = input.value.trim();
    if (!message) return;

    chat.innerHTML += `<div class="user">${escapeHTML(message)}</div>`;
    input.value = "";
    chat.scrollTop = chat.scrollHeight;

    try {
        const response: Response = await fetch("/api/chat", {
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

function escapeHTML(str: string): string {
    return str.replace(/[&<>'"]/g, 
        tag => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[tag] || tag)
    );
}

// Window Loading Routines
window.addEventListener('DOMContentLoaded', () => {
    runCalculationEngine();
    runInvestmentEngine();
    convertEquityMatrix();
    showAdvancedWelcome();

    const userInputElem = document.getElementById("userInput");
    if (userInputElem) {
        userInputElem.addEventListener("keydown", (e: KeyboardEvent) => {  
            if (e.key === "Enter") {  
                sendMessage();  
            }  
        });
    }
});

/* --- Stellar Cosmic Particle Constellation Rendering System --- */
const canvas = document.getElementById('canvas') as HTMLCanvasElement | null;
const ctx = canvas ? canvas.getContext('2d') : null;
let width: number, height: number, particles: Particle[] = [];

function setSize(): void {
    if (!canvas) return;
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;
    initParticles();
}

class Particle {
    x: number;
    y: number;
    targetX: number;
    targetY: number;
    size: number;
    speed: number;
    alpha: number;
    glow: number;

    constructor(targetX: number, targetY: number) {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.targetX = targetX;
        this.targetY = targetY;
        this.size = Math.random() * 2 + 1;
        this.speed = Math.random() * 0.05 + 0.02;
        this.alpha = 0;
        this.glow = Math.random() * Math.PI * 2;
    }

    update(): void {
        this.x += (this.targetX - this.x) * this.speed;
        this.y += (this.targetY - this.y) * this.speed;
        if (this.alpha < 1) this.alpha += 0.01;
        this.glow += 0.05;
    }

    draw(): void {
        if (!ctx) return;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,255,${this.alpha})`;
        ctx.fill();
    }
}

function initParticles(): void {
    if (!ctx) return;
    ctx.clearRect(0, 0, width, height);
    ctx.font = "bold 70px Arial";
    ctx.fillStyle = "white";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";

    if (width < 768) { ctx.font = "bold 32px Arial"; }  
      
    ctx.fillText("Liz KEMI Capital FIRM", width / 2, height / 2);  

    const imageData: ImageData = ctx.getImageData(0, 0, width, height);  
    const data: Uint8ClampedArray = imageData.data;  
    particles = [];  

    for (let y = 0; y < height; y += 5) {  
        for (let x = 0; x < width; x += 5) {  
            const index: number = (y * width + x) * 4;  
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

function animate(): void {
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

/* --- Advanced Welcome Modal Control Functions --- */
function showAdvancedWelcome(): void {
    const modal = document.getElementById('welcome-modal');
    if (modal) {
        modal.classList.add('active');
    }
}

function closeWelcomeModal(): void {
    const modal = document.getElementById('welcome-modal');
    if (modal) {
        modal.classList.remove('active');
    }
}
