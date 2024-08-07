import logo from './logo.svg';
import './App.css';
import Cabecera from './component/Cabecera';
import LabelNombre from './component/LabelNombre';
import Input from './component/Input';
import LabelApellidos from './component/LabelApellidos';
import LabelCorreo from './component/LabelCorreo';
import SelectSexo from './component/SelectSexo';
import SelectSexoHombre from './component/SelectSexoHombre';
import SelectSexoMujer from './component/SelectSexoMujer';
import Sexo from './component/Sexo';
import LabelPoblacion from './component/LabelPoblacion';
import SelectPoblacion from './component/SelectPoblacion';
import LabelDescripcion from './component/LabelDescripcion';
import TextArea from './component/TextArea';
import Checkbox from './component/Checkbox';
import LaberlInfo from './component/LabelInfo';
import LaberlCondiciones from './component/LabelCondiciones';
import BotonEnviar from './component/BotonEnviar';
import Footer from './component/Footer';

function App() {
  return (
    <div className="App">
      <Cabecera /> <LabelNombre /> <Input />

      <br />
      <LabelApellidos /> <Input />

      <br />
      <Sexo /> <SelectSexo /> <SelectSexoHombre /> <SelectSexo /> <SelectSexoMujer />

      <br />
      <LabelCorreo /> <Input />

      <br />
      <LabelPoblacion /> <SelectPoblacion />

      <br />
      <LabelDescripcion /> <TextArea />

      <br />
      <Checkbox /> <LaberlInfo />

      <br />
      <Checkbox /> <LaberlCondiciones />

      <br />
      <BotonEnviar />

      <br />
      <Footer />

    </div>
  );
}

export default App;
