

class WordCount extends HTMLParagraphElement {
    constructor(){
        super();
        let spanNode1 = document.getElementById('span1');
        debugger;
        console.info('from word count constructor ...');
    }
}

class TestElement extends HTMLElement {
    constructor() {
        super();
        debugger;
    }
}
customElements.define('test-element', TestElement);

customElements.define('word-count', WordCount, {
    extends: 'p'
});