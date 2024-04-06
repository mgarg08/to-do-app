import "./App.css";

const todos = [
  {
    id: 1,
    title: "Buy groceries",
    description: "Milk, eggs, bread, fruits",
    due_date: 10 - 4 - 24,
    priority: "High",
    completed: false,
  },
  {
    id: 2,
    title: "Finish report",
    description: "Complete the quarterly report for the team",
    due_date: "2024-04-15",
    priority: "Medium",
    completed: false,
  },
  {
    id: 3,
    title: "Call mom",
    description: "Wish her a happy birthday",
    due_date: "2024-04-05",
    priority: "Low",
    completed: true,
  },
];

export default function App() {
  return (
    <div className="App">
      <TodoList />
    </div>
  );
}

function TodoList() {
  return (
    <div className="container">
      <h2>My Todo</h2>
      <SearchBar />
      <TodoItem items={todos} />
    </div>
  );
}

function SearchBar() {
  return (
    <>
      <form className="search">
        <input type="text" placeholder="add item..." />
        <button>Add</button>
      </form>
    </>
  );
}

function TodoItem({ items }) {
  return (
    <div className="list-Items">
      {items.map((item) => (
        <Item item={item} key={item.id} />
      ))}
    </div>
  );
}

function Item({ item }) {
  return (
    <div className="items">
      <div>{item.title}</div>
      <button>❌</button>
    </div>
  );
}
