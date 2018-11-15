

class CssClassManipulator {
    constructor(html){
        this.html = html
    }

    append = (valueClass) => {
        this.html.classList.add(valueClass);
    }

    replace = (newValueClass, valueClassSearch) => {
        this.html.classList.replace(valueClassSearch, newValueClass);
    }
}

export default CssClassManipulator;