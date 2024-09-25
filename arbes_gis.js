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
                    {name: 'misto', lon: 14.4000936, lat: 50.0898689, image: "../foto_praha/fotka.jpg"},
                // neexistující místa
                ]},
                {type: 'mappoint',name: 'vanished place', marker: {symbol: 'url(../img/maps-and-flags.png)', width: 24, height: 24}, data: [
                    {name: 'místo', lon: 14.4068219, lat: 50.0775161, image: "../foto_praha/foto.jpg"}, 
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
                    {name: 'Příkopy, dnes Na Příkopě (pohlednice z 19. století) © Stará Praha', lon: 14.426636, lat: 50.0861456, image: "../foto_praha/Storzer_prikopy"},
                    {name: 'Vídeň © ÖJAB', lon: 16.0316259, lat: 49.3921258, image: "../foto_praha/wien.png"},
                    {name: 'Staré Město (1880) © Zmizelá Praha, sv. 1, 1919', lon: 14.4226550, lat: 50.0888228, image: "../foto_praha/staremesto.jpg"},
                    {name: 'Žofín, dnes Slovanský ostrov © Copyright Agentura NKL', lon: 14.41303058156899, lat: 50.0784525, image: "../foto_praha/Storzer_zofinskyo.jpg"},
                    {name: 'Vltava ', lon:  14.4109975, lat:  50.0840539, image: "../foto_praha/vltava.jpg"},
                    {name: 'Paříž na konci 19. století (autorem obrazu je Camille Pissarro)', lon: 2.3483915, lat: 48.8534951, image: "../foto_praha/Storzer_pariz.jpg"},
                    {name: 'Londýn (19. století) © London Stereoscopic Company, Getty Images', lon: -0.1277653, lat: 51.5074456, image: "../foto_praha/Storzer_london.jpg"},
                    {name: 'Drury-Lane (původní skica z roku 1840 "The Cock and Magpie")', lon: -0.1226154, lat: 51.5149787, image: "../foto_praha/storzer_drurylane.jpg"},
                    {name: 'Václavské náměstí (pohlednice z přelomu 19. a 20. století) © Stará Praha', lon: 14.427170364227162, lat: 50.0815867, image: "../foto_praha/Storzer_vaclavak.jpg"},
                    {name: 'Řezno, německy Regensburg (1905) © Detroit Photographic Company', lon: 12.0974869, lat: 49.0195333, image: "../foto_praha/Storzer_rezno.jpg"},
                    {name: 'Plzeň (obraz z 19. století)', lon: 13.3775249, lat: 49.7477415, image: "../foto_praha/Storzer_plzen.jpg"},
                    {name: 'Domažlice © Vlastimil, Výletník.cz', lon: 12.9298338, lat: 49.4407069, image: "../foto_praha/Storzer_domazlice.jpg"},
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
        default:
            document.getElementById("gis").src = "";
    }
}
