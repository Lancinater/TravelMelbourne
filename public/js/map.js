var platform = new H.service.Platform({
    'apikey': 'QcJBnENFe1aGfdRTC0HSUNfItH7_rcBXBe1Scx6H9LU'
  });
  
  // Obtain the default map types from the platform object:
var defaultLayers = platform.createDefaultLayers();

// Get an instance of the geocoding service:
var service = platform.getSearchService();

let landmark = document.querySelector('.main-heading').textContent;
service.geocode({
  q: landmark + ', Australia'
}, (result) => {
  // Instantiate (and display) a map object:
  var map = new H.Map(
    document.getElementById('map'),
    defaultLayers.vector.normal.map,
    {
      zoom: 15,
      center: result.items[0].position
    });
    // Add a marker for the landmark:
    var marker = new H.map.Marker(result.items[0].position);
    map.addObject(marker);
    // Create the default UI:
    const ui = H.ui.UI.createDefault(map, defaultLayers);

}, alert);


