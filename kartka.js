// import kaboom lib
import kaboom from "https://unpkg.com/kaboom/dist/kaboom.mjs";

// initialize kaboom context
kaboom();

// wczytywanie obrazkow

loadSprite("kartka", "kartka.png")
loadSprite("smok", "smok.png")

loadSound("muzyka", "dzisiaj_w_betlejem.mp3")

// add a piece of text at position (120, 80)
add([
    text("hello"),
    pos(120, 80),
]);

add([
    sprite("kartka"),
    pos(0,0)
])

const smok = add([
    sprite("smok"),
    pos(20,280)
])

onUpdate(()=>{
    smok.pos.x=smok.pos.x + 1
    smok.pos.y=smok.pos.y + (-0.18)
})

onKeyPress("space",()=>{
    play ("muzyka")   
})