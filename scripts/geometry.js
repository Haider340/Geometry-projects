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

    // calculation....

    const Area = 0.5 * base * height;
    console.log('The area of the triangle is:', Area);

    // disaplay the area...

    const triangleArea = document.getElementById('triangle-area');
    triangleArea.innerText = Area;
}
function calculateRectengular() {

    // width vale...

    const rectengularWidthInput = document.getElementById('rectangle-width');
    const rectengularWidthText = rectengularWidthInput.value;
    const width = parseFloat(rectengularWidthText);
    console.log(width);
    // length value..

    const rectengularLengthInput = document.getElementById('rectangle-length');
    const rectengularLengthText = rectengularLengthInput.value;
    const length = parseFloat(rectengularLengthText);
    console.log(length);

    // calculation

    const Area = width * length;
    console.log('The area of the rectengular is:', Area);

    // display the area...

    const rectengularArea = document.getElementById('rectengular-area');
    rectengularArea.innerText = Area;
}

function calculateParallelogram(){

    // base vale...

    const ParallelogramBaseInput = document.getElementById('Parallelogram-base');
    const ParallelogramBaseText = ParallelogramBaseInput.value;
    const base = parseFloat(ParallelogramBaseText);
    console.log(base);

    // height value..

    const ParallelogramHeightInput = document.getElementById('Parallelogram-height');
    const ParallelogramHeightText = ParallelogramHeightInput.value;
    const height = parseFloat(ParallelogramHeightText);
    console.log(height);

    // calculation....

    const Area = base * height;
    console.log('The area of the triangle is:', Area);

    // disaplay the area...

    const ParallelogramArea = document.getElementById('Parallelogram-area');
    ParallelogramArea.innerText = Area;
}
function calculateRhombus(){

    // base vale...

    const RhombusBaseInput = document.getElementById('Rhombus-base');
    const RhombusBaseText = RhombusBaseInput.value;
    const base = parseFloat(RhombusBaseText);
    console.log(base);

    // height value..

    const RhombusHeightInput = document.getElementById('Rhombus-height');
    const RhombusHeightText = RhombusHeightInput.value;
    const height = parseFloat(RhombusHeightText);
    console.log(height);

    // calculation....

    const Area = 0.5 * base * height;
    console.log('The area of the triangle is:', Area);

    // disaplay the area...

    const RhombusArea = document.getElementById('Rhombus-area');
    RhombusArea.innerText = Area;
}
function calculatePentagon(){

    // base vale...

    const PentagonBaseInput = document.getElementById('Pentagon-p');
    const PentagonBaseText = PentagonBaseInput.value;
    const base = parseFloat(PentagonBaseText);
    console.log(base);

    // height value..

    const PentagonHeightInput = document.getElementById('Pentagon-b');
    const PentagonHeightText = PentagonHeightInput.value;
    const height = parseFloat(PentagonHeightText);
    console.log(height);

    // calculation....

    const Area = 0.5 * base * height;
    console.log('The area of the triangle is:', Area);

    // disaplay the area...

    const PentagonArea = document.getElementById('Pentagon-area');
    PentagonArea.innerText = Area;
}
function calculateEllipse(){

    // base vale...

    const EllipseBaseInput = document.getElementById('Ellipse-a');
    const EllipseBaseText = EllipseBaseInput.value;
    const base = parseFloat(EllipseBaseText);
    console.log(base);

    // height value..

    const EllipseHeightInput = document.getElementById('Ellipse-b');
    const EllipseHeightText = EllipseHeightInput.value;
    const height = parseFloat(EllipseHeightText);
    console.log(height);

    // calculation....

    const Area = 3.14 * base * height;
    console.log('The area of the Ellipse is:', Area);

    // disaplay the area...

    const EllipseArea = document.getElementById('Ellipse-area');
    EllipseArea.innerText = Area;
}