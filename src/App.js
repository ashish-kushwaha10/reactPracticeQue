import "./styles.css";
// import HeroVillains from "./projects/heroVillains.js";
// import IncDec from "./projects/incDec";
// import CategoryFilter from "./projects/categoryFilter.js";
// import ToDoes from "./projects/toDoItem";
import Weather from "./projects/weather";
const characters = {
  heroes: [
    {
      name: "IRON MAN",
      powers: "Genius,Rich,IRON Suit",
      costume: "IRON MAN suit"
    },
    {
      name: "ANT MAN",
      powers: "Ant man suit",
      costume: "Ant man suit"
    },
    {
      name: "Spider-man",
      powers: "Reflexes,Speed,Spider-Sense",
      costume: "Spider Suit"
    },
    {
      name: "Bat man",
      powers: "Rich,Bat suit",
      costume: "Bat Suit"
    },
    {
      name: "Super-man",
      powers: "Superhuman strength,Reflexes,Speed",
      costume: "Superman  Suit"
    }
  ],
  villains: [
    {
      name: "Thanos",
      powers: "Superhuman strength,Reflexes,Speed,",
      costume: "Metal armor"
    },
    {
      name: "Venom",
      powers: "shapeshifting and camouflage Symbiotes autonomous defense",
      costume: "black suit"
    },
    {
      name: "Kang the conqueror",
      powers: "time travel, can access all tech",
      costume: "kang armor"
    },
    {
      name: "Joker",
      powers: "clownlike appearance and sick humour",
      costume: "Joker costume"
    }
  ]
};
const itemList = [
  { id: 1, name: "Apple", category: "Fruit" },
  { id: 2, name: "Carrot", category: "Vegetable" },
  { id: 3, name: "Banana", category: "Fruit" },
  { id: 4, name: "Broccoli", category: "Vegetable" }
];
const todoItems = [
  { id: 1, task: "Writing 1-page poem", isDone: true },
  { id: 2, task: "Gym", isDone: false },
  { id: 3, task: "Shopping", isDone: false },
  { id: 4, task: "Standup call", isDone: true }
];
export default function App() {
  return (
    <div className="App">
      <h1>Hello </h1>
      {/* <HeroVillains char={characters}></HeroVillains> */}
      {/* <IncDec char={characters}></IncDec> */}
      {/* <ToDoes todoItems={todoItems}></ToDoes> */}
      <Weather todoItems={todoItems}></Weather>
    </div>
  );
}
