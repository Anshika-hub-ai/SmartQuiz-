document.addEventListener("DOMContentLoaded", () => {
  /* ---------- DATA: categories + subjects + question ---------- */
  const CATEGORIES = [
    { id: "cs", name: "Computer Science", subjects: [
      { id: "ai", name: "Artificial Intelligence" },
      { id: "python", name: "Python" },
      { id: "cpp", name: "C++" },
      { id: "web", name: "Web Designing" },
      { id: "iot", name: "IoT" }
    ]},
    { id: "math", name: "Mathematics", subjects: [
      { id: "algebra", name: "Algebra" },
      { id: "geometry", name: "Geometry" },
      { id: "calculus", name: "Calculus" },
      { id: "stats", name: "Statistics" },
      { id: "trig", name: "Trigonometry" }
    ]},
    { id: "sci", name: "Science", subjects: [
      { id: "physics", name: "Physics" },
      { id: "chem", name: "Chemistry" },
      { id: "bio", name: "Biology" },
      { id: "astro", name: "Astronomy" },
      { id: "env", name: "Environmental Science" }
    ]},
    { id: "soc", name: "Social Science", subjects: [
      { id: "history", name: "History" },
      { id: "geo", name: "Geography" },
      { id: "econ", name: "Economics" },
      { id: "civics", name: "Civics" },
      { id: "pol", name: "Politics" }
    ]},
    { id: "eng", name: "English", subjects: [
      { id: "grammar", name: "Grammar" },
      { id: "lit", name: "Literature" },
      { id: "writing", name: "Writing" },
      { id: "reading", name: "Reading Comp." },
      { id: "vocab", name: "Vocabulary" }
    ]}
  ];

  // QUESTION BANK 
  const QUESTIONS = {
    ai: {
      easy: [
        { q: "What does AI stand for?", options: ["Artificial Intelligence","Automated Input","Algorithmic Interaction", "Artificial Interaction"], a: "Artificial Intelligence" },
        { q: "Which language is most popular for AI?", options: ["C","HTML","Python","Java"], a: "Python" },
        { q: "Example of AI in daily life?", options: ["Television","Bicycles","Speakers","Smart Assistants"], a: "Smart Assistants" },
        { q: "AI has which branch?", options: ["Carpentry","Machine Learning","Painting","Writing"], a: "Machine Learning" },
        { q: "AI models learn from ___?", options: ["Data","Rocks","Weather","Teachers"], a: "Data" }
      ],
      moderate: [
        { q: "What is supervised learning?", options: ["Learning without labels","Learning with labeled data","Learning by trial","Learning from mistakes"], a: "Learning with labeled data" },
        { q: "Which is a common ML algorithm?", options: ["Linear Regression","Bubble Sort","DFS","Dijkstra"], a: "Linear Regression" },
        { q: "What is a neural network?", options: ["Network of computers","Internet protocol","Database system","Model inspired by brain"], a: "Model inspired by brain" },
        { q: "What is reinforcement learning?", options: ["Learning from books","Learning by watching","Learning via rewards","Learning with friends"], a: "Learning via rewards" },
        { q: "Which is a popular AI framework?", options: ["React","Django","Laravel","TensorFlow"], a: "TensorFlow" }
      ],
      difficult: [
        { q: "What is overfitting in ML?", options: ["Model fits training data too well","Model is too simple","Model runs slowly","Model ignores data"], a: "Model fits training data too well" },
        { q: "Which is a supervised learning algorithm?", options: ["K-Means","PCA","Decision Trees","Apriori"], a: "Decision Trees" },
        { q: "What does NLP stand for?", options: ["Natural Language Processing","Neural Learning Protocol","Networked Logic Programming","None of these"], a: "Natural Language Processing" },
        { q: "Which is a loss function?", options: ["Accuracy","Precision","Mean Squared Error","Recall"], a: "Mean Squared Error" },
        { q: "What is a confusion matrix?", options: ["Matrix of weights","Neural network layer","Table to evaluate classification","Data preprocessing step"], a: "Table to evaluate classification" }
      ],
    },

    python: {
      easy: [
        { q: "Which symbol starts a comment in Python?", options: ["//","#","/*"], a: "#" },
        { q: "How do you print in Python?", options: ["echo()","print()","cout"], a: "print()" },
        { q: "List literal uses which brackets?", options: ["{}","()","[]"], a: "[]" },
        { q: "Which keyword defines a function?", options: ["def","func","function"], a: "def" },
        { q: "Which operator is exponentiation?", options: ["^","**","exp()"], a: "**" }
      ],
      moderate: [
        { q: "What is a lambda function?", options: ["Named function","Class method","Anonymous function"], a: "Anonymous function" },
        { q: "Which module is for regular expressions?", options: ["re","regex","expr"], a: "re" },
        { q: "How to handle exceptions?", options: ["catch","try-except","error"], a: "try-except" },
        { q: "What does 'self' refer to?", options: ["Global variable","Instance of class","Function argument"], a: "Instance of class" },
        { q: "Which is a mutable type?", options: ["List","Tuple","String"], a: "List" }
      ],
      difficult: [
        { q: "What is a decorator?", options: ["Function that modifies another function","Type of variable","Built-in function"], a: "Function that modifies another function" },
        { q: "What is the purpose of __init__?", options: ["Create a new instance","Define a method","Initialize class attributes"], a: "Initialize class attributes" },
        { q: "What is a generator?", options: ["Type of variable","Function that returns an iterator","Built-in function"], a: "Function that returns an iterator" },
        { q: "Which method is called when an object is deleted?", options: ["__del__","__init__","__str__"], a: "__del__" },
        { q: "What does GIL stand for?", options: ["Global Interpreter Lock","General Input Language","Graphical Interface Library"], a: "Global Interpreter Lock" }
      ],
    },

    cpp: {
      easy: [
        { q: "Which symbol ends a statement?", options: ["}",".",";"] , a: ";" },
        { q: "Header for cout?", options: ["<iostream>","<stdio.h>","<string>"], a: "<iostream>" },
        { q: "int stands for?", options: ["Integer","Integration","Internal"], a: "Integer" },
        { q: "Address-of operator?", options: ["$","&","%"], a: "&" },
        { q: "Define constant with?", options: ["const","let","static"], a: "const" }
      ],
      moderate: [
        { q: "What is a reference?", options: ["Alias for variable","Pointer","Function"], a: "Alias for variable" },
        { q: "Which is a loop structure?", options: ["for","foreach","loop"], a: "for" },
        { q: "What is a constructor?", options: ["Special class method","Variable type","Loop"], a: "Special class method" },
        { q: "Which operator is for dynamic memory?", options: ["new","malloc","alloc"], a: "new" },
        { q: "What does STL stand for?", options: ["Standard Template Library","Simple Type List","Systematic Type Library"], a: "Standard Template Library" }
      ],
      difficult: [
        { q: "What is a copy constructor?", options: ["Creates a copy of an object","Initializes with another object","Default constructor"], a: "Initializes with another object" },
        { q: "What is RAII?", options: ["Resource Acquisition Is Initialization","Random Access In Information","Read After Write Inconsistency"], a: "Resource Acquisition Is Initialization" },
        { q: "What is a smart pointer?", options: ["Pointer with automatic memory management","Regular pointer","Pointer to a function"], a: "Pointer with automatic memory management" },
        { q: "What does 'virtual' keyword do?", options: ["Enables polymorphism","Declares a variable","Defines a function"], a: "Enables polymorphism" },
        { q: "What is name mangling?", options: ["Encoding function names","Obfuscating variable names","Encrypting code"], a: "Encoding function names" }
      ],
    },

    web: { 
        easy: [
        { q: "What does HTML stand for?", options: ["HyperText Markup Language","Home Tool Markup Language","Hyperlinks and Text Markup Language"], a: "HyperText Markup Language" },
        { q: "Which tag is for a paragraph?", options: ["<p>","<h1>","<div>"], a: "<p>" },
        { q: "CSS stands for?", options: ["Cascading Style Sheets","Computer Style Sheets","Creative Style System"], a: "Cascading Style Sheets" },
        { q: "Which property changes text color?", options: ["color","font-size","background"], a: "color" },
        { q: "Which tag links a CSS file?", options: ["<link>","<script>","<style>"], a: "<link>" }
        ],
        moderate: [
        { q: "What does DOM stand for?", options: ["Document Object Model","Data Object Model","Digital Object Management"], a: "Document Object Model" },
        { q: "Which HTML tag is for a clickable link?", options: ["<a>","<link>","<href>"], a: "<a>" },
        { q: "What is the box model in CSS?", options: ["Content, padding, border, margin","HTML structure","JavaScript function"], a: "Content, padding, border, margin" },
        { q: "Which CSS property controls layout?", options: ["display","position","float"], a: "display" },
        { q: "What does JS stand for?", options: ["JavaScript","JavaStyle","JustScript"], a: "JavaScript" }
        ], 
        difficult: [
        { q: "What is event delegation in JavaScript?", options: ["Handling events at a higher level","Directly attaching events","Using multiple event listeners"], a: "Handling events at a higher level" },
        { q: "What is a closure in JavaScript?", options: ["Function with preserved scope","Anonymous function","Function without parameters"], a: "Function with preserved scope" },
        { q: "Which CSS property is used for animations?", options: ["animation","transition","transform"], a: "animation" },
        { q: "What is the purpose of 'use strict' in JS?", options: ["Enables strict mode for better error checking","Declares a variable","Defines a function"], a: "Enables strict mode for better error checking" },
        { q: "What does AJAX stand for?", options: ["Asynchronous JavaScript and XML","Advanced JavaScript and XHTML","Applied Java and XML"], a: "Asynchronous JavaScript and XML" }
        ] 
    },

    iot: { 
        easy: [
        { q: "What does IoT stand for?", options: ["Internet of Things","Internet of Technology","Integrated of Things"], a: "Internet of Things" },
        { q: "Which device is commonly used in IoT?", options: ["Raspberry Pi","Desktop Computer","Smartphone"], a: "Raspberry Pi" },
        { q: "What is a common communication protocol in IoT?", options: ["MQTT","HTTP","FTP"], a: "MQTT" },
        { q: "Which sensor measures temperature?", options: ["Thermistor","Accelerometer","Gyroscope"], a: "Thermistor" },
        { q: "What is an actuator in IoT?", options: ["Device that performs actions","Sensor that detects changes","Communication module"], a: "Device that performs actions" }
        ], 
        moderate: [
        { q: "What is edge computing in IoT?", options: ["Processing data near the source","Cloud computing","Data storage"], a: "Processing data near the source" },
        { q: "Which protocol is used for low-power wide-area networks?", options: ["LoRaWAN","Wi-Fi","Bluetooth"], a: "LoRaWAN" },
        { q: "What is a digital twin in IoT?", options: ["Virtual replica of a physical object","Type of sensor","Communication protocol"], a: "Virtual replica of a physical object" },
        { q: "Which is a common IoT platform?", options: ["ThingSpeak","WordPress","Django"], a: "ThingSpeak" },
        { q: "What is the purpose of a gateway in IoT?", options: ["Connects devices to the internet","Stores data","Processes information"], a: "Connects devices to the internet" }
        ], 
        difficult: [
        { q: "What is the main challenge of IoT security?", options: ["Data privacy","High cost","Limited connectivity"], a: "Data privacy" },
        { q: "Which technology is used for device identification in IoT?", options: ["RFID","NFC","GPS"], a: "RFID" },
        { q: "What is the role of a microcontroller in IoT?", options: ["Controls device operations","Stores data","Processes information"], a: "Controls device operations" },
        { q: "Which is a common data format in IoT?", options: ["JSON","XML","CSV"], a: "JSON" },
        { q: "What is the purpose of a mesh network in IoT?", options: ["Improves connectivity and range","Stores data","Processes information"], a: "Improves connectivity and range" }
        ],
    },

    algebra: { 
        easy: [
        { q: "What is the value of x in 2x + 3 = 7?", options: ["2","1","3","4"], a: "2" },
        { q: "What is the coefficient of x in 5x - 4?", options: ["5","-4","1","0"], a: "5" },
        { q: "What is the solution to x^2 = 9?", options: ["3 and -3","3 only","-3 only","0"], a: "3 and -3" },
        { q: "What is the expression for 'the sum of a and b'?", options: ["a + b","a - b","a * b","a / b"], a: "a + b" },
        { q: "What is the value of 3(2 + x) when x = 4?", options: ["18","12","15","20"], a: "18" }
        ], 
        moderate: [
        { q: "What is the factorization of x^2 - 9?", options: ["(x - 3)(x + 3)","(x - 9)(x + 1)","(x - 1)(x + 9)","(x - 2)(x + 2)"], a: "(x - 3)(x + 3)" },
        { q: "What is the solution to the system: 2x + y = 5 and x - y = 1?", options: ["x=2, y=1","x=1, y=3","x=3, y=-1","x=0, y=5"], a: "x=2, y=1" },
        { q: "What is the quadratic formula?", options: ["(-b ± √(b²-4ac)) / 2a","(b ± √(b²+4ac)) / 2a","(-b ± √(b²+4ac)) / 2a","(b ± √(b²-4ac)) / 2a"], a: "(-b ± √(b²-4ac)) / 2a" },
        { q: "What is the value of x in 3x^2 - 12 = 0?", options: ["2 and -2","4 and -4","3 and -3","1 and -1"], a: "2 and -2" },
        { q: "What is the expression for 'the product of x and y'?", options: ["xy","x + y","x - y","x / y"], a: "xy" }
        ], 
        difficult: [
        { q: "What is the sum of the roots of the equation 2x^2 - 4x + 1 = 0?", options: ["2","-2","4","-4"], a: "2" },
        { q: "What is the value of x in the equation x^3 - 6x^2 + 11x - 6 = 0?", options: ["1, 2, and 3","2, 3, and 4","1, 3, and 5","2, 4, and 6"], a: "1, 2, and 3" },
        { q: "What is the expression for 'the difference of squares'?", options: ["a^2 - b^2 = (a - b)(a + b)","a^2 + b^2 = (a + b)(a - b)","a^2 - b^2 = (a + b)(a - b)","a^2 + b^2 = (a - b)(a + b)"], a: "a^2 - b^2 = (a - b)(a + b)" },
        { q: "What is the value of x in the equation 4x^2 + 4x + 1 = 0?", options: ["-1/2","1/2","-1","1"], a: "-1/2" },
        { q: "What is the expression for 'the sum of cubes'?", options: ["a^3 + b^3 = (a + b)(a^2 - ab + b^2)","a^3 - b^3 = (a - b)(a^2 + ab + b^2)","a^3 + b^3 = (a - b)(a^2 + ab + b^2)","a^3 - b^3 = (a + b)(a^2 - ab + b^2)"], a: "a^3 + b^3 = (a + b)(a^2 - ab + b^2)" }
        ],
    },

    geometry: { 
        easy: [
        { q: "How many sides does a triangle have?", options: ["3","4","5","6"], a: "3" },
        { q: "What is the sum of angles in a triangle?", options: ["180°","90°","360°","270°"], a: "180°" },
        { q: "What is the formula for the area of a rectangle?", options: ["length × width","2 × (length + width)","length + width","length - width"], a: "length × width" },
        { q: "What is the shape with all sides equal?", options: ["Square","Rectangle","Triangle","Circle"], a: "Square" },
        { q: "What is the radius of a circle?", options: ["Distance from center to edge","Diameter","Circumference","Area"], a: "Distance from center to edge" }
        ], 
        moderate: [
        { q: "What is the Pythagorean theorem?", options: ["a² + b² = c²","a² - b² = c²","2a + 2b = c","a + b = c"], a: "a² + b² = c²" },
        { q: "What is the formula for the area of a circle?", options: ["πr²","2πr","πd","r²"], a: "πr²" },
        { q: "What is the sum of interior angles in a quadrilateral?", options: ["360°","180°","270°","90°"], a: "360°" },
        { q: "What is the volume of a cube with side length s?", options: ["s³","6s²","s²","3s"], a: "s³" },
        { q: "What is the formula for the circumference of a circle?", options: ["2πr","πr²","πd","r²"], a: "2πr" }
        ], 
        difficult: [
        { q: "What is the formula for the area of a triangle?", options: ["1/2 × base × height","base × height","base + height","2 × (base + height)"], a: "1/2 × base × height" },
        { q: "What is the formula for the volume of a cylinder?", options: ["πr²h","2πrh","πr²","2πr"], a: "πr²h" },
        { q: "What is the sum of interior angles in a pentagon?", options: ["540°","360°","720°","180°"], a: "540°" },
        { q: "What is the formula for the surface area of a sphere?", options: ["4πr²","2πr²","πr²","πd"], a: "4πr²" },
        { q: "What is the formula for the volume of a cone?", options: ["1/3πr²h","πr²h","2πrh","πr²"], a: "1/3πr²h" }
        ],
    },

    calculus: { 
        easy: [
        { q: "What is the derivative of x^2?", options: ["2x","x","x^3","1"], a: "2x" },
        { q: "What is the integral of 2x?", options: ["x^2 + C","x + C","2x^2 + C","1"], a: "x^2 + C" },
        { q: "What is the limit of (x^2 - 1)/(x - 1) as x approaches 1?", options: ["2","1","0","Infinity"], a: "2" },
        { q: "What is the derivative of sin(x)?", options: ["cos(x)","-sin(x)","sin(x)","-cos(x)"], a: "cos(x)" },
        { q: "What is the integral of 1/x?", options: ["ln|x| + C","1/x + C","x + C","e^x + C"], a: "ln|x| + C" }
        ], 
        moderate: [
        { q: "What is the second derivative of x^3?", options: ["6x","3x^2","2x","x"], a: "6x" },
        { q: "What is the integral of x^2?", options: ["1/3x^3 + C","x^3 + C","2x^3 + C","1/2x^2 + C"], a: "1/3x^3 + C" },
        { q: "What is the limit of (sin(x))/x as x approaches 0?", options: ["1","0","Infinity","-1"], a: "1" },
        { q: "What is the derivative of e^x?", options: ["e^x","x","1","ln(x)"], a: "e^x" },
        { q: "What is the integral of cos(x)?", options: ["sin(x) + C","-sin(x) + C","cos(x) + C","-cos(x) + C"], a: "sin(x) + C" }
        ], 
        difficult: [
        { q: "What is the derivative of ln(x)?", options: ["1/x","x","ln(x)","e^x"], a: "1/x" },
        { q: "What is the integral of e^x?", options: ["e^x + C","x + C","1/x + C","ln(x) + C"], a: "e^x + C" },
        { q: "What is the limit of (1 + 1/n)^n as n approaches infinity?", options: ["e","1","Infinity","0"], a: "e" },
        { q: "What is the derivative of tan(x)?", options: ["sec^2(x)","cos^2(x)","sin^2(x)","-sec^2(x)"], a: "sec^2(x)" },
        { q: "What is the integral of sec^2(x)?", options: ["tan(x) + C","sec(x) + C","cos(x) + C","sin(x) + C"], a: "tan(x) + C" }
        ],
    },

    stats: { 
        easy: [
        { q: "What is the mean of 2, 4, 6?", options: ["4","3","5","6"], a: "4" },
        { q: "What is the median of 1, 3, 5?", options: ["3","1","5","4"], a: "3" },
        { q: "What is the mode of 2, 2, 3, 4?", options: ["2","3","4","None"], a: "2" },
        { q: "What is the range of 1, 5, 9?", options: ["8","4","5","9"], a: "8" },
        { q: "What is standard deviation?", options: ["Measure of data spread","Average value","Middle value","Most frequent value"], a: "Measure of data spread" }
        ],
        moderate: [
        { q: "What is variance?", options: ["Average of squared deviations","Square root of standard deviation","Middle value","Most frequent value"], a: "Average of squared deviations" },
        { q: "What is a normal distribution?", options: ["Bell-shaped curve","Uniform distribution","Skewed distribution","Bimodal distribution"], a: "Bell-shaped curve" },
        { q: "What is a p-value?", options: ["Probability of observing data given null hypothesis","Mean value","Median value","Mode value"], a: "Probability of observing data given null hypothesis" },
        { q: "What is correlation?", options: ["Measure of relationship between variables","Average value","Middle value","Most frequent value"], a: "Measure of relationship between variables" },
        { q: "What is a histogram?", options: ["Graph of data distribution","Line graph","Pie chart","Scatter plot"], a: "Graph of data distribution" }
        ], 
        difficult: [
        { q: "What is a t-test?", options: ["Statistical test comparing means","Test for variance","Test for correlation","Test for normality"], a: "Statistical test comparing means" },
        { q: "What is ANOVA?", options: ["Analysis of variance","Analysis of correlation","Analysis of regression","Analysis of distribution"], a: "Analysis of variance" },
        { q: "What is a chi-square test?", options: ["Test for independence","Test for means","Test for variance","Test for correlation"], a: "Test for independence" },
        { q: "What is regression analysis?", options: ["Modeling relationship between variables","Measuring central tendency","Measuring data spread","Testing hypotheses"], a: "Modeling relationship between variables" },
        { q: "What is a confidence interval?", options: ["Range of values likely to contain population parameter","Single value estimate","Most frequent value","Middle value"], a: "Range of values likely to contain population parameter" }
        ],
    },

    trig: { 
        easy: [
        { q: "What is sin(90°)?", options: ["1","0","0.5","-1"], a: "1" },
        { q: "What is cos(0°)?", options: ["1","0","0.5","-1"], a: "1" },
        { q: "What is tan(45°)?", options: ["1","0","√3","-1"], a: "1" },
        { q: "What is the hypotenuse in a right triangle?", options: ["Longest side","Shortest side","Middle side","None"], a: "Longest side" },
        { q: "What is the Pythagorean identity?", options: ["sin²θ + cos²θ = 1","tan²θ + 1 = sec²θ","1 + cot²θ = csc²θ","sinθ/cosθ = tanθ"], a: "sin²θ + cos²θ = 1" }
        ], 
        moderate: [
        { q: "What is the value of sin(30°)?", options: ["0.5","1","√3/2","0"], a: "0.5" },
        { q: "What is the value of cos(60°)?", options: ["0.5","1","√3/2","0"], a: "0.5" },
        { q: "What is the value of tan(45°)?", options: ["1","0","√3","-1"], a: "1" },
        { q: "What is the double-angle formula for sin(2θ)?", options: ["2sinθcosθ","sin²θ - cos²θ","1 - 2sin²θ","2tanθ/(1 - tan²θ)"], a: "2sinθcosθ" },
        { q: "What is the double-angle formula for cos(2θ)?", options: ["cos²θ - sin²θ","2sinθcosθ","1 - 2cos²θ","(1 - tan²θ)/(1 + tan²θ)"], a: "cos²θ - sin²θ" }
        ], 
        difficult: [
        { q: "What is the value of sin(120°)?", options: ["√3/2","1/2","-√3/2","-1/2"], a: "√3/2" },
        { q: "What is the value of cos(150°)?", options: ["-√3/2","-1/2","√3/2","1/2"], a: "-√3/2" },
        { q: "What is the value of tan(135°)?", options: ["-1","1","√3","-√3"], a: "-1" },
        { q: "What is the half-angle formula for sin(θ/2)?", options: ["±√((1 - cosθ)/2)","±√((1 + cosθ)/2)","±√((1 - sinθ)/2)","±√((1 + sinθ)/2)"], a: "±√((1 - cosθ)/2)" },
        { q: "What is the half-angle formula for cos(θ/2)?", options: ["±√((1 + cosθ)/2)","±√((1 - cosθ)/2)","±√((1 + sinθ)/2)","±√((1 - sinθ)/2)"], a: "±√((1 + cosθ)/2)" },
        ],
    },

    physics: { 
        easy: [
        { q: "What is the unit of force?", options: ["Newton","Joule","Watt","Pascal"], a: "Newton" },
        { q: "What is the speed of light?", options: ["3 x 10^8 m/s","3 x 10^6 m/s","3 x 10^5 m/s","3 x 10^7 m/s"], a: "3 x 10^8 m/s" },
        { q: "What is Newton's first law?", options: ["Law of inertia","Law of motion","Law of gravity","Law of energy"], a: "Law of inertia" },
        { q: "What is the formula for force?", options: ["F = ma","F = mv","F = m/a","F = m + a"], a: "F = ma" },
        { q: "What is the unit of energy?", options: ["Joule","Watt","Newton","Pascal"], a: "Joule" },
        ], 
        moderate: [
        { q: "What is the formula for kinetic energy?", options: ["KE = 1/2 mv²","KE = mv","KE = m/a","KE = m + v"], a: "KE = 1/2 mv²" },
        { q: "What is the formula for potential energy?", options: ["PE = mgh","PE = 1/2 mv²","PE = mv","PE = m/a"], a: "PE = mgh" },
        { q: "What is the unit of power?", options: ["Watt","Joule","Newton","Pascal"], a: "Watt" },
        { q: "What is Ohm's law?", options: ["V = IR","P = IV","E = mc²","F = ma"], a: "V = IR" },
        { q: "What is the unit of electric current?", options: ["Ampere","Volt","Ohm","Watt"], a: "Ampere" },
        ],
        difficult: [
        { q: "What is the formula for gravitational force?", options: ["F = G(m1m2)/r²","F = ma","F = mv","F = m/a"], a: "F = G(m1m2)/r²" },
        { q: "What is the unit of pressure?", options: ["Pascal","Newton","Joule","Watt"], a: "Pascal" },
        { q: "What is the formula for wave speed?", options: ["v = fλ","v = d/t","v = at","v = m/a"], a: "v = fλ" },
        { q: "What is the principle of conservation of energy?", options: ["Energy cannot be created or destroyed","Energy can be created","Energy can be destroyed","Energy is constant"], a: "Energy cannot be created or destroyed" },
        { q: "What is the unit of frequency?", options: ["Hertz","Watt","Joule","Newton"], a: "Hertz" },
        ],
    },

    chem: { 
        easy: [
        { q: "What is the chemical symbol for water?", options: ["H2O","CO2","O2","NaCl"], a: "H2O" },
        { q: "What is the atomic number of hydrogen?", options: ["1","2","3","4"], a: "1" },
        { q: "What is the pH of a neutral solution?", options: ["7","0","14","1"], a: "7" },
        { q: "What is the chemical formula for table salt?", options: ["NaCl","KCl","CaCl2","MgCl2"], a: "NaCl" },
        { q: "What is the process of converting a solid to a liquid?", options: ["Melting","Freezing","Condensation","Sublimation"], a: "Melting" }
        ], 
        moderate: [
        { q: "What is the molar mass of carbon?", options: ["12 g/mol","1 g/mol","16 g/mol","14 g/mol"], a: "12 g/mol" },
        { q: "What is the chemical symbol for gold?", options: ["Au","Ag","Fe","Pb"], a: "Au" },
        { q: "What is the process of converting a liquid to a gas?", options: ["Evaporation","Condensation","Freezing","Sublimation"], a: "Evaporation" },
        { q: "What is the main component of natural gas?", options: ["Methane","Ethane","Propane","Butane"], a: "Methane" },
        { q: "What is the chemical formula for glucose?", options: ["C6H12O6","C2H5OH","CH4","C12H22O11"], a: "C6H12O6" }
        ], 
        difficult: [
        { q: "What is the process of converting a gas to a solid?", options: ["Deposition","Sublimation","Condensation","Freezing"], a: "Deposition" },
        { q: "What is the chemical symbol for mercury?", options: ["Hg","Ag","Fe","Pb"], a: "Hg" },
        { q: "What is the process of converting a solid directly to a gas?", options: ["Sublimation","Deposition","Melting","Freezing"], a: "Sublimation" },
        { q: "What is the main component of air?", options: ["Nitrogen","Oxygen","Carbon Dioxide","Argon"], a: "Nitrogen" },
        { q: "What is the chemical formula for sulfuric acid?", options: ["H2SO4","HCl","HNO3","H2CO3"], a: "H2SO4" }
        ],
    },

    bio: { 
        easy: [
        { q: "What is the basic unit of life?", options: ["Cell","Atom","Molecule","Organ"], a: "Cell" },
        { q: "What is the process of photosynthesis?", options: ["Converting light energy to chemical energy","Breaking down food for energy","Reproducing cells","Transporting nutrients"], a: "Converting light energy to chemical energy" },
        { q: "What is DNA?", options: ["Genetic material","Protein","Carbohydrate","Lipid"], a: "Genetic material" },
        { q: "What is the powerhouse of the cell?", options: ["Mitochondria","Nucleus","Ribosome","Chloroplast"], a: "Mitochondria" },
        { q: "What is the process of cell division?", options: ["Mitosis","Meiosis","Photosynthesis","Respiration"], a: "Mitosis" }
        ], 
        moderate: [
        { q: "What is the function of ribosomes?", options: ["Protein synthesis","Energy production","Genetic material storage","Nutrient transport"], a: "Protein synthesis" },
        { q: "What is the process of cellular respiration?", options: ["Converting glucose to energy","Converting light energy to chemical energy","Reproducing cells","Transporting nutrients"], a: "Converting glucose to energy" },
        { q: "What is the function of the nucleus?", options: ["Control center of the cell","Energy production","Protein synthesis","Nutrient transport"], a: "Control center of the cell" },
        { q: "What is the process of meiosis?", options: ["Cell division for gamete production","Cell division for growth","Photosynthesis","Respiration"], a: "Cell division for gamete production" },
        { q: "What is the function of chloroplasts?", options: ["Photosynthesis","Energy production","Protein synthesis","Nutrient transport"], a: "Photosynthesis" }
        ], 
        difficult: [
        { q: "What is the function of the endoplasmic reticulum?", options: ["Protein and lipid synthesis","Energy production","Genetic material storage","Nutrient transport"], a: "Protein and lipid synthesis" },
        { q: "What is the process of transcription?", options: ["Copying DNA to RNA","Copying RNA to DNA","Protein synthesis","Cell division"], a: "Copying DNA to RNA" },
        { q: "What is the function of lysosomes?", options: ["Digesting cellular waste","Energy production","Protein synthesis","Nutrient transport"], a: "Digesting cellular waste" },
        { q: "What is the process of translation?", options: ["Converting RNA to protein","Converting DNA to RNA","Cell division","Photosynthesis"], a: "Converting RNA to protein" },
        { q: "What is the function of the Golgi apparatus?", options: ["Modifying and packaging proteins","Energy production","Genetic material storage","Nutrient transport"], a: "Modifying and packaging proteins" }
        ],
    },

    astro: { 
        easy: [
        { q: "What is the closest planet to the Sun?", options: ["Mercury","Venus","Earth","Mars"], a: "Mercury" },
        { q: "What is the largest planet in our solar system?", options: ["Jupiter","Saturn","Earth","Mars"], a: "Jupiter" },
        { q: "What is the name of our galaxy?", options: ["Milky Way","Andromeda","Triangulum","Whirlpool"], a: "Milky Way" },
        { q: "What is the main component of the Sun?", options: ["Hydrogen","Helium","Oxygen","Carbon"], a: "Hydrogen" },
        { q: "What is a light year?", options: ["Distance light travels in one year","Time taken by light to travel","Speed of light","Distance between stars"], a: "Distance light travels in one year" }
        ], 
        moderate: [
        { q: "What is the name of the first artificial satellite?", options: ["Sputnik 1","Apollo 11","Hubble","Voyager 1"], a: "Sputnik 1" },
        { q: "What is the name of the first human to walk on the Moon?", options: ["Neil Armstrong","Buzz Aldrin","Yuri Gagarin","John Glenn"], a: "Neil Armstrong" },
        { q: "What is the name of the largest moon of Saturn?", options: ["Titan","Europa","Ganymede","Callisto"], a: "Titan" },
        { q: "What is the name of the first space probe to leave the solar system?", options: ["Voyager 1","Pioneer 10","Hubble","Cassini"], a: "Voyager 1" },
        { q: "What is the name of the first space telescope?", options: ["Hubble","Chandra","Spitzer","Kepler"], a: "Hubble" },
        ], 
        difficult: [
        { q: "What is the name of the first exoplanet discovered?", options: ["51 Pegasi b","Kepler-22b","Proxima Centauri b","TRAPPIST-1e"], a: "51 Pegasi b" },
        { q: "What is the name of the first human to orbit the Earth?", options: ["Yuri Gagarin","Neil Armstrong","Buzz Aldrin","John Glenn"], a: "Yuri Gagarin" },
        { q: "What is the name of the largest volcano in the solar system?", options: ["Olympus Mons","Mauna Loa","Mount Everest","Vesuvius"], a: "Olympus Mons" },
        { q: "What is the name of the first spacecraft to land on Mars?", options: ["Viking 1","Curiosity","Opportunity","Spirit"], a: "Viking 1" },
        { q: "What is the name of the first spacecraft to fly by Pluto?", options: ["New Horizons","Voyager 1","Pioneer 10","Hubble"], a: "New Horizons" }
        ],
    },

    env: { 
        easy: [
        { q: "What is the main gas responsible for global warming?", options: ["Carbon Dioxide","Oxygen","Nitrogen","Methane"], a: "Carbon Dioxide" },
        { q: "What is the process of converting waste into reusable material?", options: ["Recycling","Composting","Landfilling","Incineration"], a: "Recycling" },
        { q: "What is the main source of energy for the Earth?", options: ["The Sun","The Moon","The Stars","The Wind"], a: "The Sun" },
        { q: "What is the process of water cycle?", options: ["Evaporation, Condensation, Precipitation","Photosynthesis, Respiration, Decomposition","Erosion, Sedimentation, Weathering","Pollination, Germination, Growth"], a: "Evaporation, Condensation, Precipitation" },
        { q: "What is the main cause of deforestation?", options: ["Logging","Reforestation","Afforestation","Conservation"], a: "Logging" },
        ], 
        moderate: [
        { q: "What is the main component of smog?", options: ["Ground-level Ozone","Carbon Monoxide","Sulfur Dioxide","Nitrogen Oxides"], a: "Ground-level Ozone" },
        { q: "What is the process of photosynthesis?", options: ["Conversion of light energy into chemical energy","Breakdown of glucose","Production of oxygen","Absorption of water"], a: "Conversion of light energy into chemical energy" },
        { q: "What is the main cause of acid rain?", options: ["Industrial pollution","Vehicle emissions","Natural disasters","Deforestation"], a: "Industrial pollution" },
        { q: "What is the greenhouse effect?", options: ["Trapping of heat in the atmosphere","Cooling of the Earth","Warming of the oceans","Melting of polar ice caps"], a: "Trapping of heat in the atmosphere" },
        { q: "What is the main source of freshwater?", options: ["Rivers","Lakes","Groundwater","Glaciers"], a: "Glaciers" }
        ], 
        difficult: [
        { q: "What is the main cause of ocean acidification?", options: ["Absorption of CO2 by seawater","Pollution from plastics","Overfishing","Oil spills"], a: "Absorption of CO2 by seawater" },
        { q: "What is the main cause of biodiversity loss?", options: ["Habitat destruction","Climate change","Pollution","Overexploitation"], a: "Habitat destruction" },
        { q: "What is the main source of renewable energy?", options: ["Solar power","Fossil fuels","Nuclear power","Hydropower"], a: "Solar power" },
        { q: "What is the main cause of soil erosion?", options: ["Deforestation","Overgrazing","Urbanization","Agriculture"], a: "Deforestation" },
        { q: "What is the main cause of climate change?", options: ["Human activities","Natural variability","Solar cycles","Volcanic eruptions"], a: "Human activities" }
        ],
    },

    history: { 
        easy: [
        { q: "Who was the first President of the United States?", options: ["George Washington","Thomas Jefferson","Abraham Lincoln","John Adams"], a: "George Washington" },
        { q: "In which year did World War II end?", options: ["1945","1939","1918","1965"], a: "1945" },
        { q: "What ancient civilization built the pyramids?", options: ["Egyptians","Romans","Greeks","Mayans"], a: "Egyptians" },
        { q: "Who was known as the 'Maid of Orléans'?", options: ["Joan of Arc","Marie Antoinette","Catherine the Great","Queen Elizabeth I"], a: "Joan of Arc" },
        { q: "What was the name of the ship that brought the Pilgrims to America in 1620?", options: ["Mayflower","Santa Maria","Endeavour","Beagle"], a: "Mayflower" }
        ], 
        moderate: [
        { q: "Who was the leader of the Soviet Union during World War II?", options: ["Joseph Stalin","Vladimir Lenin","Nikita Khrushchev","Leon Trotsky"], a: "Joseph Stalin" },
        { q: "What was the main cause of the American Civil War?", options: ["Slavery","Taxation","Territorial expansion","States' rights"], a: "Slavery" },
        { q: "Who was the first emperor of China?", options: ["Qin Shi Huang","Liu Bang","Han Wudi","Tang Taizong"], a: "Qin Shi Huang" },
        { q: "What was the name of the treaty that ended World War I?", options: ["Treaty of Versailles","Treaty of Tordesillas","Treaty of Paris","Treaty of Ghent"], a: "Treaty of Versailles" },
        { q: "Who was the leader of the Indian independence movement?", options: ["Mahatma Gandhi","Jawaharlal Nehru","Subhas Chandra Bose","Bhagat Singh"], a: "Mahatma Gandhi" }
        ], 
        difficult: [
        { q: "What was the name of the first successful English colony in America?", options: ["Jamestown","Plymouth","Roanoke","St. Augustine"], a: "Jamestown" },
        { q: "Who was the leader of the Haitian Revolution?", options: ["Toussaint Louverture","Jean-Jacques Dessalines","Henri Christophe","Alexandre Pétion"], a: "Toussaint Louverture" },
        { q: "What was the main cause of the French Revolution?", options: ["Social inequality","Religious conflict","Foreign invasion","Economic prosperity"], a: "Social inequality" },
        { q: "Who was the first female Prime Minister of the United Kingdom?", options: ["Margaret Thatcher","Theresa May","Angela Merkel","Indira Gandhi"], a: "Margaret Thatcher" },
        { q: "What was the name of the first successful human spaceflight?", options: ["Vostok 1","Apollo 11","Mercury-Redstone 3","Gemini 4"], a: "Vostok 1" }
        ],
    },

    geo: { 
        easy: [
        { q: "What is the largest continent on Earth?", options: ["Asia","Africa","Europe","North America"], a: "Asia" },
        { q: "What is the longest river in the world?", options: ["Nile","Amazon","Yangtze","Mississippi"], a: "Nile" },
        { q: "What is the capital of France?", options: ["Paris","London","Berlin","Madrid"], a: "Paris" },
        { q: "What is the highest mountain in the world?", options: ["Mount Everest","K2","Kangchenjunga","Lhotse"], a: "Mount Everest" },
        { q: "What is the largest ocean on Earth?", options: ["Pacific Ocean","Atlantic Ocean","Indian Ocean","Arctic Ocean"], a: "Pacific Ocean" }
        ], 
        moderate: [
        { q: "What is the smallest country in the world?", options: ["Vatican City","Monaco","Nauru","Tuvalu"], a: "Vatican City" },
        { q: "What is the capital of Australia?", options: ["Canberra","Sydney","Melbourne","Brisbane"], a: "Canberra" },
        { q: "What is the largest desert in the world?", options: ["Sahara","Gobi","Kalahari","Arabian"], a: "Sahara" },
        { q: "What is the longest river in Asia?", options: ["Yangtze","Yellow River","Mekong","Ganges"], a: "Yangtze" },
        { q: "What is the capital of Canada?", options: ["Ottawa","Toronto","Vancouver","Montreal"], a: "Ottawa" }
        ], 
        difficult: [
        { q: "What is the deepest point in the world's oceans?", options: ["Mariana Trench","Tonga Trench","Java Trench","Puerto Rico Trench"], a: "Mariana Trench" },
        { q: "What is the capital of Mongolia?", options: ["Ulaanbaatar","Astana","Tashkent","Bishkek"], a: "Ulaanbaatar" },
        { q: "What is the largest island in the world?", options: ["Greenland","New Guinea","Borneo","Madagascar"], a: "Greenland" },
        { q: "What is the longest river in Europe?", options: ["Volga","Danube","Dnieper","Rhine"], a: "Volga" },
        { q: "What is the capital of Ethiopia?", options: ["Addis Ababa","Nairobi","Kampala","Khartoum"], a: "Addis Ababa" }
        ] 
    },

    econ: { 
        easy: [
        { q: "What is the basic economic problem?", options: ["Scarcity of resources","Inflation","Unemployment","Trade deficit"], a: "Scarcity of resources" },
        { q: "What is GDP?", options: ["Gross Domestic Product","Gross Domestic Price","Global Development Plan","General Debt Payment"], a: "Gross Domestic Product" },
        { q: "What is inflation?", options: ["Increase in prices","Decrease in prices","Stable prices","Fluctuating prices"], a: "Increase in prices" },
        { q: "What is a market economy?", options: ["Economy based on supply and demand","Economy controlled by government","Economy based on barter system","Economy based on tradition"], a: "Economy based on supply and demand" },
        { q: "What is opportunity cost?", options: ["Value of the next best alternative","Cost of production","Cost of goods sold","Cost of living"], a: "Value of the next best alternative" }
        ], 
        moderate: [
        { q: "What is fiscal policy?", options: ["Government policy on taxation and spending","Monetary policy","Trade policy","Labor policy"], a: "Government policy on taxation and spending" },
        { q: "What is monetary policy?", options: ["Central bank policy on money supply and interest rates","Fiscal policy","Trade policy","Labor policy"], a: "Central bank policy on money supply and interest rates" },
        { q: "What is a trade deficit?", options: ["When imports exceed exports","When exports exceed imports","When government spending exceeds revenue","When revenue exceeds government spending"], a: "When imports exceed exports" },
        { q: "What is the law of supply and demand?", options: ["Price of a good rises when demand exceeds supply","Price of a good falls when demand exceeds supply","Price of a good remains stable when demand exceeds supply","Price of a good fluctuates when demand exceeds supply"], a: "Price of a good rises when demand exceeds supply" },
        { q: "What is a recession?", options: ["Period of economic decline","Period of economic growth","Period of stable economy","Period of high inflation"], a: "Period of economic decline" },
        ], 
        difficult: [
        { q: "What is the Phillips curve?", options: ["Inverse relationship between inflation and unemployment","Direct relationship between inflation and unemployment","No relationship between inflation and unemployment","Fluctuating relationship between inflation and unemployment"], a: "Inverse relationship between inflation and unemployment" },
        { q: "What is the Laffer curve?", options: ["Relationship between tax rates and tax revenue","Relationship between government spending and economic growth","Relationship between inflation and unemployment","Relationship between supply and demand"], a: "Relationship between tax rates and tax revenue" },
        { q: "What is the difference between nominal and real GDP?", options: ["Nominal GDP is not adjusted for inflation, real GDP is adjusted for inflation","Nominal GDP is adjusted for inflation, real GDP is not adjusted for inflation","Nominal GDP includes only goods, real GDP includes goods and services","Nominal GDP includes only services, real GDP includes goods and services"], a: "Nominal GDP is not adjusted for inflation, real GDP is adjusted for inflation" },
        { q: "What is the difference between microeconomics and macroeconomics?", options: ["Microeconomics studies individual markets, macroeconomics studies the economy as a whole","Microeconomics studies the economy as a whole, macroeconomics studies individual markets","Microeconomics studies government policy, macroeconomics studies business behavior","Microeconomics studies business behavior, macroeconomics studies government policy"], a: "Microeconomics studies individual markets, macroeconomics studies the economy as a whole" },
        { q: "What is the difference between a tariff and a quota?", options: ["A tariff is a tax on imports, a quota is a limit on imports","A tariff is a limit on imports, a quota is a tax on imports","A tariff is a tax on exports, a quota is a limit on exports","A tariff is a limit on exports, a quota is a tax on exports"], a: "A tariff is a tax on imports, a quota is a limit on imports" }
        ],
    },

    civics: { 
        easy: [
        { q: "What is the supreme law of India?", options: ["The Constitution of India","The Indian Penal Code","The Indian Contract Act","The Companies Act"], a: "The Constitution of India" },
        { q: "Who is the head of state in India?", options: ["The President","The Prime Minister","The Chief Justice","The Speaker of the Lok Sabha"], a: "The President" },
        { q: "What is the lower house of the Indian Parliament?", options: ["Lok Sabha","Rajya Sabha","Vidhan Sabha","Vidhan Parishad"], a: "Lok Sabha" },
        { q: "What is the term of office for the President of India?", options: ["5 years","6 years","4 years","3 years"], a: "5 years" },
        { q: "What is the highest judicial body in India?", options: ["The Supreme Court","The High Court","The District Court","The Lok Adalat"], a: "The Supreme Court" }
        ],
        moderate: [
        { q: "Who is the head of government in India?", options: ["The Prime Minister","The President","The Chief Justice","The Speaker of the Lok Sabha"], a: "The Prime Minister" },
        { q: "What is the upper house of the Indian Parliament?", options: ["Rajya Sabha","Lok Sabha","Vidhan Sabha","Vidhan Parishad"], a: "Rajya Sabha" },
        { q: "What is the term of office for the members of the Lok Sabha?", options: ["5 years","6 years","4 years","3 years"], a: "5 years" },
        { q: "What is the term of office for the members of the Rajya Sabha?", options: ["6 years","5 years","4 years","3 years"], a: "6 years" },
        { q: "What is the role of the Election Commission of India?", options: ["Conducting free and fair elections","Making laws","Enforcing laws","Interpreting laws"], a: "Conducting free and fair elections" }
        ],
        difficult: [
        { q: "What is the process for amending the Constitution of India?", options: ["Simple majority","Special majority","Unanimous consent","No amendment process"], a: "Special majority" },
        { q: "What is the basic structure doctrine?", options: ["The Constitution can be amended","The Constitution cannot be amended","The Constitution can be interpreted","The Constitution is supreme"], a: "The Constitution cannot be amended" },
        { q: "What is the role of the Comptroller and Auditor General of India?", options: ["Auditing government accounts","Making laws","Enforcing laws","Interpreting laws"], a: "Auditing government accounts" },
        { q: "What is the role of the Finance Commission of India?", options: ["Distributing financial resources between the central and state governments","Making laws","Enforcing laws","Interpreting laws"], a: "Distributing financial resources between the central and state governments" },
        { q: "What is the role of the Planning Commission of India?", options: ["Formulating five-year plans for economic development","Making laws","Enforcing laws","Interpreting laws"], a: "Formulating five-year plans for economic development" }
        ],
    },

    pol: { 
        easy: [
        { q: "What is the capital of India?", options: ["New Delhi","Mumbai","Kolkata","Chennai"], a: "New Delhi" },
        { q: "Who is the current Prime Minister of India?", options: ["Narendra Modi","Rahul Gandhi","Amit Shah","Arvind Kejriwal"], a: "Narendra Modi" },
        { q: "What is the national flower of India?", options: ["Lotus","Rose","Sunflower","Jasmine"], a: "Lotus" },
        { q: "What is the national animal of India?", options: ["Tiger","Lion","Elephant","Peacock"], a: "Tiger" },
        { q: "What is the national bird of India?", options: ["Peacock","Eagle","Parrot","Sparrow"], a: "Peacock" }
        ], 
        moderate: [
        { q: "What is the national fruit of India?", options: ["Mango","Banana","Apple","Orange"], a: "Mango" },
        { q: "What is the national tree of India?", options: ["Banyan","Peepal","Neem","Mango"], a: "Banyan" },
        { q: "What is the national river of India?", options: ["Ganga","Yamuna","Brahmaputra","Godavari"], a: "Ganga" },
        { q: "What is the national currency of India?", options: ["Indian Rupee","US Dollar","Euro","British Pound"], a: "Indian Rupee" },
        { q: "What is the national sport of India?", options: ["Hockey","Cricket","Football","Badminton"], a: "Hockey" }
        ], 
        difficult: [
        { q: "What is the national anthem of India?", options: ["Jana Gana Mana","Vande Mataram","Saare Jahan Se Achha","Maa Tujhe Salaam"], a: "Jana Gana Mana" },
        { q: "What is the national song of India?", options: ["Vande Mataram","Jana Gana Mana","Saare Jahan Se Achha","Maa Tujhe Salaam"], a: "Vande Mataram" },
        { q: "What is the national emblem of India?", options: ["Lion Capital of Ashoka","Tiger","Elephant","Peacock"], a: "Lion Capital of Ashoka" },
        { q: "What is the national motto of India?", options: ["Satyameva Jayate","Vasudhaiva Kutumbakam","Unity in Diversity","Truth Alone Triumphs"], a: "Satyameva Jayate" },
        { q: "What is the national calendar of India?", options: ["Saka Calendar","Gregorian Calendar","Hijri Calendar","Bikrami Calendar"], a: "Saka Calendar" }
        ],
    },

    grammar: { 
        easy: [
        { q: "Choose the correct form: She ___ to the store.", options: ["goes","go","going","gone"], a: "goes" },
        { q: "Choose the correct form: They ___ playing soccer.", options: ["are","is","am","be"], a: "are" },
        { q: "Choose the correct form: He ___ a book.", options: ["reads","read","reading","readed"], a: "reads" },
        { q: "Choose the correct form: We ___ happy.", options: ["are","is","am","be"], a: "are" },
        { q: "Choose the correct form: I ___ a car.", options: ["have","has","having","haved"], a: "have" }
        ], 
        moderate: [
        { q: "Choose the correct form: She ___ to the store yesterday.", options: ["went","goes","going","gone"], a: "went" },
        { q: "Choose the correct form: They ___ been playing soccer for an hour.", options: ["have","has","having","haved"], a: "have" },
        { q: "Choose the correct form: He ___ a book every week.", options: ["reads","read","reading","readed"], a: "reads" },
        { q: "Choose the correct form: We ___ happy to help.", options: ["are","is","am","be"], a: "are" },
        { q: "Choose the correct form: I ___ a car last year.", options: ["had","have","having","haved"], a: "had" }
        ], 
        difficult: [
        { q: "Choose the correct form: She ___ to the store if she had time.", options: ["would go","goes","going","gone"], a: "would go" },
        { q: "Choose the correct form: They ___ been playing soccer for two hours by the time we arrived.", options: ["had","have","having","haved"], a: "had" },
        { q: "Choose the correct form: He ___ a book every week for the past year.", options: ["has been reading","reads","reading","readed"], a: "has been reading" },
        { q: "Choose the correct form: We ___ happy to help if you need us.", options: ["will be","are","am","be"], a: "will be" },
        { q: "Choose the correct form: I ___ a car if I had enough money.", options: ["would have","have","having","haved"], a: "would have" }
        ],
    },
    lit: { 
        easy: [
        { q: "Who wrote 'Romeo and Juliet'?", options: ["William Shakespeare","Charles Dickens","Mark Twain","Jane Austen"], a: "William Shakespeare" },
        { q: "What is the main theme of 'To Kill a Mockingbird'?", options: ["Racial injustice","Love","Adventure","Friendship"], a: "Racial injustice" },
        { q: "Who is the protagonist in 'The Great Gatsby'?", options: ["Jay Gatsby","Nick Carraway","Tom Buchanan","Daisy Buchanan"], a: "Jay Gatsby" },
        { q: "What is the setting of '1984'?", options: ["Dystopian future","Medieval times","Ancient Rome","Modern day"], a: "Dystopian future" },
        { q: "Who wrote 'Pride and Prejudice'?", options: ["Jane Austen","Charlotte Brontë","Emily Brontë","Mary Shelley"], a: "Jane Austen" }
        ], 
        moderate: [
        { q: "What is the main theme of 'The Catcher in the Rye'?", options: ["Alienation","Love","Adventure","Friendship"], a: "Alienation" },
        { q: "Who is the author of 'The Catcher in the Rye'?", options: ["J.D. Salinger","Ernest Hemingway","F. Scott Fitzgerald","Mark Twain"], a: "J.D. Salinger" },
        { q: "What is the setting of 'Brave New World'?", options: ["Dystopian future","Medieval times","Ancient Rome","Modern day"], a: "Dystopian future" },
        { q: "Who wrote 'Moby Dick'?", options: ["Herman Melville","Mark Twain","F. Scott Fitzgerald","Ernest Hemingway"], a: "Herman Melville" },
        { q: "What is the main theme of 'Fahrenheit 451'?", options: ["Censorship","Love","Adventure","Friendship"], a: "Censorship" },
        ], 
        difficult: [
        { q: "What is the main theme of 'The Bell Jar'?", options: ["Mental illness","Love","Adventure","Friendship"], a: "Mental illness" },
        { q: "Who is the author of 'One Hundred Years of Solitude'?", options: ["Gabriel García Márquez","Julio Cortázar","Mario Vargas Llosa","Isabel Allende"], a: "Gabriel García Márquez" },
        { q: "What is the setting of 'The Road'?", options: ["Post-apocalyptic","Medieval times","Ancient Rome","Modern day"], a: "Post-apocalyptic" },
        { q: "Who wrote 'The Brothers Karamazov'?", options: ["Fyodor Dostoevsky","Leo Tolstoy","Anton Chekhov","Nikolai Gogol"], a: "Fyodor Dostoevsky" },
        { q: "What is the main theme of 'The Handmaid's Tale'?", options: ["Totalitarianism","Love","Adventure","Friendship"], a: "Totalitarianism" }
        ]
    },
    writing: { 
        easy: [
        { q: "What is the purpose of a thesis statement?", options: ["To state the main idea of an essay","To provide background information","To summarize the essay","To introduce the topic"], a: "To state the main idea of an essay" },
        { q: "What is the correct order of a five-paragraph essay?", options: ["Introduction, Body, Conclusion","Body, Introduction, Conclusion","Conclusion, Body, Introduction","Introduction, Conclusion, Body"], a: "Introduction, Body, Conclusion" },
        { q: "What is a topic sentence?", options: ["A sentence that states the main idea of a paragraph","A sentence that provides background information","A sentence that summarizes the paragraph","A sentence that introduces the topic"], a: "A sentence that states the main idea of a paragraph" },
        { q: "What is the purpose of a conclusion?", options: ["To summarize the main points and restate the thesis","To introduce new information","To provide background information","To state the main idea"], a: "To summarize the main points and restate the thesis" },
        { q: "What is the difference between a simile and a metaphor?", options: ["A simile uses 'like' or 'as', a metaphor does not","A metaphor uses 'like' or 'as', a simile does not","Both are the same","Neither are used in writing"], a: "A simile uses 'like' or 'as', a metaphor does not" },
        ], 
        moderate: [
        { q: "What is the purpose of an outline?", options: ["To organize ideas before writing","To provide background information","To summarize the essay","To introduce the topic"], a: "To organize ideas before writing" },
        { q: "What is the difference between active and passive voice?", options: ["Active voice has the subject performing the action, passive voice has the subject receiving the action","Passive voice has the subject performing the action, active voice has the subject receiving the action","Both are the same","Neither are used in writing"], a: "Active voice has the subject performing the action, passive voice has the subject receiving the action" },
        { q: "What is a hook in an introduction?", options: ["A sentence that grabs the reader's attention","A sentence that provides background information","A sentence that summarizes the essay","A sentence that states the main idea"], a: "A sentence that grabs the reader's attention" },
        { q: "What is the purpose of transitions in writing?", options: ["To connect ideas and improve flow","To provide background information","To summarize the essay","To introduce new information"], a: "To connect ideas and improve flow" },
        { q: "What is the difference between connotation and denotation?", options: ["Connotation is the emotional meaning, denotation is the literal meaning","Denotation is the emotional meaning, connotation is the literal meaning","Both are the same","Neither are used in writing"], a: "Connotation is the emotional meaning, denotation is the literal meaning" }
        ], 
        difficult: [
        { q: "What is the purpose of a counterargument in an essay?", options: ["To address opposing viewpoints and strengthen the argument","To provide background information","To summarize the essay","To introduce new information"], a: "To address opposing viewpoints and strengthen the argument" },
        { q: "What is the difference between a primary and secondary source?", options: ["A primary source is an original document, a secondary source interprets or analyzes primary sources","A secondary source is an original document, a primary source interprets or analyzes secondary sources","Both are the same","Neither are used in writing"], a: "A primary source is an original document, a secondary source interprets or analyzes primary sources" },
        { q: "What is the purpose of a literature review?", options: ["To summarize and evaluate existing research on a topic","To provide background information","To state the main idea","To introduce new information"], a: "To summarize and evaluate existing research on a topic" },
        { q: "What is the difference between paraphrasing and quoting?", options: ["Paraphrasing restates information in your own words, quoting uses the exact words","Quoting restates information in your own words, paraphrasing uses the exact words","Both are the same","Neither are used in writing"], a: "Paraphrasing restates information in your own words, quoting uses the exact words" },
        { q: "What is the purpose of a bibliography?", options: ["To list sources used in research","To provide background information","To summarize the essay","To introduce new information"], a: "To list sources used in research" }
        ] 
    },
    reading: { 
        easy: [
        { q: "What is the main idea of a passage?", options: ["The central point or message","The supporting details","The author's opinion","The conclusion"], a: "The central point or message" },
        { q: "What is a fact?", options: ["A statement that can be proven true","An opinion","A prediction","A suggestion"], a: "A statement that can be proven true" },
        { q: "What is an inference?", options: ["A conclusion drawn from evidence and reasoning","A fact","An opinion","A prediction"], a: "A conclusion drawn from evidence and reasoning" },
        { q: "What is the purpose of a summary?", options: ["To provide a brief overview of the main points","To provide background information","To state the main idea","To introduce new information"], a: "To provide a brief overview of the main points" },
        { q: "What is the difference between fiction and non-fiction?", options: ["Fiction is made-up stories, non-fiction is based on facts","Non-fiction is made-up stories, fiction is based on facts","Both are the same","Neither are used in reading"], a: "Fiction is made-up stories, non-fiction is based on facts" },
        ], 
        moderate: [
        { q: "What is the purpose of a theme in literature?", options: ["To convey a central message or insight","To provide background information","To state the main idea","To introduce new information"], a: "To convey a central message or insight" },
        { q: "What is the difference between a simile and a metaphor?", options: ["A simile uses 'like' or 'as', a metaphor does not","A metaphor uses 'like' or 'as', a simile does not","Both are the same","Neither are used in reading"], a: "A simile uses 'like' or 'as', a metaphor does not" },
        { q: "What is the purpose of foreshadowing in a story?", options: ["To hint at future events","To provide background information","To state the main idea","To introduce new information"], a: "To hint at future events" },
        { q: "What is the difference between first-person and third-person narration?", options: ["First-person uses 'I', third-person uses 'he/she/they'","Third-person uses 'I', first-person uses 'he/she/they'","Both are the same","Neither are used in reading"], a: "First-person uses 'I', third-person uses 'he/she/they'" },
        { q: "What is the purpose of an allegory in literature?", options: ["To convey a deeper meaning through symbolism","To provide background information","To state the main idea","To introduce new information"], a: "To convey a deeper meaning through symbolism" }
        ],
        difficult: [
        { q: "What is the purpose of irony in literature?", options: ["To convey a meaning opposite to the literal meaning","To provide background information","To state the main idea","To introduce new information"], a: "To convey a meaning opposite to the literal meaning" },
        { q: "What is the difference between a round character and a flat character?", options: ["A round character is complex and multi-dimensional, a flat character is simple and one-dimensional","A flat character is complex and multi-dimensional, a round character is simple and one-dimensional","Both are the same","Neither are used in reading"], a: "A round character is complex and multi-dimensional, a flat character is simple and one-dimensional" },
        { q: "What is the purpose of a motif in literature?", options: ["To reinforce a theme through repetition","To provide background information","To state the main idea","To introduce new information"], a: "To reinforce a theme through repetition" },
        { q: "What is the difference between denotation and connotation?", options: ["Denotation is the literal meaning, connotation is the emotional meaning","Connotation is the literal meaning, denotation is the emotional meaning","Both are the same","Neither are used in reading"], a: "Denotation is the literal meaning, connotation is the emotional meaning" },
        { q: "What is the purpose of a paradox in literature?", options: ["To present a seemingly contradictory statement that reveals a deeper truth","To provide background information","To state the main idea","To introduce new information"], a: "To present a seemingly contradictory statement that reveals a deeper truth" }
        ]
    },
    vocab: { 
        easy: [
        { q: "What is a synonym for 'happy'?", options: ["Joyful","Sad","Angry","Tired"], a: "Joyful" },
        { q: "What is an antonym for 'big'?", options: ["Small","Large","Huge","Gigantic"], a: "Small" },
        { q: "What is the meaning of 'benevolent'?", options: ["Kind and generous","Evil and cruel","Lazy and unmotivated","Angry and aggressive"], a: "Kind and generous" },
        { q: "What is the meaning of 'ambiguous'?", options: ["Unclear or open to interpretation","Clear and definite","Simple and straightforward","Complex and complicated"], a: "Unclear or open to interpretation" },
        { q: "What is a homophone for 'flower'?", options: ["Flour","Power","Tower","Hour"], a: "Flour" }
        ], 
        moderate: [
        { q: "What is a synonym for 'difficult'?", options: ["Challenging","Easy","Simple","Straightforward"], a: "Challenging" },
        { q: "What is an antonym for 'ancient'?", options: ["Modern","Old","Historic","Antique"], a: "Modern" },
        { q: "What is the meaning of 'candid'?", options: ["Truthful and straightforward","Deceptive and dishonest","Reserved and shy","Aggressive and confrontational"], a: "Truthful and straightforward" },
        { q: "What is the meaning of 'ephemeral'?", options: ["Lasting for a very short time","Permanent and lasting","Eternal and timeless","Endless and infinite"], a: "Lasting for a very short time" },
        { q: "What is a homophone for 'sea'?", options: ["See","Bee","Tree","Free"], a: "See" }
        ], 
        difficult: [
        { q: "What is a synonym for 'obfuscate'?", options: ["Confuse","Clarify","Simplify","Explain"], a: "Confuse" },
        { q: "What is an antonym for 'loquacious'?", options: ["Taciturn","Talkative","Chatty","Garrulous"], a: "Taciturn" },
        { q: "What is the meaning of 'perfunctory'?", options: ["Done without care or interest","Done with great care and attention","Done with enthusiasm and passion","Done with reluctance and hesitation"], a: "Done without care or interest" },
        { q: "What is the meaning of 'sesquipedalian'?", options: ["Given to using long words","Given to using short words","Given to using slang","Given to using jargon"], a: "Given to using long words" },
        { q: "What is a homophone for 'knight'?", options: ["Night","Light","Right","Sight"], a: "Night" } 
        ] 
    },
  };

  const MULTIPLIER = { easy: 1, moderate: 1.5, difficult: 2 };

  /* ---------- STATE ---------- */
  let state = {
    categoryId: null,
    subjectId: null,
    level: "easy",
    questionIndex: 0,
    scoreCount: 0,
    points: 0,
    timeLeft: 30,
    timer: null,
    tickTimer: null
  };

  /* ---------- DOM ---------- */
  const el = {
    categories: document.getElementById("categories"),
    subjects: document.getElementById("subjects"),
    subjectsTitle: document.getElementById("subjectsTitle"),
    screenCategories: document.getElementById("screen-categories"),
    screenSubjects: document.getElementById("screen-subjects"),
    screenLevels: document.getElementById("screen-levels"),
    screenQuiz: document.getElementById("screen-quiz"),
    screenResult: document.getElementById("screen-result"),
    quizSubjectLabel: document.getElementById("quizSubjectLabel"),
    quizLevelLabel: document.getElementById("quizLevelLabel"),
    progressLabel: document.getElementById("progressLabel"),
    timerVal: document.getElementById("timerVal"),
    timeFill: document.getElementById("timeFill"),
    questionText: document.getElementById("questionText"),
    optionsWrap: document.getElementById("optionsWrap"),
    nextBtn: document.getElementById("nextBtn"),
    quitBtn: document.getElementById("quitBtn"),
    resultSummary: document.getElementById("resultSummary"),
    retryBtn: document.getElementById("retryBtn"),
    backHomeBtn: document.getElementById("backHomeBtn"),
    historyBtn: document.getElementById("historyBtn"),
    historyPanel: document.getElementById("historyPanel"),
    closeHistory: document.getElementById("closeHistory"),
    clearHistory: document.getElementById("clearHistory"),
    historyList: document.getElementById("historyList"),
    historyFilter: document.getElementById("historyFilter"),
    themeToggle: document.getElementById("themeToggle"),
    soundCorrect: document.getElementById("sound-correct"),
    soundWrong: document.getElementById("sound-wrong"),
    soundTimesup: document.getElementById("sound-timesup"),
    soundTick: document.getElementById("sound-tick")
  };

  /* ---------- RENDERING ---------- */
  function renderCategories() {
    el.categories.innerHTML = "";
    CATEGORIES.forEach(cat => {
      const d = document.createElement("div");
      d.className = "category-card";
      d.textContent = cat.name;
      d.addEventListener("click", () => openSubjects(cat));
      el.categories.appendChild(d);
    });
  }

  function openSubjects(cat) {
    state.categoryId = cat.id;
    el.subjectsTitle.textContent = cat.name;
    el.subjects.innerHTML = "";
    cat.subjects.forEach(s => {
      const d = document.createElement("div");
      d.className = "subject-card";
      d.textContent = s.name;
      d.addEventListener("click", () => openLevels(s));
      el.subjects.appendChild(d);
    });
    showScreen("subjects");
  }

  function showScreen(which) {
    document.querySelectorAll(".screen").forEach(s => s.classList.add("hidden"));
    if (which === "categories") el.screenCategories.classList.remove("hidden");
    if (which === "subjects") el.screenSubjects.classList.remove("hidden");
    if (which === "levels") el.screenLevels.classList.remove("hidden");
    if (which === "quiz") el.screenQuiz.classList.remove("hidden");
    if (which === "result") el.screenResult.classList.remove("hidden");
  }

  function openLevels(subject) {
    state.subjectId = subject.id;
    showScreen("levels");
    document.querySelectorAll(".level-card").forEach(card => {
      card.onclick = () => startQuiz(card.dataset.level);
    });
  }

  /* ---------- QUIZ ---------- */
  function startQuiz(level) {
    state.level = level;
    state.questionIndex = 0;
    state.scoreCount = 0;
    state.points = 0;
    showScreen("quiz");
    el.quizSubjectLabel.textContent = state.subjectId.toUpperCase();
    el.quizLevelLabel.textContent = `Level: ${capitalize(level)}`;
    loadQuestion();
  }

  function getQuestionList() {
    const qset = QUESTIONS[state.subjectId];
    if (!qset) return [];
    return qset[state.level] || [];
  }

  function loadQuestion() {
    const list = getQuestionList();
    if (!list.length) {
      el.questionText.textContent = "Questions not available yet.";
      el.optionsWrap.innerHTML = "";
      return;
    }
    const q = list[state.questionIndex];
    el.questionText.textContent = q.q;
    el.optionsWrap.innerHTML = "";
    q.options.forEach(opt => {
      const b = document.createElement("button");
      b.className = "opt-btn";
      b.textContent = opt;
      b.addEventListener("click", () => selectAnswer(opt, q.a));
      el.optionsWrap.appendChild(b);
    });
    el.progressLabel.textContent = `Q${state.questionIndex+1}/${list.length}`;
    el.nextBtn.disabled = true;
    startTimer();
  }

  function selectAnswer(selected, correct) {
    stopTimer(); // <-- stop ticking sound immediately
    const buttons = [...el.optionsWrap.children];
    buttons.forEach(btn => btn.disabled = true);

    if (selected === correct) {
      state.scoreCount++;
      playSound(el.soundCorrect);
    } else {
      playSound(el.soundWrong);
    }
    buttons.forEach(b => {
      if (b.textContent === correct) b.classList.add("correct");
      if (b.textContent === selected && selected !== correct) b.classList.add("wrong");
    });
    el.nextBtn.disabled = false;
  }

  el.nextBtn.addEventListener("click", () => {
    const list = getQuestionList();
    state.questionIndex++;
    if (state.questionIndex < list.length) loadQuestion();
    else finishQuiz();
  });

  el.quitBtn.addEventListener("click", () => {
    if (confirm("Quit quiz?")) showScreen("subjects");
    stopTimer();
  });

  function finishQuiz() {
    stopTimer();
    showScreen("result");
    const total = getQuestionList().length;
    el.resultSummary.textContent = `You scored ${state.scoreCount}/${total}`;
    saveHistory({
      category: state.categoryId,
      subject: state.subjectId,
      level: state.level,
      score: `${state.scoreCount}/${total}`,
      date: new Date().toLocaleString()
    });
  }

  el.retryBtn.addEventListener("click", () => startQuiz(state.level));
  el.backHomeBtn.addEventListener("click", () => showScreen("categories"));

  /* ---------- TIMER ---------- */
  function startTimer() {
    stopTimer();
    state.timeLeft = 30;
    el.timerVal.textContent = `${state.timeLeft}s`;
    el.timeFill.style.width = "100%";
    state.timer = setInterval(() => {
      state.timeLeft--;
      el.timerVal.textContent = `${state.timeLeft}s`;
      el.timeFill.style.width = `${(state.timeLeft/30)*100}%`;
      if (state.timeLeft <= 0) {
        stopTimer();
        handleTimeUp();
      }
    }, 1000);
    state.tickTimer = setInterval(() => playSound(el.soundTick), 1000);
  }

  function stopTimer() {
    clearInterval(state.timer); state.timer = null;
    clearInterval(state.tickTimer); state.tickTimer = null;
  }

  function handleTimeUp() {
    playSound(el.soundTimesup);
    el.nextBtn.disabled = false;
  }

  /* ---------- HISTORY ---------- */
  function saveHistory(entry) {
    const key = "smartquiz_history";
    const arr = JSON.parse(localStorage.getItem(key) || "[]");
    arr.unshift(entry);
    localStorage.setItem(key, JSON.stringify(arr));
  }

  function loadHistory() {
    const arr = JSON.parse(localStorage.getItem("smartquiz_history") || "[]");
    el.historyList.innerHTML = "";
    if (!arr.length) {
      el.historyList.innerHTML = "<li>No history yet.</li>";
      return;
    }
    arr.forEach(it => {
      const li = document.createElement("li");
      li.textContent = `${it.subject.toUpperCase()} (${capitalize(it.level)}) → ${it.score} on ${it.date}`;
      el.historyList.appendChild(li);
    });
  }

  el.historyBtn.addEventListener("click", () => {
    el.historyPanel.classList.add("open");
    loadHistory();
  });
  el.closeHistory.addEventListener("click", () => el.historyPanel.classList.remove("open"));
  el.clearHistory.addEventListener("click", () => {
    localStorage.removeItem("smartquiz_history");
    loadHistory();
  });

  /* ---------- THEME ---------- */
  el.themeToggle.addEventListener("click", () => {
    const dark = document.body.dataset.theme === "dark";
    if (dark) {
      document.body.removeAttribute("data-theme");
      el.themeToggle.textContent = "🌙";
    } else {
      document.body.dataset.theme = "dark";
      el.themeToggle.textContent = "☀️";
    }
  });

  /* ---------- HELPERS ---------- */
  function playSound(audioEl) {
    if (!audioEl) return;
    try { audioEl.currentTime = 0; audioEl.play(); } catch(e) {}
  }
  function capitalize(s) {
    return s ? s.charAt(0).toUpperCase() + s.slice(1) : s;
  }

  /* ---------- INIT ---------- */
  renderCategories();
  showScreen("categories");
});

// Bubbles animation
function createBubble() {
  const bubble = document.createElement("span");
  bubble.classList.add("bubble");

  const size = Math.random() * 40 + 20; // 20px - 60px
  bubble.style.width = `${size}px`;
  bubble.style.height = `${size}px`;
  bubble.style.left = `${Math.random() * 100}vw`;

  document.body.appendChild(bubble);

  setTimeout(() => {
    bubble.remove();
  }, 8000); // cleanup after float
}

setInterval(createBubble, 500);
