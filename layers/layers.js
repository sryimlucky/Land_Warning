var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_Land_Warning_1 = new ol.format.GeoJSON();
var features_Land_Warning_1 = format_Land_Warning_1.readFeatures(json_Land_Warning_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Land_Warning_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Land_Warning_1.addFeatures(features_Land_Warning_1);
var lyr_Land_Warning_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Land_Warning_1, 
                style: style_Land_Warning_1,
                popuplayertitle: 'Land_Warning',
                interactive: true,
                title: '<img src="styles/legend/Land_Warning_1.png" /> Land_Warning'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_Land_Warning_1.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_Land_Warning_1];
lyr_Land_Warning_1.set('fieldAliases', {'ProDiCoVi': 'ProDiCoVi', 'UPRN': 'UPRN', 'parcel_no': 'parcel_no', 'SHAPE_Area': 'SHAPE_Area', 'Des': 'Des', 'Des1': 'Des1', 'Des2': 'Des2', });
lyr_Land_Warning_1.set('fieldImages', {'ProDiCoVi': 'TextEdit', 'UPRN': 'TextEdit', 'parcel_no': 'TextEdit', 'SHAPE_Area': 'TextEdit', 'Des': 'TextEdit', 'Des1': 'TextEdit', 'Des2': 'TextEdit', });
lyr_Land_Warning_1.set('fieldLabels', {'ProDiCoVi': 'hidden field', 'UPRN': 'hidden field', 'parcel_no': 'no label', 'SHAPE_Area': 'hidden field', 'Des': 'no label', 'Des1': 'no label', 'Des2': 'no label', });
lyr_Land_Warning_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});