import "./styles.css";
import SimpleCC from "./Components/ClassComponent/SimpleCC";
import SimpleFC from "./Components/FunctionalComponent/SimpleFC";
import HelloCC from "./Components/ClassComponent/HelloCC";
import HelloFC from "./Components/FunctionalComponent/HelloFC";
import StateCC from "./Components/ClassComponent/StateCC";
import StateFC from "./Components/FunctionalComponent/StateFC";
import AdvancedSatetFC from "./Components/ClassComponent/AdvancedSatetFC";
import WithJSX from "./Components/FunctionalComponent/WithJSX";
import WithoutJSX from "./Components/FunctionalComponent/WithoutJSX";
import PropsFC from "./Components/FunctionalComponent/PropsFC";
import ParentComponent from "./Components/ClassComponent/ParentComponent";
import ListCC from "./Components/ClassComponent/ListCC";
import MystyledFC from "./Components/FunctionalComponent/css/MystyledFC";
import ConditionalRenderingFC from "./Components/FunctionalComponent/ConditionalRenderingFC";
import DelFC from "./Components/FunctionalComponent/DelFC";
import SimpleForm from "./Components/FunctionalComponent/forms/SimpleForm";

export default function App() {
  return (
    <div className="App">
      <h1>Tuto Ecco : React basics</h1>

      <DelFC title="Simple Component">
        <SimpleCC />
        <SimpleFC />
      </DelFC>

      <DelFC title="Props">
        <HelloFC name="Soufiane" />
        <HelloCC name="Abdelilah" />
        <PropsFC name="Karima">Text between tags start and end</PropsFC>
      </DelFC>

      <DelFC title="JS vs JSX">
        <WithJSX />
        <WithoutJSX />
      </DelFC>

      <DelFC title="State">
        <StateCC />
        <StateFC />
      </DelFC>

      <DelFC title="Advanced State in Class Component">
        <AdvancedSatetFC maxCount="5" />
      </DelFC>

      <DelFC title="Components communication">
        <ParentComponent />
      </DelFC>

      <DelFC title="List">
        <ListCC />
      </DelFC>

      <DelFC title="CSS Style">
        <MystyledFC />
      </DelFC>

      <DelFC title="Conditional Rendering">
        <ConditionalRenderingFC />
      </DelFC>

      <DelFC title="Forms">
        <SimpleForm />
      </DelFC>
    </div>
  );
}
