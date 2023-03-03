

import kaboom from "https://unpkg.com/kaboom/dist/kaboom.mjs";

kaboom();

loadSprite("kartka","niebo.png")
loadSprite("gwiazda","gwiazda.png")
loadSound("muzyka","muz.mp3")

add([
    sprite("kartka")


])

const gwiazda= add([
sprite("gwiazda"),
pos(550,10)

])


add([
play("muzyka")

])


onUpdate(()=>{

    if(gwiazda.pos.x==0){
gwiazda.pos.x=550
gwiazda.pos.y=10
    }

    gwiazda.pos.x -=1
    gwiazda.pos.y +=0.26
    
})
