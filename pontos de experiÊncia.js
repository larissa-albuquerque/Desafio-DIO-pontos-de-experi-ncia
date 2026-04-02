let nivelMonstro = 15;
let dificuldade = 20;

function xpGanho (nivelMonstro, dificuldade){
    let calcularXp = nivelMonstro * dificuldade * 100;
    return calcularXp;
}
let resultado = xpGanho (nivelMonstro, dificuldade);
console.log ("Você ganhou " + resultado + " XP!")