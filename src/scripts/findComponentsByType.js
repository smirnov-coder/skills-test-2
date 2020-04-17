import * as React from "react";

/**
 * Выполняет поиск компонента в коллекции компонентов. 
 * @param children Коллеция компонентов.
 * @param component Искомый компонент.
 * @returns Коллекция всех вхождений искомого компонента в коллекции.
 */
export default function (children, component) {
    const result = [];
    // Тип компонента на основе displayName или name, смотря что имеется.
    const type = [component.displayName] || [component.name];
    React.Children.forEach(children, (child) => {
        const childType = child && child.type && (child.type.displayName || child.type.name);
        if (type.indexOf(childType) !== -1) {
            result.push(child);
        }
    });
    return result;
};