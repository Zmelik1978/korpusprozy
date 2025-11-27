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
                +
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
                {name: 'Petřín (1830) © V. Morst;adt', lon: 14.3952356, lat: 50.0834503, image: "../foto_praha/petrin.jpg"},
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
                    {name: 'Beroun © hrady-zriceniny.cz', lon: 14.0733907, lat: 49.9640292, image: "../foto_praha/Storzer_beroun.jpg"},
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
                    {name: 'Beroun © hrady-zriceniny.cz', lon: 14.0733907, lat: 49.9640292, image: "../foto_praha/Storzer_beroun.jpg"},
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
        case "adamite":
            Highcharts.mapChart('gis', {chart: {margin: 0}, title: {text: ''}, navigation: {buttonOptions: {align: 'left', theme: {stroke: '#e6e6e6'}}},mapNavigation: {enabled: true, buttonOptions: {alignTo: 'spacingBox'}}, mapView: {center: [14.418540, 50.0874654], zoom: 4}, tooltip: {useHTML: true, headerFormat: "{point.point.name}", pointFormat: '<br/><img src="{point.image}"/>'}, legend: {enabled: true, title: {text: 'Adamité'}, align: 'right', symbolWidth: 20, symbolHeight: 20, itemStyle: {textOutline: '1 1 1px rgba(255,255,255)'}, backgroundColor: 'rgba(255,255,255,0.8)', float: true, borderColor: '#e6e6e6', borderWidth: 1, borderRadius: 2, itemMarginBottom: 5}, plotOptions: {mappoint: {dataLabels: {enabled: false}}}, series: [{type: 'tiledwebmap', name: '', provider: {type: 'OpenStreetMap'}, showInLegend: false}, 
                // existující místa
                {type: 'mappoint', name: 'existing place', marker: {symbol: 'url(../img/placeholder.png)', width: 24, height: 24,}, data: [
                    {name: 'Paříž na konci 19. století (autorem obrazu je Camille Pissarro)', lon: 2.3483915, lat: 48.8534951, image: "../foto_praha/Storzer_pariz.jpg"},
                    
                // neexistující místa
                ]},
                {type: 'mappoint',name: 'vanished place', marker: {symbol: 'url(../img/maps-and-flags.png)', width: 24, height: 24}, data: [
                ]},
                ]});    
                break; 
        case "Advokát chudých":
            Highcharts.mapChart('gis', {chart: {margin: 0}, title: {text: ''}, navigation: {buttonOptions: {align: 'left', theme: {stroke: '#e6e6e6'}}},mapNavigation: {enabled: true, buttonOptions: {alignTo: 'spacingBox'}}, mapView: {center: [14.418540, 50.0874654], zoom: 10}, tooltip: {useHTML: true, headerFormat: "{point.point.name}", pointFormat: '<br/><img src="{point.image}"/>'}, legend: {enabled: true, title: {text: 'Zázračná madona'}, align: 'right', symbolWidth: 20, symbolHeight: 20, itemStyle: {textOutline: '1 1 1px rgba(255,255,255)'}, backgroundColor: 'rgba(255,255,255,0.8)', float: true, borderColor: '#e6e6e6', borderWidth: 1, borderRadius: 2, itemMarginBottom: 5}, plotOptions: {mappoint: {dataLabels: {enabled: false}}}, series: [{type: 'tiledwebmap', name: '', provider: {type: 'OpenStreetMap'}, showInLegend: false}, 
                // existující místa
                {type: 'mappoint', name: 'existing place', marker: {symbol: 'url(../img/placeholder.png)', width: 24, height: 24,}, data: [
                    {name: 'Holešovice (pohled na elektrárnu) © Český svět', lon: 14.4355025, lat: 50.1006414, image: "../foto_praha/storzer_holesovice.jpg"},
                    {name: 'Kanovnická ulice © Wikimedia Commons, VitVit', lon: 14.3940997, lat: 50.0903797, image: "../foto_praha/storzer_holesovice.jpg"},
                    {name: 'Hradčanské náměstí © Audiala', lon: 14.3961339, lat: 50.0892900, image: "../foto_praha/storzer_hradcanske_n.jpg"},
                    {name: 'Hradčany (60. léta 19. stol.) © Zmizelá Praha, sv. 7, 1919', lon: 14.4000936, lat: 50.0898689, image: "../foto_praha/hradcany.jpg"},
                    {name: 'Jelenní příkop (1860) © V. Morstadt', lon: 14.3958342, lat: 50.0913847, image: "../foto_praha/hradcany.jpg"},
                    {name: 'Loreta (1836) © W. Kadler ', lon:  14.391545496226598 , lat:  50.089281799999995, image: "../foto_praha/loreta.jpg"},
                    {name: 'Nový Svět (1897) © V. Jansa', lon: 14.3913964, lat: 50.0909353, image: "../foto_praha/novysvet.jpg"},
                    {name: 'Bitva u Novary (na obraze "Polní maršálek Radecký se svým štábem v bitvě u Novary" Albrechta Adama)', lon:  8.6196550 , lat:  45.4464036, image: "../foto_praha/storzer_novara.jpg"},
                    {name: 'Staré Město (1880) © Zmizelá Praha, sv. 1, 1919', lon: 14.4226550, lat: 50.0888228, image: "../foto_praha/staremesto.jpg"},
                    {name: 'Nové Město, Karlovo náměstí (1820) © Zmizelá Praha, sv. 3, 1919', lon: 14.4254014, lat: 50.0792811, image: "../foto_praha/novemesto.jpg"},
                    {name: 'Pohořelec', lon: 14.389070, lat: 50.087460, image: "../foto_praha/pohorelec.jpg"},
                    {name: 'Malá Strana (1866) © Zmizelá Praha, sv. 5, 1919', lon:  14.4048224 , lat:  50.0871582, image: "../foto_praha/malastrana.jpg"},
                    {name: 'Vídeň, pohled na Hofburg z 19. století © Schloß Schönbrunn Kultur- und Betriebsges.m.b.H.', lon: 16.0316259, lat: 49.3921258, image: "../foto_praha/storzer_wien.jpg"},
                    {name: 'Bubeneč (Na obraze "Pohled na Bubeneč" A. Mánesa)', lon: 14.4001203, lat: 50.1011389, image: "../foto_praha/storzer_bubenec.jpeg"},
                    {name: ' Mariánské hradby, nyní ul. Mariánské hradby (1870) © Wikipedie', lon: 14.4028517, lat:  50.0938675, image: "../foto_praha/marianskehradby.jpg"}
                // neexistující místa
                ]},
                {type: 'mappoint',name: 'vanished place', marker: {symbol: 'url(../img/maps-and-flags.png)', width: 24, height: 24}, data: [
                    {name: 'Prašný most, nyní ul. U Prašného mostu (1885) © Plán Prahy s okolím',  lon: 14.3988406, lat: 50.0921997, image: "../foto_praha/prasnymost.jpg"}
                ]},
                ]});    
                break;
        case "Agitátor":
            Highcharts.mapChart('gis', {chart: {margin: 0}, title: {text: ''}, navigation: {buttonOptions: {align: 'left', theme: {stroke: '#e6e6e6'}}},mapNavigation: {enabled: true, buttonOptions: {alignTo: 'spacingBox'}}, mapView: {center: [14.418540, 50.0874654], zoom: 10}, tooltip: {useHTML: true, headerFormat: "{point.point.name}", pointFormat: '<br/><img src="{point.image}"/>'}, legend: {enabled: true, title: {text: 'Zázračná madona'}, align: 'right', symbolWidth: 20, symbolHeight: 20, itemStyle: {textOutline: '1 1 1px rgba(255,255,255)'}, backgroundColor: 'rgba(255,255,255,0.8)', float: true, borderColor: '#e6e6e6', borderWidth: 1, borderRadius: 2, itemMarginBottom: 5}, plotOptions: {mappoint: {dataLabels: {enabled: false}}}, series: [{type: 'tiledwebmap', name: '', provider: {type: 'OpenStreetMap'}, showInLegend: false}, 
                // existující místa
                {type: 'mappoint', name: 'existing place', marker: {symbol: 'url(../img/placeholder.png)', width: 24, height: 24,}, data: [
                    {name: 'Holešovice (pohled na elektrárnu) © Český svět', lon: 14.4355025, lat: 50.1006414, image: "../foto_praha/storzer_holesovice.jpg"},
                    {name: 'Hostinec U Montágů (dnes Šternberský palác)', lon: 14.4044319, lat: 50.0887039, image: "../foto_praha/storzer_u_montagu.jpg"},
                    {name: 'Ostruhová ul., nyní Nerudova (19. stol.) © V. Jansa', lon: 14.3995256, lat: 50.0885142, image: "../foto_praha/ostruhova.jpg"},
                    {name: 'Strahov (1830) © V. Morstadt', lon: 14.3828081, lat: 50.0815358, image: "../foto_praha/strahov.jpg"},
                    {name: 'Malá Strana (1866) © Zmizelá Praha, sv. 5, 1919', lon:  14.4048224 , lat:  50.0871582, image: "../foto_praha/malastrana.jpg"},
                    {name: 'Vídeň, pohled na Hofburg z 19. století © Schloß Schönbrunn Kultur- und Betriebsges.m.b.H.', lon: 16.0316259, lat: 49.3921258, image: "../foto_praha/storzer_wien.jpg"},
                    {name: 'Vinohrady © Praha 2', lon: 14.4380594, lat: 50.0754556, image: "../foto_praha/storzer_vinohrady.jpg"},
                    {name: ' Petřín (1830) © V. Morstadt', lon:  14.3949292 , lat:  50.0816583, image: "../foto_praha/petrin.jpg"},
                    {name: 'Berounka © Jiří Jiroušek', lon: 13.7862542, lat: 49.9719008, image: "../foto_praha/storzer_berounka.jpg"},
                    {name: 'Dobřichovice © Město Dobřichovice', lon: 14.2746936, lat: 49.9274931, image: "../foto_praha/storzer_dobrichovice.jpg"},
                    {name: 'Řevnice © Wikimedia Commons, Pan.Kaja', lon:  14.2358928 , lat: 49.9139478, image: "../foto_praha/storzer_revnice.jpg"},
                    {name: 'Mníšek pod Brdy (na vedutě Jana Antonína Venuta) © hrady-zriceniny.cz', lon: 14.2617575, lat: 49.8664967, image: "../foto_praha/storzer_mnisek.jpg"},
                    {name: 'Újezd (1891) © Světozor', lon: 14.4045214, lat: 50.0821956, image: "../foto_praha/ujezd.jpg"},
                    {name: ' Mostecká ul. (1901) © V. Jansa', lon:  14.4060869, lat:  50.0873433, image: "../foto_praha/mosteckaulice.jpg"},
                    {name: 'Zaniklá ves Bubny (na fotografii bývalé nádraží) © Honza Groh, Wikimedia Commons', lon: 14.443333, lat: 50.1, image: "../foto_praha/storzer_bubny.jpeg"},
                    {name: 'Holešovice (pohled na elektrárnu) © Český svět', lon: 14.4355025, lat: 50.1006414, image: "../foto_praha/storzer_holesovice.jpg"},
                    {name: 'Karlštejn před přestavbou (Karel Bellmann, 1885)', lon:  14.1882903 , lat:  49.9391167, image: "../foto_praha/storzer_karlstejn.jpg"},
                    {name: 'Všenory (1911) © Všenory', lon: 14.3039225, lat: 49.9288344, image: "../foto_praha/storzer_vsenory.jpg"},
                    {name: 'Mokropsy © Wikimedia Commons, Šjů', lon: 14.3328953, lat: 49.9451792, image: "../foto_praha/storzer_mokropsy.jpg"},
                    {name: 'Karlík (rekonstrukce hradu podle T. Durdíka) © Jan Heřman', lon: 14.2595078, lat: 49.9354019, image: "../foto_praha/storzer_karlik.jpg"},
                    {name: 'Lom Velká Amerika u obce Mořina © Hana Venglová', lon: 14.2086319, lat: 49.9528358, image: "../foto_praha/storzer_mokrina.jpeg"},
                    {name: 'Curych (19. století) © 2015 - 2025 MonoVisions Black & White Photography Magazine', lon: 8.5410422, lat: 47.3744489, image: "../foto_praha/storzer_curych.jpg"},
                    {name: 'Havlíčkův Brod (na vedutě Jana Antonína Venuta)', lon: 15.5806853, lat: 49.6078489, image: "../foto_praha/storzer_havl_brod.jpg"},
                    {name: 'Paříž na konci 19. století (autorem obrazu je Camille Pissarro)', lon: 2.3483915, lat: 48.8534951, image: "../foto_praha/Storzer_pariz.jpg"},
                    {name: 'Divoká Šárka (na litografii J. Wenziga z r. 1857)', lon: 14.3200958, lat: 50.0983128, image: "../foto_praha/storzer_sarka.jpg"},
                    {name: 'Bavorsko (na pohlednici Mnichov koncem 19. století) © Library of Congress, Prints & Photographs Division, [reproduction number, e.g., LC-DIG-ppmsca-12345]', lon: 11.5753822, lat: 48.1371078, image: "../foto_praha/storzer_mnichov.jpg"},
                    {name: 'Bádensko (na fotografii Badenwiler koncem 19. století) © 2015 - 2025 MonoVisions Black & White Photography Magazine', lon: 8.1390286, lat: 48.19283690, image: "../foto_praha/storzer_baden.jpg"},
                    {name: 'Zbraslav (na vedutě Jana Antonína Venuta klášter) © hrady-zriceniny.cz', lon: 14.3932561, lat: 49.9752750, image: "../foto_praha/storzer_zbraslav.jpg"},
                    {name: 'Vídeň, pohled na Hofburg z 19. století © Schloß Schönbrunn Kultur- und Betriebsges.m.b.H.', lon: 16.0316259, lat: 49.3921258, image: "../foto_praha/storzer_wien.jpg"},
                    {name: 'Budapešť © Schloß Schönbrunn Kultur- und Betriebsges.m.b.H.', lon:  19.0529844 , lat:  47.4942217, image: "../foto_praha/storzer_budapest.jpg"}

                // neexistující místa
                ]},
                {type: 'mappoint',name: 'vanished place', marker: {symbol: 'url(../img/maps-and-flags.png)', width: 24, height: 24}, data: [
                ]},
                ]});    
                break;
        case "Anděl míru":
            Highcharts.mapChart('gis', {chart: {margin: 0}, title: {text: ''}, navigation: {buttonOptions: {align: 'left', theme: {stroke: '#e6e6e6'}}},mapNavigation: {enabled: true, buttonOptions: {alignTo: 'spacingBox'}}, mapView: {center: [14.418540, 50.0874654], zoom: 10}, tooltip: {useHTML: true, headerFormat: "{point.point.name}", pointFormat: '<br/><img src="{point.image}"/>'}, legend: {enabled: true, title: {text: 'Zázračná madona'}, align: 'right', symbolWidth: 20, symbolHeight: 20, itemStyle: {textOutline: '1 1 1px rgba(255,255,255)'}, backgroundColor: 'rgba(255,255,255,0.8)', float: true, borderColor: '#e6e6e6', borderWidth: 1, borderRadius: 2, itemMarginBottom: 5}, plotOptions: {mappoint: {dataLabels: {enabled: false}}}, series: [{type: 'tiledwebmap', name: '', provider: {type: 'OpenStreetMap'}, showInLegend: false}, 
                // existující místa
                {type: 'mappoint', name: 'existing place', marker: {symbol: 'url(../img/placeholder.png)', width: 24, height: 24,}, data: [
                    {name: 'Mauth © Michal Bártík', lon: 13.5837089, lat: 48.8889083, image: "../foto_praha/storzer_mauth.jpg"},
                    {name: 'Zlatá stezka © Andreas Hirsch', lon: 13.5571119, lat: 49.0649539, image: "../foto_praha/storzer_zlata_s.png"},
                    {name: 'Domažlice (na vedutě Jana Antonína Venuta)', lon: 12.9298338, lat: 49.4407069, image: "../foto_praha/Storzer_domazlice.jpg"},
                    {name: 'Plzeň (obraz z 19. století)', lon: 13.3775249, lat: 49.7477415, image: "../foto_praha/Storzer_plzen.jpg"},
                    {name: 'Malá Strana (1866) © Zmizelá Praha, sv. 5, 1919', lon:  14.4048224 , lat:  50.0871582, image: "../foto_praha/malastrana.jpg"},
                    {name: 'Vídeň, pohled na Hofburg z 19. století © Schloß Schönbrunn Kultur- und Betriebsges.m.b.H.', lon: 16.0316259, lat: 49.3921258, image: "../foto_praha/storzer_wien.jpg"},
                    {name: 'Staré Město (1880) © Zmizelá Praha, sv. 1, 1919', lon: 14.4226550, lat: 50.0888228, image: "../foto_praha/staremesto.jpg"},
                    {name: ' Petřín (1830) © V. Morstadt', lon:  14.3949292 , lat:  50.0816583, image: "../foto_praha/petrin.jpg"},
                    {name: 'Beroun © hrady-zriceniny.cz', lon: 14.0733907, lat: 49.9640292, image: "../foto_praha/Storzer_beroun.jpg"}, 
                    {name: 'Lipsko (1891) © Stadtarchiv Leipzig', lon: 12.3747328, lat: 51.3406319, image: "../foto_praha/storzer_leipzig.jpg"},
                    {name: 'Hamburg na obraze "Bleichenbrückenfleet" A. Stellinga (1885) ', lon: 10.0006539, lat: 53.5503408, image: "../foto_praha/storzer_hamburg.jpg"},
                    {name: 'Grafenau © Aconcaguas, Wikimedia Commons', lon: 13.3968664, lat: 48.8583, image: "../foto_praha/storzer_grafenau.jpg"},
                    {name: 'Paříž na konci 19. století (autorem obrazu je Camille Pissarro)', lon: 2.3483915, lat: 48.8534951, image: "../foto_praha/Storzer_pariz.jpg"},
                    {name: 'Mnichov koncem 19. století © Library of Congress, Prints & Photographs Division, [reproduction number, e.g., LC-DIG-ppmsca-12345]', lon: 11.5753822, lat: 48.1371078, image: "../foto_praha/storzer_mnichov.jpg"}
                // neexistující místa
                ]},
                {type: 'mappoint',name: 'vanished place', marker: {symbol: 'url(../img/maps-and-flags.png)', width: 24, height: 24}, data: [
                ]},
                ]});    
                break;
        case "Anna a Marie":
            Highcharts.mapChart('gis', {chart: {margin: 0}, title: {text: ''}, navigation: {buttonOptions: {align: 'left', theme: {stroke: '#e6e6e6'}}},mapNavigation: {enabled: true, buttonOptions: {alignTo: 'spacingBox'}}, mapView: {center: [14.418540, 50.0874654], zoom: 10}, tooltip: {useHTML: true, headerFormat: "{point.point.name}", pointFormat: '<br/><img src="{point.image}"/>'}, legend: {enabled: true, title: {text: 'Zázračná madona'}, align: 'right', symbolWidth: 20, symbolHeight: 20, itemStyle: {textOutline: '1 1 1px rgba(255,255,255)'}, backgroundColor: 'rgba(255,255,255,0.8)', float: true, borderColor: '#e6e6e6', borderWidth: 1, borderRadius: 2, itemMarginBottom: 5}, plotOptions: {mappoint: {dataLabels: {enabled: false}}}, series: [{type: 'tiledwebmap', name: '', provider: {type: 'OpenStreetMap'}, showInLegend: false}, 
                // existující místa
                {type: 'mappoint', name: 'existing place', marker: {symbol: 'url(../img/placeholder.png)', width: 24, height: 24,}, data: [
                    {name: 'Londýn (19. století) © London Stereoscopic Company, Getty Images', lon: -0.1277653, lat: 51.5074456, image: "../foto_praha/Storzer_london.jpg"},
                    {name: 'Stromovka (na obraze V. Barvitia "Čtvrtek ve Stromovce" z r. 1885)', lon: 14.4195550, lat: 50.1070667, image: "../foto_praha/storzer_stromovka.jpg"}
                // neexistující místa
                ]},
                {type: 'mappoint',name: 'vanished place', marker: {symbol: 'url(../img/maps-and-flags.png)', width: 24, height: 24}, data: [
                ]},
                ]});    
                break;
        //case "Bílé svatební šaty" - nenalezena žádná toponyma
        case "Blíženci":
            Highcharts.mapChart('gis', {chart: {margin: 0}, title: {text: ''}, navigation: {buttonOptions: {align: 'left', theme: {stroke: '#e6e6e6'}}},mapNavigation: {enabled: true, buttonOptions: {alignTo: 'spacingBox'}}, mapView: {center: [14.418540, 50.0874654], zoom: 10}, tooltip: {useHTML: true, headerFormat: "{point.point.name}", pointFormat: '<br/><img src="{point.image}"/>'}, legend: {enabled: true, title: {text: 'Zázračná madona'}, align: 'right', symbolWidth: 20, symbolHeight: 20, itemStyle: {textOutline: '1 1 1px rgba(255,255,255)'}, backgroundColor: 'rgba(255,255,255,0.8)', float: true, borderColor: '#e6e6e6', borderWidth: 1, borderRadius: 2, itemMarginBottom: 5}, plotOptions: {mappoint: {dataLabels: {enabled: false}}}, series: [{type: 'tiledwebmap', name: '', provider: {type: 'OpenStreetMap'}, showInLegend: false}, 
                // existující místa
                {type: 'mappoint', name: 'existing place', marker: {symbol: 'url(../img/placeholder.png)', width: 24, height: 24,}, data: [
                    {name: 'Plzeň (obraz z 19. století)', lon: 13.3775249, lat: 49.7477415, image: "../foto_praha/Storzer_plzen.jpg"}
                // neexistující místa
                ]},
                {type: 'mappoint',name: 'vanished place', marker: {symbol: 'url(../img/maps-and-flags.png)', width: 24, height: 24}, data: [
                ]},
                ]});    
                break;
        case "Démantová garnitura":
            Highcharts.mapChart('gis', {chart: {margin: 0}, title: {text: ''}, navigation: {buttonOptions: {align: 'left', theme: {stroke: '#e6e6e6'}}},mapNavigation: {enabled: true, buttonOptions: {alignTo: 'spacingBox'}}, mapView: {center: [14.418540, 50.0874654], zoom: 10}, tooltip: {useHTML: true, headerFormat: "{point.point.name}", pointFormat: '<br/><img src="{point.image}"/>'}, legend: {enabled: true, title: {text: 'Zázračná madona'}, align: 'right', symbolWidth: 20, symbolHeight: 20, itemStyle: {textOutline: '1 1 1px rgba(255,255,255)'}, backgroundColor: 'rgba(255,255,255,0.8)', float: true, borderColor: '#e6e6e6', borderWidth: 1, borderRadius: 2, itemMarginBottom: 5}, plotOptions: {mappoint: {dataLabels: {enabled: false}}}, series: [{type: 'tiledwebmap', name: '', provider: {type: 'OpenStreetMap'}, showInLegend: false}, 
                // existující místa
                {type: 'mappoint', name: 'existing place', marker: {symbol: 'url(../img/placeholder.png)', width: 24, height: 24,}, data: [
                    {name: 'Pražské nádraží (myšleno tehdejší Nádraží císaře Františka Josefa I., 1870) © Zmizelá Praha, sv. 1, 1919', lon: 14.4369822, lat: 50.0829886, image: "../foto_praha/storzer_nadrazi.jpg"},
                    {name: 'Hradčany (60. léta 19. stol.) © Zmizelá Praha, sv. 7, 1919', lon: 14.4000936, lat: 50.0898689, image: "../foto_praha/hradcany.jpg"},
                    {name: 'Vídeň, pohled na Hofburg z 19. století © Schloß Schönbrunn Kultur- und Betriebsges.m.b.H.', lon: 16.0316259, lat: 49.3921258, image: "../foto_praha/storzer_wien.jpg"}
                // neexistující místa
                ]},
                {type: 'mappoint',name: 'vanished place', marker: {symbol: 'url(../img/maps-and-flags.png)', width: 24, height: 24}, data: [
                ]},
                ]});    
                break;
        case "Dobrodružství ve výsadní hospodě":
            Highcharts.mapChart('gis', {chart: {margin: 0}, title: {text: ''}, navigation: {buttonOptions: {align: 'left', theme: {stroke: '#e6e6e6'}}},mapNavigation: {enabled: true, buttonOptions: {alignTo: 'spacingBox'}}, mapView: {center: [14.418540, 50.0874654], zoom: 10}, tooltip: {useHTML: true, headerFormat: "{point.point.name}", pointFormat: '<br/><img src="{point.image}"/>'}, legend: {enabled: true, title: {text: 'Zázračná madona'}, align: 'right', symbolWidth: 20, symbolHeight: 20, itemStyle: {textOutline: '1 1 1px rgba(255,255,255)'}, backgroundColor: 'rgba(255,255,255,0.8)', float: true, borderColor: '#e6e6e6', borderWidth: 1, borderRadius: 2, itemMarginBottom: 5}, plotOptions: {mappoint: {dataLabels: {enabled: false}}}, series: [{type: 'tiledwebmap', name: '', provider: {type: 'OpenStreetMap'}, showInLegend: false}, 
                // existující místa
                {type: 'mappoint', name: 'existing place', marker: {symbol: 'url(../img/placeholder.png)', width: 24, height: 24,}, data: [
                    {name: 'Rakovník (na vedutě Jana Antonína Venuta) © hrady-zriceniny.cz', lon: 13.7333992, lat: 50.1037006, image: "../foto_praha/storzer_rakovnik.jpg"},
                    {name: 'Pohořelec', lon: 14.389070, lat: 50.087460, image: "../foto_praha/pohorelec.jpg"},
                    {name: 'Malá Strana (1866) © Zmizelá Praha, sv. 5, 1919', lon:  14.4048224 , lat:  50.0871582, image: "../foto_praha/malastrana.jpg"}
                // neexistující místa
                ]},
                {type: 'mappoint',name: 'vanished place', marker: {symbol: 'url(../img/maps-and-flags.png)', width: 24, height: 24}, data: [
                ]},
                ]});    
                break;
        case "Duhokřídlá Psýché":
            Highcharts.mapChart('gis', {chart: {margin: 0}, title: {text: ''}, navigation: {buttonOptions: {align: 'left', theme: {stroke: '#e6e6e6'}}},mapNavigation: {enabled: true, buttonOptions: {alignTo: 'spacingBox'}}, mapView: {center: [14.418540, 50.0874654], zoom: 10}, tooltip: {useHTML: true, headerFormat: "{point.point.name}", pointFormat: '<br/><img src="{point.image}"/>'}, legend: {enabled: true, title: {text: 'Zázračná madona'}, align: 'right', symbolWidth: 20, symbolHeight: 20, itemStyle: {textOutline: '1 1 1px rgba(255,255,255)'}, backgroundColor: 'rgba(255,255,255,0.8)', float: true, borderColor: '#e6e6e6', borderWidth: 1, borderRadius: 2, itemMarginBottom: 5}, plotOptions: {mappoint: {dataLabels: {enabled: false}}}, series: [{type: 'tiledwebmap', name: '', provider: {type: 'OpenStreetMap'}, showInLegend: false}, 
                // existující místa
                {type: 'mappoint', name: 'existing place', marker: {symbol: 'url(../img/placeholder.png)', width: 24, height: 24,}, data: [
                    
                    {name: 'Pohořelec', lon: 14.389070, lat: 50.087460, image: "../foto_praha/pohorelec.jpg"},
                    {name: 'Staré Město (1880) © Zmizelá Praha, sv. 1, 1919', lon: 14.4226550, lat: 50.0888228, image: "../foto_praha/staremesto.jpg"},
                    {name: 'Ostruhová ul., nyní Nerudova (19. stol.) © V. Jansa', lon: 14.3995256, lat: 50.0885142, image: "../foto_praha/ostruhova.jpg"},
                    {name: 'Kamenný most, nyní Karlův (40. léta 19. stol.) © Zmizelá Praha, sv. 7, 1919', lon: 14.4110678, lat: 50.0864756, image: "../foto_praha/karluvmost.jpg"},
                    {name: 'Karlova ul. (1897) © V. Jansa', lon:  14.4166053, lat:  50.0861025, image: "../foto_praha/karlovaulice.jpg"},
                    {name: 'Řetězový most (1914) © Zmizelá Praha, sv. 7, 1919', lon: 14.4108800, lat: 50.0813536, image: "../foto_praha/retezovymost.jpg"},
                    {name: 'Karlovo náměstí (1820) © Zmizelá Praha, sv. 3, 1919', lon: 14.4254014, lat: 50.0792811, image: "../foto_praha/novemesto.jpg"},
                    {name: 'Loretánské náměstí © Kudy z nudy', lon: 14.391220520837996, lat: 50.089355, image: "../foto_praha/Storzer_Loretánské náměstí.jpg"},
                    {name: 'Vinohrady © Praha 2', lon: 14.4380594, lat: 50.0754556, image: "../foto_praha/storzer_vinohrady.jpg"},
                    {name: 'Vyšehrad s kostelem (1872) © Zmizelá Praha, sv. 4, 1919', lon: 14.4178128,lat: 50.0643569, image: "../foto_praha/vysehradskykostel.jpg"},
                    {name: ' Petřín (1830) © V. Morstadt', lon:  14.3949292 , lat:  50.0816583, image: "../foto_praha/petrin.jpg"},
                    {name: 'Strahov (1830) © V. Morstadt', lon: 14.3828081, lat: 50.0815358, image: "../foto_praha/strahov.jpg"},
                    {name: 'Malá Strana (1866) © Zmizelá Praha, sv. 5, 1919', lon:  14.4048224 , lat:  50.0871582, image: "../foto_praha/malastrana.jpg"},
                    {name: 'Na Františku © EPOQUE 1900', lon: 14.4249419, lat: 50.0930397, image: "../foto_praha/storzer_na_frantisku.jpg"},
                    {name: 'Muzeum království českého, dnes Národní muzum (okolo 1900) © Wikimedia Commons', lon: 14.4309511, lat: 50.0788906, image: "../foto_praha/storzer_narodni_muzeum.jpg"},
                    {name: 'Úvoz (1908) © Český svět', lon: 14.389070, lat: 50.087460, image: "../foto_praha/storzer_uvoz.jpg"},
                    {name: 'Žižkov, Husitská ulice (okolo 1900) © Zmizelá Praha, sv. 7, 2003', lon: 14.389070, lat: 50.087460, image: "../foto_praha/storzer_zizkov.jpg"},
                    {name: 'Berlín (cca 1890) © Monovisions', lon: 13.3951308, lat: 52.5173883, image: "../foto_praha/storzer_berlin.jpg"},
                    {name: 'Hussitenstraße (1905) © Sammlung Ralf Schmiedecke', lon: 13.3855117, lat: 52.5393806, image: "../foto_praha/storzer_hussitenstrasse.jpg"},
                    {name: 'Kostnitzer Straße, dnes Konstanzer Straße (1938) © Stadtmuseum Berlin', lon: 13.3090744, lat: 52.4945314, image: "../foto_praha/storzer_konstanzer.jpg"},
                    {name: 'Johannes Huss Straße, dnes Zwiestädter Straße © Wikimedia Commons', lon: 13.4477153, lat: 52.4735736, image: "../foto_praha/storzer_zwiestadter.jpg"},
                    {name: 'Waldenserstraße © Wikimedia Commons', lon: 13.3344869, lat: 52.5286850, image: "../foto_praha/storzer_waldenser.jpg"},
                    {name: 'Königgratzer Straße, dnes Stresemannstraße © Wikimedia Commons', lon: 13.3829158, lat: 52.5039528, image: "../foto_praha/storzer_koniggratzer.jpg"},
                    {name: 'Gitschiner Straße', lon: 13.4028206, lat: 52.4983197, image: "../foto_praha/storzer_gitschiner.jpg"},
                    {name: 'Skalitzer Straße © bpk, Bild-Nr. 40006995', lon: 13.4281183, lat: 52.4993525, image: "../foto_praha/storzer_skalitzer.jpg"},
                    {name: 'Nachodstraße  © Österreichische Nationalbibliothek', lon: 13.3340844, lat: 52.4951603, image: "../foto_praha/storzer_nachodstrasse.png"},
                    {name: 'Sadowastraße © Wikimedia Commons', lon: 13.5141436, lat: 52.4774883, image: "../foto_praha/storzer_sadowa.jpg"},
                    {name: 'Rozběřice © Petr1888', lon: 15.7521522, lat: 50.2669381, image: "../foto_praha/storzer_rozberice.jpg"},
                    {name: 'Prager Platz © Sterz, Wikimedia Commons', lon: 13.3330147, lat: 52.4934236, image: "../foto_praha/storzer_pragerp.jpg"},
                    {name: 'Prager Straße © Österreichische Nationalbibliothek', lon: 13.3339431, lat: 52.4942494, image: "../foto_praha/storzer_pragers.png"},
                    {name: 'Karlsbader Straße © Udo Röbenack', lon: 14.389070, lat: 50.087460, image: "../foto_praha/storzer_.jpg"},
                    {name: 'Teplitzer Straße © Fridolin freudenfett, Wikimedia Commons', lon: 13.2809658, lat: 52.4791217, image: "../foto_praha/storzer_teplitzer.jpg"},
                    {name: 'Marienbader Straße © Fridolin freudenfett, Wikimedia Commons', lon: 13.2835928, lat: 52.4774450, image: "../foto_praha/storzer_marienbader.jpg"},
                    {name: 'Joachimsthaler Straße (na staré pohlednici)', lon: 13.3313289, lat: 52.5031722, image: "../foto_praha/storzer_joachim.jpg"},
                    {name: 'Reichenberger Straße (zhruba 1900) © Pinterest', lon: 13.4279603, lat: 52.4962428, image: "../foto_praha/storzer_reichenberger.jpg"},
                    {name: 'Senefelderstraße © Gerd Danigel, Wikimedia Commons', lon: 13.4228992, lat: 52.5416858, image: "../foto_praha/storzer_senefelder.jpg"},
                    {name: 'Arkonaplatz © Fridolin freudenfett, Wikimedia Commons', lon: 13.4020564, lat: 52.5371978, image: "../foto_praha/storzer_arkona.jpg"},
                    {name: 'Wendenstraße © Fridolin freudenfett, Wikimedia Commons', lon: 13.5489281, lat: 52.4140544, image: "../foto_praha/storzer_wenden.jpg"},
                    {name: 'Vinetaplatz (1910)', lon: 13.3991147, lat: 52.5409708, image: "../foto_praha/storzer_vineta.jpg"},
                    {name: 'Rixdorf (1903)', lon: 13.4456092, lat: 52.4740947, image: "../foto_praha/storzer_rixdorf.jpg"},
                    {name: 'Babylon (na fotografii vila Marie ležící u obce Babylon) © Regionální filmová kancelář Plzeňského kraje a.s.', lon: 12.8627822, lat: 49.3986531, image: "../foto_praha/storzer_babylon.jpg"},
                    {name: 'Brod nad Lesy, německy Furth im Wald © Andi-Furth, Wikimedia Commons', lon: 12.8452826, lat: 49.3081639, image: "../foto_praha/Storzer_furth.jpg"},
                    {name: 'Domažlice (na vedutě Jana Antonína Venuta)', lon: 12.9298338, lat: 49.4407069, image: "../foto_praha/Storzer_domazlice.jpg"},
                    {name: 'Mnichov (na pohlednici z konce 19. století) © Library of Congress, Prints & Photographs Division, [reproduction number, e.g., LC-DIG-ppmsca-12345]', lon: 11.5753822, lat: 48.1371078, image: "../foto_praha/storzer_mnichov.jpg"},
                    {name: 'Hamburg na obraze "Bleichenbrückenfleet" A. Stellinga (1885) ', lon: 10.0006539, lat: 53.5503408, image: "../foto_praha/storzer_hamburg.jpg"}


                // neexistující místa
                ]},
                {type: 'mappoint',name: 'vanished place', marker: {symbol: 'url(../img/maps-and-flags.png)', width: 24, height: 24}, data: [
                    {name: 'Černínská kasárna, dnes Černínský palác', lon: 14.3905650, lat: 50.0887617, image: "../foto_praha/storzer_cer_kasarna.jpeg"}
                ]},
                ]});    
                break;
        case "Duhový bod nad hlavou":
            Highcharts.mapChart('gis', {chart: {margin: 0}, title: {text: ''}, navigation: {buttonOptions: {align: 'left', theme: {stroke: '#e6e6e6'}}},mapNavigation: {enabled: true, buttonOptions: {alignTo: 'spacingBox'}}, mapView: {center: [14.418540, 50.0874654], zoom: 10}, tooltip: {useHTML: true, headerFormat: "{point.point.name}", pointFormat: '<br/><img src="{point.image}"/>'}, legend: {enabled: true, title: {text: 'Zázračná madona'}, align: 'right', symbolWidth: 20, symbolHeight: 20, itemStyle: {textOutline: '1 1 1px rgba(255,255,255)'}, backgroundColor: 'rgba(255,255,255,0.8)', float: true, borderColor: '#e6e6e6', borderWidth: 1, borderRadius: 2, itemMarginBottom: 5}, plotOptions: {mappoint: {dataLabels: {enabled: false}}}, series: [{type: 'tiledwebmap', name: '', provider: {type: 'OpenStreetMap'}, showInLegend: false}, 
                // existující místa
                {type: 'mappoint', name: 'existing place', marker: {symbol: 'url(../img/placeholder.png)', width: 24, height: 24,}, data: [
                    {name: 'Chrám svatého Víta (na obraze Ludvíka Kohla z r. 1814)', lon: 14.4006036 , lat: 50.0908936, image: "../foto_praha/storzer_svaty_vit.jpeg"},
                    {name: 'Bitva u Lipska (na obraze Vladimira Moškova)', lon:  12.3747328 , lat:  51.3406319, image: "../foto_praha/storzer_lipsko.jpg"}
                // neexistující místa
                ]},
                {type: 'mappoint',name: 'vanished place', marker: {symbol: 'url(../img/maps-and-flags.png)', width: 24, height: 24}, data: [
                ]},
                ]});    
                break;
        case "Kamarádi":
            Highcharts.mapChart('gis', {chart: {margin: 0}, title: {text: ''}, navigation: {buttonOptions: {align: 'left', theme: {stroke: '#e6e6e6'}}},mapNavigation: {enabled: true, buttonOptions: {alignTo: 'spacingBox'}}, mapView: {center: [14.418540, 50.0874654], zoom: 10}, tooltip: {useHTML: true, headerFormat: "{point.point.name}", pointFormat: '<br/><img src="{point.image}"/>'}, legend: {enabled: true, title: {text: 'Zázračná madona'}, align: 'right', symbolWidth: 20, symbolHeight: 20, itemStyle: {textOutline: '1 1 1px rgba(255,255,255)'}, backgroundColor: 'rgba(255,255,255,0.8)', float: true, borderColor: '#e6e6e6', borderWidth: 1, borderRadius: 2, itemMarginBottom: 5}, plotOptions: {mappoint: {dataLabels: {enabled: false}}}, series: [{type: 'tiledwebmap', name: '', provider: {type: 'OpenStreetMap'}, showInLegend: false}, 
                // existující místa
                {type: 'mappoint', name: 'existing place', marker: {symbol: 'url(../img/placeholder.png)', width: 24, height: 24,}, data: [
                    {name: 'Hradec Králové', lon: 15.8327512, lat: 50.2092113, image: "../foto_praha/storzer_hk.jpg"},
                    {name: 'Bitva u Chlumce (na obraze Alexandera Kotzebue)', lon: 13.9396372 , lat:  50.6997186, image: "../foto_praha/storzer_kulm.jpg"},
                    {name: 'Zaniklá ves Bubny (na fotografii bývalé nádraží) © Honza Groh, Wikimedia Commons', lon: 14.443333, lat: 50.1, image: "../foto_praha/storzer_bubny.jpeg"},
                    {name: 'Újezdská brána', lon: 14.4043375, lat: 50.0804150, image: "../foto_praha/ujezd_brana.jpg"},
                    {name: 'Na Poříčí', lon:  14.4334439 , lat:  50.0897469, image: "../foto_praha/storzer_porici.jpg"},
                    {name: 'Satalice', lon:  14.5707903 , lat:  50.1252719, image: "../foto_praha/storzer_satalice.jpg"}
                // neexistující místa
                ]},
                {type: 'mappoint',name: 'vanished place', marker: {symbol: 'url(../img/maps-and-flags.png)', width: 24, height: 24}, data: [
                ]},
                ]});    
                break;
        case "Jedna z těch, které mě zajímaly":
            Highcharts.mapChart('gis', {chart: {margin: 0}, title: {text: ''}, navigation: {buttonOptions: {align: 'left', theme: {stroke: '#e6e6e6'}}},mapNavigation: {enabled: true, buttonOptions: {alignTo: 'spacingBox'}}, mapView: {center: [14.418540, 50.0874654], zoom: 10}, tooltip: {useHTML: true, headerFormat: "{point.point.name}", pointFormat: '<br/><img src="{point.image}"/>'}, legend: {enabled: true, title: {text: 'Zázračná madona'}, align: 'right', symbolWidth: 20, symbolHeight: 20, itemStyle: {textOutline: '1 1 1px rgba(255,255,255)'}, backgroundColor: 'rgba(255,255,255,0.8)', float: true, borderColor: '#e6e6e6', borderWidth: 1, borderRadius: 2, itemMarginBottom: 5}, plotOptions: {mappoint: {dataLabels: {enabled: false}}}, series: [{type: 'tiledwebmap', name: '', provider: {type: 'OpenStreetMap'}, showInLegend: false}, 
                // existující místa
                {type: 'mappoint', name: 'existing place', marker: {symbol: 'url(../img/placeholder.png)', width: 24, height: 24,}, data: [
                    {name: 'Nové Město, Karlovo náměstí (1820) © Zmizelá Praha, sv. 3, 1919', lon: 14.4254014, lat: 50.0792811, image: "../foto_praha/novemesto.jpg"},
                    {name: 'Libanon', lon: 35.7969669 , lat: 33.8776389, image: "../foto_praha/storzer_libanon.png"},
                    {name: 'Emauzy (přelom 19. a 20. století) © Deport & Panzer', lon: 14.4175814, lat: 50.0719492, image: "../foto_praha/storzer_emauzy.png"},
                    {name: 'Újezdská brána', lon: 14.4043375, lat: 50.0804150, image: "../foto_praha/ujezd_brana.jpg"},
                    {name: 'Rabínská ulice (1909; dnes ulice Maiselova) © EPOQUE 1900, spol. s r.o.', lon:  14.4184267, lat:  50.0891208, image: "../foto_praha/storzer_rabinska.jpg"},
                    {name: ' Smíchov (19. stol.) © V. Morstadt', lon:  14.4048437 , lat:  50.0749464, image: "../foto_praha/smichov.jpg"},
                    {name: 'Karlov', lon: 14.4265703, lat: 50.0693008, image: "../foto_praha/storzer_karlov.jpg"},
                    {name: 'Vyšehrad s kostelem (1872) © Zmizelá Praha, sv. 4, 1919', lon: 14.4178128,lat: 50.0643569, image: "../foto_praha/vysehradskykostel.jpg"},
                    {name: 'Hora Sinaj © Gerd Eichmann', lon:  33.9751844 , lat:  28.5388086, image: "../foto_praha/storzer_sinai.jpg"}
                // neexistující místa
                ]},
                {type: 'mappoint',name: 'vanished place', marker: {symbol: 'url(../img/maps-and-flags.png)', width: 24, height: 24}, data: [
                ]},
                ]});    
                break;
         case "Kandidáti existence":
            Highcharts.mapChart('gis', {chart: {margin: 0}, title: {text: ''}, navigation: {buttonOptions: {align: 'left', theme: {stroke: '#e6e6e6'}}},mapNavigation: {enabled: true, buttonOptions: {alignTo: 'spacingBox'}}, mapView: {center: [14.418540, 50.0874654], zoom: 10}, tooltip: {useHTML: true, headerFormat: "{point.point.name}", pointFormat: '<br/><img src="{point.image}"/>'}, legend: {enabled: true, title: {text: 'Zázračná madona'}, align: 'right', symbolWidth: 20, symbolHeight: 20, itemStyle: {textOutline: '1 1 1px rgba(255,255,255)'}, backgroundColor: 'rgba(255,255,255,0.8)', float: true, borderColor: '#e6e6e6', borderWidth: 1, borderRadius: 2, itemMarginBottom: 5}, plotOptions: {mappoint: {dataLabels: {enabled: false}}}, series: [{type: 'tiledwebmap', name: '', provider: {type: 'OpenStreetMap'}, showInLegend: false}, 
                // existující místa
                {type: 'mappoint', name: 'existing place', marker: {symbol: 'url(../img/placeholder.png)', width: 24, height: 24,}, data: [
                    {name: 'Hostinec u Platejse (v dnešním paláci Platýz) © VitVit', lon: 14.4206436, lat: 50.0828806, image: "../foto_praha/storzer_platyz.jpg"},
                    {name: 'Klimentská (1915) © Světozor', lon: 14.4304097, lat:  50.0920908, image: "../foto_praha/storzer_klimentska.jpg"},
                    {name: 'Truhlářská (1926) © Český svět', lon: 14.4299667, lat: 50.0904783, image: "../foto_praha/storzer_truhlarska.jpg"},
                    {name: 'Újezdská brána', lon: 14.4043375, lat: 50.0804150, image: "../foto_praha/ujezd_brana.jpg"},
                    {name: 'Na Poříčí', lon:  14.4334439 , lat:  50.0897469, image: "../foto_praha/storzer_porici.jpg"},
                    {name: 'Nebraska', lon:  (-96.7077753) , lat:  40.8088861, image: "../foto_praha/storzer_nebraska.png"},
                    {name: 'Oregon', lon: (-123.0331211) , lat:  44.9391564, image: "../foto_praha/storzer_oregon.png"},
                    {name: 'Missouri', lon: (-100.7217317) , lat:  44.7863750, image: "../foto_praha/storzer_missouri.png"},
                    {name: 'Black Hills © Flickr', lon:  (-103.5264875), lat: 43.8692811, image: "../foto_praha/storzer_blackhills.jpg"},
                    {name: 'Rocky Mountains © Gorgo', lon: (-110.9175061) , lat:  43.3578531, image: "../foto_praha/storzer_rockymounitains.jpg"},
                    {name: 'St. Louis (1906) © Monovisions', lon: (-90.1910156) , lat: 38.6280278, image: "../foto_praha/storzer_stlouis.jpg"},
                    {name: 'New Orleans (na litografii z r. 1852) © J.W. Hill & Smith', lon:  (-90.0730258), lat: 29.9559144, image: "../foto_praha/storzer_neworleans.jpg"},
                    {name: 'Lužická © Šjů', lon:  14.4449392 , lat:  50.0735094, image: "../foto_praha/storzer_luzicka.jpg"},
                    {name: 'Valdštejsnká © Balek Art', lon:  14.4074503 , lat:  50.0906522, image: "../foto_praha/storzer_valdstejnska.jpeg"},
                    {name: 'Zlíchov (na staré pohlednici)', lon:  14.4049097, lat: 50.0470628, image: "../foto_praha/storzer_zlichov.jpg"},
                    {name: 'Michalská © Světozor', lon: 14.4199239 , lat:  50.0854925, image: "../foto_praha/storzer_michalska.jpg"},
                    {name: 'Celetná (pohled z r. 1910) © EPOQUE 1900', lon: 14.4246128, lat:  50.0871717, image: "../foto_praha/storzer_celetna.jpg"},
                    {name: 'Malostranské policejní komisařství ?', lon: 14.4199239 , lat:  50.0854925, image: "../foto_praha/storzer_michalska.jpg"},
                    {name: 'Vaječný trh (dnes Tržiště; 1899) © EPOQUE 1900', lon:  14.4017575 , lat:  50.0873492, image: "../foto_praha/storzer_trziste.jpg"},
                    {name: 'Prokopská © Dobroš', lon: 14.4044428 , lat: 50.0866553, image: "../foto_praha/storzer_prokopska.jpg"},
                    {name: 'Velkopřevorské náměstí (1902)', lon: 14.4065194, lat:  50.0861014, image: "../foto_praha/storzer_velkoprevorske_n.jpg"},
                    {name: 'Pardubice (na vedutě Jana Antonína Venuta)', lon: 15.7774239 , lat:  50.0375792, image: "../foto_praha/storzer_pardubice.jpg"},
                    {name: 'Česká Třebová (na pohledu L. Förstera z r. 1845)', lon: 16.4472761 , lat:  49.9018828, image: "../foto_praha/storzer_ceska_trebova.jpg"},
                    {name: 'Michalská © Světozor', lon: 14.4199239 , lat:  50.0854925, image: "../foto_praha/storzer_michalska.jpg"},
                    {name: 'Michalská © Světozor', lon: 14.4199239 , lat:  50.0854925, image: "../foto_praha/storzer_michalska.jpg"},
                    {name: 'Michalská © Světozor', lon: 14.4199239 , lat:  50.0854925, image: "../foto_praha/storzer_michalska.jpg"},
                    {name: 'Michalská © Světozor', lon: 14.4199239 , lat:  50.0854925, image: "../foto_praha/storzer_michalska.jpg"},
                    {name: 'Michalská © Světozor', lon: 14.4199239 , lat:  50.0854925, image: "../foto_praha/storzer_michalska.jpg"},
                    {name: 'Michalská © Světozor', lon: 14.4199239 , lat:  50.0854925, image: "../foto_praha/storzer_michalska.jpg"},
                    {name: 'Michalská © Světozor', lon: 14.4199239 , lat:  50.0854925, image: "../foto_praha/storzer_michalska.jpg"},
                    {name: 'Michalská © Světozor', lon: 14.4199239 , lat:  50.0854925, image: "../foto_praha/storzer_michalska.jpg"},
                    {name: 'Fontainebleau © Carolus ', lon:  2.7025 , lat:  48.409722, image: "../foto_praha/storzer_fontainebleau.jpg"}
                // neexistující místa
                ]},
                {type: 'mappoint',name: 'vanished place', marker: {symbol: 'url(../img/maps-and-flags.png)', width: 24, height: 24}, data: [
                    {name: 'vinice Konvářka (dnes pouze dochovaná stará usedlost) © Památkový katalog ', lon:  14.4042950, lat: 50.0549672, image: "../foto_praha/storzer_konvarka.jpg"}
                ]},
                ]});    
                break;    
        
        default:
            document.getElementById("gis").src = "";
    }
}
