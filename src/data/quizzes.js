// Key = topic id (syllabus wala). answer = sahi option ka number (0 se shuru).
// explanation (optional) quiz ke baad review mein dikhai jati hai.

export const quizzes = {
  "bio-1-1": [
    {
      "difficulty": "easy",
      "q": "Binomial nomenclature kisne introduce kiya?",
      "options": [
        "Darwin",
        "Linnaeus",
        "Mendel",
        "Whittaker"
      ],
      "answer": 1,
      "explanation": "Carolus Linnaeus ne har organism ke liye Genus aur species wala do-lafzi naam introduce kiya."
    },
    {
      "difficulty": "easy",
      "q": "Classification ki sab se basic unit kya hai?",
      "options": [
        "Genus",
        "Family",
        "Species",
        "Order"
      ],
      "answer": 2,
      "explanation": "Species classification ki sab se chhoti aur basic unit hai."
    },
    {
      "difficulty": "easy",
      "q": "Whittaker ke nizam mein kitni kingdoms hain?",
      "options": [
        "2",
        "3",
        "5",
        "6"
      ],
      "answer": 2,
      "explanation": "Whittaker ka 5-kingdom system: Monera, Protista, Fungi, Plantae, Animalia."
    },
    {
      "difficulty": "medium",
      "q": "Scientific name likhne ka sahi tareeqa kaun sa hai?",
      "options": [
        "homo Sapiens",
        "Homo sapiens",
        "HOMO SAPIENS",
        "Homo Sapiens"
      ],
      "answer": 1,
      "explanation": "Genus ka pehla harf capital aur species chhote harf mein likha jata hai."
    }
  ],
  "bio-2-1": [
    {
      "difficulty": "easy",
      "q": "Bacteria kis qism ke organisms hain?",
      "options": [
        "Prokaryotes",
        "Eukaryotes",
        "Viruses",
        "Fungi"
      ],
      "answer": 0,
      "explanation": "Bacteria prokaryotes hain, yaani inme proper nucleus nahi hota."
    }
  ],
  "cs-u1-1": [
    {
      "difficulty": "easy",
      "q": "Software development is the process of:",
      "options": [
        "repairing computer hardware",
        "creating computer programs designed to perform specific tasks",
        "designing computer networks",
        "installing operating systems"
      ],
      "answer": 1,
      "explanation": "Software development ka matlab hai kisi khaas kaam ke liye computer programs banana."
    },
    {
      "difficulty": "easy",
      "q": "Which of the following is a basic activity in software development?",
      "options": [
        "Writing and testing code",
        "Assembling a motherboard",
        "Printing user manuals only",
        "Selling computers"
      ],
      "answer": 0,
      "explanation": "Is mein code likhna, usay test karna aur issues theek karna shamil hai."
    },
    {
      "difficulty": "easy",
      "q": "Software development transforms ___ into software products.",
      "options": [
        "electricity",
        "hardware parts",
        "internet cables",
        "user needs"
      ],
      "answer": 3,
      "explanation": "Yeh process user ki zaroorat se shuru hota hai aur software product par khatam hota hai."
    },
    {
      "difficulty": "medium",
      "q": "Which sequence best describes the stages of software development?",
      "options": [
        "Deployment, coding, analysis, design, testing",
        "Testing, deployment, analysis, design, coding",
        "Analysis, design, coding, testing, deployment",
        "Coding, deployment, design, testing, analysis"
      ],
      "answer": 2,
      "explanation": "Pehle zaroorat samjhi jati hai (analysis), phir design, coding, testing aur akhir mein deployment."
    },
    {
      "difficulty": "medium",
      "q": "Understanding the development process is crucial for creating software that is:",
      "options": [
        "colourful and animated only",
        "reliable, maintainable and scalable",
        "free of any cost",
        "written in one language only"
      ],
      "answer": 1,
      "explanation": "Process ko samajhne se software bharosemand, aasani se maintain hone wala aur barhne ke qabil banta hai."
    },
    {
      "difficulty": "medium",
      "q": "Each stage of software development requires:",
      "options": [
        "specific skills and tools",
        "no special skills",
        "only a single tool",
        "only hardware"
      ],
      "answer": 0,
      "explanation": "Har stage ki apni ahmiyat hai aur uske liye khaas skills aur tools chahiye hote hain."
    },
    {
      "difficulty": "hard",
      "q": "A team starts writing code without first finding out what users need. Which stage did they skip?",
      "options": [
        "Deployment",
        "Maintenance",
        "Debugging",
        "Analysis (requirement understanding)"
      ],
      "answer": 3,
      "explanation": "Software development user ki zaroorat samajhne (analysis) se shuru hota hai. Isay chhodna aksar ghalat software ki wajah banta hai."
    }
  ],
  "cs-u1-2": [
    {
      "difficulty": "easy",
      "q": "The primary purpose of SDLC is to:",
      "options": [
        "design websites only",
        "manage database systems",
        "deliver high-quality software within time and cost estimates",
        "create hardware components"
      ],
      "answer": 2,
      "explanation": "SDLC ka maqsad customer ki umeed ke mutabiq quality software time aur cost ke andar dena hai."
    },
    {
      "difficulty": "easy",
      "q": "Which is the first stage of SDLC?",
      "options": [
        "Deployment",
        "Requirement gathering",
        "Maintenance",
        "Testing"
      ],
      "answer": 1,
      "explanation": "Sab se pehle yeh samjha jata hai ke software ko kya karna hai."
    },
    {
      "difficulty": "easy",
      "q": "'The system should allow users to register and create an account' is a:",
      "options": [
        "functional requirement",
        "non-functional requirement",
        "hardware requirement",
        "testing report"
      ],
      "answer": 0,
      "explanation": "Yeh batata hai ke system KYA kare, isliye functional requirement hai."
    },
    {
      "difficulty": "medium",
      "q": "'The system should be available 99.9% of the time' is an example of a:",
      "options": [
        "functional requirement",
        "design diagram",
        "deployment step",
        "non-functional requirement"
      ],
      "answer": 3,
      "explanation": "Yeh system ki reliability batata hai, yaani woh kaise perform kare. Isliye non-functional hai."
    },
    {
      "difficulty": "medium",
      "q": "The role of a framework in software development is to:",
      "options": [
        "write all the code from scratch",
        "manage hardware",
        "provide a structured foundation with predefined components",
        "perform manual testing only"
      ],
      "answer": 2,
      "explanation": "Framework (jaise Django) pehle se tayyar features deta hai, taake developer scratch se na likhe."
    },
    {
      "difficulty": "medium",
      "q": "Which of the following is NOT an activity of requirement gathering?",
      "options": [
        "Interviews and surveys",
        "Writing the program's source code",
        "Observations",
        "Document review"
      ],
      "answer": 1,
      "explanation": "Source code likhna coding stage ka kaam hai."
    },
    {
      "difficulty": "medium",
      "q": "The design phase is compared to:",
      "options": [
        "drawing blueprints before building a house",
        "painting a finished house",
        "selling the house",
        "repairing the house"
      ],
      "answer": 0,
      "explanation": "Jaise ghar banane se pehle naqsha banta hai, waise hi coding se pehle design banta hai."
    },
    {
      "difficulty": "hard",
      "q": "Which testing checks that software works well on various devices and operating systems?",
      "options": [
        "Functionality testing",
        "Performance testing",
        "Acceptance testing",
        "Compatibility testing"
      ],
      "answer": 3,
      "explanation": "Compatibility testing dekhti hai ke software alag devices aur operating systems par chalta hai ya nahi."
    },
    {
      "difficulty": "hard",
      "q": "After installation, the software is tested in its real-world environment. This belongs to which stage?",
      "options": [
        "Design",
        "Requirement gathering",
        "Deployment",
        "Coding"
      ],
      "answer": 2,
      "explanation": "Installation, configuration aur real-world testing, teeno deployment stage ka hissa hain."
    },
    {
      "difficulty": "hard",
      "q": "'The system should handle up to 1000 simultaneous users' is a:",
      "options": [
        "functional requirement about login",
        "non-functional (performance) requirement",
        "design pattern",
        "type of debugging"
      ],
      "answer": 1,
      "explanation": "Yeh batata hai ke system kitni achi tarah kaam kare, isliye performance wali non-functional requirement hai."
    }
  ],
  "cs-u1-3": [
    {
      "difficulty": "easy",
      "q": "In which model must each phase be completed before the next one begins?",
      "options": [
        "Waterfall Model",
        "Agile Methodology",
        "Prototype only",
        "Pair Programming"
      ],
      "answer": 0,
      "explanation": "Waterfall linear hai: ek phase khatam hone ke baad hi doosra shuru hota hai."
    },
    {
      "difficulty": "easy",
      "q": "Which methodology works in short cycles called sprints?",
      "options": [
        "Waterfall Model",
        "Big-bang model",
        "Compiler",
        "Agile Methodology"
      ],
      "answer": 3,
      "explanation": "Agile mein kaam chhoti cycles (iterations ya sprints) mein hota hai."
    },
    {
      "difficulty": "easy",
      "q": "The Waterfall Model is:",
      "options": [
        "random and unplanned",
        "circular only",
        "linear and sequential",
        "always iterative"
      ],
      "answer": 2,
      "explanation": "Is mein phases aik ke baad aik, tarteeb se chalte hain."
    },
    {
      "difficulty": "medium",
      "q": "Two developers working at one workstation, one writing and the other reviewing, is called:",
      "options": [
        "Continuous Integration",
        "Pair Programming",
        "Unit Testing",
        "Waterfall"
      ],
      "answer": 1,
      "explanation": "Pair Programming Agile ki practice hai jisme review saath saath hota hai."
    },
    {
      "difficulty": "medium",
      "q": "Writing tests before writing the code is known as:",
      "options": [
        "Test-Driven Development",
        "Continuous Integration",
        "Pair Programming",
        "Deployment"
      ],
      "answer": 0,
      "explanation": "TDD mein pehle test likhte hain, phir code, taake software umeed ke mutabiq chale."
    },
    {
      "difficulty": "medium",
      "q": "Waterfall Model works best for projects with:",
      "options": [
        "constantly changing requirements",
        "no requirements",
        "unknown goals",
        "clear, fixed requirements"
      ],
      "answer": 3,
      "explanation": "Waterfall tabhi theek hai jab requirements pehle se saaf hon aur badalne ka imkan kam ho."
    },
    {
      "difficulty": "medium",
      "q": "Regularly merging code changes into a central repository to detect issues early is:",
      "options": [
        "Test-Driven Development",
        "Pair Programming",
        "Continuous Integration",
        "System Testing"
      ],
      "answer": 2,
      "explanation": "Yeh Agile ki practice hai jo masle jaldi pakarne mein madad karti hai."
    },
    {
      "difficulty": "hard",
      "q": "A client keeps changing requirements and wants working demos every two weeks. Which approach suits best?",
      "options": [
        "Waterfall Model",
        "Agile Methodology",
        "No methodology",
        "Waterfall with no testing"
      ],
      "answer": 1,
      "explanation": "Agile tabdeeli qabool karta hai aur chhoti cycles mein jaldi working software deta hai."
    },
    {
      "difficulty": "hard",
      "q": "Which is a limitation of Agile Methodology?",
      "options": [
        "Timeline and final scope are harder to predict",
        "It cannot accept changes",
        "It has no customer involvement",
        "It delivers software only at the end"
      ],
      "answer": 0,
      "explanation": "Agile feedback ke saath evolve karta hai, isliye exact timeline aur scope ka andaza mushkil hota hai."
    },
    {
      "difficulty": "hard",
      "q": "Why can the Waterfall Model be risky?",
      "options": [
        "It delivers too frequently",
        "It needs no planning",
        "It allows constant changes",
        "It assumes all requirements are known from the start"
      ],
      "answer": 3,
      "explanation": "Agar baad mein nayi zaroorat aaye to peeche ja kar tabdeeli mushkil aur mehngi hoti hai."
    }
  ],
  "cs-u1-4": [
    {
      "difficulty": "easy",
      "q": "Planning a software project is compared to:",
      "options": [
        "painting a wall",
        "cooking a meal",
        "planning a trip",
        "playing a game"
      ],
      "answer": 2,
      "explanation": "Jaise safar mein manzil, waqt aur kharcha pehle tay hota hai, waise hi project mein."
    },
    {
      "difficulty": "easy",
      "q": "The purpose of setting project timelines is to:",
      "options": [
        "increase the cost",
        "decide how long each part will take and keep the project on track",
        "remove the testing phase",
        "avoid planning"
      ],
      "answer": 1,
      "explanation": "Timelines se project time par mukammal hota hai."
    },
    {
      "difficulty": "medium",
      "q": "Which of the following is NOT a key factor in cost estimation?",
      "options": [
        "Colour of the office walls",
        "Development team",
        "Technology stack",
        "Project duration"
      ],
      "answer": 0,
      "explanation": "Team, technology aur duration cost par asar daalte hain, deewaron ka rang nahi."
    },
    {
      "difficulty": "medium",
      "q": "What is the first step of risk assessment and management?",
      "options": [
        "Monitor and review",
        "Develop mitigation strategies",
        "Analyze risks",
        "Identify risks"
      ],
      "answer": 3,
      "explanation": "Pehle tamam mumkina risks ki list banai jati hai."
    },
    {
      "difficulty": "medium",
      "q": "'Develop mitigation strategies' means:",
      "options": [
        "ignoring the risk",
        "removing the team",
        "making plans to reduce a risk's likelihood or impact",
        "stopping the project"
      ],
      "answer": 2,
      "explanation": "Mitigation ka matlab hai risk ka khatra ya asar kam karne ka plan banana."
    },
    {
      "difficulty": "medium",
      "q": "Contingency funds are included in a project budget to:",
      "options": [
        "pay for office decoration",
        "handle unforeseen issues",
        "replace the developers",
        "avoid testing"
      ],
      "answer": 1,
      "explanation": "Yeh ghair mutawaqqa masail ke liye mehfooz raqam hoti hai."
    },
    {
      "difficulty": "hard",
      "q": "Market fluctuations are an example of which type of risk?",
      "options": [
        "External risk",
        "Technical risk",
        "Operational risk",
        "Testing risk"
      ],
      "answer": 0,
      "explanation": "Market ke halaat project ke bahar ki cheez hain, isliye external risk hain."
    },
    {
      "difficulty": "hard",
      "q": "A resource shortage in the team is which type of risk?",
      "options": [
        "External risk",
        "Technical risk",
        "Market risk",
        "Operational risk"
      ],
      "answer": 3,
      "explanation": "Resources ki kami project ke andar ke operations se mutalliq hai."
    },
    {
      "difficulty": "hard",
      "q": "Which phase is where the team writes code, creates designs and builds the software according to the plan?",
      "options": [
        "Estimating costs",
        "Risk identification",
        "Execution",
        "Setting timelines"
      ],
      "answer": 2,
      "explanation": "Execution woh phase hai jahan asal development ka kaam hota hai."
    }
  ],
  "cs-u1-5": [
    {
      "difficulty": "easy",
      "q": "UML stands for:",
      "options": [
        "Universal Machine Logic",
        "Unified Modeling Language",
        "Unified Memory List",
        "User Model Layout"
      ],
      "answer": 1,
      "explanation": "UML software design ko visualize karne ki standard zuban hai."
    },
    {
      "difficulty": "easy",
      "q": "Which diagram illustrates the flow of activities or steps in a process?",
      "options": [
        "Activity diagram",
        "Class diagram",
        "Use case diagram",
        "None of these"
      ],
      "answer": 0,
      "explanation": "Activity diagram process ke steps ka flow dikhata hai."
    },
    {
      "difficulty": "easy",
      "q": "In a use case diagram, an actor is:",
      "options": [
        "a type of database",
        "a programming language",
        "a testing tool",
        "a user or another system that interacts with the system"
      ],
      "answer": 3,
      "explanation": "Actor insaan ya koi aur system ho sakta hai jo system ke saath interact kare."
    },
    {
      "difficulty": "medium",
      "q": "Which diagram shows how objects interact in a particular time order?",
      "options": [
        "Class diagram",
        "Activity diagram",
        "Sequence diagram",
        "Use case diagram"
      ],
      "answer": 2,
      "explanation": "Sequence diagram messages ka flow waqt ki tarteeb mein dikhata hai."
    },
    {
      "difficulty": "medium",
      "q": "A class diagram is best described as:",
      "options": [
        "a list of bugs",
        "a map showing how things in a system are organized",
        "a flow of user clicks",
        "a testing report"
      ],
      "answer": 1,
      "explanation": "Isme classes, unke attributes aur methods dikhaye jate hain."
    },
    {
      "difficulty": "medium",
      "q": "What is the first step in identifying use cases?",
      "options": [
        "Identify actors",
        "Validate use cases",
        "Write code",
        "Deploy the system"
      ],
      "answer": 0,
      "explanation": "Pehle yeh tay hota hai ke system ko kaun kaun istemal karega."
    },
    {
      "difficulty": "medium",
      "q": "Which of these is NOT a purpose of Use Case Diagrams?",
      "options": [
        "Capturing functional requirements",
        "Understanding user interactions",
        "Planning and testing",
        "Writing the program's source code"
      ],
      "answer": 3,
      "explanation": "Source code likhna coding ka kaam hai, use case diagram ka nahi."
    },
    {
      "difficulty": "hard",
      "q": "In an online shopping platform, 'Update Delivery Status' is a use case of which actor?",
      "options": [
        "Customer",
        "Administrator only",
        "Delivery Personnel",
        "No actor"
      ],
      "answer": 2,
      "explanation": "Delivery ka status delivery personnel update karta hai."
    },
    {
      "difficulty": "hard",
      "q": "In the Room and Box example, 'open' and 'close' correspond to which part of a class diagram?",
      "options": [
        "Attributes",
        "Methods",
        "Actors",
        "Use cases"
      ],
      "answer": 1,
      "explanation": "Methods woh actions hain jo class kar sakti hai."
    },
    {
      "difficulty": "hard",
      "q": "ToyBox, BookBox and ClothesBox in the example represent:",
      "options": [
        "specialized boxes of the general Box class",
        "unrelated classes",
        "actors",
        "sequence messages"
      ],
      "answer": 0,
      "explanation": "Yeh general Box class ki alag alag khaas qismein hain."
    }
  ],
  "cs-u1-6": [
    {
      "difficulty": "easy",
      "q": "Design patterns are:",
      "options": [
        "types of hardware",
        "programming languages",
        "operating systems",
        "common solutions to common software development problems"
      ],
      "answer": 3,
      "explanation": "Yeh aazmaye hue templates hain jo aam masail hal karte hain."
    },
    {
      "difficulty": "easy",
      "q": "Which pattern ensures an object is created only once and reused?",
      "options": [
        "Factory",
        "Observer",
        "Singleton",
        "Strategy"
      ],
      "answer": 2,
      "explanation": "Singleton ka matlab hai ke ek hi object poore program mein istemal ho."
    },
    {
      "difficulty": "medium",
      "q": "Which pattern is like a workshop that creates products without you worrying about the details?",
      "options": [
        "Singleton",
        "Factory",
        "Observer",
        "Strategy"
      ],
      "answer": 1,
      "explanation": "Factory pattern banane ki tafseel chhupa kar tayyar object deta hai."
    },
    {
      "difficulty": "medium",
      "q": "In which pattern does a source automatically notify all interested parties of changes?",
      "options": [
        "Observer",
        "Singleton",
        "Factory",
        "Strategy"
      ],
      "answer": 0,
      "explanation": "Observer pattern mein source khud sab ko updates bhejta hai."
    },
    {
      "difficulty": "medium",
      "q": "Which pattern is compared to a toolbox where you pick the right tool for the job?",
      "options": [
        "Singleton",
        "Observer",
        "Factory",
        "Strategy"
      ],
      "answer": 3,
      "explanation": "Strategy pattern mein masle ke mutabiq sahi strategy chuni jati hai."
    },
    {
      "difficulty": "medium",
      "q": "Which of the following is a benefit of design patterns?",
      "options": [
        "Slower development",
        "No need for testing",
        "Reduced code complexity and better reusability",
        "More bugs"
      ],
      "answer": 2,
      "explanation": "Patterns structure dete hain aur aazmaye hue hal dobara istemal karne dete hain."
    },
    {
      "difficulty": "hard",
      "q": "A news app must automatically alert all subscribed users when a new article is published. Which pattern fits?",
      "options": [
        "Singleton",
        "Observer",
        "Factory",
        "Strategy"
      ],
      "answer": 1,
      "explanation": "Ek source (news) ke update par sab subscribers ko khud notify karna Observer hai."
    },
    {
      "difficulty": "hard",
      "q": "A game must have exactly one settings manager shared everywhere. Which pattern fits?",
      "options": [
        "Singleton",
        "Observer",
        "Factory",
        "Strategy"
      ],
      "answer": 0,
      "explanation": "Aisa object jo sirf ek ho aur sab istemal karein, Singleton hai."
    },
    {
      "difficulty": "hard",
      "q": "The MVC pattern is commonly used in:",
      "options": [
        "compilers only",
        "hardware drivers",
        "spreadsheets",
        "web development frameworks"
      ],
      "answer": 3,
      "explanation": "Ruby on Rails aur Angular jaise web frameworks MVC istemal karte hain."
    }
  ],
  "cs-u1-7": [
    {
      "difficulty": "easy",
      "q": "Debugging is the process of:",
      "options": [
        "designing the user interface",
        "installing software",
        "finding and fixing bugs in software",
        "writing user manuals"
      ],
      "answer": 2,
      "explanation": "Debugging ka matlab hai errors dhoondna aur theek karna."
    },
    {
      "difficulty": "easy",
      "q": "What is the first level of testing?",
      "options": [
        "System testing",
        "Unit testing",
        "Acceptance testing",
        "Integration testing"
      ],
      "answer": 1,
      "explanation": "Sab se pehle individual components alag alag test hote hain."
    },
    {
      "difficulty": "easy",
      "q": "Testing conducted by end-users to check whether the software is ready for release is:",
      "options": [
        "Acceptance testing",
        "Unit testing",
        "Integration testing",
        "Debugging"
      ],
      "answer": 0,
      "explanation": "Isay UAT bhi kehte hain, aur yeh aksar end-users ya clients karte hain."
    },
    {
      "difficulty": "medium",
      "q": "Which testing checks the interaction between different modules?",
      "options": [
        "Unit testing",
        "System testing",
        "Acceptance testing",
        "Integration testing"
      ],
      "answer": 3,
      "explanation": "Integration testing modules ke darmiyan interface errors aur data flow dekhti hai."
    },
    {
      "difficulty": "medium",
      "q": "Which tool lets programmers step through code and inspect variables?",
      "options": [
        "Compiler",
        "Text editor",
        "Debugger",
        "Repository"
      ],
      "answer": 2,
      "explanation": "Debugger code ko step by step chala kar variables dekhne deta hai."
    },
    {
      "difficulty": "medium",
      "q": "Testing the entire software as a whole is called:",
      "options": [
        "Unit testing",
        "System testing",
        "Integration testing",
        "Code review"
      ],
      "answer": 1,
      "explanation": "System testing mein poora software ek complete entity ki tarah test hota hai."
    },
    {
      "difficulty": "medium",
      "q": "Print statements are used in debugging to:",
      "options": [
        "display variable values at different points in the program",
        "compile the code",
        "delete bugs automatically",
        "install software"
      ],
      "answer": 0,
      "explanation": "Isse pata chalta hai ke program ke kisi point par variables mein kya value hai."
    },
    {
      "difficulty": "hard",
      "q": "Which is the correct order of the testing hierarchy?",
      "options": [
        "Acceptance, System, Integration, Unit",
        "System, Unit, Acceptance, Integration",
        "Integration, Unit, Acceptance, System",
        "Unit, Integration, System, Acceptance"
      ],
      "answer": 3,
      "explanation": "Testing chhote components se shuru ho kar poore system aur phir user acceptance tak jati hai."
    },
    {
      "difficulty": "hard",
      "q": "A single function is tested alone to verify it returns the correct result. This is:",
      "options": [
        "Integration testing",
        "System testing",
        "Unit testing",
        "Acceptance testing"
      ],
      "answer": 2,
      "explanation": "Ek akele function ya module ki testing unit testing hai."
    },
    {
      "difficulty": "hard",
      "q": "Two modules work correctly alone, but data gets lost when passed between them. Which testing would catch this?",
      "options": [
        "Unit testing",
        "Integration testing",
        "Acceptance testing",
        "Code formatting"
      ],
      "answer": 1,
      "explanation": "Modules ke darmiyan data flow ke masle integration testing pakarti hai."
    }
  ],
  "cs-u1-8": [
    {
      "difficulty": "easy",
      "q": "Which of the following is a code editor?",
      "options": [
        "VS Code",
        "GitHub",
        "GDB",
        "Repl.it"
      ],
      "answer": 0,
      "explanation": "VS Code aur Notepad++ code editors ki misalein hain."
    },
    {
      "difficulty": "easy",
      "q": "The Python interpreter translates code:",
      "options": [
        "all at once",
        "only at the end",
        "only when saving",
        "line by line"
      ],
      "answer": 3,
      "explanation": "Interpreter code ko ek ek line translate kar ke chalata hai."
    },
    {
      "difficulty": "easy",
      "q": "GitHub is an example of a:",
      "options": [
        "debugger",
        "compiler",
        "source code repository",
        "code editor"
      ],
      "answer": 2,
      "explanation": "GitHub code store karne aur changes track karne ka platform hai."
    },
    {
      "difficulty": "medium",
      "q": "A compiler translates:",
      "options": [
        "one line at a time",
        "the entire code at once",
        "only comments",
        "only variables"
      ],
      "answer": 1,
      "explanation": "Compiler (jaise GCC) poora source code ek saath machine language mein badalta hai."
    },
    {
      "difficulty": "medium",
      "q": "An IDE integrates:",
      "options": [
        "editor, compiler, debugger and version control tools",
        "only a text editor",
        "only a browser",
        "only a database"
      ],
      "answer": 0,
      "explanation": "IDE sab zaroori tools ek hi jagah de kar development tez karta hai."
    },
    {
      "difficulty": "medium",
      "q": "GDB is a:",
      "options": [
        "Python IDE",
        "code editor",
        "cloud platform",
        "debugger for C/C++"
      ],
      "answer": 3,
      "explanation": "GDB ka matlab GNU Debugger hai, jo C/C++ ke liye hai."
    },
    {
      "difficulty": "medium",
      "q": "Repl.it and Gitpod are examples of:",
      "options": [
        "offline platforms",
        "compilers",
        "online (cloud-based) platforms",
        "debuggers"
      ],
      "answer": 2,
      "explanation": "Yeh internet par chalne wale cloud-based development platforms hain."
    },
    {
      "difficulty": "hard",
      "q": "Which tool allows multiple developers to work on the same project without conflicts through version control?",
      "options": [
        "Code editor",
        "Source code repository",
        "Interpreter",
        "Debugger"
      ],
      "answer": 1,
      "explanation": "Repositories changes track karti hain, isliye kai developers saath kaam kar sakte hain."
    },
    {
      "difficulty": "hard",
      "q": "Translators are tools that convert:",
      "options": [
        "high-level language code into machine language",
        "machine language into pictures",
        "text into audio",
        "files into folders"
      ],
      "answer": 0,
      "explanation": "Computer sirf machine language (binary) samajhta hai, isliye translation zaroori hai."
    },
    {
      "difficulty": "hard",
      "q": "PyCharm is best described as:",
      "options": [
        "a GitHub alternative",
        "a compiler for C++",
        "an online editor only",
        "an IDE preferred for Python development"
      ],
      "answer": 3,
      "explanation": "PyCharm Python ke liye mashhoor Integrated Development Environment hai."
    }
  ],
  "cs-u1-test": [
    {
      "difficulty": "easy",
      "q": "Software development is the process of:",
      "options": [
        "repairing computer hardware",
        "creating computer programs designed to perform specific tasks",
        "designing computer networks",
        "installing operating systems"
      ],
      "answer": 1,
      "explanation": "Software development ka matlab hai kisi khaas kaam ke liye computer programs banana."
    },
    {
      "difficulty": "easy",
      "q": "Which of the following is a basic activity in software development?",
      "options": [
        "Writing and testing code",
        "Assembling a motherboard",
        "Printing user manuals only",
        "Selling computers"
      ],
      "answer": 0,
      "explanation": "Is mein code likhna, usay test karna aur issues theek karna shamil hai."
    },
    {
      "difficulty": "easy",
      "q": "Software development transforms ___ into software products.",
      "options": [
        "electricity",
        "hardware parts",
        "internet cables",
        "user needs"
      ],
      "answer": 3,
      "explanation": "Yeh process user ki zaroorat se shuru hota hai aur software product par khatam hota hai."
    },
    {
      "difficulty": "medium",
      "q": "Which sequence best describes the stages of software development?",
      "options": [
        "Deployment, coding, analysis, design, testing",
        "Testing, deployment, analysis, design, coding",
        "Analysis, design, coding, testing, deployment",
        "Coding, deployment, design, testing, analysis"
      ],
      "answer": 2,
      "explanation": "Pehle zaroorat samjhi jati hai (analysis), phir design, coding, testing aur akhir mein deployment."
    },
    {
      "difficulty": "medium",
      "q": "Understanding the development process is crucial for creating software that is:",
      "options": [
        "colourful and animated only",
        "reliable, maintainable and scalable",
        "free of any cost",
        "written in one language only"
      ],
      "answer": 1,
      "explanation": "Process ko samajhne se software bharosemand, aasani se maintain hone wala aur barhne ke qabil banta hai."
    },
    {
      "difficulty": "medium",
      "q": "Each stage of software development requires:",
      "options": [
        "specific skills and tools",
        "no special skills",
        "only a single tool",
        "only hardware"
      ],
      "answer": 0,
      "explanation": "Har stage ki apni ahmiyat hai aur uske liye khaas skills aur tools chahiye hote hain."
    },
    {
      "difficulty": "hard",
      "q": "A team starts writing code without first finding out what users need. Which stage did they skip?",
      "options": [
        "Deployment",
        "Maintenance",
        "Debugging",
        "Analysis (requirement understanding)"
      ],
      "answer": 3,
      "explanation": "Software development user ki zaroorat samajhne (analysis) se shuru hota hai. Isay chhodna aksar ghalat software ki wajah banta hai."
    },
    {
      "difficulty": "easy",
      "q": "The primary purpose of SDLC is to:",
      "options": [
        "design websites only",
        "manage database systems",
        "deliver high-quality software within time and cost estimates",
        "create hardware components"
      ],
      "answer": 2,
      "explanation": "SDLC ka maqsad customer ki umeed ke mutabiq quality software time aur cost ke andar dena hai."
    },
    {
      "difficulty": "easy",
      "q": "Which is the first stage of SDLC?",
      "options": [
        "Deployment",
        "Requirement gathering",
        "Maintenance",
        "Testing"
      ],
      "answer": 1,
      "explanation": "Sab se pehle yeh samjha jata hai ke software ko kya karna hai."
    },
    {
      "difficulty": "easy",
      "q": "'The system should allow users to register and create an account' is a:",
      "options": [
        "functional requirement",
        "non-functional requirement",
        "hardware requirement",
        "testing report"
      ],
      "answer": 0,
      "explanation": "Yeh batata hai ke system KYA kare, isliye functional requirement hai."
    },
    {
      "difficulty": "medium",
      "q": "'The system should be available 99.9% of the time' is an example of a:",
      "options": [
        "functional requirement",
        "design diagram",
        "deployment step",
        "non-functional requirement"
      ],
      "answer": 3,
      "explanation": "Yeh system ki reliability batata hai, yaani woh kaise perform kare. Isliye non-functional hai."
    },
    {
      "difficulty": "medium",
      "q": "The role of a framework in software development is to:",
      "options": [
        "write all the code from scratch",
        "manage hardware",
        "provide a structured foundation with predefined components",
        "perform manual testing only"
      ],
      "answer": 2,
      "explanation": "Framework (jaise Django) pehle se tayyar features deta hai, taake developer scratch se na likhe."
    },
    {
      "difficulty": "medium",
      "q": "Which of the following is NOT an activity of requirement gathering?",
      "options": [
        "Interviews and surveys",
        "Writing the program's source code",
        "Observations",
        "Document review"
      ],
      "answer": 1,
      "explanation": "Source code likhna coding stage ka kaam hai."
    },
    {
      "difficulty": "medium",
      "q": "The design phase is compared to:",
      "options": [
        "drawing blueprints before building a house",
        "painting a finished house",
        "selling the house",
        "repairing the house"
      ],
      "answer": 0,
      "explanation": "Jaise ghar banane se pehle naqsha banta hai, waise hi coding se pehle design banta hai."
    },
    {
      "difficulty": "hard",
      "q": "Which testing checks that software works well on various devices and operating systems?",
      "options": [
        "Functionality testing",
        "Performance testing",
        "Acceptance testing",
        "Compatibility testing"
      ],
      "answer": 3,
      "explanation": "Compatibility testing dekhti hai ke software alag devices aur operating systems par chalta hai ya nahi."
    },
    {
      "difficulty": "hard",
      "q": "After installation, the software is tested in its real-world environment. This belongs to which stage?",
      "options": [
        "Design",
        "Requirement gathering",
        "Deployment",
        "Coding"
      ],
      "answer": 2,
      "explanation": "Installation, configuration aur real-world testing, teeno deployment stage ka hissa hain."
    },
    {
      "difficulty": "hard",
      "q": "'The system should handle up to 1000 simultaneous users' is a:",
      "options": [
        "functional requirement about login",
        "non-functional (performance) requirement",
        "design pattern",
        "type of debugging"
      ],
      "answer": 1,
      "explanation": "Yeh batata hai ke system kitni achi tarah kaam kare, isliye performance wali non-functional requirement hai."
    },
    {
      "difficulty": "easy",
      "q": "In which model must each phase be completed before the next one begins?",
      "options": [
        "Waterfall Model",
        "Agile Methodology",
        "Prototype only",
        "Pair Programming"
      ],
      "answer": 0,
      "explanation": "Waterfall linear hai: ek phase khatam hone ke baad hi doosra shuru hota hai."
    },
    {
      "difficulty": "easy",
      "q": "Which methodology works in short cycles called sprints?",
      "options": [
        "Waterfall Model",
        "Big-bang model",
        "Compiler",
        "Agile Methodology"
      ],
      "answer": 3,
      "explanation": "Agile mein kaam chhoti cycles (iterations ya sprints) mein hota hai."
    },
    {
      "difficulty": "easy",
      "q": "The Waterfall Model is:",
      "options": [
        "random and unplanned",
        "circular only",
        "linear and sequential",
        "always iterative"
      ],
      "answer": 2,
      "explanation": "Is mein phases aik ke baad aik, tarteeb se chalte hain."
    },
    {
      "difficulty": "medium",
      "q": "Two developers working at one workstation, one writing and the other reviewing, is called:",
      "options": [
        "Continuous Integration",
        "Pair Programming",
        "Unit Testing",
        "Waterfall"
      ],
      "answer": 1,
      "explanation": "Pair Programming Agile ki practice hai jisme review saath saath hota hai."
    },
    {
      "difficulty": "medium",
      "q": "Writing tests before writing the code is known as:",
      "options": [
        "Test-Driven Development",
        "Continuous Integration",
        "Pair Programming",
        "Deployment"
      ],
      "answer": 0,
      "explanation": "TDD mein pehle test likhte hain, phir code, taake software umeed ke mutabiq chale."
    },
    {
      "difficulty": "medium",
      "q": "Waterfall Model works best for projects with:",
      "options": [
        "constantly changing requirements",
        "no requirements",
        "unknown goals",
        "clear, fixed requirements"
      ],
      "answer": 3,
      "explanation": "Waterfall tabhi theek hai jab requirements pehle se saaf hon aur badalne ka imkan kam ho."
    },
    {
      "difficulty": "medium",
      "q": "Regularly merging code changes into a central repository to detect issues early is:",
      "options": [
        "Test-Driven Development",
        "Pair Programming",
        "Continuous Integration",
        "System Testing"
      ],
      "answer": 2,
      "explanation": "Yeh Agile ki practice hai jo masle jaldi pakarne mein madad karti hai."
    },
    {
      "difficulty": "hard",
      "q": "A client keeps changing requirements and wants working demos every two weeks. Which approach suits best?",
      "options": [
        "Waterfall Model",
        "Agile Methodology",
        "No methodology",
        "Waterfall with no testing"
      ],
      "answer": 1,
      "explanation": "Agile tabdeeli qabool karta hai aur chhoti cycles mein jaldi working software deta hai."
    },
    {
      "difficulty": "hard",
      "q": "Which is a limitation of Agile Methodology?",
      "options": [
        "Timeline and final scope are harder to predict",
        "It cannot accept changes",
        "It has no customer involvement",
        "It delivers software only at the end"
      ],
      "answer": 0,
      "explanation": "Agile feedback ke saath evolve karta hai, isliye exact timeline aur scope ka andaza mushkil hota hai."
    },
    {
      "difficulty": "hard",
      "q": "Why can the Waterfall Model be risky?",
      "options": [
        "It delivers too frequently",
        "It needs no planning",
        "It allows constant changes",
        "It assumes all requirements are known from the start"
      ],
      "answer": 3,
      "explanation": "Agar baad mein nayi zaroorat aaye to peeche ja kar tabdeeli mushkil aur mehngi hoti hai."
    },
    {
      "difficulty": "easy",
      "q": "Planning a software project is compared to:",
      "options": [
        "painting a wall",
        "cooking a meal",
        "planning a trip",
        "playing a game"
      ],
      "answer": 2,
      "explanation": "Jaise safar mein manzil, waqt aur kharcha pehle tay hota hai, waise hi project mein."
    },
    {
      "difficulty": "easy",
      "q": "The purpose of setting project timelines is to:",
      "options": [
        "increase the cost",
        "decide how long each part will take and keep the project on track",
        "remove the testing phase",
        "avoid planning"
      ],
      "answer": 1,
      "explanation": "Timelines se project time par mukammal hota hai."
    },
    {
      "difficulty": "medium",
      "q": "Which of the following is NOT a key factor in cost estimation?",
      "options": [
        "Colour of the office walls",
        "Development team",
        "Technology stack",
        "Project duration"
      ],
      "answer": 0,
      "explanation": "Team, technology aur duration cost par asar daalte hain, deewaron ka rang nahi."
    },
    {
      "difficulty": "medium",
      "q": "What is the first step of risk assessment and management?",
      "options": [
        "Monitor and review",
        "Develop mitigation strategies",
        "Analyze risks",
        "Identify risks"
      ],
      "answer": 3,
      "explanation": "Pehle tamam mumkina risks ki list banai jati hai."
    },
    {
      "difficulty": "medium",
      "q": "'Develop mitigation strategies' means:",
      "options": [
        "ignoring the risk",
        "removing the team",
        "making plans to reduce a risk's likelihood or impact",
        "stopping the project"
      ],
      "answer": 2,
      "explanation": "Mitigation ka matlab hai risk ka khatra ya asar kam karne ka plan banana."
    },
    {
      "difficulty": "medium",
      "q": "Contingency funds are included in a project budget to:",
      "options": [
        "pay for office decoration",
        "handle unforeseen issues",
        "replace the developers",
        "avoid testing"
      ],
      "answer": 1,
      "explanation": "Yeh ghair mutawaqqa masail ke liye mehfooz raqam hoti hai."
    },
    {
      "difficulty": "hard",
      "q": "Market fluctuations are an example of which type of risk?",
      "options": [
        "External risk",
        "Technical risk",
        "Operational risk",
        "Testing risk"
      ],
      "answer": 0,
      "explanation": "Market ke halaat project ke bahar ki cheez hain, isliye external risk hain."
    },
    {
      "difficulty": "hard",
      "q": "A resource shortage in the team is which type of risk?",
      "options": [
        "External risk",
        "Technical risk",
        "Market risk",
        "Operational risk"
      ],
      "answer": 3,
      "explanation": "Resources ki kami project ke andar ke operations se mutalliq hai."
    },
    {
      "difficulty": "hard",
      "q": "Which phase is where the team writes code, creates designs and builds the software according to the plan?",
      "options": [
        "Estimating costs",
        "Risk identification",
        "Execution",
        "Setting timelines"
      ],
      "answer": 2,
      "explanation": "Execution woh phase hai jahan asal development ka kaam hota hai."
    },
    {
      "difficulty": "easy",
      "q": "UML stands for:",
      "options": [
        "Universal Machine Logic",
        "Unified Modeling Language",
        "Unified Memory List",
        "User Model Layout"
      ],
      "answer": 1,
      "explanation": "UML software design ko visualize karne ki standard zuban hai."
    },
    {
      "difficulty": "easy",
      "q": "Which diagram illustrates the flow of activities or steps in a process?",
      "options": [
        "Activity diagram",
        "Class diagram",
        "Use case diagram",
        "None of these"
      ],
      "answer": 0,
      "explanation": "Activity diagram process ke steps ka flow dikhata hai."
    },
    {
      "difficulty": "easy",
      "q": "In a use case diagram, an actor is:",
      "options": [
        "a type of database",
        "a programming language",
        "a testing tool",
        "a user or another system that interacts with the system"
      ],
      "answer": 3,
      "explanation": "Actor insaan ya koi aur system ho sakta hai jo system ke saath interact kare."
    },
    {
      "difficulty": "medium",
      "q": "Which diagram shows how objects interact in a particular time order?",
      "options": [
        "Class diagram",
        "Activity diagram",
        "Sequence diagram",
        "Use case diagram"
      ],
      "answer": 2,
      "explanation": "Sequence diagram messages ka flow waqt ki tarteeb mein dikhata hai."
    },
    {
      "difficulty": "medium",
      "q": "A class diagram is best described as:",
      "options": [
        "a list of bugs",
        "a map showing how things in a system are organized",
        "a flow of user clicks",
        "a testing report"
      ],
      "answer": 1,
      "explanation": "Isme classes, unke attributes aur methods dikhaye jate hain."
    },
    {
      "difficulty": "medium",
      "q": "What is the first step in identifying use cases?",
      "options": [
        "Identify actors",
        "Validate use cases",
        "Write code",
        "Deploy the system"
      ],
      "answer": 0,
      "explanation": "Pehle yeh tay hota hai ke system ko kaun kaun istemal karega."
    },
    {
      "difficulty": "medium",
      "q": "Which of these is NOT a purpose of Use Case Diagrams?",
      "options": [
        "Capturing functional requirements",
        "Understanding user interactions",
        "Planning and testing",
        "Writing the program's source code"
      ],
      "answer": 3,
      "explanation": "Source code likhna coding ka kaam hai, use case diagram ka nahi."
    },
    {
      "difficulty": "hard",
      "q": "In an online shopping platform, 'Update Delivery Status' is a use case of which actor?",
      "options": [
        "Customer",
        "Administrator only",
        "Delivery Personnel",
        "No actor"
      ],
      "answer": 2,
      "explanation": "Delivery ka status delivery personnel update karta hai."
    },
    {
      "difficulty": "hard",
      "q": "In the Room and Box example, 'open' and 'close' correspond to which part of a class diagram?",
      "options": [
        "Attributes",
        "Methods",
        "Actors",
        "Use cases"
      ],
      "answer": 1,
      "explanation": "Methods woh actions hain jo class kar sakti hai."
    },
    {
      "difficulty": "hard",
      "q": "ToyBox, BookBox and ClothesBox in the example represent:",
      "options": [
        "specialized boxes of the general Box class",
        "unrelated classes",
        "actors",
        "sequence messages"
      ],
      "answer": 0,
      "explanation": "Yeh general Box class ki alag alag khaas qismein hain."
    },
    {
      "difficulty": "easy",
      "q": "Design patterns are:",
      "options": [
        "types of hardware",
        "programming languages",
        "operating systems",
        "common solutions to common software development problems"
      ],
      "answer": 3,
      "explanation": "Yeh aazmaye hue templates hain jo aam masail hal karte hain."
    },
    {
      "difficulty": "easy",
      "q": "Which pattern ensures an object is created only once and reused?",
      "options": [
        "Factory",
        "Observer",
        "Singleton",
        "Strategy"
      ],
      "answer": 2,
      "explanation": "Singleton ka matlab hai ke ek hi object poore program mein istemal ho."
    },
    {
      "difficulty": "medium",
      "q": "Which pattern is like a workshop that creates products without you worrying about the details?",
      "options": [
        "Singleton",
        "Factory",
        "Observer",
        "Strategy"
      ],
      "answer": 1,
      "explanation": "Factory pattern banane ki tafseel chhupa kar tayyar object deta hai."
    },
    {
      "difficulty": "medium",
      "q": "In which pattern does a source automatically notify all interested parties of changes?",
      "options": [
        "Observer",
        "Singleton",
        "Factory",
        "Strategy"
      ],
      "answer": 0,
      "explanation": "Observer pattern mein source khud sab ko updates bhejta hai."
    },
    {
      "difficulty": "medium",
      "q": "Which pattern is compared to a toolbox where you pick the right tool for the job?",
      "options": [
        "Singleton",
        "Observer",
        "Factory",
        "Strategy"
      ],
      "answer": 3,
      "explanation": "Strategy pattern mein masle ke mutabiq sahi strategy chuni jati hai."
    },
    {
      "difficulty": "medium",
      "q": "Which of the following is a benefit of design patterns?",
      "options": [
        "Slower development",
        "No need for testing",
        "Reduced code complexity and better reusability",
        "More bugs"
      ],
      "answer": 2,
      "explanation": "Patterns structure dete hain aur aazmaye hue hal dobara istemal karne dete hain."
    },
    {
      "difficulty": "hard",
      "q": "A news app must automatically alert all subscribed users when a new article is published. Which pattern fits?",
      "options": [
        "Singleton",
        "Observer",
        "Factory",
        "Strategy"
      ],
      "answer": 1,
      "explanation": "Ek source (news) ke update par sab subscribers ko khud notify karna Observer hai."
    },
    {
      "difficulty": "hard",
      "q": "A game must have exactly one settings manager shared everywhere. Which pattern fits?",
      "options": [
        "Singleton",
        "Observer",
        "Factory",
        "Strategy"
      ],
      "answer": 0,
      "explanation": "Aisa object jo sirf ek ho aur sab istemal karein, Singleton hai."
    },
    {
      "difficulty": "hard",
      "q": "The MVC pattern is commonly used in:",
      "options": [
        "compilers only",
        "hardware drivers",
        "spreadsheets",
        "web development frameworks"
      ],
      "answer": 3,
      "explanation": "Ruby on Rails aur Angular jaise web frameworks MVC istemal karte hain."
    },
    {
      "difficulty": "easy",
      "q": "Debugging is the process of:",
      "options": [
        "designing the user interface",
        "installing software",
        "finding and fixing bugs in software",
        "writing user manuals"
      ],
      "answer": 2,
      "explanation": "Debugging ka matlab hai errors dhoondna aur theek karna."
    },
    {
      "difficulty": "easy",
      "q": "What is the first level of testing?",
      "options": [
        "System testing",
        "Unit testing",
        "Acceptance testing",
        "Integration testing"
      ],
      "answer": 1,
      "explanation": "Sab se pehle individual components alag alag test hote hain."
    },
    {
      "difficulty": "easy",
      "q": "Testing conducted by end-users to check whether the software is ready for release is:",
      "options": [
        "Acceptance testing",
        "Unit testing",
        "Integration testing",
        "Debugging"
      ],
      "answer": 0,
      "explanation": "Isay UAT bhi kehte hain, aur yeh aksar end-users ya clients karte hain."
    },
    {
      "difficulty": "medium",
      "q": "Which testing checks the interaction between different modules?",
      "options": [
        "Unit testing",
        "System testing",
        "Acceptance testing",
        "Integration testing"
      ],
      "answer": 3,
      "explanation": "Integration testing modules ke darmiyan interface errors aur data flow dekhti hai."
    },
    {
      "difficulty": "medium",
      "q": "Which tool lets programmers step through code and inspect variables?",
      "options": [
        "Compiler",
        "Text editor",
        "Debugger",
        "Repository"
      ],
      "answer": 2,
      "explanation": "Debugger code ko step by step chala kar variables dekhne deta hai."
    },
    {
      "difficulty": "medium",
      "q": "Testing the entire software as a whole is called:",
      "options": [
        "Unit testing",
        "System testing",
        "Integration testing",
        "Code review"
      ],
      "answer": 1,
      "explanation": "System testing mein poora software ek complete entity ki tarah test hota hai."
    },
    {
      "difficulty": "medium",
      "q": "Print statements are used in debugging to:",
      "options": [
        "display variable values at different points in the program",
        "compile the code",
        "delete bugs automatically",
        "install software"
      ],
      "answer": 0,
      "explanation": "Isse pata chalta hai ke program ke kisi point par variables mein kya value hai."
    },
    {
      "difficulty": "hard",
      "q": "Which is the correct order of the testing hierarchy?",
      "options": [
        "Acceptance, System, Integration, Unit",
        "System, Unit, Acceptance, Integration",
        "Integration, Unit, Acceptance, System",
        "Unit, Integration, System, Acceptance"
      ],
      "answer": 3,
      "explanation": "Testing chhote components se shuru ho kar poore system aur phir user acceptance tak jati hai."
    },
    {
      "difficulty": "hard",
      "q": "A single function is tested alone to verify it returns the correct result. This is:",
      "options": [
        "Integration testing",
        "System testing",
        "Unit testing",
        "Acceptance testing"
      ],
      "answer": 2,
      "explanation": "Ek akele function ya module ki testing unit testing hai."
    },
    {
      "difficulty": "hard",
      "q": "Two modules work correctly alone, but data gets lost when passed between them. Which testing would catch this?",
      "options": [
        "Unit testing",
        "Integration testing",
        "Acceptance testing",
        "Code formatting"
      ],
      "answer": 1,
      "explanation": "Modules ke darmiyan data flow ke masle integration testing pakarti hai."
    },
    {
      "difficulty": "easy",
      "q": "Which of the following is a code editor?",
      "options": [
        "VS Code",
        "GitHub",
        "GDB",
        "Repl.it"
      ],
      "answer": 0,
      "explanation": "VS Code aur Notepad++ code editors ki misalein hain."
    },
    {
      "difficulty": "easy",
      "q": "The Python interpreter translates code:",
      "options": [
        "all at once",
        "only at the end",
        "only when saving",
        "line by line"
      ],
      "answer": 3,
      "explanation": "Interpreter code ko ek ek line translate kar ke chalata hai."
    },
    {
      "difficulty": "easy",
      "q": "GitHub is an example of a:",
      "options": [
        "debugger",
        "compiler",
        "source code repository",
        "code editor"
      ],
      "answer": 2,
      "explanation": "GitHub code store karne aur changes track karne ka platform hai."
    },
    {
      "difficulty": "medium",
      "q": "A compiler translates:",
      "options": [
        "one line at a time",
        "the entire code at once",
        "only comments",
        "only variables"
      ],
      "answer": 1,
      "explanation": "Compiler (jaise GCC) poora source code ek saath machine language mein badalta hai."
    },
    {
      "difficulty": "medium",
      "q": "An IDE integrates:",
      "options": [
        "editor, compiler, debugger and version control tools",
        "only a text editor",
        "only a browser",
        "only a database"
      ],
      "answer": 0,
      "explanation": "IDE sab zaroori tools ek hi jagah de kar development tez karta hai."
    },
    {
      "difficulty": "medium",
      "q": "GDB is a:",
      "options": [
        "Python IDE",
        "code editor",
        "cloud platform",
        "debugger for C/C++"
      ],
      "answer": 3,
      "explanation": "GDB ka matlab GNU Debugger hai, jo C/C++ ke liye hai."
    },
    {
      "difficulty": "medium",
      "q": "Repl.it and Gitpod are examples of:",
      "options": [
        "offline platforms",
        "compilers",
        "online (cloud-based) platforms",
        "debuggers"
      ],
      "answer": 2,
      "explanation": "Yeh internet par chalne wale cloud-based development platforms hain."
    },
    {
      "difficulty": "hard",
      "q": "Which tool allows multiple developers to work on the same project without conflicts through version control?",
      "options": [
        "Code editor",
        "Source code repository",
        "Interpreter",
        "Debugger"
      ],
      "answer": 1,
      "explanation": "Repositories changes track karti hain, isliye kai developers saath kaam kar sakte hain."
    },
    {
      "difficulty": "hard",
      "q": "Translators are tools that convert:",
      "options": [
        "high-level language code into machine language",
        "machine language into pictures",
        "text into audio",
        "files into folders"
      ],
      "answer": 0,
      "explanation": "Computer sirf machine language (binary) samajhta hai, isliye translation zaroori hai."
    },
    {
      "difficulty": "hard",
      "q": "PyCharm is best described as:",
      "options": [
        "a GitHub alternative",
        "a compiler for C++",
        "an online editor only",
        "an IDE preferred for Python development"
      ],
      "answer": 3,
      "explanation": "PyCharm Python ke liye mashhoor Integrated Development Environment hai."
    }
  ]
}