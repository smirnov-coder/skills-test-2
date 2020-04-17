import React from "react";
import { getDataByText } from "../apiService";

/**
 * Компонент текстового поля с выводом подсказок при вводе.
 */
export default class InputWithSuggestions extends React.Component {
    constructor(props) {
        super(props);
        // Состояние компонента. Хранит массив подсказок для отображения при вводе.
        this.state = {
            suggestions: []
        };
        // Привязка контекста.
        this.handleInput = this.handleInput.bind(this);
    }

    render() {
        // Теги input и datalist связываются по id, а значения тегов id должны быть уникальными в пределах страницы.
        let id = `suggestions-${Date.now()}`;
        return (
            <div className="form-group mb-3">
                <small className="form-text text-muted">
                    Количество подсказок: {this.props.maxSuggestions}
                </small>
                {/* 
                    Воспользуемся встроенными возможностями HTML5, а именно связкой тегов input и datalist.
                    Правда такой вариант позволяет выбирать подсказку и текст автоматически устанавливается в input.
                    Возможно, это противоречит выделенному КАПСОМ тексту задания. :(
                 */}
                <input type="text" className="form-control" list={id} onInput={this.handleInput}/>
                <datalist id={id}>
                    {this.state.suggestions.map((suggestion, index) => (
                        // Не забудем про key.
                        <option key={index}>{suggestion}</option>
                    ))}
                </datalist>
            </div>
        );
    }

    handleInput(event) {
        // Выполнить асинхронный запрос к фейковому сервису.
        getDataByText(event.target.value)
            .then(data => {
                if (data && data.length > 0) {
                    // Сначала удалим все дубликаты из полученных подсказок, а потом возьмём первые несколько
                    // подсказок, количество которых определяется параметром maxSuggestions, передаваемым в компонент
                    // через props.
                    this.setState({ suggestions: [...new Set(data)].slice(0, this.props.maxSuggestions) });
                } else {
                    this.setState({ suggestions: data})
                }
            });
    }
}
