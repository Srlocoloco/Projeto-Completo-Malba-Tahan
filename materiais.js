// Função para destacar a seção atual no menu
function destacarSecaoAtual() {
    const secoes = document.querySelectorAll('.content-section');
    const links = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', () => {
        let secaoAtual = '';

        secoes.forEach(secao => {
            const secaoTop = secao.offsetTop;
            const secaoAltura = secao.offsetHeight;
            if (window.scrollY >= (secaoTop - 200)) {
                secaoAtual = secao.getAttribute('id');
            }
        });

        links.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${secaoAtual}`) {
                link.classList.add('active');
            }
        });
    });
}

// Função para copiar código
function adicionarBotaoCopiar() {
    const blocosCodigo = document.querySelectorAll('pre code');
    
    blocosCodigo.forEach(bloco => {
        const botao = document.createElement('button');
        botao.className = 'copiar-codigo';
        botao.innerHTML = '<i class="fas fa-copy"></i>';
        
        botao.addEventListener('click', () => {
            const codigo = bloco.textContent;
            navigator.clipboard.writeText(codigo).then(() => {
                botao.innerHTML = '<i class="fas fa-check"></i>';
                setTimeout(() => {
                    botao.innerHTML = '<i class="fas fa-copy"></i>';
                }, 2000);
            });
        });
        
        bloco.parentNode.style.position = 'relative';
        bloco.parentNode.appendChild(botao);
    });
}

// Função para animar cards ao rolar
function animarCards() {
    const cards = document.querySelectorAll('.content-card');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    cards.forEach(card => {
        observer.observe(card);
    });
}

// Função para adicionar tema escuro
function adicionarTemaEscuro() {
    const botaoTema = document.createElement('button');
    botaoTema.className = 'tema-botao';
    botaoTema.innerHTML = '<i class="fas fa-moon"></i>';
    
    document.querySelector('.header-content').appendChild(botaoTema);
    
    botaoTema.addEventListener('click', () => {
        document.body.classList.toggle('tema-escuro');
        const icone = botaoTema.querySelector('i');
        icone.classList.toggle('fa-moon');
        icone.classList.toggle('fa-sun');
    });
}

// Configuração do Intersection Observer para animações
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observar todos os cards de conteúdo
document.querySelectorAll('.content-card').forEach(card => {
    observer.observe(card);
});

// Efeito de parallax no background
document.addEventListener('mousemove', (e) => {
    const moveX = (e.clientX - window.innerWidth / 2) * 0.01;
    const moveY = (e.clientY - window.innerHeight / 2) * 0.01;

    document.querySelector('.animated-background').style.transform = 
        `translate(${moveX}px, ${moveY}px)`;
});

// Efeito 3D nos cards
document.querySelectorAll('.content-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = (y - centerY) / 10;
        const rotateY = (centerX - x) / 10;

        card.style.transform = `
            perspective(1000px)
            rotateX(${rotateX}deg)
            rotateY(${rotateY}deg)
            translateZ(10px)
        `;
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = 'none';
    });
});

// Botão "Voltar ao Topo"
const backToTop = document.querySelector('.back-to-top');

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTop.classList.add('visible');
    } else {
        backToTop.classList.remove('visible');
    }
});

backToTop.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Efeito de digitação no título
const title = document.querySelector('h1');
if (title) {
    const text = title.textContent;
    title.textContent = '';
    let i = 0;

    function typeWriter() {
        if (i < text.length) {
            title.textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, 100);
        }
    }

    typeWriter();
}

// Criar partículas de fundo
function createParticles() {
    const container = document.querySelector('.space-particles');
    const particleCount = 30;

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        // Posição aleatória
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `${Math.random() * 100}%`;
        
        // Tamanho aleatório
        const size = Math.random() * 3 + 1;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        
        // Velocidade aleatória
        particle.style.animationDuration = `${Math.random() * 20 + 10}s`;
        particle.style.animationDelay = `${Math.random() * 5}s`;
        
        container.appendChild(particle);
    }
}

// Criar linhas tecnológicas
function createTechLines() {
    const container = document.querySelector('.tech-grid');
    const lineCount = 20;

    for (let i = 0; i < lineCount; i++) {
        const line = document.createElement('div');
        line.className = 'tech-line';
        
        // Posição aleatória
        line.style.left = `${Math.random() * 100}%`;
        line.style.top = `${Math.random() * 100}%`;
        
        // Comprimento aleatório
        const length = Math.random() * 100 + 50;
        line.style.width = `${length}px`;
        
        // Rotação aleatória
        line.style.transform = `rotate(${Math.random() * 360}deg)`;
        
        // Velocidade aleatória
        line.style.animationDuration = `${Math.random() * 15 + 5}s`;
        line.style.animationDelay = `${Math.random() * 3}s`;
        
        container.appendChild(line);
    }
}

// Inicializar efeitos
document.addEventListener('DOMContentLoaded', () => {
    destacarSecaoAtual();
    adicionarBotaoCopiar();
    animarCards();
    adicionarTemaEscuro();
    createParticles();
    createTechLines();
});

// Pausar animações quando a página não está visível
document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        document.querySelectorAll('.particle, .tech-line').forEach(element => {
            element.style.animationPlayState = 'paused';
        });
    } else {
        document.querySelectorAll('.particle, .tech-line').forEach(element => {
            element.style.animationPlayState = 'running';
        });
    }
}); 