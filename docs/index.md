### Dat19b - Programmering 2 - 3. Semester Forår 2020
Underviser: Claus Bove, clbo@kea.dk


| Uge | Dato | Emne | 
| --- | --- |
| 35    | 28/8 	| [Introduktion til Programering 2](w35_intro.md) | 
| 36  	| 3/9	| [OOP recap: Encapsulation, Abstraction, Inheritance & Polymorphism](w36_recap_oop.md)|
|     	| 4/9 	| [Recap: ADT: Lists, Sets, Interface, Generics ](w36_recap_adt_datastr_interf_gen.md)| 
| 37  	| 10/9 	| [Recap: Spring Boot MVC (Design Patern)](w37_recap_mvc_dp.md) |  
|	| 11/9 	| [Recap: Spring Boot MVC](w37_recap_mvc.md)|
| 38 	| 17/9 	| [Recap: Spring Boot MVC](w38_recap_mvc.md)|
|  	| 18/9 	| | 
| 39 	| 24/9 	| |
|  	| 25/9 	| |
|40  	| 1/10 	| |
|  	| 2/10 	| | 
|41  	| 8/10 	| |
|  	| 9/10 	| | 
|42  	| 15/10 | |
|  	| 16/10 | |
|43	| 22/10	|	|
|	| 23/10	|	|
|44	| 29/10	|	|
|	| 30/11	|	|
|45	| 5/11	|	|
|	| 6/11	|	|
|46	| 12/11	|	|
| 	| 13/11	|	|
|47	| 19/11	|	|
|	| 20/11	|	|
|48	| 26/11 | 	|
| 	| 27/11	|	|
|49	| 3/12 	| 	|
| 	| 4/12	|	|
|50	| 10/12 | 	|
| 	| 11/12	|	|
|51	| 17/12 | 	|




<script>  
var dates = [{week : 5, date : '5/2 - 2016'}, {week : 6, date : '12/2 - 2016'}, {week : 7, date : '<b>15/2 - 2016</b>'}, {week : 7, date : '<b>18/2 - 2016</b>'}, {week : 8, date : '26/2 - 2016'}, {week : 9, date : '4/3 - 2016'}, {week : 10, date : '11/3 - 2016'}, {week : 11, date : '18/3 - 2016'}, {week : 12, date : '25/3 - 2016'}, {week : 13, date : '1/4 - 2016'}, {week : 14, date : '8/4 - 2016'}, {week : 15, date : '15/4 - 2016'}, {week : 16, date : '22/4 - 2016'}, {week : 17, date : '29/4 - 2016'}, {week : 18, date : '6/5 - 2016'}, {week : 19, date : '13/5 - 2016'},{week : 20, date :  '20/5 - 2016'}];
var table = document.getElementsByTagName("table");  
console.log(table);
var rows = table.getElementsByTagName("tr");  
console.log(rows)
for(i = 1; i < rows.length; i++){  
  var tds = rows[i].getElementsByTagName("td"); 
  tds[0].innerHTML= dates[i-1].week;
  tds[1].innerHTML= dates[i-1].date;
}
</script>
