const ListTodo = ({ todos, setTodo, setIndexEdit }) => {
  const deleteTodo = (currentIndex) => {
    const newTodo = todos.filter((todo, index) => index !== currentIndex);
    setTodo(newTodo);
  };

  const editTodo = (currentIndex) => {
    setIndexEdit(currentIndex);
  };

  // ✅ Tambahan baru: fungsi doneTodo
  const doneTodo = (currentIndex) => {
    const newTodo = todos.map((todo, index) => {
      if (index === currentIndex) {
        return { ...todo, isDone: !todo.isDone }; // toggle
      }
      return todo;
    });
    setTodo(newTodo);
  };

  return (
    <>
      <div className="w-[300px] h-[500px] bg-black mx-auto text-white">
        <ol className="ml-[20px]">
          {todos.map((todo, index) => {
            return (
              <li key={index} className="m-[20px]">
                -{" "}
                <span className={todo.isDone ? "line-through" : ""}>
                  {todo.title}
                </span>{" "}
                <button
                  onClick={() => editTodo(index)}
                  className="bg-yellow-600 px-[10px] py-[5px] mr-[10px]"
                >
                  Edit
                </button>
                <button
                  onClick={() => deleteTodo(index)}
                  className="bg-red-600 px-[10px] py-[5px] mr-[10px]"
                >
                  Hapus
                </button>
                {/* ✅ Tambahan baru: tombol Done */}
                <button
                  onClick={() => doneTodo(index)}
                  className="bg-green-600 px-[10px] py-[5px]"
                >
                  {todo.isDone ? "Undo" : "Done"}
                </button>
              </li>
            );
          })}
        </ol>
      </div>
    </>
  );
};

export default ListTodo;