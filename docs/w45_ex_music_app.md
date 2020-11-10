<!-- JS use if these pages are used as githubpages. can be deleted if used elsewhere -->
<script src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
<script src="script.js"></script>

# Øvelse: MVC music application 


Denne øvelse går ud på at lave en "simuleret" music app, og det skal være en konsol application. Så alt skal kodes fra bunden, og du skal ikke bruge et MVC Framework som Spring Boot MVC. 

Du skal bruge MVC arkitekturen, og du skal i dette indarbejde et repository pattern. 

* Applikationen skal kunne vise hvilken sang der afspilles (eller hvis du har overskud også rent faktisk afspille sangen). 
* Du skal også kunne skifte sang gennem et user input.
* Du skal kunne oprette nye sange i din database. 

## Del 2: Observer pattern

I denne del 2 skal du implementerer Observer pattern i MVC Strukturen.    
Dit repository skal være dit observarable object og dine view Observers.


## Del 3: Strategy pattern

Du skal nu implementerer Strategy pattern i dit MVC projekt.   
* Dit repository (model) bruger nok allerede dette pattern, men du skal i så fald være bevidst om og kunne forklare hvodan det bruger det.    
* Se dine controllers som havende en adfærd (behaviour) og dit view som et object der implementerer denne adfærd.       
