# NRK
# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## For å kjøre siden:

Må ha node installert.

Videre navigerer man i en terminal til "server"-mappen for så å kjøre kommandoen "npm i", deretter "npm start".

Når serveren kjører kan man navigere til "aarets-artist"-mappen og kjøre de samme kommandoene der. 

Siden skal nå åpens automatisk i nettleseren på addresse [http://localhost:3000](http://localhost:3000).

Vises ikke artistene på siden kan det være fordi at serveren ikke er startet/har krasjet.

Etter man har valgt en artist på siden kan man trykke på "STEM"-knappen. 
Ved trykk sendes en POST-request til serveren ( [http://localhost:3500/submit](http://localhost:3500/submit)) og man vil få respons fra serveren om hvilken artist som ble stemt på. Dette kan man se i nettverksfanen i nettleseren sin. 



