
<!-- JS use if these pages are used as githubpages. can be deleted if used elsewhere -->
<script src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
<script src="script.js"></script>

# Spring Testing Frameworks (Unit Tests) 

## Uge 38, torsdag d. 17/9

I dag og de efterfølgende 2 gange skal i lære at lave unittest, og at få disse til at virke i et Spring Boot MVC Project.  
I skal efterfølgende bruge disse færdigheder i jeres Teknikfag, hvor i kommer til at arbejde med Deployment og Continuous Integration. I den forbindelse har i brug for at kunne køre automatiserede tests af jeres kode. 

Kort fortalt laver man tests a sine software produkter for at sikre sig mod runtime errors. Vi starter i første omgang med at se på grundbyggestenen af disse tests, unittest og arbejder os derefter over i mod at i kan integrere dette i feks. et Spring MVC projekt.

Vi kommer desuden til at gøre brug af tests resten af semesteret i forbindelse med alle vores Spring Boot projekter. 

## Læringsmål
Efter i dag vil i:
* Vide hvad en unittest er.
* Kunne oprette og udfører unittests af jeres classer og metoder ved hjælp af JUnit5. 
* Vide hvorfor vi bør teste vores Software.
* Kende til koncepterne "Test First" og "Test Driven Development".

## Materiale
* [Tutorial: My First Unit Test](w38_my_first_unittest_tutorial.md)
* [JUnit 5 Assertions Examples](https://howtodoinjava.com/junit5/junit-5-assertions-examples/)
* [JUnit 5 Expected Exception – assertThrows() Example](https://howtodoinjava.com/junit5/expected-exception-example/)
* [169. Introduction to Testing Spring Framework Applications](https://www.udemy.com/course/spring-framework-5-beginner-to-guru/learn/lecture/7497672#overview)
* [172. Creating a JUnit Test](https://www.udemy.com/course/spring-framework-5-beginner-to-guru/learn/lecture/7497686#overview)
* [Kodeeksempel fra undervisningen]() 

## Øvelser
### Calculator 
Gør Calculator exemplet fra tavlen færdigt ved at tilføje -, *, / og % (modulus) til koden (og det skal selvfølgelig testes.)

### String unit test exercises 
Clone dette github repository og åben det i IntelliJ. Øvelsen er beskrivet i filerne i projektet.

````
 git clone https://github.com/dat19b/unittest-string-exercises.git
```` 
### Collections unit test exercises
I projektet med Strings Unittest er der en fil mere: CollectionsExercises.java. Koden i denne fil er færdig, men der mangler til gengæld at få lavet tests. I skal lave disse tests.


### Alphabet Unittest
* [Alphabet UnitTest](w38_alphabet_unittest_ex.md)


