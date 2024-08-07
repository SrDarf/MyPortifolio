// Carrega navbar la no index.html
function loadNavbar() {
    fetch('nav.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('navbar').innerHTML = data;
        })
        .catch(error => console.error('Erro ao carregar o menu:', error));
}

function clicar() {
    const btn = document.getElementById('barsbtn');
    btn.click();
}


document.addEventListener('DOMContentLoaded', loadNavbar);

// Switch de cores do github pra ficar 0 bala 

let git = document.getElementById('githubicon')


function switchgit() {
    const git = document.getElementById('githubicon');

    git.querySelector('p').style.color = 'black';

    git.querySelector('a').style.color = 'black';
}

function resetgit() {
    const git = document.getElementById('githubicon');
    
  
    git.querySelector('p').style.color = 'white';
    

    git.querySelector('a').style.color = 'white';
}

document.addEventListener('DOMContentLoaded', () => {
    const git = document.getElementById('githubicon');
    git.addEventListener('mouseout', resetgit);
});


//Responsive

function toggleMenu() {
    const navContainer = document.querySelector('.navcontainer');
    navContainer.classList.toggle('active');
    const overlay = document.getElementById('overlay');
    overlay.classList.toggle('active');
    const githubIcon = document.getElementById('githubicon');
    githubIcon.classList.toggle('active');
}


function startRainbowEffect() {
    let rgbText, nodes, hues;
    
    rgbText = document.querySelector(".rainbow");

    rgbText.innerHTML = [].slice
        .call(rgbText.innerHTML)
        .map(c => `<span>${c}</span>`)
        .join("");

    nodes = document.querySelectorAll(".rainbow span");
    hues = [];

    nodes.forEach((c, i) => {
        hues.push(Math.round(i * (360 / nodes.length)));
    });
    
    (function loop() {
        hues.forEach((h, i, _this) => {
            _this[i]--;
            nodes[i].style.color = `hsl(${_this[i]},100%,50%)`;
        });
        window.requestAnimationFrame(loop);
    })();
}

const texts = ['a student','a tech entusiast','Your next Front-End developer'];
const typingSpeed = 50; 
const erasingSpeed = 50; 
const newTextDelay = 1000; 
const textsElement = document.getElementById('texts');

let textIndex = 0;
let charIndex = 0;
let isErasing = false;

function type() {
    if (textIndex < texts.length) {
        const currentText = texts[textIndex];
        if (!isErasing) {
            if (charIndex < currentText.length) {
                textsElement.textContent += currentText.charAt(charIndex);
                charIndex++;
                setTimeout(type, typingSpeed);
            } else {
                if (textIndex === texts.length - 1) {
                 
                    textsElement.classList.add('rainbow');
                    setTimeout(function() {
                        document.getElementById('animation').classList.remove('hidden');
                    }, 1500);
                    
                    const timeoutId = setTimeout(() => {
                        startRainbowEffect();
                    }, 400);
                
                    return;
                }
                isErasing = true;
                setTimeout(type, newTextDelay);
            }
        } else {
            if (charIndex > 0) {
                textsElement.textContent = currentText.substring(0, charIndex - 1);
                charIndex--;
                setTimeout(type, erasingSpeed);
            } else {
                isErasing = false;
                textIndex++;
                setTimeout(type, newTextDelay);
            }
        }
    }
}

type();

document.addEventListener('DOMContentLoaded', () => {
 
    const skillsSection = document.querySelector('#skills .skills');
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                skillsSection.classList.add('visible');
            } else {
                skillsSection.classList.remove('visible');
            }
        });
    }, {
        threshold: 0.15 
    });
    observer.observe(skillsSection);

 
    const projectsSection = document.querySelector('#myprojects .myprojects');
    const projectsObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                projectsSection.classList.add('visible');
            } else {
                projectsSection.classList.remove('visible');
            }
        });
    }, {
        threshold: 0.15 
    });
    projectsObserver.observe(projectsSection);
});


document.addEventListener('DOMContentLoaded', () => {
    const aboutMeSection = document.querySelector('#about-me');
    const aboutMeObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                aboutMeSection.classList.add('visible');
            } else {
                aboutMeSection.classList.remove('visible');
            }
        });
    }, {
        threshold: 0.15 
    });

    aboutMeObserver.observe(aboutMeSection);
});




