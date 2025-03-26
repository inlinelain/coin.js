class Coin {
  constructor(container, frontImage, backImage) {
    this.container = document.querySelector(container);
    this.frontImage = frontImage;
    this.backImage = backImage;
    this.rotation = 0;
    this.speed = 1;
    this.createCoin();
  }

  createCoin() {
    this.coin = document.createElement("div");
    this.coin.classList.add("coin");
    this.coin.style.width = "100px";
    this.coin.style.height = "100px";
    this.coin.style.position = "relative";
    this.coin.style.transformStyle = "preserve-3d";
    this.coin.style.transition = `transform ${this.speed}s linear`;

    this.front = document.createElement("div");
    this.back = document.createElement("div");

    this.front.classList.add("coin-face", "front");
    this.back.classList.add("coin-face", "back");

    this.front.style.backgroundImage = `url(${this.frontImage})`;
    this.back.style.backgroundImage = `url(${this.backImage})`;

    [this.front, this.back].forEach((side) => {
      side.style.position = "absolute";
      side.style.width = "100%";
      side.style.height = "100%";
      side.style.backfaceVisibility = "hidden";
      side.style.backgroundSize = "cover";
    });

    this.back.style.transform = "rotateY(180deg)";

    this.coin.appendChild(this.front);
    this.coin.appendChild(this.back);
    this.container.appendChild(this.coin);
  }

  setFaces(frontImage, backImage) {
    this.front.style.backgroundImage = `url(${frontImage})`;
    this.back.style.backgroundImage = `url(${backImage})`;
  }

  flipLeft(times = 1, speed = 1) {
    this.speed = speed;
    this.coin.style.transition = `transform ${this.speed}s linear`;
    this.rotation -= 180 * times;
    this.coin.style.transform = `rotateY(${this.rotation}deg)`;
  }

  flipRight(times = 1, speed = 1) {
    this.speed = speed;
    this.coin.style.transition = `transform ${this.speed}s linear`;
    this.rotation += 180 * times;
    this.coin.style.transform = `rotateY(${this.rotation}deg)`;
  }

  getCurrentFace() {
    // Определяем текущую сторону на основе значения rotation
    const normalizedRotation = this.rotation % 360;
    if (normalizedRotation === 0 || normalizedRotation === 360) {
      return 'front';
    } else {
      return 'back';
    }
  }
}
