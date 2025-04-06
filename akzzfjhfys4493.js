const scripts = [
"https://porterturkeys.com/VariousFunctions/fdsplitfunct.js",
"https://porterturkeys.com/VariousFunctions/fdAllelecomboratio.js",
"https://porterturkeys.com/VariousFunctions/fdCalOff.js",
"https://porterturkeys.com/VariousFunctions/fdDisplayRes.js",
"https://porterturkeys.com/VariousFunctions/fdtranstparent.js",
"https://porterturkeys.com/VariousFunctions/fdsavesirendam.js",
"https://porterturkeys.com/VariousFunctions/DNALoader.js",
"https://porterturkeys.com/VariousFunctions/Sounds.js",
"https://porterturkeys.com/VariousFunctions/SocialShare.js",
  
"https://portersturkeys.github.io/adv-cal/geno-pheno-mapping1.js",
"https://portersturkeys.github.io/adv-cal/geno-pheno-mapping1A.js",
"https://portersturkeys.github.io/adv-cal/geno-pheno-mapping1B.js",
"https://portersturkeys.github.io/adv-cal/geno-pheno-mapping1C.js",
"https://portersturkeys.github.io/adv-cal/geno-pheno-mapping1D.js",
"https://portersturkeys.github.io/adv-cal/geno-pheno-mapping1E.js",
"https://portersturkeys.github.io/adv-cal/geno-pheno-mapping1.js",
"https://portersturkeys.github.io/adv-cal/geno-pheno-mapping1.js",
"https://portersturkeys.github.io/adv-cal/geno-pheno-mapping1.js",
"https://portersturkeys.github.io/adv-cal/geno-pheno-mapping1.js",
"https://portersturkeys.github.io/adv-cal/geno-pheno-mapping1.js",
"https://portersturkeys.github.io/adv-cal/geno-pheno-mapping1.js",
"https://portersturkeys.github.io/adv-cal/geno-pheno-mapping1.js",
"https://portersturkeys.github.io/adv-cal/geno-pheno-mapping1.js",
"https://portersturkeys.github.io/adv-cal/geno-pheno-mapping1.js"


];


scripts.forEach(src => {
  const script = document.createElement('script');
  script.src = src;
  script.onload = () => {
    console.log(`Loaded: ${src}`);
  };
  script.onerror = () => {
    console.error(`Failed to load: ${src}`);
  };
  document.head.appendChild(script);
});
