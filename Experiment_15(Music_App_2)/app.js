function sequencer(){
    const kick = new Tone.Player("./drums/kick-electro01.wav").toMaster();
    const snare = new Tone.Player("./drums/snare-lofi02.wav").toMaster();
    const tom = new Tone.Player("./drums/tom-short.wav").toMaster();
    let index = 0;


Tone.Transport.scheduleRepeat(repeat,"8n");
Tone.Transport.start();

function repeat(){
    let step = index % 8;
    let kickInputs = document.querySelector('.kick input:nth-child(${step + 1})');
    let snareInputs = document.querySelector('.snare input:nth-child(${step+1})');
    let tomInputs = document.querySelector('.tom input:nth-child(${step+1})');

    if(kickInputs.checked){
        kick.start();
    }
    if(snareInputs.checked){
        snare.start();
    }
    if(tomInputs.checked){
        tom.start();
    }
    index++;
}
}

sequencer();