// Variables Globales de Accesorios


     var a1 = document.getElementById('Protect Chain');      var t1 = document.getElementById('Protect Chain Table'); 
     var a2 = document.getElementById('Sell Chain');         var t2 = document.getElementById('Sell Chain Table');
     var a3 = document.getElementById('Ribbon');             var t3 = document.getElementById('Ribbon Table'); 
                                                             
     var a4 = document.getElementById('Haste Ring');         var t4 = document.getElementById('Haste Ring Table');
     var a5 = document.getElementById('Hastera Ring');       var t5 = document.getElementById('Hastera Ring Table');
     var a6 = document.getElementById('Hastega Ring');       var t6 = document.getElementById('Hastega Ring Table');
                                                             
     var a7 = document.getElementById('Cure Ring');          var t7 = document.getElementById('Cure Ring Table');
     var a8 = document.getElementById('Cura Ring');          var t8 = document.getElementById('Cura Ring Table');
     var a9 = document.getElementById('Curaga Ring');        var t9 = document.getElementById('Curaga Ring Table');
                                                             
     var a10 = document.getElementById('Shock Clasp');       var t10 = document.getElementById('Shock Clasp Table');
     var a11 = document.getElementById('Burst Clasp');       var t11 = document.getElementById('Burst Clasp Table');
     var a12 = document.getElementById('Blitz Clasp');       var t12 = document.getElementById('Blitz Clasp Table');
                                                             
     var a13 = document.getElementById('Triple Bite');       var t13 = document.getElementById('Triple Bite Table');
     var a14 = document.getElementById('Trinity Sigil');     var t14 = document.getElementById('Trinity Sigil Table');
     var a15 = document.getElementById('Trickster Earring'); var t15 = document.getElementById('Trickster Earring Table');
     var a16 = document.getElementById('Critical Arts');     var t16 = document.getElementById('Critical Arts Table');
                                                             
     var a17 = document.getElementById('Drain Brace');       var t17 = document.getElementById('Drain Brace Table');
     var a18 = document.getElementById('Siphon Brace');      var t18 = document.getElementById('Siphon Brace Table');
     var a19 = document.getElementById('Sentinel Brace');    var t19 = document.getElementById('Sentinel Brace Table');
                                                             
     var a20 = document.getElementById('Mana Barrier');      var t20 = document.getElementById('Mana Barrier Table');
     var a21 = document.getElementById('Element Armlet');    var t21 = document.getElementById('Element Armlet Table');
     var a22 = document.getElementById('Rune Armlet');       var t22 = document.getElementById('Rune Armlet Table');
     var a23 = document.getElementById('Atlas Armlet');      var t23 = document.getElementById('Atlas Armlet Table');
                                                             
     var a24 = document.getElementById('Life Charm');        var t24 = document.getElementById('Life Charm Table');
     var a25 = document.getElementById('Obsidian Ring');     var t25 = document.getElementById('Obsidian Ring Table');
     var a26 = document.getElementById('White Fang');        var t26 = document.getElementById('White Fang Table');
     var a27 = document.getElementById('Ray of Light');      var t27 = document.getElementById('Ray of Light Table');
     var a28 = document.getElementById('Crystal Crown');     var t28 = document.getElementById('Crystal Crown Table');
                                                             
     var a29 = document.getElementById('Power Chain');       var t29 = document.getElementById('Power Chain Table');
     var a30 = document.getElementById('Golem Chain');       var t30 = document.getElementById('Golem Chain Table');
     var a31 = document.getElementById('Titan Chain');       var t31 = document.getElementById('Titan Chain Table');
     var a32 = document.getElementById('Energy Bangle');     var t32 = document.getElementById('Energy Bangle Table');
     var a33 = document.getElementById('Gaia Bangle');       var t33 = document.getElementById('Gaia Bangle Table');
                                                             
     var a34 = document.getElementById('Firagun Band');      var t34 = document.getElementById('Firagun Band Table');
     var a35 = document.getElementById('Blizzagun Band');    var t35 = document.getElementById('Blizzagun Band Table');
     var a36 = document.getElementById('Thundagun Band');    var t36 = document.getElementById('Thundagun Band Table');    
     var a37 = document.getElementById('Gravigun Band');     var t37 = document.getElementById('Gravigun Band Table');
                                                             
     var a38 = document.getElementById('Soldier Earring');   var t38 = document.getElementById('Soldier Earring Table');
     var a39 = document.getElementById('Master Earring');    var t39 = document.getElementById('Master Earring Table');
     var a40 = document.getElementById('Moogle Badge');      var t40 = document.getElementById('Moogle Badge Table');
     var a41 = document.getElementById('Brave Warrior');     var t41 = document.getElementById('Brave Warrior Table');
                                                             
     var a42 = document.getElementById('Ravens Claw');       var t42 = document.getElementById('Ravens Claw Table');
     var a43 = document.getElementById('Omega Arts');        var t43 = document.getElementById('Omega Arts Table');
     var a44 = document.getElementById('Spirit Charm');      var t44 = document.getElementById('Spirit Charm Table');
                                                             
     var a45 = document.getElementById('Spooky Attire');     var t45 = document.getElementById('Spooky Attire Table');
     var a46 = document.getElementById('Heartseeker Chain'); var t46 = document.getElementById('Heartseeker Chain Table');
     var a47 = document.getElementById('Invisible Chain');   var t47 = document.getElementById('Invisible Chain Table');
     var a48 = document.getElementById('Dream Chain');       var t48 = document.getElementById('Dream Chain Table');

/*

Al hacer click en un accesorio la variable "accesory" toma el valor correspondiente y hace que se apagen todos los botones y las tablas
de accesorio, luego compara el valor de "accesory" (que toma el valor del accesorio seleccionado) con el de "accesory_array"
(que almacena todos los accesorios), y si son iguales se enciende el botón y muestra tabla del accesorio seleccionado.

*/


function Accesory(accesory) {
           
	var accesory = accesory,
	    on = 'url(#gradAccesory)',
	    off = '#030c0beb',
	    color = [""],
	    table = [""],
      accesory_array = ["Protect Chain","Sell Chain", "Ribbon",
                        "Haste Ring", "Hastera Ring", "Hastega Ring",
                       "Cure Ring", "Cura Ring", "Curaga Ring",
                       "Shock Clasp", "Burst Clasp", "Blitz Clasp",
                       "Triple Bite", "Trinity Sigil", "Trickster Earring", "Critical Arts",
                       "Drain Brace", "Siphon Brace", "Sentinel Brace",
                       "Mana Barrier", "Element Armlet", "Rune Armlet", "Atlas Armlet",
                       "Life Charm", "Obsidian Ring", "White Fang", "Ray of Light", "Crystal Crown",
                       "Power Chain", "Golem Chain", "Titan Chain", "Energy Bangle", "Gaia Bangle",
                       "Firagun Band", "Blizzagun Band", "Thundagun Band", "Gravigun Band",
                       "Soldier Earring", "Master Earring", "Moogle Badge", "Brave Warrior",
                       "Ravens Claw", "Omega Arts", "Spirit Charm",
                       "Spooky Attire", "Heartseeker Chain", "Invisible Chain", "Dream Chain",
                        
                       "Disable Accesory"],

	i = 0;

	for ( i=0; i<=accesory_array.length-2; i++ ) {
	color[i] = off;
  table[i] = 'none';  
	}
  
  function DisableAccesory() {
  for ( i=0; i<=accesory_array.length-2; i++ ) {
	color[i] = off;
	table[i] = 'none';
	}
}
  
  for ( i=0; i<=accesory_array.length-2; i++ ) {
	if(accesory === accesory_array[i]) {
	color[i] = on;
	table[i] = 'block';
	} if (accesory === accesory_array[48]) {
    DisableAccesory();
  }
  }
  
  
  
     a1.setAttribute("fill",color[0]);   t1.style.display = table[0];
     a2.setAttribute("fill",color[1]);   t2.style.display = table[1];
     a3.setAttribute("fill",color[2]);   t3.style.display = table[2]; 
     a4.setAttribute("fill",color[3]);   t4.style.display = table[3];
     a5.setAttribute("fill",color[4]);   t5.style.display = table[4];
     a6.setAttribute("fill",color[5]);   t6.style.display = table[5];
     a7.setAttribute("fill",color[6]);   t7.style.display = table[6];
     a8.setAttribute("fill",color[7]);   t8.style.display = table[7];
     a9.setAttribute("fill",color[8]);   t9.style.display = table[8];
     a10.setAttribute("fill",color[9]);  t10.style.display = table[9];
     a11.setAttribute("fill",color[10]); t11.style.display = table[10];
     a12.setAttribute("fill",color[11]); t12.style.display = table[11];
     a13.setAttribute("fill",color[12]); t13.style.display = table[12];
     a14.setAttribute("fill",color[13]); t14.style.display = table[13];
     a15.setAttribute("fill",color[14]); t15.style.display = table[14];
     a16.setAttribute("fill",color[15]); t16.style.display = table[15];
     a17.setAttribute("fill",color[16]); t17.style.display = table[16];
     a18.setAttribute("fill",color[17]); t18.style.display = table[17];
     a19.setAttribute("fill",color[18]); t19.style.display = table[18];
     a20.setAttribute("fill",color[19]); t20.style.display = table[19];
     a21.setAttribute("fill",color[20]); t21.style.display = table[20];
     a22.setAttribute("fill",color[21]); t22.style.display = table[21];
     a23.setAttribute("fill",color[22]); t23.style.display = table[22];
     a24.setAttribute("fill",color[23]); t24.style.display = table[23];
     a25.setAttribute("fill",color[24]); t25.style.display = table[24];
     a26.setAttribute("fill",color[25]); t26.style.display = table[25];
     a27.setAttribute("fill",color[26]); t27.style.display = table[26];
     a28.setAttribute("fill",color[27]); t28.style.display = table[27];
     a29.setAttribute("fill",color[28]); t29.style.display = table[28];
     a30.setAttribute("fill",color[29]); t30.style.display = table[29];
     a31.setAttribute("fill",color[30]); t31.style.display = table[30];
     a32.setAttribute("fill",color[31]); t32.style.display = table[31];
     a33.setAttribute("fill",color[32]); t33.style.display = table[32];
     a34.setAttribute("fill",color[33]); t34.style.display = table[33];
     a35.setAttribute("fill",color[34]); t35.style.display = table[34];
     a36.setAttribute("fill",color[35]); t36.style.display = table[35];
     a37.setAttribute("fill",color[36]); t37.style.display = table[36];
     a38.setAttribute("fill",color[37]); t38.style.display = table[37];
     a39.setAttribute("fill",color[38]); t39.style.display = table[38];
     a40.setAttribute("fill",color[39]); t40.style.display = table[39];
     a41.setAttribute("fill",color[40]); t41.style.display = table[40];
     a42.setAttribute("fill",color[41]); t42.style.display = table[41];
     a43.setAttribute("fill",color[42]); t43.style.display = table[42];
     a44.setAttribute("fill",color[43]); t44.style.display = table[43];
     a45.setAttribute("fill",color[44]); t45.style.display = table[44];
     a46.setAttribute("fill",color[45]); t46.style.display = table[45];
     a47.setAttribute("fill",color[46]); t47.style.display = table[46];
     a48.setAttribute("fill",color[47]); t48.style.display = table[47];
         
}