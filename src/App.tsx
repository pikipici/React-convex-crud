import Header from "./components/header";
import TaskCard from "./components/task-card";

function App() {
  const tasks = [
    {
      _id: "1",
      title: "task one",
      description: "this is task one",
      completed: false,
    },
    {
      _id: "2",
      title: "task two",
      description: "this is task two",
      completed: false,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header onAddTask={() => {}} />

      <main className="container mx-auto px-4 py-8">
        {tasks.map((task) => (
          <TaskCard task={task} />
        ))}
      </main>
    </div>
  );
}

export default App;
