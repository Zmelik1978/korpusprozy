function showGraph(){
    var option = document.getElementById("cluster").value;
    // switch method
    switch (option){
        case "dabel":
            Highcharts.mapChart('gis', {chart: {margin: 0}, title: {text: ''}, navigation: {buttonOptions: {align: 'left', theme: {stroke: '#e6e6e6'}}},mapNavigation: {enabled: true, buttonOptions: {alignTo: 'spacingBox'}}, mapView: {center: [14.418540, 50.0874654], zoom: 10}, tooltip: {useHTML: true, headerFormat: "{point.point.name}", pointFormat: '<br/><img src="{point.image}"/>'}, legend: {enabled: true, title: {text: 'Ďábel na skřipci'}, align: 'right', symbolWidth: 20, symbolHeight: 20, itemStyle: {textOutline: '1 1 1px rgba(255,255,255)'}, backgroundColor: 'rgba(255,255,255,0.8)', float: true, borderColor: '#e6e6e6', borderWidth: 1, borderRadius: 2, itemMarginBottom: 5}, plotOptions: {mappoint: {dataLabels: {enabled: false}}}, series: [{type: 'tiledwebmap', name: '', provider: {type: 'OpenStreetMap'}, showInLegend: false}, 
            // existující místa
            {type: 'mappoint',name: 'existing place', marker: {symbol: 'url(../img/placeholder.png)', width: 24, height: 24}, data: [
                {name: 'Hluboká cesta, nyní Úvoz (19. stol.) © V. Jansa' , lon: 14.3944539, lat: 50.0881597, image: "../foto_praha/hlubokacesta.jpg"},
                {name: 'svatovítská věž (1880) © Zmizelá Praha, sv. 5, 1919', lon: 14.4004508, lat: 50.0908469, image: "../foto_praha/svatovitskavez.jpg"},
                {name: 'Pohořelec', lon: 14.389070, lat: 50.087460, image: "../foto_praha/pohorelec.jpg"},
                {name: 'Strahov (1830) © V. Morstadt', lon: 14.3828081, lat: 50.0815358, image: "../foto_praha/strahov.jpg"},
                {name: 'Újezd (1891) © Světozor', lon: 14.4045214, lat: 50.0821956, image: "../foto_praha/ujezd.jpg"},
            ]},
            // neexistující místa
            {type: 'mappoint',name: 'vanished place', marker: {symbol: 'url(../img/maps-and-flags.png)', width: 24, height: 24}, data: [
                {name: 'Strahovská brána', lon: 14.3885875, lat: 50.0911817, image: "../foto_praha/strahovskabrana.png"},
                {name: 'Kamenné lomy, dnes Strahovský stadion (1869)', lon: 14.3877853, lat: 50.0811528, image: "../foto_praha/kamennylom.jpg"}
            ]},
            ]});
            break;
        case "xaverius":
            Highcharts.mapChart('gis', {chart: {margin: 0}, title: {text: ''}, navigation: {buttonOptions: {align: 'left', theme: {stroke: '#e6e6e6'}}},mapNavigation: {enabled: true, buttonOptions: {alignTo: 'spacingBox'}}, mapView: {center: [14.418540, 50.0874654], zoom: 10}, tooltip: {useHTML: true, headerFormat: "{point.point.name}", pointFormat: '<br/><img src="{point.image}"/>'}, legend: {enabled: true, title: {text: 'Svatý Xaverius'}, align: 'right', symbolWidth: 20, symbolHeight: 20, itemStyle: {textOutline: '1 1 1px rgba(255,255,255)'}, backgroundColor: 'rgba(255,255,255,0.8)', float: true, borderColor: '#e6e6e6', borderWidth: 1, borderRadius: 2, itemMarginBottom: 5}, plotOptions: {mappoint: {dataLabels: {enabled: false}}}, series: [{type: 'tiledwebmap', name: '', provider: {type: 'OpenStreetMap'}, showInLegend: false}, 
            // existující místa
            {type: 'mappoint',name: 'existing place', marker: {symbol: 'url(../img/placeholder.png)', width: 24, height: 24}, data: [
                {name: 'Ostruhová ul., nyní Nerudova (19. stol.) © V. Jansa', lon: 14.3995256, lat: 50.0885142, image: "../foto_praha/ostruhova.jpg"},
                {name: 'Kostel sv. Mikuláše (19. stol.) © V. Jansa', lon: 14.4032150, lat: 50.0879753, image: "../foto_praha/svmikulas.jpg"},
                {name: 'Újezd (1891) © Světozor', lon: 14.4045214, lat: 50.0821956, image: "../foto_praha/ujezd.jpg"},
                {name: 'Vyšehrad s kostelem (1872) © Zmizelá Praha, sv. 4, 1919', lon: 14.4178128,lat: 50.0643569, image: "../foto_praha/vysehradskykostel.jpg"},
                {name: ' Smíchov (19. stol.) © V. Morstadt', lon:  14.4048437 , lat:  50.0749464, image: "../foto_praha/smichov.jpg"},
                {name: ' Židovský hřbitov na Smíchově ', lon: 14.4005844, lat: 50.0584358, image: "../foto_praha/smichov_zidovsky_hrbitov.jpg"},
                {name: ' Malvazinky ', lon:  14.3901532 , lat:  50.0632736, image: "../foto_praha/malvazinky.jpg"},
                {name: ' Petřín (1830) © V. Morstadt', lon:  14.3949292 , lat:  50.0816583, image: "../foto_praha/petrin.jpg"},
                {name: 'Radlice', lon: 14.3866375, lat: 50.0588675, image: "../foto_praha/radlice.jpg"}
            ]},
            // neexsitující místa
            {type: 'mappoint',name: 'vanished place', marker: {symbol: 'url(../img/maps-and-flags.png)', width: 24, height: 24}, data: [
                {name: 'Újezdská brána', lon: 14.4043375, lat: 50.0804150, image: "../foto_praha/ujezd_brana.jpg"},
                {name: 'Skalka (1873) Plán kr. hl. mětsa s vůkolím do F. Kořistky', lon: 14.3972156, lat: 50.0682433, image: "../foto_praha/skalka_brezinka_santoska.jpg"},
                {name: 'Santoška (1873) Plán kr. hl. mětsa s vůkolím do F. Kořistky', lon: 14.3999192, lat: 50.0628989, image: "../foto_praha/skalka_brezinka_santoska.jpg"},
                {name: 'Březinka (1873) Plán kr. hl. mětsa s vůkolím do F. Kořistky', lon: 14.4010994, lat: 50.0652406, image: "../foto_praha/skalka_brezinka_santoska.jpg"},
                {name: 'Laurová © II. vojenské mapování (1836–1852)', lon: 14.4044756, lat: 50.0619528, image: "../foto_praha/laurova.jpg"}
            ]},
            ]});
            break;
        case "demon":
            Highcharts.mapChart('gis', {chart: {margin: 0}, title: {text: ''}, navigation: {buttonOptions: {align: 'left', theme: {stroke: '#e6e6e6'}}},mapNavigation: {enabled: true, buttonOptions: {alignTo: 'spacingBox'}}, mapView: {center: [14.418540, 50.0874654], zoom: 10}, tooltip: {useHTML: true, headerFormat: "{point.point.name}", pointFormat: '<br/><img src="{point.image}"/>'}, legend: {enabled: true, title: {text: 'Sivooký démon'}, align: 'right', symbolWidth: 20, symbolHeight: 20, itemStyle: {textOutline: '1 1 1px rgba(255,255,255)'}, backgroundColor: 'rgba(255,255,255,0.8)', float: true, borderColor: '#e6e6e6', borderWidth: 1, borderRadius: 2, itemMarginBottom: 5}, plotOptions: {mappoint: {dataLabels: {enabled: false}}}, series: [{type: 'tiledwebmap', name: '', provider: {type: 'OpenStreetMap'}, showInLegend: false}, 
            {type: 'mappoint',name: 'existing place', marker: {symbol: 'url(../img/placeholder.png)', width: 24, height: 24}, data: [
                {name: 'Loreta (1836) © W. Kadler ', lon:  14.391545496226598 , lat:  50.089281799999995, image: "../foto_praha/loreta.jpg"},
                {name: 'Malá Strana (1866) © Zmizelá Praha, sv. 5, 1919', lon:  14.4048224 , lat:  50.0871582, image: "../foto_praha/malastrana.jpg"},
                {name: 'Kostel sv. Mikuláše (1899) © V. Jansa', lon: 14.4032150, lat: 50.0879753, image: "../foto_praha/svmikulas.jpg"},
                {name: 'Újezd (1891) © Světozor' , lon: 14.4045214, lat: 50.0821956, image: "../foto_praha/ujezd.jpg"},
                {name: 'Maltézské náměstí (80. léta 19. stol.) © V. Jansa', lon:  14.405305340227313 , lat:  50.0859235, image: "../foto_praha/maltezskenamesti.jpg" },
                {name: 'Lázeňská ul. (1870) © Neuster Plan von Prag und Umgebung von K. V. Zap', lon: 14.4057725, lat: 50.0867075, image: "../foto_praha/lazenska.jpg"},
                {name: ' Nosticův palác (19. stol.) © V. Morstadt', lon:  14.40561579974976 , lat:  50.08522875, image: "../foto_praha/nosticuvpalac.jpg" },
                {name: 'Kampa (1870) © Zmizelá Praha, sv. 5, 1919', lon: 14.4079667, lat:  50.0845494, image: "../foto_praha/kampa.jpg"},
                {name: ' Vltava ', lon:  14.4109975, lat:  50.0840539, image: "../foto_praha/vltava.jpg"},
                {name: 'Kamenný most, nyní Karlův (40. léta 19. stol.) © Zmizelá Praha, sv. 7, 1919', lon: 14.4110678, lat: 50.0864756, image: "../foto_praha/karluvmost.jpg"},
                {name: 'Střelecký ostrov (rytina Johannese Wechtera z roku 1606) © ČTK', lon: 14.4099675, lat: 50.0814239, image: "../foto_praha/streleckyostrov.jpg"},
                {name: 'Židovský ostrov, nyní Dětský © Klub přátel starého Smíchova', lon: 14.4090989, lat: 50.0785308,image: "../foto_praha/zidovskyostrov.jpg"},
                {name: 'Řetězový most (1914) © Zmizelá Praha, sv. 7, 1919', lon: 14.4108800, lat: 50.0813536, image: "../foto_praha/retezovymost.jpg"},
                {name: 'Staré Město (1880) © Zmizelá Praha, sv. 1, 1919', lon: 14.4226550, lat: 50.0888228, image: "../foto_praha/staremesto.jpg"},
                {name: 'Nové Město, Karlovo náměstí (1820) © Zmizelá Praha, sv. 3, 1919', lon: 14.4254014, lat: 50.0792811, image: "../foto_praha/novemesto.jpg"},
                {name: 'Smíchov (1830) © V. Morstadt', lon: 14.4048311, lat: 50.0689367, image: "../foto_praha/smichov.jpg"},
                {name: 'Petřín (1830) © V. Morstadt', lon: 14.3952356, lat: 50.0834503, image: "../foto_praha/petrin.jpg"},
                {name: 'Košířský hřbitov © Plán Prahy s okolím (1885)', lon: 14.3540281, lat: 50.0722028, image: "../foto_praha/kosirskyhrbitov.jpg"},
                {name: 'Bílá hora © II. vojenské mapování (1836–1852)', lon:  14.3190683, lat: 50.0782264, image: "../foto_praha/bilahora.jpg"},
            ]},
            {type: 'mappoint',name: 'vanished place', marker: {symbol: 'url(../img/maps-and-flags.png)', width: 24, height: 24}, data: [
                {name: 'malostranská zbrojnice (70. léta 19. stol.) © Zmizelá Praha, sv. 7, 1919', lon: 14.4061494, lat: 50.0836297, image: "../foto_praha/malostranskazbrojnice.jpg"}
            ]},
            ]});
            break;
        case "madona":
            Highcharts.mapChart('gis', {chart: {margin: 0}, title: {text: ''}, navigation: {buttonOptions: {align: 'left', theme: {stroke: '#e6e6e6'}}},mapNavigation: {enabled: true, buttonOptions: {alignTo: 'spacingBox'}}, mapView: {center: [14.418540, 50.0874654], zoom: 10}, tooltip: {useHTML: true, headerFormat: "{point.point.name}", pointFormat: '<br/><img src="{point.image}"/>'}, legend: {enabled: true, title: {text: 'Zázračná madona'}, align: 'right', symbolWidth: 20, symbolHeight: 20, itemStyle: {textOutline: '1 1 1px rgba(255,255,255)'}, backgroundColor: 'rgba(255,255,255,0.8)', float: true, borderColor: '#e6e6e6', borderWidth: 1, borderRadius: 2, itemMarginBottom: 5}, plotOptions: {mappoint: {dataLabels: {enabled: false}}}, series: [{type: 'tiledwebmap', name: '', provider: {type: 'OpenStreetMap'}, showInLegend: false}, 
            {type: 'mappoint', name: 'existing place', marker: {symbol: 'url(../img/placeholder.png)', width: 24, height: 24,}, data: [
                {name: 'Hradčany (60. léta 19. stol.) © Zmizelá Praha, sv. 7, 1919', lon: 14.4000936, lat: 50.0898689, image: "../foto_praha/hradcany.jpg"},
                {name: 'Nový Svět (1897) © V. Jansa', lon: 14.3913964, lat: 50.0909353, image: "../foto_praha/novysvet.jpg"},
                {name: 'Jelenní příkop (1860) © V. Morstadt', lon: 14.3958342, lat: 50.0913847, image: "../foto_praha/hradcany.jpg"},
                {name: 'Týnský chrám (1843) © R. von Alt', lon: 14.4226711, lat: 50.0877378, image: "../foto_praha/tynskychram.jpg"},
                {name: 'Smíchov (1830) © V. Morstadt', lon: 14.4048311, lat: 50.0689367, image: "../foto_praha/smichov.jpg"},
                {name: 'Brusnice (1820) © Kašpar P. Hyllos', lon: 14.3911811, lat: 50.0912675, image: "../foto_praha/brusnice.jpg"},
                {name: 'Loreta (1836) © W. Kadler', lon:  14.391545496226598 , lat:  50.089281799999995, image: "../foto_praha/loreta.jpg"},
                {name: 'Karlova ul. (1897) © V. Jansa', lon:  14.4166053, lat:  50.0861025, image: "../foto_praha/karlovaulice.jpg"},
                {name: ' Újezd (1891) © Světozor', lon:  14.4044319, lat:  50.0826489, image: "../foto_praha/ujezd.jpg"},
                {name: ' Týnská ul. (1895) © V. Jansa', lon:  14.4223478, lat:  50.0883839, image: "../foto_praha/tynskaulice.jpg"},
                {name: ' Plzeňská tř. (1873) Plán kr. hl. mětsa s vůkolím do F. Kořistky', lon:  14.3991897, lat:  50.0718667, image: "../foto_praha/plzenskatrida.jpg"},
                {name: ' Chotkovy sady (1830) © V. Morstadt', lon:  14.4078639, lat:  50.0939181, image: "../foto_praha/chotkovysady.jpg"},
                {name: ' Pohořelec ', lon:  14.3895931, lat:  50.0881622, image: "../foto_praha/pohorelec.jpg"},
                {name: ' Ostruhová ul., nyní Nerudova (19. stol.) © V. Jansa', lon:  14.3997053, lat:  50.0885281, image: "../foto_praha/ostruhova.jpg"},
                {name: ' Mostecká ul. (1901) © V. Jansa', lon:  14.4060869, lat:  50.0873433, image: "../foto_praha/mosteckaulice.jpg"},
                {name: ' Staroměstská radnice (19. stol.) © V. Jansa', lon:  14.4205922, lat:  50.0872056, image: "../foto_praha/staromestskaradnice.jpg"},
                {name: ' Podol (asi 30. léta 20. stol.)', lon:  14.4227797, lat:  50.0557597, image: "../foto_praha/podol.jpg"},
                {name: ' Bráník ', lon:  14.4208919, lat:  50.0328089, image: "../foto_praha/branik.jpg"},
                {name: ' Svatoprokopské údolí, nyní Prokopské © II. vojenské mapování (1836–1852)', lon: 14.3760431, lat:  50.0413508, image: "../foto_praha/prokopskeudoli.jpg"},
                {name: ' Mariánské hradby, nyní ul. Mariánské hradby (1870) © Wikipedie', lon: 14.4028517, lat:  50.0938675, image: "../foto_praha/marianskehradby.jpg"},
                {name: 'Palackého tř., nyní ul. Lidická ústící na Palackého most (1873) Plán kr. hl. mětsa s vůkolím do F. Kořistky',  lon: 14.4059708, lat: 50.0722694, image: "../foto_praha/palackehosmichov.jpg"},
                {name: 'Zámecké schody (1901) © V. Jansa',  lon: 14.4001572, lat: 50.0893003, image: "../foto_praha/novezameckeschody.jpg"},
                {name: 'Staré zámecké schody (1901) © V. Jansa',  lon: 14.4076875, lat: 50.0921339, image: "../foto_praha/starezameckeschody.jpg"},
                {name: 'svatovítská věž (1880) © Zmizelá Praha, sv. 5, 1919', lon: 14.4004508, lat: 50.0908469, image: "../foto_praha/svatovitskavez.jpg"},
                {name: ' Vltava ', lon:  14.4109975, lat:  50.0840539, image: "../foto_praha/vltava.jpg"},
                {name: ' Vltavská ul. (1873) Plán kr. hl. mětsa s vůkolím do F. Kořistky', lon:  14.4081797, lat:  50.0698581, image: "../foto_praha/vlatvskaulicesmichov.jpg"},
                {name: ' hlavní tř., myšlena dřívější třída Švarcenberských a Kinských, nyní ulice Štefánikova a Nádražní (1873) Plán kr. hl. mětsa s vůkolím do F. Kořistky', lon: 14.4040397, lat:  50.0720311, image: "../foto_praha/hlavnitridasmichov.jpg"},
                {name: ' Hvězda (konec 19. stol.) © Wikipedie', lon: 14.3258753, lat: 50.0832308, image: "../foto_praha/hvezda.jpg"},
            ]},
            {type: 'mappoint',name: 'vanished place', marker: {symbol: 'url(../img/maps-and-flags.png)', width: 24, height: 24}, data: [
                {name: 'c. k. botanická zahrada (1873) © Plán kr. hl. mětsa s vůkolím do F. Kořistky', lon: 14.4068219, lat: 50.0775161, image: "../foto_praha/ckbotanickazahrada.jpg"},
                {name: 'Prašný most, nyní ul. U Prašného mostu (1885) © Plán Prahy s okolím',  lon: 14.3988406, lat: 50.0921997, image: "../foto_praha/prasnymost.jpg"},
                {name: 'smíchovský kostelík, dříve kostel Filipa a Jakuba, dnes je na jeho místě nám. Jakuba Arbesa © Wikipedie', lon: 14.4050831, lat:  50.0764586, image: "../foto_praha/kostelfilipaajakubasmichov.jpg"},
                {name: ' Eggenberg, dříve letohrádek Eggenberg © Wikipedie', lon: 14.4061272, lat:  50.0783550, image: "../foto_praha/eggenberg.jpg"},
                {name: ' parní lázně na Smíchově, dnes je v těchto místech autobusové nádraží Na Knížecí (1873) © Plán kr. hl. mětsa s vůkolím do F. Kořistky', lon: 14.4046172, lat: 50.0686469, image: "../foto_praha/parnilazne.jpg"},
                {name: ' U Arcivévody Štěpána, dříve hostinec, dnes Štefánikova © II. vojenské mapování (1836–1852)', lon: 14.4035631, lat: 50.0743000, image: "../foto_praha/uarcivevodystepana.jpg"},
            ]},
            ]});    
            break;
        case "ukrizovana":
            Highcharts.mapChart('gis', {chart: {margin: 0}, title: {text: ''}, navigation: {buttonOptions: {align: 'left', theme: {stroke: '#e6e6e6'}}},mapNavigation: {enabled: true, buttonOptions: {alignTo: 'spacingBox'}}, mapView: {center: [14.418540, 50.0874654], zoom: 10}, tooltip: {useHTML: true, headerFormat: "{point.point.name}", pointFormat: '<br/><img src="{point.image}"/>'}, legend: {enabled: true, title: {text: 'Zázračná madona'}, align: 'right', symbolWidth: 20, symbolHeight: 20, itemStyle: {textOutline: '1 1 1px rgba(255,255,255)'}, backgroundColor: 'rgba(255,255,255,0.8)', float: true, borderColor: '#e6e6e6', borderWidth: 1, borderRadius: 2, itemMarginBottom: 5}, plotOptions: {mappoint: {dataLabels: {enabled: false}}}, series: [{type: 'tiledwebmap', name: '', provider: {type: 'OpenStreetMap'}, showInLegend: false}, 
                // existující místa
                {type: 'mappoint', name: 'existing place', marker: {symbol: 'url(../img/placeholder.png)', width: 24, height: 24,}, data: [
                    {name: 'Mikulandská ulice © ŠJů, Wikimedia Commons', lon: 14.4179995, lat: 50.0814011, image: "../foto_praha/Storzer_Mikulandská,_od_Ostrovní_k_Národní.jpg"},
                    {name: 'Olšanské hřbitovy © České dědictví UNESCO', lon: 14.467145396382056, lat: 50.08019855, image: "../foto_praha/Storzer_Olšany.jpg"},
                    {name: 'Malá Strana (1866) © Zmizelá Praha, sv. 5, 1919', lon:  14.4048224 , lat:  50.0871582, image: "../foto_praha/malastrana.jpg"},
                    {name: 'Kampa (1870) © Zmizelá Praha, sv. 5, 1919', lon: 14.4079667, lat:  50.0845494, image: "../foto_praha/kampa.jpg"},
                    {name: 'Řetězový most (1914) © Zmizelá Praha, sv. 7, 1919', lon: 14.4108800, lat: 50.0813536, image: "../foto_praha/retezovymost.jpg"},
                    {name: 'Nové Město, Karlovo náměstí (1820) © Zmizelá Praha, sv. 3, 1919', lon: 14.4254014, lat: 50.0792811, image: "../foto_praha/novemesto.jpg"},
                    {name: 'Střelecký ostrov (rytina Johannese Wechtera z roku 1606) © ČTK', lon: 14.4099675, lat: 50.0814239, image: "../foto_praha/streleckyostrov.jpg"},
                    {name: 'Staré Prádlo, nynější Městský dům Prádlo, Na Muráni © Michal Kmínek, Wikimedia Commons', lon: 14.4139111, lat: 50.0875847, image: "../foto_praha/Storzer_Městský_dům_Prádlo,_Na_Muráni_(Staré_Město),_Praha_1,_Alšovo_nábř._2,_Staré_Město.jpg"},
                    {name: 'Sovovy mlýny, přelom 19. a 20. století © Muzeum Kampa', lon: 14.40820789955488, lat: 50.083764450000004, image: "../foto_praha/Storzer_Mlyny_archivni-1024x490.jpg"},
                    {name: 'Staré Město (1880) © Zmizelá Praha, sv. 1, 1919', lon: 14.4226550, lat: 50.0888228, image: "../foto_praha/stafremesto.jpg"},
                    {name: 'Łysa Góra © Janusz Krzyżek, Wikimedia Commons', lon: 20.7350314, lat: 49.9336125, image: "../foto_praha/Storzer_Łysa_Góra_gmina_Dębno_kościół_front.jpg"},
                    {name: 'Maltézské náměstí (80. léta 19. stol.) © V. Jansa', lon:  14.405305340227313 , lat:  50.0859235, image: "../foto_praha/maltezskenamesti.jpg" },
                    {name: 'Nosticův palác (19. stol.) © V. Morstadt', lon:  14.40561579974976 , lat:  50.08522875, image: "../foto_praha/nosticuvpalac.jpg" },
                    {name: 'Tarnov (19. stol.) © Facebook Tarnów - ciekawostki, tajemnice, stare zdjęcia', lon: 20.96405842696229, lat: 50.025988299999995, image: "../foto_praha/Storzer_Tarnow.jpg"},
                    {name: 'Mariánské hradby, nyní ul. Mariánské hradby (1870) © Wikipedie', lon: 14.4028517, lat:  50.0938675, image: "../foto_praha/marianskehradby.jpg"},
                    {name: 'Nový Svět (1897) © V. Jansa', lon: 14.3913964, lat: 50.0909353, image: "../foto_praha/novysvet.jpg"},
                    {name: 'Černínský palác © Jaroslav Kučera', lon: 14.390113920556605, lat: 50.08875705, image: "../foto_praha/Storzer_Černínský palác.jpg"},
                    {name: 'Loretánské náměstí © Kudy z nudy', lon: 14.391220520837996, lat: 50.089355, image: "../foto_praha/Storzer_Loretánské náměstí.jpg"},
                // neexistující místa
                ]},
                {type: 'mappoint',name: 'vanished place', marker: {symbol: 'url(../img/maps-and-flags.png)', width: 24, height: 24}, data: [
                    {name: 'Újezdská brána', lon: 14.4043375, lat: 50.0804150, image: "../foto_praha/ujezd_brana.jpg"},
                    {name: 'Strahovská brána', lon: 14.3885875, lat: 50.0911817, image: "../foto_praha/strahovskabrana.png"},
                ]},
                ]});    
                break;     
        case "mozek":
            Highcharts.mapChart('gis', {chart: {margin: 0}, title: {text: ''}, navigation: {buttonOptions: {align: 'left', theme: {stroke: '#e6e6e6'}}},mapNavigation: {enabled: true, buttonOptions: {alignTo: 'spacingBox'}}, mapView: {center: [14.418540, 50.0874654], zoom: 10}, tooltip: {useHTML: true, headerFormat: "{point.point.name}", pointFormat: '<br/><img src="{point.image}"/>'}, legend: {enabled: true, title: {text: 'Zázračná madona'}, align: 'right', symbolWidth: 20, symbolHeight: 20, itemStyle: {textOutline: '1 1 1px rgba(255,255,255)'}, backgroundColor: 'rgba(255,255,255,0.8)', float: true, borderColor: '#e6e6e6', borderWidth: 1, borderRadius: 2, itemMarginBottom: 5}, plotOptions: {mappoint: {dataLabels: {enabled: false}}}, series: [{type: 'tiledwebmap', name: '', provider: {type: 'OpenStreetMap'}, showInLegend: false}, 
                // existující místa
                {type: 'mappoint', name: 'existing place', marker: {symbol: 'url(../img/placeholder.png)', width: 24, height: 24,}, data: [
                    {name: 'Petřín (1830) © V. Morstadt', lon:  14.3949292 , lat:  50.0816583, image: "../foto_praha/petrin.jpg"},
                    {name: 'Probluz, pohled na místní kostel © Petr1888, Wikimedia Commons', lon: 15.7153547, lat: 50.2443953, image: "../foto_praha/Storzer_probluz.jpg"},
                    {name: 'Hradčany (60. léta 19. stol.) © Zmizelá Praha, sv. 7, 1919', lon: 14.4000936, lat: 50.0898689, image: "../foto_praha/hradcany.jpg"},
                    {name: 'Poprava 27 českých pánů na Staroměstském náměstí (kresba Eduarda Herolda podle staršího dřevorytu)', lon:  14.4205922, lat:  50.0872056, image: "../foto_praha/staromak.png"},
                    {name: 'Bílá hora © II. vojenské mapování (1836–1852)', lon:  14.3190683, lat: 50.0782264, image: "../foto_praha/bilahora.jpg"},
                    {name: 'Vyšehrad s kostelem (1872) © Zmizelá Praha, sv. 4, 1919', lon: 14.4178128,lat: 50.0643569, image: "../foto_praha/vysehradskykostel.jpg"},
                    {name: 'Vídeň, pohled na Hofburg z 19. století © Schloß Schönbrunn Kultur- und Betriebsges.m.b.H.', lon: 16.0316259, lat: 49.3921258, image: "../foto_praha/storzer_wien.jpg"},
                    {name: 'Bitva u Domažlic (na obraze Josefa Mathausera)', lon: 12.9298338, lat: 49.4407069, image: "../foto_praha/storzer_domazlice_b.jpg"},
                    {name: 'Paříž na konci 19. století (autorem obrazu je Camille Pissarro)', lon: 2.3483915, lat: 48.8534951, image: "../foto_praha/Storzer_pariz.jpg"},
                    {name: 'Štrasburg koncem 19. století', lon:  7.7507127 , lat:  48.584614, image: "../foto_praha/storzer_strasburg.jpg"},
                    {name: 'Norimberk koncem 19. století © Detroit Publishing & Co.', lon:  11.077298 , lat:  49.453872, image: "../foto_praha/storzer_norimberk.jpg"},
                    {name: 'Terst (oceloryt z poloviny 19. století)', lon:  13.7772781 , lat:  45.6496483, image: "../foto_praha/storzer_terst.jpg"},
                    {name: 'Budapešť © Schloß Schönbrunn Kultur- und Betriebsges.m.b.H.', lon:  19.0529844 , lat:  47.4942217, image: "../foto_praha/storzer_budapest.jpg"},
                    {name: 'Nechanice (na fotografii místní novogotický zámek) © Česká obec', lon:  15.6327598 , lat:  50.2373686, image: "../foto_praha/storzer_nechanice.jpg"},
                    {name: 'Kolín ve 40. letech 19. století (dobová rytina) © Beschreibende und malerische Darstellung der K. K. österreichischen Staatseisenbahn von Olmütz bis Prag / Verfasst von L. Förster und A. Demarteau', lon:  15.2011571 , lat:  50.0288894, image: "../foto_praha/storzer_kolin.jpg"},
                    {name: 'Jičín © Město Jičín', lon:  15.3516528 , lat:  50.4370452, image: "../foto_praha/storzer_jiicn.jpg"},
                    {name: 'Malá Strana (1866) © Zmizelá Praha, sv. 5, 1919', lon:  14.4048224 , lat:  50.0871582, image: "../foto_praha/malastrana.jpg"},
                    {name: 'Bitva u Trutnova', lon:  15.9130498, lat:  15.5608851, image: "../foto_praha/storzer_trutnov.jpg"},
                    {name: 'Bitva u Náchoda (litografie z roku 1867)', lon:  16.1622871, lat:  50.4167025, image: "../foto_praha/storzer_nachod.jpg"},
                    {name: 'Mnichovo Hradiště (počátek 20. století)', lon:  14.9741022, lat:  50.5229864, image: "../foto_praha/storzer_mnich.jpg"},
                    {name: 'Bitva u Podolí ve vyobrazení H. Schüllingera', lon:  14.9916097, lat:  50.5471522, image: "../foto_praha/storzer_podoli.jpg"},
                    {name: 'Cinco de Mayo (obraz "Poprava císaře Maxmiliána" od Eduarda Maneta)', lon:  -98.1981486, lat:  19.0437197, image: "../foto_praha/storzer_puebla.jpg"},
                    {name: 'Bitva u Fredericksburgu', lon:  -77.4605400, lat:  38.3031836, image: "../foto_praha/storzer_fredericksburg.jpg"},
                    {name: 'Bitva u Aspromonte (obraz "Zraněný Garibaldi u Aspromonte" od Gerolama Induna', lon:  15.9402172, lat:  38.1982139, image: "../foto_praha/storzer_aspromonte.jpg"},
                    {name: 'Bitva u Solferina (na obraze Adolpha Yvona)', lon:  10.5666789 , lat:  45.3685808, image: "../foto_praha/storzer_solferino.jpg"},
                    {name: 'Bitva u Magenty (na obraze Gerolama Induna) ', lon:  8.8838428, lat:  45.4653931, image: "../foto_praha/storzer_magent.jpg"},
                    {name: 'Obléhání Sevastopolu (na obraze George Baxtera)', lon:  33.5366244 , lat:  44.6069144, image: "../foto_praha/storzer_sevastopol.jpg"},
                    {name: 'Bitva u Balaklavy (na obraze "Tenká červená linie" Roberta Gibba)', lon:  33.5990375 , lat:  44.5121317, image: "../foto_praha/storzer_balaklava.jpg"},
                    {name: 'Bitva u Inkermanu (na obraze Williama H. Russella)', lon:  33.6043272 , lat:  44.6181042, image: "../foto_praha/storzer_inkerman.jpg"},
                    {name: 'Kapitulace u Világoše (na obraze neznámého autora)', lon:  21.6385631 , lat:  46.2673050, image: "../foto_praha/storzer_vilagos.jpg"},
                    {name: 'Malý Beszkerek (dnes vesnice Becicherecu Mic', lon:  21.0514742 , lat:  45.8346772, image: "../foto_praha/storzer_becicherecu.jpg"},
                    {name: 'Bitva u Szöregu (na obraze B. Bachmanna-Hohmanna)', lon:  20.1966939 , lat:  46.2156822, image: "../foto_praha/storzer_szoreg.jpg"},
                    {name: 'Bitva u Custozy (na obraze Juliusze F. Kossaka)', lon:  10.7959336 , lat:  45.3764733, image: "../foto_praha/storzer_custoza.jpg"},
                    {name: 'Komárno (veduta L. Rohbocka a G. Helse)', lon:  18.1298247 , lat:  47.7574078, image: "../foto_praha/storzer_komarno.jpg"},
                    {name: 'Bitva u Peredu (litografie B. Bachmann-Hochmanna; dnes obec Tešedíkovo na Slovensku)', lon:  17.846694 , lat:  48.101111, image: "../foto_praha/storzer_pered.jpg"},
                    {name: 'Bitva u Lipska (na obraze Vladimira Moškova)', lon:  12.3747328 , lat:  51.3406319, image: "../foto_praha/storzer_lipsko.jpg"},
                    {name: 'Bitva u Vácu', lon:  19.1278294 , lat:  47.7782872, image: "../foto_praha/storzer_vac.jpg"},
                    {name: 'Bitva u Nagysalló (na obraze Medveho Imreho)', lon:  18.544222 , lat:  48.090056, image: "../foto_praha/storzer_nagy.jpg"},
                    {name: 'Bitva u Isaszegu a Jedlova (na obraze Móra Thana)', lon:  19.3476981 , lat:  47.6015289, image: "../foto_praha/storzer_jedlovo.jpg"},
                    {name: 'Bitva u Hatvanu (na obraze Jókaie Móra)', lon:  19.6743875 , lat:  47.6683969, image: "../foto_praha/storzer_hatvan.jpg"},
                    {name: 'Bitva u Kápolny (na obraze Vasárnapiho Újsága)', lon: 20.2469694 , lat:  47.7604628, image: "../foto_praha/storzer_kapolna.jpg"},
                    {name: 'Bitva u Ceglédu (na obraze "Rakouská artilerie vracející se z bitvy u Cégledu" Augusta von Pettenkofena )', lon:  19.7977517 , lat:  47.1716447, image: "../foto_praha/storzer_cegled.jpeg"},
                    {name: 'Dobytí Brescie (na obraze "Bitva 31. března 1849 na Via delle Consolazione v Brescii" Faustina Joliho)', lon:   10.2200214 , lat:  45.5398022, image: "../foto_praha/storzer_brescia.jpg"},
                    {name: 'Bitva u Novary (na obraze "Polní maršálek Radecký se svým štábem v bitvě u Novary" Albrechta Adama)', lon:  8.6196550 , lat:  45.4464036, image: "../foto_praha/storzer_novara.jpg"},
                    {name: 'Bitva u Trnavy (na obraze "Smrt Velka z Březnice v bitvě u Trnavy" Věnceslava Černého)', lon: 17.5858175 , lat:  48.3767653, image: "../foto_praha/storzer_trnava.png"},
                    {name: 'Bitva u Rábu (na obraze B. Bachmann-Hohmanna)', lon: 17.6346814 , lat:  47.6876089, image: "../foto_praha/storzer_gyor.jpg"},
                    {name: 'Bitva u Schwechatu (na obraze Franze Xavera Zaldera)', lon: 16.4780311 , lat:  48.1397436, image: "../foto_praha/storzer_schwechat.jpg"},
                    {name: 'Frankfurt nad Mohanem (na ocelorytu okolo r. 1845)', lon: 8.6820917 , lat:  50.1106444, image: "../foto_praha/storzer_frankfurt.jpg"},
                    {name: 'Bitva u Vicenzy (na obraze Franze Gerusche)', lon: 11.5478825, lat:  45.5488306, image: "../foto_praha/storzer_vicenza.jpg"},
                    {name: 'Bitva u Curtatone a Montanary (na obraze Pietra Senna)', lon: 10.7203497, lat:  45.1353517, image: "../foto_praha/storzer_curtatone.jpg"},
                    {name: 'Bitva u Santa Lucia', lon: 10.3569094 , lat:  45.1353517, image: "../foto_praha/storzer_lucia.jpg"},
                    {name: 'Grenoble (na obraze Julese Jeana Baptista Guedyho)', lon: 5.7357819 , lat:  45.1875603, image: "../foto_praha/storzer_grenoble.jpg"},
                    {name: 'Bitva u Toulonu (na obraze Thomase Whitcomba)', lon:  5.9304919 , lat:  43.1257311, image: "../foto_praha/storzer_toulon.jpg"},
                    {name: 'Bitva u Varšavy (na obraze Wojciecha Kossaka)', lon: 21.0067247 , lat:  52.2319581, image: "../foto_praha/storzer_varsava.jpg"},
                    {name: 'Bitva u Ostrolenky (na obraze Karola Malankiewicze)', lon: 21.5668606 , lat:  53.0843136, image: "../foto_praha/storzer_ostrolenka.png"},
                    {name: 'Obléhání Missolonghi (na obraze Panagiotise Zografa)', lon: 21.4283544 , lat:  38.3686353, image: "../foto_praha/storzer_varsava.jpg"},
                    {name: 'Bitva u Waterloo (na obraze Williama Sadlera)', lon: 4.3977586, lat: 50.7175394, image: "../foto_praha/storzer_waterloo.png"},
                    {name: 'Montmartre během bitvy o Paříž', lon: 2.3415714 , lat:  48.8867053, image: "../foto_praha/storzer_montmartre.jpg"},
                    {name: 'Bitva u Chlumce (na obraze Alexandera Kotzebue)', lon: 13.9396372 , lat:  50.6997186, image: "../foto_praha/storzer_kulm.jpg"},
                    {name: 'Bitva u Budyšína (na obraze Hippolyta Bellangého)', lon: 14.4275733 , lat:  51.1813906, image: "../foto_praha/storzer_bautzen.jpg"},
                    {name: 'Bitva na Berezině (na obraze Januaryho Suchodolského)', lon: 28.354531, lat:  54.324722, image: "../foto_praha/storzer_berezina.jpg"},
                    {name: 'Bitva u Malojaroslavce (na obraze Petera von Hesse)', lon: 36.4590244, lat:  55.0121808, image: "../foto_praha/storzer_malojaroslavec.jpg"},
                    {name: 'Bitva u Moskvy (na obraze "Napoleon v hořící Moskvě" Albrechta Adama)', lon: 37.6174781 , lat:  55.7505411, image: "../foto_praha/storzer_moskva.jpg"},
                    {name: 'Bitva u Borodina (na obraze Petera von Hesse)', lon: 35.816667, lat:  55.516667, image: "../foto_praha/storzer_borodino.jpg"},
                    {name: 'Bitva u Wagramu', lon: 16.557778, lat:  48.295556, image: "../foto_praha/storzer_wagram.jpg"},
                    {name: 'Bitva u Aspern-Essling (na obraze Fernanda Cormona)', lon: 16.5025, lat:  48.213056, image: "../foto_praha/storzer_aspern.jpg"},
                    {name: 'Bitva u Jílového (na obraze "Napoleon v bitvě u Jílového" Antoina-Jeana Grose)', lon: 20.633333 , lat:  54.4, image: "../foto_praha/storzer_jilove.jpg"},
                    {name: 'Bitva u Jeny (na obraze Henriho Chartiera vyobrazujícím maršála Joachima Murata)', lon: 11.5681969 , lat:  50.9537403, image: "../foto_praha/storzer_jena.jpg"},
                    {name: 'Bitva u Slavkova (na obraze "Vítězný návrat generála Rappa, který Napoleonovi přiváží ukořistěné ruské prapory a zajatého knížete Repnina" Francoise Gérarda)', lon: 16.8764942 , lat:  49.1532550, image: "../foto_praha/storzer_slavkov.jpg"},
                    {name: 'Bitva u San Dominga (na obraze T. L. Hornbrooka)', lon: -69.9299589 , lat:  18.4853600, image: "../foto_praha/storzer_domingo.jpg"},
                    {name: 'Bitva u Trafalgaru (na obraze Sammuela Drummonda)', lon: -6.2, lat:  36.25, image: "../foto_praha/storzer_trafalgar.jpg"},
                    {name: 'Bitva u Hohenlinden (na obraze H. F. Chopina)', lon:  11.9966653, lat:  48.1572694, image: "../foto_praha/storzer_hohenlinden.jpg"},
                    {name: 'Bitva u Marenga (na obraze Lousie-Francoise Lejeuna)', lon: 8.683333, lat:  44.883333, image: "../foto_praha/storzer_marengo.jpg"},
                    {name: 'Bitva u Abúkiru (na obraze Lousie-Francoise Lejeuna)', lon: 30.0641978, lat:  31.3203017, image: "../foto_praha/storzer_abukir.jpg"},
                    {name: 'Invaze do Benátek (na rytině C. Verneta a J. Duplessis-Bertauxe)', lon: 12.3345897, lat:  45.4371908, image: "../foto_praha/storzer_venice.jpg"},
                    {name: 'Bitva u La Favorita (na obraze Carla Verneta)', lon: 12.2424414, lat:  45.5249375, image: "../foto_praha/storzer_favorita.jpg"},
                    {name: 'Bitva u Rivoli (na obraze "Bonaparte prohlížející rakouské zajatce" Édourda Detailleho)', lon: 10.8117614, lat:  45.5719817, image: "../foto_praha/storzer_rivoli.jpg"},
                    {name: "Bitva u Arcole (na obraze L. A. Bacler d'Albe)", lon: 11.2860917, lat:  45.3582108, image: "../foto_praha/storzer_arcole.jpg"},
                    {name: 'Bitva u Lodi (na obraze Lousie-Francoise Lejeuna)', lon: 9.5032631, lat:  45.3138958, image: "../foto_praha/storzer_lodi.jpg"},
                    {name: 'Bitva u Maciejowic (na obraze "Koscziuszkovo zajetí v bitvě u Maciejowic" Jana B. Plersze)', lon: 15.6148969, lat:  50.9738181, image: "../foto_praha/storzer_maciej.jpg"},
                    {name: 'Bitva u Vilna © Juozas Kalinauskas, Lina Kalinauskaitė', lon: 25.2829111, lat:  54.6870458, image: "../foto_praha/storzer_vilno.jpg"},
                    {name: 'Obléhání Krakova (dobová rytina podle Samuela Pufendorfa)', lon: 19.9368564, lat:  50.0619475, image: "../foto_praha/storzer_krakov.jpg"},
                    {name: 'Bitva u Narvy (na obraze Alexandra Kotzebueho)', lon: 28.1402278, lat:  59.3578936, image: "../foto_praha/storzer_narva.jpg"},
                    {name: 'Bitva u Palonky (na obraze "Stefan Czarniecki během Polsko-ruské války" Januaryho Suchodolského)', lon: 25.713333, lat:  53.146111, image: "../foto_praha/storzer_polonka.png"},
                    {name: 'Bitva u Dunbaru (na obraze "Cromwell u Dunbaru" Andrewa Carricka Gowa)', lon: -2.4845, lat:  55.9837, image: "../foto_praha/storzer_dunbar.jpg"},
                    {name: 'Bitva u Marston Mooru (na obraze Johna Barkera)', lon: -1.2542, lat:  53.9623, image: "../foto_praha/storzer_marston.png"},
                    {name: 'Bitva u Lützenu (na obraze "Smrt krále Gustava II. Adolfa v bitvě u Lützenu" Carla Wahlboma)', lon: 12.1459519, lat:  51.2585622, image: "../foto_praha/storzer_lutzen.jpg"},
                    {name: 'Magdeburská svatba (na obraze "Dobytí Magdeburgu" Edwarda Steinbrücka)', lon: 11.6399608, lat:  52.1315889, image: "../foto_praha/storzer_magdeburg.jpg"},
                    {name: 'Bitva na Bílé hoře (na obraze Adolfa Liebschera)', lon: 14.319167, lat:  50.078333, image: "../foto_praha/storzer_bila.jpeg"},
                    {name: 'Bitva u Nýrsko (fotografie současné podoby místa bojiště) © Maxim Stanko', lon: 13.1435317, lat:  49.2938689, image: "../foto_praha/storzer_nyrsko.jpeg"},
                    {name: 'Obléhání hradu Sion (na obraze "Poslední zápas Jana Roháče z Dubé na hardě Sion" Stanislava Hudečka)', lon: 15.211972, lat:  49.88975, image: "../foto_praha/storzer_sion.png"},
                    {name: 'Bitva u Lipan (na obraze Luďka Marolda)', lon: 14.937053, lat:  50.028547, image: "../foto_praha/storzer_lipany.jpg"},
                    {name: 'Bitva u Grunwaldu (na obraze Jana Matejka)', lon: 20.094444, lat:  53.483333, image: "../foto_praha/storzer_grunwald.jpg"},
                    {name: 'Světlá (něm. Zwettl) © Waldviertel Tourismus', lon: 15.168889, lat:  48.603333, image: "../foto_praha/storzer_svetla.jpg"},
                    {name: 'Ústí nad Labem (olejomalba Ferdinanda Lapiého z roku 1857)', lon: 14.0381357, lat: 50.6603327, image: "../foto_praha/Storzer_usti.jpg"},
                    {name: 'Přibyslav (středověké vyobrazení)', lon: 15.7385453, lat:  49.5768383, image: "../foto_praha/storzer_pribyslav.jpg"},
                    {name: 'Česká Skalice © Město Česká Skalice', lon: 16.0427606, lat:  50.3946672, image: "../foto_praha/storzer_skalice.jpg"},
                    {name: 'Bitva u Hořic (na obraze "Bitva n sv. Gotthardě" Stanislava Hudečka)', lon: 15.6318322, lat:  50.3660892, image: "../foto_praha/storzer_horice.png"},
                    {name: 'Dobytí Německého Brodu © Havlíčkův Bord v pověstech a historii', lon: 15.5806853, lat:  49.6078489, image: "../foto_praha/storzer_brod.jpg"},
                    {name: 'Vyvraždění adamitů na Nežárce (na obraze "Záhuba adamitů" Františka Ženíška)', lon: 14.759444, lat:  49.155278, image: "../foto_praha/storzer_nezarka.jpg"},
                    {name: 'Obléhání Žatce (na obraze veduta města Žatec) © hrady-zriceniny.cz', lon: 13.5457725, lat: 50.3271683, image: "../foto_praha/storzer_zatec.jpg"},
                    {name: 'Bitva u Malešova (na fotografii tvrz, v jejímž okolí se bitva odehrála) © Prazak', lon: 14.937053, lat:  50.028547, image: "../foto_praha/storzer_malesov.jpg"},
                    {name: 'Jaroměř © Z ptačího pohledu', lon: 15.9213639, lat:  50.35619, image: "../foto_praha/storzer_jaromer.jpg"},
                    {name: 'Dobytí Litomyšle (na kresbě "Dobytí Litomyšle Bořkem z Dohalic" Franze Richtera)', lon: 16.3105192, lat: 49.8720311, image: "../foto_praha/storzer_litomysl.jpeg"},
                    {name: 'Dobytí Berouna (středověké vyobrazení města)', lon: 14.0733907, lat: 49.9640292, image: "../foto_praha/storzer_beroun_b.jpg"},
                    {name: 'Bitva u Panského boru (fotografie současné podoby bojiště) © Jana Sůvová', lon: 13.6522503, lat:  49.3305131, image: "../foto_praha/storzer_bor.jpeg"},
                    {name: 'Bitva na Vítkově (na obraze Adolfa Liebschera); dnes Žižkov', lon: 14.4566083, lat:  50.0806550, image: "../foto_praha/storzer_vitkov.jpg"},
                    {name: 'Bitva u Sudoměře (na obraze "Nájezd železných pánů na vozovou hradbu u Sudoměře" Adolfa Liebschera)', lon: 14.0478392, lat:  49.2503453, image: "../foto_praha/storzer_sudomer.jpg"},
                    {name: 'Kostnice (iluminace upálení Mistra Jana Husa ve "Spiezer Chronika" Diabolda Schillinga st.)', lon: 9.1750717, lat:  47.6592161, image: "../foto_praha/storzer_janhus.jpg"},
                    // neexistující místa
                ]},
                {type: 'mappoint',name: 'vanished place', marker: {symbol: 'url(../img/maps-and-flags.png)', width: 24, height: 24}, data: [
                    {name: 'Újezdská brána', lon: 14.4043375, lat: 50.0804150, image: "../foto_praha/ujezd_brana.jpg"},
                    {name: 'Strachův dvůr (na kresbě z 19. století již místo neexistovalo, původně stálo pravděpodobně na kresbě vlevo v rohu namísto budovy s arkýřem)', lon: 15.7862661, lat:  50.2017069, image: "../foto_praha/storzer_kukleny.jpg"},
                ]},
                ]});    
                break;
        case "akrobati":
            Highcharts.mapChart('gis', {chart: {margin: 0}, title: {text: ''}, navigation: {buttonOptions: {align: 'left', theme: {stroke: '#e6e6e6'}}},mapNavigation: {enabled: true, buttonOptions: {alignTo: 'spacingBox'}}, mapView: {center: [14.418540, 50.0874654], zoom: 10}, tooltip: {useHTML: true, headerFormat: "{point.point.name}", pointFormat: '<br/><img src="{point.image}"/>'}, legend: {enabled: true, title: {text: 'Zázračná madona'}, align: 'right', symbolWidth: 20, symbolHeight: 20, itemStyle: {textOutline: '1 1 1px rgba(255,255,255)'}, backgroundColor: 'rgba(255,255,255,0.8)', float: true, borderColor: '#e6e6e6', borderWidth: 1, borderRadius: 2, itemMarginBottom: 5}, plotOptions: {mappoint: {dataLabels: {enabled: false}}}, series: [{type: 'tiledwebmap', name: '', provider: {type: 'OpenStreetMap'}, showInLegend: false}, 
                // existující místa
                {type: 'mappoint', name: 'existing place', marker: {symbol: 'url(../img/placeholder.png)', width: 24, height: 24,}, data: [
                    {name: 'Česká Lípa © VitVit, Wikimedia Commons', lon: 14.5372974, lat: 50.6865452, image: "../foto_praha/Storzer_CLipa.jpg"},
                    {name: 'Šluknov © VitVit, Wikimedia Commons', lon: 14.4530321, lat: 51.003217, image: "../foto_praha/Storzer_Sluknov.jpg"},
                    {name: 'Rumburk © Rostislav Křivánek', lon: 14.5569317, lat: 50.9517739, image: "../foto_praha/Storzer_rumburk.jpg"},
                    {name: 'Bakov nad Jizerou © Facebook Město Bakov nad Jizerou', lon: 14.9388306, lat: 50.4801187, image: "../foto_praha/Storzer_bakov.jpg"},
                    {name: 'Varnsdorf © České Švýcarsko', lon: 14.6194058, lat: 50.9124244, image: "../foto_praha/Storzer_varnsdorf.jpg"},
                    {name: 'Hradčany (60. léta 19. stol.) © Zmizelá Praha, sv. 7, 1919', lon: 14.4000936, lat: 50.0898689, image: "../foto_praha/hradcany.jpg"},
                    {name: 'Belvedere ve Vídni © Burben, Shutterstock ', lon: 16.380888223299927, lat: 48.1915415, image: "../foto_praha/Storzer_belvedere.jpg"},
                    {name: 'Příkopy, dnes Na Příkopě (pohlednice z 19. století) © Stará Praha', lon: 14.426636, lat: 50.0861456, image: "../foto_praha/Storzer_prikopy.jpg"},
                    {name: 'Vídeň, pohled na Hofburg z 19. století © Schloß Schönbrunn Kultur- und Betriebsges.m.b.H.', lon: 16.0316259, lat: 49.3921258, image: "../foto_praha/storzer_wien.jpg"},
                    {name: 'Staré Město (1880) © Zmizelá Praha, sv. 1, 1919', lon: 14.4226550, lat: 50.0888228, image: "../foto_praha/staremesto.jpg"},
                    {name: 'Žofín, dnes Slovanský ostrov © Copyright Agentura NKL', lon: 14.41303058156899, lat: 50.0784525, image: "../foto_praha/Storzer_zofinskyo.jpg"},
                    {name: 'Vltava ', lon:  14.4109975, lat:  50.0840539, image: "../foto_praha/vltava.jpg"},
                    {name: 'Paříž na konci 19. století (autorem obrazu je Camille Pissarro)', lon: 2.3483915, lat: 48.8534951, image: "../foto_praha/Storzer_pariz.jpg"},
                    {name: 'Londýn (19. století) © London Stereoscopic Company, Getty Images', lon: -0.1277653, lat: 51.5074456, image: "../foto_praha/Storzer_london.jpg"},
                    {name: 'Drury-Lane (původní skica z roku 1840 "The Cock and Magpie")', lon: -0.1226154, lat: 51.5149787, image: "../foto_praha/storzer_drurylane.jpg"},
                    {name: 'Václavské náměstí (pohlednice z přelomu 19. a 20. století) © Stará Praha', lon: 14.427170364227162, lat: 50.0815867, image: "../foto_praha/Storzer_vaclavak.jpg"},
                    {name: 'Řezno, německy Regensburg (1905) © Detroit Photographic Company', lon: 12.0974869, lat: 49.0195333, image: "../foto_praha/Storzer_rezno.jpg"},
                    {name: 'Plzeň (obraz z 19. století)', lon: 13.3775249, lat: 49.7477415, image: "../foto_praha/Storzer_plzen.jpg"},
                    {name: 'Domažlice (na vedutě Jana Antonína Venuta)', lon: 12.9298338, lat: 49.4407069, image: "../foto_praha/Storzer_domazlice.jpg"},
                    {name: 'Brod nad Lesy, německy Furth im Wald © Andi-Furth, Wikimedia Commons', lon: 12.8452826, lat: 49.3081639, image: "../foto_praha/Storzer_furth.jpg"},
                    {name: 'Beroun © tipynavylet.cz', lon: 14.0733907, lat: 49.9640292, image: "../foto_praha/Storzer_beroun.jpg"},
                    {name: 'Rokycany © Město Rokycany', lon: 13.594778, lat: 49.7428813, image: "../foto_praha/Storzer_rokycany.jpg"}
                // neexistující místa
                ]},
                {type: 'mappoint',name: 'vanished place', marker: {symbol: 'url(../img/maps-and-flags.png)', width: 24, height: 24}, data: [
                    {name: 'Kulturní dům Colosseum', lon: 14.6184722, lat: 50.9123611, image: "../foto_praha/Storzer_colosseum.jpg"},
                    {name: 'Carlovo divadlo, německy Carltheater (pohled z roku 1850) © Wien Geschichte Wiki', lon: 16.3844, lat: 48.215, image: "../foto_praha/Storzer_carltheater.jpg"}, 
                ]},
                ]});    
                break;
        case "lilie":
            Highcharts.mapChart('gis', {chart: {margin: 0}, title: {text: ''}, navigation: {buttonOptions: {align: 'left', theme: {stroke: '#e6e6e6'}}},mapNavigation: {enabled: true, buttonOptions: {alignTo: 'spacingBox'}}, mapView: {center: [14.418540, 50.0874654], zoom: 10}, tooltip: {useHTML: true, headerFormat: "{point.point.name}", pointFormat: '<br/><img src="{point.image}"/>'}, legend: {enabled: true, title: {text: 'Zázračná madona'}, align: 'right', symbolWidth: 20, symbolHeight: 20, itemStyle: {textOutline: '1 1 1px rgba(255,255,255)'}, backgroundColor: 'rgba(255,255,255,0.8)', float: true, borderColor: '#e6e6e6', borderWidth: 1, borderRadius: 2, itemMarginBottom: 5}, plotOptions: {mappoint: {dataLabels: {enabled: false}}}, series: [{type: 'tiledwebmap', name: '', provider: {type: 'OpenStreetMap'}, showInLegend: false}, 
                // existující místa
                {type: 'mappoint', name: 'existing place', marker: {symbol: 'url(../img/placeholder.png)', width: 24, height: 24,}, data: [
                    {name: 'Kartouzská věznice © Vězeňská služba České republiky', lon: 15.3896331, lat: 50.4553472, image: "../foto_praha/storzer_kartouzy.jpg"},
                    {name: 'Mincio © Altomincio', lon: 11.929392, lat: 44.3129773, image: "../foto_praha/Storzer_mincio.jpg"},
                    {name: 'Probluz, pohled na místní kostel © Petr1888, Wikimedia Commons', lon: 15.7153547, lat: 50.2443953, image: "../foto_praha/Storzer_probluz.jpg"},
                    {name: 'Malá Strana (1866) © Zmizelá Praha, sv. 5, 1919', lon:  14.4048224 , lat:  50.0871582, image: "../foto_praha/malastrana.jpg"},
                    {name: 'Ostruhová ul., nyní Nerudova (19. stol.) © V. Jansa', lon: 14.3995256, lat: 50.0885142, image: "../foto_praha/ostruhova.jpg"},
                    {name: 'Hřebenky, fotografie z první poloviny 20. stol. © Janatkovi (archiv)', lon: 14.9388306, lat: 50.0735762, image: "../foto_praha/Storzer_kosire.jpg"},
                    {name: 'Košíře (1920) © Augustin Kočí', lon: 14.362062, lat: 50.0670831, image: "../foto_praha/Storzer_kosire.jpg"},
                    {name: 'Smíchov, přelom 19. a 20. století © Paměť města', lon: 14.4048437, lat: 50.0749464, image: "../foto_praha/storzer_smichov.jpg"},
                    {name: 'Zahrada Kinských © Kudy z Nudy ', lon: 14.394575659913496, lat: 50.07847295, image: "../foto_praha/storzer_kinsky.jpg"},
                    {name: 'Mrázovka © Městská část Praha 5', lon: 14.397979991694232, lat: 50.06983235, image: "../foto_praha/Storzer_mrazovka"},
                    {name: 'Drážďany, konec 19. století © Monovisions', lon: 13.7381437, lat: 51.0493286, image: "../foto_praha/Storzer_dresden"},
                    {name: 'Staré Město (1880) © Zmizelá Praha, sv. 1, 1919', lon: 14.4226550, lat: 50.0888228, image: "../foto_praha/staremesto.jpg"},
                    {name: 'Teplice, okolo 1870 © František Fridrich', lon: 13.8244461, lat: 50.6406644, image: "../foto_praha/Storzer_teplice.jpg"},
                    {name: 'Nollendorf (česky Nakléřov), 40. léta 20. stol.', lon:  13.9768114, lat:  50.7451636, image: "../foto_praha/Storzer_naklerov.jpg"},
                    {name: 'Arbesau (česky Varvažov) © Wenda Fryč, Zaniklé obce', lon: 13.9644126, lat: 50.7232687, image: "../foto_praha/Storzer_arbesau.jpg"},
                    {name: 'Ústí nad Labem, olejomalba Ferdinanda Lapiého z roku 1857', lon: 14.0381357, lat: 50.6603327, image: "../foto_praha/Storzer_usti.jpg"},
                    {name: 'Chlum, pohlednice z r. 1866', lon: 15.7476958, lat: 50.2774267, image: "../foto_praha/storzer_chlum.jpg"},
                    {name: 'Slaný, historická pohlednice', lon: 14.0868501, lat: 50.2306933, image: "../foto_praha/Storzer_slany.jpg"},
                    {name: 'Středokluky © Horakvlado, Wikimedia Commons', lon: 14.2341922, lat: 50.1321835, image: "../foto_praha/Storzer_stredokluky.jpg"},
                    {name: 'Ruzyně, pohled na kasárna © V.K.K.V', lon: 14.3028035, lat: 50.0915435, image: "../foto_praha/Storzer_ruzyne.jpg"},
                    {name: 'Karlovy Vary, pohled z 19. stol.', lon: 12.8701437, lat: 50.2306216, image: "../foto_praha/Storzer_kv.jpg"},
                    {name: 'Rio de Janeiro, capriccio olejomalba Jeana Debreta ', lon: -43.2093727, lat: -22.9110137, image: "../foto_praha/Storzer_rio.jpg"},
                    {name: 'Marseille, fotochrom starého přístavu z pozdního 19. století ', lon: 5.3699525, lat: 43.2961743, image: "../foto_praha/Storzer_marseille.jpg"},
                // neexistující místa
                ]},
                {type: 'mappoint',name: 'vanished place', marker: {symbol: 'url(../img/maps-and-flags.png)', width: 24, height: 24}, data: [
                    {name: 'Strahovská brána', lon: 14.3885875, lat: 50.0911817, image: "../foto_praha/strahovskabrana.png"}, 
                ]},
                ]});    
                break;
        case "job":
            Highcharts.mapChart('gis', {chart: {margin: 0}, title: {text: ''}, navigation: {buttonOptions: {align: 'left', theme: {stroke: '#e6e6e6'}}},mapNavigation: {enabled: true, buttonOptions: {alignTo: 'spacingBox'}}, mapView: {center: [14.418540, 50.0874654], zoom: 10}, tooltip: {useHTML: true, headerFormat: "{point.point.name}", pointFormat: '<br/><img src="{point.image}"/>'}, legend: {enabled: true, title: {text: 'Zázračná madona'}, align: 'right', symbolWidth: 20, symbolHeight: 20, itemStyle: {textOutline: '1 1 1px rgba(255,255,255)'}, backgroundColor: 'rgba(255,255,255,0.8)', float: true, borderColor: '#e6e6e6', borderWidth: 1, borderRadius: 2, itemMarginBottom: 5}, plotOptions: {mappoint: {dataLabels: {enabled: false}}}, series: [{type: 'tiledwebmap', name: '', provider: {type: 'OpenStreetMap'}, showInLegend: false}, 
                // existující místa
                {type: 'mappoint', name: 'existing place', marker: {symbol: 'url(../img/placeholder.png)', width: 24, height: 24,}, data: [

                    {name: 'Malá Strana (1866) © Zmizelá Praha, sv. 5, 1919', lon:  14.4048224 , lat:  50.0871582, image: "../foto_praha/malastrana.jpg"},
                    {name: 'Vídeň, pohled na Hofburg z 19. století © Schloß Schönbrunn Kultur- und Betriebsges.m.b.H.', lon: 16.0316259, lat: 49.3921258, image: "../foto_praha/storzer_wien.jpg"},
                    {name: 'Hřebenky, fotografie z první poloviny 20. stol. © Janatkovi (archiv)', lon: 14.9388306, lat: 50.0735762, image: "../foto_praha/Storzer_kosire.jpg"},
                    {name: 'Zahrada Kinských © Kudy z Nudy ', lon: 14.394575659913496, lat: 50.07847295, image: "../foto_praha/storzer_kinsky.jpg"},
                    {name: 'Újezd (1891) © Světozor', lon: 14.4045214, lat: 50.0821956, image: "../foto_praha/ujezd.jpg"},
                    {name: 'Slaný, historická pohlednice', lon: 14.0868501, lat: 50.2306933, image: "../foto_praha/Storzer_slany.jpg"},
                    {name: 'Petřín (1830) © V. Morstadt', lon:  14.3949292 , lat:  50.0816583, image: "../foto_praha/petrin.jpg"},
                    {name: 'Vyšehrad s kostelem (1872) © Zmizelá Praha, sv. 4, 1919', lon: 14.4178128,lat: 50.0643569, image: "../foto_praha/vysehradskykostel.jpg"},
                    {name: 'Domažlice (na vedutě Jana Antonína Venuta)', lon: 12.9298338, lat: 49.4407069, image: "../foto_praha/Storzer_domazlice.jpg"},
                    {name: 'Nové Město, Karlovo náměstí (1820) © Zmizelá Praha, sv. 3, 1919', lon: 14.4254014, lat: 50.0792811, image: "../foto_praha/novemesto.jpg"},
                    {name: 'Monte Cassino © Creative Commons Attribution-Share Alike 3.0 ', lon: 13.813755546570292, lat: 41.49088145, image: "../foto_praha/storzer_cassino.jpg"},
                // neexistující místa
                ]},
                {type: 'mappoint',name: 'vanished place', marker: {symbol: 'url(../img/maps-and-flags.png)', width: 24, height: 24}, data: [
                    {name: 'Újezdská brána', lon: 14.4043375, lat: 50.0804150, image: "../foto_praha/ujezd_brana.jpg"},
                    {name: 'Vrabcovna', lon: 14.398683600716364, lat: 50.07692075, image: "../foto_praha/ujezd_brana.jpg"},
                    {name: 'Plátenice', lon: 14.3889201, lat: 50.0765787, image: "../foto_praha/ujezd_brana.jpg"},
                ]},
                ]});    
                break;
        case "vrah":
            Highcharts.mapChart('gis', {chart: {margin: 0}, title: {text: ''}, navigation: {buttonOptions: {align: 'left', theme: {stroke: '#e6e6e6'}}},mapNavigation: {enabled: true, buttonOptions: {alignTo: 'spacingBox'}}, mapView: {center: [14.418540, 50.0874654], zoom: 10}, tooltip: {useHTML: true, headerFormat: "{point.point.name}", pointFormat: '<br/><img src="{point.image}"/>'}, legend: {enabled: true, title: {text: 'Zázračná madona'}, align: 'right', symbolWidth: 20, symbolHeight: 20, itemStyle: {textOutline: '1 1 1px rgba(255,255,255)'}, backgroundColor: 'rgba(255,255,255,0.8)', float: true, borderColor: '#e6e6e6', borderWidth: 1, borderRadius: 2, itemMarginBottom: 5}, plotOptions: {mappoint: {dataLabels: {enabled: false}}}, series: [{type: 'tiledwebmap', name: '', provider: {type: 'OpenStreetMap'}, showInLegend: false}, 
                // existující místa
                {type: 'mappoint', name: 'existing place', marker: {symbol: 'url(../img/placeholder.png)', width: 24, height: 24,}, data: [
                    {name: 'Motol © Archiv hlavního města Prahy', lon: 14.3445731, lat: 50.0707819, image: "../foto_praha/"},
                    {name: 'Ženská věznice v Řepích © Vězeňská služba ČR', lon: 14.3009106, lat: 50.0705081, image: "../foto_praha/Storzer_repy.jpg"},
                    {name: 'Karlov', lon: 14.4265703, lat: 50.0693008, image: "../foto_praha/storzer_karlov.jpg"},
                    {name: 'Kartouzská věznice © Vězeňská služba České republiky', lon: 15.3896331, lat: 50.4553472, image: "../foto_praha/storzer_kartouzy.jpg"},
                    {name: ' Plzeňská tř. (1873) Plán kr. hl. mětsa s vůkolím do F. Kořistky', lon:  14.3991897, lat:  50.0718667, image: "../foto_praha/plzenskatrida.jpg"},
                    {name: ' Smíchov (19. stol.) © V. Morstadt', lon:  14.4048437 , lat:  50.0749464, image: "../foto_praha/smichov.jpg"},
                    {name: 'Košíře (1920) © Augustin Kočí', lon: 14.362062, lat: 50.0670831, image: "../foto_praha/Storzer_kosire.jpg"},
                    {name: 'Jičín © Město Jičín', lon:  15.3516528 , lat:  50.4370452, image: "../foto_praha/storzer_jiicn.jpg"},
                    {name: 'Beroun © tipynavylet.cz', lon: 14.0733907, lat: 49.9640292, image: "../foto_praha/Storzer_beroun.jpg"},
                // neexistující místa
                ]},
                {type: 'mappoint',name: 'vanished place', marker: {symbol: 'url(../img/maps-and-flags.png)', width: 24, height: 24}, data: [
                    {name: 'Buďánka © Archiv hlavního města Prahy', lon: 14.3693956, lat: 50.0708722, image: "../foto_praha/"},
                ]},
                ]});    
                break;                        
        case "aspoň se pousměj":
            Highcharts.mapChart('gis', {chart: {margin: 0}, title: {text: ''}, navigation: {buttonOptions: {align: 'left', theme: {stroke: '#e6e6e6'}}},mapNavigation: {enabled: true, buttonOptions: {alignTo: 'spacingBox'}}, mapView: {center: [14.418540, 50.0874654], zoom: 10}, tooltip: {useHTML: true, headerFormat: "{point.point.name}", pointFormat: '<br/><img src="{point.image}"/>'}, legend: {enabled: true, title: {text: 'Zázračná madona'}, align: 'right', symbolWidth: 20, symbolHeight: 20, itemStyle: {textOutline: '1 1 1px rgba(255,255,255)'}, backgroundColor: 'rgba(255,255,255,0.8)', float: true, borderColor: '#e6e6e6', borderWidth: 1, borderRadius: 2, itemMarginBottom: 5}, plotOptions: {mappoint: {dataLabels: {enabled: false}}}, series: [{type: 'tiledwebmap', name: '', provider: {type: 'OpenStreetMap'}, showInLegend: false}, 
                // existující místa
                {type: 'mappoint', name: 'existing place', marker: {symbol: 'url(../img/placeholder.png)', width: 24, height: 24,}, data: [
                    {name: 'Hradec Králové', lon: 15.8327512, lat: 50.2092113, image: "../foto_praha/storzer_hk.jpg"},
                    {name: 'Chlum, pohlednice z r. 1866', lon: 15.7476958, lat: 50.2774267, image: "../foto_praha/storzer_chlum.jpg"},
                    {name: 'Klatovy © Jiří Bernard', lon: 13.2935954, lat: 49.3951183, image: "../foto_praha/storzer_klatovy.jpg"},
                    {name: 'Varnsdorf © České Švýcarsko', lon: 14.6194058, lat: 50.9124244, image: "../foto_praha/Storzer_varnsdorf.jpg"},
                    {name: 'Hanšpach (dnes obec Lipová) © K23k23, Wikimedia Commons', lon:  14.3602164, lat: 51.0110414 , image: "../foto_praha/storzer_lipova.jpg"},
                    {name: 'Brno okolo r. 1850 pohledem z Červeného kopce ve vyobrazení Františka Xavera Sandmanna', lon: 16.6113382, lat: 49.1922443, image: "../foto_praha/storzer_brno.jpg"},
                    {name: 'Vratislav ve vyobrazení Viléma Kandlera', lon:  17.0326689, lat:  51.1089776, image: "../foto_praha/storzer_wroclaw.jpg"},
                    {name: 'Madrid okolo 1890 (pohled na budovu Ministerstva dopravy a spojů)', lon: -3.7035825, lat: 40.4167047, image: "../foto_praha/storzer_madrid.jpg"},
                    {name: 'Mnichovo Hradiště (počátek 20. století)', lon:  14.9741022, lat:  50.5229864, image: "../foto_praha/storzer_mnich.jpg"},
                    {name: 'Podol (asi 30. léta 20. stol.)', lon:  14.4227797, lat:  50.0557597, image: "../foto_praha/podol.jpg"},
                    {name: 'Paříž na konci 19. století (autorem obrazu je Camille Pissarro)', lon: 2.3483915, lat: 48.8534951, image: "../foto_praha/Storzer_pariz.jpg"},
                    {name: 'Londýn (19. století) © London Stereoscopic Company, Getty Images', lon: -0.1277653, lat: 51.5074456, image: "../foto_praha/Storzer_london.jpg"}
                // neexistující místa
                ]},
                {type: 'mappoint',name: 'vanished place', marker: {symbol: 'url(../img/maps-and-flags.png)', width: 24, height: 24}, data: [
                ]},
                ]});    
                break;                        
        case "dva barikádníci":
            Highcharts.mapChart('gis', {chart: {margin: 0}, title: {text: ''}, navigation: {buttonOptions: {align: 'left', theme: {stroke: '#e6e6e6'}}},mapNavigation: {enabled: true, buttonOptions: {alignTo: 'spacingBox'}}, mapView: {center: [14.418540, 50.0874654], zoom: 10}, tooltip: {useHTML: true, headerFormat: "{point.point.name}", pointFormat: '<br/><img src="{point.image}"/>'}, legend: {enabled: true, title: {text: 'Zázračná madona'}, align: 'right', symbolWidth: 20, symbolHeight: 20, itemStyle: {textOutline: '1 1 1px rgba(255,255,255)'}, backgroundColor: 'rgba(255,255,255,0.8)', float: true, borderColor: '#e6e6e6', borderWidth: 1, borderRadius: 2, itemMarginBottom: 5}, plotOptions: {mappoint: {dataLabels: {enabled: false}}}, series: [{type: 'tiledwebmap', name: '', provider: {type: 'OpenStreetMap'}, showInLegend: false}, 
                // existující místa
                {type: 'mappoint', name: 'existing place', marker: {symbol: 'url(../img/placeholder.png)', width: 24, height: 24,}, data: [
                    {name: 'Staré Město (1880) © Zmizelá Praha, sv. 1, 1919', lon: 14.4226550, lat: 50.0888228, image: "../foto_praha/staremesto.jpg"},
                    {name: 'Nové Město, Karlovo náměstí (1820) © Zmizelá Praha, sv. 3, 1919', lon: 14.4254014, lat: 50.0792811, image: "../foto_praha/novemesto.jpg"},
                    {name: 'Křižovnické náměstí na kresbě L. Langeho z r. 1842 © Archiv autora', lon: 14.414201489354916, lat: 50.08620635, image: "../foto_praha/storzer_krizovnicke_n.jpg"},
                    {name: 'Jezovitská, dnes Karlova (1903) © Zmizelá Praha, sv 1, 2002', lon: 14.419016941176302, lat: 50.08633655213753, image: "../foto_praha/storzer_karlova.jpg"},
                    {name: 'Karlov', lon: 14.4265703, lat: 50.0693008, image: "../foto_praha/storzer_karlov.jpg"},
                    {name: 'Klementinum © Karelj', lon: 14.4156719, lat: 50.0866050, image: "../foto_praha/storzer_klementinum.jpg"},
                    {name: 'Mariánské náměstí (1910) © Praha očima staletí', lon:  14.417541904255318, lat:  50.08702395, image: "../foto_praha/storzer_marian.jpg"},
                    {name: 'Malá Strana (1866) © Zmizelá Praha, sv. 5, 1919', lon:  14.4048224 , lat:  50.0871582, image: "../foto_praha/malastrana.jpg"},
                    {name: ' Vltava ', lon:  14.4109975, lat:  50.0840539, image: "../foto_praha/vltava.jpg"},
                    {name: 'Hradčany (60. léta 19. stol.) © Zmizelá Praha, sv. 7, 1919', lon: 14.4000936, lat: 50.0898689, image: "../foto_praha/hradcany.jpg"},
                    {name: 'Podskalí © EPOQUE 1900', lon: 14.4143628, lat: 50.0687486, image: "../foto_praha/storzer_podskali.jpg"},
                    {name: 'Karlín (1870) © Praha očima staletí', lon: 14.4583639, lat: 50.0926769, image: "../foto_praha/storzer_karlin.jpg"},
                    {name: 'Josefov © EPOQUE 1900', lon: 14.4180217, lat: 50.0900189, image: "../foto_praha/storzer_josefov.jpg"},
                    {name: 'Rejdiště (dnes náměstí Jana Palacha; fotografie ze stavby Rudolfina) © Národní technické muzeum', lon: 14.415704787139477, lat: 50.0891023, image: "../foto_praha/storzer_rejdiste.jpg"},
                    {name: ' Smíchov (19. stol.) © V. Morstadt', lon:  14.4048437 , lat:  50.0749464, image: "../foto_praha/smichov.jpg"},
                    {name: 'Barvířský ostrov (dnes Střelecký; rytina Johannese Wechtera z roku 1606) © ČTK', lon: 14.4099675, lat: 50.0814239, image: "../foto_praha/streleckyostrov.jpg"},
                    {name: 'Sovovy mlýny, přelom 19. a 20. století © Muzeum Kampa', lon: 14.40820789955488, lat: 50.083764450000004, image: "../foto_praha/Storzer_Mlyny_archivni-1024x490.jpg"},
                    {name: 'Kampa (1870) © Zmizelá Praha, sv. 5, 1919', lon: 14.4079667, lat:  50.0845494, image: "../foto_praha/kampa.jpg"},
                    {name: 'Malostranská mostecká věž © Prague City Tourism', lon: 14.4068444, lat: 50.0872378, image: "../foto_praha/storzer_mmvez.jpg"},
                    {name: ' Mostecká ul. (1901) © V. Jansa', lon:  14.4060869, lat:  50.0873433, image: "../foto_praha/mosteckaulice.jpg"},
                    {name: 'Malostranské náměstí © EPOQUE 1900', lon: 14.4043312492108, lat: 50.088113899999996, image: "../foto_praha/storzer_malostransken.jpg"},
                    {name: ' Mariánské hradby, nyní ul. Mariánské hradby (1870) © Wikipedie', lon: 14.4028517, lat:  50.0938675, image: "../foto_praha/marianskehradby.jpg"},
                    {name: 'Bruská brána (dnes Písecká brána) © Světozor', lon: 14.4058908, lat: 50.0952119, image: "../foto_praha/storzer_bruskab.jpg"},
                    {name: 'Letohrádek královny Anny (Belveder) © Archiv Pražského hradu', lon: 14.4053217, lat: 50.0937844, image: "../foto_praha/storzer_belveder.jpg"},
                    {name: ' Petřín (1830) © V. Morstadt', lon:  14.3949292 , lat:  50.0816583, image: "../foto_praha/petrin.jpg"},
                    {name: 'Pohořelec', lon: 14.389070, lat: 50.087460, image: "../foto_praha/pohorelec.jpg"},
                    {name: 'Štvanice (1921) © Český svět', lon: 14.4180217, lat: 50.0900189, image: "../foto_praha/storzer_stvanice.jpg"},
                    {name: 'Krveprolití r. 1848 v Běchovicích (na vyobrazení J. Z. Quasta)', lon: 14.6159525, lat: 50.0810628, image: "../foto_praha/storzer_bechovice.jpg"},
                    {name: 'Kolín ve 40. letech 19. století (dobová rytina) © Beschreibende und malerische Darstellung der K. K. österreichischen Staatseisenbahn von Olmütz bis Prag / Verfasst von L. Förster und A. Demarteau', lon:  15.2011571 , lat:  50.0288894, image: "../foto_praha/storzer_kolin.jpg"},
                    {name: 'Čáslav (na vedutě Jana Antonína Venuta)', lon: 15.3913205, lat: 49.9109171, image: "../foto_praha/storzer_caslav.jpg"},
                    {name: 'Kutná Hora (na vedutě Jana Antonína Venuta)', lon:  15.2681123, lat: 49.9486561, image: "../foto_praha/storzer_kutnah.jpg"},
                    {name: 'Chrudim (na vedutě Jana Antonína Venuta)', lon: 15.7947559, lat: 49.9511458, image: "../foto_praha/storzer_chrudim.jpg"},
                    {name: 'Nová Paka (na vedutě Jana Antonína Venuta)', lon: 15.5158558, lat: 50.4945183, image: "../foto_praha/storzer_paka.jpg"},
                    {name: 'Jilemnice (na vedutě Jana Antonína Venuta)', lon: 15.5065283, lat: 50.6088950, image: "../foto_praha/storzer_jilemnice.jpg"},
                    {name: 'Vrchlabí (na vedutě Jana Antonína Venuta)', lon: 15.6093736, lat: 50.6269661, image: "../foto_praha/storzer_vrchlabi.jpg"},
                    {name: 'Hostinné (na vedutě Jana Antonína Venuta)', lon: 15.7233333, lat: 50.5406617, image: "../foto_praha/storzer_hostinne.jpg"},
                    {name: 'Lomnice nad Popelkou (na vedutě Jana Antonína Venuta)', lon: 15.3734081, lat: 50.5306233, image: "../foto_praha/storzer_lomnice.jpg"},
                    {name: 'Konvikt', lon:  14.4174694 , lat:50.0834414, image: "../foto_praha/storzer_konvikt.jpg"},
                    {name: ' Staroměstská radnice (19. stol.) © V. Jansa', lon:  14.4205922, lat:  50.0872056, image: "../foto_praha/staromestskaradnice.jpg"},
                    {name: 'Prašná brána na fotografii A. Golla (1856)', lon: 14.4277814, lat: 50.0872650, image: "../foto_praha/storzer_prasnab.jpg"},
                    {name: 'Bubeneč (Na obraze "Pohled na Bubeneč" A. Mánesa)', lon: 14.4001203, lat: 50.1011389, image: "../foto_praha/storzer_bubenec.jpeg"},
                    {name: 'Pelc-Tyrolka', lon: 14.4449658, lat: 50.1167003, image: "../foto_praha/storzer_pelc.jpg"},
                    {name: 'Troja', lon: 14.4234250, lat: 50.1221472, image: "../foto_praha/storzer_troja.jpg"},
                    {name: 'Roztoky na obraze A. Chittussiho (1884)', lon: 14.3836175, lat: 50.1636703, image: "../foto_praha/storzer_roztoky.jpg"},
                    {name: 'Podbaba na kresbě J. Kaplického', lon: 14.3951908, lat: 50.1093178, image: "../foto_praha/storzer_podbaba.jpg"},
                    {name: 'Klecany', lon: 14.4114803, lat: 50.1759878, image: "../foto_praha/storzer_klecany.jpg"},
                    {name: 'Letná (1888) © Světozor', lon: 14.4158122, lat: 50.0976897, image: "../foto_praha/storzer_letna.jpg"},
                    {name: 'Hradec Králové', lon: 15.8327512, lat: 50.2092113, image: "../foto_praha/storzer_hk.jpg"},
                    {name: 'České Budějovice (na vedutě Jana Antonína Venuta) © hrady-zriceniny.cz', lon: 14.4743419, lat: 48.9744689, image: "../foto_praha/storzer_ceskebudejovice.jpg"},

                // neexistující místa
                ]},
                {type: 'mappoint',name: 'vanished place', marker: {symbol: 'url(../img/maps-and-flags.png)', width: 24, height: 24}, data: [
                    {name: 'Újezdská brána', lon: 14.4043375, lat: 50.0804150, image: "../foto_praha/ujezd_brana.jpg"},
                    {name: 'Strahovská brána', lon: 14.3885875, lat: 50.0911817, image: "../foto_praha/strahovskabrana.png"},
                    {name: 'Bruska s nádražím', lon: 14.3988508, lat: 50.0966058, image: "../foto_praha/storzer_bruska.jpeg"},
                    {name: 'Zaniklá ves Bubny (na fotografii bývalé nádraží) © Honza Groh, Wikimedia Commons', lon: 14.443333, lat: 50.1, image: "../foto_praha/storzer_bubny.jpeg"},
                    {name: 'Poříčská brána © Světozor', lon: 14.437158, lat: 50.090698, image: "../foto_praha/storzer_poricskab.png"},
                    {name: 'Wimmerovy sady (na kresbě A. Pucherny okolo r. 1810)', lon: 14.4294233, lat: 50.0672708, image: "../foto_praha/storzer_wimmerovy_sady.jpg"},
                    {name: 'Koňská brána (1874) © Radek Linner', lon: 14.430335, lat: 50.079339, image: "../foto_praha/storzer_konska_brana.jpg"},

                ]},
                ]});    
                break;
        case "Moderní upíři":
            Highcharts.mapChart('gis', {chart: {margin: 0}, title: {text: ''}, navigation: {buttonOptions: {align: 'left', theme: {stroke: '#e6e6e6'}}},mapNavigation: {enabled: true, buttonOptions: {alignTo: 'spacingBox'}}, mapView: {center: [14.418540, 50.0874654], zoom: 10}, tooltip: {useHTML: true, headerFormat: "{point.point.name}", pointFormat: '<br/><img src="{point.image}"/>'}, legend: {enabled: true, title: {text: 'Zázračná madona'}, align: 'right', symbolWidth: 20, symbolHeight: 20, itemStyle: {textOutline: '1 1 1px rgba(255,255,255)'}, backgroundColor: 'rgba(255,255,255,0.8)', float: true, borderColor: '#e6e6e6', borderWidth: 1, borderRadius: 2, itemMarginBottom: 5}, plotOptions: {mappoint: {dataLabels: {enabled: false}}}, series: [{type: 'tiledwebmap', name: '', provider: {type: 'OpenStreetMap'}, showInLegend: false}, 
                // existující místa
                {type: 'mappoint', name: 'existing place', marker: {symbol: 'url(../img/placeholder.png)', width: 24, height: 24,}, data: [
                    {name: ' Vltava ', lon:  14.4109975, lat:  50.0840539, image: "../foto_praha/vltava.jpg"},
                    {name: 'Plzeň (obraz z 19. století)', lon: 13.3775249, lat: 49.7477415, image: "../foto_praha/Storzer_plzen.jpg"},
                    {name: 'Tábor (na vedutě A. Hauna z r. 1860)', lon: 14.6587234, lat: 49.4141533, image: "../foto_praha/storzer_tabor.jpg"},
                    {name: 'Vršovice © Český svět (1912)', lon: 14.4726067, lat: 50.0721522, image: "../foto_praha/storzer_vrsovice.jpg"},
                    {name: 'Krkonoše © KRNAP', lon:  15.6478139, lat: 50.6983650 , image: "../foto_praha/storzer_krkonose.jpg"},
                    {name: 'Nusle (1920) © Světozor', lon: 14.4420511, lat: 50.0567497, image: "../foto_praha/storzer_nusle.jpg"},
                    {name: 'Žatec (na vedutě Jana Antonína Venuta) © hrady-zriceniny.cz', lon:  13.545952, lat:  50.3274423, image: "../foto_praha/storzer_zatec.jpg"},
                    {name: 'Stromovka (na obraze V. Barvitia "Čtvrtek ve Stromovce" z r. 1885)', lon: 14.4195550, lat: 50.1070667, image: "../foto_praha/storzer_stromovka.jpg"},
                    {name: 'Domažlice (na vedutě Jana Antonína Venuta)', lon: 12.9298338, lat: 49.4407069, image: "../foto_praha/Storzer_domazlice.jpg"},
                    {name: 'Malá Strana (1866) © Zmizelá Praha, sv. 5, 1919', lon:  14.4048224 , lat:  50.0871582, image: "../foto_praha/malastrana.jpg"},
                    {name: 'Budapešť © Schloß Schönbrunn Kultur- und Betriebsges.m.b.H.', lon:  19.0529844 , lat:  47.4942217, image: "../foto_praha/storzer_budapest.jpg"},
                    {name: ' Petřín (1830) © V. Morstadt', lon:  14.3949292 , lat:  50.0816583, image: "../foto_praha/petrin.jpg"},
                    {name: 'Příkopy, dnes Na Příkopě (pohlednice z 19. století) © Stará Praha', lon: 14.426636, lat: 50.0861456, image: "../foto_praha/Storzer_prikopy.jpg"},
                // neexistující místa
                ]},
                {type: 'mappoint',name: 'vanished place', marker: {symbol: 'url(../img/maps-and-flags.png)', width: 24, height: 24}, data: [
                    {name: 'Zahrada Kanálka © Facebook', lon: 14.446031, lat: 50.078287, image: "../foto_praha/storzer_kanalka.jpg"},
                ]},
                ]});    
                break;
        case "Adamité":
            Highcharts.mapChart('gis', {chart: {margin: 0}, title: {text: ''}, navigation: {buttonOptions: {align: 'left', theme: {stroke: '#e6e6e6'}}},mapNavigation: {enabled: true, buttonOptions: {alignTo: 'spacingBox'}}, mapView: {center: [14.418540, 50.0874654], zoom: 10}, tooltip: {useHTML: true, headerFormat: "{point.point.name}", pointFormat: '<br/><img src="{point.image}"/>'}, legend: {enabled: true, title: {text: 'Zázračná madona'}, align: 'right', symbolWidth: 20, symbolHeight: 20, itemStyle: {textOutline: '1 1 1px rgba(255,255,255)'}, backgroundColor: 'rgba(255,255,255,0.8)', float: true, borderColor: '#e6e6e6', borderWidth: 1, borderRadius: 2, itemMarginBottom: 5}, plotOptions: {mappoint: {dataLabels: {enabled: false}}}, series: [{type: 'tiledwebmap', name: '', provider: {type: 'OpenStreetMap'}, showInLegend: false}, 
                // existující místa
                {type: 'mappoint', name: 'existing place', marker: {symbol: 'url(../img/placeholder.png)', width: 24, height: 24,}, data: [
                    {name: 'Paříž na konci 19. století (autorem obrazu je Camille Pissarro)', lon: 2.3483915, lat: 48.8534951, image: "../foto_praha/Storzer_pariz.jpg"},
                    
                // neexistující místa
                ]},
                {type: 'mappoint',name: 'vanished place', marker: {symbol: 'url(../img/maps-and-flags.png)', width: 24, height: 24}, data: [
                ]},
                ]});    
                break; 
        default:
            document.getElementById("gis").src = "";
    }
}
