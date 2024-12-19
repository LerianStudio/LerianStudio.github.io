window.onload = function() {
  //<editor-fold desc="Changeable Configuration Block">

  // the following lines will be replaced by docker/configurator, when it runs in a docker-container
  window.ui = SwaggerUIBundle({
    urls: [
      {
        url: "../ledger/swagger.json",
        name: "Ledger"
      },
      {
        url: "../ledger/openapi.yaml",
        name: "Ledger OAS 3"
      },      
      {
          url: "../transaction/swagger.json",
          name: "Transaction"
      }, 
      {
        url: "../audit/swagger.json",
        name: "Audit"
      },         
    ],
    dom_id: '#swagger-ui',
    deepLinking: true,
    presets: [
      SwaggerUIBundle.presets.apis,
      SwaggerUIStandalonePreset
    ],
    plugins: [
      SwaggerUIBundle.plugins.DownloadUrl
    ],
    layout: "StandaloneLayout"
  });

  //</editor-fold>
};
