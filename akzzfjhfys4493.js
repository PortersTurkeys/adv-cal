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
  
"adv-cal/geno-pheno-mapping1.js",
"https://portersturkeys.github.io/adv-cal/geno-pheno-mapping1A.js",
"https://portersturkeys.github.io/adv-cal/geno-pheno-mapping1B.js",
"https://portersturkeys.github.io/adv-cal/geno-pheno-mapping1C.js",
"https://portersturkeys.github.io/adv-cal/geno-pheno-mapping1D.js",
"https://portersturkeys.github.io/adv-cal/geno-pheno-mapping1E.js",
"https://portersturkeys.github.io/adv-cal/geno-pheno-mapping2.js",
"https://portersturkeys.github.io/adv-cal/geno-pheno-mapping2A.js",
"https://portersturkeys.github.io/adv-cal/geno-pheno-mapping3.js",
"https://portersturkeys.github.io/adv-cal/geno-pheno-mapping3A.js",
"https://portersturkeys.github.io/adv-cal/geno-pheno-mapping4.js",
"https://portersturkeys.github.io/adv-cal/geno-pheno-mapping5.js",
"https://portersturkeys.github.io/adv-cal/geno-pheno-mapping6.js",
"https://portersturkeys.github.io/adv-cal/geno-pheno-mapping7.js",
"https://portersturkeys.github.io/adv-cal/geno-pheno-mapping8.js",
"https://portersturkeys.github.io/adv-cal/geno-pheno-mapping9.js",
"https://portersturkeys.github.io/adv-cal/geno-pheno-mapping10.js",
"https://portersturkeys.github.io/adv-cal/geno-pheno-mapping11.js",
"https://portersturkeys.github.io/adv-cal/geno-pheno-mapping12.js",
"https://portersturkeys.github.io/adv-cal/geno-pheno-mapping13.js",
"https://portersturkeys.github.io/adv-cal/geno-pheno-mapping14.js",
"https://portersturkeys.github.io/adv-cal/geno-pheno-mapping15.js"

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
