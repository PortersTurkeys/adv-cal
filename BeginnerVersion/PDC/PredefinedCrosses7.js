const predefinedCrosses7 = [
// SELF BUFF CROSSES
{ sire: 'Self Buff', dam: 'Self Buff', results: { male: ['Self Buff'], maleGenotype: ['b1b1 ee nn rr'], maleRatio: [50], female: ['Self Buff'], femaleGenotype: ['b1b1 e- n- rr'], femaleRatio: [50] } },

{ sire: 'Self Buff', dam: 'Auburn', results: { male: ['Red Auburn'], maleGenotype: ['bb1 ee Nn Rr'], maleRatio: [50], female: ['Golden Silver Auburn'], femaleGenotype: ['bb1 e- n- Rr'], femaleRatio: [50] } },

{ sire: 'Self Buff', dam: 'Barred Black', results: { male: ['Rusty Black', 'Red Bronze.'], maleGenotype: ['Bb1 Ee Nn Rr', 'bb1 Ee Nn Rr'], maleRatio: [25, 25], female: ['Dilute Rusty Brown', 'Golden Silver Auburn'], femaleGenotype: ['Bb1 e- n- Rr', 'bb1 e- n- Rr'], femaleRatio: [25, 25] } },


{ sire: 'Self Buff', dam: 'Regal Red', results: { male: ['Regal Red'], maleGenotype: ['b1b1 Ee Nn rr'], maleRatio: [50], female: ['Self Buff'], femaleGenotype: ['b1b1 e- n- rr'], femaleRatio: [50] } },

{ sire: 'Self Buff', dam: 'Light Buff', results: { male: ['Light Buff', 'Light Buff'], maleGenotype: ['b1b1 Ee nn rr', 'b1b1 Ccg Ee nn rr'], maleRatio: [25, 25], female: ['Self Buff', 'Brown Edged Light Buff'], femaleGenotype: ['b1b1 e- n- rr', 'b1b1 Ccg e- n- rr'], femaleRatio: [25, 25] } },

{ sire: 'Self Buff', dam: 'Brown Winged Golden Silver Auburn', results: { male: ['Brown Winged Golden Silver Auburn', 'Self Buff'], maleGenotype: ['b1b1 ee nn Rr', 'b1b1 ee nn rr'], maleRatio: [25, 25], female: ['Brown Winged Golden Silver Auburn', 'Self Buff'], femaleGenotype: ['b1b1 e- n- Rr', 'b1b1 e- n- rr'], femaleRatio: [25, 25] } },

{ sire: 'Self Buff', dam: 'Harvest Gold', results: { male: ['Harvest Gold', 'Regal Red'], maleGenotype: ['b1b1 Ee Nn Rr', 'b1b1 Ee Nn rr'], maleRatio: [25, 25], female: ['Brown Winged Golden Silver Auburn', 'Self Buff'], femaleGenotype: ['b1b1 e- n- Rr', 'b1b1 e- n- rr'], femaleRatio: [25, 25] } },

{ sire: 'Self Buff', dam: 'Black Winged Golden Narragansett', results: { male: ['Black Winged Golden Narragansett', 'Light Buff'], maleGenotype: ['b1b1 Ee nn Rr', 'b1b1 Ee nn rr'], maleRatio: [25, 25], female: ['Brown Winged Golden Silver Auburn', 'Self Buff'], femaleGenotype: ['b1b1 e- n- Rr', 'b1b1 e- n- rr'], femaleRatio: [25, 25] } },

{ sire: 'Self Buff', dam: 'Red Phoenix', results: { male: ['Harvest Gold', 'Regal Red', 'Red Phoenix', 'Light Red'], maleGenotype: ['b1b1 Ee Nn Rr', 'b1b1 Ee Nn rr', 'b1b1 Ccg Ee Nn Rr', 'b1b1 Ccg Ee Nn rr'], maleRatio: [12.5, 12.5, 12.5, 12.5], female: ['Brown Winged Golden Silver Auburn', 'Self Buff', 'Golden Brown Phoenix', 'Brown Edged Light Buff'], femaleGenotype: ['b1b1 e- n- Rr', 'b1b1 e- n- rr', 'b1b1 Ccg e- n- Rr', 'b1b1 Ccg e- n- rr'], femaleRatio: [12.5, 12.5, 12.5, 12.5] } },

{ sire: 'Self Buff', dam: 'Golden Phoenix', results: { male: ['Black Winged Golden Narragansett', 'Light Buff', 'Golden Phoenix', 'Light Buff'], maleGenotype: ['b1b1 Ee nn Rr', 'b1b1 Ee nn rr', 'b1b1 Ccg Ee nn Rr', 'b1b1 Ccg Ee nn rr'], maleRatio: [12.5, 12.5, 12.5, 12.5], female: ['Brown Winged Golden Silver Auburn', 'Self Buff', 'Golden Brown Phoenix', 'Brown Edged Light Buff'], femaleGenotype: ['b1b1 e- n- Rr', 'b1b1 e- n- rr', 'b1b1 Ccg e- n- Rr', 'b1b1 Ccg e- n- rr'], femaleRatio: [12.5, 12.5, 12.5, 12.5] } },


{ sire: 'Self Buff', dam: 'Blue Red Phoenix', results: { male: ['Blue Winged Harvest Gold', 'Slate Edged Regal Red', 'Harvest Gold', 'Regal Red', 'Blue Red Phoenix', 'Slate Edged Light Red', 'Red Phoenix', 'Light Red'], maleGenotype: ['b1b1 Dd Ee Nn Rr', 'b1b1 Dd Ee Nn rr', 'b1b1 Ee Nn Rr', 'b1b1 Ee Nn rr', 'b1b1 Ccg Dd Ee Nn Rr', 'b1b1 Ccg Dd Ee Nn rr', 'b1b1 Ccg Ee Nn Rr', 'b1b1 Ccg Ee Nn rr'], maleRatio: [6.25, 6.25, 6.25, 6.25, 6.25, 6.25, 6.25, 6.25], female: ['Blue Winged Blue Red Brown Narragansett', 'Chocolate Slate Edged Light Buff', 'Brown Winged Golden Silver Auburn', 'Self Buff', 'Golden Brown Blue Phoenix', 'Chocolate Slate Edged Light Buff', 'Golden Brown Phoenix', 'Light Buff'], femaleGenotype: ['b1b1 Dd e- n- Rr', 'b1b1 Dd e- n- rr', 'b1b1 e- n- Rr', 'b1b1 e- n- rr', 'b1b1 Ccg Dd e- n- Rr', 'b1b1 Ccg Dd e- n- rr', 'b1b1 Ccg e- n- Rr', 'b1b1 Ccg e- n- rr'], femaleRatio: [6.25, 6.25, 6.25, 6.25, 6.25, 6.25, 6.25, 6.25] } },

{ sire: 'Self Buff', dam: 'Mottled Rusty Black', results: { male: ['Mottled Rusty Black', 'Barred Jersey Buff', 'Red Phoenix', 'Light Red'], maleGenotype: ['Bb1 Ccg Ee Nn Rr', 'Bb1 Ccg Ee Nn rr', 'b1b1 Ccg Ee Nn Rr', 'b1b1 Ccg Ee Nn rr'], maleRatio: [12.5, 12.5, 12.5, 12.5], female: ['Mottled Dilute Rusty Brown', 'Barred Brown Edged Dilute Jersey Buff', 'Golden Brown Phoenix', 'Light Buff'], femaleGenotype: ['Bb1 Ccg e- n- Rr', 'Bb1 Ccg e- n- rr', 'b1b1 Ccg e- n- Rr', 'b1b1 Ccg e- n- rr'], femaleRatio: [12.5, 12.5, 12.5, 12.5] } },

{ sire: 'Self Buff', dam: 'Mottled Dilute Rusty Black', results: { male: ['Mottled Dilute Rusty Black', 'Barred Dilute Jersey Buff', 'Golden Phoenix', 'Light Buff'], maleGenotype: ['Bb1 Ccg Ee nn Rr', 'Bb1 Ccg Ee nn rr', 'b1b1 Ccg Ee nn Rr', 'b1b1 Ccg Ee nn rr'], maleRatio: [12.5, 12.5, 12.5, 12.5], female: ['Mottled Dilute Rusty Brown', 'Barred Brown Edged Dilute Jersey Buff', 'Golden Brown Phoenix', 'Light Buff'], femaleGenotype: ['Bb1 Ccg e- n- Rr', 'Bb1 Ccg e- n- rr', 'b1b1 Ccg e- n- Rr', 'b1b1 Ccg e- n- rr'], femaleRatio: [12.5, 12.5, 12.5, 12.5] } },

{ sire: 'Self Buff', dam: 'Mottled Rusty Brown', results: { male: ['Mottled Rusty Brown', 'Barred Brown Edged Jersey Buff', 'Red Auburn Phoenix', 'Brown Edged Light Red'], maleGenotype: ['Bb1 Ccg ee Nn Rr', 'Bb1 Ccg ee Nn rr', 'b1b1 Ccg ee Nn Rr', 'b1b1 Ccg ee Nn rr'], maleRatio: [12.5, 12.5, 12.5, 12.5], female: ['Mottled Dilute Rusty Brown', 'Barred Brown Edged Dilute Jersey Buff', 'Golden Brown Phoenix', 'Light Buff'], femaleGenotype: ['Bb1 Ccg e- n- Rr', 'Bb1 Ccg e- n- rr', 'b1b1 Ccg e- n- Rr', 'b1b1 Ccg e- n- rr'], femaleRatio: [12.5, 12.5, 12.5, 12.5] } },

{ sire: 'Self Buff', dam: 'Mottled Rusty Slate', results: { male: ['Mottled Rusty Slate', 'Barred Slate Edged Jersey Buff', 'Mottled Rusty Black', 'Barred Jersey Buff', 'Blue Red Phoenix', 'Slate Edged Light Red', 'Red Phoenix', 'Light Red'], maleGenotype: ['Bb1 Ccg Dd Ee Nn Rr', 'Bb1 Ccg Dd Ee Nn rr', 'Bb1 Ccg Ee Nn Rr', 'Bb1 Ccg Ee Nn rr', 'b1b1 Ccg Dd Ee Nn Rr', 'b1b1 Ccg Dd Ee Nn rr', 'b1b1 Ccg Ee Nn Rr', 'b1b1 Ccg Ee Nn rr'], maleRatio: [6.25, 6.25, 6.25, 6.25, 6.25, 6.25, 6.25, 6.25], female: ['Mottled Dilute Rusty Brown Slate', 'Barred Chocolate Slate Edged Dilute Jersey Buff', 'Mottled Dilute Rusty Brown', 'Barred Brown Edged Dilute Jersey Buff', 'Golden Brown Blue Phoenix', 'Chocolate Slate Edged Light Buff', 'Golden Brown Phoenix', 'Light Buff'], femaleGenotype: ['Bb1 Ccg Dd e- n- Rr', 'Bb1 Ccg Dd e- n- rr', 'Bb1 Ccg e- n- Rr', 'Bb1 Ccg e- n- rr', 'b1b1 Ccg Dd e- n- Rr', 'b1b1 Ccg Dd e- n- rr', 'b1b1 Ccg e- n- Rr', 'b1b1 Ccg e- n- rr'], femaleRatio: [6.25, 6.25, 6.25, 6.25, 6.25, 6.25, 6.25, 6.25] } },






// SILVER PALM CROSSES
{ sire: 'Silver Palm', dam: 'White (Light Brown Eyes)', results: { male: ['Silver Palm', 'White (Light Brown Eyes)'], maleGenotype: ['b1b1 cgc nn', 'b1b1 cc nn'], maleRatio: [25, 25], female: ['Silver Palm', 'White (Light Brown Eyes)'], femaleGenotype: ['b1b1 cgc n-', 'b1b1 cc n-'], femaleRatio: [25, 25] } },

{ sire: 'Silver Palm', dam: 'Painted (Split Black Winged Bronze)', results: { male: ['Tri-color Mottled Black', 'Tri-color Mottled Black', 'Painted (Split Black Winged Bronze)', 'White (Blue Eyes)', 'Sweetgrass', 'Light Sweetgrass', 'White Winged Fawn', 'White (Light Brown Eyes)'], maleGenotype: ['Bb1 cgcm Nn', 'Bb1 cgc Nn', 'Bb1 cmc Nn', 'Bb1 cc Nn', 'b1b1 cgcm Nn', 'b1b1 cgc Nn', 'b1b1 cmc Nn', 'b1b1 cc Nn'], maleRatio: [6.25, 6.25, 6.25, 6.25, 6.25, 6.25, 6.25, 6.25], female: ['Mottled Black', 'Mottled Silver Dapple', 'Dilute Painted', 'White (Blue Eyes)', 'Royal Palm', 'Silver Palm', 'White Winged Dilute Fawn', 'White (Light Brown Eyes)'], femaleGenotype: ['Bb1 cgcm n-', 'Bb1 cgc n-', 'Bb1 cmc n-', 'Bb1 cc n-', 'b1b1 cgcm n-', 'b1b1 cgc n-', 'b1b1 cmc n-', 'b1b1 cc n-'], femaleRatio: [6.25, 6.25, 6.25, 6.25, 6.25, 6.25, 6.25, 6.25] } },


{ sire: 'Silver Palm', dam: 'Silver Palm', results: { male: ['Royal Palm', 'Silver Palm', 'White (Light Brown Eyes)'], maleGenotype: ['b1b1 cgcg nn', 'b1b1 cgc nn', 'b1b1 cc nn'], maleRatio: [12.5, 25, 12.5], female: ['Royal Palm', 'Silver Palm', 'White (Light Brown Eyes)'], femaleGenotype: ['b1b1 cgcg n-', 'b1b1 cgc n-', 'b1b1 cc n-'], femaleRatio: [12.5, 25, 12.5] } },






  



];








