# игра жизнь
____
### [правила игры](https://ru.wikipedia.org/wiki/%D0%98%D0%B3%D1%80%D0%B0_%C2%AB%D0%96%D0%B8%D0%B7%D0%BD%D1%8C%C2%BB)
</br>
игра создана на React </br>
каждый элемент предаставляет собой отдельный DIV</br></br>
в приложении разделена логика и отображение компонентов
*hook useGrid возвращает сл фукнции :
 *nextStepAuto - сл шаг(меняет значение клеток по правилам игры)
 *setButtonGridDefaulth - устанавливает сетку по умолчанию
 *createRandomGrid - заполняет сетку случайными значениями
*функиця getNeighbors надодит "соседей" иследуемой клекти
*hook useInterval -используется для автоматической игры ( с передаными параметрами задержки)
