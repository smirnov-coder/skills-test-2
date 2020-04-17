import React from "react";
import findByType from "../scripts/findComponentsByType";
import "bootstrap/dist/css/bootstrap.min.css";

/*
 * В задании требуется создать "настраиваемый компонент". Лично я понимаю под словом "настраиваемый" нечто не требующее
 * перекомпиляции или необходимости смотреть/вмешиваться в исходный код. Поэтому для таких задач
 * я использую 'React Subcomponents'. Идея принадлежит, конечно же, не мне, а широко распространена в интернете,
 * например, https://medium.com/maxime-heckel/react-sub-components-513f6679abed.
 * Я уже использовал такой подход в своих предыдущих проектах, например, 
 * https://github.com/smirnov-coder/startup-creative-agency-react-redux/blob/master/src/Web.ReactRedux/ClientApp/components/Shared/Layout/Layout.tsx
 * Поэтому скопировал оттуда.
 */

// Subcomponent с кнопками слева от input.
const LeftButtons = (props) => null;
LeftButtons.displayName = "LeftButtons";

// Subcomponent с кнопками справа от input.
const RightButtons = (props) => null;
RightButtons.displayName = "RightButtons";

/**
 * Компонент кастомного input'a, позволяющий добавлять произвольное количество кнопок слева и
 * справа от поля ввода.
 */
class InputWithButtons extends React.Component {
    static LeftButtons;
    static RigthButtons; 

    constructor(props) {
        super(props);
        // Наш кастомный input имеет состояние, он полностью управляемый React'ом.
        this.state = {
            text: ""
        };
        // Привязка контекста для методов.
        this.handleTextChange = this.handleTextChange.bind(this);
        this.setText = this.setText.bind(this);
        this.getText = this.getText.bind(this);
    }

    /**
     * Возвращает массив дочерних компонентов subcomponent'а. В каждый из дочерних компонентов будет передана ссылка
     * на родительский компонент-контейнер.
     * @param {Object} subcomponent Subcomponent, из которого извлекаются дочерние компоненты.
     * @returns {Array} Массив дочерних компонентов.
     */
    getSubcomponentChildren(subcomponent) {
        // Сохраним ссылку на родительский компонент (input) для передачи его через props во все дочерние компоненты.
        // Не будем использовать ни ref, и context. Таким образом наши контролы останутся полностью управляемыми React.
        let container = this;
        let children = [];
        if (subcomponent) {
            // Если в subcomponent'е несколько кнопок:
            if ("length" in subcomponent.props.children) {
                children = React.Children.map(subcomponent.props.children, child => 
                    // Добавим в props ссылку на родительский компонент-контейнер.
                    React.cloneElement(child, { container: container })
                );
            } else { // Или если кнопка всего одна:
                children.push(React.cloneElement(
                    subcomponent.props.children, 
                    { container: container }
                ))
            }
        }
        return children;
    }

    render() {
        let { children } = this.props;
        // Получить subcomponent'ы кнопок слева и справа. Если имеется несколько лувых или правых subcomponent'ов, то
        // берём только первый, остальные игнорируем.
        let leftButtonsSubcomponent = findByType(children, LeftButtons)[0];
        let rightButtonsSubcomponent = findByType(children, RightButtons)[0];

        // Извлечь из subcomponent'ов кнопки.
        let rightButtons = this.getSubcomponentChildren(rightButtonsSubcomponent);
        let leftButtons = this.getSubcomponentChildren(leftButtonsSubcomponent);

        return (
            <div className="input-group mb-3">
                {/* Отрисовка кнопок слева (если меются). */}
                {!leftButtonsSubcomponent ? null :
                    <div className="input-group-prepend">
                        {React.Children.map(leftButtons, (button, index) => 
                            // Незабудем про key, т.к. кнопок может быть несколько.
                            React.cloneElement(button, { key: index })
                        )}
                    </div>
                }

                {/* 
                    Обязательный к отрисовке input. Он будет в любом случае. Можно было бы пробросить props от 
                    компонента-контейнера в input, например, для подписки на событие onChange, но в задании это не оговорено. :)
                */}
                <input type="text" className="form-control" value={this.state.text} onChange={this.handleTextChange}/>
                
                {/* Отрисовка кнопок справа (если имеются). */}
                {!rightButtonsSubcomponent ? null :
                    <div className="input-group-append">
                        {React.Children.map(rightButtons, (button, index) => 
                            React.cloneElement(button, { key: index })
                        )}
                    </div>
                }
            </div>
        );
    }

    handleTextChange(event) {
        this.setState({ text: event.target.value });
    }

    /**
     * Устанавливает текст в поле ввода компонента.
     * @param {string} newText Текст для отображения в поле ввода.
     */
    setText(newText) {
        this.setState({ text: newText });
    }

    /**
     * Возвращает текст, отображаемый в поле ввода компонента.
     * @returns {string} Текст из поля ввода.
     */
    getText() {
        return this.state.text;
    }
}

InputWithButtons.LeftButtons = LeftButtons;
InputWithButtons.RightButtons = RightButtons;

export default InputWithButtons;