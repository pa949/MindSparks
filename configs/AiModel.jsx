
const {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
  } = require("@google/generative-ai");
  
  const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
  const genAI = new GoogleGenerativeAI(apiKey);
  
  const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
  });
  
  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 64,
    maxOutputTokens: 8192,
    responseMimeType: "application/json",
  };
  
  
    export const GenerateCourseLayout = model.startChat({
      generationConfig,
   // safetySettings: Adjust safety settings
   // See https://ai.google.dev/gemini-api/docs/safety-settings
      history: [
        {
          role: "user",
          parts: [
            {text: "Generate A Course Tutorial on Following Detail With field as Course Name, Description, Along with Chapter Name, about, Duration:\n\nCategory: 'Programming', Topic: Python, Level: Basic, Duration: 1 hours, NoOf Chapters:5, in JSON format\n"},
          ],
        },
        {
          role: "model",
          parts: [
            {text: "```json\n{\n  \"course_name\": \"Python Programming for Beginners\",\n  \"description\": \"This course is designed to introduce you to the fundamentals of Python programming.  You will learn how to write basic Python code, understand data types, control flow, functions, and more.  By the end of the course, you will be able to create simple Python programs and have a solid foundation for further learning.\",\n  \"chapters\": [\n    {\n      \"name\": \"Introduction to Python\",\n      \"about\": \"This chapter introduces you to the Python programming language, its history, and its applications. You will also learn how to set up your development environment and write your first Python program.\",\n      \"duration\": \"15 minutes\"\n    },\n    {\n      \"name\": \"Variables and Data Types\",\n      \"about\": \"This chapter covers the basics of variables, how to assign values to them, and the different data types available in Python, including integers, floats, strings, and booleans.\",\n      \"duration\": \"20 minutes\"\n    },\n    {\n      \"name\": \"Operators and Expressions\",\n      \"about\": \"This chapter delves into the various operators in Python, such as arithmetic, comparison, logical, and assignment operators. You will learn how to use them to construct expressions and perform calculations.\",\n      \"duration\": \"20 minutes\"\n    },\n    {\n      \"name\": \"Control Flow\",\n      \"about\": \"This chapter introduces conditional statements (if-else) and loops (for and while) to control the flow of your programs. You will learn how to make decisions and repeat blocks of code based on certain conditions.\",\n      \"duration\": \"15 minutes\"\n    },\n    {\n      \"name\": \"Functions\",\n      \"about\": \"This chapter explores the concept of functions in Python. You will learn how to define your own functions to encapsulate reusable blocks of code and make your programs more organized and efficient.\",\n      \"duration\": \"15 minutes\"\n    }\n  ],\n  \"category\": \"Programming\",\n  \"topic\": \"Python\",\n  \"level\": \"Basic\",\n  \"duration\": \"1 hour\"\n}\n```\n"},
          ],
        },
      ],
    });
  
//     const result = await chatSession.sendMessage("INSERT_INPUT_HERE");
//     console.log(result.response.text());
//   }
  