let i = 0;
let text1 = "كابوريتي العبيتة";
let text2 = "انهردة مميز اوي عشان هو يوم عيد ميلاد اجمل واحدة فالدنيا دي كلها";
let text3 = "كل سنة وانت طيبة";
let speed = 100;
var ok = 0;

function typeWriter(text, para) {
	if (i < text.length) {
		document.getElementById(para).innerHTML += text.charAt(i);
		i++;
		speed = Math.random() * 50 + 100;
	} else {
		i = 0;  // Reset index for the next text
		ok++;   // Move to the next text
	}
}

var typeInterval = setInterval(function() {
	if (ok == 0) {
		typeWriter(text1, "txt1");
	} else if (ok == 1) {
		typeWriter(text2, "txt2");
	} else if (ok == 2) {
		typeWriter(text3, "txt3");
	} else if (ok == 3) {
		clearInterval(typeInterval);
	}
}, 100);