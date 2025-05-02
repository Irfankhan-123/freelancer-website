function openModal(project) {
  const modal = document.getElementById('modal');
  const title = document.getElementById('modal-title');
  const desc = document.getElementById('modal-description');
  const link = document.getElementById('modal-link');

  const projects = {
    vanilla: {
      name: "Vanilla Movie",
      description: "A movie browsing app with infinite scroll and carousels – made using HTML, CSS & JavaScript.",
      repo: "vanilla_movie"
    },
    netflix: {
      name: "Netflix Clone",
      description: "A clone of Netflix built using HTML, CSS, and JS.",
      repo: "netflix-clone"
    },
    date: {
      name: "Can We Go On A Date",
      description: "A fun and interactive dating invitation app.",
      repo: "can-we-go-on-a-date"
    },
    tic: {
      name: "Tic Tac Toe Game",
      description: "A classic Tic Tac Toe game using JavaScript.",
      repo: "tic-tac-game"
    },
    salon: {
      name: "Salon Website",
      description: "A professional salon/parlor website with modern UI.",
      repo: "salon-website"
    }
  };

  const current = projects[project];
  if (current) {
    title.innerText = current.name;
    desc.innerText = current.description;
    link.href = `https://github.com/Irfankhan-123/${current.repo}`;
    modal.style.display = "flex";
  }
}

function closeModal() {
  document.getElementById('modal').style.display = "none";
}
function toggleMode() {
  document.body.classList.toggle('dark');
  const toggleBtn = document.getElementById('mode-toggle');

  // Update button icon
  if (document.body.classList.contains('dark')) {
    toggleBtn.textContent = '🌤️'; // Light mode
    localStorage.setItem('theme', 'dark');
  } else {
    toggleBtn.textContent = '🌙'; // Dark mode
    localStorage.setItem('theme', 'light');
  }
}
window.onload = function() {
  const savedTheme = localStorage.getItem('theme');
  const toggleBtn = document.getElementById('mode-toggle');

  if (savedTheme === 'dark') {
    document.body.classList.add('dark');
    toggleBtn.textContent = '🌤️';
  } else {
    document.body.classList.remove('dark');
    toggleBtn.textContent = '🌙';
  }
}
let currentUtterance = null;

function speakAboutMe() {
  if (speechSynthesis.speaking) {
    speechSynthesis.cancel(); // stop previous speech before starting
  }

  const text = "Hi! I'm Irfan Khan, a passionate front-end developer and creative UI UX designer with experience in HTML, CSS, JavaScript, and product development. I enjoy building elegant and functional web experiences!";
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = 'en-US';
  utterance.rate = 1;

  currentUtterance = utterance;
  speechSynthesis.speak(utterance);
}

function stopSpeaking() {
  if (speechSynthesis.speaking || speechSynthesis.paused) {
    speechSynthesis.cancel(); // Stop the current speech
  }
}

