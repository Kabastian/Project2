var GAME_LEVELS = [
  ["                                                                                ",
   "                                                                                ",
   "                                                                                ",
   "                                                                                ",
   "                                                                                ",
   "                                                                                ",
   "                                                                   w            ",
   "                              s              s        xxxx       yxxxy          ",
   "                         s    x     o o      xx                   yxy           ",
   "                     s   x          s s                           !yx           ",
   "                     x             xxxxx                          y!y           ",
   "                  s                                              y!!!y      xx  ",
   "  xx         p    x                       o o                                x  ",
   "  x         xxx         o                                                    x  ",
   "  x       hxyyyx                   xxx   xxxxx    xx     xx                o x  ",
   "  x      hxyyyyyx       o     xxx       y!!!!!y              xxxx     xxxxxxxx  ",
   "  x  @  hxyyyyyyyx      xxx            yyy!!!yyy            xxxxxx   xxxxxxxxx  ",
   "  xxxxxxxxxxxxxxxxxx              xxxxxxxxxxxxxxxx         xxxxxxx!x!xxxxxxxxx  ",
   "                   x              x               x       xx                    ",
   "                   x!!!!!!!!!!!!!!x                x       x                    ",
   "                   x!!!!!!!!!!!!!!x                 xx!x!x!x                    ",
   "                   xxxxxxxxxxxxxxxx                  xxxxxxx                    ",
   "                                                                                ",
   "                                                                                "],
  ["                                                                                                                  ",
   "                                                                                                                  ",
   "                                                                                                                  ",
   "                                                                                                                  ",
   "                                                                                                                  ",
   "                                                                                                                  ",
   "                                                                                                                  ",
   "                                                                                                                  ",
   "                                                                                                                  ",
   "x                                                                                                                y",
   "y                                                                                                                x",
   "x                                                                                                                y",
   "y                                                                                                                x",
   "x                                                                                                                y",
   "y                                                                                                                x",
   "x                                                                                                                y",
   "y     @                                                                                                        w x",
   "xyxyxyxyxyxyxyx     xyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxy",
   "yxyxyxyxyxyxyxy  o   xyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyx",
   "xyxyxyxyxyxyxyx  o    xyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxy",
   "yxyxyxyxyxyxyx   o     xyxyxyxyxyxyxyxyxyxyxyxyx                                                                  ",
   "xyxyxyxyxyxyxy   o     yxyxyxyxyxyxyxyxyxyxyxyxy  o             o                                                 ",
   "yxyxyxyxyxyxyx   o     xyxyxyxyxyxyxyxyxyxyxyxyx      yxyxyxyx             o     o                                ",
   "xyxyxyxyxyxyxy   o                   yxyxyxyxyxy     yxyxyxyxyxy   h h                                            ",
   "yxyxyxyxyxyxyx   o                    yxyxyxyxy      x!!!!!!!xx!xyxyxyxyxyxyxyxyxyxyx  o o  xyxyxyxyxyxyxyxyxyxyxy",
   "xyxyxyxyxyxyxy   o                o                hxy!!!!!!xy ! xyxyxyxyxyxyxyxyxyxyx     xyxyxyxyxyxyxyxyxyxyxyx",
   "yxyxyxyxyxyxyx   o      hh hh                      xy!!!!!!xy  !  xyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxy",
   "xyxyxyxyxyxyxyxyxyxyxyxy!!x!!yx  hhh  xyxyxyxyxyxyxy!!!!!!xy   !   xyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyx",
   "yxyxyxyxyxyxyxyxyxyxyxyx!!!!!!yxyxyxyxy!!!!!!!!!!!!!!!!!!xy    !    xyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxy",
   "xyxyxyxyxyxyxyxyxyxyxyxy!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!xy     !     xyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyx"],
  [
   "                                                                                                              ",
   "                                                                                                              ",
   "                                                                                                              ",
   "                                                                                                              ",
   "                                                                                                              ",
   "                                                                                                              ",
   "                                                                                                              ",
   "                                                                                                              ",
   "                                                                                                          w   ",
   "                                                                                                         xxx  ",
   "                                                                                                           x  ",
   "                                                                                                           x  ",
   "                                                                                                           x  ",
   "                                                                                                           x  ",
   "                                                                                                           x  ",
   "                                                                                                           x  ",
   "  x                                                                                                        x  ",
   "  x                                                                                                        x  ",
   "  x                                                                                                        x  ",
   "  x                                                                                                        x  ",
   "  x                 s        s        s        s        s        s        s        s        s        s     x  ",
   "  x                xxx      xxx      xxx      xxx      xxx      xxx      xxx      xxx      xxx      xxx    x  ",
   "  x               xxxxx    xxxxx    xxxxx    xxxxx    xxxxx    xxxxx    xxxxx    xxxxx    xxxxx    xxxxx   x  ",
   "  x               oxxxo    oxxxo    oxxxo    oxxxo    oxxxo    oxxxo    oxxxo    oxxxo    oxxxo    oxxxo   x  ",
   "  x                xxx      xxx      xxx      xxx      xxx      xxx      xxx      xxx      xxx      xxx    x  ",
   "  x      @          x        x        x        x        x        x        x        x        x        x     x  ",
   "  xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx  ",
   "                                                                                                              ",
   "                                                                                                              "],
   ["                                                                                                              ",
    "                                                                                                              ",
    "                                                                                                              ",
    "                                                                                                              ",
    "                                                                                                              ",
    "                                                                                                              ",
    "               @                                                                                              ",
    "    x     x   xxx     x  x   x    x                 x  x  x      x  x                                         ",
    "     x   x   x   x    x      x     x               x   x  xx     x  x                                         ",
    "      x x   x     x   x      x      x             x    x  x x    x  x                                         ",
    "       x   x       x  x      x       x     x     x     x  x  x   x  x                                         ",
    "       x    x     x   x      x        x   x x   x      x  x   x  x  x                                         ",
    "       x     x   x     x    x          x x   x x       x  x    x x                                            ",
    "       x      xxx       xxxx            x     x        x  x     xx  x                                         ",
    "                                                                                                              ",
    "                                                                                                              ",
    "                                                                                                              ",
    "                                                                                                              ",
    "                                                                                                              ",
    "                                                                                                              ",
    "                                                                                                              ",
    "                                                                                                              ",
    "                                                                                                              ",
    "                                                                                                              ",
    "                                                                                                              ",
    "                                                                                                              ",
    "                                                                                                              ",
    "                                                                                                              ",
    "                                                                                                              ",
    "                                                                                                              ",
    "                                                                                                              ",
    "                                                                                                              ",
    "                                                                                                              "]
 ];

if (typeof module != "undefined" && module.exports)
  module.exports = GAME_LEVELS;
