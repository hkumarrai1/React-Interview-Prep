export default function Todo({ items, onDelete, onToggleComplete }) {
  return (
    <>
      <ul className="todo-list">
        {items.map((item) => (
          <li
            key={item.id}
            className="todo-item"
            style={{ backgroundColor: item.completed ? "green" : "white" }}
          >
            <span>{item.todo}</span>
            <button className="delete-btn" onClick={() => onDelete(item.id)}>
              Delete
            </button>
            <button
              className="complete-btn"
              onClick={() => onToggleComplete(item.id)}
            >
              {item.completed ? "Undo" : "Complete"}
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}
