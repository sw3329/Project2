var jungImage;
var roomImage;

function draw (){
	let canvas = document.getElementById('VNScreen');
	drawImages(canvas);

}

//Gauranteed at this point to have imgaes loaded

function drawImages(canvas){
	let ctx = canvas.getContext("2d");
	ctx.drawImages(roomImage, 0, 0);
	ctx.drawImages(jungImage, 300, 0);

}

function load(){
	jungImage = new Image ();
	roomImage = new Image ();

	jungImage.src = 'img/jung.png';
	roomImage.src = 'img/classroom.png';

	jungImage.addEventListener('load', e1 => {
		roomImage.addEventListener('load', e2 => {
			draw();

		});
	});

}

load();