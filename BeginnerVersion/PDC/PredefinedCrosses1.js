 // Auburn, Barred Black, BWB
const predefinedCrosses1 = [
//AUBURN CROSSES, not complete yet
{ sire: 'Auburn', dam: 'Auburn', results: { male: ['Auburn'], maleGenotype: ['bb ee'], maleRatio: [50], female: ['Auburn'], femaleGenotype: ['bb e-'], femaleRatio: [50] } },

{ sire: 'Auburn', dam: 'Barred Black', results: { male: ['Barred Black', 'Bronze'], maleGenotype: ['Bb Ee', 'bb Ee'], maleRatio: [25, 25], female: ['Barred Chocolate', 'Auburn'], femaleGenotype: ['Bb e-', 'bb e-'], femaleRatio: [25, 25] } },

{ sire: 'Auburn', dam: 'Barred Black Tuxedo', results: { male: ['Barred Black', 'Bronze'], maleGenotype: ['Bb Ccm Ee', 'bb Ccm Ee'], maleRatio: [25, 25], female: ['Barred Chocolate', 'Auburn'], femaleGenotype: ['Bb Ccm e-', 'bb Ccm e-'], femaleRatio: [25, 25] } },

{ sire: 'Auburn', dam: 'Barred Chocolate', results: { male: ['Barred Chocolate', 'Auburn'], maleGenotype: ['Bb ee', 'bb ee'], maleRatio: [25, 25], female: ['Barred Chocolate', 'Auburn'], femaleGenotype: ['Bb e-', 'bb e-'], femaleRatio: [25, 25] } },

{ sire: 'Auburn', dam: 'Barred Chocolate Tuxedo', results: { male: ['Barred Chocolate', 'Auburn'], maleGenotype: ['Bb Ccm ee', 'bb Ccm ee'], maleRatio: [25, 25], female: ['Barred Chocolate', 'Auburn'], femaleGenotype: ['Bb Ccm e-', 'bb Ccm e-'], femaleRatio: [25, 25] } },

{ sire: 'Auburn', dam: 'Barred Slate', results: { male: ['Barred Slate', 'Barred Black', 'Red Slate', 'Bronze'], maleGenotype: ['Bb Dd Ee', 'Bb Ee', 'bb Dd Ee', 'bb Ee'], maleRatio: [12.5, 12.5, 12.5, 12.5], female: ['Barred Chocolate Slate', 'Barred Chocolate', 'Chocolate Red Slate', 'Auburn'], femaleGenotype: ['Bb Dd e-', 'Bb e-', 'bb Dd e-', 'bb e-'], femaleRatio: [12.5, 12.5, 12.5, 12.5] } },

{ sire: 'Auburn', dam: 'Black', results: { male: ['Barred Black'], maleGenotype: ['Bb Ee'], maleRatio: [50], female: ['Barred Chocolate'], femaleGenotype: ['Bb e-'], femaleRatio: [50] } },

{ sire: 'Auburn', dam: 'Black Tuxedo', results: { male: ['Barred Black'], maleGenotype: ['Bb Ccm Ee'], maleRatio: [50], female: ['Barred Chocolate'], femaleGenotype: ['Bb Ccm e-'], femaleRatio: [50] } },

{ sire: 'Auburn', dam: 'Black Winged Bronze', results: { male: ['Bronze'], maleGenotype: ['bb1 Ee'], maleRatio: [50], female: ['Auburn'], femaleGenotype: ['bb1 e-'], femaleRatio: [50] } },

{ sire: 'Auburn', dam: 'Black Winged Narragansett', results: { male: ['Bronze'], maleGenotype: ['bb1 Ee Nn'], maleRatio: [50], female: ['Auburn'], femaleGenotype: ['bb1 e-'], femaleRatio: [50] } },

{ sire: 'Auburn', dam: 'Bronze', results: { male: ['Bronze'], maleGenotype: ['bb Ee'], maleRatio: [50], female: ['Auburn'], femaleGenotype: ['bb e-'], femaleRatio: [50] } },

{ sire: 'Auburn', dam: 'Blue Narragansett', results: { male: ['Red Slate', 'Bronze'], maleGenotype: ['bb Dd Ee Nn', 'bb Ee Nn'], maleRatio: [25, 25], female: ['Chocolate Red Slate', 'Auburn'], femaleGenotype: ['bb Dd e-', 'bb e-'], femaleRatio: [25, 25] } },

{ sire: 'Auburn', dam: 'Blue Palm', results: { male: ['Red Slate', 'Bronze-'], maleGenotype: ['bb1 Ccg Dd Ee Nn', 'bb1 Ccg Ee Nn'], maleRatio: [25, 25], female: ['Chocolate Red Slate', 'Auburn'], femaleGenotype: ['bb1 Ccg Dd e-', 'bb1 Ccg e-'], femaleRatio: [25, 25] } },

{ sire: 'Auburn', dam: 'Blue Red Bronze', results: { male: ['Red Slate', 'Blue Red Bronze', 'Bronze', 'Red Bronze'], maleGenotype: ['bb Dd Ee', 'bb Dd Ee Rr', 'bb Ee', 'bb Ee Rr'], maleRatio: [12.5, 12.5, 12.5, 12.5], female: ['Chocolate Red Slate', 'Chocolate Blue Red Bronze', 'Auburn', 'Red Auburn'], femaleGenotype: ['bb Dd e-', 'bb Dd e- Rr', 'bb e-', 'bb e- Rr'], femaleRatio: [12.5, 12.5, 12.5, 12.5] } },

{ sire: 'Auburn', dam: 'Blue Sweetgrass', results: { male: ['Red Slate', 'Bronze-'], maleGenotype: ['bb1 Ccg Dd Ee', 'bb1 Ccg Ee'], maleRatio: [25, 25], female: ['Chocolate Red Slate', 'Auburn'], femaleGenotype: ['bb1 Ccg Dd e-', 'bb1 Ccg e-'], femaleRatio: [25, 25] } },

{ sire: 'Auburn', dam: 'Blue Cornish Palm', results: { male: ['Red Slate', 'Bronze', 'Red Slate', 'Bronze-'], maleGenotype: ['bb1 Dd Ee', 'bb1 Ee', 'bb1 Ccg Dd Ee', 'bb1 Ccg Ee'], maleRatio: [12.5, 12.5, 12.5, 12.5], female: ['Chocolate Red Slate', 'Auburn', 'Chocolate Red Slate', 'Auburn'], femaleGenotype: ['bb1 Dd e-', 'bb1 e-', 'bb1 Ccg Dd e-', 'bb1 Ccg e-'], femaleRatio: [12.5, 12.5, 12.5, 12.5] } },

{ sire: 'Auburn', dam: 'Bourbon Buff', results: { male: ['Red Bronze'], maleGenotype: ['bb Ee Nn Rr'], maleRatio: [50], female: ['Red Auburn'], femaleGenotype: ['bb e- Rr'], femaleRatio: [50] } },

{ sire: 'Auburn', dam: 'Bourbon Red', results: { male: ['Red Bronze'], maleGenotype: ['bb Ee Rr'], maleRatio: [50], female: ['Red Auburn'], femaleGenotype: ['bb e- Rr'], femaleRatio: [50] } },

{ sire: 'Auburn', dam: 'Chestnut Buff', results: { male: ['Red Bronze', 'Red Bronze', 'Red Bronze', 'Red Bronze'], maleGenotype: ['bb Ee Nn Rr', 'bb Ccg Ee Nn Rr', 'bb1 Ee Nn Rr', 'bb1 Ccg Ee Nn Rr'], maleRatio: [12.5, 12.5, 12.5, 12.5], female: ['Red Auburn', 'Red Auburn', 'Red Auburn', 'Red Auburn'], femaleGenotype: ['bb e- Rr', 'bb Ccg e- Rr', 'bb1 e- Rr', 'bb1 Ccg e- Rr'], femaleRatio: [12.5, 12.5, 12.5, 12.5] } },

{ sire: 'Auburn', dam: 'Blue Calico', results: { male: ['Red Slate', 'Blue Red Bronze', 'Bronze-', 'Red Bronze-'], maleGenotype: ['bb1 Ccg Dd Ee Nn', 'bb1 Ccg Dd Ee Nn Rr', 'bb1 Ccg Ee Nn', 'bb1 Ccg Ee Nn Rr'], maleRatio: [12.5, 12.5, 12.5, 12.5], female: ['Chocolate Red Slate', 'Chocolate Blue Red Bronze', 'Auburn', 'Red Auburn'], femaleGenotype: ['bb1 Ccg Dd e-', 'bb1 Ccg Dd e- Rr', 'bb1 Ccg e-', 'bb1 Ccg e- Rr'], femaleRatio: [12.5, 12.5, 12.5, 12.5] } },

{ sire: 'Auburn', dam: 'Calico', results: { male: ['Bronze-', 'Red Bronze-'], maleGenotype: ['bb1 Ccg Ee Nn', 'bb1 Ccg Ee Nn Rr'], maleRatio: [25, 25], female: ['Auburn-', 'Red Auburn-'], femaleGenotype: ['bb1 Ccg e-', 'bb1 Ccg e- Rr'], femaleRatio: [25, 25] } },

{ sire: 'Auburn', dam: 'Chestnut Red', results: { male: ['Red Bronze', 'Red Bronze'], maleGenotype: ['bb Ee Rr', 'bb1 Ee Rr'], maleRatio: [25, 25], female: ['Red Auburn', 'Red Auburn'], femaleGenotype: ['bb e- Rr', 'bb1 e- Rr'], femaleRatio: [25, 25] } },

{ sire: 'Auburn', dam: 'Chocolate', results: { male: ['Barred Chocolate'], maleGenotype: ['Bb ee'], maleRatio: [50], female: ['Barred Chocolate'], femaleGenotype: ['Bb e-'], femaleRatio: [50] } },

{ sire: 'Auburn', dam: 'Chocolate Dapple', results: { male: ['Barred Chocolate', 'Auburn'], maleGenotype: ['Bb Ccg ee Nn', 'Bb Cc ee Nn', 'bb Ccg ee Nn', 'bb Cc ee Nn'], maleRatio: [12.5, 12.5, 12.5, 12.5], female: ['Barred Chocolate', 'Auburn'], femaleGenotype: ['Bb Ccg e-', 'Bb Cc e-', 'bb Ccg e-', 'bb Cc e-'], femaleRatio: [12.5, 12.5, 12.5, 12.5] } },

{ sire: 'Auburn', dam: 'Chocolate Painted (Split Black Winged Bronze)', results: { male: ['Barred Chocolate', 'Barred Chocolate', 'Auburn', 'Auburn'], maleGenotype: ['Bb Ccm ee', 'Bb Cc ee', 'bb1 Ccm ee', 'bb1 Cc ee'], maleRatio: [12.5, 12.5, 12.5, 12.5], female: ['Barred Chocolate', 'Barred Chocolate', 'Auburn', 'Auburn'], femaleGenotype: ['Bb Ccm e-', 'Bb Cc e-', 'bb1 Ccm e-', 'bb1 Cc e-'], femaleRatio: [12.5, 12.5, 12.5, 12.5] } },

{ sire: 'Auburn', dam: 'Chocolate Painted (Split Bronze)', results: { male: ['Barred Chocolate', 'Barred Chocolate', 'Auburn', 'Auburn'], maleGenotype: ['Bb Ccm ee', 'Bb Cc ee', 'bb Ccm ee', 'bb Cc ee'], maleRatio: [12.5, 12.5, 12.5, 12.5], female: ['Barred Chocolate', 'Barred Chocolate', 'Auburn', 'Auburn'], femaleGenotype: ['Bb Ccm e-', 'Bb Cc e-', 'bb Ccm e-', 'bb Cc e-'], femaleRatio: [12.5, 12.5, 12.5, 12.5] } },

{ sire: 'Auburn', dam: 'Chocolate Palm', results: { male: ['Auburn'], maleGenotype: ['bb1 Ccg ee Nn'], maleRatio: [50], female: ['Auburn'], femaleGenotype: ['bb1 Ccg e-'], femaleRatio: [50] } },

{ sire: 'Auburn', dam: 'Chocolate Slate', results: { male: ['Barred Chocolate Slate', 'Barred Chocolate'], maleGenotype: ['Bb Dd ee', 'Bb ee'], maleRatio: [25, 25], female: ['Barred Chocolate Slate', 'Barred Chocolate'], femaleGenotype: ['Bb Dd e-', 'Bb e-'], femaleRatio: [25, 25] } },

{ sire: 'Auburn', dam: 'Chocolate Sweetgrass', results: { male: ['Auburn'], maleGenotype: ['bb1 Ccg ee'], maleRatio: [50], female: ['Auburn'], femaleGenotype: ['bb1 Ccg e-'], femaleRatio: [50] } },

{ sire: 'Auburn', dam: 'Chocolate Tuxedo', results: { male: ['Barred Chocolate'], maleGenotype: ['Bb Ccm ee'], maleRatio: [50], female: ['Barred Chocolate'], femaleGenotype: ['Bb Ccm e-'], femaleRatio: [50] } },

{ sire: 'Auburn', dam: 'Cornish Palm', results: { male: ['Bronze.', 'Bronze-'], maleGenotype: ['bb1 Ee', 'bb1 Ccg Ee'], maleRatio: [25, 25], female: ['Auburn', 'Auburn'], femaleGenotype: ['bb1 e-', 'bb1 Ccg e-'], femaleRatio: [25, 25] } },

{ sire: 'Auburn', dam: 'Dark Blue', results: { male: ['Red Slate', 'Bronze'], maleGenotype: ['bb Ccg Dd Ee Nn', 'bb Ccg Ee Nn'], maleRatio: [25, 25], female: ['Chocolate Red Slate', 'Auburn'], femaleGenotype: ['bb Ccg Dd e-', 'bb Ccg e-'], femaleRatio: [25, 25] } },

{ sire: 'Auburn', dam: 'Dark Gray', results: { male: ['Bronze'], maleGenotype: ['bb Ccg Ee Nn'], maleRatio: [50], female: ['Auburn'], femaleGenotype: ['bb Ccg e-'], femaleRatio: [50] } },

{ sire: 'Auburn', dam: 'Dilute Rusty Black', results: { male: ['Barred Black', 'Rusty Black', 'Bronze', 'Red Bronze'], maleGenotype: ['Bb Ee Nn', 'Bb Ee Nn Rr', 'bb Ee Nn', 'bb Ee Nn Rr'], maleRatio: [12.5, 12.5, 12.5, 12.5], female: ['Barred Chocolate', 'Rusty Brown', 'Auburn', 'Red Auburn'], femaleGenotype: ['Bb e-', 'Bb e- Rr', 'bb e-', 'bb e- Rr'], femaleRatio: [12.5, 12.5, 12.5, 12.5] } },

{ sire: 'Auburn', dam: 'Fall Fire', results: { male: ['Bronze-', 'Red Bronze-'], maleGenotype: ['bb1 Ccg Ee', 'bb1 Ccg Ee Rr'], maleRatio: [25, 25], female: ['Auburn-', 'Red Auburn-'], femaleGenotype: ['bb1 Ccg e-', 'bb1 Ccg e- Rr'], femaleRatio: [25, 25] } },

{ sire: 'Auburn', dam: 'Frosted Dark Gray', results: { male: ['Bronze', 'Red Bronze'], maleGenotype: ['bb Ccg Ee Nn', 'bb Ccg Ee Nn Rr'], maleRatio: [25, 25], female: ['Auburn', 'Red Auburn'], femaleGenotype: ['bb Ccg e-', 'bb Ccg e- Rr'], femaleRatio: [25, 25] } },
  
{ sire: 'Auburn', dam: 'Frosted Oregon Gray', results: { male: ['Bronze', 'Red Bronze', 'Bronze', 'Red Bronze'], maleGenotype: ['bb Ccg Ee Nn', 'bb Ccg Ee Nn Rr', 'bb Cc Ee Nn', 'bb Cc Ee Nn Rr'], maleRatio: [12.5, 12.5, 12.5, 12.5], female: ['Auburn', 'Red Auburn', 'Auburn', 'Red Auburn'], femaleGenotype: ['bb Ccg e-', 'bb Ccg e- Rr', 'bb Cc e-', 'bb Cc e- Rr'], femaleRatio: [12.5, 12.5, 12.5, 12.5] } },

{ sire: 'Auburn', dam: 'Golden Narragansett', results: { male: ['Bronze', 'Red Bronze'], maleGenotype: ['bb Ee Nn', 'bb Ee Nn Rr'], maleRatio: [25, 25], female: ['Auburn', 'Red Auburn'], femaleGenotype: ['bb e-', 'bb e- Rr'], femaleRatio: [25, 25] } },

{ sire: 'Auburn', dam: 'Golden Phoenix', results: { male: ['Bronze.', 'Red Bronze.', 'Bronze-', 'Red Bronze-'], maleGenotype: ['bb1 Ee Nn', 'bb1 Ee Nn Rr', 'bb1 Ccg Ee Nn', 'bb1 Ccg Ee Nn Rr'], maleRatio: [12.5, 12.5, 12.5, 12.5], female: ['Auburn', 'Red Auburn', 'Auburn-', 'Red Auburn-'], femaleGenotype: ['bb1 e-', 'bb1 e- Rr', 'bb1 Ccg e-', 'bb1 Ccg e- Rr'], femaleRatio: [12.5, 12.5, 12.5, 12.5] } },

{ sire: 'Auburn', dam: 'Grizzled Black Painted', results: { male: ['Barred Black', 'Barred Black'], maleGenotype: ['Bb Ccm Ee', 'Bb Cc Ee'], maleRatio: [25, 25], female: ['Barred Chocolate', 'Barred Chocolate'], femaleGenotype: ['Bb Ccm e-', 'Bb Cc e-'], femaleRatio: [25, 25] } },

{ sire: 'Auburn', dam: 'Grizzled Chocolate Painted', results: { male: ['Barred Chocolate', 'Barred Chocolate'], maleGenotype: ['Bb Ccm ee', 'Bb Cc ee'], maleRatio: [25, 25], female: ['Barred Chocolate', 'Barred Chocolate'], femaleGenotype: ['Bb Ccm e-', 'Bb Cc e-'], femaleRatio: [25, 25] } },

{ sire: 'Auburn', dam: 'Grizzled Slate Painted', results: { male: ['Barred Slate', 'Barred Black', 'Barred Slate', 'Barred Black'], maleGenotype: ['Bb Ccm Dd Ee', 'Bb Ccm Ee', 'Bb Cc Dd Ee', 'Bb Cc Ee'], maleRatio: [12.5, 12.5, 12.5, 12.5], female: ['Barred Chocolate Slate', 'Barred Chocolate', 'Barred Chocolate Slate', 'Barred Chocolate'], femaleGenotype: ['Bb Ccm Dd e-', 'Bb Ccm e-', 'Bb Cc Dd e-', 'Bb Cc e-'], femaleRatio: [12.5, 12.5, 12.5, 12.5] } },

{ sire: 'Auburn', dam: 'Grizzled Lavender Painted', results: { male: ['Barred Slate', 'Barred Slate'], maleGenotype: ['Bb Ccm Dd Ee', 'Bb Cc Dd Ee'], maleRatio: [25, 25], female: ['Barred Chocolate Slate', 'Barred Chocolate Slate'], femaleGenotype: ['Bb Ccm Dd e-', 'Bb Cc Dd e-'], femaleRatio: [25, 25] } },

{ sire: 'Auburn', dam: 'Grizzled Recessive Blue Painted', results: { male: ['Barred Black', 'Barred Black'], maleGenotype: ['Bb Ccm Ee Slsl', 'Bb Cc Ee Slsl'], maleRatio: [25, 25], female: ['Barred Chocolate', 'Barred Chocolate'], femaleGenotype: ['Bb Ccm e- Slsl', 'Bb Cc e- Slsl'], femaleRatio: [25, 25] } },

{ sire: 'Auburn', dam: 'Harvest Gold', results: { male: ['Bronze.', 'Red Bronze.'], maleGenotype: ['bb1 Ee', 'bb1 Ee Rr'], maleRatio: [25, 25], female: ['Auburn', 'Red Auburn'], femaleGenotype: ['bb1 e-', 'bb1 e- Rr'], femaleRatio: [25, 25] } },

  
{ sire: 'Auburn', dam: 'Jersey Buff', results: { male: ['Rusty Black'], maleGenotype: ['Bb Ee Rr'], maleRatio: [50], female: ['Rusty Brown'], femaleGenotype: ['Bb e- Rr'], femaleRatio: [50] } },

{ sire: 'Auburn', dam: 'Lavender', results: { male: ['Barred Slate'], maleGenotype: ['Bb Dd Ee'], maleRatio: [50], female: ['Barred Chocolate Slate'], femaleGenotype: ['Bb Dd e-'], femaleRatio: [50] } },

{ sire: 'Auburn', dam: 'Lavender Fall Fire', results: { male: ['Red Slate', 'Blue Red Bronze.'], maleGenotype: ['bb1 Ccg Dd Ee', 'bb1 Ccg Dd Ee Rr'], maleRatio: [25, 25], female: ['Chocolate Red Slate', 'Chocolate Blue Red Bronze'], femaleGenotype: ['bb1 Ccg Dd e-', 'bb1 Ccg Dd e- Rr'], femaleRatio: [25, 25] } },

{ sire: 'Auburn', dam: 'Lavender Palm', results: { male: ['Red Slate'], maleGenotype: ['bb1 Ccg Dd Ee Nn'], maleRatio: [50], female: ['Chocolate Red Slate'], femaleGenotype: ['bb1 Ccg Dd e-'], femaleRatio: [50] } },

  
  { sire: 'Auburn', dam: 'Lavender Red Bronze', results: { male: ['Red Slate', 'Blue Red Bronze'], maleGenotype: ['bb Dd Ee', 'bb Dd Ee Rr'], maleRatio: [25, 25], female: ['Chocolate Red Slate', 'Chocolate Blue Red Bronze'], femaleGenotype: ['bb Dd e-', 'bb Dd e- Rr'], femaleRatio: [25, 25] } },
  
{ sire: 'Auburn', dam: 'Lavender Sweetgrass', results: { male: ['Red Slate'], maleGenotype: ['bb1 Ccg Dd Ee'], maleRatio: [50], female: ['Chocolate Red Slate'], femaleGenotype: ['bb1 Ccg Dd e-'], femaleRatio: [50] } },

{ sire: 'Auburn', dam: 'Light Buff', results: { male: ['Red Bronze.'], maleGenotype: ['bb1 Ee Nn Rr'], maleRatio: [50], female: ['Red Auburn'], femaleGenotype: ['bb1 e- Rr'], femaleRatio: [50] } },

{ sire: 'Auburn', dam: 'Light Red', results: { male: ['Red Bronze.', 'Red Bronze-'], maleGenotype: ['bb1 Ee Rr', 'bb1 Ccg Ee Rr'], maleRatio: [25, 25], female: ['Red Auburn'], femaleGenotype: ['bb1 e- Rr', 'bb1 Ccg e- Rr'], femaleRatio: [25, 25] } },

{ sire: 'Auburn', dam: 'Lilac', results: { male: ['Red Slate'], maleGenotype: ['bb Dd Ee'], maleRatio: [50], female: ['Chocolate Red Slate'], femaleGenotype: ['bb Dd e-'], femaleRatio: [50] } },

{ sire: 'Auburn', dam: 'Marbled Black', results: { male: ['Barred Black'], maleGenotype: ['Bb Ccg Ee Nn'], maleRatio: [50], female: ['Barred Chocolate'], femaleGenotype: ['Bb Ccg e-'], femaleRatio: [50] } },

{ sire: 'Auburn', dam: 'Marbled Slate', results: { male: ['Barred Slate', 'Barred Black'], maleGenotype: ['Bb Ccg Dd Ee Nn', 'Bb Ccg Ee Nn'], maleRatio: [25, 25], female: ['Barred Chocolate Slate', 'Barred Chocolate'], femaleGenotype: ['Bb Ccg Dd e-', 'Bb Ccg e-'], femaleRatio: [25, 25] } },

{ sire: 'Auburn', dam: 'Mottled Auburn', results: { male: ['Auburn'], maleGenotype: ['bb Ccm ee'], maleRatio: [50], female: ['Auburn'], femaleGenotype: ['bb Ccm e-'], femaleRatio: [50] } },

{ sire: 'Auburn', dam: 'Mottled Black', results: { male: ['Barred Black', 'Bronze-'], maleGenotype: ['Bb Ccg Ee Nn', 'bb1 Ccg Ee Nn'], maleRatio: [25, 25], female: ['Barred Chocolate', 'Auburn'], femaleGenotype: ['Bb Ccg e-', 'bb1 Ccg e-'], femaleRatio: [25, 25] } },

{ sire: 'Auburn', dam: 'Mottled Black Tuxedo', results: { male: ['Barred Black', 'Bronze.'], maleGenotype: ['Bb Ccm Ee', 'bb1 Ccm Ee'], maleRatio: [25, 25], female: ['Barred Chocolate', 'Auburn'], femaleGenotype: ['Bb Ccm e-', 'bb1 Ccm e-'], femaleRatio: [25, 25] } },

  { sire: 'Auburn', dam: 'Mottled Black Winged Bronze', results: { male: ['Bronze.'], maleGenotype: ['bb1 Ccm Ee'], maleRatio: [50], female: ['Auburn'], femaleGenotype: ['bb1 Ccm e-'], femaleRatio: [50] } },
  
{ sire: 'Auburn', dam: 'Mottled Bronze', results: { male: ['Bronze'], maleGenotype: ['bb Ccm Ee'], maleRatio: [50], female: ['Auburn'], femaleGenotype: ['bb Ccm e-'], femaleRatio: [50] } },

{ sire: 'Auburn', dam: 'Mottled Brown Winged Auburn', results: { male: ['Auburn'], maleGenotype: ['bb1 Ccm ee'], maleRatio: [50], female: ['Auburn'], femaleGenotype: ['bb1 Ccm e-'], femaleRatio: [50] } },

{ sire: 'Auburn', dam: 'Mottled Chocolate', results: { male: ['Barred Chocolate', 'Auburn'], maleGenotype: ['Bb Ccg ee Nn', 'bb1 Ccg ee Nn'], maleRatio: [25, 25], female: ['Barred Chocolate', 'Auburn'], femaleGenotype: ['Bb Ccg e-', 'bb1 Ccg e-'], femaleRatio: [25, 25] } },

{ sire: 'Auburn', dam: 'Mottled Lavender', results: { male: ['Barred Slate', 'Red Slate'], maleGenotype: ['Bb Ccg Dd Ee Nn', 'bb1 Ccg Dd Ee Nn'], maleRatio: [25, 25], female: ['Barred Chocolate Slate', 'Chocolate Red Slate'], femaleGenotype: ['Bb Ccg Dd e-', 'bb1 Ccg Dd e-'], femaleRatio: [25, 25] } },

{ sire: 'Auburn', dam: 'Mottled Red Bronze', results: { male: ['Bronze', 'Red Bronze'], maleGenotype: ['bb Ccm Ee', 'bb Ccm Ee Rr'], maleRatio: [25, 25], female: ['Auburn', 'Red Auburn'], femaleGenotype: ['bb Ccm e-', 'bb Ccm e- Rr'], femaleRatio: [25, 25] } },

  { sire: 'Auburn', dam: 'Mottled Rusty Black', results: { male: ['Barred Black', 'Rusty Black', 'Bronze-', 'Red Bronze-'], maleGenotype: ['Bb Ccg Ee', 'Bb Ccg Ee Rr', 'bb1 Ccg Ee', 'bb1 Ccg Ee Rr'], maleRatio: [12.5, 12.5, 12.5, 12.5], female: ['Barred Chocolate', 'Rusty Brown', 'Auburn', 'Red Auburn'], femaleGenotype: ['Bb Ccg e-', 'Bb Ccg e- Rr', 'bb1 Ccg e-', 'bb1 Ccg e- Rr'], femaleRatio: [12.5, 12.5, 12.5, 12.5] } },
  
{ sire: 'Auburn', dam: 'Mottled Rusty Slate', results: { male: ['Barred Slate', 'Rusty Slate', 'Barred Black', 'Rusty Black', 'Red Slate', 'Blue Red Bronze.', 'Bronze-', 'Red Bronze-'], maleGenotype: ['Bb Ccg Dd Ee', 'Bb Ccg Dd Ee Rr', 'Bb Ccg Ee', 'Bb Ccg Ee Rr', 'bb1 Ccg Dd Ee', 'bb1 Ccg Dd Ee Rr', 'bb1 Ccg Ee', 'bb1 Ccg Ee Rr'], maleRatio: [6.25, 6.25, 6.25, 6.25, 6.25, 6.25, 6.25, 6.25], female: ['Barred Chocolate Slate', 'Rusty Brown Slate', 'Barred Chocolate', 'Rusty Brown', 'Chocolate Red Slate', 'Chocolate Blue Red Bronze', 'Auburn', 'Red Auburn'], femaleGenotype: ['Bb Ccg Dd e-', 'Bb Ccg Dd e- Rr', 'Bb Ccg e-', 'Bb Ccg e- Rr', 'bb1 Ccg Dd e-', 'bb1 Ccg Dd e- Rr', 'bb1 Ccg e-', 'bb1 Ccg e- Rr'], femaleRatio: [6.25, 6.25, 6.25, 6.25, 6.25, 6.25, 6.25, 6.25] } },

{ sire: 'Auburn', dam: 'Mottled Silver Dapple', results: { male: ['Barred Black', 'Bronze-', 'Bronze.'], maleGenotype: ['Bb Ccg Ee Nn', 'Bb Cc Ee Nn', 'bb1 Ccg Ee Nn', 'bb1 Cc Ee Nn'], maleRatio: [12.5, 12.5, 12.5, 12.5], female: ['Barred Chocolate', 'Auburn'], femaleGenotype: ['Bb Ccg e-', 'Bb Cc e-', 'bb1 Ccg e-', 'bb1 Cc e-'], femaleRatio: [12.5, 12.5, 12.5, 12.5] } },

{ sire: 'Auburn', dam: 'Narragansett', results: { male: ['Bronze'], maleGenotype: ['bb Ee Nn'], maleRatio: [50], female: ['Auburn'], femaleGenotype: ['bb e-'], femaleRatio: [50] } },

{ sire: 'Auburn', dam: 'Oregon Blue', results: { male: ['Red Slate', 'Bronze'], maleGenotype: ['bb Ccg Dd Ee Nn', 'bb Ccg Ee Nn', 'bb Cc Dd Ee Nn', 'bb Cc Ee Nn'], maleRatio: [12.5, 12.5, 12.5, 12.5], female: ['Chocolate Red Slate', 'Auburn'], femaleGenotype: ['bb Ccg Dd e-', 'bb Ccg e-', 'bb Cc Dd e-', 'bb Cc e-'], femaleRatio: [12.5, 12.5, 12.5, 12.5] } },

{ sire: 'Auburn', dam: 'Oregon Brown', results: { male: ['Auburn', 'Auburn'], maleGenotype: ['bb Ccg ee Nn', 'bb Cc ee Nn'], maleRatio: [25, 25], female: ['Auburn', 'Auburn'], femaleGenotype: ['bb Ccg e-', 'bb Cc e-'], femaleRatio: [25, 25] } },

{ sire: 'Auburn', dam: 'Oregon Gray', results: { male: ['Bronze', 'Bronze'], maleGenotype: ['bb Ccg Ee Nn', 'bb Cc Ee Nn'], maleRatio: [25, 25], female: ['Auburn', 'Auburn'], femaleGenotype: ['bb Ccg e-', 'bb Cc e-'], femaleRatio: [25, 25] } },



  
  
  
  
{ sire: 'Auburn', dam: 'Slate Painted (Split Bronze)', results: { male: ['Barred Slate', 'Barred Black', 'Barred Slate', 'Barred Black', 'Red Slate', 'Bronze', 'Red Slate', 'Bronze'], maleGenotype: ['Bb Ccm Dd Ee', 'Bb Ccm Ee', 'Bb Cc Dd Ee', 'Bb Cc Ee', 'bb Ccm Dd Ee', 'bb Ccm Ee', 'bb Cc Dd Ee', 'bb Cc Ee'], maleRatio: [6.25, 6.25, 6.25, 6.25, 6.25, 6.25, 6.25, 6.25], female: ['Barred Chocolate Slate', 'Barred Chocolate', 'Barred Chocolate Slate', 'Barred Chocolate', 'Chocolate Red Slate', 'Auburn', 'Chocolate Red Slate', 'Auburn'], femaleGenotype: ['Bb Ccm Dd e-', 'Bb Ccm e-', 'Bb Cc Dd e-', 'Bb Cc e-', 'bb Ccm Dd e-', 'bb Ccm e-', 'bb Cc Dd e-', 'bb Cc e-'], femaleRatio: [6.25, 6.25, 6.25, 6.25, 6.25, 6.25, 6.25, 6.25] } },
  
{ sire: 'Auburn', dam: 'Slate Tuxedo', results: { male: ['Barred Slate', 'Barred Black'], maleGenotype: ['Bb Ccm Dd Ee', 'Bb Ccm Ee'], maleRatio: [25, 25], female: ['Barred Chocolate Slate', 'Barred Chocolate'], femaleGenotype: ['Bb Ccm Dd e-', 'Bb Ccm e-'], femaleRatio: [25, 25] } },
  
  
  
  // BARRED BLACK CROSSES, not complete yet
{ sire: 'Barred Black', dam: 'Auburn', results: { male: ['Barred Black', 'Bronze'], maleGenotype: ['Bb Ee', 'bb Ee'], maleRatio: [1, 1], female: ['Barred Black', 'Bronze'], femaleGenotype: ['Bb', 'bb'], femaleRatio: [1, 1] } },

{ sire: 'Barred Black', dam: 'Barred Black', results: { male: ['Black', 'Barred Black', 'Bronze'], maleGenotype: ['BB', 'Bb', 'bb'], maleRatio: [1, 2, 1], female: ['Black', 'Barred Black', 'Bronze'], femaleGenotype: ['BB', 'Bb', 'bb'], femaleRatio: [1, 2, 1] } },

{ sire: 'Barred Black', dam: 'Barred Chocolate', results: { male: ['Black', 'Barred Black', 'Bronze'], maleGenotype: ['BB Ee', 'Bb Ee', 'bb Ee'], maleRatio: [1, 2, 1], female: ['Black', 'Barred Black', 'Bronze'], femaleGenotype: ['BB', 'Bb', 'bb'], femaleRatio: [1, 2, 1] } },

{ sire: 'Barred Black', dam: 'Barred Slate', results: { male: ['Slate', 'Black', 'Barred Slate', 'Barred Black', 'Red Slate', 'Bronze'], maleGenotype: ['BB Dd', 'BB', 'Bb Dd', 'Bb', 'bb Dd', 'bb'], maleRatio: [1, 1, 2, 2, 1, 1], female: ['Slate', 'Black', 'Barred Slate', 'Barred Black', 'Red Slate', 'Bronze'], femaleGenotype: ['BB Dd', 'BB', 'Bb Dd', 'Bb', 'bb Dd', 'bb'], femaleRatio: [1, 1, 2, 2, 1, 1] } },

{ sire: 'Barred Black', dam: 'Black', results: { male: ['Black', 'Barred Black'], maleGenotype: ['BB', 'Bb'], maleRatio: [1, 1], female: ['Black', 'Barred Black'], femaleGenotype: ['BB', 'Bb'], femaleRatio: [1, 1] } },

{ sire: 'Barred Black', dam: 'Black Winged Bronze', results: { male: ['Barred Black', 'Bronze.'], maleGenotype: ['Bb1', 'bb1'], maleRatio: [1, 1], female: ['Barred Black', 'Bronze.'], femaleGenotype: ['Bb1', 'bb1'], femaleRatio: [1, 1] } },

{ sire: 'Barred Black', dam: 'Blue Calico', results: { male: ['Tri-color Mottled Slate', 'Mottled Rusty Slate', 'Tri-color Mottled Black', 'Mottled Rusty Black', 'Red Slate', 'Blue Red Bronze.', 'Bronze-', 'Red Bronze.'], maleGenotype: ['Bb1 Ccg Dd Nn', 'Bb1 Ccg Dd Nn Rr', 'Bb1 Ccg Nn', 'Bb1 Ccg Nn Rr', 'bb1 Ccg Dd Nn', 'bb1 Ccg Dd Nn Rr', 'bb1 Ccg Nn', 'bb1 Ccg Nn Rr'], maleRatio: [1, 1, 1, 1, 1, 1, 1, 1], female: ['Tri-color Mottled Slate', 'Mottled Rusty Slate', 'Tri-color Mottled Black', 'Mottled Rusty Black', 'Red Slate', 'Blue Red Bronze.', 'Bronze-', 'Red Bronze.'], femaleGenotype: ['Bb1 Ccg Dd', 'Bb1 Ccg Dd Rr', 'Bb1 Ccg', 'Bb1 Ccg Rr', 'bb1 Ccg Dd', 'bb1 Ccg Dd Rr', 'bb1 Ccg', 'bb1 Ccg Rr'], femaleRatio: [1, 1, 1, 1, 1, 1, 1, 1] } },

{ sire: 'Barred Black', dam: 'Blue Fall Fire', results: { male: ['Tri-color Mottled Slate', 'Mottled Rusty Slate', 'Tri-color Mottled Black', 'Mottled Rusty Black', 'Red Slate', 'Blue Red Bronze.', 'Bronze-', 'Red Bronze-'], maleGenotype: ['Bb1 Ccg Dd', 'Bb1 Ccg Dd Rr', 'Bb1 Ccg', 'Bb1 Ccg Rr', 'bb1 Ccg Dd', 'bb1 Ccg Dd Rr', 'bb1 Ccg', 'bb1 Ccg Rr'], maleRatio: [6.25, 6.25, 6.25, 6.25, 6.25, 6.25, 6.25, 6.25], female: ['Tri-color Mottled Slate', 'Mottled Rusty Slate', 'Tri-color Mottled Black', 'Mottled Rusty Black', 'Red Slate', 'Blue Red Bronze.', 'Bronze-', 'Red Bronze-'], femaleGenotype: ['Bb1 Ccg Dd', 'Bb1 Ccg Dd Rr', 'Bb1 Ccg', 'Bb1 Ccg Rr', 'bb1 Ccg Dd', 'bb1 Ccg Dd Rr', 'bb1 Ccg', 'bb1 Ccg Rr'], femaleRatio: [6.25, 6.25, 6.25, 6.25, 6.25, 6.25, 6.25, 6.25] } },

{ sire: 'Barred Black', dam: 'Blue Narragansett', results: { male: ['Barred Slate', 'Barred Black', 'Red Slate', 'Bronze'], maleGenotype: ['Bb Dd Nn', 'Bb Nn', 'bb Dd Nn', 'bb Nn'], maleRatio: [1, 1, 1, 1], female: ['Barred Slate', 'Barred Black', 'Red Slate', 'Bronze'], femaleGenotype: ['Bb Dd', 'Bb', 'bb Dd', 'bb'], femaleRatio: [1, 1, 1, 1] } },

{ sire: 'Barred Black', dam: 'Blue Palm', results: { male: ['Tri-color Mottled Slate', 'Tri-color Mottled Black', 'Red Slate', 'Bronze-'], maleGenotype: ['Bb1 Ccg Dd Nn', 'Bb1 Ccg Nn', 'bb1 Ccg Dd Nn', 'bb1 Ccg Nn'], maleRatio: [1, 1, 1, 1], female: ['Tri-color Mottled Slate', 'Tri-color Mottled Black', 'Red Slate', 'Bronze-'], femaleGenotype: ['Bb1 Ccg Dd', 'Bb1 Ccg', 'bb1 Ccg Dd', 'bb1 Ccg'], femaleRatio: [1, 1, 1, 1] } },

{ sire: 'Barred Black', dam: 'Blue Red Bronze', results: { male: ['Barred Slate', 'Rusty Slate', 'Barred Black', 'Rusty Black', 'Red Slate', 'Blue Red Bronze', 'Bronze', 'Red Bronze'], maleGenotype: ['Bb Dd', 'Bb Dd Rr', 'Bb', 'Bb Rr', 'bb Dd', 'bb Dd Rr', 'bb', 'bb Rr'], maleRatio: [1, 1, 1, 1, 1, 1, 1, 1], female: ['Barred Slate', 'Rusty Slate', 'Barred Black', 'Rusty Black', 'Red Slate', 'Blue Red Bronze', 'Bronze', 'Red Bronze'], femaleGenotype: ['Bb Dd', 'Bb Dd Rr', 'Bb', 'Bb Rr', 'bb Dd', 'bb Dd Rr', 'bb', 'bb Rr'], femaleRatio: [1, 1, 1, 1, 1, 1, 1, 1] } },

{ sire: 'Barred Black', dam: 'Blue Sweetgrass', results: { male: ['Tri-color Mottled Slate', 'Tri-color Mottled Black', 'Red Slate', 'Bronze-'], maleGenotype: ['Bb1 Ccg Dd', 'Bb1 Ccg', 'bb1 Ccg Dd', 'bb1 Ccg'], maleRatio: [1, 1, 1, 1], female: ['Tri-color Mottled Slate', 'Tri-color Mottled Black', 'Red Slate', 'Bronze-'], femaleGenotype: ['Bb1 Ccg Dd', 'Bb1 Ccg', 'bb1 Ccg Dd', 'bb1 Ccg'], femaleRatio: [1, 1, 1, 1] } },

{ sire: 'Barred Black', dam: 'Bourbon Buff', results: { male: ['Rusty Black', 'Red Bronze'], maleGenotype: ['Bb Nn Rr', 'bb Nn Rr'], maleRatio: [1, 1], female: ['Rusty Black', 'Red Bronze'], femaleGenotype: ['Bb Rr', 'bb Rr'], femaleRatio: [1, 1] } },

{ sire: 'Barred Black', dam: 'Bourbon Red', results: { male: ['Rusty Black', 'Red Bronze'], maleGenotype: ['Bb Rr', 'bb Rr'], maleRatio: [1, 1], female: ['Rusty Black', 'Red Bronze'], femaleGenotype: ['Bb Rr', 'bb Rr'], femaleRatio: [1, 1] } },

{ sire: 'Barred Black', dam: 'Bronze', results: { male: ['Barred Black', 'Bronze'], maleGenotype: ['Bb', 'bb'], maleRatio: [1, 1], female: ['Barred Black', 'Bronze'], femaleGenotype: ['Bb', 'bb'], femaleRatio: [1, 1] } },

{ sire: 'Barred Black', dam: 'Calico', results: { male: ['Tri-color Mottled Black', 'Mottled Rusty Black', 'Bronze-', 'Red Bronze.'], maleGenotype: ['Bb1 Ccg Nn', 'Bb1 Ccg Nn Rr', 'bb1 Ccg Nn', 'bb1 Ccg Nn Rr'], maleRatio: [1, 1, 1, 1], female: ['Tri-color Mottled Black', 'Mottled Rusty Black', 'Bronze-', 'Red Bronze.'], femaleGenotype: ['Bb1 Ccg', 'Bb1 Ccg Rr', 'bb1 Ccg', 'bb1 Ccg Rr'], femaleRatio: [1, 1, 1, 1] } },

{ sire: 'Barred Black', dam: 'Chestnut Buff', results: { male: ['Rusty Black', 'Rusty Black', 'Red Bronze', 'Red Bronze.'], maleGenotype: ['Bb Nn Rr', 'Bb1 Nn Rr', 'bb Nn Rr', 'bb1 Nn Rr'], maleRatio: [12.5, 12.5, 12.5, 12.5], female: ['Rusty Black', 'Rusty Black', 'Red Bronze', 'Red Bronze.'], femaleGenotype: ['Bb Rr', 'Bb1 Rr', 'bb Rr', 'bb1 Rr'], femaleRatio: [12.5, 12.5, 12.5, 12.5] } },

{ sire: 'Barred Black', dam: 'Chestnut Red', results: { male: ['Rusty Black', 'Red Bronze'], maleGenotype: ['Bb Rr', 'Bb1 Rr', 'bb Rr', 'bb1 Rr'], maleRatio: [1, 1, 1, 1], female: ['Rusty Black', 'Red Bronze'], femaleGenotype: ['Bb Rr', 'Bb1 Rr', 'bb Rr', 'bb1 Rr'], femaleRatio: [1, 1, 1, 1] } },

{ sire: 'Barred Black', dam: 'Chocolate', results: { male: ['Black', 'Barred Black'], maleGenotype: ['BB Ee', 'Bb Ee'], maleRatio: [1, 1], female: ['Black', 'Barred Black'], femaleGenotype: ['BB', 'Bb'], femaleRatio: [1, 1] } },

{ sire: 'Barred Black', dam: 'Chocolate Dapple', results: { male: ['Black', 'Black', 'Barred Black', 'Barred Black', 'Bronze', 'Bronze'], maleGenotype: ['BB Ccg Ee Nn', 'BB Cc Ee Nn', 'Bb Ccg Ee Nn', 'Bb Cc Ee Nn', 'bb Ccg Ee Nn', 'bb Cc Ee Nn'], maleRatio: [1, 1, 2, 2, 1, 1], female: ['Black', 'Black', 'Barred Black', 'Barred Black', 'Bronze', 'Bronze'], femaleGenotype: ['BB Ccg', 'BB Cc', 'Bb Ccg', 'Bb Cc', 'bb Ccg', 'bb Cc'], femaleRatio: [1, 1, 2, 2, 1, 1] } },

{ sire: 'Barred Black', dam: 'Chocolate Fawn', results: { male: ['Barred Black', 'Barred Black', 'Bronze', 'Bronze'], maleGenotype: ['Bb Ccm Ee', 'Bb Cc Ee', 'bb Ccm Ee', 'bb Cc Ee'], maleRatio: [12.5, 12.5, 12.5, 12.5], female: ['Barred Black', 'Barred Black', 'Bronze', 'Bronze'], femaleGenotype: ['Bb Ccm', 'Bb Cc', 'bb Ccm', 'bb Cc'], femaleRatio: [12.5, 12.5, 12.5, 12.5] } },

{ sire: 'Barred Black', dam: 'Chocolate Painted (Split Black Winged Bronze)', results: { male: ['Black', 'Black', 'Barred Black', 'Barred Black', 'Barred Black', 'Barred Black', 'Bronze.', 'Bronze.'], maleGenotype: ['BB Ccm Ee', 'BB Cc Ee', 'Bb Ccm Ee', 'Bb Cc Ee', 'Bb1 Ccm Ee', 'Bb1 Cc Ee', 'bb1 Ccm Ee', 'bb1 Cc Ee'], maleRatio: [6.25, 6.25, 6.25, 6.25, 6.25, 6.25, 6.25, 6.25], female: ['Black', 'Black', 'Barred Black', 'Barred Black', 'Barred Black', 'Barred Black', 'Bronze.', 'Bronze.'], femaleGenotype: ['BB Ccm', 'BB Cc', 'Bb Ccm', 'Bb Cc', 'Bb1 Ccm', 'Bb1 Cc', 'bb1 Ccm', 'bb1 Cc'], femaleRatio: [6.25, 6.25, 6.25, 6.25, 6.25, 6.25, 6.25, 6.25] } },

{ sire: 'Barred Black', dam: 'Chocolate Painted (Split Bronze)', results: { male: ['Black', 'Black', 'Barred Black', 'Barred Black', 'Bronze', 'Bronze'], maleGenotype: ['BB Ccm Ee', 'BB Cc Ee', 'Bb Ccm Ee', 'Bb Cc Ee', 'bb Ccm Ee', 'bb Cc Ee'], maleRatio: [1, 1, 2, 2, 1, 1], female: ['Black', 'Black', 'Barred Black', 'Barred Black', 'Bronze', 'Bronze'], femaleGenotype: ['BB Ccm', 'BB Cc', 'Bb Ccm', 'Bb Cc', 'bb Ccm', 'bb Cc'], femaleRatio: [1, 1, 2, 2, 1, 1] } },

{ sire: 'Barred Black', dam: 'Chocolate Palm', results: { male: ['Tri-color Mottled Black', 'Bronze-'], maleGenotype: ['Bb1 Ccg Ee Nn', 'bb1 Ccg Ee Nn'], maleRatio: [1, 1], female: ['Tri-color Mottled Black', 'Bronze-'], femaleGenotype: ['Bb1 Ccg', 'bb1 Ccg'], femaleRatio: [1, 1] } },

{ sire: 'Barred Black', dam: 'Chocolate Slate', results: { male: ['Slate', 'Black', 'Barred Slate', 'Barred Black'], maleGenotype: ['BB Dd Ee', 'BB Ee', 'Bb Dd Ee', 'Bb Ee'], maleRatio: [1, 1, 1, 1], female: ['Slate', 'Black', 'Barred Slate', 'Barred Black'], femaleGenotype: ['BB Dd', 'BB', 'Bb Dd', 'Bb'], femaleRatio: [1, 1, 1, 1] } },

{ sire: 'Barred Black', dam: 'Chocolate Sweetgrass', results: { male: ['Tri-color Mottled Black', 'Bronze-'], maleGenotype: ['Bb1 Ccg Ee', 'bb1 Ccg Ee'], maleRatio: [1, 1], female: ['Tri-color Mottled Black', 'Bronze-'], femaleGenotype: ['Bb1 Ccg', 'bb1 Ccg'], femaleRatio: [1, 1] } },

{ sire: 'Barred Black', dam: 'Chocolate Tuxedo', results: { male: ['Black', 'Barred Black'], maleGenotype: ['BB Ccm Ee', 'Bb Ccm Ee'], maleRatio: [1, 1], female: ['Black', 'Barred Black'], femaleGenotype: ['BB Ccm', 'Bb Ccm'], femaleRatio: [1, 1] } },

{ sire: 'Barred Black', dam: 'Cornish Palm', results: { male: ['Barred Black', 'Tri-color Mottled Black', 'Bronze.', 'Bronze-'], maleGenotype: ['Bb1', 'Bb1 Ccg', 'bb1', 'bb1 Ccg'], maleRatio: [1, 1, 1, 1], female: ['Barred Black', 'Tri-color Mottled Black', 'Bronze.', 'Bronze-'], femaleGenotype: ['Bb1', 'Bb1 Ccg', 'bb1', 'bb1 Ccg'], femaleRatio: [1, 1, 1, 1] } },

{ sire: 'Barred Black', dam: 'Dark Blue', results: { male: ['Barred Slate', 'Barred Black', 'Red Slate', 'Bronze'], maleGenotype: ['Bb Ccg Dd Nn', 'Bb Ccg Nn', 'bb Ccg Dd Nn', 'bb Ccg Nn'], maleRatio: [1, 1, 1, 1], female: ['Barred Slate', 'Barred Black', 'Red Slate', 'Bronze'], femaleGenotype: ['Bb Ccg Dd', 'Bb Ccg', 'bb Ccg Dd', 'bb Ccg'], femaleRatio: [1, 1, 1, 1] } },

{ sire: 'Barred Black', dam: 'Dark Gray', results: { male: ['Barred Black', 'Bronze'], maleGenotype: ['Bb Ccg Nn', 'bb Ccg Nn'], maleRatio: [1, 1], female: ['Barred Black', 'Bronze'], femaleGenotype: ['Bb Ccg', 'bb Ccg'], femaleRatio: [1, 1] } },

{ sire: 'Barred Black', dam: 'Dilute Rusty Black', results: { male: ['Black', 'Rusty Black.', 'Barred Black', 'Rusty Black', 'Bronze', 'Red Bronze'], maleGenotype: ['BB Nn', 'BB Nn Rr', 'Bb Nn', 'Bb Nn Rr', 'bb Nn', 'bb Nn Rr'], maleRatio: [1, 1, 2, 2, 1, 1], female: ['Black', 'Rusty Black.', 'Barred Black', 'Rusty Black', 'Bronze', 'Red Bronze'], femaleGenotype: ['BB', 'BB Rr', 'Bb', 'Bb Rr', 'bb', 'bb Rr'], femaleRatio: [1, 1, 2, 2, 1, 1] } },

{ sire: 'Barred Black', dam: 'Dilute Rusty Slate', results: { male: ['Slate', 'Rusty Slate', 'Black', 'Rusty Black.', 'Barred Slate', 'Rusty Slate', 'Barred Black', 'Rusty Black', 'Red Slate', 'Blue Red Bronze', 'Bronze', 'Red Bronze'], maleGenotype: ['BB Dd Nn', 'BB Dd Nn Rr', 'BB Nn', 'BB Nn Rr', 'Bb Dd Nn', 'Bb Dd Nn Rr', 'Bb Nn', 'Bb Nn Rr', 'bb Dd Nn', 'bb Dd Nn Rr', 'bb Nn', 'bb Nn Rr'], maleRatio: [3.125, 3.125, 3.125, 3.125, 6.25, 6.25, 6.25, 6.25, 3.125, 3.125, 3.125, 3.125], female: ['Slate', 'Rusty Slate', 'Black', 'Rusty Black.', 'Barred Slate', 'Rusty Slate', 'Barred Black', 'Rusty Black', 'Red Slate', 'Blue Red Bronze', 'Bronze', 'Red Bronze'], femaleGenotype: ['BB Dd', 'BB Dd Rr', 'BB', 'BB Rr', 'Bb Dd', 'Bb Dd Rr', 'Bb', 'Bb Rr', 'bb Dd', 'bb Dd Rr', 'bb', 'bb Rr'], femaleRatio: [3.125, 3.125, 3.125, 3.125, 6.25, 6.25, 6.25, 6.25, 3.125, 3.125, 3.125, 3.125] } },

{ sire: 'Barred Black', dam: 'Fall Fire', results: { male: ['Tri-color Mottled Black', 'Mottled Rusty Black', 'Bronze-', 'Red Bronze.'], maleGenotype: ['Bb1 Ccg', 'Bb1 Ccg Rr', 'bb1 Ccg', 'bb1 Ccg Rr'], maleRatio: [1, 1, 1, 1], female: ['Tri-color Mottled Black', 'Mottled Rusty Black', 'Bronze-', 'Red Bronze.'], femaleGenotype: ['Bb1 Ccg', 'Bb1 Ccg Rr', 'bb1 Ccg', 'bb1 Ccg Rr'], femaleRatio: [1, 1, 1, 1] } },

{ sire: 'Barred Black', dam: 'Fawn', results: { male: ['Barred Black', 'Barred Black', 'Bronze', 'Bronze'], maleGenotype: ['Bb Ccm', 'Bb Cc', 'bb Ccm', 'bb Cc'], maleRatio: [12.5, 12.5, 12.5, 12.5], female: ['Barred Black', 'Barred Black', 'Bronze', 'Bronze'], femaleGenotype: ['Bb Ccm', 'Bb Cc', 'bb Ccm', 'bb Cc'], femaleRatio: [12.5, 12.5, 12.5, 12.5] } },

{ sire: 'Barred Black', dam: 'Frosted Dark Gray', results: { male: ['Barred Black', 'Rusty Black', 'Bronze', 'Red Bronze'], maleGenotype: ['Bb Ccg Nn', 'Bb Ccg Nn Rr', 'bb Ccg Nn', 'bb Ccg Nn Rr'], maleRatio: [12.5, 12.5, 12.5, 12.5], female: ['Barred Black', 'Rusty Black', 'Bronze', 'Red Bronze'], femaleGenotype: ['Bb Ccg', 'Bb Ccg Rr', 'bb Ccg', 'bb Ccg Rr'], femaleRatio: [12.5, 12.5, 12.5, 12.5] } },

{ sire: 'Barred Black', dam: 'Frosted Oregon Blue', results: { male: ['Barred Slate', 'Rusty Slate', 'Barred Black', 'Rusty Black', 'Barred Slate', 'Rusty Slate', 'Barred Black', 'Rusty Black', 'Red Slate', 'Blue Red Bronze', 'Bronze', 'Red Bronze', 'Red Slate', 'Blue Red Bronze', 'Bronze', 'Red Bronze'], maleGenotype: ['Bb Ccg Dd Nn', 'Bb Ccg Dd Nn Rr', 'Bb Ccg Nn', 'Bb Ccg Nn Rr', 'Bb Cc Dd Nn', 'Bb Cc Dd Nn Rr', 'Bb Cc Nn', 'Bb Cc Nn Rr', 'bb Ccg Dd Nn', 'bb Ccg Dd Nn Rr', 'bb Ccg Nn', 'bb Ccg Nn Rr', 'bb Cc Dd Nn', 'bb Cc Dd Nn Rr', 'bb Cc Nn', 'bb Cc Nn Rr'], maleRatio: [3.125, 3.125, 3.125, 3.125, 3.125, 3.125, 3.125, 3.125, 3.125, 3.125, 3.125, 3.125, 3.125, 3.125, 3.125, 3.125], female: ['Barred Slate', 'Rusty Slate', 'Barred Black', 'Rusty Black', 'Barred Slate', 'Rusty Slate', 'Barred Black', 'Rusty Black', 'Red Slate', 'Blue Red Bronze', 'Bronze', 'Red Bronze', 'Red Slate', 'Blue Red Bronze', 'Bronze', 'Red Bronze'], femaleGenotype: ['Bb Ccg Dd', 'Bb Ccg Dd Rr', 'Bb Ccg', 'Bb Ccg Rr', 'Bb Cc Dd', 'Bb Cc Dd Rr', 'Bb Cc', 'Bb Cc Rr', 'bb Ccg Dd', 'bb Ccg Dd Rr', 'bb Ccg', 'bb Ccg Rr', 'bb Cc Dd', 'bb Cc Dd Rr', 'bb Cc', 'bb Cc Rr'], femaleRatio: [3.125, 3.125, 3.125, 3.125, 3.125, 3.125, 3.125, 3.125, 3.125, 3.125, 3.125, 3.125, 3.125, 3.125, 3.125, 3.125] } },

{ sire: 'Barred Black', dam: 'Frosted Oregon Gray', results: { male: ['Barred Black', 'Rusty Black', 'Barred Black', 'Rusty Black', 'Bronze', 'Red Bronze', 'Bronze', 'Red Bronze'], maleGenotype: ['Bb Ccg Nn', 'Bb Ccg Nn Rr', 'Bb Cc Nn', 'Bb Cc Nn Rr', 'bb Ccg Nn', 'bb Ccg Nn Rr', 'bb Cc Nn', 'bb Cc Nn Rr'], maleRatio: [6.25, 6.25, 6.25, 6.25, 6.25, 6.25, 6.25, 6.25], female: ['Barred Black', 'Rusty Black', 'Barred Black', 'Rusty Black', 'Bronze', 'Red Bronze', 'Bronze', 'Red Bronze'], femaleGenotype: ['Bb Ccg', 'Bb Ccg Rr', 'Bb Cc', 'Bb Cc Rr', 'bb Ccg', 'bb Ccg Rr', 'bb Cc', 'bb Cc Rr'], femaleRatio: [6.25, 6.25, 6.25, 6.25, 6.25, 6.25, 6.25, 6.25] } },

{ sire: 'Barred Black', dam: 'Golden Narragansett', results: { male: ['Barred Black', 'Rusty Black', 'Bronze', 'Red Bronze'], maleGenotype: ['Bb Nn', 'Bb Nn Rr', 'bb Nn', 'bb Nn Rr'], maleRatio: [1, 1, 1, 1], female: ['Barred Black', 'Rusty Black', 'Bronze', 'Red Bronze'], femaleGenotype: ['Bb', 'Bb Rr', 'bb', 'bb Rr'], femaleRatio: [1, 1, 1, 1] } },

{ sire: 'Barred Black', dam: 'Golden Phoenix', results: { male: ['Barred Black', 'Rusty Black', 'Tri-color Mottled Black', 'Mottled Rusty Black', 'Bronze.', 'Red Bronze.', 'Bronze-', 'Red Bronze-'], maleGenotype: ['Bb1 Nn', 'Bb1 Nn Rr', 'Bb1 Ccg Nn', 'Bb1 Ccg Nn Rr', 'bb1 Nn', 'bb1 Nn Rr', 'bb1 Ccg Nn', 'bb1 Ccg Nn Rr'], maleRatio: [6.25, 6.25, 6.25, 6.25, 6.25, 6.25, 6.25, 6.25], female: ['Barred Black', 'Rusty Black', 'Tri-color Mottled Black', 'Mottled Rusty Black', 'Bronze.', 'Red Bronze.', 'Bronze-', 'Red Bronze-'], femaleGenotype: ['Bb1', 'Bb1 Rr', 'Bb1 Ccg', 'Bb1 Ccg Rr', 'bb1', 'bb1 Rr', 'bb1 Ccg', 'bb1 Ccg Rr'], femaleRatio: [6.25, 6.25, 6.25, 6.25, 6.25, 6.25, 6.25, 6.25] } },

{ sire: 'Barred Black', dam: 'Grizzled Black Painted', results: { male: ['Black', 'Black', 'Barred Black', 'Barred Black'], maleGenotype: ['BB Ccm', 'BB Cc', 'Bb Ccm', 'Bb Cc'], maleRatio: [1, 1, 1, 1], female: ['Black', 'Black', 'Barred Black', 'Barred Black'], femaleGenotype: ['BB Ccm', 'BB Cc', 'Bb Ccm', 'Bb Cc'], femaleRatio: [1, 1, 1, 1] } },

{ sire: 'Barred Black', dam: 'Grizzled Chocolate Painted', results: { male: ['Black', 'Black', 'Barred Black', 'Barred Black'], maleGenotype: ['BB Ccm Ee', 'BB Cc Ee', 'Bb Ccm Ee', 'Bb Cc Ee'], maleRatio: [12.5, 12.5, 12.5, 12.5], female: ['Black', 'Black', 'Barred Black', 'Barred Black'], femaleGenotype: ['BB Ccm', 'BB Cc', 'Bb Ccm', 'Bb Cc'], femaleRatio: [12.5, 12.5, 12.5, 12.5] } },

{ sire: 'Barred Black', dam: 'Grizzled Lavender Painted', results: { male: ['Slate', 'Slate', 'Barred Slate', 'Barred Slate'], maleGenotype: ['BB Ccm Dd', 'BB Cc Dd', 'Bb Ccm Dd', 'Bb Cc Dd'], maleRatio: [12.5, 12.5, 12.5, 12.5], female: ['Slate', 'Slate', 'Barred Slate', 'Barred Slate'], femaleGenotype: ['BB Ccm Dd', 'BB Cc Dd', 'Bb Ccm Dd', 'Bb Cc Dd'], femaleRatio: [12.5, 12.5, 12.5, 12.5] } },

{ sire: 'Barred Black', dam: 'Grizzled Recessive Blue Painted', results: { male: ['Black', 'Black', 'Barred Black', 'Barred Black'], maleGenotype: ['BB Ccm Slsl', 'BB Cc Slsl', 'Bb Ccm Slsl', 'Bb Cc Slsl'], maleRatio: [12.5, 12.5, 12.5, 12.5], female: ['Black', 'Black', 'Barred Black', 'Barred Black'], femaleGenotype: ['BB Ccm Slsl', 'BB Cc Slsl', 'Bb Ccm Slsl', 'Bb Cc Slsl'], femaleRatio: [12.5, 12.5, 12.5, 12.5] } },

{ sire: 'Barred Black', dam: 'Grizzled Rusty Painted', results: { male: ['Black', 'Rusty Black.', 'Black', 'Rusty Black.', 'Barred Black', 'Rusty Black', 'Barred Black', 'Rusty Black'], maleGenotype: ['BB Ccm', 'BB Ccm Rr', 'BB Cc', 'BB Cc Rr', 'Bb Ccm', 'Bb Ccm Rr', 'Bb Cc', 'Bb Cc Rr'], maleRatio: [6.25, 6.25, 6.25, 6.25, 6.25, 6.25, 6.25, 6.25], female: ['Black', 'Rusty Black.', 'Black', 'Rusty Black.', 'Barred Black', 'Rusty Black', 'Barred Black', 'Rusty Black'], femaleGenotype: ['BB Ccm', 'BB Ccm Rr', 'BB Cc', 'BB Cc Rr', 'Bb Ccm', 'Bb Ccm Rr', 'Bb Cc', 'Bb Cc Rr'], femaleRatio: [6.25, 6.25, 6.25, 6.25, 6.25, 6.25, 6.25, 6.25] } },

{ sire: 'Barred Black', dam: 'Grizzled Slate Painted', results: { male: ['Slate', 'Black', 'Slate', 'Black', 'Barred Slate', 'Barred Black', 'Barred Slate', 'Barred Black'], maleGenotype: ['BB Ccm Dd', 'BB Ccm', 'BB Cc Dd', 'BB Cc', 'Bb Ccm Dd', 'Bb Ccm', 'Bb Cc Dd', 'Bb Cc'], maleRatio: [6.25, 6.25, 6.25, 6.25, 6.25, 6.25, 6.25, 6.25], female: ['Slate', 'Black', 'Slate', 'Black', 'Barred Slate', 'Barred Black', 'Barred Slate', 'Barred Black'], femaleGenotype: ['BB Ccm Dd', 'BB Ccm', 'BB Cc Dd', 'BB Cc', 'Bb Ccm Dd', 'Bb Ccm', 'Bb Cc Dd', 'Bb Cc'], femaleRatio: [6.25, 6.25, 6.25, 6.25, 6.25, 6.25, 6.25, 6.25] } },

{ sire: 'Barred Black', dam: 'Harvest Gold', results: { male: ['Barred Black', 'Rusty Black', 'Bronze.', 'Red Bronze.'], maleGenotype: ['Bb1', 'Bb1 Rr', 'bb1', 'bb1 Rr'], maleRatio: [12.5, 12.5, 12.5, 12.5], female: ['Barred Black', 'Rusty Black', 'Bronze.', 'Red Bronze.'], femaleGenotype: ['Bb1', 'Bb1 Rr', 'bb1', 'bb1 Rr'], femaleRatio: [12.5, 12.5, 12.5, 12.5] } },

{ sire: 'Barred Black', dam: 'Jersey Buff', results: { male: ['Rusty Black.', 'Rusty Black'], maleGenotype: ['BB Rr', 'Bb Rr'], maleRatio: [25, 25], female: ['Rusty Black.', 'Rusty Black'], femaleGenotype: ['BB Rr', 'Bb Rr'], femaleRatio: [25, 25] } },

{ sire: 'Barred Black', dam: 'Lavender', results: { male: ['Slate', 'Barred Slate'], maleGenotype: ['BB Dd', 'Bb Dd'], maleRatio: [25, 25], female: ['Slate', 'Barred Slate'], femaleGenotype: ['BB Dd', 'Bb Dd'], femaleRatio: [25, 25] } },

{ sire: 'Barred Black', dam: 'Lavender Edged Bourbon Red', results: { male: ['Rusty Slate', 'Blue Red Bronze'], maleGenotype: ['Bb Dd Rr', 'bb Dd Rr'], maleRatio: [25, 25], female: ['Rusty Slate', 'Blue Red Bronze'], femaleGenotype: ['Bb Dd Rr', 'bb Dd Rr'], femaleRatio: [25, 25] } },

{ sire: 'Barred Black', dam: 'Lavender Fall Fire', results: { male: ['Tri-color Mottled Slate', 'Mottled Rusty Slate', 'Red Slate', 'Blue Red Bronze.'], maleGenotype: ['Bb1 Ccg Dd', 'Bb1 Ccg Dd Rr', 'bb1 Ccg Dd', 'bb1 Ccg Dd Rr'], maleRatio: [12.5, 12.5, 12.5, 12.5], female: ['Tri-color Mottled Slate', 'Mottled Rusty Slate', 'Red Slate', 'Blue Red Bronze.'], femaleGenotype: ['Bb1 Ccg Dd', 'Bb1 Ccg Dd Rr', 'bb1 Ccg Dd', 'bb1 Ccg Dd Rr'], femaleRatio: [12.5, 12.5, 12.5, 12.5] } },

{ sire: 'Barred Black', dam: 'Lavender Painted (Split Black Winged Bronze)', results: { male: ['Slate', 'Barred Slate', 'Barred Slate', 'Barred Slate', 'Barred Slate', 'Barred Slate', 'Red Slate', 'Red Slate'], maleGenotype: ['BB Ccm Dd', 'BB Cc Dd', 'Bb Ccm Dd', 'Bb Cc Dd', 'Bb1 Ccm Dd', 'Bb1 Cc Dd', 'bb1 Ccm Dd', 'bb1 Cc Dd'], maleRatio: [6.25, 6.25, 6.25, 6.25, 6.25, 6.25, 6.25, 6.25], female: ['Slate', 'Barred Slate', 'Barred Slate', 'Barred Slate', 'Barred Slate', 'Barred Slate', 'Red Slate', 'Red Slate'], femaleGenotype: ['BB Ccm Dd', 'BB Cc Dd', 'Bb Ccm Dd', 'Bb Cc Dd', 'Bb1 Ccm Dd', 'Bb1 Cc Dd', 'bb1 Ccm Dd', 'bb1 Cc Dd'], femaleRatio: [6.25, 6.25, 6.25, 6.25, 6.25, 6.25, 6.25, 6.25] } },

{ sire: 'Barred Black', dam: 'Lavender Painted (Split Bronze)', results: { male: ['Slate', 'Slate', 'Barred Slate', 'Barred Slate', 'Red Slate', 'Red Slate'], maleGenotype: ['BB Ccm Dd Pnpn', 'BB Cc Dd Pnpn', 'Bb Ccm Dd Pnpn', 'Bb Cc Dd Pnpn', 'bb Ccm Dd Pnpn', 'bb Cc Dd Pnpn'], maleRatio: [6.25, 6.25, 12.5, 12.5, 6.25, 6.25], female: ['Slate', 'Slate', 'Barred Slate', 'Barred Slate', 'Red Slate', 'Red Slate'], femaleGenotype: ['BB Ccm Dd Pnpn', 'BB Cc Dd Pnpn', 'Bb Ccm Dd Pnpn', 'Bb Cc Dd Pnpn', 'bb Ccm Dd Pnpn', 'bb Cc Dd Pnpn'], femaleRatio: [6.25, 6.25, 12.5, 12.5, 6.25, 6.25] } },


{ sire: 'Barred Black', dam: 'Lavender Palm', results: { male: ['Tri-color Mottled Slate', 'Red Slate'], maleGenotype: ['Bb1 Ccg Dd Nn', 'bb1 Ccg Dd Nn'], maleRatio: [25, 25], female: ['Tri-color Mottled Slate', 'Red Slate'], femaleGenotype: ['Bb1 Ccg Dd', 'bb1 Ccg Dd'], femaleRatio: [25, 25] } },

{ sire: 'Barred Black', dam: 'Lavender Red Bronze', results: { male: ['Barred Slate', 'Rusty Slate', 'Red Slate', 'Blue Red Bronze'], maleGenotype: ['Bb Dd', 'Bb Dd Rr', 'bb Dd', 'bb Dd Rr'], maleRatio: [12.5, 12.5, 12.5, 12.5], female: ['Barred Slate', 'Rusty Slate', 'Red Slate', 'Blue Red Bronze'], femaleGenotype: ['Bb Dd', 'Bb Dd Rr', 'bb Dd', 'bb Dd Rr'], femaleRatio: [12.5, 12.5, 12.5, 12.5] } },

{ sire: 'Barred Black', dam: 'Lavender Sweetgrass', results: { male: ['Tri-color Mottled Slate', 'Red Slate'], maleGenotype: ['Bb1 Ccg Dd', 'bb1 Ccg Dd'], maleRatio: [25, 25], female: ['Tri-color Mottled Slate', 'Red Slate'], femaleGenotype: ['Bb1 Ccg Dd', 'bb1 Ccg Dd'], femaleRatio: [25, 25] } },

{ sire: 'Barred Black', dam: 'Lavender Tuxedo', results: { male: ['Slate', 'Barred Slate'], maleGenotype: ['BB Ccm Dd', 'Bb Ccm Dd'], maleRatio: [25, 25], female: ['Slate', 'Barred Slate'], femaleGenotype: ['BB Ccm Dd', 'Bb Ccm Dd'], femaleRatio: [25, 25] } },

{ sire: 'Barred Black', dam: 'Light Buff', results: { male: ['Rusty Black', 'Red Bronze'], maleGenotype: ['Bb1 Nn Rr', 'bb1 Nn Rr'], maleRatio: [25, 25], female: ['Rusty Black', 'Red Bronze'], femaleGenotype: ['Bb1 Rr', 'bb1 Rr'], femaleRatio: [25, 25] } },

{ sire: 'Barred Black', dam: 'Light Red', results: { male: ['Rusty Black', 'Mottled Rusty Black', 'Red Bronze', 'Red Bronze-'], maleGenotype: ['Bb1 Rr', 'Bb1 Ccg Rr', 'bb1 Rr', 'bb1 Ccg Rr'], maleRatio: [12.5, 12.5, 12.5, 12.5], female: ['Rusty Black', 'Mottled Rusty Black', 'Red Bronze', 'Red Bronze-'], femaleGenotype: ['Bb1 Rr', 'Bb1 Ccg Rr', 'bb1 Rr', 'bb1 Ccg Rr'], femaleRatio: [12.5, 12.5, 12.5, 12.5] } },

{ sire: 'Barred Black', dam: 'Lilac', results: { male: ['Barred Slate', 'Red Slate'], maleGenotype: ['Bb Dd', 'bb Dd'], maleRatio: [25, 25], female: ['Barred Slate', 'Red Slate'], femaleGenotype: ['Bb Dd', 'bb Dd'], femaleRatio: [25, 25] } },

{ sire: 'Barred Black', dam: 'Marbled Black', results: { male: ['Black', 'Barred Black'], maleGenotype: ['BB Ccg Nn', 'Bb Ccg Nn'], maleRatio: [25, 25], female: ['Black', 'Barred Black'], femaleGenotype: ['BB Ccg', 'Bb Ccg'], femaleRatio: [25, 25] } },

{ sire: 'Barred Black', dam: 'Marbled Lavender', results: { male: ['Slate', 'Barred Slate'], maleGenotype: ['BB Ccg Dd Nn', 'Bb Ccg Dd Nn'], maleRatio: [25, 25], female: ['Slate', 'Barred Slate'], femaleGenotype: ['BB Ccg Dd', 'Bb Ccg Dd'], femaleRatio: [25, 25] } },

{ sire: 'Barred Black', dam: 'Mottled Recessive Blue Tuxedo', results: { male: ['Black', 'Barred Black', 'Barred Black', 'Bronze.'], maleGenotype: ['BB Ccm Slsl', 'Bb Ccm Slsl', 'Bb1 Ccm Slsl', 'bb1 Ccm Slsl'], maleRatio: [12.5, 12.5, 12.5, 12.5], female: ['Black', 'Barred Black', 'Barred Black', 'Bronze.'], femaleGenotype: ['BB Ccm Slsl', 'Bb Ccm Slsl', 'Bb1 Ccm Slsl', 'bb1 Ccm Slsl'], femaleRatio: [12.5, 12.5, 12.5, 12.5] } },

{ sire: 'Barred Black', dam: 'Marbled Slate', results: { male: ['Slate', 'Black', 'Barred Slate', 'Barred Black'], maleGenotype: ['BB Ccg Dd Nn', 'BB Ccg Nn', 'Bb Ccg Dd Nn', 'Bb Ccg Nn'], maleRatio: [12.5, 12.5, 12.5, 12.5], female: ['Slate', 'Black', 'Barred Slate', 'Barred Black'], femaleGenotype: ['BB Ccg Dd', 'BB Ccg', 'Bb Ccg Dd', 'Bb Ccg'], femaleRatio: [12.5, 12.5, 12.5, 12.5] } },

{ sire: 'Barred Black', dam: 'Mottled Auburn', results: { male: ['Barred Black', 'Bronze'], maleGenotype: ['Bb Ccm Ee', 'bb Ccm Ee'], maleRatio: [25, 25], female: ['Barred Black', 'Bronze'], femaleGenotype: ['Bb Ccm', 'bb Ccm'], femaleRatio: [25, 25] } },

{ sire: 'Barred Black', dam: 'Mottled Black', results: { male: ['Black', 'Barred Black', 'Tri-color Mottled Black', 'Bronze-'], maleGenotype: ['BB Ccg Nn', 'Bb Ccg Nn', 'Bb1 Ccg Nn', 'bb1 Ccg Nn'], maleRatio: [12.5, 12.5, 12.5, 12.5], female: ['Black', 'Barred Black', 'Tri-color Mottled Black', 'Bronze-'], femaleGenotype: ['BB Ccg', 'Bb Ccg', 'Bb1 Ccg', 'bb1 Ccg'], femaleRatio: [12.5, 12.5, 12.5, 12.5] } },

{ sire: 'Barred Black', dam: 'Mottled Black Tuxedo', results: { male: ['Black', 'Barred Black', 'Barred Black', 'Bronze.'], maleGenotype: ['BB Ccm', 'Bb Ccm', 'Bb1 Ccm', 'bb1 Ccm'], maleRatio: [12.5, 12.5, 12.5, 12.5], female: ['Black', 'Barred Black', 'Barred Black', 'Bronze.'], femaleGenotype: ['BB Ccm', 'Bb Ccm', 'Bb1 Ccm', 'bb1 Ccm'], femaleRatio: [12.5, 12.5, 12.5, 12.5] } },

{ sire: 'Barred Black', dam: 'Mottled Black Winged Bronze', results: { male: ['Barred Black', 'Bronze.'], maleGenotype: ['Bb1 Ccm', 'bb1 Ccm'], maleRatio: [25, 25], female: ['Barred Black', 'Bronze.'], femaleGenotype: ['Bb1 Ccm', 'bb1 Ccm'], femaleRatio: [25, 25] } },

{ sire: 'Barred Black', dam: 'Mottled Bronze', results: { male: ['Barred Black', 'Bronze'], maleGenotype: ['Bb Ccm', 'bb Ccm'], maleRatio: [25, 25], female: ['Barred Black', 'Bronze'], femaleGenotype: ['Bb Ccm', 'bb Ccm'], femaleRatio: [25, 25] } },

{ sire: 'Barred Black', dam: 'Mottled Brown Winged Auburn', results: { male: ['Barred Black', 'Bronze.'], maleGenotype: ['Bb1 Ccm Ee', 'bb1 Ccm Ee'], maleRatio: [25, 25], female: ['Barred Black', 'Bronze.'], femaleGenotype: ['Bb1 Ccm', 'bb1 Ccm'], femaleRatio: [25, 25] } },

{ sire: 'Barred Black', dam: 'Mottled Chocolate', results: { male: ['Black', 'Barred Black', 'Tri-color Mottled Black', 'Bronze-'], maleGenotype: ['BB Ccg Ee Nn', 'Bb Ccg Ee Nn', 'Bb1 Ccg Ee Nn', 'bb1 Ccg Ee Nn'], maleRatio: [12.5, 12.5, 12.5, 12.5], female: ['Black', 'Barred Black', 'Tri-color Mottled Black', 'Bronze-'], femaleGenotype: ['BB Ccg', 'Bb Ccg', 'Bb1 Ccg', 'bb1 Ccg'], femaleRatio: [12.5, 12.5, 12.5, 12.5] } },

{ sire: 'Barred Black', dam: 'Mottled Chocolate Dapple', results: { male: ['Black', 'Black', 'Barred Black', 'Barred Black', 'Tri-color Mottled Black', 'Barred Black', 'Bronze-', 'Bronze.'], maleGenotype: ['BB Ccg Ee Nn', 'BB Cc Ee Nn', 'Bb Ccg Ee Nn', 'Bb Cc Ee Nn', 'Bb1 Ccg Ee Nn', 'Bb1 Cc Ee Nn', 'bb1 Ccg Ee Nn', 'bb1 Cc Ee Nn'], maleRatio: [6.25, 6.25, 6.25, 6.25, 6.25, 6.25, 6.25, 6.25], female: ['Black', 'Black', 'Barred Black', 'Barred Black', 'Tri-color Mottled Black', 'Barred Black', 'Bronze-', 'Bronze.'], femaleGenotype: ['BB Ccg', 'BB Cc', 'Bb Ccg', 'Bb Cc', 'Bb1 Ccg', 'Bb1 Cc', 'bb1 Ccg', 'bb1 Cc'], femaleRatio: [6.25, 6.25, 6.25, 6.25, 6.25, 6.25, 6.25, 6.25] } },

{ sire: 'Barred Black', dam: 'Mottled Dilute Rusty Brown', results: { male: ['Black', 'Rusty Black.', 'Barred Black', 'Rusty Black', 'Tri-color Mottled Black', 'Mottled Rusty Black', 'Bronze-', 'Red Bronze-'], maleGenotype: ['BB Ccg Ee Nn', 'BB Ccg Ee Nn Rr', 'Bb Ccg Ee Nn', 'Bb Ccg Ee Nn Rr', 'Bb1 Ccg Ee Nn', 'Bb1 Ccg Ee Nn Rr', 'bb1 Ccg Ee Nn', 'bb1 Ccg Ee Nn Rr'], maleRatio: [6.25, 6.25, 6.25, 6.25, 6.25, 6.25, 6.25, 6.25], female: ['Black', 'Rusty Black.', 'Barred Black', 'Rusty Black', 'Tri-color Mottled Black', 'Mottled Rusty Black', 'Bronze-', 'Red Bronze-'], femaleGenotype: ['BB Ccg', 'BB Ccg Rr', 'Bb Ccg', 'Bb Ccg Rr', 'Bb1 Ccg', 'Bb1 Ccg Rr', 'bb1 Ccg', 'bb1 Ccg Rr'], femaleRatio: [6.25, 6.25, 6.25, 6.25, 6.25, 6.25, 6.25, 6.25] } },

{ sire: 'Barred Black', dam: 'Mottled Lavender', results: { male: ['Slate', 'Barred Slate', 'Tri-color Mottled Slate', 'Red Slate'], maleGenotype: ['BB Ccg Dd Nn', 'Bb Ccg Dd Nn', 'Bb1 Ccg Dd Nn', 'bb1 Ccg Dd Nn'], maleRatio: [12.5, 12.5, 12.5, 12.5], female: ['Slate', 'Barred Slate', 'Tri-color Mottled Slate', 'Red Slate'], femaleGenotype: ['BB Ccg Dd', 'Bb Ccg Dd', 'Bb1 Ccg Dd', 'bb1 Ccg Dd'], femaleRatio: [12.5, 12.5, 12.5, 12.5] } },

{ sire: 'Barred Black', dam: 'Mottled Recessive Slate', results: { male: ['Barred Black', 'Bronze'], maleGenotype: ['Bb Ccm Slsl', 'bb Ccm Slsl'], maleRatio: [25, 25], female: ['Barred Black', 'Bronze'], femaleGenotype: ['Bb Ccm Slsl', 'bb Ccm Slsl'], femaleRatio: [25, 25] } },

{ sire: 'Barred Black', dam: 'Mottled Red', results: { male: ['Rusty Black', 'Red Bronze'], maleGenotype: ['Bb Ccm Rr', 'bb Ccm Rr'], maleRatio: [25, 25], female: ['Rusty Black', 'Red Bronze'], femaleGenotype: ['Bb Ccm Rr', 'bb Ccm Rr'], femaleRatio: [25, 25] } },

{ sire: 'Barred Black', dam: 'Mottled Red Bronze', results: { male: ['Barred Black', 'Rusty Black', 'Bronze', 'Red Bronze'], maleGenotype: ['Bb Ccm', 'Bb Ccm Rr', 'bb Ccm', 'bb Ccm Rr'], maleRatio: [12.5, 12.5, 12.5, 12.5], female: ['Barred Black', 'Rusty Black', 'Bronze', 'Red Bronze'], femaleGenotype: ['Bb Ccm', 'Bb Ccm Rr', 'bb Ccm', 'bb Ccm Rr'], femaleRatio: [12.5, 12.5, 12.5, 12.5] } },

{ sire: 'Barred Black', dam: 'Mottled Rusty Black', results: { male: ['Black', 'Rusty Black', 'Barred Black', 'Rusty Black', 'Tri-color Mottled Black', 'Mottled Rusty Black', 'Bronze-', 'Red Bronze-'], maleGenotype: ['BB Ccg', 'BB Ccg Rr', 'Bb Ccg', 'Bb Ccg Rr', 'Bb1 Ccg', 'Bb1 Ccg Rr', 'bb1 Ccg', 'bb1 Ccg Rr'], maleRatio: [6.25, 6.25, 6.25, 6.25, 6.25, 6.25, 6.25, 6.25], female: ['Black', 'Rusty Black', 'Barred Black', 'Rusty Black', 'Tri-color Mottled Black', 'Mottled Rusty Black', 'Bronze-', 'Red Bronze-'], femaleGenotype: ['BB Ccg', 'BB Ccg Rr', 'Bb Ccg', 'Bb Ccg Rr', 'Bb1 Ccg', 'Bb1 Ccg Rr', 'bb1 Ccg', 'bb1 Ccg Rr'], femaleRatio: [6.25, 6.25, 6.25, 6.25, 6.25, 6.25, 6.25, 6.25] } },

{ sire: 'Barred Black', dam: 'Mottled Rusty Slate', results: { male: ['Slate', 'Rusty Slate', 'Black', 'Rusty Black.', 'Barred Slate', 'Rusty Slate', 'Barred Black', 'Rusty Black', 'Tri-color Mottled Slate', 'Mottled Rusty Slate', 'Tri-color Mottled Black', 'Mottled Rusty Black', 'Red Slate', 'Blue Red Bronze.', 'Bronze-', 'Red Bronze-'], maleGenotype: ['BB Ccg Dd', 'BB Ccg Dd Rr', 'BB Ccg', 'BB Ccg Rr', 'Bb Ccg Dd', 'Bb Ccg Dd Rr', 'Bb Ccg', 'Bb Ccg Rr', 'Bb1 Ccg Dd', 'Bb1 Ccg Dd Rr', 'Bb1 Ccg', 'Bb1 Ccg Rr', 'bb1 Ccg Dd', 'bb1 Ccg Dd Rr', 'bb1 Ccg', 'bb1 Ccg Rr'], maleRatio: [3.125, 3.125, 3.125, 3.125, 3.125, 3.125, 3.125, 3.125, 3.125, 3.125, 3.125, 3.125, 3.125, 3.125, 3.125, 3.125], female: ['Slate', 'Rusty Slate', 'Black', 'Rusty Black.', 'Barred Slate', 'Rusty Slate', 'Barred Black', 'Rusty Black', 'Tri-color Mottled Slate', 'Mottled Rusty Slate', 'Tri-color Mottled Black', 'Mottled Rusty Black', 'Red Slate', 'Blue Red Bronze.', 'Bronze-', 'Red Bronze-'], femaleGenotype: ['BB Ccg Dd', 'BB Ccg Dd Rr', 'BB Ccg', 'BB Ccg Rr', 'Bb Ccg Dd', 'Bb Ccg Dd Rr', 'Bb Ccg', 'Bb Ccg Rr', 'Bb1 Ccg Dd', 'Bb1 Ccg Dd Rr', 'Bb1 Ccg', 'Bb1 Ccg Rr', 'bb1 Ccg Dd', 'bb1 Ccg Dd Rr', 'bb1 Ccg', 'bb1 Ccg Rr'], femaleRatio: [3.125, 3.125, 3.125, 3.125, 3.125, 3.125, 3.125, 3.125, 3.125, 3.125, 3.125, 3.125, 3.125, 3.125, 3.125, 3.125] } },

{ sire: 'Barred Black', dam: 'Mottled Silver Dapple', results: { male: ['Black', 'Black', 'Barred Black', 'Barred Black', 'Tri-color Mottled Black', 'Barred Black', 'Bronze-', 'Bronze.'], maleGenotype: ['BB Ccg Nn', 'BB Cc Nn', 'Bb Ccg Nn', 'Bb Cc Nn', 'Bb1 Ccg Nn', 'Bb1 Cc Nn', 'bb1 Ccg Nn', 'bb1 Cc Nn'], maleRatio: [6.25, 6.25, 6.25, 6.25, 6.25, 6.25, 6.25, 6.25], female: ['Black', 'Black', 'Barred Black', 'Barred Black', 'Tri-color Mottled Black', 'Barred Black', 'Bronze-', 'Bronze.'], femaleGenotype: ['BB Ccg', 'BB Cc', 'Bb Ccg', 'Bb Cc', 'Bb1 Ccg', 'Bb1 Cc', 'bb1 Ccg', 'bb1 Cc'], femaleRatio: [6.25, 6.25, 6.25, 6.25, 6.25, 6.25, 6.25, 6.25] } },

{ sire: 'Barred Black', dam: 'Mottled Slate', results: { male: ['Slate', 'Black', 'Barred Slate', 'Barred Black', 'Tri-color Mottled Slate', 'Tri-color Mottled Black', 'Red Slate', 'Bronze-'], maleGenotype: ['BB Ccg Dd Nn', 'BB Ccg Nn', 'Bb Ccg Dd Nn', 'Bb Ccg Nn', 'Bb1 Ccg Dd Nn', 'Bb1 Ccg Nn', 'bb1 Ccg Dd Nn', 'bb1 Ccg Nn'], maleRatio: [6.25, 6.25, 6.25, 6.25, 6.25, 6.25, 6.25, 6.25], female: ['Slate', 'Black', 'Barred Slate', 'Barred Black', 'Tri-color Mottled Slate', 'Tri-color Mottled Black', 'Red Slate', 'Bronze-'], femaleGenotype: ['BB Ccg Dd', 'BB Ccg', 'Bb Ccg Dd', 'Bb Ccg', 'Bb1 Ccg Dd', 'Bb1 Ccg', 'bb1 Ccg Dd', 'bb1 Ccg'], femaleRatio: [6.25, 6.25, 6.25, 6.25, 6.25, 6.25, 6.25, 6.25] } },

{ sire: 'Barred Black', dam: 'Narragansett', results: { male: ['Barred Black', 'Bronze'], maleGenotype: ['Bb Nn', 'bb Nn'], maleRatio: [25, 25], female: ['Barred Black', 'Bronze'], femaleGenotype: ['Bb', 'bb'], femaleRatio: [25, 25] } },

{ sire: 'Barred Black', dam: 'Oregon Blue', results: { male: ['Barred Slate', 'Barred Black', 'Red Slate', 'Bronze'], maleGenotype: ['Bb Ccg Dd Nn', 'Bb Ccg Nn', 'bb Ccg Dd Nn', 'bb Ccg Nn'], maleRatio: [6.25, 6.25, 6.25, 6.25], female: ['Barred Slate', 'Barred Black', 'Red Slate', 'Bronze'], femaleGenotype: ['Bb Ccg Dd', 'Bb Ccg', 'bb Ccg Dd', 'bb Ccg'], femaleRatio: [6.25, 6.25, 6.25, 6.25] } },

{ sire: 'Barred Black', dam: 'Oregon Brown', results: { male: ['Barred Black', 'Bronze'], maleGenotype: ['Bb Ccg Ee Nn', 'Bb Cc Ee Nn', 'bb Ccg Ee Nn', 'bb Cc Ee Nn'], maleRatio: [12.5, 12.5, 12.5, 12.5], female: ['Barred Black', 'Bronze'], femaleGenotype: ['Bb Ccg', 'Bb Cc', 'bb Ccg', 'bb Cc'], femaleRatio: [12.5, 12.5, 12.5, 12.5] } },

{ sire: 'Barred Black', dam: 'Oregon Gray', results: { male: ['Barred Black', 'Bronze'], maleGenotype: ['Bb Ccg Nn', 'bb Ccg Nn'], maleRatio: [12.5, 12.5], female: ['Barred Black', 'Bronze'], femaleGenotype: ['Bb Ccg', 'bb Ccg'], femaleRatio: [12.5, 12.5] } },

{ sire: 'Barred Black', dam: 'Oregon Lavender Blue', results: { male: ['Barred Slate', 'Red Slate'], maleGenotype: ['Bb Ccg Dd Nn', 'Bb Cc Dd Nn', 'bb Ccg Dd Nn', 'bb Cc Dd Nn'], maleRatio: [12.5, 12.5, 12.5, 12.5], female: ['Barred Slate', 'Red Slate'], femaleGenotype: ['Bb Ccg Dd', 'Bb Cc Dd', 'bb Ccg Dd', 'bb Cc Dd'], femaleRatio: [12.5, 12.5, 12.5, 12.5] } },

{ sire: 'Barred Black', dam: 'Painted (Split Black Winged Bronze)', results: { male: ['Black', 'Black', 'Barred Black', 'Barred Black', 'Barred Black', 'Barred Black', 'Bronze.', 'Bronze.'], maleGenotype: ['BB Ccm', 'BB Cc', 'Bb Ccm', 'Bb Cc', 'Bb1 Ccm', 'Bb1 Cc', 'bb1 Ccm', 'bb1 Cc'], maleRatio: [6.25, 6.25, 6.25, 6.25, 6.25, 6.25, 6.25, 6.25], female: ['Black', 'Black', 'Barred Black', 'Barred Black', 'Barred Black', 'Barred Black', 'Bronze.', 'Bronze.'], femaleGenotype: ['BB Ccm', 'BB Cc', 'Bb Ccm', 'Bb Cc', 'Bb1 Ccm', 'Bb1 Cc', 'bb1 Ccm', 'bb1 Cc'], femaleRatio: [6.25, 6.25, 6.25, 6.25, 6.25, 6.25, 6.25, 6.25] } },

{ sire: 'Barred Black', dam: 'Painted (Split Bronze)', results: { male: ['Black', 'Black', 'Barred Black', 'Barred Black', 'Bronze', 'Bronze'], maleGenotype: ['BB Ccm', 'BB Cc', 'Bb Ccm', 'Bb Cc', 'bb Ccm', 'bb Cc'], maleRatio: [6.25, 6.25, 12.5, 12.5, 6.25, 6.25], female: ['Black', 'Black', 'Barred Black', 'Barred Black', 'Bronze', 'Bronze'], femaleGenotype: ['BB Ccm', 'BB Cc', 'Bb Ccm', 'Bb Cc', 'bb Ccm', 'bb Cc'], femaleRatio: [6.25, 6.25, 12.5, 12.5, 6.25, 6.25] } },

{ sire: 'Barred Black', dam: 'Pencilled Black Winged Bronze', results: { male: ['Barred Black', 'Bronze.'], maleGenotype: ['Bb1 Pnpn', 'bb1 Pnpn'], maleRatio: [25, 25], female: ['Barred Black', 'Bronze.'], femaleGenotype: ['Bb1 Pnpn', 'bb1 Pnpn'], femaleRatio: [25, 25] } },

{ sire: 'Barred Black', dam: 'Pencilled Blue Fall Fire', results: { male: ['Tri-color Mottled Slate', 'Mottled Rusty Slate', 'Tri-color Mottled Black', 'Mottled Rusty Black', 'Red Slate', 'Blue Red Bronze.', 'Bronze-', 'Red Bronze-'], maleGenotype: ['Bb1 Ccg Dd Pnpn', 'Bb1 Ccg Dd Pnpn Rr', 'Bb1 Ccg Pnpn', 'Bb1 Ccg Pnpn Rr', 'bb1 Ccg Dd Pnpn', 'bb1 Ccg Dd Pnpn Rr', 'bb1 Ccg Pnpn', 'bb1 Ccg Pnpn Rr'], maleRatio: [6.25, 6.25, 6.25, 6.25, 6.25, 6.25, 6.25, 6.25], female: ['Tri-color Mottled Slate', 'Mottled Rusty Slate', 'Tri-color Mottled Black', 'Mottled Rusty Black', 'Red Slate', 'Blue Red Bronze.', 'Bronze-', 'Red Bronze-'], femaleGenotype: ['Bb1 Ccg Dd Pnpn', 'Bb1 Ccg Dd Pnpn Rr', 'Bb1 Ccg Pnpn', 'Bb1 Ccg Pnpn Rr', 'bb1 Ccg Dd Pnpn', 'bb1 Ccg Dd Pnpn Rr', 'bb1 Ccg Pnpn', 'bb1 Ccg Pnpn Rr'], femaleRatio: [6.25, 6.25, 6.25, 6.25, 6.25, 6.25, 6.25, 6.25] } },

{ sire: 'Barred Black', dam: 'Pencilled Blue Palm', results: { male: ['Tri-color Mottled Slate', 'Tri-color Mottled Black', 'Red Slate', 'Bronze-'], maleGenotype: ['Bb1 Ccg Dd Nn Pnpn', 'Bb1 Ccg Nn Pnpn', 'bb1 Ccg Dd Nn Pnpn', 'bb1 Ccg Nn Pnpn'], maleRatio: [12.5, 12.5, 12.5, 12.5], female: ['Tri-color Mottled Slate', 'Tri-color Mottled Black', 'Red Slate', 'Bronze-'], femaleGenotype: ['Bb1 Ccg Dd Pnpn', 'Bb1 Ccg Pnpn', 'bb1 Ccg Dd Pnpn', 'bb1 Ccg Pnpn'], femaleRatio: [12.5, 12.5, 12.5, 12.5] } },

{ sire: 'Barred Black', dam: 'Pencilled Blue Sweetgrass', results: { male: ['Tri-color Mottled Slate', 'Tri-color Mottled Black', 'Red Slate', 'Bronze-'], maleGenotype: ['Bb1 Ccg Dd Pnpn', 'Bb1 Ccg Pnpn', 'bb1 Ccg Dd Pnpn', 'bb1 Ccg Pnpn'], maleRatio: [12.5, 12.5, 12.5, 12.5], female: ['Tri-color Mottled Slate', 'Tri-color Mottled Black', 'Red Slate', 'Bronze-'], femaleGenotype: ['Bb1 Ccg Dd Pnpn', 'Bb1 Ccg Pnpn', 'bb1 Ccg Dd Pnpn', 'bb1 Ccg Pnpn'], femaleRatio: [12.5, 12.5, 12.5, 12.5] } },

{ sire: 'Barred Black', dam: 'Pencilled Chocolate Palm', results: { male: ['Tri-color Mottled Black', 'Bronze-'], maleGenotype: ['Bb1 Ccg Ee Nn Pnpn', 'bb1 Ccg Ee Nn Pnpn'], maleRatio: [25, 25], female: ['Tri-color Mottled Black', 'Bronze-'], femaleGenotype: ['Bb1 Ccg Pnpn', 'bb1 Ccg Pnpn'], femaleRatio: [25, 25] } },

{ sire: 'Barred Black', dam: 'Pencilled Fall Fire', results: { male: ['Tri-color Mottled Black', 'Mottled Rusty Black', 'Bronze-', 'Red Bronze-'], maleGenotype: ['Bb1 Ccg Pnpn', 'Bb1 Ccg Pnpn Rr', 'bb1 Ccg Pnpn', 'bb1 Ccg Pnpn Rr'], maleRatio: [12.5, 12.5, 12.5, 12.5], female: ['Tri-color Mottled Black', 'Mottled Rusty Black', 'Bronze-', 'Red Bronze-'], femaleGenotype: ['Bb1 Ccg Pnpn', 'Bb1 Ccg Pnpn Rr', 'bb1 Ccg Pnpn', 'bb1 Ccg Pnpn Rr'], femaleRatio: [12.5, 12.5, 12.5, 12.5] } },

{ sire: 'Barred Black', dam: 'Pencilled Lavender Fall Fire', results: { male: ['Tri-color Mottled Slate', 'Mottled Rusty Slate', 'Red Slate', 'Blue Red Bronze.'], maleGenotype: ['Bb1 Ccg Dd Pnpn', 'Bb1 Ccg Dd Pnpn Rr', 'bb1 Ccg Dd Pnpn', 'bb1 Ccg Dd Pnpn Rr'], maleRatio: [12.5, 12.5, 12.5, 12.5], female: ['Tri-color Mottled Slate', 'Mottled Rusty Slate', 'Red Slate', 'Blue Red Bronze.'], femaleGenotype: ['Bb1 Ccg Dd Pnpn', 'Bb1 Ccg Dd Pnpn Rr', 'bb1 Ccg Dd Pnpn', 'bb1 Ccg Dd Pnpn Rr'], femaleRatio: [12.5, 12.5, 12.5, 12.5] } },

{ sire: 'Barred Black', dam: 'Pencilled Lavender Sweetgrass', results: { male: ['Tri-color Mottled Slate', 'Red Slate'], maleGenotype: ['Bb1 Ccg Dd Pnpn', 'bb1 Ccg Dd Pnpn'], maleRatio: [25, 25], female: ['Tri-color Mottled Slate', 'Red Slate'], femaleGenotype: ['Bb1 Ccg Dd Pnpn', 'bb1 Ccg Dd Pnpn'], femaleRatio: [25, 25] } },

{ sire: 'Barred Black', dam: 'Pencilled Light Red', results: { male: ['Rusty Black', 'Mottled Rusty Black', 'Red Bronze.', 'Red Bronze-'], maleGenotype: ['Bb1 Pnpn Rr', 'Bb1 Ccg Pnpn Rr', 'bb1 Pnpn Rr', 'bb1 Ccg Pnpn Rr'], maleRatio: [12.5, 12.5, 12.5, 12.5], female: ['Rusty Black', 'Mottled Rusty Black', 'Red Bronze.', 'Red Bronze-'], femaleGenotype: ['Bb1 Pnpn Rr', 'Bb1 Ccg Pnpn Rr', 'bb1 Pnpn Rr', 'bb1 Ccg Pnpn Rr'], femaleRatio: [12.5, 12.5, 12.5, 12.5] } },

{ sire: 'Barred Black', dam: 'Pencilled Palm', results: { male: ['Tri-color Mottled Black', 'Bronze-'], maleGenotype: ['Bb1 Ccg Nn Pnpn', 'bb1 Ccg Nn Pnpn'], maleRatio: [25, 25], female: ['Tri-color Mottled Black', 'Bronze-'], femaleGenotype: ['Bb1 Ccg Pnpn', 'bb1 Ccg Pnpn'], femaleRatio: [25, 25] } },

{ sire: 'Barred Black', dam: 'Pencilled Red Palm', results: { male: ['Mottled Rusty Black', 'Red Bronze-'], maleGenotype: ['Bb1 Ccg Nn Pnpn Rr', 'bb1 Ccg Nn Pnpn Rr'], maleRatio: [25, 25], female: ['Mottled Rusty Black', 'Red Bronze-'], femaleGenotype: ['Bb1 Ccg Pnpn Rr', 'bb1 Ccg Pnpn Rr'], femaleRatio: [25, 25] } },

{ sire: 'Barred Black', dam: 'Pencilled Sweetgrass', results: { male: ['Tri-color Mottled Black', 'Bronze-'], maleGenotype: ['Bb1 Ccg Pnpn', 'bb1 Ccg Pnpn'], maleRatio: [25, 25], female: ['Tri-color Mottled Black', 'Bronze-'], femaleGenotype: ['Bb1 Ccg Pnpn', 'bb1 Ccg Pnpn'], femaleRatio: [25, 25] } },

{ sire: 'Barred Black', dam: 'Recessive Blue Fawn', results: { male: ['Barred Black', 'Barred Black', 'Bronze', 'Bronze'], maleGenotype: ['Bb Ccm Slsl', 'Bb Cc Slsl', 'bb Ccm Slsl', 'bb Cc Slsl'], maleRatio: [12.5, 12.5, 12.5, 12.5], female: ['Barred Black', 'Barred Black', 'Bronze', 'Bronze'], femaleGenotype: ['Bb Ccm Slsl', 'Bb Cc Slsl', 'bb Ccm Slsl', 'bb Cc Slsl'], femaleRatio: [12.5, 12.5, 12.5, 12.5] } },

{ sire: 'Barred Black', dam: 'Recessive Blue Narragansett', results: { male: ['Barred Black', 'Bronze'], maleGenotype: ['Bb Nn Slsl', 'bb Nn Slsl'], maleRatio: [25, 25], female: ['Barred Black', 'Bronze'], femaleGenotype: ['Bb Slsl', 'bb Slsl'], femaleRatio: [25, 25] } },

{ sire: 'Barred Black', dam: 'Recessive Blue Painted (Split Black Winged Bronze)', results: { male: ['Black', 'Black', 'Barred Black', 'Barred Black', 'Barred Black', 'Barred Black', 'Bronze.', 'Bronze.'], maleGenotype: ['BB Ccm Slsl', 'BB Cc Slsl', 'Bb Ccm Slsl', 'Bb Cc Slsl', 'Bb1 Ccm Slsl', 'Bb1 Cc Slsl', 'bb1 Ccm Slsl', 'bb1 Cc Slsl'], maleRatio: [6.25, 6.25, 6.25, 6.25, 6.25, 6.25, 6.25, 6.25], female: ['Black', 'Black', 'Barred Black', 'Barred Black', 'Barred Black', 'Barred Black', 'Bronze.', 'Bronze.'], femaleGenotype: ['BB Ccm Slsl', 'BB Cc Slsl', 'Bb Ccm Slsl', 'Bb Cc Slsl', 'Bb1 Ccm Slsl', 'Bb1 Cc Slsl', 'bb1 Ccm Slsl', 'bb1 Cc Slsl'], femaleRatio: [6.25, 6.25, 6.25, 6.25, 6.25, 6.25, 6.25, 6.25] } },

{ sire: 'Barred Black', dam: 'Recessive Blue Painted (Split Bronze)', results: { male: ['Black', 'Black', 'Barred Black', 'Barred Black', 'Bronze', 'Bronze'], maleGenotype: ['BB Ccm Slsl', 'BB Cc Slsl', 'Bb Ccm Slsl', 'Bb Cc Slsl', 'bb Ccm Slsl', 'bb Cc Slsl'], maleRatio: [6.25, 6.25, 12.5, 12.5, 6.25, 6.25], female: ['Black', 'Black', 'Barred Black', 'Barred Black', 'Bronze', 'Bronze'], femaleGenotype: ['BB Ccm Slsl', 'BB Cc Slsl', 'Bb Ccm Slsl', 'Bb Cc Slsl', 'bb Ccm Slsl', 'bb Cc Slsl'], femaleRatio: [6.25, 6.25, 12.5, 12.5, 6.25, 6.25] } },

{ sire: 'Barred Black', dam: 'Recessive Blue Sweetgrass', results: { male: ['Tri-color Mottled Black', 'Bronze-'], maleGenotype: ['Bb1 Ccg Slsl', 'bb1 Ccg Slsl'], maleRatio: [25, 25], female: ['Tri-color Mottled Black', 'Bronze-'], femaleGenotype: ['Bb1 Ccg Slsl', 'bb1 Ccg Slsl'], femaleRatio: [25, 25] } },

{ sire: 'Barred Black', dam: 'Recessive Blue Tuxedo', results: { male: ['Black', 'Barred Black'], maleGenotype: ['BB Ccm Slsl', 'Bb Ccm Slsl'], maleRatio: [25, 25], female: ['Black', 'Barred Black'], femaleGenotype: ['BB Ccm Slsl', 'Bb Ccm Slsl'], femaleRatio: [25, 25] } },

{ sire: 'Barred Black', dam: 'Recessive Lilac', results: { male: ['Rusty Black', 'Red Bronze'], maleGenotype: ['Bb Rr Slsl', 'bb Rr Slsl'], maleRatio: [25, 25], female: ['Rusty Black', 'Red Bronze'], femaleGenotype: ['Bb Rr Slsl', 'bb Rr Slsl'], femaleRatio: [25, 25] } },

{ sire: 'Barred Black', dam: 'Recessive Slate', results: { male: ['Barred Black', 'Bronze'], maleGenotype: ['Bb Slsl', 'bb Slsl'], maleRatio: [25, 25], female: ['Barred Black', 'Bronze'], femaleGenotype: ['Bb Slsl', 'bb Slsl'], femaleRatio: [25, 25] } },

{ sire: 'Barred Black', dam: 'Red Bronze', results: { male: ['Barred Black', 'Rusty Black', 'Bronze', 'Red Bronze'], maleGenotype: ['Bb', 'Bb Rr', 'bb', 'bb Rr'], maleRatio: [12.5, 12.5, 12.5, 12.5], female: ['Barred Black', 'Rusty Black', 'Bronze', 'Red Bronze'], femaleGenotype: ['Bb', 'Bb Rr', 'bb', 'bb Rr'], femaleRatio: [12.5, 12.5, 12.5, 12.5] } },

{ sire: 'Barred Black', dam: 'Red Lilac', results: { male: ['Rusty Black.', 'Rusty Black'], maleGenotype: ['BB Rr Slsl', 'Bb Rr Slsl'], maleRatio: [25, 25], female: ['Rusty Black.', 'Rusty Black'], femaleGenotype: ['BB Rr Slsl', 'Bb Rr Slsl'], femaleRatio: [25, 25] } },

{ sire: 'Barred Black', dam: 'Red Recessive Slate', results: { male: ['Barred Black', 'Rusty Black', 'Bronze', 'Red Bronze'], maleGenotype: ['Bb Slsl', 'Bb Rr Slsl', 'bb Slsl', 'bb Rr Slsl'], maleRatio: [12.5, 12.5, 12.5, 12.5], female: ['Barred Black', 'Rusty Black', 'Bronze', 'Red Bronze'], femaleGenotype: ['Bb Slsl', 'Bb Rr Slsl', 'bb Slsl', 'bb Rr Slsl'], femaleRatio: [12.5, 12.5, 12.5, 12.5] } },

{ sire: 'Barred Black', dam: 'Red Palm', results: { male: ['Mottled Rusty Black', 'Red Bronze-'], maleGenotype: ['Bb1 Ccg Nn Rr', 'bb1 Ccg Nn Rr'], maleRatio: [25, 25], female: ['Mottled Rusty Black', 'Red Bronze-'], femaleGenotype: ['Bb1 Ccg Rr', 'bb1 Ccg Rr'], femaleRatio: [25, 25] } },

{ sire: 'Barred Black', dam: 'Red Phoenix', results: { male: ['Barred Black', 'Rusty Black', 'Tri-color Mottled Black', 'Mottled Rusty Black', 'Bronze.', 'Red Bronze.', 'Bronze-', 'Red Bronze-'], maleGenotype: ['Bb1', 'Bb1 Rr', 'Bb1 Ccg', 'Bb1 Ccg Rr', 'bb1', 'bb1 Rr', 'bb1 Ccg', 'bb1 Ccg Rr'], maleRatio: [6.25, 6.25, 6.25, 6.25, 6.25, 6.25, 6.25, 6.25], female: ['Barred Black', 'Rusty Black', 'Tri-color Mottled Black', 'Mottled Rusty Black', 'Bronze.', 'Red Bronze.', 'Bronze-', 'Red Bronze-'], femaleGenotype: ['Bb1', 'Bb1 Rr', 'Bb1 Ccg', 'Bb1 Ccg Rr', 'bb1', 'bb1 Rr', 'bb1 Ccg', 'bb1 Ccg Rr'], femaleRatio: [6.25, 6.25, 6.25, 6.25, 6.25, 6.25, 6.25, 6.25] } },

{ sire: 'Barred Black', dam: 'Red Slate', results: { male: ['Barred Slate', 'Barred Black', 'Red Slate', 'Bronze'], maleGenotype: ['Bb Dd', 'Bb', 'bb Dd', 'bb'], maleRatio: [12.5, 12.5, 12.5, 12.5], female: ['Barred Slate', 'Barred Black', 'Red Slate', 'Bronze'], femaleGenotype: ['Bb Dd', 'Bb', 'bb Dd', 'bb'], femaleRatio: [12.5, 12.5, 12.5, 12.5] } },

{ sire: 'Barred Black', dam: 'Red Sweetgrass', results: { male: ['Mottled Rusty Black', 'Red Bronze-'], maleGenotype: ['Bb1 Ccg Rr', 'bb1 Ccg Rr'], maleRatio: [25, 25], female: ['Mottled Rusty Black', 'Red Bronze-'], femaleGenotype: ['Bb1 Ccg Rr', 'bb1 Ccg Rr'], femaleRatio: [25, 25] } },

{ sire: 'Barred Black', dam: 'Red Tuxedo', results: { male: ['Rusty Black.', 'Rusty Black'], maleGenotype: ['BB Ccm Rr', 'Bb Ccm Rr'], maleRatio: [25, 25], female: ['Rusty Black.', 'Rusty Black'], femaleGenotype: ['BB Ccm Rr', 'Bb Ccm Rr'], femaleRatio: [25, 25] } },

{ sire: 'Barred Black', dam: 'Regal Red', results: { male: ['Rusty Black', 'Red Bronze.'], maleGenotype: ['Bb1 Rr', 'bb1 Rr'], maleRatio: [25, 25], female: ['Rusty Black', 'Red Bronze.'], femaleGenotype: ['Bb1 Rr', 'bb1 Rr'], femaleRatio: [25, 25] } },

{ sire: 'Barred Black', dam: 'Royal Palm', results: { male: ['Tri-color Mottled Black', 'Bronze-'], maleGenotype: ['Bb1 Ccg Nn', 'bb1 Ccg Nn'], maleRatio: [25, 25], female: ['Tri-color Mottled Black', 'Bronze-'], femaleGenotype: ['Bb1 Ccg', 'bb1 Ccg'], femaleRatio: [25, 25] } },

{ sire: 'Barred Black', dam: 'Rusty Black', results: { male: ['Black', 'Rusty Black.', 'Barred Black', 'Rusty Black', 'Bronze', 'Red Bronze'], maleGenotype: ['BB', 'BB Rr', 'Bb', 'Bb Rr', 'bb', 'bb Rr'], maleRatio: [6.25, 6.25, 12.5, 12.5, 6.25, 6.25], female: ['Black', 'Rusty Black.', 'Barred Black', 'Rusty Black', 'Bronze', 'Red Bronze'], femaleGenotype: ['BB', 'BB Rr', 'Bb', 'Bb Rr', 'bb', 'bb Rr'], femaleRatio: [6.25, 6.25, 12.5, 12.5, 6.25, 6.25] } },

{ sire: 'Barred Black', dam: 'Rusty Brown', results: { male: ['Black', 'Rusty Black.', 'Barred Black', 'Rusty Black', 'Bronze', 'Red Bronze'], maleGenotype: ['BB Ee', 'BB Ee Rr', 'Bb Ee', 'Bb Ee Rr', 'bb Ee', 'bb Ee Rr'], maleRatio: [6.25, 6.25, 12.5, 12.5, 6.25, 6.25], female: ['Black', 'Rusty Black.', 'Barred Black', 'Rusty Black', 'Bronze', 'Red Bronze'], femaleGenotype: ['BB', 'BB Rr', 'Bb', 'Bb Rr', 'bb', 'bb Rr'], femaleRatio: [6.25, 6.25, 12.5, 12.5, 6.25, 6.25] } },

{ sire: 'Barred Black', dam: 'Rusty Slate', results: { male: ['Slate', 'Rusty Slate', 'Black', 'Rusty Black.', 'Barred Slate', 'Rusty Slate', 'Barred Black', 'Rusty Black', 'Red Slate', 'Blue Red Bronze', 'Bronze', 'Red Bronze'], maleGenotype: ['BB Dd', 'BB Dd Rr', 'BB', 'BB Rr', 'Bb Dd', 'Bb Dd Rr', 'Bb', 'Bb Rr', 'bb Dd', 'bb Dd Rr', 'bb', 'bb Rr'], maleRatio: [3.125, 3.125, 3.125, 3.125, 6.25, 6.25, 6.25, 6.25, 3.125, 3.125, 3.125, 3.125], female: ['Slate', 'Rusty Slate', 'Black', 'Rusty Black.', 'Barred Slate', 'Rusty Slate', 'Barred Black', 'Rusty Black', 'Red Slate', 'Blue Red Bronze', 'Bronze', 'Red Bronze'], femaleGenotype: ['BB Dd', 'BB Dd Rr', 'BB', 'BB Rr', 'Bb Dd', 'Bb Dd Rr', 'Bb', 'Bb Rr', 'bb Dd', 'bb Dd Rr', 'bb', 'bb Rr'], femaleRatio: [3.125, 3.125, 3.125, 3.125, 6.25, 6.25, 6.25, 6.25, 3.125, 3.125, 3.125, 3.125] } },

{ sire: 'Barred Black', dam: 'Rusty Painted (Split Black Winged Bronze)', results: { male: ['Black', 'Rusty Black.', 'Black', 'Rusty Black.', 'Barred Black', 'Rusty Black', 'Barred Black', 'Rusty Black', 'Barred Black', 'Rusty Black', 'Barred Black', 'Rusty Black', 'Bronze.', 'Red Bronze.', 'Bronze.', 'Red Bronze.'], maleGenotype: ['BB Ccm', 'BB Ccm Rr', 'BB Cc', 'BB Cc Rr', 'Bb Ccm', 'Bb Ccm Rr', 'Bb Cc', 'Bb Cc Rr', 'Bb1 Ccm', 'Bb1 Ccm Rr', 'Bb1 Cc', 'Bb1 Cc Rr', 'bb1 Ccm', 'bb1 Ccm Rr', 'bb1 Cc', 'bb1 Cc Rr'], maleRatio: [3.125, 3.125, 3.125, 3.125, 3.125, 3.125, 3.125, 3.125, 3.125, 3.125, 3.125, 3.125, 3.125, 3.125, 3.125, 3.125], female: ['Black', 'Rusty Black.', 'Black', 'Rusty Black.', 'Barred Black', 'Rusty Black', 'Barred Black', 'Rusty Black', 'Barred Black', 'Rusty Black', 'Barred Black', 'Rusty Black', 'Bronze.', 'Red Bronze.', 'Bronze.', 'Red Bronze.'], femaleGenotype: ['BB Ccm', 'BB Ccm Rr', 'BB Cc', 'BB Cc Rr', 'Bb Ccm', 'Bb Ccm Rr', 'Bb Cc', 'Bb Cc Rr', 'Bb1 Ccm', 'Bb1 Ccm Rr', 'Bb1 Cc', 'Bb1 Cc Rr', 'bb1 Ccm', 'bb1 Ccm Rr', 'bb1 Cc', 'bb1 Cc Rr'], femaleRatio: [3.125, 3.125, 3.125, 3.125, 3.125, 3.125, 3.125, 3.125, 3.125, 3.125, 3.125, 3.125, 3.125, 3.125, 3.125, 3.125] } },

{ sire: 'Barred Black', dam: 'Rusty Painted (Split Bronze)', results: { male: ['Black', 'Rusty Black.', 'Black', 'Rusty Black.', 'Barred Black', 'Rusty Black', 'Barred Black', 'Rusty Black', 'Bronze', 'Red Bronze', 'Bronze', 'Red Bronze'], maleGenotype: ['BB Ccm', 'BB Ccm Rr', 'BB Cc', 'BB Cc Rr', 'Bb Ccm', 'Bb Ccm Rr', 'Bb Cc', 'Bb Cc Rr', 'bb Ccm', 'bb Ccm Rr', 'bb Cc', 'bb Cc Rr'], maleRatio: [3.125, 3.125, 3.125, 3.125, 6.25, 6.25, 6.25, 6.25, 3.125, 3.125, 3.125, 3.125], female: ['Black', 'Rusty Black.', 'Black', 'Rusty Black.', 'Barred Black', 'Rusty Black', 'Barred Black', 'Rusty Black', 'Bronze', 'Red Bronze', 'Bronze', 'Red Bronze'], femaleGenotype: ['BB Ccm', 'BB Ccm Rr', 'BB Cc', 'BB Cc Rr', 'Bb Ccm', 'Bb Ccm Rr', 'Bb Cc', 'Bb Cc Rr', 'bb Ccm', 'bb Ccm Rr', 'bb Cc', 'bb Cc Rr'], femaleRatio: [3.125, 3.125, 3.125, 3.125, 6.25, 6.25, 6.25, 6.25, 3.125, 3.125, 3.125, 3.125] } },

{ sire: 'Barred Black', dam: 'Rusty-Tuxedo', results: { male: ['Black', 'Rusty Black.', 'Barred Black', 'Rusty Black', 'Bronze', 'Red Bronze'], maleGenotype: ['BB Ccm', 'BB Ccm Rr', 'Bb Ccm', 'Bb Ccm Rr', 'bb Ccm', 'bb Ccm Rr'], maleRatio: [6.25, 6.25, 12.5, 12.5, 6.25, 6.25], female: ['Black', 'Rusty Black.', 'Barred Black', 'Rusty Black', 'Bronze', 'Red Bronze'], femaleGenotype: ['BB Ccm', 'BB Ccm Rr', 'Bb Ccm', 'Bb Ccm Rr', 'bb Ccm', 'bb Ccm Rr'], femaleRatio: [6.25, 6.25, 12.5, 12.5, 6.25, 6.25] } },

{ sire: 'Barred Black', dam: 'Self Buff', results: { male: ['Rusty Black', 'Red Bronze.'], maleGenotype: ['Bb1 Ee Nn Rr', 'bb1 Ee Nn Rr'], maleRatio: [25, 25], female: ['Rusty Black', 'Red Bronze.'], femaleGenotype: ['Bb1 Rr', 'bb1 Rr'], femaleRatio: [25, 25] } },

{ sire: 'Barred Black', dam: 'Silver Auburn', results: { male: ['Barred Black', 'Bronze'], maleGenotype: ['Bb Ee Nn', 'bb Ee Nn'], maleRatio: [25, 25], female: ['Barred Black', 'Bronze'], femaleGenotype: ['Bb', 'bb'], femaleRatio: [25, 25] } },

{ sire: 'Barred Black', dam: 'Silver Dapple', results: { male: ['Black', 'Black', 'Barred Black', 'Barred Black', 'Bronze', 'Bronze'], maleGenotype: ['BB Ccg Nn', 'BB Cc Nn', 'Bb Ccg Nn', 'Bb Cc Nn', 'bb Ccg Nn', 'bb Cc Nn'], maleRatio: [6.25, 6.25, 12.5, 12.5, 6.25, 6.25], female: ['Black', 'Black', 'Barred Black', 'Barred Black', 'Bronze', 'Bronze'], femaleGenotype: ['BB Ccg', 'BB Cc', 'Bb Ccg', 'Bb Cc', 'bb Ccg', 'bb Cc'], femaleRatio: [6.25, 6.25, 12.5, 12.5, 6.25, 6.25] } },

{ sire: 'Barred Black', dam: 'Silver Palm', results: { male: ['Tri-color Mottled Black', 'Barred Black', 'Bronze-', 'Bronze.'], maleGenotype: ['Bb1 Ccg Nn', 'Bb1 Cc Nn', 'bb1 Ccg Nn', 'bb1 Cc Nn'], maleRatio: [12.5, 12.5, 12.5, 12.5], female: ['Tri-color Mottled Black', 'Barred Black', 'Bronze-', 'Bronze.'], femaleGenotype: ['Bb1 Ccg', 'Bb1 Cc', 'bb1 Ccg', 'bb1 Cc'], femaleRatio: [12.5, 12.5, 12.5, 12.5] } },









{ sire: 'Barred Black', dam: 'Slate Painted (Split Black Winged Bronze)', results: { male: ['Slate', 'Black', 'Slate', 'Black', 'Barred Slate', 'Barred Black', 'Barred Slate', 'Barred Black', 'Barred Slate', 'Barred Black', 'Barred Slate', 'Barred Black', 'Red Slate', 'Bronze.', 'Red Slate', 'Bronze.'], maleGenotype: ['BB Ccm Dd', 'BB Ccm', 'BB Cc Dd', 'BB Cc', 'Bb Ccm Dd', 'Bb Ccm', 'Bb Cc Dd', 'Bb Cc', 'Bb1 Ccm Dd', 'Bb1 Ccm', 'Bb1 Cc Dd', 'Bb1 Cc', 'bb1 Ccm Dd', 'bb1 Ccm', 'bb1 Cc Dd', 'bb1 Cc'], maleRatio: [3.125, 3.125, 3.125, 3.125, 3.125, 3.125, 3.125, 3.125, 3.125, 3.125, 3.125, 3.125, 3.125, 3.125, 3.125, 3.125], female: ['Slate', 'Black', 'Slate', 'Black', 'Barred Slate', 'Barred Black', 'Barred Slate', 'Barred Black', 'Barred Slate', 'Barred Black', 'Barred Slate', 'Barred Black', 'Red Slate', 'Bronze.', 'Red Slate', 'Bronze.'], femaleGenotype: ['BB Ccm Dd', 'BB Ccm', 'BB Cc Dd', 'BB Cc', 'Bb Ccm Dd', 'Bb Ccm', 'Bb Cc Dd', 'Bb Cc', 'Bb1 Ccm Dd', 'Bb1 Ccm', 'Bb1 Cc Dd', 'Bb1 Cc', 'bb1 Ccm Dd', 'bb1 Ccm', 'bb1 Cc Dd', 'bb1 Cc'], femaleRatio: [3.125, 3.125, 3.125, 3.125, 3.125, 3.125, 3.125, 3.125, 3.125, 3.125, 3.125, 3.125, 3.125, 3.125, 3.125, 3.125] } },


{ sire: 'Barred Black', dam: 'Slate Painted (Split Bronze)', results: { male: ['Slate', 'Black', 'Slate', 'Black', 'Barred Slate', 'Barred Black', 'Barred Slate', 'Barred Black', 'Red Slate', 'Bronze', 'Red Slate', 'Bronze'], maleGenotype: ['BB Ccm Dd', 'BB Ccm', 'BB Cc Dd', 'BB Cc', 'Bb Ccm Dd', 'Bb Ccm', 'Bb Cc Dd', 'Bb Cc', 'bb Ccm Dd', 'bb Ccm', 'bb Cc Dd', 'bb Cc'], maleRatio: [1, 1, 1, 1, 2, 2, 2, 2, 1, 1, 1, 1], female: ['Slate', 'Black', 'Slate', 'Black', 'Barred Slate', 'Barred Black', 'Barred Slate', 'Barred Black', 'Red Slate', 'Bronze', 'Red Slate', 'Bronze'], femaleGenotype: ['BB Ccm Dd', 'BB Ccm', 'BB Cc Dd', 'BB Cc', 'Bb Ccm Dd', 'Bb Ccm', 'Bb Cc Dd', 'Bb Cc', 'bb Ccm Dd', 'bb Ccm', 'bb Cc Dd', 'bb Cc'], femaleRatio: [1, 1, 1, 1, 2, 2, 2, 2, 1, 1, 1, 1] } },

{ sire: 'Barred Black', dam: 'Slate Tuxedo', results: { male: ['Slate', 'Black', 'Barred Slate', 'Barred Black'], maleGenotype: ['BB Ccm Dd', 'BB Ccm', 'Bb Ccm Dd', 'Bb Ccm'], maleRatio: [1, 1, 1, 1], female: ['Slate', 'Black', 'Barred Slate', 'Barred Black'], femaleGenotype: ['BB Ccm Dd', 'BB Ccm', 'Bb Ccm Dd', 'Bb Ccm'], femaleRatio: [1, 1, 1, 1] } },


// BLACK WINGED BRONZE CROSSES

{ sire: 'Black Winged Bronze', dam: 'Auburn', results: { male: ['Bronze.'], maleGenotype: ['bb1 Ee'], maleRatio: [50], female: ['Bronze.'], femaleGenotype: ['bb1'], femaleRatio: [50] } },

{ sire: 'Black Winged Bronze', dam: 'Barred Black', results: { male: ['Barred Black', 'Bronze.'], maleGenotype: ['Bb1', 'bb1'], maleRatio: [25, 25], female: ['Barred Black', 'Bronze.'], femaleGenotype: ['Bb1', 'bb1'], femaleRatio: [25, 25] } },

{ sire: 'Black Winged Bronze', dam: 'Barred Black Tuxedo', results: { male: ['Barred Black', 'Bronze.'], maleGenotype: ['Bb1 Ccm', 'bb1 Ccm'], maleRatio: [25, 25], female: ['Barred Black', 'Bronze.'], femaleGenotype: ['Bb1 Ccm', 'bb1 Ccm'], femaleRatio: [25, 25] } },

{ sire: 'Black Winged Bronze', dam: 'Barred Chocolate', results: { male: ['Barred Black', 'Bronze.'], maleGenotype: ['Bb1 Ee', 'bb1 Ee'], maleRatio: [25, 25], female: ['Barred Black', 'Bronze.'], femaleGenotype: ['Bb1', 'bb1'], femaleRatio: [25, 25] } },

{ sire: 'Black Winged Bronze', dam: 'Barred Chocolate Tuxedo', results: { male: ['Barred Black', 'Bronze.'], maleGenotype: ['Bb1 Ccm Ee', 'bb1 Ccm Ee'], maleRatio: [25, 25], female: ['Barred Black', 'Bronze.'], femaleGenotype: ['Bb1 Ccm', 'bb1 Ccm'], femaleRatio: [25, 25] } },

{ sire: 'Black Winged Bronze', dam: 'Barred Recessive Blue Tuxedo', results: { male: ['Barred Black', 'Bronze.'], maleGenotype: ['Bb1 Ccm Slsl', 'bb1 Ccm Slsl'], maleRatio: [25, 25], female: ['Barred Black', 'Bronze.'], femaleGenotype: ['Bb1 Ccm Slsl', 'bb1 Ccm Slsl'], femaleRatio: [25, 25] } },

{ sire: 'Black Winged Bronze', dam: 'Barred Slate', results: { male: ['Barred Slate', 'Barred Black', 'Red Slate', 'Bronze.'], maleGenotype: ['Bb1 Dd', 'Bb1', 'bb1 Dd', 'bb1'], maleRatio: [12.5, 12.5, 12.5, 12.5], female: ['Barred Slate', 'Barred Black', 'Red Slate', 'Bronze.'], femaleGenotype: ['Bb1 Dd', 'Bb1', 'bb1 Dd', 'bb1'], femaleRatio: [12.5, 12.5, 12.5, 12.5] } },

{ sire: 'Black Winged Bronze', dam: 'Black', results: { male: ['Barred Black'], maleGenotype: ['Bb1'], maleRatio: [50], female: ['Barred Black'], femaleGenotype: ['Bb1'], femaleRatio: [50] } },

{ sire: 'Black Winged Bronze', dam: 'Black Tuxedo', results: { male: ['Barred Black'], maleGenotype: ['Bb1 Ccm'], maleRatio: [50], female: ['Barred Black'], femaleGenotype: ['Bb1 Ccm'], femaleRatio: [50] } },

{ sire: 'Black Winged Bronze', dam: 'Black Winged Bronze', results: { male: ['Black Winged Bronze'], maleGenotype: ['b1b1'], maleRatio: [50], female: ['Black Winged Bronze'], femaleGenotype: ['b1b1'], femaleRatio: [50] } },

{ sire: 'Black Winged Bronze', dam: 'Black Winged Narragansett', results: { male: ['Black Winged Bronze'], maleGenotype: ['b1b1 Nn'], maleRatio: [50], female: ['Black Winged Bronze'], femaleGenotype: ['b1b1'], femaleRatio: [50] } },

{ sire: 'Black Winged Bronze', dam: 'Blue Calico', results: { male: ['Blue Cornish Palm', 'Blue Red Phoenix', 'Cornish Palm', 'Red Phoenix'], maleGenotype: ['b1b1 Ccm Dd Nn', 'b1b1 Ccm Dd Nn Rr', 'b1b1 Ccm Nn', 'b1b1 Ccm Nn Rr'], maleRatio: [12.5, 12.5, 12.5, 12.5], female: ['Blue Cornish Palm', 'Blue Red Phoenix', 'Cornish Palm', 'Red Phoenix'], femaleGenotype: ['b1b1 Ccm Dd', 'b1b1 Ccm Dd Rr', 'b1b1 Ccm', 'b1b1 Ccm Rr'], femaleRatio: [12.5, 12.5, 12.5, 12.5] } },

{ sire: 'Black Winged Bronze', dam: 'Blue Cornish Palm', results: { male: ['Blue Winged Red Slate', 'Black Winged Bronze', 'Blue Cornish Palm', 'Cornish Palm'], maleGenotype: ['b1b1 Dd', 'b1b1', 'b1b1 Ccm Dd', 'b1b1 Ccm'], maleRatio: [12.5, 12.5, 12.5, 12.5], female: ['Blue Winged Red Slate', 'Black Winged Bronze', 'Blue Cornish Palm', 'Cornish Palm'], femaleGenotype: ['b1b1 Dd', 'b1b1', 'b1b1 Ccm Dd', 'b1b1 Ccm'], femaleRatio: [12.5, 12.5, 12.5, 12.5] } },

{ sire: 'Black Winged Bronze', dam: 'Blue Fall Fire', results: { male: ['Blue Cornish Palm', 'Blue Red Phoenix', 'Cornish Palm', 'Red Phoenix'], maleGenotype: ['b1b1 Ccm Dd', 'b1b1 Ccm Dd Rr', 'b1b1 Ccm', 'b1b1 Ccm Rr'], maleRatio: [12.5, 12.5, 12.5, 12.5], female: ['Blue Cornish Palm', 'Blue Red Phoenix', 'Cornish Palm', 'Red Phoenix'], femaleGenotype: ['b1b1 Ccm Dd', 'b1b1 Ccm Dd Rr', 'b1b1 Ccm', 'b1b1 Ccm Rr'], femaleRatio: [12.5, 12.5, 12.5, 12.5] } },

{ sire: 'Black Winged Bronze', dam: 'Blue Narragansett', results: { male: ['Red Slate', 'Bronze.'], maleGenotype: ['bb1 Dd Nn', 'bb1 Nn'], maleRatio: [25, 25], female: ['Red Slate', 'Bronze.'], femaleGenotype: ['bb1 Dd', 'bb1'], femaleRatio: [25, 25] } },

{ sire: 'Black Winged Bronze', dam: 'Blue Palm', results: { male: ['Blue Cornish Palm', 'Cornish Palm'], maleGenotype: ['b1b1 Ccm Dd Nn', 'b1b1 Ccm Nn'], maleRatio: [25, 25], female: ['Blue Cornish Palm', 'Cornish Palm'], femaleGenotype: ['b1b1 Ccm Dd', 'b1b1 Ccm'], femaleRatio: [25, 25] } },

{ sire: 'Black Winged Bronze', dam: 'Blue Red Bronze', results: { male: ['Red Slate', 'Blue Red Bronze.', 'Bronze.', 'Red Bronze.'], maleGenotype: ['bb1 Dd', 'bb1 Dd Rr', 'bb1', 'bb1 Rr'], maleRatio: [12.5, 12.5, 12.5, 12.5], female: ['Red Slate', 'Blue Red Bronze.', 'Bronze.', 'Red Bronze.'], femaleGenotype: ['bb1 Dd', 'bb1 Dd Rr', 'bb1', 'bb1 Rr'], femaleRatio: [12.5, 12.5, 12.5, 12.5] } },

{ sire: 'Black Winged Bronze', dam: 'Blue Sweetgrass', results: { male: ['Blue Cornish Palm', 'Cornish Palm'], maleGenotype: ['b1b1 Ccm Dd', 'b1b1 Ccm'], maleRatio: [25, 25], female: ['Blue Cornish Palm', 'Cornish Palm'], femaleGenotype: ['b1b1 Ccm Dd', 'b1b1 Ccm'], femaleRatio: [25, 25] } },

{ sire: 'Black Winged Bronze', dam: 'Blue Cornish Palm', results: { male: ['Blue Winged Red Slate', 'Black Winged Bronze', 'Blue Cornish Palm', 'Cornish Palm'], maleGenotype: ['b1b1 Dd', 'b1b1', 'b1b1 Ccm Dd', 'b1b1 Ccm'], maleRatio: [12.5, 12.5, 12.5, 12.5], female: ['Blue Winged Red Slate', 'Black Winged Bronze', 'Blue Cornish Palm', 'Cornish Palm'], femaleGenotype: ['b1b1 Dd', 'b1b1', 'b1b1 Ccm Dd', 'b1b1 Ccm'], femaleRatio: [12.5, 12.5, 12.5, 12.5] } },

{ sire: 'Black Winged Bronze', dam: 'Bourbon Buff', results: { male: ['Red Bronze.'], maleGenotype: ['bb1 Nn Rr'], maleRatio: [50], female: ['Red Bronze.'], femaleGenotype: ['bb1 Rr'], femaleRatio: [50] } },

{ sire: 'Black Winged Bronze', dam: 'Bourbon Red', results: { male: ['Red Bronze.'], maleGenotype: ['bb1 Rr'], maleRatio: [50], female: ['Red Bronze.'], femaleGenotype: ['bb1 Rr'], femaleRatio: [50] } },

{ sire: 'Black Winged Bronze', dam: 'Bronze', results: { male: ['Bronze.'], maleGenotype: ['bb1'], maleRatio: [50], female: ['Bronze.'], femaleGenotype: ['bb1'], femaleRatio: [50] } },

{ sire: 'Black Winged Bronze', dam: 'Brown Winged Golden Silver Auburn', results: { male: ['Black Winged Bronze', 'Harvest Gold'], maleGenotype: ['b1b1 Ee Nn', 'b1b1 Ee Nn Rr'], maleRatio: [25, 25], female: ['Black Winged Bronze', 'Harvest Gold'], femaleGenotype: ['b1b1', 'b1b1 Rr'], femaleRatio: [25, 25] } },

{ sire: 'Black Winged Bronze', dam: 'Calico', results: { male: ['Cornish Palm', 'Red Phoenix'], maleGenotype: ['b1b1 Ccm Nn', 'b1b1 Ccm Nn Rr'], maleRatio: [25, 25], female: ['Cornish Palm', 'Red Phoenix'], femaleGenotype: ['b1b1 Ccm', 'b1b1 Ccm Rr'], femaleRatio: [25, 25] } },

{ sire: 'Black Winged Bronze', dam: 'Chestnut Buff', results: { male: ['Red Bronze.', 'Harvest Gold'], maleGenotype: ['bb1 Nn Rr', 'b1b1 Nn Rr'], maleRatio: [25, 25], female: ['Red Bronze.', 'Harvest Gold'], femaleGenotype: ['bb1 Rr', 'b1b1 Rr'], femaleRatio: [25, 25] } },

{ sire: 'Black Winged Bronze', dam: 'Chestnut Red', results: { male: ['Red Bronze.', 'Harvest Gold'], maleGenotype: ['bb1 Rr', 'b1b1 Rr'], maleRatio: [25, 25], female: ['Red Bronze.', 'Harvest Gold'], femaleGenotype: ['bb1 Rr', 'b1b1 Rr'], femaleRatio: [25, 25] } },

{ sire: 'Black Winged Bronze', dam: 'Chocolate', results: { male: ['Barred Black'], maleGenotype: ['Bb1 Ee'], maleRatio: [50], female: ['Barred Black'], femaleGenotype: ['Bb1'], femaleRatio: [50] } },

{ sire: 'Black Winged Bronze', dam: 'Chocolate Dapple', results: { male: ['Tri-color Mottled Black', 'Barred Black', 'Bronze-', 'Bronze.'], maleGenotype: ['Bb1 Ccg Ee Nn', 'Bb1 Cc Ee Nn', 'bb1 Ccg Ee Nn', 'bb1 Cc Ee Nn'], maleRatio: [12.5, 12.5, 12.5, 12.5], female: ['Tri-color Mottled Black', 'Barred Black', 'Bronze-', 'Bronze.'], femaleGenotype: ['Bb1 Ccg', 'Bb1 Cc', 'bb1 Ccg', 'bb1 Cc'], femaleRatio: [12.5, 12.5, 12.5, 12.5] } },

{ sire: 'Black Winged Bronze', dam: 'Chocolate Fawn', results: { male: ['Bronze.', 'Bronze.'], maleGenotype: ['bb1 Ccm Ee', 'bb1 Cc Ee'], maleRatio: [25, 25], female: ['Bronze.', 'Bronze.'], femaleGenotype: ['bb1 Ccm', 'bb1 Cc'], femaleRatio: [25, 25] } },

{ sire: 'Black Winged Bronze', dam: 'Chocolate Painted (Split Black Winged Bronze)', results: { male: ['Barred Black', 'Barred Black', 'Black Winged Bronze', 'Black Winged Bronze'], maleGenotype: ['Bb1 Ccm Ee', 'Bb1 Cc Ee', 'b1b1 Ccm Ee', 'b1b1 Cc Ee'], maleRatio: [12.5, 12.5, 12.5, 12.5], female: ['Barred Black', 'Barred Black', 'Black Winged Bronze', 'Black Winged Bronze'], femaleGenotype: ['Bb1 Ccm', 'Bb1 Cc', 'b1b1 Ccm', 'b1b1 Cc'], femaleRatio: [12.5, 12.5, 12.5, 12.5] } },

{ sire: 'Black Winged Bronze', dam: 'Chocolate Painted (Split Bronze)', results: { male: ['Barred Black', 'Barred Black', 'Bronze.', 'Bronze.'], maleGenotype: ['Bb1 Ccm Ee', 'Bb1 Cc Ee', 'bb1 Ccm Ee', 'bb1 Cc Ee'], maleRatio: [12.5, 12.5, 12.5, 12.5], female: ['Barred Black', 'Barred Black', 'Bronze.', 'Bronze.'], femaleGenotype: ['Bb1 Ccm', 'Bb1 Cc', 'bb1 Ccm', 'bb1 Cc'], femaleRatio: [12.5, 12.5, 12.5, 12.5] } },

{ sire: 'Black Winged Bronze', dam: 'Chocolate Palm', results: { male: ['Cornish Palm'], maleGenotype: ['b1b1 Ccg Ee Nn'], maleRatio: [50], female: ['Cornish Palm'], femaleGenotype: ['b1b1 Ccg'], femaleRatio: [50] } },

{ sire: 'Black Winged Bronze', dam: 'Chocolate Slate', results: { male: ['Barred Slate', 'Barred Black'], maleGenotype: ['Bb1 Dd Ee', 'Bb1 Ee'], maleRatio: [25, 25], female: ['Barred Slate', 'Barred Black'], femaleGenotype: ['Bb1 Dd', 'Bb1'], femaleRatio: [25, 25] } },

{ sire: 'Black Winged Bronze', dam: 'Chocolate Sweetgrass', results: { male: ['Cornish Palm'], maleGenotype: ['b1b1 Ccg Ee'], maleRatio: [50], female: ['Cornish Palm'], femaleGenotype: ['b1b1 Ccg'], femaleRatio: [50] } },

{ sire: 'Black Winged Bronze', dam: 'Chocolate Tuxedo', results: { male: ['Barred Black'], maleGenotype: ['Bb1 Ccm Ee'], maleRatio: [50], female: ['Barred Black'], femaleGenotype: ['Bb1 Ccm'], femaleRatio: [50] } },

{ sire: 'Black Winged Bronze', dam: 'Cornish Palm', results: { male: ['Black Winged Bronze', 'Cornish Palm'], maleGenotype: ['b1b1', 'b1b1 Ccg'], maleRatio: [25, 25], female: ['Black Winged Bronze', 'Cornish Palm'], femaleGenotype: ['b1b1', 'b1b1 Ccg'], femaleRatio: [25, 25] } },

{ sire: 'Black Winged Bronze', dam: 'Dark Blue', results: { male: ['Red Slate', 'Bronze-'], maleGenotype: ['bb1 Ccg Dd Nn', 'bb1 Ccg Nn'], maleRatio: [25, 25], female: ['Red Slate', 'Bronze-'], femaleGenotype: ['bb1 Ccg Dd', 'bb1 Ccg'], femaleRatio: [25, 25] } },

{ sire: 'Black Winged Bronze', dam: 'Dark Gray', results: { male: ['Bronze-'], maleGenotype: ['bb1 Ccg Nn'], maleRatio: [50], female: ['Bronze-'], femaleGenotype: ['bb1 Ccg'], femaleRatio: [50] } },

{ sire: 'Black Winged Bronze', dam: 'Dilute Rusty Black', results: { male: ['Barred Black', 'Rusty Black', 'Bronze.', 'Red Bronze.'], maleGenotype: ['Bb1 Nn', 'Bb1 Nn Rr', 'bb1 Nn', 'bb1 Nn Rr'], maleRatio: [12.5, 12.5, 12.5, 12.5], female: ['Barred Black', 'Rusty Black', 'Bronze.', 'Red Bronze.'], femaleGenotype: ['Bb1', 'Bb1 Rr', 'bb1', 'bb1 Rr'], femaleRatio: [12.5, 12.5, 12.5, 12.5] } },

{ sire: 'Black Winged Bronze', dam: 'Dilute Rusty Slate', results: { male: ['Barred Slate', 'Rusty Slate', 'Barred Black', 'Rusty Black', 'Red Slate', 'Blue Red Bronze.', 'Bronze.', 'Red Bronze.'], maleGenotype: ['Bb1 Dd Nn', 'Bb1 Dd Nn Rr', 'Bb1 Nn', 'Bb1 Nn Rr', 'bb1 Dd Nn', 'bb1 Dd Nn Rr', 'bb1 Nn', 'bb1 Nn Rr'], maleRatio: [6.25, 6.25, 6.25, 6.25, 6.25, 6.25, 6.25, 6.25], female: ['Barred Slate', 'Rusty Slate', 'Barred Black', 'Rusty Black', 'Red Slate', 'Blue Red Bronze.', 'Bronze.', 'Red Bronze.'], femaleGenotype: ['Bb1 Dd', 'Bb1 Dd Rr', 'Bb1', 'Bb1 Rr', 'bb1 Dd', 'bb1 Dd Rr', 'bb1', 'bb1 Rr'], femaleRatio: [6.25, 6.25, 6.25, 6.25, 6.25, 6.25, 6.25, 6.25] } },

{ sire: 'Black Winged Bronze', dam: 'Fall Fire', results: { male: ['Cornish Palm', 'Red Phoenix'], maleGenotype: ['b1b1 Ccg', 'b1b1 Ccg Rr'], maleRatio: [25, 25], female: ['Cornish Palm', 'Red Phoenix'], femaleGenotype: ['b1b1 Ccg', 'b1b1 Ccg Rr'], femaleRatio: [25, 25] } },

{ sire: 'Black Winged Bronze', dam: 'Fawn', results: { male: ['Bronze.', 'Bronze.'], maleGenotype: ['bb1 Ccm', 'bb1 Cc'], maleRatio: [25, 25], female: ['Bronze.', 'Bronze.'], femaleGenotype: ['bb1 Ccm', 'bb1 Cc'], femaleRatio: [25, 25] } },

{ sire: 'Black Winged Bronze', dam: 'Frosted Dark Blue', results: { male: ['Red Slate', 'Blue Red Bronze.', 'Bronze-', 'Red Bronze-'], maleGenotype: ['bb1 Ccg Dd Nn', 'bb1 Ccg Dd Nn Rr', 'bb1 Ccg Nn', 'bb1 Ccg Nn Rr'], maleRatio: [12.5, 12.5, 12.5, 12.5], female: ['Red Slate', 'Blue Red Bronze.', 'Bronze-', 'Red Bronze-'], femaleGenotype: ['bb1 Ccg Dd', 'bb1 Ccg Dd Rr', 'bb1 Ccg', 'bb1 Ccg Rr'], femaleRatio: [12.5, 12.5, 12.5, 12.5] } },

{ sire: 'Black Winged Bronze', dam: 'Frosted Dark Gray', results: { male: ['Bronze-', 'Red Bronze-'], maleGenotype: ['bb1 Ccg Nn', 'bb1 Ccg Nn Rr'], maleRatio: [25, 25], female: ['Bronze-', 'Red Bronze-'], femaleGenotype: ['bb1 Ccg', 'bb1 Ccg Rr'], femaleRatio: [25, 25] } },

{ sire: 'Black Winged Bronze', dam: 'Frosted Oregon Blue', results: { male: ['Red Slate', 'Blue Red Bronze.', 'Bronze-', 'Red Bronze-', 'Red Slate', 'Blue Red Bronze.', 'Bronze.', 'Red Bronze.'], maleGenotype: ['bb1 Ccg Dd Nn', 'bb1 Ccg Dd Nn Rr', 'bb1 Ccg Nn', 'bb1 Ccg Nn Rr', 'bb1 Cc Dd Nn', 'bb1 Cc Dd Nn Rr', 'bb1 Cc Nn', 'bb1 Cc Nn Rr'], maleRatio: [6.25, 6.25, 6.25, 6.25, 6.25, 6.25, 6.25, 6.25], female: ['Red Slate', 'Blue Red Bronze.', 'Bronze-', 'Red Bronze-', 'Red Slate', 'Blue Red Bronze.', 'Bronze.', 'Red Bronze.'], femaleGenotype: ['bb1 Ccg Dd', 'bb1 Ccg Dd Rr', 'bb1 Ccg', 'bb1 Ccg Rr', 'bb1 Cc Dd', 'bb1 Cc Dd Rr', 'bb1 Cc', 'bb1 Cc Rr'], femaleRatio: [6.25, 6.25, 6.25, 6.25, 6.25, 6.25, 6.25, 6.25] } },

{ sire: 'Black Winged Bronze', dam: 'Frosted Oregon Gray', results: { male: ['Bronze-', 'Red Bronze-', 'Bronze.', 'Red Bronze.'], maleGenotype: ['bb1 Ccg Nn', 'bb1 Ccg Nn Rr', 'bb1 Cc Nn', 'bb1 Cc Nn Rr'], maleRatio: [12.5, 12.5, 12.5, 12.5], female: ['Bronze-', 'Red Bronze-', 'Bronze.', 'Red Bronze.'], femaleGenotype: ['bb1 Ccg', 'bb1 Ccg Rr', 'bb1 Cc', 'bb1 Cc Rr'], femaleRatio: [12.5, 12.5, 12.5, 12.5] } },

{ sire: 'Black Winged Bronze', dam: 'Golden Narragansett', results: { male: ['Bronze.', 'Red Bronze.'], maleGenotype: ['bb1 Nn', 'bb1 Nn Rr'], maleRatio: [25, 25], female: ['Bronze.', 'Red Bronze.'], femaleGenotype: ['bb1', 'bb1 Rr'], femaleRatio: [25, 25] } },

{ sire: 'Black Winged Bronze', dam: 'Golden Phoenix', results: { male: ['Black Winged Bronze', 'Harvest Gold', 'Cornish Palm', 'Red Phoenix'], maleGenotype: ['b1b1 Nn', 'b1b1 Nn Rr', 'b1b1 Ccg Nn', 'b1b1 Ccg Nn Rr'], maleRatio: [12.5, 12.5, 12.5, 12.5], female: ['Black Winged Bronze', 'Harvest Gold', 'Cornish Palm', 'Red Phoenix'], femaleGenotype: ['b1b1', 'b1b1 Rr', 'b1b1 Ccg', 'b1b1 Ccg Rr'], femaleRatio: [12.5, 12.5, 12.5, 12.5] } },

{ sire: 'Black Winged Bronze', dam: 'Grizzled Black Painted', results: { male: ['Barred Black', 'Barred Black'], maleGenotype: ['Bb1 Ccm', 'Bb1 Cc'], maleRatio: [25, 25], female: ['Barred Black', 'Barred Black'], femaleGenotype: ['Bb1 Ccm', 'Bb1 Cc'], femaleRatio: [25, 25] } },

{ sire: 'Black Winged Bronze', dam: 'Grizzled Chocolate Painted', results: { male: ['Barred Black', 'Barred Black'], maleGenotype: ['Bb1 Ccm Ee', 'Bb1 Cc Ee'], maleRatio: [25, 25], female: ['Barred Black', 'Barred Black'], femaleGenotype: ['Bb1 Ccm', 'Bb1 Cc'], femaleRatio: [25, 25] } },

{ sire: 'Black Winged Bronze', dam: 'Grizzled Slate Painted', results: { male: ['Barred Slate', 'Barred Black', 'Barred Slate', 'Barred Black'], maleGenotype: ['Bb1 Ccm Dd', 'Bb1 Ccm', 'Bb1 Cc Dd', 'Bb1 Cc'], maleRatio: [12.5, 12.5, 12.5, 12.5], female: ['Barred Slate', 'Barred Black', 'Barred Slate', 'Barred Black'], femaleGenotype: ['Bb1 Ccm Dd', 'Bb1 Ccm', 'Bb1 Cc Dd', 'Bb1 Cc'], femaleRatio: [12.5, 12.5, 12.5, 12.5] } },

{ sire: 'Black Winged Bronze', dam: 'Grizzled Lavender Painted', results: { male: ['Barred Slate', 'Barred Slate'], maleGenotype: ['Bb1 Ccm Dd', 'Bb1 Cc Dd'], maleRatio: [25, 25], female: ['Barred Slate', 'Barred Slate'], femaleGenotype: ['Bb1 Ccm Dd', 'Bb1 Cc Dd'], femaleRatio: [25, 25] } },

{ sire: 'Black Winged Bronze', dam: 'Grizzled Recessive Blue Painted', results: { male: ['Barred Black', 'Barred Black'], maleGenotype: ['Bb1 Ccm Slsl', 'Bb1 Cc Slsl'], maleRatio: [25, 25], female: ['Barred Black', 'Barred Black'], femaleGenotype: ['Bb1 Ccm Slsl', 'Bb1 Cc Slsl'], femaleRatio: [25, 25] } },

{ sire: 'Black Winged Bronze', dam: 'Grizzled Rusty Painted', results: { male: ['Barred Black', 'Rusty Black', 'Barred Black', 'Rusty Black'], maleGenotype: ['Bb1 Ccm', 'Bb1 Ccm Rr', 'Bb1 Cc', 'Bb1 Cc Rr'], maleRatio: [12.5, 12.5, 12.5, 12.5], female: ['Barred Black', 'Rusty Black', 'Barred Black', 'Rusty Black'], femaleGenotype: ['Bb1 Ccm', 'Bb1 Ccm Rr', 'Bb1 Cc', 'Bb1 Cc Rr'], femaleRatio: [12.5, 12.5, 12.5, 12.5] } },

{ sire: 'Black Winged Bronze', dam: 'Harvest Gold', results: { male: ['Black Winged Bronze', 'Harvest Gold'], maleGenotype: ['b1b1', 'b1b1 Rr'], maleRatio: [25, 25], female: ['Black Winged Bronze', 'Harvest Gold'], femaleGenotype: ['b1b1', 'b1b1 Rr'], femaleRatio: [25, 25] } },

{ sire: 'Black Winged Bronze', dam: 'Jersey Buff', results: { male: ['Rusty Black'], maleGenotype: ['Bb1 Rr'], maleRatio: [50], female: ['Rusty Black'], femaleGenotype: ['Bb1 Rr'], femaleRatio: [50] } },

{ sire: 'Black Winged Bronze', dam: 'Lavender', results: { male: ['Barred Slate'], maleGenotype: ['Bb1 Dd'], maleRatio: [50], female: ['Barred Slate'], femaleGenotype: ['Bb1 Dd'], femaleRatio: [50] } },

{ sire: 'Black Winged Bronze', dam: 'Lavender Edged Bourbon Red', results: { male: ['Blue Red Bronze.'], maleGenotype: ['bb1 Dd Rr'], maleRatio: [50], female: ['Blue Red Bronze.'], femaleGenotype: ['bb1 Dd Rr'], femaleRatio: [50] } },

{ sire: 'Black Winged Bronze', dam: 'Lavender Fall Fire', results: { male: ['Blue Cornish Palm', 'Blue Red Phoenix'], maleGenotype: ['b1b1 Ccg Dd', 'b1b1 Ccg Dd Rr'], maleRatio: [25, 25], female: ['Blue Cornish Palm', 'Blue Red Phoenix'], femaleGenotype: ['b1b1 Ccg Dd', 'b1b1 Ccg Dd Rr'], femaleRatio: [25, 25] } },

{ sire: 'Black Winged Bronze', dam: 'Lavender Painted (Split Black Winged Bronze)', results: { male: ['Barred Slate', 'Barred Slate', 'Blue Winged Red Slate', 'Blue Winged Red Slate'], maleGenotype: ['Bb1 Ccm Dd', 'Bb1 Cc Dd', 'b1b1 Ccm Dd', 'b1b1 Cc Dd'], maleRatio: [12.5, 12.5, 12.5, 12.5], female: ['Barred Slate', 'Barred Slate', 'Blue Winged Red Slate', 'Blue Winged Red Slate'], femaleGenotype: ['Bb1 Ccm Dd', 'Bb1 Cc Dd', 'b1b1 Ccm Dd', 'b1b1 Cc Dd'], femaleRatio: [12.5, 12.5, 12.5, 12.5] } },

{ sire: 'Black Winged Bronze', dam: 'Lavender Painted (Split Bronze)', results: { male: ['Barred Slate', 'Barred Slate', 'Red Slate', 'Red Slate'], maleGenotype: ['Bb1 Ccm Dd', 'Bb1 Cc Dd', 'bb1 Ccm Dd', 'bb1 Cc Dd'], maleRatio: [12.5, 12.5, 12.5, 12.5], female: ['Barred Slate', 'Barred Slate', 'Red Slate', 'Red Slate'], femaleGenotype: ['Bb1 Ccm Dd', 'Bb1 Cc Dd', 'bb1 Ccm Dd', 'bb1 Cc Dd'], femaleRatio: [12.5, 12.5, 12.5, 12.5] } },

{ sire: 'Black Winged Bronze', dam: 'Lavender Palm', results: { male: ['Blue Cornish Palm'], maleGenotype: ['b1b1 Ccg Dd Nn'], maleRatio: [50], female: ['Blue Cornish Palm'], femaleGenotype: ['b1b1 Ccg Dd'], femaleRatio: [50] } },

{ sire: 'Black Winged Bronze', dam: 'Lavender Red Bronze', results: { male: ['Red Slate', 'Blue Red Bronze.'], maleGenotype: ['bb1 Dd', 'bb1 Dd Rr'], maleRatio: [25, 25], female: ['Red Slate', 'Blue Red Bronze.'], femaleGenotype: ['bb1 Dd', 'bb1 Dd Rr'], femaleRatio: [25, 25] } },

{ sire: 'Black Winged Bronze', dam: 'Lavender Sweetgrass', results: { male: ['Blue Cornish Palm'], maleGenotype: ['b1b1 Ccg Dd'], maleRatio: [50], female: ['Blue Cornish Palm'], femaleGenotype: ['b1b1 Ccg Dd'], femaleRatio: [50] } },

{ sire: 'Black Winged Bronze', dam: 'Lavender Tuxedo', results: { male: ['Barred Slate'], maleGenotype: ['Bb1 Ccm Dd'], maleRatio: [50], female: ['Barred Slate'], femaleGenotype: ['Bb1 Ccm Dd'], femaleRatio: [50] } },

{ sire: 'Black Winged Bronze', dam: 'Light Buff', results: { male: ['Harvest Gold'], maleGenotype: ['b1b1 Nn Rr'], maleRatio: [50], female: ['Harvest Gold'], femaleGenotype: ['b1b1 Rr'], femaleRatio: [50] } },

{ sire: 'Black Winged Bronze', dam: 'Light Red', results: { male: ['Harvest Gold', 'Red Phoenix'], maleGenotype: ['b1b1 Rr', 'b1b1 Ccg Rr'], maleRatio: [25, 25], female: ['Harvest Gold', 'Red Phoenix'], femaleGenotype: ['b1b1 Rr', 'b1b1 Ccg Rr'], femaleRatio: [25, 25] } },

{ sire: 'Black Winged Bronze', dam: 'Lilac', results: { male: ['Red Slate'], maleGenotype: ['bb1 Dd'], maleRatio: [50], female: ['Red Slate'], femaleGenotype: ['bb1 Dd'], femaleRatio: [50] } },

{ sire: 'Black Winged Bronze', dam: 'Marbled Black', results: { male: ['Tri-color Mottled Black'], maleGenotype: ['Bb1 Ccg Nn'], maleRatio: [50], female: ['Tri-color Mottled Black'], femaleGenotype: ['Bb1 Ccg'], femaleRatio: [50] } },

{ sire: 'Black Winged Bronze', dam: 'Marbled Lavender', results: { male: ['Tri-color Mottled Slate'], maleGenotype: ['Bb1 Ccg Dd Nn'], maleRatio: [50], female: ['Tri-color Mottled Slate'], femaleGenotype: ['Bb1 Ccg Dd'], femaleRatio: [50] } },
 
{ sire: 'Black Winged Bronze', dam: 'Marbled Slate', results: { male: ['Tri-color Mottled Slate', 'Tri-color Mottled Black'], maleGenotype: ['Bb1 Ccg Dd Nn', 'Bb1 Ccg Nn'], maleRatio: [25, 25], female: ['Tri-color Mottled Slate', 'Tri-color Mottled Black'], femaleGenotype: ['Bb1 Ccg Dd', 'Bb1 Ccg'], femaleRatio: [25, 25] } },
   
{ sire: 'Black Winged Bronze', dam: 'Mottled Auburn', results: { male: ['Bronze.'], maleGenotype: ['bb1 Ccm Ee'], maleRatio: [50], female: ['Bronze.'], femaleGenotype: ['bb1 Ccm'], femaleRatio: [50] } },

{ sire: 'Black Winged Bronze', dam: 'Mottled Black', results: { male: ['Tri-color Mottled Black', 'Cornish Palm'], maleGenotype: ['Bb1 Ccg Nn', 'b1b1 Ccg Nn'], maleRatio: [25, 25], female: ['Tri-color Mottled Black', 'Cornish Palm'], femaleGenotype: ['Bb1 Ccg', 'b1b1 Ccg'], femaleRatio: [25, 25] } },

{ sire: 'Black Winged Bronze', dam: 'Mottled Black Tuxedo', results: { male: ['Barred Black', 'Black Winged Bronze'], maleGenotype: ['Bb1 Ccm', 'b1b1 Ccm'], maleRatio: [25, 25], female: ['Barred Black', 'Black Winged Bronze'], femaleGenotype: ['Bb1 Ccm', 'b1b1 Ccm'], femaleRatio: [25, 25] } },
  
{ sire: 'Black Winged Bronze', dam: 'Mottled Black Winged Bronze', results: { male: ['Black Winged Bronze'], maleGenotype: ['b1b1 Ccm'], maleRatio: [50], female: ['Black Winged Bronze'], femaleGenotype: ['b1b1 Ccm'], femaleRatio: [50] } },

{ sire: 'Black Winged Bronze', dam: 'Mottled Bronze', results: { male: ['Bronze.'], maleGenotype: ['bb1 Ccm'], maleRatio: [50], female: ['Bronze.'], femaleGenotype: ['bb1 Ccm'], femaleRatio: [50] } },

{ sire: 'Black Winged Bronze', dam: 'Mottled Brown Winged Auburn', results: { male: ['Black Winged Bronze'], maleGenotype: ['b1b1 Ccm Ee'], maleRatio: [50], female: ['Black Winged Bronze'], femaleGenotype: ['b1b1 Ccm'], femaleRatio: [50] } },

{ sire: 'Black Winged Bronze', dam: 'Mottled Chocolate', results: { male: ['Tri-color Mottled Black', 'Cornish Palm'], maleGenotype: ['Bb1 Ccg Ee Nn', 'b1b1 Ccg Ee Nn'], maleRatio: [25, 25], female: ['Tri-color Mottled Black', 'Cornish Palm'], femaleGenotype: ['Bb1 Ccg', 'b1b1 Ccg'], femaleRatio: [25, 25] } },

{ sire: 'Black Winged Bronze', dam: 'Mottled Chocolate Dapple', results: { male: ['Tri-color Mottled Black', 'Barred Black', 'Cornish Palm', 'Black Winged Bronze'], maleGenotype: ['Bb1 Ccg Ee Nn', 'Bb1 Cc Ee Nn', 'b1b1 Ccg Ee Nn', 'b1b1 Cc Ee Nn'], maleRatio: [12.5, 12.5, 12.5, 12.5], female: ['Tri-color Mottled Black', 'Barred Black', 'Cornish Palm', 'Black Winged Bronze'], femaleGenotype: ['Bb1 Ccg', 'Bb1 Cc', 'b1b1 Ccg', 'b1b1 Cc'], femaleRatio: [12.5, 12.5, 12.5, 12.5] } },
 
{ sire: 'Black Winged Bronze', dam: 'Mottled Dilute Rusty Brown', results: { male: ['Tri-color Mottled Black', 'Mottled Rusty Black', 'Cornish Palm', 'Red Phoenix'], maleGenotype: ['Bb1 Ccg Ee Nn', 'Bb1 Ccg Ee Nn Rr', 'b1b1 Ccg Ee Nn', 'b1b1 Ccg Ee Nn Rr'], maleRatio: [12.5, 12.5, 12.5, 12.5], female: ['Tri-color Mottled Black', 'Mottled Rusty Black', 'Cornish Palm', 'Red Phoenix'], femaleGenotype: ['Bb1 Ccg', 'Bb1 Ccg Rr', 'b1b1 Ccg', 'b1b1 Ccg Rr'], femaleRatio: [12.5, 12.5, 12.5, 12.5] } },

{ sire: 'Black Winged Bronze', dam: 'Mottled Lavender', results: { male: ['Tri-color Mottled Slate', 'Blue Cornish Palm'], maleGenotype: ['Bb1 Ccg Dd Nn', 'b1b1 Ccg Dd Nn'], maleRatio: [25, 25], female: ['Tri-color Mottled Slate', 'Blue Cornish Palm'], femaleGenotype: ['Bb1 Ccg Dd', 'b1b1 Ccg Dd'], femaleRatio: [25, 25] } },

{ sire: 'Black Winged Bronze', dam: 'Mottled Recessive Blue Tuxedo', results: { male: ['Barred Black', 'Black Winged Bronze'], maleGenotype: ['Bb1 Ccm Slsl', 'b1b1 Ccm Slsl'], maleRatio: [25, 25], female: ['Barred Black', 'Black Winged Bronze'], femaleGenotype: ['Bb1 Ccm Slsl', 'b1b1 Ccm Slsl'], femaleRatio: [25, 25] } },  

{ sire: 'Black Winged Bronze', dam: 'Mottled Recessive Slate', results: { male: ['Bronze.'], maleGenotype: ['bb1 Ccm Slsl'], maleRatio: [50], female: ['Bronze.'], femaleGenotype: ['bb1 Ccm Slsl'], femaleRatio: [50] } },

{ sire: 'Black Winged Bronze', dam: 'Mottled Red', results: { male: ['Red Bronze.'], maleGenotype: ['bb1 Ccm Rr'], maleRatio: [50], female: ['Red Bronze.'], femaleGenotype: ['bb1 Ccm Rr'], femaleRatio: [50] } },

{ sire: 'Black Winged Bronze', dam: 'Mottled Red Bronze', results: { male: ['Bronze.', 'Red Bronze.'], maleGenotype: ['bb1 Ccm', 'bb1 Ccm Rr'], maleRatio: [25, 25], female: ['Bronze.', 'Red Bronze.'], femaleGenotype: ['bb1 Ccm', 'bb1 Ccm Rr'], femaleRatio: [25, 25] } },

{ sire: 'Black Winged Bronze', dam: 'Mottled Rusty Black', results: { male: ['Tri-color Mottled Black', 'Mottled Rusty Black', 'Cornish Palm', 'Red Phoenix'], maleGenotype: ['Bb1 Ccg', 'Bb1 Ccg Rr', 'b1b1 Ccg', 'b1b1 Ccg Rr'], maleRatio: [12.5, 12.5, 12.5, 12.5], female: ['Tri-color Mottled Black', 'Mottled Rusty Black', 'Cornish Palm', 'Red Phoenix'], femaleGenotype: ['Bb1 Ccg', 'Bb1 Ccg Rr', 'b1b1 Ccg', 'b1b1 Ccg Rr'], femaleRatio: [12.5, 12.5, 12.5, 12.5] } },

{ sire: 'Black Winged Bronze', dam: 'Mottled Rusty Slate', results: { male: ['Tri-color Mottled Slate', 'Mottled Rusty Slate', 'Tri-color Mottled Black', 'Mottled Rusty Black', 'Blue Cornish Palm', 'Blue Red Phoenix', 'Cornish Palm', 'Red Phoenix'], maleGenotype: ['Bb1 Ccg Dd', 'Bb1 Ccg Dd Rr', 'Bb1 Ccg', 'Bb1 Ccg Rr', 'b1b1 Ccg Dd', 'b1b1 Ccg Dd Rr', 'b1b1 Ccg', 'b1b1 Ccg Rr'], maleRatio: [6.25, 6.25, 6.25, 6.25, 6.25, 6.25, 6.25, 6.25], female: ['Tri-color Mottled Slate', 'Mottled Rusty Slate', 'Tri-color Mottled Black', 'Mottled Rusty Black', 'Blue Cornish Palm', 'Blue Red Phoenix', 'Cornish Palm', 'Red Phoenix'], femaleGenotype: ['Bb1 Ccg Dd', 'Bb1 Ccg Dd Rr', 'Bb1 Ccg', 'Bb1 Ccg Rr', 'b1b1 Ccg Dd', 'b1b1 Ccg Dd Rr', 'b1b1 Ccg', 'b1b1 Ccg Rr'], femaleRatio: [6.25, 6.25, 6.25, 6.25, 6.25, 6.25, 6.25, 6.25] } },

{ sire: 'Black Winged Bronze', dam: 'Mottled Silver Dapple', results: { male: ['Tri-color Mottled Black', 'Barred Black', 'Cornish Palm', 'Black Winged Bronze'], maleGenotype: ['Bb1 Ccg Nn', 'Bb1 Cc Nn', 'b1b1 Ccg Nn', 'b1b1 Cc Nn'], maleRatio: [12.5, 12.5, 12.5, 12.5], female: ['Tri-color Mottled Black', 'Barred Black', 'Cornish Palm', 'Black Winged Bronze'], femaleGenotype: ['Bb1 Ccg', 'Bb1 Cc', 'b1b1 Ccg', 'b1b1 Cc'], femaleRatio: [12.5, 12.5, 12.5, 12.5] } },

{ sire: 'Black Winged Bronze', dam: 'Mottled Slate', results: { male: ['Tri-color Mottled Slate', 'Tri-color Mottled Black', 'Blue Cornish Palm', 'Cornish Palm'], maleGenotype: ['Bb1 Ccg Dd Nn', 'Bb1 Ccg Nn', 'b1b1 Ccg Dd Nn', 'b1b1 Ccg Nn'], maleRatio: [12.5, 12.5, 12.5, 12.5], female: ['Tri-color Mottled Slate', 'Tri-color Mottled Black', 'Blue Cornish Palm', 'Cornish Palm'], femaleGenotype: ['Bb1 Ccg Dd', 'Bb1 Ccg', 'b1b1 Ccg Dd', 'b1b1 Ccg'], femaleRatio: [12.5, 12.5, 12.5, 12.5] } },

{ sire: 'Black Winged Bronze', dam: 'Narragansett', results: { male: ['Bronze.'], maleGenotype: ['bb1 Nn'], maleRatio: [50], female: ['Bronze.'], femaleGenotype: ['bb1'], femaleRatio: [50] } },

{ sire: 'Black Winged Bronze', dam: 'Oregon Blue', results: { male: ['Red Slate', 'Bronze-', 'Red Slate', 'Bronze.'], maleGenotype: ['bb1 Ccg Dd Nn', 'bb1 Ccg Nn', 'bb1 Cc Dd Nn', 'bb1 Cc Nn'], maleRatio: [12.5, 12.5, 12.5, 12.5], female: ['Red Slate', 'Bronze-', 'Red Slate', 'Bronze.'], femaleGenotype: ['bb1 Ccg Dd', 'bb1 Ccg', 'bb1 Cc Dd', 'bb1 Cc'], femaleRatio: [12.5, 12.5, 12.5, 12.5] } },

{ sire: 'Black Winged Bronze', dam: 'Oregon Brown', results: { male: ['Bronze-', 'Bronze.'], maleGenotype: ['bb1 Ccg Ee Nn', 'bb1 Cc Ee Nn'], maleRatio: [25, 25], female: ['Bronze-', 'Bronze.'], femaleGenotype: ['bb1 Ccg', 'bb1 Cc'], femaleRatio: [25, 25] } },

{ sire: 'Black Winged Bronze', dam: 'Oregon Gray', results: { male: ['Bronze-', 'Bronze.'], maleGenotype: ['bb1 Ccg Nn', 'bb1 Cc Nn'], maleRatio: [25, 25], female: ['Bronze-', 'Bronze.'], femaleGenotype: ['bb1 Ccg', 'bb1 Cc'], femaleRatio: [25, 25] } },

{ sire: 'Black Winged Bronze', dam: 'Oregon Lavender Blue', results: { male: ['Red Slate', 'Red Slate'], maleGenotype: ['bb1 Ccg Dd Nn', 'bb1 Cc Dd Nn'], maleRatio: [25, 25], female: ['Red Slate', 'Red Slate'], femaleGenotype: ['bb1 Ccg Dd', 'bb1 Cc Dd'], femaleRatio: [25, 25] } },

{ sire: 'Black Winged Bronze', dam: 'Painted (Split Black Winged Bronze)', results: { male: ['Barred Black', 'Barred Black', 'Black Winged Bronze', 'Black Winged Bronze'], maleGenotype: ['Bb1 Ccm', 'Bb1 Cc', 'b1b1 Ccm', 'b1b1 Cc'], maleRatio: [12.5, 12.5, 12.5, 12.5], female: ['Barred Black', 'Barred Black', 'Black Winged Bronze', 'Black Winged Bronze'], femaleGenotype: ['Bb1 Ccm', 'Bb1 Cc', 'b1b1 Ccm', 'b1b1 Cc'], femaleRatio: [12.5, 12.5, 12.5, 12.5] } },

{ sire: 'Black Winged Bronze', dam: 'Painted (Split Bronze)', results: { male: ['Barred Black', 'Barred Black', 'Bronze.', 'Bronze.'], maleGenotype: ['Bb1 Ccm', 'Bb1 Cc', 'bb1 Ccm', 'bb1 Cc'], maleRatio: [12.5, 12.5, 12.5, 12.5], female: ['Barred Black', 'Barred Black', 'Bronze.', 'Bronze.'], femaleGenotype: ['Bb1 Ccm', 'Bb1 Cc', 'bb1 Ccm', 'bb1 Cc'], femaleRatio: [12.5, 12.5, 12.5, 12.5] } },

{ sire: 'Black Winged Bronze', dam: 'Pencilled Black Winged Bronze', results: { male: ['Pencilled Black Winged Bronze.'], maleGenotype: ['b1b1 Pnpn'], maleRatio: [50], female: ['Pencilled Black Winged Bronze.'], femaleGenotype: ['b1b1 Pnpn'], femaleRatio: [50] } },

{ sire: 'Black Winged Bronze', dam: 'Pencilled Blue Fall Fire', results: { male: ['Tiger Blue', 'Pencilled Blue Red Phoenix', 'Tiger Bronze', 'Pencilled Red Phoenix.'], maleGenotype: ['b1b1 Ccg Dd Pnpn', 'b1b1 Ccg Dd Pnpn Rr', 'b1b1 Ccg Pnpn', 'b1b1 Ccg Pnpn Rr'], maleRatio: [12.5, 12.5, 12.5, 12.5], female: ['Tiger Blue', 'Pencilled Blue Red Phoenix', 'Tiger Bronze', 'Pencilled Red Phoenix.'], femaleGenotype: ['b1b1 Ccg Dd Pnpn', 'b1b1 Ccg Dd Pnpn Rr', 'b1b1 Ccg Pnpn', 'b1b1 Ccg Pnpn Rr'], femaleRatio: [12.5, 12.5, 12.5, 12.5] } },

{ sire: 'Black Winged Bronze', dam: 'Pencilled Blue Palm', results: { male: ['Tiger Blue', 'Tiger Bronze'], maleGenotype: ['b1b1 Ccg Dd Nn Pnpn', 'b1b1 Ccg Nn Pnpn'], maleRatio: [25, 25], female: ['Tiger Blue', 'Tiger Bronze'], femaleGenotype: ['b1b1 Ccg Dd Pnpn', 'b1b1 Ccg Pnpn'], femaleRatio: [25, 25] } },

{ sire: 'Black Winged Bronze', dam: 'Pencilled Blue Sweetgrass', results: { male: ['Tiger Blue', 'Tiger Bronze'], maleGenotype: ['b1b1 Ccg Dd Pnpn', 'b1b1 Ccg Pnpn'], maleRatio: [25, 25], female: ['Tiger Blue', 'Tiger Bronze'], femaleGenotype: ['b1b1 Ccg Dd Pnpn', 'b1b1 Ccg Pnpn'], femaleRatio: [25, 25] } },

{ sire: 'Black Winged Bronze', dam: 'Pencilled Chocolate Palm', results: { male: ['Tiger Bronze'], maleGenotype: ['b1b1 Ccg Ee Nn Pnpn'], maleRatio: [50], female: ['Tiger Bronze'], femaleGenotype: ['b1b1 Ccg Pnpn'], femaleRatio: [50] } },

{ sire: 'Black Winged Bronze', dam: 'Pencilled Fall Fire', results: { male: ['Tiger Bronze', 'Pencilled Red Phoenix.'], maleGenotype: ['b1b1 Ccg Pnpn', 'b1b1 Ccg Pnpn Rr'], maleRatio: [25, 25], female: ['Tiger Bronze', 'Pencilled Red Phoenix.'], femaleGenotype: ['b1b1 Ccg Pnpn', 'b1b1 Ccg Pnpn Rr'], femaleRatio: [25, 25] } },

{ sire: 'Black Winged Bronze', dam: 'Pencilled Lavender Fall Fire', results: { male: ['Tiger Blue', 'Pencilled Blue Red Phoenix'], maleGenotype: ['b1b1 Ccg Dd Pnpn', 'b1b1 Ccg Dd Pnpn Rr'], maleRatio: [25, 25], female: ['Tiger Blue', 'Pencilled Blue Red Phoenix'], femaleGenotype: ['b1b1 Ccg Dd Pnpn', 'b1b1 Ccg Dd Pnpn Rr'], femaleRatio: [25, 25] } },

{ sire: 'Black Winged Bronze', dam: 'Pencilled Lavender Sweetgrass', results: { male: ['Tiger Blue'], maleGenotype: ['b1b1 Ccg Dd Pnpn'], maleRatio: [50], female: ['Tiger Blue'], femaleGenotype: ['b1b1 Ccg Dd Pnpn'], femaleRatio: [50] } },

{ sire: 'Black Winged Bronze', dam: 'Pencilled Light Red', results: { male: ['Pencilled Harvest Gold', 'Pencilled Red Phoenix.'], maleGenotype: ['b1b1 Pnpn Rr', 'b1b1 Ccg Pnpn Rr'], maleRatio: [25, 25], female: ['Pencilled Harvest Gold', 'Pencilled Red Phoenix.'], femaleGenotype: ['b1b1 Pnpn Rr', 'b1b1 Ccg Pnpn Rr'], femaleRatio: [25, 25] } },

{ sire: 'Black Winged Bronze', dam: 'Pencilled Palm', results: { male: ['Tiger Bronze'], maleGenotype: ['b1b1 Ccg Nn Pnpn'], maleRatio: [50], female: ['Tiger Bronze'], femaleGenotype: ['b1b1 Ccg Pnpn'], femaleRatio: [50] } },

{ sire: 'Black Winged Bronze', dam: 'Pencilled Red Palm', results: { male: ['Pencilled Red Phoenix.'], maleGenotype: ['b1b1 Ccg Nn Pnpn Rr'], maleRatio: [50], female: ['Pencilled Red Phoenix.'], femaleGenotype: ['b1b1 Ccg Pnpn Rr'], femaleRatio: [50] } },

{ sire: 'Black Winged Bronze', dam: 'Pencilled Sweetgrass', results: { male: ['Tiger Bronze'], maleGenotype: ['b1b1 Ccg Pnpn'], maleRatio: [50], female: ['Tiger Bronze'], femaleGenotype: ['b1b1 Ccg Pnpn'], femaleRatio: [50] } },

{ sire: 'Black Winged Bronze', dam: 'Recessive Blue Fawn', results: { male: ['Bronze.', 'Bronze.'], maleGenotype: ['bb1 Ccm Slsl', 'bb1 Cc Slsl'], maleRatio: [25, 25], female: ['Bronze.', 'Bronze.'], femaleGenotype: ['bb1 Ccm Slsl', 'bb1 Cc Slsl'], femaleRatio: [25, 25] } },

{ sire: 'Black Winged Bronze', dam: 'Recessive Blue Narragansett', results: { male: ['Bronze.'], maleGenotype: ['bb1 Nn Slsl'], maleRatio: [50], female: ['Bronze.'], femaleGenotype: ['bb1 Slsl'], femaleRatio: [50] } },

{ sire: 'Black Winged Bronze', dam: 'Recessive Blue Painted (Split Black Winged Bronze)', results: { male: ['Barred Black', 'Barred Black', 'Black Winged Bronze', 'Black Winged Bronze'], maleGenotype: ['Bb1 Ccm Slsl', 'Bb1 Cc Slsl', 'b1b1 Ccm Slsl', 'b1b1 Cc Slsl'], maleRatio: [12.5, 12.5, 12.5, 12.5], female: ['Barred Black', 'Barred Black', 'Black Winged Bronze', 'Black Winged Bronze'], femaleGenotype: ['Bb1 Ccm Slsl', 'Bb1 Cc Slsl', 'b1b1 Ccm Slsl', 'b1b1 Cc Slsl'], femaleRatio: [12.5, 12.5, 12.5, 12.5] } },

{ sire: 'Black Winged Bronze', dam: 'Recessive Blue Painted (Split Bronze)', results: { male: ['Barred Black', 'Barred Black', 'Bronze.', 'Bronze.'], maleGenotype: ['Bb1 Ccm Slsl', 'Bb1 Cc Slsl', 'bb1 Ccm Slsl', 'bb1 Cc Slsl'], maleRatio: [12.5, 12.5, 12.5, 12.5], female: ['Barred Black', 'Barred Black', 'Bronze.', 'Bronze.'], femaleGenotype: ['Bb1 Ccm Slsl', 'Bb1 Cc Slsl', 'bb1 Ccm Slsl', 'bb1 Cc Slsl'], femaleRatio: [12.5, 12.5, 12.5, 12.5] } },

{ sire: 'Black Winged Bronze', dam: 'Recessive Blue Sweetgrass', results: { male: ['Cornish Palm'], maleGenotype: ['b1b1 Ccg Slsl'], maleRatio: [50], female: ['Cornish Palm'], femaleGenotype: ['b1b1 Ccg Slsl'], femaleRatio: [50] } },

{ sire: 'Black Winged Bronze', dam: 'Recessive Blue Tuxedo', results: { male: ['Barred Black'], maleGenotype: ['Bb1 Ccm Slsl'], maleRatio: [50], female: ['Barred Black'], femaleGenotype: ['Bb1 Ccm Slsl'], femaleRatio: [50] } },

{ sire: 'Black Winged Bronze', dam: 'Recessive Lilac', results: { male: ['Red Bronze'], maleGenotype: ['bb1 Rr Slsl'], maleRatio: [50], female: ['Red Bronze'], femaleGenotype: ['bb1 Rr Slsl'], femaleRatio: [50] } },

{ sire: 'Black Winged Bronze', dam: 'Recessive Slate', results: { male: ['Bronze'], maleGenotype: ['bb1 Slsl'], maleRatio: [50], female: ['Bronze'], femaleGenotype: ['bb1 Slsl'], femaleRatio: [50] } },

{ sire: 'Black Winged Bronze', dam: 'Red Bronze', results: { male: ['Bronze', 'Red Bronze'], maleGenotype: ['bb1', 'bb1 Rr'], maleRatio: [25, 25], female: ['Bronze', 'Red Bronze'], femaleGenotype: ['bb1', 'bb1 Rr'], femaleRatio: [25, 25] } },

{ sire: 'Black Winged Bronze', dam: 'Red Lilac', results: { male: ['Rusty Black'], maleGenotype: ['Bb1 Rr Slsl'], maleRatio: [50], female: ['Rusty Black'], femaleGenotype: ['Bb1 Rr Slsl'], femaleRatio: [50] } },

{ sire: 'Black Winged Bronze', dam: 'Red Recessive Slate', results: { male: ['Bronze', 'Red Bronze'], maleGenotype: ['bb1 Slsl', 'bb1 Rr Slsl'], maleRatio: [25, 25], female: ['Bronze', 'Red Bronze'], femaleGenotype: ['bb1 Slsl', 'bb1 Rr Slsl'], femaleRatio: [25, 25] } },

{ sire: 'Black Winged Bronze', dam: 'Red Palm', results: { male: ['Red Phoenix'], maleGenotype: ['b1b1 Ccg Nn Rr'], maleRatio: [50], female: ['Red Phoenix'], femaleGenotype: ['b1b1 Ccg Rr'], femaleRatio: [50] } },

{ sire: 'Black Winged Bronze', dam: 'Red Phoenix', results: { male: ['Black Winged Bronze', 'Harvest Gold', 'Cornish Palm', 'Red Phoenix'], maleGenotype: ['b1b1', 'b1b1 Rr', 'b1b1 Ccg', 'b1b1 Ccg Rr'], maleRatio: [12.5, 12.5, 12.5, 12.5], female: ['Black Winged Bronze', 'Harvest Gold', 'Cornish Palm', 'Red Phoenix'], femaleGenotype: ['b1b1', 'b1b1 Rr', 'b1b1 Ccg', 'b1b1 Ccg Rr'], femaleRatio: [12.5, 12.5, 12.5, 12.5] } },

{ sire: 'Black Winged Bronze', dam: 'Red Slate', results: { male: ['Red Slate', 'Bronze'], maleGenotype: ['bb1 Dd', 'bb1'], maleRatio: [25, 25], female: ['Red Slate', 'Bronze'], femaleGenotype: ['bb1 Dd', 'bb1'], femaleRatio: [25, 25] } },

{ sire: 'Black Winged Bronze', dam: 'Red Sweetgrass', results: { male: ['Red Phoenix'], maleGenotype: ['b1b1 Ccg Rr'], maleRatio: [50], female: ['Red Phoenix'], femaleGenotype: ['b1b1 Ccg Rr'], femaleRatio: [50] } },

{ sire: 'Black Winged Bronze', dam: 'Red Tuxedo', results: { male: ['Rusty Black'], maleGenotype: ['Bb1 Ccm Rr'], maleRatio: [50], female: ['Rusty Black'], femaleGenotype: ['Bb1 Ccm Rr'], femaleRatio: [50] } },

{ sire: 'Black Winged Bronze', dam: 'Regal Red', results: { male: ['Harvest Gold'], maleGenotype: ['b1b1 Rr'], maleRatio: [50], female: ['Harvest Gold'], femaleGenotype: ['b1b1 Rr'], femaleRatio: [50] } },

{ sire: 'Black Winged Bronze', dam: 'Royal Palm', results: { male: ['Cornish Palm'], maleGenotype: ['b1b1 Ccg Nn'], maleRatio: [50], female: ['Cornish Palm'], femaleGenotype: ['b1b1 Ccg'], femaleRatio: [50] } },

{ sire: 'Black Winged Bronze', dam: 'Rusty Black', results: { male: ['Barred Black', 'Rusty Black', 'Bronze.', 'Red Bronze.'], maleGenotype: ['Bb1', 'Bb1 Rr', 'bb1', 'bb1 Rr'], maleRatio: [12.5, 12.5, 12.5, 12.5], female: ['Barred Black', 'Rusty Black', 'Bronze.', 'Red Bronze.'], femaleGenotype: ['Bb1', 'Bb1 Rr', 'bb1', 'bb1 Rr'], femaleRatio: [12.5, 12.5, 12.5, 12.5] } },

{ sire: 'Black Winged Bronze', dam: 'Rusty Brown', results: { male: ['Barred Black', 'Rusty Black', 'Bronze.', 'Red Bronze.'], maleGenotype: ['Bb1 Ee', 'Bb1 Ee Rr', 'bb1 Ee', 'bb1 Ee Rr'], maleRatio: [12.5, 12.5, 12.5, 12.5], female: ['Barred Black', 'Rusty Black', 'Bronze.', 'Red Bronze.'], femaleGenotype: ['Bb1', 'Bb1 Rr', 'bb1', 'bb1 Rr'], femaleRatio: [12.5, 12.5, 12.5, 12.5] } },

{ sire: 'Black Winged Bronze', dam: 'Rusty Slate', results: { male: ['Barred Slate', 'Rusty Slate', 'Barred Black', 'Rusty Black', 'Red Slate', 'Blue Red Bronze.', 'Bronze.', 'Red Bronze.'], maleGenotype: ['Bb1 Dd', 'Bb1 Dd Rr', 'Bb1', 'Bb1 Rr', 'bb1 Dd', 'bb1 Dd Rr', 'bb1', 'bb1 Rr'], maleRatio: [6.25, 6.25, 6.25, 6.25, 6.25, 6.25, 6.25, 6.25], female: ['Barred Slate', 'Rusty Slate', 'Barred Black', 'Rusty Black', 'Red Slate', 'Blue Red Bronze.', 'Bronze.', 'Red Bronze.'], femaleGenotype: ['Bb1 Dd', 'Bb1 Dd Rr', 'Bb1', 'Bb1 Rr', 'bb1 Dd', 'bb1 Dd Rr', 'bb1', 'bb1 Rr'], femaleRatio: [6.25, 6.25, 6.25, 6.25, 6.25, 6.25, 6.25, 6.25] } },

{ sire: 'Black Winged Bronze', dam: 'Rusty Painted (Split Black Winged Bronze)', results: { male: ['Barred Black', 'Rusty Black', 'Barred Black', 'Rusty Black', 'Black Winged Bronze', 'Harvest Gold', 'Black Winged Bronze', 'Harvest Gold'], maleGenotype: ['Bb1 Ccm', 'Bb1 Ccm Rr', 'Bb1 Cc', 'Bb1 Cc Rr', 'b1b1 Ccm', 'b1b1 Ccm Rr', 'b1b1 Cc', 'b1b1 Cc Rr'], maleRatio: [6.25, 6.25, 6.25, 6.25, 6.25, 6.25, 6.25, 6.25], female: ['Barred Black', 'Rusty Black', 'Barred Black', 'Rusty Black', 'Black Winged Bronze', 'Harvest Gold', 'Black Winged Bronze', 'Harvest Gold'], femaleGenotype: ['Bb1 Ccm', 'Bb1 Ccm Rr', 'Bb1 Cc', 'Bb1 Cc Rr', 'b1b1 Ccm', 'b1b1 Ccm Rr', 'b1b1 Cc', 'b1b1 Cc Rr'], femaleRatio: [6.25, 6.25, 6.25, 6.25, 6.25, 6.25, 6.25, 6.25] } },

{ sire: 'Black Winged Bronze', dam: 'Rusty Painted (Split Bronze)', results: { male: ['Barred Black', 'Rusty Black', 'Barred Black', 'Rusty Black', 'Bronze.', 'Red Bronze.', 'Bronze.', 'Red Bronze.'], maleGenotype: ['Bb1 Ccm', 'Bb1 Ccm Rr', 'Bb1 Cc', 'Bb1 Cc Rr', 'bb1 Ccm', 'bb1 Ccm Rr', 'bb1 Cc', 'bb1 Cc Rr'], maleRatio: [6.25, 6.25, 6.25, 6.25, 6.25, 6.25, 6.25, 6.25], female: ['Barred Black', 'Rusty Black', 'Barred Black', 'Rusty Black', 'Bronze.', 'Red Bronze.', 'Bronze.', 'Red Bronze.'], femaleGenotype: ['Bb1 Ccm', 'Bb1 Ccm Rr', 'Bb1 Cc', 'Bb1 Cc Rr', 'bb1 Ccm', 'bb1 Ccm Rr', 'bb1 Cc', 'bb1 Cc Rr'], femaleRatio: [6.25, 6.25, 6.25, 6.25, 6.25, 6.25, 6.25, 6.25] } },

{ sire: 'Black Winged Bronze', dam: 'Rusty Tuxedo (Split Bronze)', results: { male: ['Barred Black', 'Rusty Black', 'Bronze.', 'Red Bronze.'], maleGenotype: ['Bb1 Ccm', 'Bb1 Ccm Rr', 'bb1 Ccm', 'bb1 Ccm Rr'], maleRatio: [12.5, 12.5, 12.5, 12.5], female: ['Barred Black', 'Rusty Black', 'Bronze.', 'Red Bronze.'], femaleGenotype: ['Bb1 Ccm', 'Bb1 Ccm Rr', 'bb1 Ccm', 'bb1 Ccm Rr'], femaleRatio: [12.5, 12.5, 12.5, 12.5] } },

{ sire: 'Black Winged Bronze', dam: 'Self Buff', results: { male: ['Harvest Gold'], maleGenotype: ['b1b1 Ee Nn Rr'], maleRatio: [50], female: ['Harvest Gold'], femaleGenotype: ['b1b1 Rr'], femaleRatio: [50] } },

{ sire: 'Black Winged Bronze', dam: 'Silver Auburn', results: { male: ['Bronze.'], maleGenotype: ['bb1 Ee Nn'], maleRatio: [50], female: ['Bronze.'], femaleGenotype: ['bb1'], femaleRatio: [50] } },

{ sire: 'Black Winged Bronze', dam: 'Silver Dapple', results: { male: ['Tri-color Mottled Black', 'Barred Black', 'Bronze-', 'Bronze.'], maleGenotype: ['Bb1 Ccg Nn', 'Bb1 Cc Nn', 'bb1 Ccg Nn', 'bb1 Cc Nn'], maleRatio: [12.5, 12.5, 12.5, 12.5], female: ['Tri-color Mottled Black', 'Barred Black', 'Bronze-', 'Bronze.'], femaleGenotype: ['Bb1 Ccg', 'Bb1 Cc', 'bb1 Ccg', 'bb1 Cc'], femaleRatio: [12.5, 12.5, 12.5, 12.5] } },

{ sire: 'Black Winged Bronze', dam: 'Silver Palm', results: { male: ['Cornish Palm', 'Black Winged Bronze'], maleGenotype: ['b1b1 Ccg Nn', 'b1b1 Cc Nn'], maleRatio: [25, 25], female: ['Cornish Palm', 'Black Winged Bronze'], femaleGenotype: ['b1b1 Ccg', 'b1b1 Cc'], femaleRatio: [25, 25] } },

{ sire: 'Black Winged Bronze', dam: 'Silver Tipped Black', results: { male: ['Barred Black'], maleGenotype: ['Bb1 Nn'], maleRatio: [50], female: ['Barred Black'], femaleGenotype: ['Bb1'], femaleRatio: [50] } },




   
];









