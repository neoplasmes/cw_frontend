import "./ChapterTemplate.css"
export const Fourth = () =>{
    return(
        <div className="chapter-root">
            <h2>Глава 4. ISO, выдержка и диафрагма. </h2>
            <p>Вы достигли экватора данного курса, неплохо. Наверное, он действительно вам понравился. Но не будем отвлекаться. Нас сегодня еще ждет крайне важная тема.
                Когда я первый раз взял в руки фотоаппарат, то сразу же переключился с автоматического режима на мануальный(ручной) и удивился обилию различных настроек. К сожалению, вынужден вас предупредить, что съемка в автоматическом режиме на зеркальном/беззеркальном фотоаппарате - это смертный грех. Даже камера за миллион рублей будет снимать в автоматическом режиме, как смартфон за двадцать тысяч. И то не факт, что она вообще дотянет до уровня смартфона. Вы же не думали, что все будет так легко, правда? В данной главе я постараюсь объяснить вам такие фундаментальные вещи, как ISO, выдержка и диафрагма, ибо в ручном режиме все значения этих параметров вы контролируете сами.
            </p>
            <h3>ISO.</h3>
            <p>ISO определяет то, насколько ваша камера чувствительна к свету. Чем ниже значение этого параметра, тем менее восприимчива матрица, в то время как высокое значение позволяет снимать в очень темных условиях. То есть, в отличие от выдержки и диафрагмы, вы не управляете количеством проходящего света, а изменяете чувствительность самого сенсора.</p>
            <p>Во времена, когда фотография была только аналоговой и снимать мы могли исключительно на плёнку, чувствительность выбиралась только один раз: в момент выбора этой самой пленки. Теперь же мы можем поменять её в любой момент простой сменой настроек в фотокамере.</p>
            <p>Стопы для ISO: 100 – низкая чувствительность, 12800 – высокая. Каждое новое значение повышает экспозицию кадра в два раза.</p>
            <p>100 – 200 – 400 – 800 – 1600 – 3200 – 6400 – 12800</p>
            <p>При увеличении чувствительности на фотографии появляется шум. Его количество индивидуально для разных фотоаппаратов. Некоторые камеры позволяют получать изображения достойного качества при ISO 6400, в то время как другие на этих значениях пасуют. В любом случае, если вы хотите получить максимально чистое изображение, старайтесь снимать при низкой чувствительности. Другое дело, что это далеко не всегда возможно.</p>
            <h3>Диафрагма.</h3>
            <p>Диафрагма – это отверстие с изменяемым диаметром внутри объектива, через которое свет попадает непосредственно на светочувствительный сенсор матрицы или пленки. Принцип работы диафрагмы схож с принципом работы человеческого зрачка: чем шире он открыт, тем больше света попадает на сетчатку глаза. Верно и обратное: чтобы ограничить количество света, скажем, в яркий солнечный день, зрачок заметно сужается.</p>
            <p>Настройки диафрагмы называются стопами. Вот типичный пример шага диафрагмы объектива.
            </p>
            <p>f/1.4 – f/2 – f/2.8 – f/4 – f/5.6 – f/8 – f/11 – f/16 – f/22</p>
            <p>Самое маленькое число соответствует максимально открытой диафрагме и наибольшему количеству пропускаемого света. С каждым следующим стопом количество проходящего света уменьшается ровно в два раза. Соответственно, количество света, получаемого сенсором камеры при диафрагме f/2.8, будет в четыре раза меньше, чем при диафрагме f/1.4. Таким образом экспозиция контролируется с помощью диафрагмы.</p>
            <p>Помимо контроля поступающего света диафрагма отвечает ещё за одну важную вещь в фотографии – глубину резкости.</p>
            <p>Глубина резкости определяет, как сильно передний и задний планы размыты относительно объекта, на который вы наводите фокус. Если делать фотографию при открытой диафрагме, то вы получите очень сильное размытие объектов не в фокусе. Это называется малой глубиной резкости. Если же снимать с закрытой диафрагмой, то глубина резко отображаемого пространства заметно увеличится.</p>
            <p>Контроль глубины резкости важен в разных жанрах фотографии. При съемке пейзажей или интерьеров чаще всего необходимо получить в зоне фокуса всё изображение. С другой стороны, самый простой способ отделить объект съемки от заднего плана – это размыть его. Этот приём часто используется в портретной съемке. Для съемки портретов чаще всего используют диафрагму f/1.2-f/1.8, в то время как для съемки пейзажей оптимально f/5.6-f/8, так как при данных значениях диафрагмы получается достичь наибольшей резкости без искажения изображений.</p>
            <div className="photo-collage-3">
                <img src="http://localhost:3500/media/courses/photography/4/4-1.jpg" alt="диафрагма f/1.2" />
                <img src="http://localhost:3500/media/courses/photography/4/4-2.jpg" alt="диафрагма f/1.8" />
                <img src="http://localhost:3500/media/courses/photography/4/4-3.jpg" alt="значение диафрагмы f/8" />
            </div>
            <h3>Выдержка.</h3>
            <p>Выдержка (или время экспонирования) определяет, как долго свет будет попадать на матрицу фотоаппарата или пленку.</p>
            <p>Затвор камеры открывается только на время экспонирования фотографии, позволяя свету достигать матрицы в течение строго определенного времени. Соответственно, чем дольше происходит экспонирование, тем светлее получается фотография.
                Контроль выдержки работает по схожей с диафрагмой системой стопов. Каждое следующее значение уменьшает количество получаемого света ровно в два раза.
            </p>
            <p>1/2 – 1/4 – 1/8 – 1/15 – 1/30 – 1/60 – 1/125 – 1/250</p>
            <p>За 1/4 секунды матрица камеры получит лишь половину света, какого она бы получила при экспонировании в 1/2 секунды (при одинаковых настройках выдержки и диафрагмы).</p>
            <p>Короткая выдержка позволяет нам «замораживать» кадр, в то время как длинная – размывать движущиеся объекты. Наиболее выдающегося результата в плане творческой фотографии можно добиться как раз с помощью длинной выдержки.</p>
            <div className="photo-collage-2">
                <img src="http://localhost:3500/media/courses/photography/4/4-4.jpg" alt="выдержка 191 секунды" />
                <img src="http://localhost:3500/media/courses/photography/4/4-5.jpg" alt="выдержка 4 секунды" />
            </div>
            <p>Слева значение выдержки 191 секунда. Справа значение выдержки 4 секунды.</p>
            <div className="photo-collage-2">
                <img src="http://localhost:3500/media/courses/photography/4/4-6.jpg" alt="выдержка 0.4 секунды" />
                <img src="http://localhost:3500/media/courses/photography/4/4-7.jpg" alt="выдержка 2.5 секунды" />
            </div>
            <p>Слева значение выдержки 0.4 секунды. Справа значение выдержки 2.5 секунды. </p>
            <p>В свое время на просторах сети я наткнулся на прекрасное визуальное отображение того, как работает золотая троица экспозиции. Делюсь этой шпаргалкой с вами:</p>
            <div className="photo-collage-1">
                <img src="http://localhost:3500/media/courses/photography/4/4-8.jpeg" alt="3 параметра выдержки" />
            </div>
            <p>Каждый из этих параметров выполняет свою определенную функцию, но одновременно с этим влияет на два других параметра. С опытом вы поймете, как находить баланс между данными значениями.</p>
            <p>Интересный факт: объектив Carl Zeiss Planar 50 мм F/0.7 был разработан в 1966 году для действительно грандиозной цели. НАСА с его помощью сделало фотографии обратной стороны Луны. Carl Zeiss Planar 50 мм F/0.7 – один из самых светосильных объективов (если не самый светосильный) из когда-либо созданных. Всего изготовили лишь десять экземпляров этого объектива: один сохранился у Carl Zeiss, шесть штук приобрело агентство НАСА, и три купил режиссёр Стэнли Кубрик. Planar 50 мм F/0.7 позволил Кубрику снимать сцены, освещенные лишь свечами в фильме «Барри Линдон».
            </p>
            <div className="photo-collage-1">
                <img src="http://localhost:3500/media/courses/photography/4/4-9.jpg" alt="объектив" />
            </div>
            <p>Напоследок замечу, что данная глава вышла не такой уж большой, но это не означает, что она неважная. Без понимания механизма работы ISO, выдержки и диафрагмы получить по-настоящему красивые фотографии вы не сможете. Поверьте мне на слово. Далее, как и обычно, вам нужно будет пройти тест. Дерзайте.</p>
        </div>

    )
}
export const fourthTest=[
    {
        text:"Что определяет параметр ISO в фотографии?",
        answers: [
            "Чувствительность матрицы к свету",
            "Цветовую гамму изображения",
            "Фокусное расстояние объектива"
        ]

    },
    {
        text:"Что определяет параметр выдержки в фотографии? ",
        answers: [
            "Количество света, попадающего на матрицу",
            "Скорость срабатывания вспышки",
            "Время, в течение которого открыт затвор"
        ]

    },
    {
        text:"Что определяет параметр диафрагмы в фотографии?",
        answers: [
            "Угол обзора",
            "Оптическое увеличение изображения",
            "Диаметр отверстия в объективе, через которое проходит свет"
        ]

    },
    {
        text:"Как повысить яркость фотографии при использовании настройки ISO?",
        answers: [
            "Уменьшить значение ISO",
            "Увеличить значение ISO",
            "Не использовать настройку ISO"
        ]

    },
    {
        text:"Как влияет увеличение параметра выдержки на фотографию?",
        answers: [
            "Увеличивается яркость изображения",
            "Уменьшается количество света, попадающего на матрицу",
            "Увеличивается глубина резкости"
        ]

    },
    {
        text:" Что происходит с глубиной резкости при уменьшении значения диафрагмы?",
        answers: [
            "Увеличивается",
            "Уменьшается",
            "Не изменяется"
        ]

    },
    {
        text:"Что означает значение ISO 100?",
        answers: [
            "Максимальная чувствительность",
            "Минимальная чувствительность",
            "Стандартная чувствительность"
        ]

    },
    {
        text:"Как повлиять на глубину резкости фотографии при увеличении параметра диафрагмы?",
        answers: [
            "Уменьшить",
            "Увеличить"
        ]

    }
]