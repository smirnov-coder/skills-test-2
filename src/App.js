import React from 'react';
import './App.css';
import InputWithButtons from "./components/InputWithButtons";
import SideButton from './components/SideButton';
import InputWithSuggestions from './components/InputWithSuggestions';

function App() {
  return (
    <div>
      <section className="section-controls">
        <h1>Контролы с кнопками</h1>
        {/* <Контрол с 1 кнопкой справа.
              При нажатии на кнопку очищается содерживое в контроле. /> */}
        <InputWithButtons>
          <InputWithButtons.RightButtons>
            <SideButton text="Очистить" onClick={input => input.setText("")}/>
          </InputWithButtons.RightButtons>
        </InputWithButtons>

        {/* <Контрол с 2 кнопками справа.
              При нажатии на первую кнопку очищается содерживое в контроле.
              При нажатии на вторую кнопку текст в контроле меняется на 'Hello world!'. /> */}
        <InputWithButtons>
          <InputWithButtons.RightButtons>
            <SideButton text="Очистить" onClick={input => input.setText("")}/>
            <SideButton text="Приветствовать" onClick={input => input.setText("Hello world!")}/>
          </InputWithButtons.RightButtons>
        </InputWithButtons>

        {/* <Контрол с 1 кнопкой справа и 1 кнопкой слева.
              При нажатии на кнопку справа вызывается alert с текстом в контроле.
              При нажатии на кнопку слева проверяем, что в контроле введено число и если это так, то выводим число через alert /> */}
        <InputWithButtons>
          <InputWithButtons.RightButtons>
            <SideButton text="Показать текст" onClick={input => showText(input.getText())}/>
          </InputWithButtons.RightButtons>
          <InputWithButtons.LeftButtons>
            <SideButton text="Показать число" onClick={input => showNumber(input.getText())}/>
          </InputWithButtons.LeftButtons>
        </InputWithButtons>
      </section>

      <section className="section-controls">
        <h1>Контролы с подсказками</h1>
        {/* <Контрол с выводом подсказок при наборе текста. Максимально кол-во посдказок - 3 /> */}
        <InputWithSuggestions maxSuggestions={3} />

        {/* <Контрол с выводом подсказок при наборе текста. Максимально кол-во посдказок - 10 /> */}
        <InputWithSuggestions maxSuggestions={10} />
      </section>
    </div>
  );
}

function showText(value) {
  if (value)
    alert(value);
}

function showNumber(value) {
  if (value && !isNaN(Number(value))) 
    alert(Number(value));
}

export default App;
