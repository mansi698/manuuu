function startCelebration() {
  document.getElementById("birthdaySong").play();
  const container = document.getElementById("celebration");
  for (let i = 0; i < 30; i++) {
    const balloon = document.createElement("div");
    balloon.className = "balloon";
    balloon.innerText = "❣️";
    balloon.style.left = Math.random() * 100 + "%";
    balloon.style.animationDuration = 3 + Math.random() * 2 + "s";
    container.appendChild(balloon);
    setTimeout(() => container.removeChild(balloon), 5000);
  }
}

const style = document.createElement('style');
style.innerHTML = `
  #celebration {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    overflow: hidden;
  }
  .balloon {
    position: absolute;
    font-size: 2rem;
    animation: floatUp linear infinite;
    bottom: 0;
  }
  @keyframes floatUp {
    to {
      transform: translateY(-100vh);
      opacity: 0;
    }
  }
`;
document.head.appendChild(style);