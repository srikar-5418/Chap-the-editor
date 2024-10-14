
export const LANGUAGE_VERSIONS={
    c:'10.2.0',
    cpp:'10.2.0',
    java:'15.0.2',
    javascript:'18.15.0',
    typescript:'5.0.3',
    python :'3.10.0',
    go:'1.16.2',
    csharp: '6.12.0',
    kotlin:'1.8.20',
    perl:'5.36.0',
    php:'8.2.3',
    ruby:'3.0.1',
    rust:'1.68.2',
    swift:'5.3.3',
    bash:'5.2.0',
}

export const CODE_SNIPPETS = {
    javascript: `function welcome() {\n\tconsole.log("Welcome to Srikar's Code Editor!");\n}\n\nwelcome();\n`,
  
    typescript: `type Params = {\n\tmessage: string;\n}\n\nfunction welcome(data: Params) {\n\tconsole.log(data.message);\n}\n\nwelcome({ message: "Welcome to Srikar's Code Editor!" });\n`,
  
    python: `def welcome():\n\tprint("Welcome to Srikar's Code Editor!")\n\nwelcome()\n`,
  
    java: `import java.util.*;\nimport java.io.*;\n\npublic class Welcome {\n\tpublic static void main(String[] args) {\n\t\tSystem.out.println("Welcome to Srikar's Code Editor!");\n\t}\n}\n`,
  
    csharp: `using System;\nusing System.Collections.Generic;\n\nnamespace CodeEditor\n{\n\tclass Welcome {\n\t\tstatic void Main(string[] args) {\n\t\t\tConsole.WriteLine("Welcome to Srikar's Code Editor!");\n\t\t}\n\t}\n}\n`,
  
    php: `<?php\n\necho "Welcome to Srikar's Code Editor!";\n`,
  
    cpp: `#include <bits/stdc++.h>\nusing namespace std;\n\nint main() {\n\tcout << "Welcome to Srikar's Code Editor!" << endl;\n\treturn 0;\n}\n`,

    c: `#include <stdio.h>\n\nint main() {\n\tprintf("Welcome to Srikar's Code Editor!");\n\treturn 0;\n}\n`,
  
    ruby: `def welcome\n\tputs "Welcome to Srikar's Code Editor!"\nend\n\nwelcome()\n`,
  
    go: `package main\nimport "fmt"\n\nfunc welcome() {\n\tfmt.Println("Welcome to Srikar's Code Editor!")\n}\n\nfunc main() {\n\twelcome()\n}\n`,
  
    rust: `fn welcome() {\n\tprintln!("Welcome to Srikar's Code Editor!");\n}\n\nfn main() {\n\twelcome();\n}\n`,
  
    kotlin: `import java.util.*;\n\nfun welcome() {\n\tprintln("Welcome to Srikar's Code Editor!")\n}\n\nfun main() {\n\twelcome()\n}\n`,
  
    swift: `import Foundation\n\nfunc welcome() {\n\tprint("Welcome to Srikar's Code Editor!")\n}\n\nwelcome()\n`,
  
    perl: `use List::Util qw(shuffle);\n\nsub welcome {\n\tprint "Welcome to Srikar's Code Editor!\\n";\n}\n\nwelcome();\n`,
  
    bash: `#!/bin/bash\n\necho "Welcome to Srikar's Code Editor!"\n`,
  };
  
  export const LANGUAGE_INFO = {
    cpp: {
      version: 'C++ (10.2.0)',
      description: 'C++ does not have built-in Tree Set or Tree Map data structures, but you can use `std::set` and `std::map` from the Standard Template Library (STL).'
    },
    c: {
      version: 'C (gcc 10.2.0)',
      description: 'C does not have built-in Tree Set or Tree Map data structures, but you can use structures to build it.'
    },
    java: {
      version: 'Java (15.0.2)',
      description: 'Java provides built-in Tree Set and Tree Map data structures in the `java.util` package, which are part of the Java Collections Framework.'
    },
    javascript: {
      version: 'JavaScript (18.15.0)',
      description: 'JavaScript does not have built-in Queue and Priority Queue data structures so you may use datastructures-js/queue and datastructures-js/priority-queue instead.'
    },
    typescript: {
      version: 'TypeScript (5.0.3)',
      description: 'TypeScript does not have built-in Queue and Priority Queue data structures so you may use datastructures-js/queue and datastructures-js/priority-queue instead.'
    },
    python: {
      version: 'Python (3.10.0)',
      description: 'Python does not have built-in Tree Set or Tree Map data structures, so you may use `sortedcontainers` for sorted data structures.'
    },
    csharp: {
      version: 'C# (6.12.0)',
      description: 'C# provides `SortedSet<T>` and `SortedDictionary<TKey, TValue>` in the `System.Collections.Generic` namespace for sorted data structures.'
    },
    kotlin:{
      version: 'kotlin (1.8.20)',
      description :'kotlin (1.8.20)'
    },
    perl:{
      version: 'perl (5.36.0)',
      description :'perl (5.36.0)'
    },
    php:{
      version: 'php (8.2.3)',
      description :'php (8.2.3)'
    },
    ruby:{
      version: 'ruby (3.0.1)',
      description :'ruby (3.0.1)'
    },
    rust:{
      version: 'rust (1.68.2)',
      description :'rust (1.68.2)'
    },
    swift:{
      version:'swift (5.3.3)',
      description:'swift (5.3.3)'
    },
    go:{
      version:'go (1.16.2)',
      description:'go (1.16.2)'
    },
    bash:{
      version:'bash (5.2.0)',
      description:'bash (5.2.0)'
    }
  };
  
  export const FONT_SIZE=["12px  ","13px  ","14px  ","15px  ","16px  ","17px  ","18px  ","19px  ","20px  ","21px  ","22px  ","23px  ","24px  "];

  export const  TAB_SPACES=["2 spaces","4 spaces"];