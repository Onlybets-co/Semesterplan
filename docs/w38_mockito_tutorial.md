<!-- JS use if these pages are used as githubpages. can be deleted if used elsewhere -->
<script src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
<script src="script.js"></script>

# Mockito tutorial

This short tutorial covers what was presented at the black board.    
It is a cut/paste and edit of this more detailed [tutorial](https://www.baeldung.com/mockito-annotations) 

## 1. Overview
In this tutorial, we'll cover one of the annotations of the Mockito library – @Mock


## 2. Enable Mockito Annotations

Before we go further, let's explore one of the different ways to enable the use of annotations with Mockito tests.

### 2.2. MockitoAnnotations.initMocks()

We can enable Mockito annotations programmatically in the setUp of our tests.

````
	@BeforeEach
	public void setUp() {
	    MockitoAnnotations.initMocks(this);
	}

````


## 3. @Mock Annotation

The most used widely used annotation in Mockito is @Mock. We can use @Mock to create and inject mocked instances without having to call Mockito.mock manually.

In the following example – we'll create a mocked ArrayList with the manual way without using @Mock annotation:

````
	@Test
	public void whenNotUseMockAnnotation_thenCorrect() {
	    List mockList = Mockito.mock(ArrayList.class);
	    
	    mockList.add("one");
	    Mockito.verify(mockList).add("one");
	    assertEquals(0, mockList.size());
	 
	    Mockito.when(mockList.size()).thenReturn(100);
	    assertEquals(100, mockList.size());
	}

````

And now we'll do the same but we'll inject the mock using the @Mock annotation:

````
	@Mock
	List<String> mockedList;
	 
	@Test
	public void whenUseMockAnnotation_thenMockIsInjected() {
	    mockedList.add("one");
	    Mockito.verify(mockedList).add("one");
	    assertEquals(0, mockedList.size());
	 
	    Mockito.when(mockedList.size()).thenReturn(100);
	    assertEquals(100, mockedList.size());
	}

````

Note how – in both examples, we're interacting with the mock and verifying some of these interactions – just to make sure that the mock is behaving correctly.



## 6. @InjectMocks Annotation

Now – let's discuss how to use @InjectMocks annotation – to inject mock fields into the tested object automatically.

In the following example – we use @InjectMocks to inject the mock wordMap into the MyDictionary dic:

````
	@Mock
	Map<String, String> wordMap;
	 
	@InjectMocks
	MyDictionary dic = new MyDictionary();
	 
	@Test
	public void whenUseInjectMocksAnnotation_thenCorrect() {
	    Mockito.when(wordMap.get("aWord")).thenReturn("aMeaning");
	 
	    assertEquals("aMeaning", dic.getMeaning("aWord"));
	}
````

And here is the class MyDictionary:

````
	public class MyDictionary {
	    Map<String, String> wordMap;
	 
	    public MyDictionary() {
	        wordMap = new HashMap<String, String>();
	    }
	    public void add(final String word, final String meaning) {
	        wordMap.put(word, meaning);
	    }
	    public String getMeaning(final String word) {
	        return wordMap.get(word);
	    }
	}

````


