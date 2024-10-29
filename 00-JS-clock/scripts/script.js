let clockContainerNode = document.getElementById('clock-container');
let hoursNode = document.getElementById('hours');
let minutesNode = document.getElementById('minutes');
let secondsNode = document.getElementById('seconds');

function createDate() {
    let date = new Date();
    return date;
}

function addContent(node, content) {
    node.innerHTML += content;
}

function removeContent(node) {
    node.innerHTML = '';
}

function updateClock() {
    let now = createDate();

    removeContent(hoursNode);
    if (now.getHours() < 10) {
        addContent(hoursNode, '0' + now.getHours());  
    } else {
        addContent(hoursNode, now.getHours());  
    }

    removeContent(minutesNode);
    if (now.getMinutes() < 10) {
        addContent(minutesNode, '0' + now.getMinutes());  
    } else {
        addContent(minutesNode, now.getMinutes());  
    }

    removeContent(secondsNode);
    if (now.getSeconds() < 10) {
        addContent(secondsNode, '0' + now.getSeconds());  
    } else {
        addContent(secondsNode, now.getSeconds());  
    }    
}
setInterval(updateClock, 500);




