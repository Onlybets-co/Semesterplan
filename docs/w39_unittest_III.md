
<!-- JS use if these pages are used as githubpages. can be deleted if used elsewhere -->
<script src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
<script src="script.js"></script>

# Spring Testing Frameworks (Mockito) 

## Uge 39, torsdag d. 24/9

## Læringsmål
* Forstå hvad dependency injection er. 
* Bruge Mockito, et mocking framework til brug ved jnit-testing.
* Lave unittests af et Spring Boot MVC project med brug af JJunit og Mockito.

## Materiale
* [A quick intro to Dependency Injection: what it is, and when to use it](https://www.freecodecamp.org/news/a-quick-intro-to-dependency-injection-what-it-is-and-when-to-use-it-7578c84fa88f/)
* [Mockito Tutorial (Tavle eksempel)](w38_mockito_tutorial.md)
* [173. Using Mockito Mocks](https://www.udemy.com/course/spring-framework-5-beginner-to-guru/learn/lecture/7497700#overview) 
* [174. Assignment - Write Test for IndexController](https://www.udemy.com/course/spring-framework-5-beginner-to-guru/learn/lecture/7497708#overview)
* [175. Assignment Review](https://www.udemy.com/course/spring-framework-5-beginner-to-guru/learn/lecture/7497716#overview)


<!--
### Skal redigeres inden brug
* [Testing the web layer](https://spring.io/guides/gs/testing-web/) (SKAL REDIGERES TIL AT BRUGE MOCKITO mm.)
* [Testing in Spring Boot](https://www.baeldung.com/spring-boot-testing)
* [Guide to Testing Controllers in Spring Boot](https://thepracticaldeveloper.com/2020/06/04/guide-spring-boot-controller-tests/)
* [Integrate JUnit and Mockito, Unit Testing for Controller Layer](https://medium.com/backend-habit/integrate-junit-and-mockito-unit-testing-for-controller-layer-91bb4099c2a5)
https://howtodoinjava.com/spring-boot2/testing/spring-boot-mockito-junit-example/
-->

* [Kodeeksempler fra undervisningen](https://github.com/dat19b/mockito_junit_starterfiles)


## Øvelser

Inden vi mødes næste torsdag skal i have lavet alle øvelser fra i går [Spring Testing Frameworks (Unit Tests)](w38_unittest_I.md#øvelser) og øvelserne fra idag. 



### 1. Test Af Create metoden
Lav en test af projectets create metode. I skal bruge samme fremgangsmåde som lige er blevet gennemgået ved tavlen.    


### Skriv en Test til StudentsController
* Lav en unittest til projektets controller klasse.
* Brug Mockito Mock til StudentRepository og Model
* Test at der returneres en korrekt streng fra metoden.
* Test at der interagesres med jeres Mocks.

 I kan se øvelsen og løsningen på øvelsen her:
* [174. Assignment - Write Test for IndexController](https://www.udemy.com/course/spring-framework-5-beginner-to-guru/learn/lecture/7497708#overview)
* [175. Assignment Review](https://www.udemy.com/course/spring-framework-5-beginner-to-guru/learn/lecture/7497716#overview)

Vi gennemgår desuden løsningen ved tavlen om ca. 30 minutter.
 
### Students Administration Project Unit Test
I Students Administration projectet skal i "afkommenterer" de metoder der ikke endnu er active. Det skal gøres i StudentsController, StudentRepository og i IStudentRepository. Herefter skal i teste alle metoder. I skal til det gøre brug af JUnit og Mockito.   

### JUint & Mockito tutorials
Se og lav eksemplerne fra disse 2 videoer.

* [What is JUnit? | Why Mockito?](https://www.youtube.com/watch?v=eILy4p99ac8&t=15s)
* [Mockito JUnit Example](https://www.youtube.com/watch?v=HsQ9OwKA79s)
