const playground = document.getElementById('playground');
playground.append(' Wizard');

const magicalOrb = document.createElement('div');
magicalOrb.textContent = 'Magic Orb';
playground.append(magicalOrb);

magicalOrb.remove();

const magicWand = document.createElement('div');
magicWand.setAttribute('id', 'wand1');
magicWand.setAttribute('class', 'magical-item wand');
magicWand.textContent = "Magic Wand";
playground.append(magicWand);

console.log(magicWand.getAttribute('id'));
console.log(magicWand.id);
console.log(magicWand.className);

