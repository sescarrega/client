import {BrowserRouter, Route, Routes} from "react-router-dom"
import ViewTest from "./views/ViewTest";

function App() {
  return (
    <div >
      <BrowserRouter>
      <h1> Full stack demo</h1>
      <Routes>
        <Route path="/test" element={<ViewTest/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
