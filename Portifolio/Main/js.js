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




document.addEventListener('DOMContentLoaded', function () {
  const contactForm = document.querySelector('.contact-form');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        contactForm.classList.add('visible');
        observer.unobserve(entry.target); // Opcionalmente, parar de observar após a animação
      }
    });
  }, {
    threshold: 0.1 // A porcentagem do contêiner visível antes da animação começar
  });

  observer.observe(contactForm);
});

document.addEventListener('DOMContentLoaded', function () {
    const textareas = document.querySelectorAll('textarea');
  
    textareas.forEach(textarea => {
      textarea.addEventListener('input', autoResize);
      autoResize.call(textarea); // Ajusta a altura ao carregar a página
    });
  
    function autoResize() {
      this.style.height = 'auto'; // Reseta a altura para calcular o novo valor
      this.style.height = `${this.scrollHeight}px`; // Define a altura baseada no conteúdo
    }
  });



  document.addEventListener('DOMContentLoaded', function () {
    const emailInput = document.getElementById('email');
    const emailValidationIcon = document.querySelector('.email-validation-icon');
    const emailErrorMessage = document.querySelector('.email-error-message');

    // Expressão regular para validar o formato de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    emailInput.addEventListener('input', function () {
        if (emailRegex.test(emailInput.value)) {
            emailInput.classList.remove('invalid');
            emailInput.classList.add('valid');
            emailValidationIcon.classList.remove('invalid');
            emailValidationIcon.classList.add('valid');
            emailValidationIcon.classList.add('fa-check');
            emailValidationIcon.classList.remove('fa-xmark');
            emailErrorMessage.textContent = '';
            emailErrorMessage.style.display = 'none';
        } else {
            emailInput.classList.remove('valid');
            emailInput.classList.add('invalid');
            emailValidationIcon.classList.remove('valid');
            emailValidationIcon.classList.add('invalid');
            emailValidationIcon.classList.add('fa-xmark');
            emailValidationIcon.classList.remove('fa-check');
            emailErrorMessage.textContent = 'Invalid email address';
            emailErrorMessage.style.display = 'block';
        }
    });
});
document.addEventListener('DOMContentLoaded', function () {
    const emailInput = document.getElementById('email');
    const emailValidationIcon = document.querySelector('.email-validation-icon');
    const emailErrorMessage = document.querySelector('.email-error-message');
    
    const messageTextarea = document.getElementById('message');
    const textareaValidationIcon = document.querySelector('.textarea-validation-icon');
    const textareaErrorMessage = document.querySelector('.textarea-error-message');
    const form = document.querySelector('form'); // Referência ao formulário
    const submitButton = form.querySelector('button[type="submit"]'); // Referência ao botão de envio

    // Expressão regular para validar o formato de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    function validateEmail() {
        if (emailRegex.test(emailInput.value)) {
            emailInput.classList.remove('invalid');
            emailInput.classList.add('valid');
            emailValidationIcon.classList.remove('invalid');
            emailValidationIcon.classList.add('valid');
            emailValidationIcon.classList.add('fa-check');
            emailValidationIcon.classList.remove('fa-xmark');
            emailErrorMessage.textContent = '';
            emailErrorMessage.style.display = 'none';
        } else {
            emailInput.classList.remove('valid');
            emailInput.classList.add('invalid');
            emailValidationIcon.classList.remove('valid');
            emailValidationIcon.classList.add('invalid');
            emailValidationIcon.classList.add('fa-xmark');
            emailValidationIcon.classList.remove('fa-check');
            emailErrorMessage.textContent = 'Invalid email address';
            emailErrorMessage.style.display = 'block';
        }
    }

    function validateTextarea() {
        const length = messageTextarea.value.length;
        if (length >= 20 && length <= 1000) {
            messageTextarea.classList.remove('invalid');
            messageTextarea.classList.add('valid');
            textareaValidationIcon.classList.remove('invalid');
            textareaValidationIcon.classList.add('valid');
            textareaValidationIcon.classList.add('fa-check');
            textareaValidationIcon.classList.remove('fa-xmark');
            textareaErrorMessage.textContent = `${length}`;
            textareaErrorMessage.classList.add('valid'); // Adiciona a classe 'valid' para mensagem verde
            textareaErrorMessage.style.display = 'block'; // Garante que a mensagem esteja visível
        } else {
            messageTextarea.classList.remove('valid');
            messageTextarea.classList.add('invalid');
            textareaValidationIcon.classList.remove('valid');
            textareaValidationIcon.classList.add('invalid');
            textareaValidationIcon.classList.add('fa-xmark');
            textareaValidationIcon.classList.remove('fa-check');
            textareaErrorMessage.textContent = `${length}`;
            textareaErrorMessage.classList.remove('valid'); // Remove a classe 'valid' para mensagem vermelha
            textareaErrorMessage.style.display = 'block'; // Garante que a mensagem esteja visível
        }
    }

    function validateForm() {
        const emailValid = emailRegex.test(emailInput.value);
        const textareaValid = messageTextarea.value.length >= 20 && messageTextarea.value.length <= 1000;
        
        // Habilita ou desabilita o botão de envio
        if (emailValid && textareaValid) {
            submitButton.disabled = false;
            submitButton.classList.remove('disabled');
        } else {
            submitButton.disabled = true;
            submitButton.classList.add('disabled');
        }
    }

    emailInput.addEventListener('input', function () {
        validateEmail();
        validateForm(); // Atualiza a validação do formulário
    });

    messageTextarea.addEventListener('input', function () {
        validateTextarea();
        validateForm(); // Atualiza a validação do formulário
    });

    // Validar o formulário antes do envio
    form.addEventListener('submit', function (event) {
        if (submitButton.disabled) {
            event.preventDefault();
            textareaErrorMessage.textContent = `Your message length must be 20 characters or higher`;
            // Impede o envio do formulário se o botão estiver desativado
            // Mensagens de erro se o botão estiver desativado
            if (!emailRegex.test(emailInput.value)) {
                emailErrorMessage.textContent = 'Invalid email address';
                emailErrorMessage.style.display = 'block';
            }
            if (messageTextarea.value.length < 20) {
                textareaErrorMessage.textContent = 'Message must be at least 20 characters long.';
                textareaErrorMessage.classList.remove('valid'); // Remove a classe 'valid' para mensagem vermelha
                textareaErrorMessage.style.display = 'block'; // Garante que a mensagem esteja visível
            }
        }
    });
});
