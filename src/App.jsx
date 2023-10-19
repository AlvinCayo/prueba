import "./App.css";
import { Name } from "./components/name";
import { Button } from "./components/button";
import { Description } from "./components/description";
import { Photo } from "./components/photo";
import { Button2 } from "./components/button2";

function App() {
  return (
    <>
      <div className="card">
        <Photo></Photo>
        <Name></Name>
        <Description></Description>
        <Button></Button>
        <Button2></Button2>
      </div>
    </>
  );
}

export default App;
