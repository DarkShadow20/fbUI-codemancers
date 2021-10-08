import "./App.css";
import { PostList } from "./components/PostList";

function App() {
  return (
    <div
      className="App"
      class="p-6 items-center justify-center flex items-center flex-col mt-3 mb-5"
    >
      <PostList />
    </div>
  );
}

export default App;
