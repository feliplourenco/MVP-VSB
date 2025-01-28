import { Editor } from "./components/Editor";
import Sidebar from "./components/SideBar";

function App() {
  return (
    <div className="min-h-screen p-8 text-zinc-900 bg-gradient-to-r from-blue-100 via-blue-300 to-blue-500">
      <div className="bg-white w-[1100px] mx-auto rounded-xl min-h-[700px] shadow-sm border border-black/20 overflow-hidden grid grid-cols-[16rem_1fr]">
      <div className="flex-grid">
        <Sidebar/>
        </div>
        <main className="p-4">
          <Editor />
          
        </main>
      </div>
    </div>
  );
}

export default App;
