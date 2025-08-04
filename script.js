// Create floating particles
function createParticles() {
    const container = document.querySelector('.particle-container');
    const particleCount = 25; // Reduced from 50
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.style.position = 'absolute';
        particle.style.width = '2px';
        particle.style.height = '2px';
        particle.style.background = 'rgba(139, 92, 246, 0.5)';
        particle.style.borderRadius = '50%';
        particle.style.pointerEvents = 'none';
        
        const x = Math.random() * window.innerWidth;
        const y = Math.random() * window.innerHeight;
        const duration = 10 + Math.random() * 20;
        
        particle.style.left = x + 'px';
        particle.style.top = y + 'px';
        
        particle.style.animation = `float ${duration}s linear infinite`;
        
        container.appendChild(particle);
    }
}

// Animate numbers on scroll
function animateNumbers() {
    const numbers = document.querySelectorAll('.metric-number');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = entry.target;
                const finalValue = parseFloat(target.getAttribute('data-target'));
                const duration = 2000;
                const startTime = Date.now();
                
                function updateNumber() {
                    const elapsed = Date.now() - startTime;
                    const progress = Math.min(elapsed / duration, 1);
                    
                    const currentValue = progress * finalValue;
                    target.textContent = finalValue < 1 ? currentValue.toFixed(1) : Math.floor(currentValue);
                    
                    if (progress < 1) {
                        requestAnimationFrame(updateNumber);
                    }
                }
                
                updateNumber();
                observer.unobserve(target);
            }
        });
    });
    
    numbers.forEach(number => observer.observe(number));
}

// Smooth scroll to download
function scrollToDownload() {
    document.getElementById('download').scrollIntoView({ behavior: 'smooth' });
}

// Show demo (placeholder)
function showDemo() {
    document.getElementById('demo').scrollIntoView({ behavior: 'smooth' });
    setTimeout(startDemo, 500);
}

// Demo injection simulation
function startDemo() {
    const statusLight = document.getElementById('status-light');
    const statusText = document.getElementById('injector-status');
    const progressBar = document.querySelector('.progress-bar');
    const injectLog = document.getElementById('inject-log');
    
    // Reset state
    statusLight.classList.remove('active');
    statusText.textContent = 'Waiting...';
    progressBar.style.width = '0%';
    
    // Step 1: Initializing
    setTimeout(() => {
        statusText.textContent = 'Initializing...';
        injectLog.textContent = '[00:00:04] Initializing bypass modules...';
        progressBar.style.width = '20%';
    }, 500);
    
    // Step 2: Finding Roblox
    setTimeout(() => {
        statusText.textContent = 'Finding Roblox...';
        injectLog.textContent = '[00:00:05] Scanning for Roblox process...';
        progressBar.style.width = '40%';
    }, 1500);
    
    // Step 3: Waiting for injection
    setTimeout(() => {
        statusText.textContent = 'Preparing...';
        injectLog.textContent = '[00:00:06] Waiting for stable state...';
        statusLight.style.background = '#fbbf24';
        progressBar.style.width = '60%';
    }, 2500);
    
    // Step 4: Injecting
    setTimeout(() => {
        statusText.textContent = 'Injecting...';
        injectLog.textContent = '[00:00:07] Injecting payload...';
        progressBar.style.width = '85%';
    }, 3200);
    
    // Step 5: Success
    setTimeout(() => {
        statusText.textContent = 'Ready';
        statusLight.classList.add('active');
        injectLog.textContent = '[00:00:08] ✓ Injection complete (187ms)';
        injectLog.classList.add('success');
        progressBar.style.width = '100%';
    }, 4200);
}

// Execute script simulation
function executeScript(index) {
    const scripts = ['Universal Aimbot', 'ESP Framework', 'Fly & Noclip'];
    const logs = document.querySelector('.logs');
    
    const log = document.createElement('div');
    log.className = 'log-entry success';
    log.textContent = `[00:00:${10+index}] ✓ ${scripts[index]} executed successfully`;
    logs.appendChild(log);
    
    logs.scrollTop = logs.scrollHeight;
}

// Execute custom script
function executeCustom() {
    const textarea = document.getElementById('custom-script');
    const script = textarea.value.trim();
    
    if (!script) return;
    
    const logs = document.querySelector('.logs');
    const log = document.createElement('div');
    log.className = 'log-entry success';
    log.textContent = `[00:00:15] ✓ Custom script executed (${Math.floor(Math.random()*1000)} chars)`;
    logs.appendChild(log);
    
    logs.scrollTop = logs.scrollHeight;
    textarea.value = '';
}

// Replay demo
function replayDemo() {
    const logs = document.querySelector('.logs');
    logs.innerHTML = `
        <div class="log-entry">[00:00:01] Shift Executor initialized</div>
        <div class="log-entry">[00:00:02] Checking Roblox process...</div>
        <div class="log-entry">[00:00:02] Roblox found - PID: 12584</div>
        <div class="log-entry" id="inject-log">[00:00:03] Waiting for injection...</div>
    `;
    
    startDemo();
}

// Download executor with realistic behavior
function downloadExecutor() {
    const btn = document.querySelector('.download-btn');
    const originalHTML = btn.innerHTML;
    
    btn.innerHTML = '<span class="btn-text">Checking system...</span>';
    btn.style.pointerEvents = 'none';
    
    // Simulate realistic check
    setTimeout(() => {
        const isWindows = navigator.platform.indexOf('Win') > -1;
        const is64bit = navigator.userAgent.includes('WOW64') || navigator.userAgent.includes('Win64');
        
        if (!isWindows) {
            btn.innerHTML = '<span class="btn-text">Windows Only</span>';
            setTimeout(() => {
                btn.innerHTML = originalHTML;
                btn.style.pointerEvents = 'auto';
            }, 2500);
            return;
        }
        
        if (!is64bit) {
            btn.innerHTML = '<span class="btn-text">64-bit Required</span>';
            setTimeout(() => {
                btn.innerHTML = originalHTML;
                btn.style.pointerEvents = 'auto';
            }, 2500);
            return;
        }
        
        btn.innerHTML = '<span class="btn-text">Starting download...</span>';
        
        setTimeout(() => {
            btn.innerHTML = originalHTML;
            btn.style.pointerEvents = 'auto';
            
            // Create download link
            const link = document.createElement('a');
            link.href = '#'; // Actual download would go here
            link.download = 'Shift-Executor-v2.4.0.zip';
            
            // Simulate realistic download behavior
            const events = [
                { name: 'shift-executor-2.4.0.zip', size: '4.2MB' },
                { name: 'shift-executor-2.4.0.exe', size: '8.7MB' }
            ];
            
            console.log('Download initiated:', events[0]);
        }, 1000);
    }, 800);
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    createParticles();
    animateNumbers();
    
    // Add scroll effect to navbar
    window.addEventListener('scroll', () => {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 100) {
            navbar.style.background = 'rgba(10, 10, 10, 0.95)';
        } else {
            navbar.style.background = 'rgba(10, 10, 10, 0.8)';
        }
    });
});

// CSS for floating particles
const style = document.createElement('style');
style.textContent = `
    @keyframes float {
        0% {
            transform: translateY(0px) translateX(0px);
            opacity: 0;
        }
        10% {
            opacity: 1;
        }
        90% {
            opacity: 1;
        }
        100% {
            transform: translateY(-100vh) translateX(50px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);