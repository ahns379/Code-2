var CONFIG = {
  COLORS: {
    healthy: "#98FB98",
    infected: "#8B0000",
    recovered: "#00FFFF",
    dead: "#000000"
  },
  // // SCREEN_WIDTH: 0,
  // SCREEN_HEIGHT: 0,
  infected: 2,
  // SOCIAL_DISTANCING_RATE: 0.15,
  // SOCIAL_DISTANCING_INTENSITY: 0.9,
  death_rate: 0.00015,
  speed: 2,
  s: 10,
  recovery: 1200,
  count: 500
};

(function() {
  var playAnimation = true;

  function init(){
    canvas = document.createElement("canvas");
    document.body.appendChild(canvas);

    if(canvas && canvas.getContext) {
      playAnimation = true;
      context = canvas.getContext('2d');
      windowResizeHandler();
      createParticles();
      loop();
    }
  }

  function infectParticle(particle){
    if (particle.healthStatus == "healthy") {
      particle.healthStatus = "infected";
      particle.fillColor = CONFIG.COLORS.infected;
      particle.timeToRecover = CONFIG.recovery;
    }
  }
  function recoverParticle(particle) {
    particle.healthStatus = "recovered";
    particle.fillColor = CONFIG.COLORS.recovered;
    particle.timeToRecover = 0;
  }

  function killParticle(particle) {
    particle.healthStatus = "dead";
    particle.fillColor = CONFIG.COLORS.dead;
    particle.directionX = particle.directionX * 0;
    particle.directionY = particle.directionY * 0;
    particle.speed = 0;
  }

  function createParticles(){
    particles = [];
    // var depth = 0;

    for (var i = 0; i < CONFIG.count; i++) {
      var posX = CONFIG.s/2 + Math.random() * (window.innerWidth - CONFIG.s/2)
      var posY = CONFIG.s/2 + Math.random() * (window.innerHeight - CONFIG.s/2);

      var directionX = -CONFIG.speed + (Math.random() * (CONFIG.speed * 2));
      var directionY = -CONFIG.speed + (Math.random()* (CONFIG.speed * 2));

      var particle = {
        pos: { x: posX, y: posY },
        size: CONFIG.s,
        directionX: directionX,
        directionY: directionY,
        speed: CONFIG.speed,
        // targetX: posX,
        // targetY: posY,
        // depth: depth,
        index:i,
        fillColor: CONFIG.COLORS.healthy,
        healthStatus: "healthy",
        timeToRecover: 0
      };
      particles.push( particle );
    }

    //inital Infections
    for(var i = 0; (i < CONFIG.infected && (i < particles.length - 1) ); i++ ) {
      infectParticle(particles[i]);
    }

  }

  function loop(){
    var percentageInfectedParticles = (particles.filter(p => {return (p.healthStatus == "infected" || p.healthStatus == "dead")}).length / particles.length);
    var colorRedAmount = 250 - (percentageInfectedParticles * 50);
    context.fillStyle = 'rgba(250,' + colorRedAmount + ',' + colorRedAmount + ',0.2)';
    context.fillRect(0, 0, context.canvas.width, context.canvas.height);

    var z = 0;
    var xdist = 0;
    var ydist = 0;
    var dist = 0;

    for (var i=0; i < particles.length; i++){

      var particle = particles[i];
      // var lp = { x: particle.pos.x, y: particle.pos.y };

      if(particle.pos.x <=particle.size/2 || particle.pos.x >= CONFIG.SCREEN_WIDTH - CONFIG.s/2){
        particle.directionX *= -1;
      }

      if(particle.pos.y <=particle.size/2 || particle.pos.y >= CONFIG.SCREEN_HEIGHT - CONFIG.s/2){
        particle.directionY *= -1;
      }

      if (particle.healthStatus == "infected") {
        particle.timeToRecover--;
        if (particle.timeToRecover <= 0) {
          recoverParticle(particle);
        } else if (Math.random() <= CONFIG.death_rate) {
          killParticle(particle);
        }
      }

      for(var s=0; s < particles.length; s++) {
        var bounceParticle = particles[s];
          if(bounceParticle.index != particle.index) {
            //what are the distances
            z = CONFIG.s;
            xdist = Math.abs(bounceParticle.pos.x - particle.pos.x);
            ydist = Math.abs(bounceParticle.pos.y - particle.pos.y);
            dist = Math.sqrt(Math.pow(xdist, 2) + Math.pow(ydist, 2));
            if(dist < z) {
              randomiseDirection(particle);
              randomiseDirection(bounceParticle);
              if (particle.healthStatus == "infected" || bounceParticle.healthStatus == "infected") {
                infectParticle(bounceParticle);
                infectParticle(particle);
              }
            }
          }
        }

        particle.pos.x -= particle.directionX;
        particle.pos.y -= particle.directionY;

        context.beginPath();
        context.fillStyle = particle.fillColor;
        context.lineWidth = particle.size;
        // context.moveTo(lp.x, lp.y);
        context.arc(particle.pos.x, particle.pos.y, particle.size/2, 0, Math.PI*2, true);
        context.closePath();
        context.fill();
    }

    if (playAnimation) {
      animationRequest = requestAnimationFrame(loop);
    }
  }

  function randomiseDirection (particle) {
    var r = (Math.random() * 180)/Math.PI;
    particle.directionX = Math.sin(r) * particle.speed;
    particle.directionY = Math.cos(r) * particle.speed;
  }

  function windowResizeHandler() {
    CONFIG.SCREEN_WIDTH = window.innerWidth;
    CONFIG.SCREEN_HEIGHT = window.innerHeight;
    canvas.width = CONFIG.SCREEN_WIDTH;
    canvas.height = CONFIG.SCREEN_HEIGHT;
  }

  init();
}());
