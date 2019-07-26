class Link {
    constructor(url, caption, section) {
        this.url = url;
        this.caption = caption;
        this.section = section;
    }
}

let step = 0;

function updateFrame(n) {
    if (n !== undefined) {
        step = n;
    }
    document.getElementsByTagName('iframe')[0].src = links[step].url;
    document.getElementsByClassName('header')[0].innerText = `${chapters[links[step].section]}. ${links[step].caption}`;
}

function back() {
    if (step > 0) {
        step--;
        updateFrame();
    }
}

function next() {
    if (step < links.length) {
        step++;
        updateFrame();
    }
}

function buildMenu() {
    const menu = document.getElementsByClassName('left-menu')[0];
    let ul;
    let currentSection = -1;
    for (let i = 0; i < links.length; i++) {
        if (currentSection !== links[i].section) {
            currentSection = links[i].section;

            const header = document.createElement('h4');
            header.appendChild(document.createTextNode(chapters[currentSection]));
            menu.appendChild(header);

            ul = document.createElement('ul');
            menu.appendChild(ul);
        }
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.appendChild(document.createTextNode(links[i].caption));
        a.setAttribute('href', '#');
        a.onclick = () => {
            updateFrame(i)
        };
        li.appendChild(a);
        ul.appendChild(li);
    }
}

function init() {
    updateFrame();
    buildMenu();
}

const chapters = ['Селекторы', 'График', 'Данные', 'Гео-данные'];
const links = [];

links.push(new Link('//jsfiddle.net/hlops/d8e9kuv1/0/embedded/', 'Enter', 0));
links.push(new Link('//jsfiddle.net/hlops/d8e9kuv1/1/embedded/js,result/', 'Enter после Enter', 0));
links.push(new Link('//jsfiddle.net/hlops/d8e9kuv1/6/embedded/js,result/', 'Обновление без Enter', 0));
links.push(new Link('//jsfiddle.net/hlops/d8e9kuv1/2/embedded/js,result/', 'Exit', 0));
links.push(new Link('//jsfiddle.net/hlops/d8e9kuv1/4/embedded/js,result/', 'Правильное обновление данных', 0));
links.push(new Link('//jsfiddle.net/hlops/d8e9kuv1/8/embedded/js,result/', 'Merge', 0));


links.push(new Link('//jsfiddle.net/hlops/87skyf1t/0/embedded/', 'SVG', 1));
links.push(new Link('//jsfiddle.net/hlops/87skyf1t/1/embedded/js,result/', 'Добавим данных', 1));
links.push(new Link('//jsfiddle.net/hlops/87skyf1t/4/embedded/js,result/', 'Масштабирование', 1));
links.push(new Link('//jsfiddle.net/hlops/87skyf1t/5/embedded/js,result/', 'Нарисуем оси', 1));
links.push(new Link('//jsfiddle.net/hlops/87skyf1t/13/embedded/result,js/', 'viewBox', 1));
links.push(new Link('//jsfiddle.net/hlops/87skyf1t/14/embedded/result,js/', 'Развернем ось Y', 1));
links.push(new Link('//jsfiddle.net/hlops/87skyf1t/15/embedded/result,js/', 'Анимация delay', 1));
links.push(new Link('//jsfiddle.net/hlops/87skyf1t/17/embedded/result,js/', 'Анимация duration & ease', 1));
links.push(new Link('//jsfiddle.net/hlops/87skyf1t/19/embedded/result,js,css/', 'Цвета', 1));

links.push(new Link('//jsfiddle.net/hlops/87skyf1t/23/embedded/result,js/', 'Цены на виски', 2));

links.push(new Link('//jsfiddle.net/hlops/tr0xhen6/4/embedded/result,js,html/', 'New York - London', 3));
