const SLICE_COUNT = 3;

function setup_pScope(pScope){
  pScope.output_mode(ANIMATED_DISK);
  pScope.scale_for_screen(true);
  pScope.draw_layer_boundaries(true);
  pScope.draw_slits(false)
  pScope.set_direction(CCW);
  pScope.set_slice_count(18);
  
  pScope.load_image_sequence("elephant_walking" , "png", 9);
  pScope.load_image_sequence("butterfly_flying" , "png", 20); 
  pScope.load_image_sequence("flower_blooming" , "png", 8);
}

function setup_layers(pScope){
 new PLayer(null, 68, 70, 100);  //lets us draw the whole circle background, ignoring the boundaries

  var flowerbloomingsequence = new PLayer(flower);
  flowerbloomingsequence.mode(RING);
  flowerbloomingsequence.set_boundary(0,500);

  var elephantwalkingcycle = new PLayer(elephant);
  elephantwalkingcycle.mode(RING);
  elephantwalkingcycle.set_boundary(0, 1000 );

  var butterflyingsequence = new PLayer(butterfly);
  butterflyingsequence.mode(SWIRL(1));
  butterflyingsequence.set_boundary(0,300);
}

function flower(x,y,animation, pScope){
  scale(1);
  pScope.draw_image_from_sequence("flower_blooming", 0, 1020, animation.frame);
}

function butterfly(x,y,animation,pScope){
  translate(0, -850)
  scale(0.4);
  pScope.draw_image_from_sequence("butterfly_flying", 0, 800, animation.wave(200));
}

function elephant(x,y, animation, pScope){
  translate(0,-850)
scale(0.08)
pScope.draw_image_from_sequence("elephant_walking", 0, 200, animation.frame);
} 