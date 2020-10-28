import React from 'react';
import droneIcon from '../../resources/icons/drone-icon1.png';
import './styles.scss';

const LayerOpacityControl = ({
    map,
    geoserverUrl = 
    'https://geoserver.yilab.org.np/geoserver/wms?bbox={bbox-epsg-3857}&format=image/png&service=WMS&version=1.1.1&request=GetMap&srs=EPSG:3857&width=256&height=256&layers=Bipad%3ADistrict'
    // 'https://geoserver.yilab.org.np/geoserver/Bipad/wms?service=WMS&version=1.1.0&request=GetMap&layers=Bipad%3ADistrict&width=768&height=386&srs=EPSG%3A4326&format=application/openlayers'
    // 'https://img.nj.gov/imagerywms/Natural2015?bbox={bbox-epsg-3857}&format=image/png&service=WMS&version=1.1.1&request=GetMap&srs=EPSG:3857&transparent=true&width=256&height=256&layers=Natural2015'
    // 'http://167.71.229.214:8009/geoserver/wms?bbox={bbox-epsg-3857}&format=image/png&service=WMS&version=1.1.1&request=GetMap&srs=EPSG:3857&width=256&height=256&layers=GIID:App_districts'
    ,
}) => {
    const addWmsLayer = (map, geoserverUrl) => {
        console.log('url', geoserverUrl);

        map.addSource('wms-openspace-source', {
            type: 'raster',
            tiles: [
                geoserverUrl,
            ],
            tileSize: 256,
        });
        map.addLayer(
            {
                id: 'wms-openspace-layer',
                type: 'raster',
                source: 'wms-openspace-source',
                paint: {},
            },
            'aeroway-line',
        );
    };

    const handleWmsCheck = (e) => {
        const { checked } = e.target;
        if (checked) {
            // map.flyTo({
            //     speed: 0.4, // make the flying slow
            //     curve: 1, 
            //     center: [-74.5, 40]
            // })
            addWmsLayer(map, geoserverUrl);
        } else {
            // map.flyTo({
            //     speed: 0.4, // make the flying slow
            //     curve: 1, 
            //     center: [84, 28]
            // })
            map.removeLayer('wms-openspace-layer');
            map.removeSource('wms-openspace-source');
        }
    };


// if(map){
//     if (map.getLayer('wms-openspace-layer')) {
//         map.removeLayer('wms-openspace-layer');
//     }
//     if (map.getSource('wms-openspace-source')) {
//         map.removeSource('wms-openspace-source');
//     }
// }
    return (
        <div className='mapLegendWrap'>
                <h2>
                    Layer Controls
                    {/* <a href="#/" className='opacityIcon} /> */}
                </h2>
                <div className='legendWrap'>

                    <div className='wrapList'>
                        <div className='listItem'>
                            <img
                                alt="drone"
                                src={droneIcon}
                                className='dImg'
                            />
                            <span>Drone Image :</span>
                            <div className='checkboxInputWrap'>
                                    <input
                                        type="checkbox"
                                        onChange={e => handleWmsCheck(e)}
                                    />
                            </div>
                        </div>
                        {/* // )} */}
                    </div>
                </div>
            </div>
    )
}

export default LayerOpacityControl;