window.onload = function() {
  //<editor-fold desc="Changeable Configuration Block">

  // the following lines will be replaced by docker/configurator, when it runs in a docker-container
  window.ui = SwaggerUIBundle({
    urls: [
      {
        url: "https://github.com/LerianStudio/midaz/blob/main/components/ledger/api/swagger.json",
        name: "Ledger"
      },
      {
          url: "https://github.com/LerianStudio/midaz/blob/main/components/transaction/api/swagger.json",
          name: "Transaction"
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
