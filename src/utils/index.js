export const isEmptyString = obj => obj === null || obj === undefined || (typeof obj == 'string' && obj.trim() === '');

export const isValidNumber = obj => obj !== null && !isNaN(parseFloat(obj)) && !isNaN(Number(obj));

export const isEmptyList = obj => !Array.isArray(obj) || (Array.isArray(obj) && obj.length === 0);

export const isEmptyObject = obj => obj === null || typeof obj !== 'object' || Object.keys(obj).length === 0;

export const getPathValue = (obj, accumulatedPath, defaultValue) => {
    if (obj == null || typeof obj !== 'object' || typeof accumulatedPath !== 'string') return defaultValue;

    const path = accumulatedPath.split('.');
    let tempObj = obj;

    for (let accessor of path) {
        if (tempObj === null || typeof tempObj !== 'object') return defaultValue;
        else if (accessor in tempObj) tempObj = tempObj[accessor];
        else return defaultValue;
    }
    return tempObj === null ? defaultValue : tempObj;
};

export const handleError = response => {
    if (!response.ok) throw Error(response.statusText);
    return response;
}

export const getColours = count => {
    let colours = [], i = 0;

    while (i < count) {
        const colour = getRandomColor();
        if (!isColourPresent(colour, colours)) {
            colours.push(colour);
            i++;
        }
    }

    return colours
};

export const getRandomColor = () => `rgb(${getRandomValue(255)}, ${getRandomValue(255)}, ${getRandomValue(255)})`;

export const getRandomValue = value => Math.floor(Math.random() * value);

export const isColourPresent = (colour, colours) => !isEmptyList(colours.filter(col => col === colour));

export const isValidColour = colour => {
    if (isEmptyString(colour)) return false;
    const style = new Option().style;
    style.color = colour;
    if (isHexColour(colour)) {
        // convert hex to rgb as style.color gets converted to rgb
        let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(colour);
        colour = `rgb(${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)})`;
    }
    return style.color === colour;
};

export const isHexColour = colour => /^#([0-9A-F]{3}){1,2}$/i.test(colour);

export const hexToRGB = colour => {
    if (!isValidColour(colour)) return null;

    let shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i; // checks for 3 digit hex value (#0f0) and converts them to 6 digit hex value
    colour = colour.replace(shorthandRegex, (m, r, g, b) => r + r + g + g + b + b);

    let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(colour);
    return result ? `rgb(${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)})` : null;
};

export const rgbToHex = colour => {
    if (!isValidColour(colour)) return null;

    if (isHexColour(colour)) return colour;

    // Turn colour rgb(r, g, b) into rgb(r g b)
    let sep = colour.indexOf(', ') > -1 ? ', ' : ' ';

    // Turn colour rgb(r g b) into [r, g, b]
    colour = colour.substr(4).split(')')[0].split(sep);

    // + converts string to number
    let r = (+colour[0]).toString(16), g = (+colour[1]).toString(16), b = (+colour[2]).toString(16);

    if (r.length === 1) r = '0' + r;
    if (g.length === 1) g = '0' + g;
    if (b.length === 1) b = '0' + b;

    return '#' + r + g + b;
};

export const isColourDark = colour => {
    if (!isValidColour(colour)) return false;

    if (!isHexColour(colour)) colour = rgbToHex(colour);

    const is3digitHex = /^#[0-9A-F]{3}$/i.test(colour);
    if (is3digitHex) colour = colour.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, (m, r, g, b) => r + r + g + g + b + b);

    let rgb = parseInt(colour.substring(1), 16);
    let r = (rgb >> 16) & 0xff;
    let g = (rgb >> 8) & 0xff;
    let b = (rgb >> 0) & 0xff;

    let luma = 0.2126 * r + 0.7152 * g + 0.0722 * b; // per ITU-R BT.709
    return luma < 100;
};

export const copyTextToClipboard = (text = '') => {
    if (!text) return;

    let textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.style.top = '0';
    textArea.style.left = '0';
    textArea.style.position = 'fixed';
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    
    try {
        let copySuccess = document.execCommand('copy');
        let message = copySuccess ? 'successful' : 'unsuccessful';
        console.log('Copying text was ' + message);
    } catch (err) {
        console.error(err);
    }
    
    document.body.removeChild(textArea);
}