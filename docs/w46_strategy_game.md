<!-- JS use if these pages are used as githubpages. can be deleted if used elsewhere -->
<script src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
<script src="script.js"></script>

# Strategy Pattern Game Exercise 

I denne øvelse skal i lave et element til et spil, hvor i skal kunne vælge/skifte våben og transportform.

Brugeren skal spørges "What weapon do you want to use? (axe, sword or club)"
Og spørges "In what way do you want to travel (foot, horse or bird)"

Du skal gøre brug af strategy pattern til at definere de to "bahaviours": weapon og travel

Herunder kan i se hvordan aplikationen skal fungerer: 

````
What weapon do you want to use? (axe, sword or club)  
axe
In what way do you want to travel (foot, horse or bird)  
bird
Using the axe
and travel by Bird!
What weapon do you want to use? (axe, sword or club)  
sword
In what way do you want to travel (foot, horse or bird)  
foot
Using the sword
and travel by Foot!
What weapon do you want to use? (axe, sword or club)  

No such weapon in inventory
In what way do you want to travel (foot, horse or bird)  
horse
Using the sword
and travel by Horse!
What weapon do you want to use? (axe, sword or club)  
club
In what way do you want to travel (foot, horse or bird)  
bird
Using the club
and travel by Bird!
What weapon do you want to use? (axe, sword or club)  

````

