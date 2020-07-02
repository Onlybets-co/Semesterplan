<!-- JS use if these pages are used as githubpages. can be deleted if used elsewhere -->
<script src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
<script src="script.js"></script>

# OOP recap: Encapsulation, Abstraction, Inheritance & Polymorphism

Uge 35, fredag d. 28/8
I dag skal i have genopfrisket hvad encapsulation er, og hvordan i bruger det i Java.  
I java skaber vi indkapsling (encapsulation) af data ved at lave private attributter (fields) og public metoder (getters & setters).
I princippet kunne man sagtens lave en attributter public, som man så kunne læse og skrive dirrekte til, uden at skulle gå gennem metoder som getters og setters. Grunden til at vi så alligevel altid laver attributter private og tilgår dem gennem metoder er dobbelt. Dels at vi i nogle tilfælde har brug for at tjekke om en attributs værdi ligger indenfor et specificeret område. Feks. må alderen på en studerende ikke være et negativt tal. Og dels ønsker vi et konsistent interface, som uanset om vi har brug for at lave alderstjekket på den studerende eller altid ej ser ens ud. Vi vil fra client siden ikke skulle spekulerer på om man skal skrive student.age = 18 eller student.setAge(18). Vi vil uanset den indre logik i Studentklassen altid skulle skrive student.getAge().   

## Læringsmål og erhvervskompetenser
Problemet i skal kunne løse efter i dag ser sådan ud.

<iframe width="560" height="315" src="https://www.youtube.com/embed/n9Ths1CSCkU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

[https://youtu.be/n9Ths1CSCkU](https://youtu.be/n9Ths1CSCkU)  

Dette kræver at i mestre Pricipperne om Encapsulation.

## Materialer

## Øvelser



