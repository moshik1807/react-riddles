export default function Read(){
const mathRiddles = [
  {
    level: "1",
    name: "Addition 1",
    taskDescription: "מהו 5 + 3?",
    correctAnswer: "8",
    timer: "30",
    hint: "חבר את המספרים."
  },
  {
    level: "1",
    name: "Subtraction 1",
    taskDescription: "מהו 10 - 4?",
    correctAnswer: "6",
    timer: "30",
    hint: "החסרה את המספר הקטן מהגדול."
  },
  {
    level: "1",
    name: "Multiplication 1",
    taskDescription: "מהו 2 × 6?",
    correctAnswer: "12",
    timer: "30",
    hint: "כפל מספרים קטן בגדול."
  },
  {
    level: "1",
    name: "Division 1",
    taskDescription: "מהו 12 ÷ 3?",
    correctAnswer: "4",
    timer: "30",
    hint: "חלק את המספר ליחידות שוות."
  },
  {
    level: "2",
    name: "Addition 2",
    taskDescription: "מהו 15 + 7?",
    correctAnswer: "22",
    timer: "40",
    hint: "חבר את המספרים בזהירות."
  },
  {
    level: "2",
    name: "Subtraction 2",
    taskDescription: "מהו 20 - 9?",
    correctAnswer: "11",
    timer: "40",
    hint: "החסרה את המספר הקטן מהגדול."
  },
  {
    level: "2",
    name: "Multiplication 2",
    taskDescription: "מהו 3 × 7?",
    correctAnswer: "21",
    timer: "40",
    hint: "כפל מספרים קטן בגדול."
  },
  {
    level: "2",
    name: "Division 2",
    taskDescription: "מהו 18 ÷ 2?",
    correctAnswer: "9",
    timer: "40",
    hint: "חלק את המספר בצורה שווה."
  },
  {
    level: "3",
    name: "Addition 3",
    taskDescription: "מהו 25 + 17?",
    correctAnswer: "42",
    timer: "50",
    hint: "חבר את המספרים בזהירות."
  },
  {
    level: "3",
    name: "Subtraction 3",
    taskDescription: "מהו 50 - 28?",
    correctAnswer: "22",
    timer: "50",
    hint: "החסרה את המספרים."
  },
  {
    level: "3",
    name: "Multiplication 3",
    taskDescription: "מהו 6 × 8?",
    correctAnswer: "48",
    timer: "50",
    hint: "כפל מספרים בינוניים."
  },
  {
    level: "3",
    name: "Division 3",
    taskDescription: "מהו 81 ÷ 9?",
    correctAnswer: "9",
    timer: "50",
    hint: "חלק את המספר בצורה שווה."
  },
  {
    level: "4",
    name: "Addition 4",
    taskDescription: "מהו 123 + 456?",
    correctAnswer: "579",
    timer: "60",
    hint: "חבר מספרים גדולים."
  },
  {
    level: "4",
    name: "Subtraction 4",
    taskDescription: "מהו 500 - 275?",
    correctAnswer: "225",
    timer: "60",
    hint: "החסרה מספרים גדולים."
  },
  {
    level: "4",
    name: "Multiplication 4",
    taskDescription: "מהו 12 × 12?",
    correctAnswer: "144",
    timer: "60",
    hint: "כפל מספרים זהים."
  },
  {
    level: "4",
    name: "Division 4",
    taskDescription: "מהו 144 ÷ 12?",
    correctAnswer: "12",
    timer: "60",
    hint: "חלק מספרים גדולים."
  },
  {
    level: "5",
    name: "Addition 5",
    taskDescription: "מהו 345 + 678?",
    correctAnswer: "1023",
    timer: "70",
    hint: "חבר מספרים עם שלוש ספרות."
  },
  {
    level: "5",
    name: "Subtraction 5",
    taskDescription: "מהו 1000 - 876?",
    correctAnswer: "124",
    timer: "70",
    hint: "החסרה מספרים גדולים."
  },
  {
    level: "5",
    name: "Multiplication 5",
    taskDescription: "מהו 15 × 14?",
    correctAnswer: "210",
    timer: "70",
    hint: "כפל מספרים דו-ספרתיים."
  },
  {
    level: "5",
    name: "Division 5",
    taskDescription: "מהו 210 ÷ 14?",
    correctAnswer: "15",
    timer: "70",
    hint: "חלק מספרים בינוניים."
  }
];

console.log(mathRiddles);

    return(
        <>
        <h1>Read</h1>
        <p>{JSON.stringify(mathRiddles, null, 2)}</p>
        </>
    )
}