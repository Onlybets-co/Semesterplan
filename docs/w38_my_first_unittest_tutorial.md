# Tutorial: My First Unit Test

This tutorial is identical to what I have shown you in class about unittest.

## Create a Spring Boot Project 
First thing to do is to create a Spring Boot Project using the spring initializer.   
Do not add any dependencies at this point.   


If you look at your projects pom.xml file you should see the following dependencies. 

````
<dependencies>
	<dependency>
	    <groupId>org.springframework.boot</groupId>
	    <artifactId>spring-boot-starter</artifactId>
	</dependency>

	<dependency>
	    <groupId>org.springframework.boot</groupId>
	    <artifactId>spring-boot-starter-test</artifactId>
	    <scope>test</scope>
	    <exclusions>
		<exclusion>
		    <groupId>org.junit.vintage</groupId>
		    <artifactId>junit-vintage-engine</artifactId>
		</exclusion>
	    </exclusions>
	</dependency>
</dependencies>

````
Create a model package and in this package create a file called Calculator.java. Also create a Main.java file with a main() method in it.  The Main.java file should be outside the model package.

![](img/unittest_1.png)

## Calculator class

Open your Calculator class and write an add method like the one below.

````
public class Calculator {

    public int add(int x, int y){
        return x + y;
    }
}

````

## Create a Test Class

Right click in your Calculator class, choose **Generate -> Test**.   
You will know see a gui like this:

![](img/unittest_2.png)

Mark the fields like in the screenshoot. 

In your test folder you will now have a CalculatorTest.java file


 
