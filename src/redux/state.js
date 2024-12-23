let state = {
    data: {
        techIfo: [
            { title: 'React', text: 'Основная библиотека для разработки интерфейсов' },
            { title: 'JavaScript', text: 'Язык программирования для веб-разработки' },
            { title: 'HTML5', text: 'Семантическая разметка контента' },
            { title: 'CSS3', text: 'Стилизация и анимации' },
            { title: 'Redux', text: 'Управление состоянием приложения' },
            { title: 'Адаптивный дизайн', text: 'УОптимизация под все устройства' },
        ],
        dataInfo: [
            {
                title: 'React',
                text: 'React — это JavaScript-библиотека с открытым исходным кодом для разработки пользовательских интерфейсов. Она позволяет создавать интерактивные интерфейсы, эффективно обновлять и отрисовывать только нужные компоненты при изменении данных. React может использоваться для разработки одностраничных и мобильных приложений.Его цель — предоставить высокую скорость разработки, простоту и масштабируемость.',
                url: 'https://ganeshbharti.gallerycdn.vsassets.io/extensions/ganeshbharti/react-sinppets/0.0.1/1707235564913/Microsoft.VisualStudio.Services.Icons.Default'
            },
            {
                title: 'JavaScript',
                text: 'JavaScript — это интерпретируемый язык программирования высокого уровня, который в основном используется в качестве языка сценариев для веб-разработки. С его помощью сайты делают интерактивными: добавляют всплывающие окна, анимацию, кнопки лайков и формы для отправки информации. Некоторые области применения JavaScript: Веб-сайты и веб-приложения. Практически на каждом современном сайте используют код, написанный на JS. Расширения для браузера. Небольшие простые скрипты, которые добавляют дополнительный функционал — блокируют рекламу, позволяют сохранять аудио, отправляют уведомления о новых письмах или меняют цветовую схему сайта. Мобильные приложения. Например, интерфейс для работы с облачным хранилищем, его можно написать на JavaScript и собрать в приложение с помощью специальных инструментов. Серверная часть сайтов и программ. Язык программирования JavaScript можно использовать для написания любых сервисов: чатов, компьютерных программ и даже нейросетей. Для этого к нему нужно подключить движок Node.js. Игры. На JS можно писать несложные браузерные игры.',
                url: 'https://avatars.dzeninfra.ru/get-zen_doc/53963/pub_651011ddc419e8692e91c5dc_65101281d67f4c757ed51043/scale_1200'
       
            },
            {
                title: 'HTML5',
                text: 'HTML5 (HyperText Markup Language) — это пятая версия языка для структурирования и представления содержимого всемирной паутины. Цель разработки HTML5 — улучшение уровня поддержки мультимедиа-технологий с одновременным сохранением обратной совместимости, удобочитаемости кода для человека и простоты анализа для парсеров. В HTML5 реализовано множество новых синтаксических особенностей: элементы video, audio и canvas, возможность использования SVG и математических формул, новые элементы, такие как section, article, header и nav. HTML5 применяется в двух направлениях: в качестве обновлённой версии языка HTML и в роли функциональной платформы, на которой можно строить веб-приложения различной сложности. Над развитием HTML5 работает W3C (Консорциум Всемирной Паутины) — независимая международная организация, которая определяет стандарт HTML5 в виде спецификаций.',
                url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/HTML5_logo_black.svg/2048px-HTML5_logo_black.svg.png'
            },
            {
                title: 'CSS3',
                text: 'CSS3 (англ. Cascading Style Sheets 3 — каскадные таблицы стилей третьего поколения) — активно разрабатываемая спецификация CSS. Представляет собой формальный язык, реализованный с помощью языка разметки. Главная особенность CSS3 — возможность создавать анимированные элементы без использования JavaScript, поддержка линейных и радиальных градиентов, теней, сглаживания и прочего. Преимущественно используется как средство описания и оформления внешнего вида веб-страниц, написанных с помощью языков разметки HTML и XHTML, но может также применяться к любым XML-документам, например, к SVG или XUL. В отличие от предыдущих версий, спецификация разбита на модули, разработка и развитие которых идёт независимо.',
                url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/1024px-CSS3_logo.svg.png'
            },
            {
                title: 'Redux',
                text: 'Redux — это инструмент для управления состоянием данных и пользовательским интерфейсом в приложениях JavaScript с большим количеством сущностей. Представляет собой библиотеку JavaScript. Название читается как «Редакс» и составлено из двух слов: reduce и flux. Reduce — это функция, которая приводит большую структуру данных к одному значению. Flux — архитектура приложения, при которой данные передаются в одну сторону. Инструмент основан на этих двух понятиях, поэтому они вынесены в название. Обычно Redux используется в связке с фреймворками для JavaScript: React, TypeScript, Vue, Angular и другими. Реже он бывает нужен для написания кода на чистом JS. Имеет открытый исходный код и доступен бесплатно.',
                url: 'https://u-mix.ru/redux.jpeg'
            },
            {
                title: 'Адаптивный дизайн',
                text: 'Адаптивный веб-дизайн — это подход к созданию веб-сайтов, который позволяет им корректно отображаться на различных устройствах и экранах. Цель адаптивного веб-дизайна — универсальность отображения содержимого веб-сайта для различных устройств. Один сайт может работать на смартфоне, планшете, ноутбуке и телевизоре с выходом в интернет. Как это работает: дизайнер создаёт несколько версий страницы, обычно от двух до шести. Во время верстки фронтенд-разработчик или верстальщик с помощью HTML и CSS задает для каждой версии условия отображения: разрешение, ширину экрана, вертикальную или горизонтальную ориентацию. При загрузке определяются параметры устройства пользователя. Страница отображается в зависимости от них. Основные принципы адаптивного дизайна: гибкая сетка, гибкие изображения, медиа-запросы. Они позволяют элементам страницы плавно изменять свои размеры и пропорции.',
                url: 'https://avatars.mds.yandex.net/get-ydo/1540809/2a00000168996dfc1bc2ad03d17d2e2e37c1/diploma'
            },
        ]
    }
}

export default state