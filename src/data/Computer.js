// Computer Science & Entrepreneurship - 1st Year (Class 11), PECTAA 2025-26
// Unit 1 mukammal (notes, flashcards). Baaki units ke notes jald add honge.
// bookPage = book ka page number jahan topic shuru hota hai.

export const computerYear1 = [
  {
    id: "cs-u1",
    title: "Unit 1: Introduction to Software Development",
    topics: [
      {
        "id": "cs-u1-1",
        "title": "Software Development",
        "bookPage": 1,
        "videos": [
          {
            "title": "Lecture",
            "videoId": ""
          }
        ],
        "notes": "Software development us process ko kehte hain jisme kisi khaas kaam ke liye computer programs banaye jate hain.\n\nIs mein 3 buniyadi kaam hote hain:\n• Code likhna (writing code)\n• Code ko test karna (testing)\n• Jo masle (issues) samne aayen unhe theek karna\n\nYeh ek systematic process hai: user ki zaroorat (user needs) se shuru hota hai aur analysis, design, coding, testing aur deployment ke stages se guzarta hai.\n\nHar stage ki apni ahmiyat hoti hai aur uske liye khaas skills aur tools chahiye hote hain. Isi liye reliable, maintainable aur scalable software banane ke liye is process ko samajhna zaroori hai.",
        "flashcards": [
          {
            "front": "What is software development?",
            "back": "Specific kaam karne wale computer programs banane ka process: code likhna, test karna aur issues theek karna."
          },
          {
            "front": "Where does the software development process start from?",
            "back": "User ki zaroorat (user needs) se."
          },
          {
            "front": "Name the main stages a software goes through.",
            "back": "Analysis, design, coding, testing aur deployment."
          },
          {
            "front": "Why is understanding the development process important?",
            "back": "Taake reliable, maintainable aur scalable software banaya ja sake."
          }
        ]
      },
      {
        "id": "cs-u1-2",
        "title": "Introduction to Software Development Life Cycle (SDLC)",
        "bookPage": 2,
        "videos": [
          {
            "title": "Lecture",
            "videoId": ""
          }
        ],
        "notes": "SDLC (Software Development Life Cycle) ek framework hai jo batata hai ke koi application idea se le kar deployment aur maintenance tak kaise banayi jaye.\n\nMaqsad: aisa high-quality software dena jo customer ki umeed puri kare, time aur cost ke andar mukammal ho aur theek tareeqe se chale.\n\nFramework kya hai? Concepts, practices aur tools ka standardized aur reusable set, jo software banane ki structured buniyad deta hai. Misal: website ke liye Django, jisme user login, database management aur page templates pehle se maujood hain.\n\nSDLC ke stages:\n1. Requirement Gathering: users aur stakeholders se baat kar ke zaroorat samajhna. Activities: Interviews/Surveys, Observations, Document Review.\n2. Design: diagrams, models (UI mockups) aur architecture banana. Ghar banane se pehle blueprint ki tarah.\n3. Coding / Development: design ko programming language mein likhna.\n4. Testing: bugs dhoondna. Types: Functionality, Performance, Compatibility testing.\n5. Deployment: Installation, Configuration aur real-world testing.\n6. Maintenance: updates aur fixes, taake software chalta rahe.\n\nRequirements 2 qism ki hoti hain:\n• Functional: system KYA kare (misal: user registration, book borrowing, inventory management).\n• Non-functional: system KAISE perform kare (misal: performance, reliability, security).",
        "flashcards": [
          {
            "front": "What is the primary purpose of SDLC?",
            "back": "High-quality software dena jo customer ki expectations puri kare, time aur cost ke andar ho aur efficiently chale."
          },
          {
            "front": "List the stages of SDLC.",
            "back": "Requirement gathering, Design, Coding, Testing, Deployment, Maintenance."
          },
          {
            "front": "What is a framework in software development?",
            "back": "Standardized, reusable concepts, practices aur tools ka set jo structured buniyad deta hai (misal: Django)."
          },
          {
            "front": "What are functional requirements?",
            "back": "System ke specific behaviors/functions: system kya kare (jaise registration, book borrowing)."
          },
          {
            "front": "What are non-functional requirements?",
            "back": "Quality attributes aur constraints: system kaise perform kare (performance, reliability, security)."
          },
          {
            "front": "Key activities in requirement gathering?",
            "back": "Interviews and surveys, observations, document review."
          },
          {
            "front": "Types of testing in the SDLC testing stage?",
            "back": "Functionality testing, performance testing, compatibility testing."
          },
          {
            "front": "What does deployment involve?",
            "back": "Installation, configuration aur real-world environment mein testing."
          }
        ]
      },
      {
        "id": "cs-u1-3",
        "title": "Software Development Methodologies",
        "bookPage": 5,
        "videos": [
          {
            "title": "Lecture",
            "videoId": ""
          }
        ],
        "notes": "Software development methodology ek structured tareeqa hai jo software project ki planning, creation aur management ko guide karta hai.\n\nSoftware process models SDLC ke processes ka abstract representation hain. Inke fawaid:\n• Predictability: outcomes ka andaza aur risks ka behtar management\n• Efficiency: zaya hone wali mehnat kam\n• Quality: quality assurance poore process mein shamil\n\nWaterfall Model:\n• Linear aur sequential: har phase mukammal hone ke baad hi agla shuru hota hai, peeche wapas nahi jate.\n• Phases: Requirements, Design, Implementation, Testing, Deployment, Maintenance.\n• Fawaid: asaan, phases saaf, chhote projects ke liye theek jin ki requirements fixed hon.\n• Nuqsan: inflexible (peeche ja kar tabdeeli mushkil aur mehngi), complex projects ke liye munasib nahi, risk kyun ke maan liya jata hai ke sab requirements shuru se maloom hain.\n\nAgile Methodology:\n• Flexible aur adaptive. Software ke chhote functional hisse jaldi diye jate hain aur tabdeeli ke mutabiq dhal jate hain.\n• Kaam short cycles mein hota hai jinhe iterations ya sprints kehte hain, aur feedback jaldi milta hai.\n• Practices: Continuous Integration, Test-Driven Development, Pair Programming.\n• Fawaid: high flexibility, behtar customer satisfaction.\n• Nuqsan: scaling challenges, stakeholders ki mustaqil shirkat, kam predictable timeline.",
        "flashcards": [
          {
            "front": "What is the Waterfall Model?",
            "back": "Linear aur sequential model jisme har phase mukammal hone ke baad agla shuru hota hai."
          },
          {
            "front": "Phases of the Waterfall Model?",
            "back": "Requirements, Design, Implementation, Testing, Deployment, Maintenance."
          },
          {
            "front": "Benefits of Waterfall?",
            "back": "Asaan, phases clear, chhote fixed-requirement projects ke liye munasib."
          },
          {
            "front": "Limitations of Waterfall?",
            "back": "Inflexible, complex projects ke liye mushkil, sab requirements shuru mein maloom maan li jati hain."
          },
          {
            "front": "What is Agile Methodology?",
            "back": "Flexible, adaptive approach jo chhote functional hisse jaldi deti hai aur tabdeeliyan qabool karti hai."
          },
          {
            "front": "What are iterations or sprints?",
            "back": "Agile ki chhoti cycles jin mein software ke hisse jaldi diye jate hain aur feedback liya jata hai."
          },
          {
            "front": "What is Continuous Integration?",
            "back": "Code changes ko regularly central repository mein merge karna taake issues jaldi pakde jayen."
          },
          {
            "front": "What is Test-Driven Development?",
            "back": "Code likhne se pehle tests likhna."
          },
          {
            "front": "What is Pair Programming?",
            "back": "Do developers ek workstation par: ek code likhta hai, doosra real-time review karta hai."
          },
          {
            "front": "Benefits of software process models?",
            "back": "Predictability, efficiency aur quality."
          }
        ]
      },
      {
        "id": "cs-u1-4",
        "title": "Project Planning and Management",
        "bookPage": 8,
        "videos": [
          {
            "title": "Lecture",
            "videoId": ""
          }
        ],
        "notes": "Software project ki planning safar ki planning jaisi hai: aapko pata hona chahiye ke kahan jana hai, kitna waqt lagega aur kitna kharcha hoga.\n\n• Comprehensive Project Planning: shuru karne se pehle sab tafseelat sochna: kya karna hai, kaun karega aur kaise hoga.\n• Setting Project Timelines: har hisse ke liye waqt tay karna, taake project track par rahe aur time par mukammal ho.\n• Estimating Costs: project ke kul akhrajaat ka pehle se andaza, jo budgeting aur resource allocation mein madad karta hai.\n  Key factors: Development Team, Technology Stack, Project Duration, Risk Management, Quality Assurance.\n  Contingency funds ghair mutawaqqa masail ke liye rakhe jate hain.\n\nRisk Assessment and Management ke 4 steps:\n1. Identify Risks: tamam mumkina risks ki list (technical, operational, external)\n2. Analyze Risks: har risk ke hone ka imkan aur asar jaanchna\n3. Develop Mitigation Strategies: risk kam karne ka plan (schedule mein buffer, backup resources, extra testing)\n4. Monitor and Review: naye risks par nazar rakhna aur strategies adjust karna\n\n• Execution: asal development ka phase: code likhna, designs banana, software tayyar karna. Teamwork, coordination aur regular updates chahiye.\n• Quality Assurance: testing, code review, stakeholders ka feedback aur progress ki baqaida checking.",
        "flashcards": [
          {
            "front": "Project planning is compared to what?",
            "back": "Safar ki planning: kahan jana hai, kitna waqt aur kitna kharcha."
          },
          {
            "front": "Why set project timelines?",
            "back": "Taake har hissa tay waqt mein ho aur project time par mukammal ho."
          },
          {
            "front": "Key factors in cost estimation?",
            "back": "Development team, technology stack, project duration, risk management, quality assurance."
          },
          {
            "front": "Steps of risk assessment and management?",
            "back": "Identify, Analyze, Develop mitigation strategies, Monitor and review."
          },
          {
            "front": "Types of risks mentioned?",
            "back": "Technical, operational (jaise resource shortage) aur external (jaise market fluctuations)."
          },
          {
            "front": "Examples of mitigation strategies?",
            "back": "Schedule mein buffer, backup resources, additional testing."
          },
          {
            "front": "What is the execution phase?",
            "back": "Asal development: code likhna, designs aur software banana, teamwork aur regular updates ke saath."
          },
          {
            "front": "What does quality assurance involve?",
            "back": "Testing, code review, stakeholders ka feedback aur progress ki regular checking."
          }
        ]
      },
      {
        "id": "cs-u1-5",
        "title": "Graphical Representation of Software Systems",
        "bookPage": 9,
        "videos": [
          {
            "title": "Lecture",
            "videoId": ""
          }
        ],
        "notes": "Graphical representation ka matlab hai diagrams ke zariye software ke structure aur behavior ko dikhana. Isse complex system aasan ho jata hai aur developers aur stakeholders ek dusre ko behtar samjhte hain.\n\nUML (Unified Modeling Language): software system ke design ko visualize karne ka standardized tareeqa.\n\nUML diagrams ki 4 qismein:\n1. Use Case Diagram: system ki functionality user ke nazariye se dikhata hai.\n   • Use case = user (actor) aur system ke darmiyan interactions ka set jo ek goal poora kare.\n   • Maqsad: functional requirements capture karna, user interactions samajhna, planning aur test cases.\n   • Use cases dhoondne ke steps: Identify actors, Define goals, Outline interactions, Validate use cases.\n2. Class Diagram: ek naqshe ki tarah jo dikhata hai system mein cheezein kaise organized hain (classes, attributes, methods). Misal: Room, Box, aur ToyBox/BookBox/ClothesBox.\n3. Sequence Diagram: objects ek tarteeb (sequence) mein kaise interact karte hain; waqt ke saath messages ka flow.\n4. Activity Diagram: kisi process ke activities ya steps ka flow; complex operations ki logic (misal: Order Placement se Food Preparation aur phir Order Delivery).\n\nUML ka istemal: Planning (code se pehle), Development (structure samajhne ke liye), Communication (non-technical stakeholders ke liye bhi).",
        "flashcards": [
          {
            "front": "What does UML stand for?",
            "back": "Unified Modeling Language."
          },
          {
            "front": "What is UML used for?",
            "back": "Software system ke design ko visualize karne ka standardized tareeqa."
          },
          {
            "front": "What is a use case?",
            "back": "User (actor) aur system ke darmiyan interactions ka set jo ek khaas goal poora kare."
          },
          {
            "front": "Steps to identify use cases?",
            "back": "Identify actors, define goals, outline interactions, validate use cases."
          },
          {
            "front": "What does a class diagram show?",
            "back": "System mein cheezein kaise organized hain: classes, attributes aur methods."
          },
          {
            "front": "What does a sequence diagram show?",
            "back": "Objects ek tarteeb mein kaise interact karte hain aur messages ka flow waqt ke saath."
          },
          {
            "front": "What does an activity diagram show?",
            "back": "Kisi process ke activities/steps ka flow."
          },
          {
            "front": "Four UML diagrams in this chapter?",
            "back": "Use case, class, sequence aur activity diagram."
          },
          {
            "front": "Uses of UML in development?",
            "back": "Planning, development aur communication."
          }
        ]
      },
      {
        "id": "cs-u1-6",
        "title": "Introduction to Design Patterns",
        "bookPage": 13,
        "videos": [
          {
            "title": "Lecture",
            "videoId": ""
          }
        ],
        "notes": "Design patterns software development ke aam masail ke common hal hain. Yeh templates ki tarah hain jo coding ko aasan, tez aur consistent banate hain.\n\nMashhoor design patterns:\n• Singleton Pattern: kisi object ya resource ko program mein sirf ek hi baar banana aur zaroorat par usi ko dobara istemal karna.\n• Factory Pattern: ek khaas workshop ki tarah jo alag alag products banana jaanti hai. Aapko banane ki tafseel ki fikar nahi: bas batao kya chahiye, tayyar product mil jata hai.\n• Observer Pattern: un logon ke group ki tarah jo ek source se updates chahte hain. Jab kuch ahem ho, source khud sab ko notify kar deta hai. Sab ko baar baar check nahi karna padta.\n• Strategy Pattern: tools se bhare toolbox ki tarah. Masle ke hisaab se sahi tool (strategy) chun li jati hai.\n\nDesign patterns ke fawaid:\n• Code ki complexity kam hoti hai\n• Code reusability barhti hai (aazmaye hue hal)\n• Developers ke darmiyan common vocabulary banti hai\n• System flexible, maintainable aur samajhne mein aasan hota hai\n\nMisal: MVC (Model-View-Controller) pattern web frameworks jaise Ruby on Rails aur Angular mein istemal hota hai.",
        "flashcards": [
          {
            "front": "What are design patterns?",
            "back": "Software development ke common masail ke common hal, templates ki tarah."
          },
          {
            "front": "What is the Singleton pattern?",
            "back": "Object ya resource program mein sirf ek baar banta hai aur dobara istemal hota hai."
          },
          {
            "front": "What is the Factory pattern?",
            "back": "Workshop ki tarah: aap batate ho kya chahiye, factory tayyar product de deti hai, banane ki tafseel chhupi rehti hai."
          },
          {
            "front": "What is the Observer pattern?",
            "back": "Source mein tabdeeli hone par interested logon ko khud notify kar dena."
          },
          {
            "front": "What is the Strategy pattern?",
            "back": "Toolbox ki tarah: masle ke hisaab se sahi tool/strategy chunna."
          },
          {
            "front": "Benefits of design patterns?",
            "back": "Complexity kam, reusability, common vocabulary, flexible aur maintainable code."
          },
          {
            "front": "Name a pattern used in web frameworks.",
            "back": "MVC (Model-View-Controller): Ruby on Rails aur Angular mein."
          }
        ]
      },
      {
        "id": "cs-u1-7",
        "title": "Software Debugging and Testing",
        "bookPage": 15,
        "videos": [
          {
            "title": "Lecture",
            "videoId": ""
          }
        ],
        "notes": "Debugging aur testing is liye zaroori hain ke software requirements ke mutabiq theek chale. Yeh errors dhoondne aur theek karne mein madad karte hain.\n\nDebugging: software ke bugs (errors) dhoondna aur theek karna. Bug woh ghalti hai jis se software ghair mutawaqqa tareeqe se behave kare.\nTools aur best practices:\n• Debuggers: code ko step by step chalane, variables dekhne aur execution monitor karne ke tools\n• Print statements: program ke alag points par variables ki values dikhane ke liye\n• Code reviews: doosre developers se code check karwana\n\nTesting: software ko evaluate karna ke woh requirements puri karta hai aur umeed ke mutabiq chalta hai. Yeh chhote components se shuru ho kar poore system tak jati hai:\n1. Unit Testing: pehla level. Software ke individual components/modules (jaise ek function) ko alag alag test karte hain.\n2. Integration Testing: components jab mil kar kaam karein to unka aapas ka interaction test karna. Interface errors aur modules ke darmiyan data flow dekha jata hai.\n3. System Testing: poora software ek saath test hota hai: functionality, performance, security aur requirements ki compliance.\n4. Acceptance Testing: yeh tay karna ke software release ke liye tayyar hai ya nahi. Aksar end-users ya clients karte hain, isliye isay User Acceptance Testing (UAT) bhi kehte hain.",
        "flashcards": [
          {
            "front": "What is debugging?",
            "back": "Software ke bugs/errors dhoondna aur theek karna."
          },
          {
            "front": "What is a bug?",
            "back": "Software mein ghalti jis se woh ghair mutawaqqa behave kare."
          },
          {
            "front": "Debugging tools and practices?",
            "back": "Debuggers, print statements, code reviews."
          },
          {
            "front": "What is unit testing?",
            "back": "Pehla level: individual components ya functions ko alag alag test karna."
          },
          {
            "front": "What is integration testing?",
            "back": "Components ke aapas ke interaction aur data flow ki testing."
          },
          {
            "front": "What is system testing?",
            "back": "Poore software ko ek saath test karna: functionality, performance, security, compliance."
          },
          {
            "front": "What is acceptance testing?",
            "back": "Check karna ke software release ke liye tayyar hai; aksar end-users/clients karte hain."
          },
          {
            "front": "What does UAT stand for?",
            "back": "User Acceptance Testing."
          },
          {
            "front": "Order of the testing hierarchy?",
            "back": "Unit, Integration, System, Acceptance."
          }
        ]
      },
      {
        "id": "cs-u1-8",
        "title": "Software Development Tools",
        "bookPage": 16,
        "videos": [
          {
            "title": "Lecture",
            "videoId": ""
          }
        ],
        "notes": "Software development tools woh programs hain jo software banane ke alag alag stages mein madad karte hain: code likhna, edit, test, debug aur manage karna.\n\n• Language Editors (Code Editors): alag programming languages mein code likhne aur edit karne ke tools. Misal: Notepad++, VS Code.\n• Translators: ek language ke code ko computer ke samajhne wali language mein badalte hain, yaani high-level language (jaise Python) ko machine language (binary) mein. 2 types:\n   - Interpreter: code line by line translate karta hai (misal: Python interpreter)\n   - Compiler: poora code ek saath translate karta hai (misal: GCC for C/C++)\n• Debuggers: code ke errors dhoondne aur theek karne ke liye. Misal: GDB (GNU Debugger for C/C++), Visual Studio Debugger.\n• IDEs (Integrated Development Environments): aise complete suites jisme editor, compiler, debugger aur version control sab ek jagah hote hain. Misal: Visual Studio (.NET aur C++), PyCharm (Python).\n• Online aur Offline Platforms:\n   - Online: internet par cloud-based (jaise Repl.it, Gitpod)\n   - Offline: computer par local installation (jaise IDEs)\n• Source Code Repositories: aise platforms jahan code store, manage aur uski tabdeeliyan track hoti hain. Version control ki wajah se kai developers bina takraav ek hi project par kaam kar sakte hain. Misal: GitHub (open-source ke liye mashhoor), Bitbucket (private aur public dono).",
        "flashcards": [
          {
            "front": "What are language (code) editors?",
            "back": "Code likhne aur edit karne ke tools. Misal: Notepad++, VS Code."
          },
          {
            "front": "What do translators do?",
            "back": "High-level language ko machine language (binary) mein badalte hain."
          },
          {
            "front": "Interpreter vs compiler?",
            "back": "Interpreter line by line translate karta hai (Python); compiler poora code ek saath (GCC for C/C++)."
          },
          {
            "front": "What is a debugger?",
            "back": "Errors dhoondne aur theek karne ka tool. Misal: GDB, Visual Studio Debugger."
          },
          {
            "front": "What is an IDE?",
            "back": "Aisa suite jisme editor, compiler, debugger aur version control ek jagah hote hain."
          },
          {
            "front": "Examples of IDEs?",
            "back": "Visual Studio (.NET aur C++), PyCharm (Python)."
          },
          {
            "front": "Online vs offline platforms?",
            "back": "Online: cloud-based (Repl.it, Gitpod); Offline: computer par local installation."
          },
          {
            "front": "What is a source code repository?",
            "back": "Platform jahan code store, manage aur uski changes track hoti hain (version control)."
          },
          {
            "front": "Examples of repositories?",
            "back": "GitHub aur Bitbucket."
          }
        ]
      },
      {
        "id": "cs-u1-test",
        "title": "Unit 1 Test",
        "bookPage": 18,
        "videos": [
          {
            "title": "Unit Test Discussion",
            "videoId": ""
          }
        ],
        "notes": "Yeh Unit 1 ke tamam topics ka combined test hai. Pehle har topic ke notes aur flashcards parh lo, phir apni difficulty chun kar test do. Ghalat jawab Mistakes Diary mein save ho jayenge.",
        "flashcards": []
      }
    ],
  },
  {
    id: "cs-u2",
    title: "Unit 2: Python Programming",
    topics: [
      {
        "id": "cs-u2-1",
        "title": "Introduction to Python Programming",
        "bookPage": 20,
        "videos": [
          {
            "title": "Lecture",
            "videoId": ""
          }
        ],
        "notes": "Notes jald add honge.",
        "flashcards": []
      },
      {
        "id": "cs-u2-2",
        "title": "Basic Python Syntax and Structure",
        "bookPage": 21,
        "videos": [
          {
            "title": "Lecture",
            "videoId": ""
          }
        ],
        "notes": "Notes jald add honge.",
        "flashcards": []
      },
      {
        "id": "cs-u2-3",
        "title": "Operators and Expressions",
        "bookPage": 23,
        "videos": [
          {
            "title": "Lecture",
            "videoId": ""
          }
        ],
        "notes": "Notes jald add honge.",
        "flashcards": []
      },
      {
        "id": "cs-u2-4",
        "title": "Control Structures",
        "bookPage": 26,
        "videos": [
          {
            "title": "Lecture",
            "videoId": ""
          }
        ],
        "notes": "Notes jald add honge.",
        "flashcards": []
      },
      {
        "id": "cs-u2-5",
        "title": "Python Modules and Built-in Data Structures",
        "bookPage": 28,
        "videos": [
          {
            "title": "Lecture",
            "videoId": ""
          }
        ],
        "notes": "Notes jald add honge.",
        "flashcards": []
      },
      {
        "id": "cs-u2-6",
        "title": "Built-in Data Structures",
        "bookPage": 31,
        "videos": [
          {
            "title": "Lecture",
            "videoId": ""
          }
        ],
        "notes": "Notes jald add honge.",
        "flashcards": []
      },
      {
        "id": "cs-u2-7",
        "title": "Modular Programming in Python",
        "bookPage": 34,
        "videos": [
          {
            "title": "Lecture",
            "videoId": ""
          }
        ],
        "notes": "Notes jald add honge.",
        "flashcards": []
      },
      {
        "id": "cs-u2-8",
        "title": "Object-Oriented Programming in Python",
        "bookPage": 35,
        "videos": [
          {
            "title": "Lecture",
            "videoId": ""
          }
        ],
        "notes": "Notes jald add honge.",
        "flashcards": []
      },
      {
        "id": "cs-u2-9",
        "title": "Advanced Python Concepts",
        "bookPage": 36,
        "videos": [
          {
            "title": "Lecture",
            "videoId": ""
          }
        ],
        "notes": "Notes jald add honge.",
        "flashcards": []
      },
      {
        "id": "cs-u2-10",
        "title": "Testing and Debugging in Python",
        "bookPage": 38,
        "videos": [
          {
            "title": "Lecture",
            "videoId": ""
          }
        ],
        "notes": "Notes jald add honge.",
        "flashcards": []
      }
    ],
  },
  {
    id: "cs-u3",
    title: "Unit 3: Algorithms and Problem Solving",
    topics: [
      {
        "id": "cs-u3-1",
        "title": "Understanding Computational Problems",
        "bookPage": 41,
        "videos": [
          {
            "title": "Lecture",
            "videoId": ""
          }
        ],
        "notes": "Notes jald add honge.",
        "flashcards": []
      },
      {
        "id": "cs-u3-2",
        "title": "Algorithms for Problem Solving",
        "bookPage": 43,
        "videos": [
          {
            "title": "Lecture",
            "videoId": ""
          }
        ],
        "notes": "Notes jald add honge.",
        "flashcards": []
      },
      {
        "id": "cs-u3-3",
        "title": "Problem Solvability and Complexity",
        "bookPage": 44,
        "videos": [
          {
            "title": "Lecture",
            "videoId": ""
          }
        ],
        "notes": "Notes jald add honge.",
        "flashcards": []
      },
      {
        "id": "cs-u3-4",
        "title": "Algorithm Analysis",
        "bookPage": 47,
        "videos": [
          {
            "title": "Lecture",
            "videoId": ""
          }
        ],
        "notes": "Notes jald add honge.",
        "flashcards": []
      },
      {
        "id": "cs-u3-5",
        "title": "Algorithm Design Techniques",
        "bookPage": 48,
        "videos": [
          {
            "title": "Lecture",
            "videoId": ""
          }
        ],
        "notes": "Notes jald add honge.",
        "flashcards": []
      },
      {
        "id": "cs-u3-6",
        "title": "Commonly Used Algorithms",
        "bookPage": 50,
        "videos": [
          {
            "title": "Lecture",
            "videoId": ""
          }
        ],
        "notes": "Notes jald add honge.",
        "flashcards": []
      }
    ],
  },
  {
    id: "cs-u4",
    title: "Unit 4: Computational Structures",
    topics: [
      {
        "id": "cs-u4-1",
        "title": "Lists",
        "bookPage": 56,
        "videos": [
          {
            "title": "Lecture",
            "videoId": ""
          }
        ],
        "notes": "Notes jald add honge.",
        "flashcards": []
      },
      {
        "id": "cs-u4-2",
        "title": "Stacks",
        "bookPage": 58,
        "videos": [
          {
            "title": "Lecture",
            "videoId": ""
          }
        ],
        "notes": "Notes jald add honge.",
        "flashcards": []
      },
      {
        "id": "cs-u4-3",
        "title": "Queues",
        "bookPage": 59,
        "videos": [
          {
            "title": "Lecture",
            "videoId": ""
          }
        ],
        "notes": "Notes jald add honge.",
        "flashcards": []
      },
      {
        "id": "cs-u4-4",
        "title": "Trees",
        "bookPage": 60,
        "videos": [
          {
            "title": "Lecture",
            "videoId": ""
          }
        ],
        "notes": "Notes jald add honge.",
        "flashcards": []
      },
      {
        "id": "cs-u4-5",
        "title": "Introduction to Graphs",
        "bookPage": 62,
        "videos": [
          {
            "title": "Lecture",
            "videoId": ""
          }
        ],
        "notes": "Notes jald add honge.",
        "flashcards": []
      }
    ],
  },
  {
    id: "cs-u5",
    title: "Unit 5: Data Analytics",
    topics: [
      {
        "id": "cs-u5-1",
        "title": "Basic Statistical Concepts",
        "bookPage": 67,
        "videos": [
          {
            "title": "Lecture",
            "videoId": ""
          }
        ],
        "notes": "Notes jald add honge.",
        "flashcards": []
      },
      {
        "id": "cs-u5-2",
        "title": "Data Collection and Preparation",
        "bookPage": 71,
        "videos": [
          {
            "title": "Lecture",
            "videoId": ""
          }
        ],
        "notes": "Notes jald add honge.",
        "flashcards": []
      },
      {
        "id": "cs-u5-3",
        "title": "Building Statistical Models",
        "bookPage": 74,
        "videos": [
          {
            "title": "Lecture",
            "videoId": ""
          }
        ],
        "notes": "Notes jald add honge.",
        "flashcards": []
      },
      {
        "id": "cs-u5-4",
        "title": "Introduction to Data Visualization",
        "bookPage": 79,
        "videos": [
          {
            "title": "Lecture",
            "videoId": ""
          }
        ],
        "notes": "Notes jald add honge.",
        "flashcards": []
      },
      {
        "id": "cs-u5-5",
        "title": "Tools for Data Visualization",
        "bookPage": 82,
        "videos": [
          {
            "title": "Lecture",
            "videoId": ""
          }
        ],
        "notes": "Notes jald add honge.",
        "flashcards": []
      }
    ],
  },
  {
    id: "cs-u6",
    title: "Unit 6: Emerging Technologies",
    topics: [
      {
        "id": "cs-u6-1",
        "title": "Definition and Overview of Emerging Technologies",
        "bookPage": 87,
        "videos": [
          {
            "title": "Lecture",
            "videoId": ""
          }
        ],
        "notes": "Notes jald add honge.",
        "flashcards": []
      },
      {
        "id": "cs-u6-2",
        "title": "Cloud Computing",
        "bookPage": 88,
        "videos": [
          {
            "title": "Lecture",
            "videoId": ""
          }
        ],
        "notes": "Notes jald add honge.",
        "flashcards": []
      },
      {
        "id": "cs-u6-3",
        "title": "Applications and Implications of Cloud Computing",
        "bookPage": 90,
        "videos": [
          {
            "title": "Lecture",
            "videoId": ""
          }
        ],
        "notes": "Notes jald add honge.",
        "flashcards": []
      },
      {
        "id": "cs-u6-4",
        "title": "Introduction to Blockchain Technology",
        "bookPage": 92,
        "videos": [
          {
            "title": "Lecture",
            "videoId": ""
          }
        ],
        "notes": "Notes jald add honge.",
        "flashcards": []
      },
      {
        "id": "cs-u6-5",
        "title": "Applications and Implications of Blockchain",
        "bookPage": 95,
        "videos": [
          {
            "title": "Lecture",
            "videoId": ""
          }
        ],
        "notes": "Notes jald add honge.",
        "flashcards": []
      },
      {
        "id": "cs-u6-6",
        "title": "Future Trends and Innovations",
        "bookPage": 97,
        "videos": [
          {
            "title": "Lecture",
            "videoId": ""
          }
        ],
        "notes": "Notes jald add honge.",
        "flashcards": []
      }
    ],
  },
  {
    id: "cs-u7",
    title: "Unit 7: Legal and Ethical Aspects of Computing System",
    topics: [
      {
        "id": "cs-u7-1",
        "title": "Understanding Terms of Use",
        "bookPage": 101,
        "videos": [
          {
            "title": "Lecture",
            "videoId": ""
          }
        ],
        "notes": "Notes jald add honge.",
        "flashcards": []
      },
      {
        "id": "cs-u7-2",
        "title": "Privacy and Security Threats",
        "bookPage": 104,
        "videos": [
          {
            "title": "Lecture",
            "videoId": ""
          }
        ],
        "notes": "Notes jald add honge.",
        "flashcards": []
      },
      {
        "id": "cs-u7-3",
        "title": "The Digital Divide and Its Impacts",
        "bookPage": 106,
        "videos": [
          {
            "title": "Lecture",
            "videoId": ""
          }
        ],
        "notes": "Notes jald add honge.",
        "flashcards": []
      },
      {
        "id": "cs-u7-4",
        "title": "Computing's Impact on Individuals and Society",
        "bookPage": 108,
        "videos": [
          {
            "title": "Lecture",
            "videoId": ""
          }
        ],
        "notes": "Notes jald add honge.",
        "flashcards": []
      },
      {
        "id": "cs-u7-5",
        "title": "Digital Citizenship and Ethical Considerations",
        "bookPage": 110,
        "videos": [
          {
            "title": "Lecture",
            "videoId": ""
          }
        ],
        "notes": "Notes jald add honge.",
        "flashcards": []
      }
    ],
  },
  {
    id: "cs-u8",
    title: "Unit 8: Online Research and Digital Literacy",
    topics: [
      {
        "id": "cs-u8-1",
        "title": "Online Research and Digital Literacy",
        "bookPage": 115,
        "videos": [
          {
            "title": "Lecture",
            "videoId": ""
          }
        ],
        "notes": "Notes jald add honge.",
        "flashcards": []
      },
      {
        "id": "cs-u8-2",
        "title": "Utilizing Digital Resources",
        "bookPage": 117,
        "videos": [
          {
            "title": "Lecture",
            "videoId": ""
          }
        ],
        "notes": "Notes jald add honge.",
        "flashcards": []
      },
      {
        "id": "cs-u8-3",
        "title": "Research Ethics",
        "bookPage": 118,
        "videos": [
          {
            "title": "Lecture",
            "videoId": ""
          }
        ],
        "notes": "Notes jald add honge.",
        "flashcards": []
      },
      {
        "id": "cs-u8-4",
        "title": "Understanding Intellectual Property",
        "bookPage": 119,
        "videos": [
          {
            "title": "Lecture",
            "videoId": ""
          }
        ],
        "notes": "Notes jald add honge.",
        "flashcards": []
      }
    ],
  },
  {
    id: "cs-u9",
    title: "Unit 9: Entrepreneurship in Digital Age",
    topics: [
      {
        "id": "cs-u9-1",
        "title": "Design Thinking and Business Solutions",
        "bookPage": 126,
        "videos": [
          {
            "title": "Lecture",
            "videoId": ""
          }
        ],
        "notes": "Notes jald add honge.",
        "flashcards": []
      },
      {
        "id": "cs-u9-2",
        "title": "Creating a Business Plan",
        "bookPage": 127,
        "videos": [
          {
            "title": "Lecture",
            "videoId": ""
          }
        ],
        "notes": "Notes jald add honge.",
        "flashcards": []
      },
      {
        "id": "cs-u9-3",
        "title": "Collecting Market Insights",
        "bookPage": 129,
        "videos": [
          {
            "title": "Lecture",
            "videoId": ""
          }
        ],
        "notes": "Notes jald add honge.",
        "flashcards": []
      },
      {
        "id": "cs-u9-4",
        "title": "Developing Effective Marketing and Sales Strategies",
        "bookPage": 132,
        "videos": [
          {
            "title": "Lecture",
            "videoId": ""
          }
        ],
        "notes": "Notes jald add honge.",
        "flashcards": []
      },
      {
        "id": "cs-u9-5",
        "title": "Financial Concepts for Business",
        "bookPage": 133,
        "videos": [
          {
            "title": "Lecture",
            "videoId": ""
          }
        ],
        "notes": "Notes jald add honge.",
        "flashcards": []
      },
      {
        "id": "cs-u9-6",
        "title": "Communication and Storytelling Skills",
        "bookPage": 135,
        "videos": [
          {
            "title": "Lecture",
            "videoId": ""
          }
        ],
        "notes": "Notes jald add honge.",
        "flashcards": []
      },
      {
        "id": "cs-u9-7",
        "title": "Collaboration and Iteration",
        "bookPage": 136,
        "videos": [
          {
            "title": "Lecture",
            "videoId": ""
          }
        ],
        "notes": "Notes jald add honge.",
        "flashcards": []
      },
      {
        "id": "cs-u9-8",
        "title": "Innovation and Creativity",
        "bookPage": 137,
        "videos": [
          {
            "title": "Lecture",
            "videoId": ""
          }
        ],
        "notes": "Notes jald add honge.",
        "flashcards": []
      }
    ],
  },
]