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




// let selectinputs = document.querySelectorAll(".code");


// selectinputs[0].focus();

// selectinputs.forEach((inputBox, ind) => {

//     inputBox.addEventListener("input", (e) => {
//         let currentBox = e.target.value;

//         if (currentBox === "") return;

       
//         if (ind < selectinputs.length - 1) {
//             selectinputs[ind + 1].focus();
//         }
//     });

//     inputBox.addEventListener("keydown", (e) => {
//         // move back on backspace if empty
//         if (e.key === "Backspace" && inputBox.value === "" && ind > 0) {
//             selectinputs[ind - 1].focus();
//         }
//     });

// });



let inputs = document.querySelectorAll(".code");



inputs[0].focus();

inputs.forEach((input, index) => {
    input.addEventListener("input", (e) => {
        let value = e.target.value;



        if (isNaN(value)) {
            e.target.value = "";   // FIX
            return;
        }

        if (value && index < inputs.length - 1) {
            inputs[index + 1].focus();
        }
    });

    input.addEventListener("keydown", (e) => {
        if (e.key === "Backspace" && !input.value && index > 0) {
            inputs[index - 1].focus();
        }
    });
});


































