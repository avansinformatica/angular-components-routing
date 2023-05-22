# Example Angular components en routing app

Voorbeeldproject uit de Client-side webframeworks-lessen van Avans Hogeschool,
opleiding Informatica, Breda. Dit voorbeeld laat zien hoe je components kunt
nesten, en hoe je via de `<router-outlet>` placeholder een component binnen een
hierarchy kunt plaatsen. Daarnaast zie je ook hoe je een geneste router-outlet
kunt toepassen.

Deze repo bevat de code die in de lessen is gebruikt. De applicatie is online
beschikbaar [op Heroku](https://angular-routing.herokuapp.com/).

# Inhoud van de lessen

## Les 1

-   Introductie van Angular, Angular CLI, projectstructuur, components

## Les 2

-   Raamwerk van componenten opgezet. Component A en B zijn gemaakt, en er is
    een List, Detail en Columns component.
-   Er is een Edit component toegevoegd. Je kunt nu via het menu navigeren,
    zodat je ziet hoe je vanuit een lijst naar de details van een entiteit kunt
    navigeren, en je eventueel een entiteit kunt maken (via New) of kunt
    wijzigen (via Edit). De achterliggende functionaliteit werkt nu nog niet.
-   De List, Detail, Edit en Columns componenten zitten in een folder `entity`.
    Dit wordt één van de entities in jouw casus. Pas deze dus aan naar jouw
    casus.
-   Een betere naam voor de List component zou bv UserListComponent zijn. Je
    wilt de naam van de entity in de componentnaam meenemen.

## Les 3

-   UserService en User model toegevoegd, als basis om te werken met services.
    De UserService bevat nu een array van Users, die in de `list.component.html`
    via een `ngFor` worden getoond. Zodra we met een backend werken wordt het
    array van Users via een GET-request van de backend server gehaald.
