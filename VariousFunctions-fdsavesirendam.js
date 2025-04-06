//Save sire genotype
function saveSireGenotype() {
const sireName = document.getElementById('sireNameInput').value;
const sireGenotype = {
alleleb: document.getElementById('sireAlleleb').value,
alleleC: document.getElementById('sireAlleleC').value,
alleled: document.getElementById('sireAlleled').value,
alleleE: document.getElementById('sireAlleleE').value,
alleleFd: document.getElementById('sireAlleleFd').value,
alleleN: document.getElementById('sireAlleleN').value,
allelePn: document.getElementById('sireAllelePn').value,
alleleR: document.getElementById('sireAlleleR').value,
alleleSl: document.getElementById('sireAlleleSl').value,
alleleSp: document.getElementById('sireAlleleSp').value
};

if (sireName) {
let favorites = JSON.parse(localStorage.getItem('sireFavorites')) || {};
favorites[sireName] = sireGenotype;
localStorage.setItem('sireFavorites', JSON.stringify(favorites));
updateSireFavoritesDropdown();
document.getElementById('sireNameInput').value = ''; // Reset the input field
} else {
alert('Please enter a name for a favorite sire.');
}
}

// Recall sire genotype
function recallSireGenotype() {
const sireName = document.getElementById('sireFavoritesDropdown').value;
const favorites = JSON.parse(localStorage.getItem('sireFavorites')) || {};
const sireGenotype = favorites[sireName];

if (sireGenotype) {
document.getElementById('sireAlleleb').value = sireGenotype.alleleb;
document.getElementById('sireAlleleC').value = sireGenotype.alleleC;
document.getElementById('sireAlleled').value = sireGenotype.alleled;
document.getElementById('sireAlleleE').value = sireGenotype.alleleE;
document.getElementById('sireAlleleE').value = sireGenotype.alleleE;
document.getElementById('sireAlleleFd').value = sireGenotype.alleleFd;
document.getElementById('sireAlleleFd').value = sireGenotype.alleleFd;
document.getElementById('sireAlleleN').value = sireGenotype.alleleN;
document.getElementById('sireAllelePn').value = sireGenotype.allelePn;
document.getElementById('sireAlleleR').value = sireGenotype.alleleR;
document.getElementById('sireAlleleSl').value = sireGenotype.alleleSl;
document.getElementById('sireAlleleSp').value = sireGenotype.alleleSp;

updateSireGenotype();
} else {
alert('Select a saved sire before selecting recall.');
}
}

// Save dam genotype
function saveDamGenotype() {
const damName = document.getElementById('damNameInput').value;
const damGenotype = {
alleleb: document.getElementById('damAlleleb').value,
alleleC: document.getElementById('damAlleleC').value,
alleled: document.getElementById('damAlleled').value,
alleleE: document.getElementById('damAlleleE').value,
alleleFd: document.getElementById('damAlleleFd').value,
alleleN: document.getElementById('damAlleleN').value,
allelePn: document.getElementById('damAllelePn').value,
alleleR: document.getElementById('damAlleleR').value,
alleleSl: document.getElementById('damAlleleSl').value,
alleleSp: document.getElementById('damAlleleSp').value
};

if (damName) {
let favorites = JSON.parse(localStorage.getItem('damFavorites')) || {};
favorites[damName] = damGenotype;
localStorage.setItem('damFavorites', JSON.stringify(favorites));
updateDamFavoritesDropdown();
document.getElementById('damNameInput').value = ''; // Reset the input field
} else {
alert('Please enter a name for a favorite dam.');
}
}

// Recall dam genotype
function recallDamGenotype() {
const damName = document.getElementById('damFavoritesDropdown').value;
const favorites = JSON.parse(localStorage.getItem('damFavorites')) || {};
const damGenotype = favorites[damName];

if (damGenotype) {
document.getElementById('damAlleleb').value = damGenotype.alleleb;
document.getElementById('damAlleleC').value = damGenotype.alleleC;
document.getElementById('damAlleled').value = damGenotype.alleled;
document.getElementById('damAlleleE').value = damGenotype.alleleE;
document.getElementById('damAlleleFd').value = damGenotype.alleleFd;
document.getElementById('damAlleleN').value = damGenotype.alleleN;
document.getElementById('damAllelePn').value = damGenotype.allelePn;
document.getElementById('damAlleleR').value = damGenotype.alleleR;
document.getElementById('damAlleleSl').value = damGenotype.alleleSl;
document.getElementById('damAlleleSp').value = damGenotype.alleleSp;

updateDamGenotype();
} else {
alert('Select a saved dam before selecting recall.');
}
}

// Update sire favorites dropdown
function updateSireFavoritesDropdown() {
const favorites = JSON.parse(localStorage.getItem('sireFavorites')) || {};
const dropdown = document.getElementById('sireFavoritesDropdown');
dropdown.innerHTML = '<option value="">Select a Saved Sire</option>';

for (const name in favorites) {
const option = document.createElement('option');
option.value = name;
option.textContent = name;
dropdown.appendChild(option);
}
}

// Update dam favorites dropdown
function updateDamFavoritesDropdown() {
const favorites = JSON.parse(localStorage.getItem('damFavorites')) || {};
const dropdown = document.getElementById('damFavoritesDropdown');
dropdown.innerHTML = '<option value="">Select a Saved Dam</option>';

for (const name in favorites) {
const option = document.createElement('option');
option.value = name;
option.textContent = name;
dropdown.appendChild(option);
}
}

// Ensure the dropdowns are populated when the page loads
document.addEventListener('DOMContentLoaded', function () {
updateSireFavoritesDropdown();
updateDamFavoritesDropdown();
});

function deleteSireGenotype() {
const sireName = document.getElementById('sireFavoritesDropdown').value;
if (sireName) {
let favorites = JSON.parse(localStorage.getItem('sireFavorites')) || {};
if (favorites[sireName]) {
delete favorites[sireName];
localStorage.setItem('sireFavorites', JSON.stringify(favorites));
updateSireFavoritesDropdown();
} else {
alert('Selected sire genotype not found.');
}
} else {
alert('Please select a sire to delete.');
}
}

function deleteDamGenotype() {
const damName = document.getElementById('damFavoritesDropdown').value;
if (damName) {
let favorites = JSON.parse(localStorage.getItem('damFavorites')) || {};
if (favorites[damName]) {
delete favorites[damName];
localStorage.setItem('damFavorites', JSON.stringify(favorites));
updateDamFavoritesDropdown();
} else {
alert('Selected dam genotype not found.');
}
} else {
alert('Please select a dam to delete.');
}
}








