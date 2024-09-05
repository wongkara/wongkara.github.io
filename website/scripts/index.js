const button = document.querySelector("#button");
const icon = document.querySelector("#button > i");
const audio = document.querySelector("audio");
const html = document.documentElement;
const canvas = document.getElementById("animation");
const context = canvas.getContext("2d");
const frameCount = 1000;
const frames = [];
let currentFrameIndex = 0;
const frameWidth = 1920;
const frameHeight = 1080;

const preloadImages = () => {
    for (let i = 0; i < frameCount; i++) {
        const img = new Image();
        img.src = './frames/out${i.toString()}.jpg';
        frames.push(img);
    }
};

const setupCanvas = () => {
    canvas.width = frameWidth;
    canvas.height = frameHeight;
};

const drawFrame = () => {
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.drawImage(frames[currentFrameIndex], 0, 0, frameWidth, frameHeight);
};

const updateImage = index => {
    currentFrameIndex = index;
    drawFrame();
};

const setupLinkControl = () => {
    const linksContainer = document.getElementById('links');
    linksContainer.addEventListener('click', event => {
        event.preventDefault();
        const link = event.target.closest('a');
        if (link && link.dataset.frameIndex) {
            const frameIndex = parseInt(link.dataset.frameIndex, 10);
            updateImage(frameIndex);
        }
    });
};

// Initialization
preloadImages();
setupCanvas();
drawFrame();
setupLinkControl();
