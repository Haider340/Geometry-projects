function calculateTriangle() {
    // base vale...
    const triangleBaseInput = document.getElementById('triangle-base');
    const triangleBaseText = triangleBaseInput.value;
    const base = parseFloat(triangleBaseText);
    console.log(base);
    // height value..
    const triangleHeightInput = document.getElementById('triangle-height');
    const triangleHeightText = triangleHeightInput.value;
    const height = parseFloat(triangleHeightText);
    console.log(height);

    const Area = 0.5 * base * height;
    console.log('The area of the triangle is:', Area);

    const triangleArea = document.getElementById('triangle-area');
    triangleArea.innerText = Area;
}
function calculateRectengular() {
    // width vale...
    const rectengularWidthInput = document.getElementById('triangle-width');
    const rectengularWidthText = rectengularWidthInput.value;
    const width = parseFloat(rectengularWidthText);
    console.log(width);
    // length value..
    const rectengularLengthInput = document.getElementById('triangle-length');
    const rectengularLengthText = rectengularLengthInput.value;
    const length = parseFloat(rectengularLengthText);
    console.log(length);

    const Area = width * length;
    console.log('The area of the rectengular is:', Area);

    const rectengularArea = document.getElementById('rectengular-area');
    rectengularArea.innerText = Area;
}