### Dat19b - Programmering 2 - 3. Semester Forår 2020
Underviser: Claus Bove, clbo@kea.dk


| Uge | Dato | Emne | 
| --- | --- |
| | | [Introduktion til Programering 2](w35_intro.md) | 
| | | [OOP recap: Encapsulation, Abstraction, Inheritance & Polymorphism](w36_recap_oop.md)|
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
||| 	|



<script>  

var dates = [
	{week:35, date: '28/8'},
	{week:36, date:	'3/9' },
	{week: '' ,  date:	'4/9' },
	{week:37, date:	'10/9' },
	{week: ''	, date:'11/9' 	},
	{week:38, date:	'17/9' 	},
	{week: '' , date:	'18/9' 	 },
	{week:39, date:	'24/9' 	 },
	{week: '' ,date:	'25/9' 	 },
	{week:40, date:	'1/10' 	 },
	{week: '' , date:	'2/10' 	 },
	{week:41, date:	'8/10' 	 },
	{week: '' , date:	'9/10' 	 },
	{week:42, date:	'15/10' 	 },
	{week:'' , date:	'16/10' 	 },
	{week:43, date:	'22/10' 	 },
	{week:'' , date:	'23/10' 	 },
	{week:44, date:	'29/10' 	 },
	{week:''  ,date:	'30/11' 	 },
	{week:45, date:	'5/11' 	 },
	{week:''  ,date:	'6/11' 	 },
	{week:46, date:	'12/11' 	 },
	{week:''  ,date:	'13/11' 	 },
	{week:47, date:	'19/11' 	 },
	{week:'' , date:	'20/11' 	 },
	{week:48, date:	'26/11' 	 },
	{week:''  ,date:	'27/11' 	 },
	{week:49, date:	'3/12' 	 },
	{week:''  ,date:	'4/12' 	 },
	{week:50, date:	'10/12' 	 },
	{week:''  ,date:	'11/12' 	 },
	{week:51, date:	'17/12' 	 }

]
var table = document.getElementsByTagName("table");  
console.log(table);
var tbody = document.getElementsByTagName("tbody")
console.log(tbody)
var rows = document.getElementsByTagName("tr");  
console.log(rows)
for(i = 1; i < rows.length; i++){  
  var tds = rows[i].getElementsByTagName("td"); 
  tds[0].innerHTML= dates[i-1].week;
  tds[1].innerHTML= dates[i-1].date;
}
</script>
