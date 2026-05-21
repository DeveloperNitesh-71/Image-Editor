const filters = {
    Brightness: {
        value: 100,
        min: 0,
        max: 200,
        unit: "%"
    },
    Contrast: {
        value: 100,
        min: 0,
        max: 200,
        unit: "%"
    },
    Exposure: {
        value: 100,
        min: 0,
        max: 200,
        unit: "%"
    },
    Saturation: {
        value: 100,
        min: 0,
        max: 200,
        unit: "%"
    },
    HueRotation: {
        value: 100,
        min: 0,
        max: 360,
        unit: "deg"
    },
    Blur: {
        value: 0,
        min: 0,
        max: 20,
        unit: "%"
    },
    Grayscale: {
        value: 0,
        min: 0,
        max: 100,
        unit: "%"
    },
    Sepia: {
        value: 0,
        min: 0,
        max: 100,
        unit: "%"
    },
    Opacity: {
        value: 100,
        min: 0,
        max: 100,
        unit: "%"

    },
    Invert: {
        value: 100,
        min: 0,
        max: 100,
        unit: "%"
    },
}

const imageCanvas = document.querySelector('#image-canvas')
const imageInput = document.querySelector('#image-input')
const canvasCtx = imageCanvas.getContext("2d")

const filterContainer = document.querySelector('.filters')

function createFilterElement(name, unit = "%", value, min, max) {
    const div = document.createElement('div')
    div.classList.add('filter')

    const input = document.createElement('input')
    input.type = "range"
    input.min = min
    input.max = max
    input.value = value
    input.id = name

    const p = document.createElement('p')
    p.innerHTML = name
    div.appendChild(p)
    div.appendChild(input)
    
    return div
}

Object.keys(filters).forEach(filter => {
    value = filters[filter].value
    min = filters[filter].min
    max = filters[filter].max
    unit = filters[filter].unit
    const filterElement = createFilterElement(filter, unit, value, min, max)
    filterContainer.appendChild(filterElement)
    
})

imageInput.addEventListener('change', (event) =>{
    const file = event.target.files[0]
    const imagePlaceholder = document.querySelector('.placeholder')
    imagePlaceholder.style.display = "none"
    const img = new Image()
    img.src = URL.createObjectURL(file)
    img.onload = () => {
        imageCanvas.width = img.width
        imageCanvas.height = img.height
        canvasCtx.drawImage(img,0,0)
    }
    
})