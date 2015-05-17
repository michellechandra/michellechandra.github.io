 window.onload = function() {

      // define the torque layer style using cartocss
      var CARTOCSS = [
      'Map {',
        '-torque-frame-count:512;',
        '-torque-animation-duration:15;',
        '-torque-time-attribute:"pt_num";',
        '-torque-aggregation-function:"count(cartodb_id)";',
        '-torque-resolution:1;',
        '-torque-data-aggregation:cumulative;',
        '}',
        '#worldmap3000{',
          'comp-op: lighter;',
          'marker-fill-opacity: 0.3;',
          'marker-line-color: #d6cfc5;',
          'marker-line-width: 0;',
          'marker-line-opacity: 1;',
          'marker-type: ellipse;',
          'marker-width: 1.5;',
          'marker-fill: #d6cfc5;',
        '}'].join('\n');
        
      var map = new L.Map('map', {
        zoomControl: false,
        center: [0, 0],
        zoom: 2
      });

      var torqueLayer = new L.TorqueLayer({
        user       : 'chandra',
        table      : 'worldmap3000',
        loop       : false,
        cartocss: CARTOCSS
      });

      torqueLayer.addTo(map);
      torqueLayer.play()
    }