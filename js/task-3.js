function getElementWidth(content, padding, border) {
    const totalWidth = 
        parseFloat(content) + parseFloat(padding) + parseFloat(border);
    return totalWidth;
}