window.onload = function() { 
    document.getElementById('dropdown').addEventListener('submit', function(event){
    event.preventDefault();
    var optionSelected = document.getElementById('selection').value;
    document.getElementById('btn').onclick = console.log(`the selected option is ${optionSelected}`);
    // document.getElementById('submitBtn').onclick = redire;
    if(optionSelected === 'Phone'){
        document.getElementById('btn').onclick = document.getElementById('phoneView').style.visibility='visible'; 
        document.getElementById('btn').onclick = document.getElementById('saveBtn').style.visibility= 'visible';
    }
    else if(optionSelected === 'Tablet'){
        document.getElementById('btn').onclick = document.getElementById('tabletView').style.visibility='visible'; 
        document.getElementById('btn').onclick = document.getElementById('saveBtn').style.visibility= 'visible';
    }
    else if(optionSelected === 'Ipad'){
        document.getElementById('btn').onclick = document.getElementById('ipadView').style.visibility='visible'; 
        document.getElementById('btn').onclick = document.getElementById('saveBtn').style.visibility= 'visible';
    }
    else if(optionSelected === 'Accessories'){
        document.getElementById('btn').onclick = document.getElementById('accessoriesView').style.visibility='visible';
        document.getElementById('btn').onclick = document.getElementById('saveBtn').style.visibility= 'visible';
    }
    // document.getElementById('btn').onclick = alert("The selected photos are uploaded.");
    });
}