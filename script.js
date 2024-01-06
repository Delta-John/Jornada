let nomeHeroi = prompt("Digite o nome do herói: ");
let xpHeroi = parseInt(prompt("Digite a quantidade de experiência do herói: "));


let nivelHeroi;

if (xpHeroi < 1000) {
    nivelHeroi = "Ferro";
} else if (xpHeroi >= 1001 && xpHeroi <= 2000) {
    nivelHeroi = "Bronze";
} else if (xpHeroi >= 2001 && xpHeroi <= 5000) {
    nivelHeroi = "Prata";
} else if (xpHeroi >= 5001 && xpHeroi <= 7000) {
    nivelHeroi = "Ouro";
} else if (xpHeroi >= 7001 && xpHeroi <= 8000) {
    nivelHeroi = "Platina";
} else if (xpHeroi >= 8001 && xpHeroi <= 9000) {
    nivelHeroi = "Ascendente";
} else if (xpHeroi >= 9001 && xpHeroi <= 10000) {
    nivelHeroi = "Imortal";
} else {
    nivelHeroi = "Radiante";
}

switch (nivelHeroi) {

    case "Ferro":
        console.log("Prepare-se, o desafio está apenas começando!");
        break;

    case "Bronze":
        console.log("Continue treinando para alcançar novas alturas!");
        break;

    case "Prata":
        console.log("Você está progredindo, mas há mais montros a serem abatidos!");
        break;

    case "Ouro":
        console.log("Suas habilidades brilham como o ouro!");
        break;

    case "Platina" :
        console.log("Você alcançou um nível extraordinário! Parabéns!");
        break;
    
    case "Ascendente":
        console.log("Ascenda aos desafios cada vez mais difíceis!");
        break;

    case "Imortal":
        console.log("Sua imortalidade é uma inspiração!");
        break;

    case "Radiante":
        console.log("Você é verdadeiramente radiante! Parabéns!");
        break;
    }

console.log(`O Herói de nome ${nomeHeroi} está no nível de ${nivelHeroi}`);

