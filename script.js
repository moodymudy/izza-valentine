// ===== Element References =====
const questionScreen = document.getElementById('questionScreen');
const loveMeterScreen = document.getElementById('loveMeterScreen');
const finalScreen = document.getElementById('finalScreen');

const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const slider = document.getElementById('slider');
const sliderFill = document.getElementById('sliderFill');
const valueNumber = document.getElementById('valueNumber');
const heartsContainer = document.getElementById('heartsContainer');
const tearRainContainer = document.getElementById('tearRain');
const emojiRainContainer = document.getElementById('emojiRain');

// ===== State Variables =====
let noBtnClicks = 0;
let emojiRainActive = false;
let emojiInterval = null;
let finalScreenTimer = null;
let emojiStartTime = null;

// ===== Photo Configuration =====
// ADD YOUR PHOTOS HERE! Upload photos to same folder as index.html
const photos = [
  'photo1.jpeg',
  'photo2.jpeg', 
  'photo3.jpeg',
  'photo5.jpeg',
  'photo6.jpeg',
  'photo7.jpeg',
  'photo8.jpeg',
  'photo9.jpeg',
  'photo10.jpeg',
  'photo4.jpeg',
  // Add more photo filenames as needed
];

// ===== NO Button Behavior (makes webpage cry with tears) =====
function moveNoButton() {
  noBtnClicks++;
  
  // Start tear rain effect
  startTearRain();
  
  // Get container dimensions
  const container = document.querySelector('.container');
  const containerRect = container.getBoundingClientRect();
  const btnRect = noBtn.getBoundingClientRect();
  
  // Calculate random position within container
  const maxX = containerRect.width - btnRect.width - 100;
  const maxY = 200;
  
  const randomX = Math.random() * maxX + 50;
  const randomY = 100 + Math.random() * maxY;
  
  // Add rotation for more dynamic movement
  const randomRotation = (Math.random() - 0.5) * 15;
  
  noBtn.style.left = `${randomX}px`;
  noBtn.style.top = `${randomY}px`;
  noBtn.style.transform = `rotate(${randomRotation}deg)`;
  
  // Change button text to show sadness
  const sadMessages = [
    'No 💔',
    'Please... 🥺',
    'Don\'t say that 😢',
    'I\'m crying 😭',
    'My heart is breaking 💔',
    'Give me a chance 🙏'
  ];
  
  const messageIndex = Math.min(noBtnClicks - 1, sadMessages.length - 1);
  noBtn.querySelector('.btn-text').textContent = sadMessages[messageIndex];
}

// Event listeners for NO button
noBtn.addEventListener('mouseenter', moveNoButton);
noBtn.addEventListener('touchstart', (e) => {
  e.preventDefault();
  moveNoButton();
});
noBtn.addEventListener('click', (e) => {
  e.preventDefault();
  moveNoButton();
});

// ===== Tear Rain Effect =====
function startTearRain() {
  tearRainContainer.classList.add('active');
  
  // Create multiple tears
  for (let i = 0; i < 5; i++) {
    setTimeout(() => {
      createTear();
    }, i * 100);
  }
  
  // Stop after a short time
  setTimeout(() => {
    tearRainContainer.classList.remove('active');
  }, 3000);
}

function createTear() {
  const tear = document.createElement('div');
  tear.className = 'tear';
  tear.textContent = '💧';
  
  // Random horizontal position
  tear.style.left = Math.random() * 100 + '%';
  
  // Random animation duration
  const duration = 2 + Math.random() * 2;
  tear.style.animationDuration = `${duration}s`;
  
  tearRainContainer.appendChild(tear);
  
  // Remove tear after animation
  setTimeout(() => {
    tear.remove();
  }, duration * 1000);
}

// ===== YES Button Behavior =====
yesBtn.addEventListener('click', () => {
  // Stop tear rain if active
  tearRainContainer.classList.remove('active');
  
  // Transition to love meter screen
  questionScreen.classList.remove('active');
  setTimeout(() => {
    loveMeterScreen.classList.add('active');
    updateHearts(1); // Initialize with 1 heart
  }, 400);
});

// ===== Slider Behavior =====
slider.addEventListener('input', (e) => {
  const value = parseInt(e.target.value);
  
  // Update slider fill with smooth animation
  const percentage = ((value - 1) / 9) * 100;
  sliderFill.style.width = `${percentage}%`;
  
  // Update value number
  valueNumber.textContent = value;
  
  // Update hearts display
  updateHearts(value);
  
  // Start happy emoji rain when value reaches 7+
  if (value >= 7 && !emojiRainActive) {
    emojiRainActive = true;
    emojiStartTime = Date.now();
    startHappyEmojiRain();
    
    // Start 30 second timer for final screen
    finalScreenTimer = setTimeout(() => {
      showFinalScreen();
    }, 30000); // 30 seconds
    
  } else if (value < 7 && emojiRainActive) {
    emojiRainActive = false;
    stopHappyEmojiRain();
    
    // Cancel timer if she goes back below 7
    if (finalScreenTimer) {
      clearTimeout(finalScreenTimer);
      finalScreenTimer = null;
    }
  }
});

// ===== Show Final Screen =====
function showFinalScreen() {
  loveMeterScreen.classList.remove('active');
  setTimeout(() => {
    finalScreen.classList.add('active');
  }, 400);
}

// ===== Update Hearts Display =====
function updateHearts(count) {
  heartsContainer.innerHTML = '';
  
  for (let i = 0; i < count; i++) {
    const heart = document.createElement('span');
    heart.className = 'heart';
    heart.textContent = '💖';
    heart.style.animationDelay = `${i * 0.06}s`;
    heartsContainer.appendChild(heart);
  }
}

// ===== Happy Emoji Rain (starts at 7+) =====
const happyEmojis = ['😊', '😍', '🥰', '😘', '💕', '💖', '💗', '🌟', '✨', '🎉'];

function startHappyEmojiRain() {
  // Create emojis continuously
  createHappyEmoji();
  
  emojiInterval = setInterval(() => {
    createHappyEmoji();
  }, 1200); // Create a new emoji every 1.2 seconds (slower)
}

function stopHappyEmojiRain() {
  if (emojiInterval) {
    clearInterval(emojiInterval);
    emojiInterval = null;
  }
  // Clear existing emojis
  emojiRainContainer.innerHTML = '';
}

function createHappyEmoji() {
  const emojiWrapper = document.createElement('div');
  emojiWrapper.className = 'happy-emoji';
  
  const emoji = document.createElement('span');
  emoji.className = 'emoji-icon';
  emoji.textContent = happyEmojis[Math.floor(Math.random() * happyEmojis.length)];
  emojiWrapper.appendChild(emoji);
  
  // Randomly add "click me" hint (30% chance)
  if (Math.random() < 0.3) {
    const hint = document.createElement('span');
    hint.className = 'emoji-hint';
    hint.textContent = 'Click me!';
    emojiWrapper.appendChild(hint);
  }
  
  // Random horizontal position
  emojiWrapper.style.left = Math.random() * 100 + '%';
  
  // Random animation duration (slower fall - 6 to 10 seconds)
  const duration = 6 + Math.random() * 4;
  emojiWrapper.style.animationDuration = `${duration}s`;
  
  // Select a random photo for this emoji
  const photoSrc = photos[Math.floor(Math.random() * photos.length)];
  
  // Click to burst photo
  emojiWrapper.addEventListener('click', () => {
    burstPhoto(emojiWrapper, photoSrc);
  });
  
  emojiRainContainer.appendChild(emojiWrapper);
  
  // Remove emoji after animation completes
  setTimeout(() => {
    if (emojiWrapper.parentNode) {
      emojiWrapper.remove();
    }
  }, duration * 1000);
}

// ===== Photo Burst Effect =====
function burstPhoto(emoji, photoSrc) {
  // Remove the emoji with a pop effect
  emoji.style.transition = 'all 0.3s ease';
  emoji.style.transform = 'scale(0)';
  emoji.style.opacity = '0';
  
  setTimeout(() => {
    emoji.remove();
  }, 300);
  
  // Create photo burst container
  const burstContainer = document.createElement('div');
  burstContainer.className = 'photo-burst';
  document.body.appendChild(burstContainer);
  
  // Create multiple photo copies that burst out
  const numberOfPhotos = 6;
  for (let i = 0; i < numberOfPhotos; i++) {
    const photo = document.createElement('img');
    photo.src = photoSrc;
    photo.alt = 'Memory';
    
    // Calculate burst direction (radial)
    const angle = (360 / numberOfPhotos) * i;
    const distance = 150 + Math.random() * 100;
    const tx = Math.cos(angle * Math.PI / 180) * distance + 'px';
    const rotate = Math.random() * 720 - 360 + 'deg';
    
    photo.style.setProperty('--tx', tx);
    photo.style.setProperty('--rotate', rotate);
    photo.style.animationDelay = `${i * 0.05}s`;
    
    burstContainer.appendChild(photo);
  }
  
  // Remove burst container after animation
  setTimeout(() => {
    burstContainer.remove();
  }, 5500); // Increased from 2500ms to 5500ms to match 5s animation
}

// ===== Initialize =====
// Set initial slider fill to 0
sliderFill.style.width = '0%';

// Add smooth entrance animation
window.addEventListener('load', () => {
  document.querySelector('.container').style.animation = 'fadeInUp 1s ease-out';
});

// Prevent context menu on buttons (for mobile)
document.querySelectorAll('.btn').forEach(btn => {
  btn.addEventListener('contextmenu', (e) => e.preventDefault());
});