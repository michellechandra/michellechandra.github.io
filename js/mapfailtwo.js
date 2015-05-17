 

 window.onload = function() {

        var newmap = new L.Map('newmap', {
        zoomControl: false,
        center: [0, 0],
        zoom: 2
      });
       
      cartodb.createVis('newmap', 'https://team.cartodb.com/u/chandra/api/v2_1/viz/8158fd26-d681-11e4-97ad-0e853d047bba/viz.json', {
            shareable: true,
            tiles_loader: true
        })


    }

    





