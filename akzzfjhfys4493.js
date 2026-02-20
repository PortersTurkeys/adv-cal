const scripts = [
   

"https://portersturkeys.github.io/adv-cal/geno-pheno-mapping7A.js",  

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
