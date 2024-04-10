const nomeHeroi = ["Capitão América" , "Batman" , "Morte" , "Mulher Maravilha"]
const xpHeroi = [ 50, 1500, 4320, 6580, 7500, 9999, 1002]

const nome = nomeHeroi[Math.floor(Math.random() * nomeHeroi.length)]
const numAleatorio = Math.round(Math.random() * xpHeroi.length)

let xp = xpHeroi[numAleatorio]
let nivel

if (xp<1000){
    nivel = "Ferro"
}
else if (xp>=1001 && xp<=2000){
    nivel = "Bronze"
}
else if (xp>=2001 && xp<=5000){
    nivel = "Prata"
}
else if (xp>=5001 && xp<=7000){
    nivel = "Ouro"
}
else if (xp>=7001 && xp<=8000){
    nivel = "Platina"
}
else if (xp>=8001 && xp<=9000){
    nivel = "Ascendente"
}
else if (xp>=9001 && xp<=10000){
    nivel = "Imortal"
}
else if (xp>=10001){
    nivel = "Radiante"
}

console.log("O Herói de nome " + nome + " está no nível " + nivel )
