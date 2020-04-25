# Clima app - Backend

Este es el backend de la aplicacion Clima app, desarrollada como challenge para Telecom
***
## Endpoints

La aplicacion consta de 3 endpoints los cuales se acceden desde la ruta raiz /v1:

#### /v1/location
Este endpoint devuelve la ubicación del usuario en base a su ip, la cual se obtiene consultando con la api https://ip-api.com/

#### /v1/current/[city]
Este endpoint devuelve el estado actual del clima de la ciudad enviada en el parametro city.

El parámetro city es opcional, de modo que si no es enviado la aplicación resuelve obteniendo la ubicación basandose en la ip del usuario, consumiendo el servicio del endpoint de location

#### /v1/forecast/[city]
Este endpoint devuelve el estado del tiempo cada 3hs durante los próximos 5 dias de la ciudad enviada en el parametro city.

El parámetro city es opcional, de modo que si no es enviado la aplicación resuelve obteniendo la ubicación basandose en la ip del usuario, consumiendo el servicio del endpoint de location
***
## Testeo

Para levantar la aplicacion hay que utilizar el siguiente comando desde la consola en el directorio del back.
>`npm run start `

Una vez levantada, la misma puede ser accedida desde un navegador en la url http://localhost:3000
***
## Tests de integración

La api cuenta con tests de integración que pueden ser ejecutados desde la consola con el siguiente comando desde el directorio back 
>`npm test`

***
## Librerías

Las librerías utilizadas en el desarrollo de la api fueron:

- Express - Utilizada para configurar el webserver y el manejo del protocolo REST
- Axios - Utilizada para el consumo de las apis externas
- Nodemon - Para hacer hot reloading, acelerando la velocidad en el desarrollo
- Mocha, Supertest, Should - Para conformar el framework de testeo


