# Alphabet Unittest øvelse

## Setup
Lav først et nyt Spring Boot Initializer project.   
I dette project skal du oprette en **Alphabet.java** klasse i en **model** package.   
Herefter skal du copy/paste koden som du ser herunder ind i Alphabet.java fil.  
Lav en Main.java fil med en main metode i denne fil.  
Lav et object af Alphabet klassen og kør metoderne **numberOfVowels**, og **numberOfConsonants**. Begge metoder tager en tekststreng som parameter og de skal henholdsvis returnere antallet af vokaler eller konsonanter i denne tekst streng.      
Måske kan du allerede se at der er noget galt i det resultat du får tilbage?    

## Øvelsen
Lav unittests for klassen, og i disse skal du definerer hvad denne klasse skal kunne. Altså hvis du kalder **numberOfVowels("Hej med dig")** skal du forvente at få nummeret **3** tilbage som returværdi fra denne metode. 

````
public class Alphabet {

    private Character[] consonant = {'b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 's', 't', 'v', 'x', 'z'}; // 'r'
    private Character[] vowels = {'a', 'e', 'i', 'o', 'y'}; // 'u'

    // This method takes a String as parameter (a text), and should return an int (the number of vowels in that string)
    public int numberOfVowels(String s){
        int count = 1;
        for (int i = 0; i <= s.length()+1; i++){
            if(isVowel(s.charAt(count))){
                count ++;
            }
        }
        return count;
    }

    public int numberOfConsonants(String s){
        int count = 1;
        for (int i = 0; i < s.length()-1; i++){
            if(isCosonant(s.charAt(count))){
                count += 1;
            }
        }
        return count;
    }

    private boolean isVowel(char s){
        Set<Character> characters = new HashSet<>(Arrays.asList(vowels));
        characters.addAll(Arrays.asList());
        return characters.contains(s);
    }

    private boolean isCosonant(char s){
        Set<Character> characters = new HashSet<>(Arrays.asList(consonant));
        characters.addAll(Arrays.asList());
        return characters.contains(s);
    }
}

````

