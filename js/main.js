//Main js
$(document).ready( function() {
    // Icon set
    const icons = [
        {
          name: 'cat',
          prefix: 'fa-',
          type: 'animal',
          family: 'fas',
        },
        {
          name: 'crow',
          prefix: 'fa-',
          type: 'animal',
          family: 'fas',
        },
        {
          name: 'dog',
          prefix: 'fa-',
          type: 'animal',
          family: 'fas',
        },
        {
          name: 'dove',
          prefix: 'fa-',
          type: 'animal',
          family: 'fas',
        },
        {
          name: 'dragon',
          prefix: 'fa-',
          type: 'animal',
          family: 'fas',
        },
        {
          name: 'horse',
          prefix: 'fa-',
          type: 'animal',
          family: 'fas',
        },
        {
          name: 'hippo',
          prefix: 'fa-',
          type: 'animal',
          family: 'fas',
        },
        {
          name: 'fish',
          prefix: 'fa-',
          type: 'animal',
          family: 'fas',
        },
        {
          name: 'carrot',
          prefix: 'fa-',
          type: 'vegetable',
          family: 'fas',
        },
        {
          name: 'apple-alt',
          prefix: 'fa-',
          type: 'vegetable',
          family: 'fas',
        },
        {
          name: 'lemon',
          prefix: 'fa-',
          type: 'vegetable',
          family: 'fas',
        },
        {
          name: 'pepper-hot',
          prefix: 'fa-',
          type: 'vegetable',
          family: 'fas',
        },
        {
          name: 'user-astronaut',
          prefix: 'fa-',
          type: 'user',
          family: 'fas',
        },
        {
          name: 'user-graduate',
          prefix: 'fa-',
          type: 'user',
          family: 'fas',
        },
        {
          name: 'user-ninja',
          prefix: 'fa-',
          type: 'user',
          family: 'fas',
        },
        {
          name: 'user-secret',
          prefix: 'fa-',
          type: 'user',
          family: 'fas',
        },
    ];

    const container = $('.icons');

    const colors = ['blue', 'orange', 'purple'];

    const coloredIcon = colorIcon(icons, colors);
    console.log(coloredIcon);
    printIcons(coloredIcon, container);

    //Select types
    const types = getType(icons);
    const select = $('#type');

    genOption(types, select);

    //Select event change
    select.change(() => {
        const selected = select.val();
        console.log(selected);

        const filteredIcons = filterIcons(coloredIcon, selected);
        printIcons = (filteredIcons, container);
    });
});

//Function print icons
function printIcons (icons, container) {

    container.html('');

    icons.forEach((icon) => {
        const {family, prefix, name, color} = icon;

        const html = `<div class="icon">
        <i class="${family} ${prefix}${name}" style="color: ${color}"></i>
        <div class="title">${name}</div>
    </div>`

    container.append(html);

    });
}

//Function colored icons
function colorIcon(icons, colors) {
    const types = getType(icons);
    console.log(types);

    const coloredIcon = icons.map((icon) => {
        const indexType = types.indexOf(icon.type);
        
        return {
            ...icon,
            color: colors[indexType]
        }
    });

    return coloredIcon;
}

//Function type category
function getType(icons) {
    const types = [];

    icons.forEach((icon) => {
        if (! types.includes(icon.type)) {
            types.push(icon.type);
        }
    });

    return types;
}

//Function generate option
function genOption(types, select) {
    types.forEach((option) => {
        select.append(`<option value="${option}">${option}</option>`);
    });
};

//Function filter icon
function filterIcons(coloredIcon, selected) {

    if (selected === 'all') {
        return coloredIcon;
    }

    const filtered = coloredIcon.filter((icon) => {
        return icon.type === selected;
    });

    return filtered;
};