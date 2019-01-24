window.onload = function() {
  var doMinecraftSplashes = false;
  var splashes = ["La Agencia de Viajes Mejor!", "Ay Caramba!", "No Manches.", "Callate, Perro", "Me encanta Santiago!"];
  var lengthSplashes = splashes.length;
  var randSplashId = Math.floor(Math.random() * lengthSplashes);
  document.getElementById("splash").innerHTML = splashes[randSplashId];
}
