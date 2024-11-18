import { Task } from "../types";

interface TaskCardProps {
  task: Task;
}

export default function TaskCard({ task }: TaskCardProps) {
  return (
    <div
      className={`bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 p-6 ${
        task.completed ? "border-l-4 border-green-500" : ""
      }`}
    >
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <h3
            className={`text-xl font-semibold text-gray-800 mb-2 ${
              task.completed ? "line-through text-gray-500" : ""
            }`}
          >
            {task.title}
          </h3>
          <p
            className={`text-gray-600 ${
              task.completed ? "line-through text-gray-400" : ""
            }`}
          >
            {task.description}
          </p>
        </div>

        <button
          onClick={() => {}}
          className={`ml-4 p-2 rounded-full ${
            task.completed
              ? "bg-green-100 text-green-600"
              : "bg-gray-100 text-gray-600"
          }`}
        >
          {/* {task.completed ? <CircleCheck> : <CircleX /> } */}
        </button>
      </div>

      <div className="flex justify-end space-x-3">
        <button onClick={() => {}} className="text-blue-500 font-medium">
          Edit
        </button>
        <button onClick={() => {}} className="text-red-500 font-medium">
          Delete
        </button>
      </div>
    </div>
  );
}
