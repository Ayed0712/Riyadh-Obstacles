var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Obstacles_1 = new ol.format.GeoJSON();
var features_Obstacles_1 = format_Obstacles_1.readFeatures(json_Obstacles_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Obstacles_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Obstacles_1.addFeatures(features_Obstacles_1);
var lyr_Obstacles_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Obstacles_1, 
                style: style_Obstacles_1,
                popuplayertitle: 'Obstacles',
                interactive: true,
                title: '<img src="styles/legend/Obstacles_1.png" /> Obstacles'
            });
var format_PRD_2 = new ol.format.GeoJSON();
var features_PRD_2 = format_PRD_2.readFeatures(json_PRD_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PRD_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PRD_2.addFeatures(features_PRD_2);
var lyr_PRD_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PRD_2, 
                style: style_PRD_2,
                popuplayertitle: 'PRD',
                interactive: false,
                title: '<img src="styles/legend/PRD_2.png" /> PRD'
            });

lyr_OSMStandard_0.setVisible(true);lyr_Obstacles_1.setVisible(true);lyr_PRD_2.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_Obstacles_1,lyr_PRD_2];
lyr_Obstacles_1.set('fieldAliases', {'ID': 'ID', 'Designatio': 'Designatio', 'OBST_type': 'OBST_type', 'OBST_posit': 'OBST_posit', 'OBST_pos_1': 'OBST_pos_1', 'OBST_pos_2': 'OBST_pos_2', 'ELEV_HGT__': 'ELEV_HGT__', 'Warning_Si': 'Warning_Si', 'Val_Y': 'Val_Y', 'Val_X': 'Val_X', 'Ele_Ft': 'Ele_Ft', 'Ele_M': 'Ele_M', 'Hgt_Ft': 'Hgt_Ft', 'Hgt_M': 'Hgt_M', 'City': 'City', 'Surface_EL': 'Surface_EL', 'Remarks': 'Remarks', 'RASTERVALU': 'RASTERVALU', 'height_m': 'height_m', });
lyr_PRD_2.set('fieldAliases', {'AIRSPACE_P': 'AIRSPACE_P', 'EFFECTIVED': 'EFFECTIVED', 'UPDATEDT': 'UPDATEDT', 'UPDATEOPER': 'UPDATEOPER', 'SOURCE': 'SOURCE', 'DIFFIND': 'DIFFIND', 'MSLINK': 'MSLINK', 'MAPID': 'MAPID', 'BLTYPE': 'BLTYPE', 'TYP': 'TYP', 'FLEXIBLEUS': 'FLEXIBLEUS', 'IDENT': 'IDENT', 'TXTLOCALTY': 'TXTLOCALTY', 'AREACODE': 'AREACODE', 'ICAOCODE': 'ICAOCODE', 'NAM': 'NAM', 'CODELOCIND': 'CODELOCIND', 'CODELOCIN1': 'CODELOCIN1', 'CODEMIL': 'CODEMIL', 'VALLOWERLI': 'VALLOWERLI', 'UPPERLOWER': 'UPPERLOWER', 'UPPERLIMIT': 'UPPERLIMIT', 'UPLIMITUNI': 'UPLIMITUNI', 'CODEDISTVE': 'CODEDISTVE', 'VALDISTVER': 'VALDISTVER', 'UOMDISTVER': 'UOMDISTVER', 'CODEDISTV1': 'CODEDISTV1', 'LOWERLIMIT': 'LOWERLIMIT', 'LOWERLIMI1': 'LOWERLIMI1', 'CODEDISTV2': 'CODEDISTV2', 'VALDISTVE1': 'VALDISTVE1', 'UOMDISTVE1': 'UOMDISTVE1', 'CODEDISTV3': 'CODEDISTV3', 'WIDTH': 'WIDTH', 'WIDTHUOM': 'WIDTHUOM', 'HACCURACY': 'HACCURACY', 'HACCURACYU': 'HACCURACYU', 'LATITUDE': 'LATITUDE', 'LONGITUDE': 'LONGITUDE', 'TXTRMK': 'TXTRMK', 'CODEWRKHR': 'CODEWRKHR', 'TXTRMKWRKH': 'TXTRMKWRKH', 'CENTERFEA_': 'CENTERFEA_', 'CENTER_PK': 'CENTER_PK', 'AIRWAY_PK': 'AIRWAY_PK', 'ADDRESS': 'ADDRESS', 'UNITADDRES': 'UNITADDRES', 'CRUISETABI': 'CRUISETABI', 'CODECLASS': 'CODECLASS', 'ENTRYRPT': 'ENTRYRPT', 'UIRUPPERLI': 'UIRUPPERLI', 'REPUNITSPE': 'REPUNITSPE', 'REPUNITALT': 'REPUNITALT', 'TXTBORDERR': 'TXTBORDERR', 'LEVL': 'LEVL', 'RNP': 'RNP', 'TXTRMKWRK1': 'TXTRMKWRK1', 'TXTRMK_LCL': 'TXTRMK_LCL', 'EXCLUDEDAI': 'EXCLUDEDAI', 'NAM_LCL': 'NAM_LCL', });
lyr_Obstacles_1.set('fieldImages', {'ID': 'TextEdit', 'Designatio': 'TextEdit', 'OBST_type': 'TextEdit', 'OBST_posit': 'TextEdit', 'OBST_pos_1': 'TextEdit', 'OBST_pos_2': 'TextEdit', 'ELEV_HGT__': 'TextEdit', 'Warning_Si': 'TextEdit', 'Val_Y': 'TextEdit', 'Val_X': 'TextEdit', 'Ele_Ft': 'TextEdit', 'Ele_M': 'TextEdit', 'Hgt_Ft': 'TextEdit', 'Hgt_M': 'TextEdit', 'City': 'TextEdit', 'Surface_EL': 'TextEdit', 'Remarks': 'TextEdit', 'RASTERVALU': 'TextEdit', 'height_m': 'TextEdit', });
lyr_PRD_2.set('fieldImages', {'AIRSPACE_P': 'TextEdit', 'EFFECTIVED': 'DateTime', 'UPDATEDT': 'DateTime', 'UPDATEOPER': 'TextEdit', 'SOURCE': 'TextEdit', 'DIFFIND': 'TextEdit', 'MSLINK': 'TextEdit', 'MAPID': 'TextEdit', 'BLTYPE': 'TextEdit', 'TYP': 'TextEdit', 'FLEXIBLEUS': 'TextEdit', 'IDENT': 'TextEdit', 'TXTLOCALTY': 'TextEdit', 'AREACODE': 'TextEdit', 'ICAOCODE': 'TextEdit', 'NAM': 'TextEdit', 'CODELOCIND': 'TextEdit', 'CODELOCIN1': 'TextEdit', 'CODEMIL': 'TextEdit', 'VALLOWERLI': 'TextEdit', 'UPPERLOWER': 'TextEdit', 'UPPERLIMIT': 'TextEdit', 'UPLIMITUNI': 'TextEdit', 'CODEDISTVE': 'TextEdit', 'VALDISTVER': 'TextEdit', 'UOMDISTVER': 'TextEdit', 'CODEDISTV1': 'TextEdit', 'LOWERLIMIT': 'TextEdit', 'LOWERLIMI1': 'TextEdit', 'CODEDISTV2': 'TextEdit', 'VALDISTVE1': 'TextEdit', 'UOMDISTVE1': 'TextEdit', 'CODEDISTV3': 'TextEdit', 'WIDTH': 'TextEdit', 'WIDTHUOM': 'TextEdit', 'HACCURACY': 'TextEdit', 'HACCURACYU': 'TextEdit', 'LATITUDE': 'TextEdit', 'LONGITUDE': 'TextEdit', 'TXTRMK': 'TextEdit', 'CODEWRKHR': 'TextEdit', 'TXTRMKWRKH': 'TextEdit', 'CENTERFEA_': 'TextEdit', 'CENTER_PK': 'TextEdit', 'AIRWAY_PK': 'TextEdit', 'ADDRESS': 'TextEdit', 'UNITADDRES': 'TextEdit', 'CRUISETABI': 'TextEdit', 'CODECLASS': 'TextEdit', 'ENTRYRPT': 'TextEdit', 'UIRUPPERLI': 'TextEdit', 'REPUNITSPE': 'TextEdit', 'REPUNITALT': 'TextEdit', 'TXTBORDERR': 'TextEdit', 'LEVL': 'TextEdit', 'RNP': 'TextEdit', 'TXTRMKWRK1': 'TextEdit', 'TXTRMK_LCL': 'TextEdit', 'EXCLUDEDAI': 'TextEdit', 'NAM_LCL': 'TextEdit', });
lyr_Obstacles_1.set('fieldLabels', {'ID': 'hidden field', 'Designatio': 'header label - visible with data', 'OBST_type': 'hidden field', 'OBST_posit': 'header label - always visible', 'OBST_pos_1': 'hidden field', 'OBST_pos_2': 'hidden field', 'ELEV_HGT__': 'hidden field', 'Warning_Si': 'hidden field', 'Val_Y': 'hidden field', 'Val_X': 'hidden field', 'Ele_Ft': 'header label - always visible', 'Ele_M': 'hidden field', 'Hgt_Ft': 'header label - always visible', 'Hgt_M': 'hidden field', 'City': 'hidden field', 'Surface_EL': 'hidden field', 'Remarks': 'header label - always visible', 'RASTERVALU': 'hidden field', 'height_m': 'hidden field', });
lyr_PRD_2.set('fieldLabels', {'AIRSPACE_P': 'hidden field', 'EFFECTIVED': 'hidden field', 'UPDATEDT': 'hidden field', 'UPDATEOPER': 'hidden field', 'SOURCE': 'hidden field', 'DIFFIND': 'hidden field', 'MSLINK': 'no label', 'MAPID': 'no label', 'BLTYPE': 'no label', 'TYP': 'no label', 'FLEXIBLEUS': 'no label', 'IDENT': 'no label', 'TXTLOCALTY': 'no label', 'AREACODE': 'no label', 'ICAOCODE': 'no label', 'NAM': 'no label', 'CODELOCIND': 'no label', 'CODELOCIN1': 'no label', 'CODEMIL': 'no label', 'VALLOWERLI': 'no label', 'UPPERLOWER': 'no label', 'UPPERLIMIT': 'no label', 'UPLIMITUNI': 'no label', 'CODEDISTVE': 'no label', 'VALDISTVER': 'no label', 'UOMDISTVER': 'no label', 'CODEDISTV1': 'no label', 'LOWERLIMIT': 'no label', 'LOWERLIMI1': 'no label', 'CODEDISTV2': 'no label', 'VALDISTVE1': 'no label', 'UOMDISTVE1': 'no label', 'CODEDISTV3': 'no label', 'WIDTH': 'no label', 'WIDTHUOM': 'no label', 'HACCURACY': 'no label', 'HACCURACYU': 'no label', 'LATITUDE': 'no label', 'LONGITUDE': 'no label', 'TXTRMK': 'no label', 'CODEWRKHR': 'no label', 'TXTRMKWRKH': 'no label', 'CENTERFEA_': 'no label', 'CENTER_PK': 'no label', 'AIRWAY_PK': 'no label', 'ADDRESS': 'no label', 'UNITADDRES': 'no label', 'CRUISETABI': 'no label', 'CODECLASS': 'no label', 'ENTRYRPT': 'no label', 'UIRUPPERLI': 'no label', 'REPUNITSPE': 'no label', 'REPUNITALT': 'no label', 'TXTBORDERR': 'no label', 'LEVL': 'no label', 'RNP': 'no label', 'TXTRMKWRK1': 'no label', 'TXTRMK_LCL': 'no label', 'EXCLUDEDAI': 'no label', 'NAM_LCL': 'no label', });
lyr_PRD_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});