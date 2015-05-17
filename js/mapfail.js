window.onload = function() {
      
    var sunrisevis = 'https://team.cartodb.com/u/chandra/api/v2_1/viz/4d7d1594-fc21-11e4-87ec-0e018d66dc29/viz.json';
    var sunsetvis = 'https://team.cartodb.com/u/chandra/api/v2_1/viz/4c9bcc9a-fc23-11e4-bac1-0e0c41326911/viz.json';
        
        // Choose center and zoom level
    var options = {
        center: [0, 0],
        zoom: 2
      }
    
    // Instantiate map on specified DOM element
    var mapfail = new L.Map('mapfail', options);

    cartodb.createLayer(mapfail, sunrisevis).addTo(mapfail);
    cartodb.createLayer(mapfail, sunsetvis).addTo(mapfail);

    } 
/*
 window.onload = function() {

      // define the torque layer style using cartocss
      var CARTOCSS = [
      'Map {',
      '-torque-frame-count:256;',
      '-torque-animation-duration:30;',
      '-torque-time-attribute:"timestamp";',
      '-torque-aggregation-function:"avg(circlesize)";',
      '-torque-resolution:2;',
      '-torque-data-aggregation:linear;',
      '}',
      '#instagramsuns{',
        'comp-op: lighter;',
        'marker-fill-opacity: 0.9;',
        'marker-line-color: #FFF;',
        'marker-line-width: 0;',
        'marker-line-opacity: 1;',
        'marker-type: ellipse;',
        'marker-width: 6;',
        'marker-fill: #fde3a7;',
      '}',
      '#instagramsuns[frame-offset=1] {',
       'marker-width:8;',
       'marker-fill-opacity:0.45;',
      '}',
      '#instagramsuns[frame-offset=2] {',
       'marker-width:10;',
       'marker-fill-opacity:0.225;',
      '}',
      '#instagramsuns[value<=100] {',
         'marker-fill: #FDE3A7;',
         'marker-width: 2;',
         'marker-fill-opacity: 0.6;',
      '}',
      '#instagramsuns[value<=80] {',
         'marker-fill: #FDE3A7;',
         'marker-width: 2;',
         'marker-fill-opacity: 0.6;',
      '}',
      '#instagramsuns[value<=60] {',
         'marker-fill: #FDE3A7;',
         'marker-width: 4;',
         'marker-fill-opacity: 0.6;',
      '}',
      '#instagramsuns[value<=40] {',
         'marker-fill: #FDE3A7;',
         'marker-width: 6;',
         'marker-fill-opacity: 0.6;',
      '}',
      '#instagramsuns[value<=20] {',
         'marker-fill: #FDE3A7;',
         'marker-width: 10;',
         'marker-fill-opacity: 0.6;',
      '}',
      '#instagramsuns[value<=10] {',
        'marker-fill: #FDE3A7;',
        'marker-width: 12;',
        'marker-fill-opacity: 0.6;',
     '}',
      '#instagramsuns[value<=5] {',
         'marker-fill: #FDE3A7;',
         'marker-width: 14;',
         'marker-fill-opacity: 0.6;',
      '}'].join('\n');

      // define the torque layer style using cartocss
      var MORECSS = [
      'Map {',
      '-torque-frame-count:256;',
      '-torque-animation-duration:30;',
      '-torque-time-attribute:"timestamp";',
      '-torque-aggregation-function:"avg(circlesize)";',
      '-torque-resolution:2;',
      '-torque-data-aggregation:linear;',
      '}',
      '#instagramsuns{',
        'comp-op: lighter;',
        'marker-fill-opacity: 0.9;',
        'marker-line-color: #FFF;',
        'marker-line-width: 0;',
        'marker-line-opacity: 1;',
        'marker-type: ellipse;',
        'marker-width: 6;',
        'marker-fill: #D24D57;',
      '}',
      '#instagramsuns[frame-offset=1] {',
       'marker-width:8;',
       'marker-fill-opacity:0.45;',
      '}',
      '#instagramsuns[frame-offset=2] {',
       'marker-width:10;',
       'marker-fill-opacity:0.225;',
      '}',
      '#instagramsuns[value<=100] {',
         'marker-fill: #D24D57;',
         'marker-width: 2;',
         'marker-fill-opacity: 0.6;',
      '}',
      '#instagramsuns[value<=80] {',
         'marker-fill: #D24D57;',
         'marker-width: 2;',
         'marker-fill-opacity: 0.6;',
      '}',
      '#instagramsuns[value<=60] {',
         'marker-fill: #D24D57;',
         'marker-width: 4;',
         'marker-fill-opacity: 0.6;',
      '}',
      '#instagramsuns[value<=40] {',
         'marker-fill: #D24D57;',
         'marker-width: 6;',
         'marker-fill-opacity: 0.6;',
      '}',
      '#instagramsuns[value<=20] {',
         'marker-fill: #D24D57;',
         'marker-width: 10;',
         'marker-fill-opacity: 0.6;',
      '}',
      '#instagramsuns[value<=10] {',
        'marker-fill: #D24D57;',
        'marker-width: 12;',
        'marker-fill-opacity: 0.6;',
     '}',
      '#instagramsuns[value<=5] {',
         'marker-fill: #D24D57;',
         'marker-width: 14;',
         'marker-fill-opacity: 0.6;',
      '}'].join('\n');

       var layerSource = {
                user_name: 'chandra',
                type: 'cartodb',
                sublayers: [
                {
                    sql: "SELECT * FROM ne_10m_time_zones", // African countries
                    cartocss: '#ne_10m_time_zones{ polygon-fill: #FF6600;polygon-opacity: 0;polygon-comp-op: color-burn;line-color: #ececec;line-width: 0.5;line-opacity: 0.5;}'
                },
                {
                    sql: "SELECT * FROM ne_10m_roads", // Natural and artificial lakes
                    cartocss: '#ne_10m_roads{line-color: #22313f;line-width: 0.5;line-opacity: 0.6;line-comp-op: color-burn;}'
                },
                {
                    sql: "SELECT * FROM world_borders", // Natural and artificial lakes
                    cartocss: '#world_borders{polygon-fill: #FF6600;polygon-opacity: 0;polygon-comp-op: color-burn;line-color: #d6cfc5;line-width: 0.5;line-opacity: 0.6;}'
                },
                {
                    sql: "SELECT * FROM instagramsuns WHERE type = 'sunrise'", // African countries
                    cartocss: '#instagramsuns{marker-fill-opacity: 0.5;marker-line-color: #FFF;marker-line-width: 0.5;marker-line-opacity: 0.9;marker-placement: point;marker-multi-policy: largest;marker-type: ellipse;marker-fill: #fde3a7;marker-allow-overlap: true;marker-clip: false;}#instagramsuns [ circlesize <= 100] {marker-width: 3.0;}#instagramsuns [ circlesize <= 87.5650208333333] {marker-width: 4.0;}#instagramsuns [ circlesize <= 77.4792847222222] {marker-width: 5.0;}#instagramsuns [ circlesize <= 65.7457152777778] {marker-width: 6.0;}#instagramsuns [ circlesize <= 54.1629305555556] {marker-width: 9.0;}#instagramsuns [ circlesize <= 44.1302569444444] {marker-width: 14.0;}#instagramsuns [ circlesize <= 30.8843125] {marker-width: 16.0;}#instagramsuns [ circlesize <= 20.2952013888889] {marker-width: 18.0;}#instagramsuns [ circlesize <= 12.8594722222222] {marker-width: 19.0;}#instagramsuns [ circlesize <= 5.95795833333333] {marker-width: 20.0;}'
                },
                {
                    sql: "SELECT * FROM instagramsuns WHERE type = 'sunset'", // African countries
                    cartocss: '#instagramsuns{marker-fill-opacity: 0.5;marker-line-color: #FFF;marker-line-width: 0.5;marker-line-opacity: 0.5;marker-placement: point;marker-multi-policy: largest;marker-type: ellipse;marker-fill: #D24D57;marker-allow-overlap: true;marker-clip: false;}#instagramsuns [ circlesize <= 100] {marker-width: 2.0;}#instagramsuns [ circlesize <= 65.7457152777778] {marker-width: 4.0;}#instagramsuns [ circlesize <= 44.1302569444444] {marker-width: 12.0;}#instagramsuns [ circlesize <= 20.2952013888889] {marker-width: 16.0;}#instagramsuns [ circlesize <= 5.95795833333333] {marker-width: 18.0;}'
                },]
        }
        
      var mapfail = new L.Map('mapfail', {
        zoomControl: false,
        center: [0, 0],
        zoom: 2
      });

      var torqueLayer = new L.TorqueLayer({
        user       : 'chandra',
        table      : 'instagramsuns',
        cartocss: CARTOCSS
      });

      var torqueLayertwo = new L.TorqueLayer({
        user       : 'chandra',
        table      : 'instagramsuns',
        cartocss: MORECSS
      });

            
      torqueLayer.addTo(mapfail);
      torqueLayertwo.addTo(mapfail);
      torqueLayer.play();
      torqueLayertwo.play();

    }

    



*/

