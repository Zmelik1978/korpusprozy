case "tyden-v-tichem-dome":
    Highcharts.mapChart('gis-container', {chart: {margin: 0}, title: {text: ''}, navigation: {buttonOptions: {align: 'left', theme: {stroke: '#e6e6e6'}}}, mapNavigation: {enabled: true, buttonOptions: {alignTo: 'spacingBox'}}, mapView: {center: [14.3998, 50.0876], zoom: 11}, tooltip: {useHTML: true, headerFormat: "{point.point.name}", pointFormat: '<br/><img src="{point.image}"/>'}, legend: {enabled: true, title: {text: 'Týden v tichém domě'}, align: 'right', symbolWidth: 20, symbolHeight: 20, itemStyle: {textOutline: '1 1 1px rgba(255,255,255)'}, backgroundColor: 'rgba(255,255,255,0.8)', float: true, borderColor: '#e6e6e6', borderWidth: 1, borderRadius: 2, itemMarginBottom: 5}, plotOptions: {mappoint: {dataLabels: {enabled: false}}}, series: [{type: 'tiledwebmap', name: '', provider: {type: 'OpenStreetMap'}, showInLegend: false},
    {type: 'mappoint', name: 'existing place', marker: {symbol: 'url(../img/placeholder.png)', width: 24, height: 24}, data: [
        {name: 'Petřín', lon: 14.3915, lat: 50.0835, image: "../foto_praha/petrin.jpg"},
        {name: 'Malá Strana — dějiště příběhu', lon: 14.404, lat: 50.0884, image: "../foto_praha/mala_strana_dejiste_pribehu.jpg"},
        {name: 'Ostruhová ulice (dnes Nerudova) — tichý dům', lon: 14.4007, lat: 50.0883, image: "../foto_praha/ostruhova_ulice.jpg"},
        {name: 'Ulička Svatojanská (dnes Janský vršek)', lon: 14.3998, lat: 50.0876, image: "../foto_praha/ulicka_svatojanska.jpg"},
        {name: 'Strahovský klášter — spolek lásky', lon: 14.3895, lat: 50.0855, image: "../foto_praha/strahovsky_klaster_spolek_lasky.jpg"},
        {name: 'Kostel sv. Haštala — spolek dekretářský', lon: 14.4196, lat: 50.091, image: "../foto_praha/kostel_sv_hastala_spolek_dekretarsky.jpg"},
        {name: 'Košíře — cíl procházky', lon: 14.3812, lat: 50.0692, image: "../foto_praha/kosire_cil_prochazky.jpg"},
        {name: 'Vídeň — odvolací soud', lon: 16.3738, lat: 48.2082, image: "../foto_praha/viden_odvolaci_soud.jpg"},
        {name: 'Dalmácie — vojenské přeložení', lon: 16.44, lat: 43.509, image: "../foto_praha/dalmacie_vojenske_prelozeni.jpg"},
        {name: 'Banát — přirovnání k tahounům', lon: 21.23, lat: 45.75, image: "../foto_praha/banat_prirovnani_k_tahounum.jpg"},
        {name: 'Hradec Králové — nové působiště', lon: 15.8327, lat: 50.2092, image: "../foto_praha/hradec_kralove_nove_pusobiste.jpg"},
        {name: 'Štýrský Hradec (Graz) — špatné byty', lon: 15.4395, lat: 47.0707, image: "../foto_praha/styrsky_hradec.jpg"},
    ]},
    {type: 'mappoint', name: 'vanished place', marker: {symbol: 'url(../img/maps-and-flags.png)', width: 24, height: 24}, data: [

    ]},]});
    break;
