  function preload () {
      picture = loadImage("Music1.png")
      naruto = loadSound("Hi.mp3")
      jalebi = loadSound ("Bye.mp3") 
      spiderman = loadSound ("Bro.mp3")      
  }
  
  function setup() {
   createCanvas(windowWidth, windowHeight);
   
    narutoSong = createButton ("Blue Bird")
    jalebigg = createButton ("Jalebi Baby")
    spidermanSong = createButton ("Spiderman")
    stop = createButton ("Stop")
    narutoSong.position (400,0)
    jalebigg.position (500,0)
    stop.position (525,50)
    spidermanSong.position(400,50)
    volume = createSlider (0,1,0.1,0.1)
    volume.position (200,0)
    narutoSong.mousePressed (naruto_control)
    jalebigg.mousePressed (jalebi_control) 
    spidermanSong.mousePressed (spiderman_control)
    stop.mousePressed (stop_control)
   }

function draw() {
    background (picture)
    naruto.setVolume(volume.value())  
    jalebi.setVolume(volume.value())
    spiderman.setVolume(volume.value())
}
function naruto_control() { 
  naruto.play()
  jalebi.stop()
  spiderman.stop()
}

function jalebi_control() { 
  jalebi.play()
  naruto.stop()
  spiderman.stop()
}

function spiderman_control() {
  spiderman.play()
  naruto.stop()
  jalebi.stop()
}

function stop_control() {
  jalebi.stop()
  naruto.stop()
  spiderman.stop()
}