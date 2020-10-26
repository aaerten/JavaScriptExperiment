const btn = document.querySelector(".talk");
const content = document.querySelector(".content");

//Messages
const greetings = [
    'Im not shure for today',
    'Im good thank you for asking',
    'Leave me alone sir'

];

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();
recognition.lang="en";


recognition.onstart = function(){

}

recognition.onresult = function(e){
    const current = event.resultIndex;

const transcript = event.results[current][0].transcript;
content.textContent= transcript;
readOutLoud(transcript);
}

//listener for button
btn.addEventListener('click',()=>{
    recognition.start();
})

function readOutLoud(message){
    const speech = new SpeechSynthesisUtterance();

    speech.text='i dont know what you said'

    if(message.includes('how are you')){
        const finalText = greetings[Math.floor(Math.random()*greetings.length)];
        speech.text=finalText;
    };
    //speech.text=message;
    speech.volume=1;
    speech.rate =1;
    speech.pitch=1;

    window.speechSynthesis.speak(speech);
}