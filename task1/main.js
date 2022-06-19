`use strict`;

class Man {
    wins = 0;
    loses = 0;
    block; // random
    name;
    attack;
    hp;
    constructor(props) {
        ({name: this.name, attack: this.attack, hp: this.hp} = props);
    }
    get stats(){
        return {name: this.name, attack: this.attack, HP: this.hp, block: this.block};
    }
    get story() {
        return {win: this.wins, loose: this.loses}
    }
    fight(victim){
        console.log('_______________')
        console.log('Fight: ' + this.name + ' hit ' + victim.name + ':');

        victim.block = (Math.random() < 0.5);

        if(this.hp <= 0){
            console.log("The dead don't dance");
            return false;
        }
        if(victim.hp <= 0){
            console.log("Don't hit the dad please")
            return false;
        }
        if(victim.block){
            console.log(victim.name + ' has successfully blocked a hit');
            return false;
        }

        victim.hp = victim.hp - this.attack;

        if(victim.hp > 0) {
            console.log(victim.name + ' has survived. HP:' + victim.hp)
            return false;
        } else {
            console.log(this.name + ' is win. ' + victim.name + ' is dad.' )
            victim.hp = 0;
            this.wins++;
            victim.loses++;
            return true;
        }
    }
}

function showResult(fighter){
    console.log(`
            Fighter ${fighter.name}
        * - Combat stats: { wins: ${fighter.wins}, loses: ${fighter.loses} }
        * - Properties: { name: '${fighter.name}', attack: ${fighter.attack}, hp: ${fighter.hp} }
`)
}

let fighter = (properties) => {
    return new Man(properties);
}

let fighter1 = fighter({name: 'John', attack: 100, hp: 100});
let fighter2 = fighter({name: 'Kayn', attack: 50, hp: 300});
let fighter3 = fighter({name: 'Bill', attack: 40, hp: 100});

fighter1.fight(fighter2);
fighter1.fight(fighter2);
fighter1.fight(fighter2);
fighter1.fight(fighter2);
fighter1.fight(fighter2);
fighter3.fight(fighter1);
fighter3.fight(fighter1);
fighter3.fight(fighter1);
fighter3.fight(fighter1);
fighter3.fight(fighter1);
fighter3.fight(fighter1);
fighter3.fight(fighter1);
fighter2.fight(fighter3);
fighter2.fight(fighter3);
fighter2.fight(fighter3);
fighter2.fight(fighter3);
fighter2.fight(fighter1);
showResult(fighter1);
showResult(fighter2);
showResult(fighter3);


