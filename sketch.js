let song;
let sliderVol; 
let button;
let stopButton;
let gif_loadImg, gif_createImg;
let fft;
let w;
let amp;
let volHistory = [];

function preload() {
  gif_loadImg = loadImage("./assets/media/Mav.gif");
  gif_createImg = createImg("./assets/media/Mav.gif");
};

  

function setup() {
  createCanvas(700, 700);
  colorMode(RGB);
  //background(0);
  song = loadSound("./assets/media/Chordimist.mp3", loaded);
  amp = new p5.Amplitude();
  fft = new p5.FFT(0.9, 64);
  w = width / 64
  
  
};

function togglePlaying() {
  if (!song.isPlaying()) {
    song.play();
    song.setVolume(0.5)
    button.html("pause")  
  } else {
    song.pause();
    button.html("play");
    }
  };

function toggleStop(){
  song.stop();
};

function loaded() {
  button = createButton("play");
  button.mousePressed(togglePlaying);
  stopButton = createButton("stop");
  stopButton.mousePressed(toggleStop);
  sliderVol = createSlider(0, 1, 0.5, 0.01);
  
};

function draw() {
  background(0);
  gif_createImg.position(50, 40,);
  let vol = amp.getLevel();
  volHistory.push(vol);
  let spectrum = fft.analyze();
  stroke(255);
  //song.setVolume(sliderVol.value());
for (let i = 0; i < spectrum.length; i++) {
  let amp = spectrum[i];
  let y = map(amp, 0, 700, height, 0);
  fill(i, 255, 255)
  rect(i * w, y, w - 2, height - y, vol, vol);
}
//console.log(spectrum.length);

       
    }

 

