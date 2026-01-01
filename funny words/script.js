const messages = [
    "🤣 Hahaha, you clicked me!",
    "😂 Keep clicking!",
    "😜 Gotcha!",
    "🙃 Silly button!",
    "🤣 Stop, I'm ticklish!",
    "😂 Can't stop laughing!",
    "😎 You're awesome!"
];

const btn = document.getElementById('funnyBtn');

btn.addEventListener('click', () => {
    // Create 3 random messages per click
    for (let i = 0; i < 3; i++) {
        const msg = document.createElement('div');
        msg.className = 'funny-message';
        msg.textContent = messages[Math.floor(Math.random() * messages.length)];

        // Random position and size
        msg.style.left = Math.random() * window.innerWidth + 'px';
        msg.style.top = Math.random() * window.innerHeight + 'px';
        msg.style.fontSize = 20 + Math.random() * 30 + "px";
        msg.style.color = `hsl(${Math.random()*360}, 70%, 60%)`;

        document.body.appendChild(msg);

        // Remove message after animation
        setTimeout(() => {
            msg.remove();
        }, 2500);
    }
});
