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
"https://porterturkeys.com/Geno-Pheno-Mapping/Aub.BarBla.BarCh.js",
"https://porterturkeys.com/Geno-Pheno-Mapping/BarSla.Bla.BWB.js",
"https://porterturkeys.com/Geno-Pheno-Mapping/BWN.BluCal.BluNar.BP.BRB.js",
"https://porterturkeys.com/Geno-Pheno-Mapping/BP.BRB.BluSG.js",
"https://porterturkeys.com/Geno-Pheno-Mapping/BluCorP.BourBuf.BR.js",
"https://porterturkeys.com/Geno-Pheno-Mapping/BN.Cal.ChesBuf.js",
"https://porterturkeys.com/Geno-Pheno-Mapping/BarSla-BR.js",
"https://porterturkeys.com/Geno-Pheno-Mapping/BN-ChRed.js",
"https://porterturkeys.com/Geno-Pheno-Mapping/CH-Dil.JB.js",
"https://porterturkeys.com/Geno-Pheno-Mapping/DilRustBla-FroOLavBlu.js",
"https://porterturkeys.com/Geno-Pheno-Mapping/GN-LavP.js",
"https://porterturkeys.com/Geno-Pheno-Mapping/LRBN-MCD.js",
"https://porterturkeys.com/Geno-Pheno-Mapping/MDRBla-PT.js",
"https://porterturkeys.com/Geno-Pheno-Mapping/Misc-pn.js",
"https://porterturkeys.com/Geno-Pheno-Mapping/RBlu-RS.js",
"https://porterturkeys.com/Geno-Pheno-Mapping/RdAub-RF.js",
"https://porterturkeys.com/Geno-Pheno-Mapping/RdRS-RBla.js",
"https://porterturkeys.com/Geno-Pheno-Mapping/RustBro-RustSla.js",
"https://porterturkeys.com/Geno-Pheno-Mapping/SBF-TriPP.js",
"https://porterturkeys.com/Geno-Pheno-Mapping/Misc.js",
"https://porterturkeys.com/Geno-Pheno-Mapping/cmVar.js",
"https://porterturkeys.com/Geno-Pheno-Mapping/cm-notCompleted.js"


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
