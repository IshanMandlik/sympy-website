document.getElementById('getData').addEventListener('click', getData);
var objectKeys = null;

function getData(){
    var exp = document.getElementById('input-exp').value;
    let uri = 'http://ravigitte.pythonanywhere.com/solve/?exp='+exp;
    let url = encodeURI(uri);
    
    fetch(url).then((res) => res.json()).then((data) => {

        let output = `<h2 class="mb-4">Steps : </h2>`;
        
        data.forEach(function(step){
            
            objectKeys = Object.keys(step);
            
            output +=   `<div class="card card-body mb-3">
                        <h3>${step.title}</h3>`;
            
            objectKeys.forEach(function(keyValue){
                output += `<p>${keyValue} : ${step[keyValue]}</p>`;  
            })
        
            output += `</div>`;
        });
        
        document.getElementById('output').innerHTML = output;
    }).then(() => {
        getSteps();
    });
}

function getSteps() {
    var outputContent = document.getElementById('output').innerHTML,
    url = 'C:/Users/admin/Desktop/api_to_html/steps.html?output=' + encodeURIComponent(outputContent);
    document.location.href = url;
}