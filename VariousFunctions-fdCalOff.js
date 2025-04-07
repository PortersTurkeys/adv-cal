    function playSound(soundId) {
    const sound = document.getElementById(soundId);
    if (sound) {
        sound.currentTime = 0; // Reset to start for replayability
        sound.play().catch(error => console.log('Sound play error:', error)); // Log errors (e.g., browser restrictions)
    }
}

// Add sound to the "Calculate Offspring" button
document.querySelector('button[onclick="calculateOffspring()"]').addEventListener('click', () => {
    playSound('clickSound');
});

// Add success sound at the end of the calculateOffspring function
function calculateOffspring() {
    

    // Play success sound when offspring calculation is complete
    playSound('successSound');
}

// Add sound to the reset button
document.querySelector('button[onclick="resetCalculator()"]').addEventListener('click', () => {
    playSound('clickSound');
});
 
    
    
    
    let calculationCount = 0; // Counter to track the number of calculations

function calculateOffspring() {
    const sireAlleleb = document.getElementById('sireAlleleb').value;
    const damAlleleb = document.getElementById('damAlleleb').value;
    const sireAlleleC = document.getElementById('sireAlleleC').value;
    const damAlleleC = document.getElementById('damAlleleC').value;
    const sireAlleled = document.getElementById('sireAlleled').value;
    const damAlleled = document.getElementById('damAlleled').value;
    const sireAlleleE = document.getElementById('sireAlleleE').value;
    const damAlleleE = document.getElementById('damAlleleE').value;
    const sireAlleleFd = document.getElementById('sireAlleleFd').value;
    const damAlleleFd = document.getElementById('damAlleleFd').value;
    const sireAlleleN = document.getElementById('sireAlleleN').value;
    const damAlleleN = document.getElementById('damAlleleN').value;
    const sireAllelePn = document.getElementById('sireAllelePn').value;
    const damAllelePn = document.getElementById('damAllelePn').value;
    const sireAlleleR = document.getElementById('sireAlleleR').value;
    const damAlleleR = document.getElementById('damAlleleR').value;
    const sireAlleleSl = document.getElementById('sireAlleleSl').value;
    const damAlleleSl = document.getElementById('damAlleleSl').value;
    const sireAlleleSp = document.getElementById('sireAlleleSp').value;
    const damAlleleSp = document.getElementById('damAlleleSp').value;

    showPopupMessage('Calculation complete, scroll down to view results');

    setGenotypeImage(
        'sireImageContainer',
        sireAlleleb,
        sireAlleleC,
        sireAlleled,
        sireAlleleE,
        sireAlleleFd,
        sireAlleleN,
        sireAllelePn,
        sireAlleleR,
        sireAlleleSl,
        sireAlleleSp,
        'male'
    );
    setGenotypeImage(
        'damImageContainer',
        damAlleleb,
        damAlleleC,
        damAlleled,
        damAlleleE,
        damAlleleFd,
        damAlleleN,
        damAllelePn,
        damAlleleR,
        damAlleleSl,
        damAlleleSp,
        'female'
    );

    const combinationsb = calculateCombinations(sireAlleleb, damAlleleb, 'b');
    const combinationsC = calculateCombinations(sireAlleleC, damAlleleC, 'C');
    const combinationsd = calculateCombinations(sireAlleled, damAlleled, 'd');
    const combinationsE = calculateCombinations(sireAlleleE, damAlleleE, 'E');
    const combinationsFd = calculateCombinations(sireAlleleFd, damAlleleFd, 'Fd');
    const combinationsN = calculateCombinations(sireAlleleN, damAlleleN, 'N');
    const combinationsPn = calculateCombinations(sireAllelePn, damAllelePn, 'Pn');
    const combinationsR = calculateCombinations(sireAlleleR, damAlleleR, 'R');
    const combinationsSl = calculateCombinations(sireAlleleSl, damAlleleSl, 'Sl');
    const combinationsSp = calculateCombinations(sireAlleleSp, damAlleleSp, 'Sp');

    const maleOffspring = [];
    const femaleOffspring = [];

    let totalRatioMale = 0;
    let totalRatioFemale = 0;

    for (const outcomeb of combinationsb.combinations) {
        for (const outcomeC of combinationsC.combinations) {
            for (const outcomed of combinationsd.combinations) {
                for (const outcomeE of combinationsE.combinations) {
                    for (const outcomeFd of combinationsFd.combinations) {
                        for (const outcomeN of combinationsN.combinations) {
                            for (const outcomePn of combinationsPn.combinations) {
                                for (const outcomeR of combinationsR.combinations) {
                                    for (const outcomeSl of combinationsSl.combinations) {
                                        for (const outcomeSp of combinationsSp.combinations) {
                                            const genotype = `${outcomeb} ${outcomeC} ${outcomed} ${outcomeE} ${outcomeFd} ${outcomeN} ${outcomePn} ${outcomeR} ${outcomeSl} ${outcomeSp}`;
                                            const shortGenotype = removeUnusedAlleles(genotype);

                                            const ratio =
                                                combinationsb.ratios[outcomeb] *
                                                combinationsC.ratios[outcomeC] *
                                                combinationsd.ratios[outcomed] *
                                                combinationsE.ratios[outcomeE] *
                                                combinationsFd.ratios[outcomeFd] *
                                                combinationsN.ratios[outcomeN] *
                                                combinationsPn.ratios[outcomePn] *
                                                combinationsR.ratios[outcomeR] *
                                                combinationsSl.ratios[outcomeSl] *
                                                combinationsSp.ratios[outcomeSp];

                                            let phenotype =
                                                phenotypeMapping1[shortGenotype] ||
                                                phenotypeMapping1A[shortGenotype] ||
                                                phenotypeMapping1B[shortGenotype] ||
                                                phenotypeMapping1C[shortGenotype] ||
                                                phenotypeMapping1D[shortGenotype] ||
                                                phenotypeMapping1E[shortGenotype] ||
                                                phenotypeMapping2[shortGenotype] ||
                                                phenotypeMapping2A[shortGenotype] ||
                                                phenotypeMapping3[shortGenotype] ||
                                                phenotypeMapping3A[shortGenotype] ||
                                                phenotypeMapping4[shortGenotype] ||
                                                phenotypeMapping5[shortGenotype] ||
                                                phenotypeMapping6[shortGenotype] ||
                                                phenotypeMapping7[shortGenotype] ||
                                                phenotypeMapping8[shortGenotype] ||
                                                phenotypeMapping9[shortGenotype] ||
                                                phenotypeMapping10[shortGenotype] ||
                                                phenotypeMapping11[shortGenotype] ||
                                                phenotypeMapping12[shortGenotype] ||
                                                phenotypeMapping13[shortGenotype] ||
                                                phenotypeMapping14[shortGenotype] ||
                                                phenotypeMapping15[shortGenotype];

                                           if (!phenotype && genotype.includes("cc")) {
    if (genotype.includes("Fdfd") || genotype.includes("fdfd")) {
        // Do not set phenotype to "White" (Handle alternate logic here if needed)
    } else {
        // Assign specific White variation based on Bronze locus
        if (genotype.includes('BB') || genotype.includes('Bb') || genotype.includes('Bb1')) {
            phenotype = "White (Blue Eyes)";
        } else if (genotype.includes('bb') || genotype.includes('bb1')) {
            phenotype = "White (Dark Brown Eyes)";
        } else if (genotype.includes('b1b1')) {
            phenotype = "White (Light Brown Eyes)";
        } else {
            phenotype = "White"; // Default fallback for cc if none match
        }
    }
}


                                            const basePicturePath =
                                                'https://raw.githubusercontent.com/PortersTurkeys/Pictures/refs/heads/main/';

                                            const maleGenotype = {
                                                phenotype: phenotype || 'To be defined',
                                                genotype: genotype,
                                                picturePath: phenotype
                                                    ? `${basePicturePath}M${phenotype.replace(/\s/g, '')}.jpg`
                                                    : '',
                                                ratio: ratio
                                            };

                                            const femaleGenotype = {
                                                phenotype: phenotype || 'To be defined',
                                                genotype: genotype,
                                                picturePath: phenotype
                                                    ? `${basePicturePath}F${phenotype.replace(/\s/g, '')}.jpg`
                                                    : '',
                                                ratio: ratio
                                            };

                                            if (
                                                (outcomeE === 'E-' || outcomeE === 'e-') &&
                                                (outcomeN === 'N-' || outcomeN === 'n-')
                                            ) {
                                                femaleOffspring.push(femaleGenotype);
                                                totalRatioFemale += ratio;
                                            }

                                            if (
                                                (outcomeE === 'EE' || outcomeE === 'Ee' || outcomeE === 'ee') &&
                                                (outcomeN === 'NN' || outcomeN === 'Nn' || outcomeN === 'nn')
                                            ) {
                                                maleOffspring.push(maleGenotype);
                                                totalRatioMale += ratio;
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }

    // Normalize ratios
    maleOffspring.forEach(off => (off.ratio = (off.ratio / totalRatioMale) / 2));
    femaleOffspring.forEach(off => (off.ratio = (off.ratio / totalRatioFemale) / 2));

    displayResults('maleOffspringResults', maleOffspring, 'male');
    displayResults('femaleOffspringResults', femaleOffspring, 'female');

    displaySummaryChart(maleOffspring, femaleOffspring);

    // Increment calculation count and show donation popup on the second calculation
    calculationCount++;
    if (calculationCount === 2) {
        showDonationPopup();
    }
}








