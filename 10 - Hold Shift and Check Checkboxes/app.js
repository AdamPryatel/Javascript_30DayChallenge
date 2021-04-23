const checkBoxes=document.querySelectorAll('.inbox input[type="checkbox"]');

console.log(checkBoxes);

let lastChecked;

function handleCheck(event){
    // Check if they have shift key down
    // And chack that they are checking it
    let inBetween = false;
    if(event.shiftKey && this.checked){
        // loop over every check box
        checkBoxes.forEach(checkbox => {
            if(checkbox === this || checkbox === lastChecked){
                inBetween = !inBetween;
            }

            if(inBetween){
                checkbox.checked = true;
            }
        });
    }


    lastChecked = this;
}

checkBoxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck));