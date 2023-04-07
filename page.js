let langFrom = document.getElementById('langForm');
let langTo = document.getElementById('langTo');
let textFrom = document.getElementById('from');
let textTo = document.getElementById('to');
let btnSubmit = document.getElementById('btn');
let icon = document.getElementById('icon');
let icon2 = document.getElementById('icon2');


icon.onclick = function(){
    let lang = langFrom.value;
    if(lang === 'ar'){
        SpeakArabic(textFrom.value , 'ar-AE');
    }else if(lang === 'en'){
        SpeakArabic(textFrom.value , 'en-US');
    }else{
        SpeakArabic(textFrom.value ,'fr-FR')
    }
}
icon2.onclick = function(){
    let lang = langTo.value;
    if(lang === 'ar'){
        SpeakArabic(textTo.value , 'ar-AE');
    }else if(lang === 'en'){
        SpeakArabic(textTo.value , 'en-US');
    }else{
        SpeakArabic(textTo.value ,'fr-FR')
    }
}

function dirotion1() {
    if(langFrom.value == 'ar'){
        textFrom.dir = 'rtl';
    }else{
        textFrom.dir = 'ltr';
    }
}
function fun(){
    if(langTo.value == 'ar'){
        textTo.dir = 'rtl';
    }else{
        textTo.dir = 'ltr';
    }
}


btnSubmit.onclick = function(){
    fetch('http://localhost:5000/translate',{
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body : JSON.stringify({text: textFrom.value , To: langTo.value})
    })
    .then(response => response.json())
    .then(data => textTo.value =data.translated)
    .catch(error => console.log(error));
}

function SpeakArabic(textAra , lang){
    var ar = new SpeechSynthesisUtterance();
    ar.text = textAra
    ar.lang = lang;
    ar.pitch = 20;
    ar.rate = 1;
    ar.voiceURI = 'native';
    ar.volume = 1000;
    speechSynthesis.speak(ar);
}
