function genName() {
    var boyNameChecked = document.getElementById('boy-name').checked;
    var girlNameChecked = document.getElementById('girl-name').checked;
    var firstName;
    var middleName;
    var lastName = document.getElementById('last-name').value;
    if (!lastName){
        alert('Please do us the great honor of entering your last name.');
        return;
    }
    if (boyNameChecked) {
        firstName = randElem(boyNames);
        middleName = randFilteredElem(boyNames,firstName);
    } else if (girlNameChecked){
        firstName = randElem(girlNames);
        middleName = randFilteredElem(girlNames,firstName);
    } else {
        alert('Please select "Boy Name" or "Girl Name"')
        return;
    }
    var display = document.getElementById('baby-name');
    display.innerText = firstName + ' ' + middleName + ' ' + lastName;  
}

function changeBackground(){
    var boyNameChecked = document.getElementById('boy-name').checked;
    var girlNameChecked = document.getElementById('girl-name').checked;      
    
    if (boyNameChecked) {
        document.body.style.backgroundColor = 'lightblue';
    } else if (girlNameChecked) {
        document.body.style.backgroundColor = 'lightpink';
    }
}

function randElem(arr){
    return arr[Math.floor(Math.random()*arr.length)];
}

function randFilteredElem(arr,filter){
    var elem = randElem(arr);
    while (elem === filter){
        elem = randElem(arr);
    }
    return elem;
}

