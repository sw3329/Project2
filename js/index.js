var MARGIN_SIDES = 10;
var MARGIN_BOTTOM = 10;
var TEXTAREA_HEIGHT = 150;
var TEXT_MAP = new Map();
var TEXT_MARGIN = 5;
var TEXT_LINE_SPACING = 5;
var next;
var roomImage;
var jungImage;
var currentScene;

var   Scenes = {
    sceneOne: {
        Image: "img/boyroom.png",
        Image1: "img/emptyImage.png",
      text: " The reason why you can't say your fluctuating emotions directly is because you experienced your first love. ",
      next: "sceneTwo"
    },
    sceneTwo: {
        Image: "img/boyroom.png",
        Image1: "img/jung.png",
      text: " (The boy is rummaging something..) ",
      next: "sceneThree"
    },
    sceneThree: {
        Image: "img/boyroom.png",
        Image1: "img/jung.png",
      text: " (Sigh, the class is about to start soon.. I need a help)  ",
      next: "sceneFour"
    },
    sceneFour: {
        Image: "img/boyroom.png",
        Image1: "img/jung.png",
      text: " (Maybe.. I need to go to another class to borrow the textbook) ",
      next: "sceneFive"
    },
    sceneFive: {
        Image: "img/boyroom.png",
        Image1: "img/jung.png",
      text: " (Moving towards to other class) ",
      next: "sceneSix"
    },
    sceneSix: {
        Image: "img/boyroom.png",
        Image1: "img/jung.png",
      text: " (There's a girl maybe I can ask to borrow..) ",
      next: "sceneSeven"
    },
    sceneSeven: {
        Image: "img/boyroom.png",
        Image1: "img/jung2.png",
      text: " (h..hi..?) ",
      next: "sceneEight"
    },
    sceneEight: {
        Image: "img/boyroom.png",
        Image1: "img/jung2.png",
      text: " C.. can I borrow your textbook..? My class is about to start soon.. so.. if you don't really mind.. ",
      next: "sceneNine"
    },
    sceneNine: {
        Image: "img/boyroom.png",
        Image1: "img/jung.png",
      text: " ..? ",
      next: "sceneTen"
    },
    sceneTen: {
        Image: "img/boyroom.png",
        Image1: "img/jung.png",
      text: " (The girl went somewhere) ",
      next: "sceneEleven"
    },
    sceneEleven: {
        Image: "img/boyroom.png",
        Image1: "img/jung.png",
      text: " (shit.. maybe I shouldn't ask.. I would look very weird..) ",
      next: "sceneTwelve"
    },
    sceneTwelve: {
        Image: "img/boyroom.png",
        Image1: "img/girl1.png",
      text: " Hey ",
      next: "sceneThirteen"
    },
    sceneThirteen: {
        Image: "img/boyroom.png",
        Image1: "img/girl5.png",
      text: " This? ",
      next: "sceneFourteen"
    },
    sceneFourteen: {
        Image: "img/boyroom.png",
        Image1: "img/jung.png",
      text: " Huh? ",
      next: "sceneFifteen"
    },
    sceneFifteen: {
        Image: "img/boyroom.png",
        Image1: "img/girl5.png",
      text: " (She readily handed over her textbook) ",
      next: "sceneSixteen"
    },
    sceneSixteen: {
        Image: "img/boyroom.png",
        Image1: "img/girl1.png",
      text: " You asked for the textbook. I just need it back before the next class ",
      next: "sceneSeventeen"
    },
    sceneSeventeen: {
        Image: "img/boyroom.png",
        Image1: "img/jung2.png",
      text: " O..of course! Yes, Yes, Thank you! ",
      next: "sceneEighteen"
    },
    sceneEighteen: {
        Image: "img/boyroom.png",
        Image1: "img/jung.png",
      text: " (Strangely, I just borrowed a book from a stranger, but I felt.. great for some reason) ",
      next: "sceneNineteen"
    },
    sceneNineteen: {
        Image: "img/boyroom.png",
        Image1: "img/jung.png",
      text: " (And at the same time, I couldn't concentrate in class..) ",
      next: "sceneTwenty"
    },
    sceneTwenty: {
        Image: "img/boyroom.png",
        Image1: "img/emptyImage.png",
      text: " (Few minutes later..) ",
      next: "sceneTwentyOne"
    },
    sceneTwentyOne: {
        Image: "img/boyroom.png",
        Image1: "img/jung2.png",
      text: " (H..hey..! thanks for borrowing for me..!) ",
      next: "sceneTwentyTwo"
    },
    sceneTwentyTwo: {
        Image: "img/boyroom.png",
        Image1: "img/girl2.png",
      text: " (No problem, by the way, what class are you in?) ",
      next: "sceneTwentyThree"
    },
    sceneTwentyThree: {
        Image: "img/boyroom.png",
        Image1: "img/jung2.png",
      text: " (I.. I am right next to your class) ",
      next: "sceneTwentyFour"
    },
    sceneTwentyFour: {
        Image: "img/boyroom.png",
        Image1: "img/jung2.png",
      text: " (Oh ya? Alright. I will reach to you whenever I don't have a textbook) ",
      next: "sceneTwentyFifth"
    },
    sceneTwentyFifth: {
        Image: "img/boyroom.png",
        Image1: "img/girl1.png",
      text: " (Great, no worries, absolutely!) ",
      next: "sceneTwentySix"
    },
    sceneTwentySix: {
        Image: "img/boyroom.png",
        Image1: "img/jung.png",
      text: " (I felt.. something.. different..) ",
      next: "sceneTwentySeven"
    },
    sceneTwentySeven: {
        Image: "img/boyroom.png",
        Image1: "img/jung.png",
      text: " (I couldn't describe my emotional feeling at that time.. maybe I knew it.. but..) ",
      next: "sceneTwentyEight"
    },
    sceneTwentyEight: {
        Image: "img/boyroom.png",
        Image1: "img/jung.png",
      text: " (I foolishly visited her again and again.. whenever that specific class starts..) ",
      next: "sceneTwentyNine"
    },
    sceneTwentyNine: {
        Image: "img/boyroom.png",
        Image1: "img/jung.png",
      text: " (I already had mine for the class. Just.. I liked the time for a short conversation) ",
      next: "sceneThirty"
    },
    sceneThirty: {
        Image: "img/boyroom.png",
        Image1: "img/emptyImage.png",
      text: " (One day..) ",
      next: "sceneThirtyOne"
    },
    sceneThirtyOne: {
        Image: "img/boyroom.png",
        Image1: "img/girl2.png",
      text: " (Hey, why do you come here so often to borrow books?) ",
      next: "sceneThirtyThree"
    },
    sceneThirtyThree: {
        Image: "img/boyroom.png",
        Image1: "img/girl2.png",
      text: " (She looked little bit angry.. I felt nervous..) ",
      next: "sceneThirtyFour"
    },
    sceneThirtyFour: {
        Image: "img/boyroom.png",
        Image1: "img/jung2.png",
      text: " (Haha.. I kept forgot to bring the book.. I will make sure to bring tomorrow..!) ",
      next: "sceneThirtyFive"
    } ,   
    sceneThirtyFive: {
        Image: "img/boyroom.png",
        Image1: "img/girl5.png",
      text: " (She borrowed me a book with a frown) ",
      next: "sceneThirtySix"
    },   
    sceneThirtySix: {
        Image: "img/boyroom.png",
        Image1: "img/girl2.png",
      text: " (Make sure you bring it before the next class. Don't bring it late like last time) ",
      next: "sceneThirtySeven"
    },   
    sceneThirtySeven: {
        Image: "img/boyroom.png",
        Image1: "img/jung2.png",
      text: " (Of course! I will!) ",
      next: "sceneThirtyEight"
    },   
    sceneThirtyEight: {
        Image: "img/boyroom.png",
        Image1: "img/jung.png",
      text: " (As usual, I was on my way to return the textbook to her after class..) ",
      next: "sceneThirtyNine"
    },   
    sceneThirtyNine: {
        Image: "img/boyroom.png",
        Image1: "img/jung.png",
      text: " (I could see her talking to someone else outside the window and enjoying herself very much) ",
      next: "sceneFourty"
    },   
    sceneFourty: {
        Image: "img/boyroom.png",
        Image1: "img/jung3.png",
      text: " (The man she was talking to looked tall and handsome) ",
      next: "sceneFourtyOne"
    },   
    sceneFourtyOne: {
        Image: "img/boyroom.png",
        Image1: "img/jung.png",
      text: " (..for a moment, I felt nauseous and a strange sense of incompatibility) ",
      next: "sceneFourtyTwo"
    },   
    sceneFourtyTwo: {
        Image: "img/boyroom.png",
        Image1: "img/jung.png",
      text: " (I couldn't go in front of her and return the book and sneaked it out on her desk.) ",
      next: "sceneFourtyThree"
    },   
    sceneFourtyThree: {
        Image: "img/boyroom.png",
        Image1: "img/jung.png",
      text: " (And after that day... I avoided to meet her.) ",
      next: "sceneFourtyFour"
    },   
    sceneFourtyFour: {
        Image: "img/boyroom.png",
        Image1: "img/endCredit.png",
      text: " - the end - ",
      next: null
    }
};



//TODO: refactor: maybe make canvas and context global?

function drawTextAreaBackground(canvas){
    let textArea_width = canvas.width - (MARGIN_SIDES * 2);
    
    let textArea_x = MARGIN_SIDES;
    let textArea_y = canvas.height - TEXTAREA_HEIGHT - MARGIN_BOTTOM;


    let ctx = canvas.getContext('2d');
    //background area
    ctx.fillStyle = 'rgba(0, 0, 0, 1)';
    
    ctx.fillRect(textArea_x, textArea_y, textArea_width, TEXTAREA_HEIGHT);

    //border
    ctx.beginPath();
    ctx.lineWidth = "5";
    ctx.strokeStyle = "black";
    ctx.rect(textArea_x, textArea_y, textArea_width, TEXTAREA_HEIGHT);  
    ctx.stroke();
}

function drawText(canvas, text){

    let ctx = canvas.getContext("2d");
    ctx.font = "30px verdana";
    ctx.fillStyle = '#ffffff';

    let textLineHeight = ctx.measureText(text).fontBoundingBoxAscent + TEXT_LINE_SPACING;
    let canvasHeight = canvas.height;
    let canvasWidth = canvas.width;
    
    createTextObjectIfNeeded(text, ctx, textLineHeight, canvasWidth);

    let textObj = TEXT_MAP.get(text);
    let paragraph = textObj.paragraphs[textObj.paraIndex];

    //draw everything before current line
    for(let i = 0; i < textObj.lineIndex; i++){
        drawTextLine(paragraph[i], ctx, i, canvasHeight, textLineHeight);
    }

    //draw current line
    let partialText = paragraph[textObj.lineIndex].substring(0, textObj.charIndex + 1)
    drawTextLine(partialText, ctx, textObj.lineIndex, canvasHeight, textLineHeight);
}

function drawTextLine(text, ctx, lineIndex, canvasHeight, textLineHeight){
    ctx.fillText(
        text, 
        MARGIN_SIDES + TEXT_MARGIN , //X
        canvasHeight - TEXTAREA_HEIGHT - MARGIN_BOTTOM + ((lineIndex + 1) * textLineHeight)); //Y
}

function createTextObjectIfNeeded(text, ctx, textLineHeight, canvasWidth){
    let maxLines = Math.floor(TEXTAREA_HEIGHT / textLineHeight)
    let maxTextWidth = canvasWidth - (MARGIN_SIDES * 2) - (TEXT_MARGIN * 2);


    if(!TEXT_MAP.has(text)){

        let textObject = new Object;
        TEXT_MAP.set(text, textObject);

        textObject.charIndex = 0;
        textObject.lineIndex = 0;
        textObject.paraIndex = 0;

        textObject.paragraphs = generateParagraphs(text, ctx, maxLines, maxTextWidth);
    }
}


function generateParagraphs(text, ctx, maxLines, maxTextWidth){

    let textSplits = text.split(" ");
    let lineText = "" + textSplits[0];

    let paragraph = new Array();
    let currLineIndex = 0;
    
    
    let paragraphArray = new Array();
    let PA_index = 0;


    for(let i = 1; i < textSplits.length; i++){

        let nextWord = textSplits[i];
        let tempText = lineText + " " + nextWord;
        let tempMesure = ctx.measureText(tempText);
        

        if(tempMesure.width > maxTextWidth){
            if(currLineIndex > maxLines - 1){
                //make new paragraph and new line
                paragraphArray[PA_index++] = paragraph;
                paragraph = new Array(maxLines);

                currLineIndex = 0;
                paragraph[currLineIndex++] = lineText;
                lineText = "" + nextWord;
                
                
            }else{
                //make new line
                paragraph[currLineIndex++] = lineText;
                lineText = "" + nextWord;
                
            }
        }else{
            lineText += " " + nextWord;
        }
    }
    paragraph[currLineIndex] = lineText;
    paragraphArray[PA_index] = paragraph;

    return paragraphArray;
}

function drawTextArea(canvas, text){
    drawTextAreaBackground(canvas);
    drawText(canvas, text)
}

function drawImages(canvas){
    let ctx = canvas.getContext("2d");
    ctx.drawImage(roomImage, 0, 0);
    ctx.drawImage(jungImage, 75, 0);
}

function draw(){
    let canvas = document.getElementById('VScreen');
    drawImages(canvas);
    drawTextArea(canvas, currentScene.text);
}

function load(){
    roomImage = new Image();
    jungImage = new Image();
    currentScene = Scenes. sceneOne;
    roomImage.src = currentScene.Image;
    jungImage.src = currentScene.Image1;
    
    roomImage.addEventListener('load', e1 => {
        jungImage.addEventListener('load', e2 => {
            setKeybinds();
        
        });
    });

}

function setKeybinds(){

    window.addEventListener("keydown", function(event) {
        if (event.defaultPrevented) {
          return; // Do nothing if event already handled
        }
      
        switch(event.code) {
          case "KeyZ":
            draw();
            paragraphAdvance();

            break;
        }
        // Consume the event so it doesn't get handled twice
        event.preventDefault();
      }, true);

}
 

function paragraphAdvance(){
    console.log(next);
    let textObj = TEXT_MAP.get(currentScene.text);
    console.log(currentScene.text);
    let paragraphs = textObj.paragraphs;
    console.log(textObj);

    let paraIndex = textObj.paraIndex;
    let lineIndex = textObj.lineIndex;
    let charIndex = textObj.charIndex;
    

    if(charIndex + 1 >= paragraphs[paraIndex][lineIndex].length ){
       
        if(lineIndex +1 >= paragraphs[paraIndex].length){
  
           
           //new paragraph and new line
           textObj.charIndex = 0;
           textObj.lineIndex = 0;
           textObj.paraIndex++;
    
        let newScene = currentScene.next;
        currentScene = Scenes[newScene];

           roomImage.src = currentScene.Image;
           jungImage.src = currentScene.Image1;
            textObj = TEXT_MAP.get(currentScene.text);
         paragraphs = textObj.paragraphs;


         paraIndex = textObj.paraIndex;
        lineIndex = textObj.lineIndex;
        charIndex = textObj.charIndex;
        
        }else{
             //new line
             textObj.charIndex = 0;
             textObj.lineIndex++;
         

        }
    }else{
        //NO new paragraph OR new line
        textObj.charIndex++;

        
    }
}
// const handleNextScene = () => {
//    roomImage.src = currentScene.Image;
//     jungImage.src = currentScene.Image1;
//     draw();
//   }
  

load();