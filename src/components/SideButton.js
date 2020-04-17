import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

/**
 * Компонент боковой кнопки для кастомного input. Через props можно задать отображаемый текст
 * на кнопке и обработчик нажатия на кнопку. В обработчик нажатия передаётся родительский кастомный input,
 * автоматически передаваемый через props и позволяющий манипулировать текстом input'а, а также стандартный
 * объект события.
 */
export default class SideButton extends React.Component {
    render() {
        let { text, onClick, container } = this.props;
        return (
            <button className="btn btn-outline-secondary" type="button" onClick={(event) => onClick(container, event)}>
                {text}
            </button>
        );
    }
}