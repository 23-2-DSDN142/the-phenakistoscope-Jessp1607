const SLICE_COUNT = 10;

function setup_pScope(pScope){
  pScope.output_mode(ANIMATED_DISK);
  pScope.scale_for_screen(true);
  pScope.draw_layer_boundaries(true);
  pScope.draw_slits(false)
  pScope.set_direction(CCW);
  pScope.set_slice_count(18);
  
  pScope.load_image_sequence("orange_flower", "png", 8);
  pScope.load_image_sequence("pink_flower", "png", 8);
  pScope.load_image_sequence("purple_flower", "png", 8);
  pScope.load_image_sequence("butterfly_flying", "png", 20);
}

function setup_layers(pScope){
 new PLayer(null, 68, 70, 100);  //lets us draw the whole circle background, ignoring the boundaries

  var flowerblooming = new PLayer(flower);
  flowerblooming.mode(RING);
  flowerblooming.set_boundary(0,1000);

  var flowerblooming = new PLayer(pinkflower);
  flowerblooming.mode(RING);
  flowerblooming.set_boundary(0,1000);

  var flowerblooming = new PLayer(purpleflower);
  flowerblooming.mode(RING);
  flowerblooming.set_boundary(0,1000);

  var butterfliesflying= new PLayer(butterflies);
  butterfliesflying.mode(RING);
  butterfliesflying.set_boundary(500,1000);

}

function flower(x,y,animation, pScope){
  scale(1)
  pScope.draw_image_from_sequence("orange_flower",0, 960, animation.frame);

}

function pinkflower(x,y,animation, pScope){
  scale(1)
  pScope.draw_image_from_sequence("pink_flower",100, 960, animation.frame);

  }

function purpleflower(x,y,animation, pScope){
  scale(1)
  pScope.draw_image_from_sequence("purple_flower",200, 960, animation.frame);
}

function butterflies (x,y,animation, pScope){
  scale(0.3)
  pScope.draw_image_from_sequence("butterfly_flying",500, 500, animation.frame);
}

function butterflies (x,y,animation, pScope){
  scale(0.5)
  pScope.draw_image_from_sequence("butterfly_flying",600,600, animation.frame);
}