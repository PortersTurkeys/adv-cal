function transferOffspringToParent(genotype, parent) {
const genotypeParts = genotype.split(' ');

const alleleMapping = {
B: parent === 'sire' ? 'sireAlleleb' : 'damAlleleb',
b: parent === 'sire' ? 'sireAlleleb' : 'damAlleleb',
C: parent === 'sire' ? 'sireAlleleC' : 'damAlleleC',
cg: parent === 'sire' ? 'sireAlleleC' : 'damAlleleC',
cm: parent === 'sire' ? 'sireAlleleC' : 'damAlleleC',
c: parent === 'sire' ? 'sireAlleleC' : 'damAlleleC',
D: parent === 'sire' ? 'sireAlleled' : 'damAlleled',
d: parent === 'sire' ? 'sireAlleled' : 'damAlleled',
E: parent === 'sire' ? 'sireAlleleE' : 'damAlleleE',
e: parent === 'sire' ? 'sireAlleleE' : 'damAlleleE',
Fd: parent === 'sire' ? 'sireAlleleFd' : 'damAlleleFd',
fd: parent === 'sire' ? 'sireAlleleFd' : 'damAlleleFd',
N: parent === 'sire' ? 'sireAlleleN' : 'damAlleleN',
n: parent === 'sire' ? 'sireAlleleN' : 'damAlleleN',
Pn: parent === 'sire' ? 'sireAllelePn' : 'damAllelePn',
pn: parent === 'sire' ? 'sireAllelePn' : 'damAllelePn',
R: parent === 'sire' ? 'sireAlleleR' : 'damAlleleR',
r: parent === 'sire' ? 'sireAlleleR' : 'damAlleleR',
Sl: parent === 'sire' ? 'sireAlleleSl' : 'damAlleleSl',
sl: parent === 'sire' ? 'sireAlleleSl' : 'damAlleleSl',
Sp: parent === 'sire' ? 'sireAlleleSp' : 'damAlleleSp',
sp: parent === 'sire' ? 'sireAlleleSp' : 'damAlleleSp'
};

console.log("Transferring to " + parent);
console.log("Genotype parts: ", genotypeParts);

genotypeParts.forEach(part => {
const key = Object.keys(alleleMapping).find(k => part.startsWith(k));
if (key) {
console.log("Mapping ", part, " to ", alleleMapping[key]);
document.getElementById(alleleMapping[key]).value = part;
} else {
console.log("No mapping found for ", part);
}
});

// Explicitly handle cg, cm, c, D, fd, pn, r, sl, sp to their defaults
if (!genotype.includes('cg') && !genotype.includes('cm') && !genotype.includes('c') && parent === 'sire') {
document.getElementById('sireAlleleC').value = 'CC';
} else if (!genotype.includes('cg') && !genotype.includes('cm') && !genotype.includes('c') && parent === 'dam') {
document.getElementById('damAlleleC').value = 'CC';
}
if (!genotype.includes('D') && parent === 'sire') {
document.getElementById('sireAlleled').value = 'dd';
} else if (!genotype.includes('D') && parent === 'dam') {
document.getElementById('damAlleled').value = 'dd';
}
if (!genotype.includes('Fd') && !genotype.includes('fd') && parent === 'sire') {
document.getElementById('sireAlleleFd').value = 'FdFd';
} else if (!genotype.includes('Fd') && !genotype.includes('fd') && parent === 'dam') {
document.getElementById('damAlleleFd').value = 'FdFd';
}
if (!genotype.includes('Pn') && !genotype.includes('pn') && parent === 'sire') {
document.getElementById('sireAllelePn').value = 'PnPn';
} else if (!genotype.includes('Pn') && !genotype.includes('pn') && parent === 'dam') {
document.getElementById('damAllelePn').value = 'PnPn';
}
if (!genotype.includes('R') && !genotype.includes('r') && parent === 'sire') {
document.getElementById('sireAlleleR').value = 'RR';
} else if (!genotype.includes('R') && !genotype.includes('r') && parent === 'dam') {
document.getElementById('damAlleleR').value = 'RR';
}
if (!genotype.includes('Sl') && !genotype.includes('sl') && parent === 'sire') {
document.getElementById('sireAlleleSl').value = 'SlSl';
} else if (!genotype.includes('Sl') && !genotype.includes('sl') && parent === 'dam') {
document.getElementById('damAlleleSl').value = 'SlSl';
}
if (!genotype.includes('Sp') && !genotype.includes('sp') && parent === 'sire') {
document.getElementById('sireAlleleSp').value = 'SpSp';
} else if (!genotype.includes('Sp') && !genotype.includes('sp') && parent === 'dam') {
document.getElementById('damAlleleSp').value = 'SpSp';
}

// Handle the E locus specifically
if (parent === 'sire') {
if (!genotype.includes('E') && !genotype.includes('e')) {
document.getElementById('sireAlleleE').value = 'EE';
} else if (genotype.includes('ee')) {
document.getElementById('sireAlleleE').value = 'ee';
} else {
document.getElementById('sireAlleleE').value = 'Ee';
}
} else {
if (!genotype.includes('E') && !genotype.includes('e') && !genotype.includes('e-')) {
document.getElementById('damAlleleE').value = 'E-';
} else if (genotype.includes('e-')) {
document.getElementById('damAlleleE').value = 'e-';
} else {
document.getElementById('damAlleleE').value = 'E-';
}
}

// Handle the N locus specifically
if (parent === 'sire') {
if (!genotype.includes('N') && !genotype.includes('n')) {
document.getElementById('sireAlleleN').value = 'NN';
} else if (genotype.includes('nn')) {
document.getElementById('sireAlleleN').value = 'nn';
} else {
document.getElementById('sireAlleleN').value = 'Nn';
}
} else {
if (!genotype.includes('N') && !genotype.includes('n') && !genotype.includes('n-')) {
document.getElementById('damAlleleN').value = 'N-';
} else if (genotype.includes('n-')) {
document.getElementById('damAlleleN').value = 'n-';
} else {
document.getElementById('damAlleleN').value = 'N-';
}
}

if (parent === 'sire') {
updateSireGenotype();
} else {
updateDamGenotype();
}


// Show acknowledgment popup
    showPopup(`The selected offspring has been transferred to the ${parent === 'sire' ? 'Sire' : 'Dam'} container for further calculations.`);
}


function showPopup(message) {
    const popup = document.getElementById('ackModal');
    const messageContainer = document.getElementById('ackMessage');

    // Set the message and show the popup
    messageContainer.textContent = message;
    popup.style.display = 'block';

    // Hide the popup after 2 seconds
    setTimeout(() => {
        popup.style.display = 'none';
    }, 2000);
}









