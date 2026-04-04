//your JS code here. If required.

// let selectinputs = document.querySelectorAll(".code");

// selectinputs[0].focus;

// selectinputs.forEach((inputBox,ind)=>{
// 	inputBox.addEventListener("input",(e)=>{
// 	let currentBox = e.target.value;
// 		if(currentBox == ""){
// 			return 
// 		}
// 		if(ind<selectinputs.length-1){
// 			selectinputs[ind+1].focus;
// 		}
		
// 	})
// 	selectinputs.addEventListener("keydown", (e) => {
//         if (e.key === "Backspace" && !se.value && ind > 0) {
//             inputs[index - 1].focus();
//         }
//     });
// })




let selectinputs = document.querySelectorAll(".code");

// focus first input
selectinputs[0].focus();

selectinputs.forEach((inputBox, ind) => {

    inputBox.addEventListener("input", (e) => {
        let currentBox = e.target.value;

        if (currentBox === "") return;

       
        if (ind < selectinputs.length - 1) {
            selectinputs[ind + 1].focus();
        }
    });

    inputBox.addEventListener("keydown", (e) => {
        // move back on backspace if empty
        if (e.key === "Backspace" && inputBox.value === "" && ind > 0) {
            selectinputs[ind - 1].focus();
        }
    });

});






































