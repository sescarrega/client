import {BrowserRouter, Route, Routes} from "react-router-dom"
import Dashboard from "./views/Dashboard";
import Display from "./views/Display";
import { Update } from "./views/Update";
import ViewTest from "./views/ViewTest";

function App() {
  return (
    <div >
      <BrowserRouter>
      <h1> Full stack demo</h1>
      <Routes>
        <Route path="/test" element={<ViewTest/>}></Route>
        <Route path="/dash" element={<Dashboard/>}></Route>
        <Route path="/display/:id" element={<Display/>}> </Route> 
        {/*  this is the path that links the product page to the display page */}
        <Route path="/display/:id/edit" element={<Update/>}> </Route>
        <Route path="*" element={<><h1> Error</h1></>}> </Route>


        </Routes>


      </BrowserRouter>
    </div>
  );
}

export default App;
