// Animation sections
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("active");
      navLinks.forEach(link => link.classList.remove("active"));
      const id = entry.target.getAttribute("id");
      document.getElementById(`link-${id}`)?.classList.add("active");
      if (id === 'home') startTypingAnimation();
    } else {
      entry.target.classList.remove("active");
    }
  });
}, { threshold: 0.5 });

sections.forEach(section => observer.observe(section));

// Animation écriture
const typingElement = document.getElementById('typing-text');
const textParts = [
    {text: "\n",className: "php" },
   
      {text: " < ? Bienvenue !  \n",className: "highlight" },
          {text: "echo  ",className: "print"  }, 
           {text: "''" ,className: "kolaka"  }, 
      { text: "Je m'appelle",className: "print2"  },
         { text: "",className: "kolaka"  },
      { text: " $RANDRIANOMENA Tsioriniaina Lucka ", className: "print3" },
      { text: "Je suis etudiant en",className:"print2" },
      { text: "  $Genie Informatique", className: "print3" },
      { text: " passionné  par la ",className:"print2" },
      { text: "$programmation et le développement d’applications web, mobiles et logicielles.", className: "print3" },
       {text: "'' \n " ,className: "kolaka"  }, 
        {text: " ?>",className: "highlight" },
];

let partIndex = 0, charIndex = 0, typingTimeout;

function startTypingAnimation() {
  clearTimeout(typingTimeout);
  partIndex = 0;
  charIndex = 0;
  typingElement.innerHTML = '';
  typingElement.style.borderRight = '2px solid #2196f3';
  typeNextChar();
}

function typeNextChar() {
  if (partIndex >= textParts.length) {
    typingElement.style.borderRight = 'none';
    return;
  }
  const part = textParts[partIndex];
  const currentChar = part.text.charAt(charIndex);

  if (currentChar === '\n') {
    typingElement.innerHTML += '<br>';
  } else {
    if (charIndex === 0 && part.className) {
      const span = document.createElement('span');
      span.className = part.className;
      span.textContent = currentChar;
      typingElement.appendChild(span);
    } else if (part.className) {
      const spans = typingElement.querySelectorAll('span');
      spans[spans.length - 1].textContent += currentChar;
    } else {
      typingElement.innerHTML += currentChar;
    }
  }
  charIndex++;
  if (charIndex >= part.text.length) {
    partIndex++;
    charIndex = 0;
  }
  typingTimeout = setTimeout(typeNextChar, 50);
}

// Changer image au survol
const img = document.getElementById('profile-pic');
const originalSrc = 'sary 2.png';
const hoverSrc = 'lucka.jpg';
img.addEventListener('mouseenter', () => img.src = hoverSrc);
img.addEventListener('mouseleave', () => img.src = originalSrc);

// Mode clair / sombre
document.getElementById("change-bg").addEventListener("click", () => {
  document.body.classList.toggle("light-mode");
});

// Lancer animation au chargement
window.addEventListener('DOMContentLoaded', startTypingAnimation);
