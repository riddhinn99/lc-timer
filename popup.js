document.addEventListener('DOMContentLoaded', function(){
    document.querySelector('button').addEventListener('click', doClick, false)

    function doClick(){
        chrome.tabs.query({currentWindow: true, active: true}, 
            function(tabs){
                chrome.tabs.sendMessage(tabs[0].id, 'hi', setTimer)
        })
    }

    function setTimer(response){
        const div = document.createElement('div');
        div.textContent = `${response.msg} message`;
        document.body.appendChild(div);
        setInterval(myTimer, 1000);
        function myTimer(){
            let now = new Date();
            let nowStr = now.toLocaleTimeString();
            const div2 = document.createElement('div');
            div.textContent = `${nowStr} time`;
            document.body.appendChild(div2);
        }

        
    }

}, false)


/*function displayCurrentTime(){
    let now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    let total = hours+":"+minutes+":"+seconds;
    return total;
    }
    
    function displayTime(){
        setInterval(displayCurrentTime, 1000);
    }
    
    
    let time = displayTime();
    document.getElementById("demo").innerHTML = time;*/