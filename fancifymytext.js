function makeBigger() {
    alert("Hello, world!");
    document.getElementById("textArea").style.fontSize = "24pt";
}

function changeTextStyle() {
    const textArea = document.getElementById("textArea");
    const fancyRadio = document.getElementById("fancy");

    alert("Style change!");

    if (fancyRadio.checked) {
        textArea.style.fontWeight = "bold";
        textArea.style.color = "blue";
        textArea.style.textDecoration = "underline";
    } else {
        textArea.style.fontWeight = "normal";
        textArea.style.color = "black";
        textArea.style.textDecoration = "none";
    }
}

function mooText() {
    const textArea = document.getElementById("textArea");
    let text = textArea.value;

    text = text.toUpperCase();

    let sentences = text.split('.');

    for (let i = 0; i < sentences.length; i++) {
        let words = sentences[i].trim().split(' ');

        if (words.length > 0) {
            words[words.length - 1] += "-Moo";
        }

        sentences[i] = words.join(' ');
    }

    textArea.value = sentences.join('. ') + '.'; 
}