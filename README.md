# MyAngularApp

Voorbeeldproject voor de Client-side webframeworks-lessen van Avans Hogeschool, opleiding Informatica, Breda.

De applicatie draait [ook op Heroku](https://cswfr.herokuapp.com/).

Deze repo bevat code die in de lessen is gebruikt.

## Les 2

- raamwerk van componenten opgezet. Component A en B zijn gemaakt, en er is een List, Detail en Columns component.
- Er is een Edit component toegevoegd. Je kunt nu via het menu navigeren, zodat je ziet hoe je vanuit een lijst naar de details van een entiteit kunt navigeren, en je eventueel een entiteit kunt maken (via New) of kunt wijzigen (via Edit). De achterliggende functionaliteit werkt nu nog niet.
- De List, Detail, Edit en Columns componenten zitten in een folder `entity`. Dit wordt één van de entities in jouw casus. Pas deze dus aan naar jouw casus.
- Een betere naam voor de List component zou bv UserListComponent zijn. Je wilt de naam van de entity in de componentnaam meenemen.

## Les 3
- UserService en User model toegevoegd, als basis om te werken met services. De UserService bevat nu een array van Users, die in de `list.component.html` via een `ngFor` worden getoond. Zodra we met een backend werken wordt het array van Users via een GET-request van de backend server gehaald.
