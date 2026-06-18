case "flvek1":
    Highcharts.mapChart('gis-container', {chart: {margin: 0}, title: {text: ''}, navigation: {buttonOptions: {align: 'left', theme: {stroke: '#e6e6e6'}}}, mapNavigation: {enabled: true, buttonOptions: {alignTo: 'spacingBox'}}, mapView: {center: [14.42115, 50.0865], zoom: 7}, tooltip: {useHTML: true, headerFormat: "{point.point.name}", pointFormat: '<br/><img src="{point.image}"/>'}, legend: {enabled: true, title: {text: 'F. L. Věk I'}, align: 'right', symbolWidth: 20, symbolHeight: 20, itemStyle: {textOutline: '1 1 1px rgba(255,255,255)'}, backgroundColor: 'rgba(255,255,255,0.8)', float: true, borderColor: '#e6e6e6', borderWidth: 1, borderRadius: 2, itemMarginBottom: 5}, plotOptions: {mappoint: {dataLabels: {enabled: false}}}, series: [{type: 'tiledwebmap', name: '', provider: {type: 'OpenStreetMap'}, showInLegend: false},
    {type: 'mappoint', name: 'existing place', marker: {symbol: 'url(../img/placeholder.png)', width: 24, height: 24}, data: [
        {name: 'Dobruška (rodiště F. L. Věka)', lon: 16.1597, lat: 50.2925, image: "../foto/flvek1/dobruska.jpg"},
        {name: 'Hradec Králové', lon: 15.8328, lat: 50.2092, image: "../foto/flvek1/hradec_kralove.jpg"},
        {name: 'Roudnice nad Labem (zámek knížete z Lobkovic)', lon: 14.2611, lat: 50.4258, image: "../foto/flvek1/roudnice_nad_labem.jpg"},
        {name: 'Kralíky', lon: 16.7619, lat: 50.0856, image: "../foto/flvek1/kraliky.jpg"},
        {name: 'Pražský hrad / Hradčany (chrám sv. Víta)', lon: 14.4001, lat: 50.0905, image: "../foto/flvek1/prazsky_hrad_hradcany.jpg"},
        {name: 'Klementinum, Staré Město', lon: 14.4158, lat: 50.0865, image: "../foto/flvek1/klementinum_stare_mesto.jpg"},
        {name: 'Staré Město pražské', lon: 14.421, lat: 50.0875, image: "../foto/flvek1/stare_mesto_prazske.jpg"},
        {name: 'Staroměstské náměstí', lon: 14.4213, lat: 50.0875, image: "../foto/flvek1/staromestske_namesti.jpg"},
        {name: 'Nové Město pražské', lon: 14.427, lat: 50.078, image: "../foto/flvek1/nove_mesto_prazske.jpg"},
        {name: 'Řeznická ulice, Nové Město', lon: 14.4205, lat: 50.0786, image: "../foto/flvek1/reznicka_ulice_nove_mesto.jpg"},
        {name: 'Koňský trh (dnes Václavské náměstí)', lon: 14.4275, lat: 50.081, image: "../foto/flvek1/konsky_trh.jpg"},
        {name: 'Karlův most', lon: 14.4114, lat: 50.0865, image: "../foto/flvek1/karluv_most.jpg"},
        {name: 'Bertramka (usedlost Dušků), Smíchov', lon: 14.3956, lat: 50.0719, image: "../foto/flvek1/bertramka.jpg"},
        {name: 'Pohořelec, Hradčany', lon: 14.3915, lat: 50.0879, image: "../foto/flvek1/pohorelec_hradcany.jpg"},
        {name: 'Stavovské (Nosticovo) divadlo, Ovocný trh', lon: 14.4234, lat: 50.0863, image: "../foto/flvek1/stavovske.jpg"},
    ]},
    {type: 'mappoint', name: 'vanished place', marker: {symbol: 'url(../img/maps-and-flags.png)', width: 24, height: 24}, data: [
        {name: 'Vlastenecká Bouda (1786–1789), Koňský trh', lon: 14.4275, lat: 50.0815, image: "../foto/flvek1/vlastenecka_bouda.jpg"},
    ]},]});
    break;