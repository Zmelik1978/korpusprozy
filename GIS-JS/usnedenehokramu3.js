case "snedeneho_kramu_iii":
    Highcharts.mapChart('gis-container', {chart: {margin: 0}, title: {text: ''}, navigation: {buttonOptions: {align: 'left', theme: {stroke: '#e6e6e6'}}}, mapNavigation: {enabled: true, buttonOptions: {alignTo: 'spacingBox'}}, mapView: {center: [14.4175, 50.0780], zoom: 13}, tooltip: {useHTML: true, headerFormat: "{point.point.name}", pointFormat: '<br/><img src="{point.image}"/>'}, legend: {enabled: true, title: {text: 'U snědeného krámu III'}, align: 'right', symbolWidth: 20, symbolHeight: 20, itemStyle: {textOutline: '1 1 1px rgba(255,255,255)'}, backgroundColor: 'rgba(255,255,255,0.8)', float: true, borderColor: '#e6e6e6', borderWidth: 1, borderRadius: 2, itemMarginBottom: 5}, plotOptions: {mappoint: {dataLabels: {enabled: false}}}, series: [{type: 'tiledwebmap', name: '', provider: {type: 'OpenStreetMap'}, showInLegend: false},
    {type: 'mappoint', name: 'existing place', marker: {symbol: 'url(../img/placeholder.png)', width: 24, height: 24}, data: [
        {name: 'Karlovo náměstí (Dobytčí trh)', lon: 14.4205, lat: 50.0758, image: "../foto_praha/karlovo_nam.jpg"},
        {name: 'Václavská ulice', lon: 14.4175, lat: 50.0738, image: "../foto_praha/vaclavska_ulice.jpg"},
        {name: 'Žitná ulice', lon: 14.4250, lat: 50.0779, image: "../foto_praha/zitna_ulice.jpg"},
        {name: 'Ječná ulice', lon: 14.4243, lat: 50.0758, image: "../foto_praha/jecna_ulice.jpg"},
        {name: 'Lipová ulice', lon: 14.4220, lat: 50.0744, image: "../foto_praha/lipova_ulice.jpg"},
        {name: 'Spálená ulice', lon: 14.4195, lat: 50.0810, image: "../foto_praha/spalena_ulice.jpg"},
        {name: 'Ferdinandova třída (dnes Národní)', lon: 14.4178, lat: 50.0817, image: "../foto_praha/ferdinandova_trida.jpg"},
        {name: 'Vojtěšská ulice', lon: 14.4138, lat: 50.0788, image: "../foto_praha/vojtesska_ulice.jpg"},
        {name: 'Emauzy (klášter Na Slovanech)', lon: 14.4175, lat: 50.0719, image: "../foto_praha/emauzy.jpg"},
        {name: 'Podskalí', lon: 14.4150, lat: 50.0660, image: "../foto_praha/podskali.jpg"},
        {name: 'Karlov (Na Karlově)', lon: 14.4283, lat: 50.0686, image: "../foto_praha/karlov.jpg"},
        {name: 'Ovocný trh', lon: 14.4232, lat: 50.0863, image: "../foto_praha/ovocny_trh.jpg"},
        {name: 'Ovocná ulice', lon: 14.4225, lat: 50.0858, image: "../foto_praha/ovocna_ulice.jpg"},
        {name: 'Celetná ulice', lon: 14.4250, lat: 50.0871, image: "../foto_praha/celetna_ulice.jpg"},
        {name: 'Staré Město', lon: 14.4210, lat: 50.0875, image: "../foto_praha/stare_mesto.jpg"},
    ]},
    {type: 'mappoint', name: 'vanished place', marker: {symbol: 'url(../img/maps-and-flags.png)', width: 24, height: 24}, data: [
        {name: 'Strahovská brána (zbořena 1899)', lon: 14.3870, lat: 50.0857, image: "../foto_praha/strahovska_brana.jpg"},
    ]},]});
    break;
